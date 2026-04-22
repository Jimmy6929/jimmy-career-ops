# ElevenLabs — Enterprise Solutions Engineer Europe (UK) — Application Draft

**Date:** 2026-04-21
**Based on:** Report #025 | Score: 4.0/5 | Archetype: Solutions Engineer (Jimmy's #4, sibling to #024)
**URL:** https://jobs.ashbyhq.com/elevenlabs/4509df6f-b839-44d6-b31f-d7f364cec949
**Comp:** Not disclosed (est. £70–100K base + equity at $11B valuation)
**Location:** UK remote (London / Dublin offices also available)
**Status:** Draft only — DO NOT submit until Jimmy reviews. **Submit AFTER Deployment Strategist (#024)** so cross-reference disclosure reads right.

**Note on question set:** Same ATS (ElevenLabs Ashby). Custom questions not exposed via public posting-API. Draft below follows standard Enterprise SE screener set + ElevenLabs-specific inferred from JD.

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
| Willing to work remote / London or Dublin office | Yes (remote primary, office flexible) |
| Willing to travel | Yes |
| Resume upload | output/cv-jimmy-elevenlabs-ese-uk-2026-04-21.pdf |
| Cover letter | interview-prep/elevenlabs-ese-cover-letter-2026-04-21.md |
| Salary expectation | £65K–£85K base + equity (flexible) |
| Earliest start date | 2 weeks from offer acceptance |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why ElevenLabs and why this specific role?
> This role is a clean fit for the single instinct I've sharpened most across two startups: **productising what repeats.** Your JD names it explicitly — *"identify opportunities to productize common integration patterns or features"* — and pair that with *"build self-service tools and documentation that empower customers to implement solutions independently"* and you've described the two things I'm proudest of at Molebie AI (modular inference layer across 5 providers + CLI onboarding wizard). ElevenLabs is where that instinct scales from my side projects to real enterprise integrations on top of voice AI in production.

### Q2: Describe a technical architecture you've designed and the patterns you've productised.
> **Molebie AI's modular inference layer.** Before it, every new LLM provider meant rewriting request handling, retry logic, prompt formatting, and streaming. I pulled the shared shape into a typed provider interface: every backend (OpenAI, Anthropic, Ollama, fine-tuned, open-weights) implements the same surface, with fallback-on-error wired at the router level. Add a 6th provider? Add one adapter class. The onboarding wizard sits one layer up — it detects environment, asks the user for only the keys their config needs, sets sane defaults. **The pattern: abstract the common shape, wire fallback once, make the self-service tool handle the config sprawl.** That's the ESE playbook, in miniature. Happy to walk the code at github.com/Jimmy6929.

### Q3: Walk us through how you'd collaborate with AEs on a technical sale.
> Three postures, depending on deal stage. (1) **Early/qualification:** I'm the "can-this-even-be-done?" check — 30-min technical discovery with the prospect's architect, quick go/no-go on integration feasibility, architecture sketch if the answer is yes. AE keeps the commercial thread; I own the technical yes. (2) **POC/proof:** I own the POC — scope it narrowly, architect the integration, build the demo on the customer's real data where possible, walk them through success criteria. Keep the AE informed but don't pull them into debugging. (3) **Close/handoff:** I handoff to Deployment with a 1-page "what we proved, what's open, what to watch" doc. The recurring failure mode is SE builds a beautiful POC, AE closes, Deployment inherits undocumented integration — I pre-empt that with the handoff doc. I lived the founder version of this at Amodeling — no one else to hand off to, so the POC → onboarding loop was tight.

### Q4: Walk us through your Python depth.
> Python is my primary production language. Molebie is a full-stack Python/FastAPI service with async handlers, pydantic validation, middleware, a modular provider abstraction pattern, and a RAG pipeline (chunking, embedding, retrieval, all custom). Also written: CLI tools with argparse + rich (the Molebie onboarding wizard), data pipelines for Greener Robotics (multi-sensor ingestion, time-series aggregation, alert logic), automation scripts for the 3D printing business. I think in provider abstractions, typed interfaces, and fallback chains by default. Github: [github.com/Jimmy6929](https://github.com/Jimmy6929) — read whatever you want.

### Q5: Describe a self-service tool you've built that empowered customers / users to implement independently.
> **Molebie's CLI onboarding wizard** is the cleanest example. Early users were dropping off during setup — 5 LLM backends, multiple env configs, API keys in the wrong places. I wrote a wizard that detected the environment, prompted for credentials interactively with context-sensitive help, set sane defaults, and got users to first query in under 5 minutes. Drop-off halved in a week and my support load dropped roughly in proportion. Reflection: **every recurring live question is a missing default or a missing doc.** The best self-service tool is the one that deflects a ticket before it's filed.

### Q6: What's your experience with voice AI (STT/TTS/VAD/real-time audio)?
> Honest: zero production experience. Same answer as the Deployment Strategist application — my AI work has been text-LLM, not voice. My plan: **weekend voice-agent wrapper around Molebie's existing agent loop** before our first technical interview (Whisper/Deepgram STT → Molebie → ElevenLabs/Piper TTS, with a simple VAD boundary and a mocked customer workflow). Working artefact, not a claim. If I don't ship it, I'll tell you explicitly and adjust.

### Q7: Walk us through your experience with enterprise customers — procurement, security reviews, compliance.
> **Honest: very limited at Fortune 500 scale.** Greener Robotics customers were pilot farmers, not corporate procurement. Amodeling customers were early SaaS users, not CISO-reviewed enterprise accounts. Molebie is open-source — no procurement cycle at all. I haven't navigated SOC2 audits, enterprise security questionnaires, or architecture review boards. **Mitigation:** I'd want to ramp in the first 60 days by shadowing a senior ESE through 2–3 active enterprise deals' procurement phases. If the role requires someone who can navigate that solo on day one, I'm not that candidate. If it requires someone who ramps fast on procurement while delivering on the architecture/self-service side, that's me.

### Q8: How would you approach your first 30/60/90 days as ESE at ElevenLabs?
> **Days 1–30:** Build my own end-to-end integration with ElevenLabs's API + SDKs — a full customer workflow on public tooling so I've felt every friction. Shadow 2–3 senior ESEs on active enterprise deals, including at least one procurement/security phase. Ship the weekend voice-agent wrapper around Molebie as my "ramp proof." **Days 31–60:** Own the technical side of one enterprise deal alongside an AE, under senior supervision. Identify the most common recurring integration objection / technical blocker and ship a reusable asset that handles it — demo pattern, debugging runbook, or integration template. **Days 61–90:** Own one ESE relationship end-to-end for a mid-enterprise customer. Propose at least one "productise this pattern" opportunity to Product based on what I saw across the quarter. By end of quarter: one reusable asset in the shared library, one product feedback loop active, credible Python-production history on customer-facing code.

### Q9: What's your salary expectation?
> £65–£85K base + equity as offered. I'm anchoring inside my estimate of ElevenLabs's realistic ESE band for Europe (mid-to-upper mid IC level), not the senior end, because my enterprise-procurement depth is the gap I'm honest about. Single-number fallback: **£72K base**. I care more about equity and a 6-month review tied to real milestones (one ESE deal owned end-to-end, one reusable asset shipped, voice-stack ramp complete) than base creep. Happy to discuss structure in the recruiter call.

### Q10: How did you hear about us?
> Same as the Deployment Strategist application — scanning Ashby this week for UK-based AI scaleup customer-facing technical roles. ElevenLabs's open YOE bar is what made me apply to both roles same day.

### Q11: Do you require visa sponsorship to work in the UK?
> No. BN(O) visa.

### Q12: Are you applying to any other roles at ElevenLabs?
> Yes — the **Deployment Strategist Europe** role (submitted first, before this one). Both map to shapes I've been doing as a founder. Deployment Strategist leans more strategist-builder (synthesise → architect → deploy), this ESE role leans more productise-the-pattern (architect → enable → self-service). My primary preference is Deployment Strategist given my archetype profile, but this role is a real fit for the "productise what repeats" instinct. You're better placed than me to calibrate where I'd add the most value.

### Q13: When can you start?
> Two weeks from offer acceptance. The voice-agent wrapper around Molebie would ship in the intervening weekend — working artefact on day one.

### Q14: Anything else you'd like us to know? (Optional)
> Same two things as the Deployment Strategist application. **Trilingual** (EN / Cantonese / Mandarin) — relevant for ElevenLabs's 70+ language coverage and any Cantonese/Mandarin voice-agent expansion. And one honest framing note: **my enterprise procurement / compliance / security-review depth is the gap I know I'm carrying.** If the role needs that depth on day one, I'm the wrong candidate. If it rewards someone who'll ramp fast on procurement while delivering on architecture + self-service + Python from week one, that's where I'd add the most value.

---

## Notes for Jimmy before submitting

- **Submit AFTER Deployment Strategist (#024).** Q12 discloses the DS application — it needs to have gone in first, or the ordering reads wrong.
- **Live form fields not accessible.** Treat 14 Qs as superset. Likely live: Q1, Q2 (architecture), Q4 (Python), Q5 (self-service tool), Q6 (voice AI), Q7 (enterprise depth — this one is where they probably screen), Q9 (comp).
- **Two load-bearing commitments:** (1) voice-agent wrapper (shared artefact with DS apply — one weekend, two applications), (2) ramp-in-60-days framing on procurement. Don't promise the wrapper unless you'll ship it.
- **Salary anchor.** Report #025 est. £70-100K base for Europe ESE. Q9 anchors £65-85K (inside-band, mid-to-upper). Fallback £72K. Do not drop below £60K without strong equity offset.
- **The Q7 enterprise-depth honesty is load-bearing.** It's the section most likely to get you screened out if an ESE role actually needs someone with lived procurement/compliance reps. But honesty beats fakery; if you mask this gap and get hired, you'll hit it in month three.
- **Verify Q2 (Molebie provider abstraction) and Q5 (CLI wizard drop-off halved)** against your actual codebase / Molebie user logs. Edit numbers if they drift.
- **Resume upload.** `output/cv-jimmy-elevenlabs-ese-uk-2026-04-21.pdf` — 2 pp A4, 112 KB. Lead bullets on Molebie emphasise architecture + provider abstraction (different from DS version which leads on deployment). Verify it reads as ESE candidate.
- **Cover letter.** `interview-prep/elevenlabs-ese-cover-letter-2026-04-21.md`. Attach or paste body.
- **Post-submit housekeeping (manual):** update `applications.md` row #025 from `Evaluated` → `Applied`, flip PDF ❌ → ✅, update notes.
- **Do not submit.** Read every answer. Edit. Then hit Apply yourself.
