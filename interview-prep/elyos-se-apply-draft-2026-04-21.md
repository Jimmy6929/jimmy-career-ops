# Elyos AI — Founding Solutions Engineer London — Application Draft

**Date:** 2026-04-21
**Based on:** Report #022 | Score: 4.0/5 | Archetype: Solutions Engineer (Jimmy's #4 stretch)
**URL:** https://careers.elyos.ai/jobs/7057777-founding-solutions-engineer
**Comp:** Not disclosed (est. £60–85K base + meaningful equity at Series A $13M)
**Location:** Old Street, London — 5 days/week on-site
**Status:** Draft only — DO NOT submit until Jimmy reviews. **Submit AFTER the CS Lead (#021)** so disclosure reads right.

**Note on question set:** careers.elyos.ai is JS-rendered; form fields not accessible via public API. Questions below follow the **standard Series A founding-SE screener set** plus Elyos-specific technical questions inferred from the JD (LLMs / STT / TTS / VAD / workflow automation).

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
| Willing to work 5 days/week on-site Old Street | Yes, enthusiastically |
| Willing to travel (UK / Europe) | Yes |
| Resume upload | output/cv-jimmy-elyos-se-london-2026-04-21.pdf |
| Cover letter | interview-prep/elyos-se-cover-letter-2026-04-21.md |
| Salary expectation | £60K–£78K base + equity (flexible) |
| Earliest start date | 2 weeks from offer acceptance |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why Elyos as a Solutions Engineer?
> Three things. (1) **Your customers are taking live bookings and payments through the voice agent** — that's a higher-stakes production bar than most AI products. SE work where "the customer makes money when it works" is the seat I want. (2) **Series A $13M, YC S23, 10-ish people, Old Street 5 days in-office.** The stage where SE playbook gets built, not inherited — and I'm already actively relocating to London for exactly this stage. (3) **"Intersection of engineering, product, and customers" is the one-sentence founder job description.** I've done three years of that work at two startups. Elyos is the first Series A in London where I could do it without having to build the company around me.

### Q2: Walk us through a technical architecture you've designed.
> **Molebie AI's agent loop + multi-backend inference layer.** Python/FastAPI service in front of 5 LLM providers (OpenAI, Anthropic, local Ollama, fine-tuned variant, open-weights hosted). Each request enters a small router that picks a provider by task type and user config, then runs a **tool-aware loop** with short-term memory (SQLite) + long-term RAG memory over user-local documents. The loop terminates on natural stop or a step budget; errors flip to the next provider in the fallback list so a single backend outage doesn't kill the session. A CLI onboarding wizard wraps the whole thing — env detection, API-key prompting, sane defaults — which is why setup dropped from hours to <5 min.
>
> The pattern I'd carry into Elyos SE work: **typed interface in front of a provider abstraction + tool-aware loop + fallback-on-error + onboarding that wraps the complexity.** That's how you take a complex AI system and make it deployable in a customer's environment without the SE becoming 24/7 support. Open source at github.com/Jimmy6929 — happy to walk the code live.

### Q3: Tell us about deploying AI in the real world with real customers.
> **Greener Robotics, 18 months.** Multi-sensor IoT stack deployed across 8 pilot farmers — soil/climate/imaging sensors, edge-to-cloud pipeline, real-time dashboards. Real customers whose daily decisions depended on the system working. The hard parts: hardware-in-the-loop debugging (5am timestamp drift on a rainy day), clock skew between devices, dropped packets, labelling cost. **The lesson that transfers to Elyos:** production AI with real customer stakes means **conservative defaults + aggressive post-mortem cadence**. Ship the thing that fails safe first, debrief every edge case within 24 hours, evolve the defaults as you learn the customer's environment. Different vertical than voice AI, same production discipline.

### Q4: Describe a POC you built end-to-end with a customer.
> At **Amodeling** (our AI SaaS converting text/images → 3D) every early customer got a bespoke POC. I'd scope their content (architectural mockups, ecommerce product shots, game assets), build a customised demo on their actual inputs, walk them through the first successful generation, document what broke, and feed it into both the product backlog and the next customer's template. The POC was the sales cycle. We hit **#8 on Product Hunt** with 106 upvotes because the POC motion was a flywheel — every onboarded user generated feedback the next one inherited. For an Elyos field-service SMB that's the same shape: first customer's workflow becomes the template for the next five plumbing businesses.

### Q5: Walk us through your Python experience.
> Python is my primary production language. **Molebie AI** is the cleanest artefact: Python/FastAPI backend (async handlers, pydantic validation, middleware), a modular provider abstraction with fallback logic, a RAG layer with custom chunking + embedding + retrieval, and a CLI onboarding wizard using argparse + rich for interactive setup. Production-quality: type hints, tests, lint-clean, env-isolated. Github: [github.com/Jimmy6929](https://github.com/Jimmy6929). I've also written Python data pipelines for Greener Robotics (multi-sensor ingestion, time-series aggregation, alert rules) and automation scripts for the 3D printing business. Comfortable with REST APIs, SDK design, data pipelines, and orchestration — which maps directly onto Elyos SE work.

### Q6: What's your experience with voice AI specifically — STT, TTS, VAD, real-time audio?
> **Honest answer: zero production experience with STT/TTS/VAD.** My AI work has been text-based (LLM agent loops, tool use, RAG). The architectural mindset transfers — provider abstraction, fallback-on-error, latency budgeting, streaming interfaces — but the specific voice stack is new.
>
> Before our first technical interview, I'd **stand up a voice-agent wrapper around Molebie's existing agent loop** — pipe Whisper or Deepgram STT in, ElevenLabs or Piper TTS out, a simple VAD boundary for turn detection, and a mocked field-service workflow (booking a hypothetical HVAC job). That's a weekend project that turns the gap from "filter me out" into "judge the ramp on a working artefact." I'd share the repo link before our first call.

### Q7: How would you approach your first 30/60/90 days as SE at Elyos?
> **Days 1–30:** Ramp deep inside Elyos's product — build an end-to-end customer workflow on the trial, including API / SDK integration and any deployment quirks, so I've felt every friction a customer would feel. Shadow Adrian + engineering on 2–3 live customer deployments. Ship the voice-agent wrapper around Molebie I committed to above, as my "ramp proof." **Days 31–60:** Own the technical side of one live customer deployment end-to-end under supervision. Identify the most common recurring technical objection / failure mode and ship a reusable solution (integration script, deploy template, or debugging runbook). Start logging patterns for a shared SE library. **Days 61–90:** Own one customer deployment solo, from signed deal to stable production. Propose one structural improvement to the SE deployment playbook based on what I saw in days 1–60. Contribute to product roadmap with "voice of the customer" feedback captured during deployments. By end of quarter: one happy customer I owned solo, one reusable SE asset, credible Python-production history in customer-facing code.

### Q8: What's your salary expectation?
> £60–78K base + equity. I'm anchoring inside my estimate of Elyos's realistic band for a Series A founding SE (London, 2–5 YOE equivalent), leaving room for equity negotiation — which at Series A is the asymmetric bet. Single-number fallback: **£68K base**. I'd prefer a slightly lower base + higher equity grant + a 6-month review tied to real milestones (voice-agent wrapper shipped, one customer owned solo, one reusable SE asset) over anchoring top-of-band. Happy to discuss structure with the recruiter.

### Q9: How did you hear about us?
> Same filter as the CS Lead role — YC UK-hiring search this week, looking for Series A London AI companies with founding-level customer-facing roles. Applied to both Elyos roles because both map to shapes I've done as a founder.

### Q10: Do you require visa sponsorship to work in the UK?
> No. BN(O) visa — full UK work rights, no sponsorship required.

### Q11: Are you comfortable working 5 days/week on-site from Old Street?
> Yes. Relocating from Glasgow to London for this career stage — Old Street in-person is a positive.

### Q12: When can you start?
> Two weeks from offer acceptance. I'd use the gap to ship the voice-agent wrapper around Molebie's agent loop — so I arrive with a working STT→Molebie→TTS prototype on day one.

### Q13: Are you applying for any other roles at Elyos?
> Yes — I also applied to the **Founding Customer Success Lead** role (submitted earlier). Both roles map directly to shapes I've been doing as a founder, and you're better placed than me to calibrate where I'd add the most value. Treat this as a "wherever you think I fit best" signal, not two separate bets. **CS Lead is my primary preference** given my archetype profile, but SE is real — my Python / LLM / agent-loop experience sits naturally in an SE seat, and the voice-AI ramp is a time-bounded gap I'll close pre-interview.

### Q14: Anything else you'd like us to know? (Optional)
> Two things not on the CV. **Trilingual** — English fluent, Cantonese native, Mandarin fluent — meaningful the day Elyos explores Cantonese/Mandarin voice agents for the UK Greater China SMB diaspora or direct APAC expansion. And one honest framing note: I know my voice-AI experience is lighter than someone at the 5-year-SE end of the band. My bet is that **LLM + agent-loop + customer-deployment + Python builder reps** compensate at the founding-SE stage, and that the weekend voice-agent wrapper will show the ramp is time-bounded. If that bet doesn't land, I'd rather know early.

---

## Notes for Jimmy before submitting

- **Submit AFTER the CS Lead (#021).** Q13 discloses the CS Lead application upfront. If you submit SE first, the disclosure in CS Lead's Q13 reads weird. **Order: CS Lead first, SE second.**
- **Live form fields not accessible.** careers.elyos.ai is JS-rendered. Treat 14 questions as a superset. Most likely to appear: Q1, Q2 (architecture), Q5 (Python), Q6 (voice AI), Q8 (comp). Adapt.
- **Biggest commitment: voice-agent wrapper around Molebie.** Referenced in cover letter + Q6 + Q7 + Q12. **Load-bearing — roughly 3–6 hours of weekend work** (pick a free-tier Whisper/Deepgram API + a simple TTS + a dummy field-service flow). Do NOT submit unless you'll ship this before the first technical interview. If you can't, soften Q6 ("I'm actively ramping on voice stack — would welcome guidance on what to prioritise") and drop the pre-interview commitment from cover / Q12.
- **Salary anchor.** Report #022 estimate: £60–85K base for London Series A founding SE. Q8 anchors £60–78K (inside-band). Single-number fallback £68K. Do not drop below £55K base without strong equity offset.
- **Verify Q2 (Molebie architecture description).** Router + tool-aware loop + fallback + step-budget framing is consistent with cv.md and the existing reports, but specifics (task-typed routing, fallback ordering) are reconstructed. **Cross-check against actual Molebie code before pasting.**
- **Verify Q3 (Greener Robotics pilot specifics).** "5am timestamp drift on a rainy day" is a vivid detail — make sure your recall matches, edit if not.
- **Resume upload.** `output/cv-jimmy-elyos-se-london-2026-04-21.pdf` — 2 pp A4, 119 KB. Summary leads with "Python engineer + engineering×product×customer intersection." Greener Robotics bullet leads on "real-world production AI deployment." Voice-AI adjacency called out as "ramping STT/TTS/VAD." Verify it reads as an SE candidate, not a CS candidate.
- **Cover letter.** `interview-prep/elyos-se-cover-letter-2026-04-21.md`. Attach or paste body.
- **Name Adrian** in any free-text field if appropriate (explicitly named in JD).
- **Post-submit housekeeping (manual):** update `applications.md` row #022 from `Evaluated` → `Applied`, flip PDF ❌ → ✅, update notes.
- **Do not submit.** Read every answer — especially Q2 (Molebie architecture), Q3 (Greener Robotics specifics), Q6 (voice-AI honest framing). Edit anything that drifts.
