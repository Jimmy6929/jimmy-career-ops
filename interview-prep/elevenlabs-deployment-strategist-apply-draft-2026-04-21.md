# ElevenLabs — Deployment Strategist Europe (UK) — Application Draft

**Date:** 2026-04-21
**Based on:** Report #024 | Score: 4.2/5 | Archetype: Solutions Engineer / FDE (Jimmy's #4)
**URL:** https://jobs.ashbyhq.com/elevenlabs/5d1390e2-a6e8-4f8b-b01f-ad7e286009d2
**Comp:** Not disclosed (est. £60-90K base + meaningful equity at $11B-valuation)
**Location:** UK — remote or London / Dublin office
**Status:** Draft only — DO NOT submit until Jimmy reviews. **Submit BEFORE the Enterprise SE sibling (#025)** so cross-reference reads right.

**Note on question set:** ElevenLabs Ashby. Custom questions not surfaced via public posting-API. Questions below follow the standard Ashby FDE/Deployment screener set + ElevenLabs-specific questions inferred from JD + culture signals (high-velocity, lean teams, "IOI medalists and ex-founders").

---

## Standard fields

| Field | Value |
|-------|-------|
| Full name | Ming Kit Chu (Jimmy) |
| Preferred name | Jimmy |
| Email | jimmymkzhu@gmail.com |
| Phone | +44 7843 812 677 |
| Current location | London (relocating from Glasgow) |
| LinkedIn | https://www.linkedin.com/in/jimmy-chu-844572247 |
| GitHub | https://github.com/Jimmy6929 |
| Portfolio / Website | https://toogoodtobechu.com |
| Work authorization (UK) | Yes — BN(O) visa, no sponsorship required |
| Visa sponsorship needed | No |
| Willing to work from London office or UK-remote | Yes (either) |
| Willing to travel (UK / Europe / occasional US) | Yes |
| Resume upload | output/cv-jimmy-elevenlabs-deployment-strategist-uk-2026-04-21.pdf |
| Cover letter | interview-prep/elevenlabs-deployment-strategist-cover-letter-2026-04-21.md |
| Salary expectation | £60K–£80K base + equity (flexible) |
| Earliest start date | 2 weeks from offer acceptance |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q0a (LIVE-FORM, confirmed 2026-04-21): What's the most impactful thing you've built? What was your specific contribution?
> **Greener Robotics** — 18 months, 8 pilot farmers, a working smart-agri IoT stack. Co-founded with one technical partner; I owned the PM / deployment / customer-facing side end-to-end.
>
> My specific contribution: (1) ran structured discovery with all 8 pilot customers, reframed the initial dashboard spec (*"show me everything"*) into a single-decision product (*"can I skip the field walk today?"*) — which cut the feature scope by two-thirds and made adoption possible; (2) owned the deployment cadence — hardware on site, integration troubleshooting across inconsistent rural connectivity, 24-hour post-mortem loop on every edge-case failure; (3) rebuilt the technical demo three times for three audiences (**Barclays Eagle Labs** investors, **MIT Climate & Energy Prize** judges, **YC Startup School** founder cohort) — same hardware, different framing per audience; (4) authored the STAC accelerator application that won us a £60k programme place.
>
> The impact that's still compounding: three of those eight farmers are still running the original stack two years later — turns out the highest compliment for a deployment isn't "we love it," it's "we forgot it was new."

### Q0b (LIVE-FORM, confirmed 2026-04-21): How did you know it worked? What did success actually look like?
> Three tiers of evidence, in the order they showed up:
>
> **Behaviour change, not logins.** The first signal was farmers opening the dashboard *before their first cup of tea*, not when we nudged them. That's what "real adoption" actually looks like — the product becomes a morning habit, not a meeting homework item. The inverse (silent drop-off) is the failure mode CS and Deployment functions exist to catch in week six before it becomes a churn call in month four.
>
> **Decision quality, not feature usage.** The core metric I ended up caring about wasn't "did they open the dashboard" but "did the dashboard's recommendation match what they'd have done anyway?" Early on the answer was no — they'd override us 60% of the time. By month three they overrode us under 20%. That convergence was the real product-market-fit signal.
>
> **External validators.** STAC accelerator £60k offer. Judges' Commendation for Startup of the Year at Glasgow. Advancement at MIT Climate & Energy Prize. These were the lagging indicators that the early adoption signal was real, not wishful.
>
> For an ElevenLabs voice-agent deployment, I'd expect the same shape of success measurement: call-handling volume without human escalation (behaviour), whether the agent's call outcomes match what a human would've done (quality), retention at month six against CS targets (validator).

### Q0c (LIVE-FORM, confirmed 2026-04-21): Have you used ElevenLabs — even in a personal or side project? What did you build or explore?
> Honest answer: **not yet in a shipped project.** I've built text-LLM systems (Molebie AI's tool-aware agent loop across 5 providers) but the voice stack is new to me. Rather than dress that up, I'm treating it as the ramp project I want to ship before our first technical interview.
>
> **What I'm building this weekend:** a voice-agent wrapper around Molebie's existing agent loop — Whisper or Deepgram for STT, **ElevenLabs TTS for the output stage** (first production use for me), a simple Silero-style VAD for turn detection, and a mocked customer workflow (a hypothetical trades SMB taking inbound call bookings, handing off to a booking API). I'll share the repo link before our first call.
>
> The architectural question I'm curious about — and would love your take on — is latency budgeting across the STT → reasoning → TTS pipeline. In text-LLM work I've tuned for throughput and cost; in voice the constraint that dominates everything is perceived latency inside a live conversation. How ElevenLabs customers architect that trade-off (streaming vs batched TTS, caching common responses, shaving reasoning hops) is the part of the job I'm most excited to learn from real deployments rather than from reading.
>
> So: zero before-this-week ElevenLabs use. A working artefact by the time we talk.

### Q1: Why ElevenLabs and why this role?
> Three reasons. (1) **Voice AI has crossed into real enterprise revenue.** Deutsche Telekom, Meta, thousands of businesses using voice in production — not demoware. The Deployment Strategist seat is where the hardest integration puzzles get solved in a category I've been watching from the LLM side of the fence. (2) **The "student clubs OR side projects OK" line on the JD's experience bar is the most honest YOE framing I've seen at $11B valuation** — it tells me ElevenLabs selects for shape, not CV. My shape is three years of founder-operator customer reps across Amodeling, Greener Robotics, Molebie. (3) **UK flexibility** (London office or remote) + BN(O) visa + active relocation to London = zero logistical friction.

### Q2: Walk us through a technical deployment you owned end-to-end with customers.
> **Greener Robotics, 18 months, 8 pilot farmers.** Multi-sensor IoT stack (soil/climate/imaging) deployed into 8 real farms of wildly different sizes, crop mixes, and technical comfort. End-to-end meant: discovery (what decision are they actually making every day?), technical spec (what sensor data feeds which alert?), integration (edge-to-cloud pipeline into farmer-facing dashboards), deployment (hardware on site, clock drift, dropped packets in bad weather), debrief (the 24-hour post-mortem cadence on every edge-case failure). The reflection I carry: **real-world AI deployment is about conservative defaults + aggressive post-mortem cadence.** Ship the thing that fails safe first, debrief every edge case within 24 hours, evolve defaults as you learn the customer's environment. Different vertical than voice AI, same production discipline.

### Q3: Tell us about synthesising customer signal into a product / solution change.
> At Greener Robotics pilot farmers kept asking for "a dashboard with everything on it" — 10 data sources, one screen. Structured discovery revealed the real decision was a morning yes/no: *"can I skip the field walk today?"* I rewrote the dashboard around that single decision, cut the feature scope by two-thirds, and used the remaining engineering time on alerting. Adoption went from "they opened it when we asked" to "they opened it before their first tea of the day." For Elyos customers (trades SMBs), an ElevenLabs deployment probably has the same shape: figure out which single call-outcome is the customer's day-to-day wake-up-at-2am worry, and design the agent around that.

### Q4: Walk us through a technical architecture you've designed or built.
> **Molebie AI's modular inference layer + agent loop.** One Python/FastAPI surface in front of 5 LLM providers (OpenAI, Anthropic, local Ollama, fine-tuned variant, open-weights hosted). A request enters a router that picks a provider by task type and user config, then runs a tool-aware loop with short-term (SQLite) + long-term (RAG) memory, step-budget termination, and provider-fallback on error. A CLI onboarding wizard wraps the whole thing — env detection, credential prompting, sane defaults — which is why customer setup dropped from hours to under 5 minutes. The pattern I'd carry into ElevenLabs: **typed provider abstraction + tool-aware loop + fallback-on-error + onboarding that wraps the complexity**. Open source at github.com/Jimmy6929.

### Q5: Walk us through your Python experience.
> Python is my primary production language. Molebie's backend is Python/FastAPI — async handlers, pydantic validation, middleware, modular provider abstraction, RAG pipeline (custom chunking/embedding/retrieval), CLI with argparse + rich. Production-quality: type hints, tests, lint-clean, env-isolated. I've also written Python for Greener Robotics data pipelines (multi-sensor ingestion, time-series aggregation, alert rules) and 3D printing business automation (CAD slicer preprocessing). Comfortable with REST APIs, SDK design, data pipelines, orchestration — which maps directly onto what Deployment Strategists ship.

### Q6: What's your experience with voice AI specifically (STT / TTS / VAD / real-time audio)?
> Honest answer: **zero production experience.** My AI work has been text-based — LLM agent loops, tool use, RAG. The mindset transfers (provider abstraction, fallback, latency budgeting) but the voice stack is new. Before our first technical interview I'd **stand up a weekend voice-agent wrapper around Molebie's existing agent loop** — pipe Whisper or Deepgram STT in, ElevenLabs or Piper TTS out, simple VAD for turn detection, and a mocked customer workflow (a hypothetical SMB taking inbound bookings). Working artefact, not a claim. I'd rather show the ramp than describe it.

### Q7: How would you approach your first 30/60/90 days as a Deployment Strategist?
> **Days 1–30:** Build a customer workflow end-to-end on ElevenLabs's own product — an inbound-call agent for a hypothetical SMB, API + SDK integration, every friction point felt personally. Shadow 2–3 live customer deployments across different verticals. Ship the voice-agent wrapper around Molebie I committed to above as "ramp proof." **Days 31–60:** Own the deployment side of one live strategic customer under supervision. Identify the most recurring technical failure mode in customer deployments and ship a reusable artefact (integration template, debugging runbook, demo pattern). **Days 61–90:** Own one strategic customer deployment solo, from signed deal to stable production. Propose one structural improvement to the deployment playbook based on days 1–60. Contribute "voice of the customer" feedback into Product. By end of quarter: one solo-owned deployment, one reusable asset in the shared library, credible Python-production history on customer-facing code.

### Q8: Tell us about presenting to a C-suite audience.
> At **Greener Robotics**, the same IoT stack got demoed to three audiences in four months: **Barclays Eagle Labs** (investor C-suite), **MIT Climate & Energy Prize** (academic technical judges), **YC Startup School** (founder peer cohort). Same rig, three rebuilt decks. Lead with unit economics for Barclays, hardware novelty + emissions math for MIT, velocity + two-person-team story for YC. The reflection: **rebuild the deck for the listener, never for yourself.** A C-suite deployment conversation at ElevenLabs is structurally identical — the VP of Customer Service, the CFO, and the engineering lead need three different 10-minute framings of the same deployment plan.

### Q9: What's your salary expectation?
> £60–£80K base + equity as offered. I'm anchoring inside my estimate of ElevenLabs's realistic band for a Europe-based Deployment Strategist at a $11B-valuation scaleup with the "student clubs OK" YOE floor (which reads to me as an associate-to-mid IC seat, not a senior one). Single-number fallback: **£70K base**. I care more about equity structure and a 6-month review tied to real milestones (one solo deployment, one reusable artefact, voice-stack ramp completed) than base creep. Happy to discuss structure in the recruiter call.

### Q10: How did you hear about us?
> Scanned Ashby directly this week for London / UK-remote customer-facing technical roles at top-tier AI scaleups. ElevenLabs came up on multiple filters (stage, product category, UK availability). The "student clubs OK" YOE line is what made me apply same day — most $11B companies gate harder.

### Q11: Do you require visa sponsorship to work in the UK?
> No. BN(O) visa — full UK work rights.

### Q12: Are you applying to any other roles at ElevenLabs?
> Yes — I've also applied for the **Enterprise Solutions Engineer, Europe** role at ElevenLabs. Both roles map to shapes I've been doing as a founder — Deployment Strategist is the tighter fit for my strategist-builder instinct (synthesise → architect → deploy), ESE leans more productise-the-pattern. You're better placed than me to calibrate. **Deployment Strategist is my primary preference** given my archetype profile, but ESE is real. Treat as "wherever I fit best."

### Q13: When can you start?
> Two weeks from offer acceptance. I'd use the gap to ship the voice-agent wrapper around Molebie's agent loop — working STT → Molebie → TTS prototype — so I arrive with an artefact on day one.

### Q14: Anything else you'd like us to know? (Optional)
> Two things not on the CV. **Trilingual** — English fluent, Cantonese native, Mandarin fluent — directly relevant to ElevenLabs's 70+ language Creative platform and any push into Cantonese/Mandarin voice agents (authentic language grounding is hard to hire for outside of native speakers). And one honest framing note: my voice-AI depth is lighter than the senior end of your band — my bet is that LLM + agent + customer-deployment + Python builder reps compensate at the associate/mid Deployment Strategist seat, and the weekend voice-agent wrapper will show the ramp is time-bounded. If that bet doesn't land, I'd rather know early.

---

## Notes for Jimmy before submitting

- **Submit BEFORE Enterprise SE sibling (#025).** Q12 discloses the dual application; if ESE goes in first, the disclosure on the ESE apply reads weird. **Order: Deployment Strategist first, ESE second.**
- **Live form fields not accessible.** ElevenLabs Ashby. Treat 14 Qs as superset. Likely live questions: Q1, Q2 (deployment story), Q4 (architecture), Q5 (Python), Q6 (voice AI — likely asked), Q9 (comp).
- **Voice-agent wrapper is load-bearing.** Referenced in cover letter + Q6 + Q7 + Q13. **~3-6 hours weekend project** (free-tier Whisper/Deepgram + simple TTS + dummy field-service flow). Do NOT submit unless you'll ship it before the first technical interview. If time-constrained: soften Q6 ("I'm actively ramping on the voice stack; would welcome guidance on what to prioritise") and drop the Q13 commitment.
- **Salary anchor.** Report #024 est. £60-90K base. Q9 anchors £60-80K (inside-band, not top). Fallback £70K. Do not drop below £55K without strong equity.
- **Verify Q3 (Greener Robotics "tea of the day")** and Q8 (three-audiences framing) against your recall. Edit anything that drifts.
- **Verify Q4 (Molebie architecture)** — cross-check specifics against actual codebase before pasting.
- **Resume upload.** `output/cv-jimmy-elevenlabs-deployment-strategist-uk-2026-04-21.pdf` — 2 pp A4, 120 KB. Summary leads with Forward-Deployed-shape framing. Verify it reads as a strategist candidate.
- **Cover letter.** `interview-prep/elevenlabs-deployment-strategist-cover-letter-2026-04-21.md`. Attach or paste body.
- **Sibling application disclosure.** Q12 IS the disclosure here — Elyos/Encord pattern repeated. Don't skip.
- **Post-submit housekeeping (manual):** update `applications.md` row #024 from `Evaluated` → `Applied`, flip PDF ❌ → ✅, update notes to start with `Submitted 2026-04-21.`.
- **Do not submit.** Read every answer. Edit. Then hit Apply yourself.
