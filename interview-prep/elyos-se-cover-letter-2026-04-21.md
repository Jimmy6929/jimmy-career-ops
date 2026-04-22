# Cover Letter — Elyos AI, Founding Solutions Engineer (London)

**To:** Elyos AI Hiring Team (Adrian and team)
**From:** Ming Kit Chu (Jimmy)
**Date:** 2026-04-21
**Role:** Founding Solutions Engineer, London (5 days/week, Old Street)

---

Hi Adrian and the Elyos team,

I'm applying for the Founding Solutions Engineer role because *"sit right at the intersection of engineering, product, and customers — shaping both what we build and how it's deployed in the real world"* is a one-sentence job description of every founder role I've had. Two startups in three years teaches you a specific muscle: write the code, run the demo, deploy with the customer, go back and fix what broke. Elyos is the first London Series A voice-AI company where I could do that work without having to first build the company around me.

**On engineering — Python, LLMs, agent loops.** At **Molebie AI** (my open-source full-stack AI assistant, shipped solo in 28 days) I built a **tool-aware LLM agent loop** with short-term memory (SQLite), long-term RAG memory, step-budget termination, and provider-fallback error handling. On top of that sits a **modular inference layer across 5 LLM providers** (OpenAI, Anthropic, local Ollama, a fine-tuned variant, and an open-weights hosted model) — one interface, five backends, SDK-style adapter pattern. It's the same architectural family as the one behind Elyos's voice agents, just one I/O modality removed. Open source at [github.com/Jimmy6929](https://github.com/Jimmy6929) — I'd rather walk the codebase with you than summarise it in a bullet.

**On real-world deployment with customers.** At **Greener Robotics** I spent 18 months deploying production AI to 8 pilot farmers — multi-sensor hardware/software integration, edge-to-cloud pipeline, farmer-facing dashboards. Real customers, real money, real consequences when the sensor reading was wrong at 5am. That's the closest analogue to *"help real businesses handle calls, book jobs, take payments"* I have — a different vertical, same "the product is running the customer's business" stakes. The technical discovery, deployment, and integration muscle is built from that 18-month compound.

**On the engineering × product × customer intersection.** At **Amodeling** (our AI SaaS, #8 on Product Hunt) I sat at this intersection literally — wrote the backend, designed the UI, ran the presales conversations, built bespoke customer demos, owned the POC through integration, captured feedback that shaped the roadmap. It's the exact shape your JD describes. The translation between "what the customer said" and "what the product should do" has been the main skill I've sharpened across two startups.

**One honest gap to flag up front.** Your JD calls out **LLMs, STT, TTS, Voice Activity Detection, and workflow automation**. I have deep hands-on experience with the LLM + workflow side — Molebie is a working proof. I have **no production experience with STT/TTS/VAD specifically**. I'd close that gap with a weekend project before our first technical interview: **stand up a voice-agent wrapper around Molebie's existing agent loop** — pipe Whisper or Deepgram STT in, ElevenLabs or Piper TTS out, a simple VAD boundary, and a mocked workflow (booking a hypothetical HVAC call). That gives you a concrete artefact to judge ramp speed on instead of a CV line.

**On builder-first vs SE-first.** I want to be honest about this too. I'm more comfortable writing the integration script than running a structured enterprise POC process. At Elyos's stage — 10-ish people, SMB customer base, Series A — I'd argue that's the better instinct for a founding SE, not a worse one. But it's worth naming: the first six months I'd lean into *build*, and the six after that into *structure*.

**Three reasons Elyos specifically:**

1. **Voice AI crossing into real SMB revenue.** Your customers are taking bookings and payments through the agent. That bar is real in a way that most AI products aren't yet.
2. **Series A at $13M, 10-ish people, YC S23, Old Street 5 days in-office.** This is the stage where founding-SE playbook gets shaped rather than inherited. I'm actively relocating to London for exactly this career stage.
3. **Field-service SMB customer base is founder-native.** Faster discovery, shorter cycles, builders-talking-to-operators conversations. I'd rather learn SE on 30 plumbing businesses than three Fortune-500 deals.

Two things not on the CV. **Trilingual** — English fluent, Cantonese native, Mandarin fluent — which matters the day Elyos looks at Cantonese/Mandarin voice agents for the UK Greater China SMB diaspora or direct APAC expansion. And I hold a **BN(O) visa** with full UK work rights, no sponsorship.

**One note on my application strategy.** I've also applied for the Founding Customer Success Lead role — not as a backup, but because both roles map directly to what I've been doing as a founder, and you're better placed than me to calibrate where I fit best. Treat this as a "wherever you think I add the most value" signal, not two separate bets. If you want to test me on the SE side, here's the Molebie codebase and the weekend voice-agent wrapper; if you want to test me on the CS side, here's a 3-minute Loom of Molebie's onboarding wizard.

Happy to walk any of this live whenever works for you.

Thank you for the time.

— Jimmy (Ming Kit Chu)
jimmymkzhu@gmail.com • +44 7843 812 677 • github.com/Jimmy6929 • toogoodtobechu.com
