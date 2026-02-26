from pathlib import Path
from typing import List, Dict

import chromadb
from pypdf import PdfReader
import ollama
from langchain_text_splitters import RecursiveCharacterTextSplitter

DATA_DIR = Path(__file__).parent / "data"
CHROMA_DIR = Path(__file__).parent / "chroma_db"
COLLECTION_NAME = "jeevan_portfolio"

EMBED_MODEL = "nomic-embed-text"  # Ollama embeddings model


def read_pdf_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    parts = []
    for page in reader.pages:
        try:
            parts.append(page.extract_text() or "")
        except Exception:
            parts.append("")
    return "\n".join(parts)


def load_documents() -> List[Dict]:
    pdfs = sorted(DATA_DIR.glob("*.pdf"))
    if not pdfs:
        raise RuntimeError(f"No PDFs found in: {DATA_DIR}")

    docs = []
    for pdf_path in pdfs:
        text = read_pdf_text(pdf_path).strip()
        if text:
            docs.append({"source": pdf_path.name, "text": text})
    return docs


def embed_texts(texts: List[str]) -> List[List[float]]:
    embs = []
    for t in texts:
        resp = ollama.embeddings(model=EMBED_MODEL, prompt=t)
        embs.append(resp["embedding"])
    return embs


def main():
    print(f"📄 Loading PDFs from: {DATA_DIR}")
    docs = load_documents()
    print(f"✅ Loaded {len(docs)} PDF documents.")

    splitter = RecursiveCharacterTextSplitter(chunk_size=900, chunk_overlap=150)

    chunks, metadatas, ids = [], [], []
    chunk_id = 0

    for d in docs:
        parts = splitter.split_text(d["text"])
        for idx, part in enumerate(parts):
            part = part.strip()
            if len(part) < 40:
                continue
            chunks.append(part)
            metadatas.append({"source": d["source"], "chunk_index": idx})
            ids.append(f"chunk-{chunk_id}")
            chunk_id += 1

    print(f"🧩 Created {len(chunks)} chunks. Embedding…")

    client = chromadb.PersistentClient(path=str(CHROMA_DIR))

    # Recreate the collection to avoid duplicate inserts
    try:
        client.delete_collection(COLLECTION_NAME)
    except Exception:
        pass
    collection = client.get_or_create_collection(name=COLLECTION_NAME)

    BATCH = 48
    for i in range(0, len(chunks), BATCH):
        batch_texts = chunks[i : i + BATCH]
        batch_meta = metadatas[i : i + BATCH]
        batch_ids = ids[i : i + BATCH]

        embs = embed_texts(batch_texts)

        collection.add(
            ids=batch_ids,
            embeddings=embs,
            documents=batch_texts,
            metadatas=batch_meta,
        )

        print(f"  → Indexed {min(i + BATCH, len(chunks))}/{len(chunks)}")

    print("✅ Done! Local vector index built at:", CHROMA_DIR)
    print("Next: run the API with `python api.py`")


if __name__ == "__main__":
    main()