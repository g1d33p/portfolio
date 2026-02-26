from pathlib import Path
from typing import List, Dict, Any

import chromadb
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import ollama

CHROMA_DIR = Path(__file__).parent / "chroma_db"
COLLECTION_NAME = "jeevan_portfolio"

CHAT_MODEL = "llama3.1:latest"
EMBED_MODEL = "nomic-embed-text"

app = FastAPI(title="Jeevan Portfolio RAG (Local)")

# Allow Next.js dev server(s)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AskRequest(BaseModel):
    question: str
    top_k: int = 5


def get_collection():
    client = chromadb.PersistentClient(path=str(CHROMA_DIR))
    return client.get_or_create_collection(name=COLLECTION_NAME)


def embed_query(q: str) -> List[float]:
    resp = ollama.embeddings(model=EMBED_MODEL, prompt=q)
    return resp["embedding"]


def build_prompt(question: str, retrieved: List[Dict[str, Any]]) -> str:
    context_blocks = []
    for i, r in enumerate(retrieved, start=1):
        src = r["metadata"].get("source", "unknown")
        cidx = r["metadata"].get("chunk_index", -1)
        text = r["document"]
        context_blocks.append(f"[{i}] Source: {src} (chunk {cidx})\n{text}")

    context = "\n\n".join(context_blocks)

    return f"""
You are an AI assistant answering questions ABOUT the person named Jeevan Deep Borugadda (the portfolio owner).

Important perspective rules:
- When the user says "I", "me", or "my", they mean Jeevan (the portfolio owner), NOT you (the assistant).
- Never claim "I did X" as the assistant. Always say "Jeevan did X" or "Jeevan's role was X".

Grounding rules:
- Answer ONLY using the Sources below.
- If the answer is not supported by Sources, say: "I don't have enough evidence in the documents to answer that."
- Do NOT guess. Do NOT infer beyond what is written.
- Include citations like [1], [2] for each key claim.

Question: {question}

Sources:
{context}

Write a concise answer (3–6 bullets max) with citations:
""".strip()


@app.get("/health")
def health():
    return {"ok": True}


@app.post("/ask")
def ask(req: AskRequest):
    collection = get_collection()

    q_emb = embed_query(req.question)

    res = collection.query(
        query_embeddings=[q_emb],
        n_results=req.top_k,
        include=["documents", "metadatas", "distances"],
    )

    docs = res.get("documents", [[]])[0]
    metas = res.get("metadatas", [[]])[0]
    dists = res.get("distances", [[]])[0]

    retrieved = []
    for doc, meta, dist in zip(docs, metas, dists):
        retrieved.append({"document": doc, "metadata": meta, "distance": dist})

    # Refuse only if retrieval returned nothing meaningful
    if not retrieved or all((r["document"] or "").strip() == "" for r in retrieved):
        return {"answer": "I don't have enough evidence in the documents to answer that.", "citations": [], "retrieved": retrieved}

    prompt = build_prompt(req.question, retrieved)

    chat = ollama.chat(model=CHAT_MODEL, messages=[{"role": "user", "content": prompt}])
    answer = chat["message"]["content"]

    citations = []
    for i, r in enumerate(retrieved, start=1):
        citations.append(
            {
                "ref": f"[{i}]",
                "source": r["metadata"].get("source", "unknown"),
                "chunk_index": r["metadata"].get("chunk_index", -1),
            }
        )

    return {"answer": answer, "citations": citations, "retrieved": retrieved}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)