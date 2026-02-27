"use client";

import { useMemo, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function RagDemoPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Ask me about Jeevan’s resume and projects. I answer only from the PDFs and will cite sources.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  async function send() {
    const q = input.trim();
    if (!q) return;

    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, top_k: 10 }),
      });

      const data = await resp.json();
      const answer = data?.answer ?? "No response.";

      setMessages((m) => [...m, { role: "assistant", content: answer }]);
    } catch (e: any) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Error calling local RAG API: ${e?.message || e}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-2xl font-semibold">Local RAG Demo (Portfolio + Resume)</h1>
        <p className="mt-2 text-white/70">
          Powered by local Ollama + Chroma. Answers are grounded in your PDFs.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="h-[55vh] overflow-y-auto space-y-4 pr-2">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`rounded-xl px-4 py-3 leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto max-w-[85%] bg-white/10"
                    : "mr-auto max-w-[85%] bg-black/30 border border-white/10"
                }`}
              >
                <div className="text-xs mb-1 text-white/60">
                  {m.role === "user" ? "You" : "Assistant"}
                </div>
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              placeholder="Ask: What was the impact of the bank telemarketing project?"
              className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/40"
            />
            <button
              onClick={send}
              disabled={!canSend}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm disabled:opacity-50"
            >
              {loading ? "Thinking…" : "Send"}
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-white/60">
          <div>API: http://127.0.0.1:8000</div>
          <div>UI: http://localhost:3000/demos/rag</div>
        </div>
      </section>
    </main>
  );
}