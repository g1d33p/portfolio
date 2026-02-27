# AI PM Ops Copilot (Local) — n8n Agent + RAG-Grounded Evidence

This demo is a local-first “AI PM Ops Copilot” workflow:
- Parses a Job Description (JD) into structured requirements
- Pulls evidence from Jeevan’s resume/portfolio via the local RAG API (citations)
- Produces a Fit/Gap matrix
- Generates ATS-friendly resume bullets, an outreach message, and interview prep
- Supports Human-in-the-Loop (HITL) pause via a Wait node
- Returns a downloadable report via “Respond to Webhook”

> This project is **local-only** by design (no paid APIs). It’s intended for demos and portfolio proof-of-work.

---

## Prerequisites

### 1) Ollama (local LLM)
- Install Ollama: https://ollama.com
- Pull models:
  ```bash
  ollama pull llama3.1:latest
  ollama pull nomic-embed-text:latest