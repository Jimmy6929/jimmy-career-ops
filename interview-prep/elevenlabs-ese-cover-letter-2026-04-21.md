# Cover Letter — ElevenLabs, Enterprise Solutions Engineer (Europe — UK)

**To:** ElevenLabs Hiring Team
**From:** Ming Kit Chu (Jimmy)
**Date:** 2026-04-21
**Role:** Enterprise Solutions Engineer — Europe (UK, remote)

---

Dear ElevenLabs team,

I'm applying for the Enterprise Solutions Engineer role because the scope sections describe the *kind* of engineering I enjoy most — pattern-spotting across customer integrations, building self-service tools, productising what repeats. The JD's bar — *"It's OK if you only worked with customers in student clubs or side projects"* — is also unusually honest, and makes this a real application rather than a stretch one.

**On self-service tool building.** Your JD says *"Build self-service tools and documentation that empower customers to implement solutions independently."* That's the single muscle I'm proudest of: at **Molebie AI** I wrote a CLI onboarding wizard that took customer setup from hours to under 5 minutes across 5 LLM backends. Environment detection, credential prompting, sane defaults, clear error paths. The result was that I went from "on call for every new user" to "users self-onboard, docs and wizard handle the tail." That's the exact pattern your JD is describing — reduce SE time spent on per-customer integration so the platform scales.

**On productising common integration patterns.** Your JD names it explicitly: *"Identify opportunities to productize common integration patterns or features, and work with our product teams to make these real."* At Molebie I built a **modular inference layer across 5 LLM providers** — one typed interface, five backends, SDK-style adapter pattern, fallback on error. It's a productised integration pattern in miniature. The *instinct* to lift per-customer work into reusable architecture is the thing ElevenLabs Enterprise SEs need. I don't have it at $11B-scaleup scale — but I've built it in smaller forms three times across two startups.

**On customer-facing technical work.** At **Amodeling** (our AI SaaS, #8 on Product Hunt) I personally ran every early customer's bespoke POC — architect their integration path, build the demo, walk them through first success, capture feedback. The SE-AE collaboration loop your JD describes was me doing both seats. I've sat in every position around that table at founder scale.

**On real-world production deployment.** At **Greener Robotics** I ran 18 months of production IoT deployment across 8 pilot farmers — multi-sensor integrations, edge-to-cloud pipelines, farmer-facing dashboards. Real customers whose daily decisions depended on the system. Different vertical than voice AI, same "the product runs the customer's business" stakes.

**On Python depth.** Molebie's backend is Python/FastAPI — async handlers, pydantic validation, middleware, modular provider abstraction, RAG pipeline with custom chunking/embedding/retrieval, CLI with argparse + rich. Production-quality: type hints, tests, lint-clean. Github: [github.com/Jimmy6929](https://github.com/Jimmy6929) — happy to walk it live.

**Two gaps I want to flag honestly.**

1. **Voice AI specifically** (STT/TTS/VAD, streaming audio). Same gap I flagged on the Deployment Strategist application. **Mitigation:** I'll ship a weekend voice-agent wrapper around Molebie's existing agent loop before our first technical interview — pipe Whisper/Deepgram in, ElevenLabs/Piper out, a simple VAD boundary, a mocked customer workflow. Working artefact, not a claim.
2. **Enterprise procurement / security review cycles.** I've never sat through Fortune 500 procurement, SOC2 compliance interrogations, or enterprise architecture review boards. If you need someone who's navigated those already, I'm not that candidate on day one. If you need someone who can ramp into it quickly while delivering on the Python/architecture/self-service side of the role, that's me.

**Three reasons ElevenLabs specifically:**

1. **Voice AI has crossed into real enterprise revenue.** Deutsche Telekom, Meta, thousands of businesses using voice in production. The Enterprise SE seat at this company is where voice AI's hardest integration puzzles get solved.
2. **Remote-global flexibility with UK office availability.** I can work from your London or Dublin office, or UK-remote — my relocation to London makes any of those fit.
3. **"Builders doing the best work of their lives" + "IOI medalists and ex-founders" culture.** I want to ship with people who ship. That's how Molebie came together in 28 days; I want the version of that mindset at 10× the ambition.

Two things the CV won't surface. I'm **trilingual** — English fluent, Cantonese native, Mandarin fluent — meaningful for any push into Cantonese/Mandarin voice agents (70+ languages already in ElevenCreative). And I hold a **BN(O) visa** with full UK work rights.

**One note on my application strategy.** I submitted the **Deployment Strategist Europe** application first — it's a slightly tighter fit on my founder-strategist instinct (synthesise → architect → deploy), while this ESE role leans more on the productise-the-pattern instinct (architect → enable → self-service). Both roles map to shapes I've been doing. You're better placed than me to calibrate where I fit best. Treat this as a "wherever you think I add the most value" signal, not two separate bets.

Happy to walk any of this live whenever works.

Thank you for the time.

— Jimmy (Ming Kit Chu)
jimmymkzhu@gmail.com • +44 7843 812 677 • github.com/Jimmy6929 • toogoodtobechu.com
