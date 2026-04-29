# Interview Intel: Elyos AI - Founding Software Engineer

**Date:** 2026-04-24
**Company:** Elyos AI (YC S23)
**Role:** Founding Software Engineer (confirmed 2026-04-24)
**Location:** Old Street, London - 5 days/week on-site (confirmed 2026-04-24 - still firm for this role)
**JD URL:** Public URL pending - JD text shared directly by recruiter on 2026-04-24. Full JD now captured in `reports/030-elyos-founding-swe-2026-04-24.md` (Block A).
**Recruiter contact:** Nick Pedersen, Head of Talent @ Elyos AI - routed Jimmy here from his #021 (CS Lead) / #022 (Solutions Engineer) applications.
**Parent reports:** #021 (CS Lead, 4.3/5), #022 (Solutions Engineer, 4.0/5). **Canonical report: #030 (Founding SWE, 4.6/5 - fresh A-G on confirmed JD 2026-04-24).**
**Status:** Pre-interview. Recruiter response confirmed. Awaiting next-stage format, timeline, and comp band.

---

## 1. Role context and routing implications

**What happened:** Jimmy applied to two Elyos roles on 2026-04-21 - Founding CS Lead (primary) and Founding Solutions Engineer (stretch). Both cover letters and apply-drafts disclosed the dual application and said "you're better placed than me to calibrate where I fit." On 2026-04-24, Elyos responded and routed him toward a **third** role: Founding Software Engineer.

**What that signals:**
- Elyos liked the candidate, not just the CS-shaped answers. The Molebie AI + Greener Robotics builder profile read louder than the CS framing.
- They think he sits more naturally as an IC engineer shipping product than as a customer-facing hire. Likely driven by: Python/FastAPI, 5-backend LLM inference layer, RAG, CLI onboarding wizard, open-source maintenance - that's an engineer's CV re-framed as CS.
- "Founding SWE" at a ~10-person Series A is a **senior-flavoured IC seat**: small team, no PM buffer, direct founder collaboration, product-shaping responsibility. Not a junior engineer role.
- It is also an **upgrade in comp band** vs. CS Lead (est. +10-20K base) and **arguably more equity** at Series A.

**Risk:** "Founding SWE" at YC S23 Series A can secretly want a senior engineer (5-7 YOE, shipped production at scale). Jimmy does not have a prior "engineer" title. The routing is a positive signal, but he needs to test what level of SWE they mean in the first 5 minutes of the recruiter call, not after three rounds.

**Status of the 6 first-5-minutes questions (updated 2026-04-24):**
1. Exact title + public JD URL - **CONFIRMED: Founding Software Engineer.** Public JD URL still pending (Nick shared JD text direct); ask for the live link.
2. Seniority level targeted - **OPEN.** Ask Nick.
3. Engineering team today (size, backgrounds) - **OPEN.** Ask Nick.
4. Comp band (base + equity) - **OPEN.** Ask Nick.
5. Loop shape + expected timeline - **OPEN.** Ask Nick.
6. 5 days on-site Old Street firm - **CONFIRMED: yes, still firm for this role.**

Frame it as: "Happy to go SWE - I want to make sure we line the level up so you're not pitching me into a box I'll bust out of."

---

## 1b. Message to send Nick BEFORE the first call

Short, professional, one email. Drafted for Jimmy to adapt. The goal: resolve the four open questions (seniority, team shape, comp, loop) before walking into round 1 unprepared. Sending this is also a light signal-of-seriousness move.

> **Subject:** Elyos Founding SWE - a few things before we chat
>
> Hi Nick,
>
> Thanks for routing me toward the Founding Software Engineer role - appreciate the recalibration, it matches my actual shape (two-time founder, Molebie AI open-source full-stack shipped solo in 28 days: Python/FastAPI + React/TypeScript + SQLite + RAG + 5-backend LLM inference layer).
>
> Before we jump on the call, four quick things so I can come prepared rather than improvise:
>
> 1. **Level.** Is this the first engineer-type seat at Elyos, or a senior IC seat to complement an existing team? I want to calibrate how I pitch my founder-reps vs production-scale reps.
> 2. **Team shape today.** How many engineers are on the team now, and what are their backgrounds? Helps me know where I'd plug in and where the biggest gaps sit.
> 3. **Comp band.** What's the base + equity range you're hiring into? I'd rather get that on the table early than discover a mismatch three rounds in.
> 4. **Loop.** What does the interview loop look like, and what's the expected timeline? Happy to ship a voice-AI spike on top of Molebie before round 1 if useful - I want to convert the voice-stack gap from a commitment into a live repo.
>
> Happy to do this as a call or async - whichever is easier for you.
>
> Jimmy

**Notes before sending:**
- Keep it under 220 words. Don't apologise for asking, and don't bury the questions.
- The Molebie one-liner is load-bearing - it pre-answers "why are we talking" so Nick doesn't have to.
- The voice-AI spike offer in Q4 is the hook. It's cheap, high-signal, and it lets Nick choose whether to pull round 1 forward or keep it standard. Don't commit to a delivery date in the email - commit on the call once you know the loop.
- If Nick has already booked a call, collapse the email to a one-liner: *"Quick note before we chat - could you share the comp band, team shape, and loop timeline? Happy to cover it live, but helpful to have context going in."*

---

## 2. Company intel (consolidated)

Pulled from #021/#022. Keep tight - augment in the call if something changed.

- **Stage:** Series A, $13M (EUR 11.1M), raised January 2026. YC S23 (summer 2023 batch). Two-year-old company.
- **Team:** ~10-15 people. Small enough that founding-SWE is a meaningful IC seat with direct founder collaboration.
- **Founders / leadership:** Adrian (CEO) is named in both sibling JDs as the direct collaborator. Worth naming him by name in any free-text if appropriate.
- **Product:** AI voice agents for call centers, starting with field-service SMBs (HVAC, plumbing, trades, home services). Agents take inbound calls, book jobs, take payments, deliver CS-grade responses. Real production traffic.
- **ICP:** SMB field-service, UK-first, high-call-volume businesses where missed calls cost real money.
- **Recent press:** EU-Startups Series A announcement (Jan 2026), StartupWired, TheTechFounders.
- **Competitors (rough):** PolyAI (UK, voice AI, enterprise-scale), Regal.ai (US), Replicant, Cresta (adjacent, contact-center AI), Vapi / Bland AI (voice AI dev platforms, more horizontal). ElevenLabs on the voice-infra side but not direct.
- **Tech stack signals (likely, to confirm):**
  - **Backend:** Python (standard for LLM/agent shops), likely FastAPI or similar; possibly some Node/TypeScript for realtime layers.
  - **AI stack:** LLM orchestration (likely OpenAI/Anthropic primary, Deepgram or similar for STT, ElevenLabs or similar for TTS, VAD either off-the-shelf or custom), tool-use/agent loop, memory layer.
  - **Infra:** Cloud (AWS or GCP; confirm). Realtime audio pipelines (WebRTC or similar).
  - **Frontend:** React/Next likely for the customer-facing dashboards.
  - **Data:** Postgres likely; possibly a vector DB for retrieval.

---

## 3. Likely interview loop

**Typical founding-SWE loop at a YC S23 Series A (~10-15 people):**

1. **Recruiter screen (30 min)** - motivation, comp, logistics, level-fit, relocation status. Light on technical.
2. **Founder / hiring-manager 1:1 (45-60 min)** - "why us, why SWE, walk me through your proudest build, where's your gap?" Voice-AI interest check. Culture-fit and urgency signals.
3. **Technical deep-dive or take-home (1-4 hours async, or 60 min live)** - either a take-home (more common at YC startups because fair for busy candidates) or live pair-programming on a small agent-loop or integration task.
4. **System design with a founder / senior engineer (45-60 min)** - "design X for Elyos." Likely: design a voice-agent orchestrator, a call-routing layer, a retry/fallback system, or a multi-tenant workflow engine.
5. **On-site / final (half day, probably Old Street)** - meet the team, possibly a whiteboard session, cultural fit, comp conversation, offer framing.

**Where Jimmy likely is right now:** **Stage 1 - recruiter screen, heading into Stage 2 founder 1:1.** The routing email replaces the normal "do you want to chat?" gate.

**Prep priority order:** recruiter screen + founder 1:1 first. Technical take-home / system-design worth 30% of prep energy now; swap that up after Stage 2.

---

## 4. Questions Jimmy should expect (15-20)

Grouped. For each: **(a)** the question, **(b)** a <=120-word suggested answer in Jimmy's voice, **(c)** what NOT to say.

### Motivation

**Q1. "Why Elyos, why now?"**
(a) Answer:
> Three reasons. One - you're a voice-AI company whose customers make money when the agent works. Plumbers taking bookings, payments clearing, jobs dispatched. Higher production bar than most AI products. Two - Series A $13M, YC S23, ~10 people, Old Street 5 days in-office. That's the "earn and learn" stage I'm relocating from Glasgow to London specifically to plug into. Three - "engineer who shapes what we build" is the one-sentence founder job description. I've done three years of it at two startups. Elyos is the first Series A in London where I can do it without building the company around me.

(b) Watch-out: Do NOT say "I've always been passionate about voice AI." He hasn't - Molebie is text. Staying honest here primes the voice-AI gap answer later.

**Q2. "We routed you from CS / SE to SWE - how do you feel about that?"**
(a) Answer:
> Honestly, relieved and on-board. I applied to both sibling roles because I have founder reps across engineering, product, and customer work and asked you to calibrate where I fit. You read the CV as an engineer-first, customer-capable profile. That matches how I see myself too - I'm at my best when I'm writing the code that solves the customer problem, not just coordinating around it. Two things I'd want to pin down early: what level of SWE you mean - first engineer-ish or senior IC - and comp band. Beyond that, I'm in.

(b) Watch-out: Do NOT sound like you prefer CS/SE and are settling. Do NOT over-correct and dismiss the customer-facing roles; the dual-hat instinct is a strength at a founding SWE seat.

**Q3. "Walk me through your background in 90 seconds."**
(a) Answer:
> Econ MA at Glasgow, then three years of founder-operator work. First startup - Greener Robotics, 18-month IoT smart-agri play, 2-4 person team, hardware and software, demos at Barclays Eagle Labs, MIT Climate and Energy Prize, YC Startup School. Second - Amodeling, AI SaaS turning text and images into 3D-printable models, hit #8 on Product Hunt, 106 upvotes, I ran UI, presales, onboarding, and QA. Current project - Molebie AI, open-source full-stack AI assistant. Python/FastAPI backend, React frontend, 5 LLM backends behind a typed provider abstraction, RAG memory, CLI onboarding wizard, shipped in 28 days. I relocated to London specifically for this stage of career.

(b) Watch-out: Do NOT apologise for not having a "real engineer" title. Do NOT bury Molebie - it's the artefact that got him routed to SWE.

### Technical background

**Q4. "Walk me through Molebie."**
(a) Answer:
> Molebie is a full-stack open-source AI assistant I built in 28 days. Python/FastAPI backend, React frontend, SQLite persistence, RAG for document memory. The core piece is a typed provider abstraction in front of 5 LLM backends - OpenAI, Anthropic, local Ollama, a fine-tuned variant, and an open-weights hosted model. A request hits a router that picks a provider by task and user config, enters a tool-aware agent loop with short-term memory in SQLite plus a long-term RAG layer over user documents. The loop terminates on natural stop or a step budget. Errors flip to the next provider in the fallback list so one outage doesn't kill the session. A CLI wizard wraps all of it - env detection, API-key prompting, sane defaults - which cut setup from hours to under 5 min.

(b) Watch-out: Do NOT invent numbers for backend latency or scale - he has not reported them. Stay at architecture and design level.

**Q5. "Why the provider abstraction? Why not just wrap one vendor?"**
(a) Answer:
> Three reasons. One - no single vendor gave me all three of strong tool-use, affordable long-context, and local-run privacy. So the system needed to mix. Two - LLM pricing and quality churn monthly. If I coupled the loop to one SDK, every provider switch was a rewrite. The abstraction is a cheap insurance policy against that churn. Three - fallback-on-error. If Anthropic 529s, I'd rather the session finish on OpenAI than crash. The cost is a typed layer with ~100 lines of adapter code per provider and one test matrix. Worth it. The same pattern fits Elyos - STT, TTS, and LLM vendors all churn; a typed provider layer saves you every time a vendor re-prices.

(b) Watch-out: Do NOT dismiss "just wrap one vendor" as naive - at very early stage it's often the right call. Frame your choice as context-specific.

**Q6. "Walk me through how RAG is implemented in Molebie."**
(a) Answer:
> User drops documents in a local folder. The ingestion pass chunks by semantic boundary - paragraph first, hard cap as a safety - then embeds each chunk and writes to SQLite with the source, chunk index, and embedding. On a query, I embed the query, retrieve top-K by cosine against the stored embeddings, and stitch the chunks into the system prompt with source tags so the LLM can cite. Nothing clever at this scale - the win is that it's local, SQLite-backed, and the whole thing runs in a single process. Trade-offs: no reranker yet, no hybrid lexical+vector, no chunk overlap tuning per doc type. Those are the next items if Molebie ever scales past personal-plus-small-team use.

(b) Watch-out: Do NOT claim production-scale RAG - he doesn't have millions-of-docs retrieval. Be clear about scale.

**Q7. "What's the hardest technical decision you've made on Molebie?"**
(a) Answer:
> Where to put the tool-use loop. Option A - embed inside each provider adapter so each vendor's tool-use format stays idiomatic. Option B - hoist the loop above the adapter and normalise tool-use into a common shape the loop drives. I went B. Cost: a normalised tool-call schema and more adapter code to translate vendor-specific tool responses back up. Benefit: one loop to test, one place to add step budgets and fallback, consistent behaviour across 5 backends. If I'd gone A, every new provider would have been a new agent-loop implementation. The shared loop is why adding the 5th backend took hours, not a weekend.

(b) Watch-out: Do NOT invent an alternative design you did not seriously consider. This is the one he made.

**Q8. "Tell me about a time real-world deployment was messier than you expected."**
(a) Answer:
> Greener Robotics, 18 months. Multi-sensor IoT across 8 pilot farms. Hardware and software had to integrate in the field, not in the lab. We had clock skew between edge devices, dropped packets over rural 4G, a labelling cost we'd underestimated, and one morning where timestamps drifted on a rainy day because the RTC wasn't temperature-compensated. My main move when the integration stalled was structural - I split the backlog into parallel hardware and software workstreams so neither side blocked the other, which rebuilt velocity. The lesson I carry: production AI with real customer stakes needs conservative defaults plus an aggressive post-mortem cadence. Ship fail-safe first, debrief every edge case within 24 hours, evolve defaults as you learn the environment.

(b) Watch-out: Do NOT claim the 5am-timestamp-drift detail unless he can recall the actual root cause - edit on the fly if memory is fuzzy.

### System design

System-design questions for Elyos will cluster around voice-agent production patterns.

**Q9. "Design a voice-agent orchestrator for a plumbing SMB taking inbound bookings."**
(a) Answer:
> I'd split it into five components plus the transport. (1) Transport - WebRTC or SIP ingress, audio frames in and out. (2) VAD plus turn-taking - decide when the caller stops talking, handle barge-in. (3) STT - streaming transcription into partial plus final segments, feeding the LLM layer as soon as you have a stable phrase. (4) LLM agent loop with tool-use - the brain. Tools: calendar-check, booking-create, payment-link, fallback-to-human. Step budget plus timeout per tool. Short-term memory in-session, long-term in Postgres keyed on the customer's business. (5) TTS - streaming back to the caller with low time-to-first-audio. Cross-cutting: a call-state machine so partial failures don't drop the caller, structured logs with call ID, and a shadow-mode toggle so every new tool ships behind a flag. I'd run the LLM layer and tool layer as separate services so the tool layer can retry without re-hitting the LLM.

(b) Watch-out: Do NOT over-spec. Call out when you're designing for day-one vs. day-one-hundred. Do NOT pretend to know the Elyos-internal stack - frame as "if I were starting from a blank page."

**Q10. "How do you handle an LLM or tool failure mid-call?"**
(a) Answer:
> Three layers. One - tool timeouts are short (1-2 seconds), with one silent retry. If the tool still fails, the agent gets a structured error back and is prompted to either try a recovery tool or explain to the caller. Two - LLM provider failover. Primary provider errors flip to a secondary after one retry; log both failures with call ID so post-mortem is cheap. Three - the hardest case, graceful degradation. If everything's degraded, the state machine has a "route to human" fallback with a recorded holding message and a ticket on the other side so we don't drop the caller silently. Dropped callers are the worst failure for a plumbing SMB - lost revenue plus damaged trust - so the fallback to human is the non-negotiable.

(b) Watch-out: Do NOT say "we retry the LLM forever" - fail fast, fall back, escalate.

**Q11. "How would you design a workflow engine that lets a customer define their own call flows?"**
(a) Answer:
> Day one - I wouldn't. I'd ship 3-5 opinionated templates (inbound booking, after-hours triage, payment collection) and instrument them. Day thirty - if a pattern keeps showing up in customer requests, I'd lift the top-2 variation points into config - "greeting script, business hours, tool allowlist." Day hundred - if the same pattern hits 5+ customers, I'd promote it to a typed YAML or JSON schema with a visual preview. I'd avoid a full visual builder until there's clear product-market fit on the config surface. The risk with a flexible builder day one is you ship an engine nobody uses because the happy paths aren't opinionated. Start opinionated, unlock flexibility when evidence demands it.

(b) Watch-out: Do NOT propose a generalised workflow engine with drag-drop UI out of the gate - it's the wrong bet for a 10-person Series A.

### Coding

**Q12. "Can you walk me through a take-home?" (If they send one)**
(a) Answer prep:
> If take-home is a voice-agent-like task - pipe STT to LLM to TTS, implement fallback, handle timeouts. He should over-communicate the trade-offs in the README: what he scoped out, what he'd do with 2 more days, where the code is deliberately simple. Ship a working end-to-end version before polishing any one piece. Include a "how to run in 2 minutes" section - that's his signature.

(b) Watch-out: Do NOT spend 8 hours on a 4-hour take-home. Scope to the time budget, document the cut decisions.

**Q13. "Live coding: implement X." (DSA-lite or integration-style)**
(a) Answer prep:
> At seed / early-Series-A the live coding is usually not LeetCode. More often: "parse this API response, build a small client, handle errors," or "given this failing test, fix the bug." He's strong there. If it's DSA, flag honestly that his last LeetCode rep was years ago and ask if they want idiomatic-Python or algorithmic-optimal - most founders at this stage prefer idiomatic plus clear reasoning over micro-optimisations.

(b) Watch-out: Do NOT freeze if LeetCode-style and he's rusty. Talk aloud, write a brute-force, then optimise. Clarity beats speed.

### Founder-fit

**Q14. "How do you handle ambiguity?"**
(a) Answer:
> Greener Robotics when the hardware/software integration stalled is the clearest example. The spec was unclear because neither side knew the other's constraints. I restructured the backlog into parallel workstreams - hardware could ship without waiting for the software team and vice versa - and wrote a weekly "integration points" doc that made the coupling explicit. Ambiguity for me is a signal to make the coupling visible and then decouple where I can. I don't wait for specs; I write the one I'd want to read and ship it for review.

(b) Watch-out: Do NOT say "I love chaos." They want someone who handles ambiguity, not someone who generates it.

**Q15. "What's your rate of learning? Give me an example."**
(a) Answer:
> Molebie shipped in 28 days, 5 LLM backends, Python/FastAPI, React, RAG layer, CLI wizard. I hadn't shipped production FastAPI before that project. Two things I'd call out on method. One - I anchor on a working end-to-end skeleton by day 2 or 3, then deepen. The shape teaches you what you actually need. Two - I read vendor docs like test specs: I know exactly where each adapter broke and which edge case drove the abstraction. If voice AI is where Elyos needs me ramped, I'd expect to be dangerous in 2 weeks and productive in 4, based on the Molebie pattern.

(b) Watch-out: Do NOT claim perfect rates - calibrate to what he actually delivered.

**Q16. "Do you prefer owning things end-to-end or specialising?"**
(a) Answer:
> End-to-end. Every project on my CV is an end-to-end build - Greener Robotics sensors-to-dashboard-to-pitch, Amodeling idea-to-Product-Hunt-launch, Molebie prompt-to-production. I think I'm a better engineer because I've seen the full loop. At a 10-person Series A that ownership is a feature. I'm also aware the scaling shape is different - at 40 people I'd specialise without resenting it. But right now, at Elyos's stage, end-to-end is where I add the most.

(b) Watch-out: Do NOT dismiss specialisation - they may want him to own a domain after 6 months.

### Culture, comp, logistics

**Q17. "Why London 5/5?"**
(a) Answer:
> Deliberate. I'm relocating from Glasgow specifically to plug into the London startup ecosystem. Old Street in-person is a feature for me, not a constraint. I learn faster around other builders, and founding-era teams make better decisions in person when the company is still being shaped.

(b) Watch-out: Do NOT hedge with "I prefer hybrid" - this is 5/5 on-site and he actually wants it.

**Q18. "What's your comp expectation?"**
(a) Answer:
> For Founding SWE at a London Series A YC S23 company, my read of the market is roughly 70-95K base plus meaningful equity. I'd anchor inside that at 75-88K base, with headroom on equity - which at Series A is the asymmetric bet. Single-number fallback if the form forces one - 80K base. I'd prefer a slightly lower base with a stronger equity grant and a 6-month review tied to shipped milestones over anchoring top-of-band on base alone. Happy to discuss structure.

(b) Watch-out: Do NOT anchor below 70K base - he's a builder with two startups behind him, not a grad hire. Do NOT anchor above 95K without an equity story he's willing to trade.

**Q19. "Notice period? Start date?"**
(a) Answer:
> Two weeks from offer acceptance. I can compress to one week if needed. I'd use the gap to ship a voice-agent wrapper around Molebie's existing agent loop - STT to my loop to TTS with a mocked field-service workflow - so I arrive with a working artefact instead of a blank notebook.

(b) Watch-out: Do NOT over-commit on the voice-wrapper unless he's going to ship it - it's load-bearing across several answers.

**Q20. "Anything else we should know?"**
(a) Answer:
> Two things not on the CV. Trilingual - English fluent, Cantonese native, Mandarin fluent. Meaningful the day Elyos considers Cantonese/Mandarin voice agents for UK Greater China SMBs - Chinatown plus Shoreditch restaurants, logistics, import-export - or direct APAC expansion. And a framing note: I know my voice-AI experience is lighter than a pure-play voice engineer. My bet is that LLM, agent-loop, customer-deployment, and Python-builder reps compensate at the founding-SWE stage, and that the voice-wrapper spike will show the ramp is time-bounded. If that bet doesn't land for you, I'd rather know early.

(b) Watch-out: Do NOT end on the weakness. The trilingual and "I'd rather know early" framing keeps the close strong.

---

## 5. STAR+R stories - SWE-framed (5)

These skew technical. Existing `story-bank.md` is empty, so these become the first five entries. Append to the bank after the interview loop closes.

### Story 1 - Molebie inference-layer abstraction decision

- **S (Situation):** Building Molebie AI solo in 28 days. Had to support OpenAI plus Anthropic plus local Ollama plus two more LLM backends from day one because no single vendor gave all three of tool-use, long-context, and local privacy.
- **T (Task):** Decide where to put the tool-use / agent loop. Embed in each vendor adapter (idiomatic per-vendor) or hoist above the adapter (normalised, shared loop).
- **A (Action):** Chose hoisted. Designed a normalised tool-call schema, wrote adapters that translate vendor-specific tool responses up to the shared shape, built the loop once with step budgets and fallback-on-error. Added the 5th backend in hours not a weekend because the new code was just an adapter, not a new loop.
- **R (Result):** 5 backends live. One loop, one test matrix. Setup via the CLI wizard dropped from hours to under 5 min for end users. Zero regressions when a backend re-priced or changed its tool-use format - swap the adapter, ship.
- **Reflection:** The cost of a clean abstraction at day 1 is maybe 20% more code. The cost of not having it at day 30 is a rewrite. Worth it when you know you'll have more than two providers. Not worth it if you'll have exactly one for 12 months.
- **Best for questions about:** architecture decisions, trade-offs, abstractions, "why did you design X like that," "technical decision you're proud of."

### Story 2 - Molebie RAG layer design

- **S (Situation):** Molebie users wanted the assistant to "know" their local documents - notes, PDFs, working files - without leaking anything to a cloud provider.
- **T (Task):** Ship a RAG layer in the 28-day window that was local-first, simple enough to maintain solo, and good enough for personal-to-small-team scale.
- **A (Action):** Chunked by semantic boundary (paragraph first, hard cap as safety), embedded each chunk, stored in SQLite with source + chunk index + embedding. On query - embed, top-K cosine, stitch into prompt with source tags so the LLM cites. Explicitly scoped out reranking and hybrid lexical-plus-vector and per-doc-type overlap tuning - flagged them as "next if scale demands."
- **R (Result):** Shipped RAG inside the 28-day budget. Works well enough for single-user and small-team use. The whole stack runs in one process - no Pinecone, no Weaviate, no separate vector service. Lower ops burden, same user experience at the target scale.
- **Reflection:** Match the retrieval design to the scale you actually have, not the one you wish for. SQLite-backed cosine is underrated for <100K chunks. I'd revisit rerankers the day the top-K misses become noticeable to users.
- **Best for questions about:** RAG design, "how would you build retrieval," pragmatic engineering, scope cuts, "when to add infrastructure."

### Story 3 - Greener Robotics hardware/software parallelisation

- **S (Situation):** Greener Robotics, 18-month smart-agri startup. 2-4 person cross-functional team. Hardware and software integration stalled - each side was blocking the other, velocity collapsed.
- **T (Task):** Unblock both sides without hiring, without descoping the MVP past the point of pilot viability, and in time for the next set of pilot farmer deployments and the STAC accelerator demo.
- **A (Action):** Restructured the backlog into parallel hardware and software workstreams with explicit "integration points" documented as the only coupling surface. Hardware shipped against a mocked software contract; software shipped against a mocked hardware contract. Weekly integration-point review caught drift early.
- **R (Result):** Both sides unblocked within two weeks. Pilots deployed on time. Demos landed at Barclays Eagle Labs, MIT Climate and Energy Prize, and YC Startup School. Won Judges' Commendation for Startup of the Year at Glasgow.
- **Reflection:** Coupling is the enemy when teams are small. Making the coupling visible and then collapsing it into a thin contract is usually cheaper than re-organising people. I'd do the same thing earlier next time - I lost probably two weeks before I made the call.
- **Best for questions about:** handling ambiguity, technical leadership, unblocking teams, parallelising workstreams, deployment messiness, "tell me about a hard decision."

### Story 4 - Amodeling launch playbook execution

- **S (Situation):** Co-founded Amodeling - AI SaaS converting text and images into 3D-printable models. Getting to a Product Hunt launch in a narrow window with a small team.
- **T (Task):** Build, ship, onboard, and launch the product while running the customer engagement loop that would drive upvotes and word-of-mouth.
- **A (Action):** Every early customer got a bespoke POC - their content, a real generated model, a walkthrough of what worked and what broke. Wrote each failure mode into the product backlog and into the template for the next customer. Ran presales, onboarding, QA pipeline, and UI design as one loop.
- **R (Result):** **#8 on Product Hunt, 106 upvotes** launch day. Onboarding-to-feedback cycle was fast enough that the next customer always got a better version than the one before.
- **Reflection:** Customer-by-customer POC is slow early and fast late - each POC is also a test and a template. I'd set up that loop on day one of any new product now.
- **Best for questions about:** shipping velocity, customer-facing engineering, product-engineering intersection, launch execution, "tell me about a project you're proud of."

### Story 5 - 3D printing as "always-shipping" culture signal

- **S (Situation):** Running a live 3D-printing business in parallel with everything else - CAD design, FDM / resin printing, customer consulting, fulfilment. 100-200/month recurring revenue, near-perfect 5-star rating.
- **T (Task):** Stay profitable and 5-star while juggling Molebie, Amodeling post-mortem, and the London relocation.
- **A (Action):** Treated the printing business as a forcing function for shipping discipline. Every order is a tiny production deploy - slice, print, QA, pack, ship, follow up. Turnaround times measured in days not weeks. No "we'll refactor next week" - the next print goes out tomorrow or not at all.
- **R (Result):** Revenue stable, reviews stable, zero catastrophic failures. Taught me more about delivery discipline than any textbook.
- **Reflection:** Side businesses force you to finish things. Software engineers who only ship under their employer's deadline often struggle with personal-project completion. Running something small with real money and real deadlines fixes that.
- **Best for questions about:** operational discipline, always-shipping culture, founder mindset, side projects, "what do you do outside of work."

---

## 6. Questions Jimmy should ask Elyos (10)

Mix of product, engineering culture, team, founder-fit, comp/equity, red-flag probes. Pick the 4-5 sharpest for round 1; keep the rest for later rounds.

### Product direction
1. "Who's the customer you built this for - what's the tightest ICP right now, and what's the wedge you're expanding from? Field-service SMB UK, or is it already broader?"
2. "What does the moat look like in 18 months? Voice-agent tech is getting commoditised fast - is the defensibility the vertical depth, the workflow library, the data flywheel, or the integrations?"

### Engineering culture
3. "What does the shipping cadence look like? Deploys per day, feature flags, on-call rotation - all of it. Where's the friction today?"
4. "How does code review work at ~10 people? Who reviews whom, and what's the expected turnaround?"

### Team
5. "How many engineers today, and what does the team look like 12 months from now? If I'm the founding SWE, who are the next 3-5 engineering hires after me and what seats are they filling?"

### Founder-fit
6. "What does Adrian do at Elyos that drives him crazy about his own company right now? I want to know where the pain is before I join, not after."
7. "How do you make technical decisions at this stage - founder call, RFC-style, consensus? Walk me through the last architectural decision the team made."

### Comp and equity
8. "What's the equity grant look like for this seat - percentage, vesting schedule, cliff, and - important - any acceleration on change of control? At Series A that's the asymmetric part of the offer and I want to understand the full shape."

### Red-flag probes
9. "What's the hardest technical problem on the roadmap right now? Real-time latency, LLM cost, reliability at scale, multi-tenancy, or something else? I'd rather know where the sharp edges are so I know what I'd walk into."
10. "What's churn looking like, and when a customer churns, what's the single most common reason? The answer tells me more about the product-market fit than any pitch slide."

---

## 7. Honest gap pre-empts

### Gap 1 - No prior "engineer" title on CV

**Likely question:** "You've been a founder, not an engineer - walk me through why we should hire you for SWE."

**Re-frame:**
> Titles lagged the work. At Greener Robotics and Amodeling I wrote code that customers used - Python, TypeScript, React, FastAPI, IoT data pipelines. Molebie is 100% my code, open source, readable. The founder label was accurate but it undersold the engineering reps. At Elyos's stage, "founding SWE" is closer to what I already do than a mid-IC role at a 200-person company would be - first engineer seats are generalists with product instinct, not specialists with a narrow depth. That's me.

### Gap 2 - Limited production cloud (AWS/GCP)

**Likely question:** "What's your cloud experience? AWS, GCP?"

**Re-frame (same plan as the Isidor draft):**
> Limited hands-on production cloud. Molebie runs on a VPS plus local. Greener Robotics ran on GCP for the data pipeline but I wasn't the primary operator. My plan to close this - I'd do a GCP-first ramp starting in week 1, anchored on a concrete self-assigned onboarding project: stand up a small Elyos-shaped service in GCP end-to-end in my first two weeks. Cloud Run plus Pub/Sub plus Postgres plus secrets - whatever the Elyos stack actually is. I'd rather do the ramp against a real target than against Coursera. Happy to scope the onboarding project with the team on day one.

### Gap 3 - No voice-AI experience

**Likely question:** "Elyos is a voice-AI company. Your AI work has been text. How are you going to ramp?"

**Re-frame + artefact commitment:**
> Honest answer - zero production STT / TTS / VAD. My AI work is text LLMs, tool use, RAG. The architectural mindset transfers - provider abstraction, fallback-on-error, latency budgeting, streaming - but the specific voice stack is new. Before our first technical round I'd ship a voice-agent wrapper around Molebie's existing agent loop. Pipe Whisper or Deepgram STT in, ElevenLabs or Piper TTS out, a simple VAD for turn detection, a mocked field-service workflow - booking a hypothetical HVAC job. Roughly 3-6 hours of weekend work. That turns "judge me on potential" into "judge me on a working artefact." I'll share the repo link before the call. If that spike lands badly, I'd rather know early - that's useful signal for both of us.

Commitment: **Ship the voice-wrapper spike before round 1.** It's referenced in gap-3, in the 30/60/90, and in the "notice period" answer. Load-bearing across the whole loop.

---

## 8. Logistics checklist (pre-call)

- [ ] Confirm exact role title and public JD URL (ask the recruiter directly).
- [ ] Confirm next-stage format - recruiter screen, founder 1:1, take-home, live coding, full loop timeline.
- [ ] Ask comp band early - base plus equity percentage plus vesting / cliff / acceleration.
- [ ] Confirm Old Street London 5/5 expectation is still firm for this role.
- [ ] Set up a trial Elyos account if public; if not, ask for a demo / product walkthrough.
- [ ] Watch every public Elyos product demo video (YC S23 batch demo day if available, any founder-interview clip, any product walkthrough on the careers site).
- [ ] Re-read Molebie source code on GitHub - he may be asked to screen-share or walk through a function at founding-SWE stage. Specifically re-read the provider abstraction, the agent loop, and the CLI wizard.
- [ ] Re-read the Series A coverage (EU-Startups, StartupWired, TheTechFounders) - quick mental refresh.
- [ ] Look up Adrian (CEO) on LinkedIn - background, where he's built before, recent posts. Mention something specific in the call.
- [ ] Skim competitor landing pages (PolyAI, Regal.ai, Replicant, Vapi) for 20 minutes - know the adjacent space.

---

## 9. Notes for Jimmy before the call

- **The routing is a positive signal. You are the candidate; they are choosing. Hold that frame.** Walk in as "I'm choosing you," not "please hire me." The dual-application disclosure on 2026-04-21 plus this re-route on 2026-04-24 means Elyos already pre-selected past the archetype question.
- **Spend the first 5 minutes pinning down role level and comp band.** Everything downstream - technical depth, system-design complexity, comp anchor - depends on whether "Founding SWE" here means "first engineer seat, 3-5 YOE equivalent" or "senior IC complementing 2 existing engineers." Don't assume.
- **Do NOT re-litigate CS vs. SE vs. SWE.** They decided. Accept the routing and move forward.
- **Two artefacts are worth shipping BEFORE round 1** - pick from the carry-over list from #021/#022:
  1. **Voice-agent wrapper around Molebie's agent loop** (STT -> Molebie loop -> TTS, mocked field-service workflow). ~3-6h. **HIGHEST LEVERAGE** - this closes the voice-AI gap and is referenced across gap-3, 30/60/90, and notice-period answers. Ship this one.
  2. **3-min Molebie Loom walkthrough** - narrate the provider abstraction plus the CLI wizard. ~1-2h. Nice-to-have, especially useful if the recruiter asks for a portfolio artefact before the founder 1:1.
  3. Mock-customer-workflow-in-Elyos's-trial is less load-bearing for SWE than it was for CS/SE - skip unless the product is fully self-serve.
- **Do NOT submit / record / ship anything without reading it twice.** Especially the voice-wrapper repo README - that's what they'll actually see.
- **Comp anchor for SWE:** 75-88K base inside a 70-95K band; single-number fallback 80K. Don't drop below 70K without a strong equity offset. This is higher than the CS Lead anchor (55-68K) and the SE anchor (60-78K) because Founding SWE at Series A carries a higher base band.
- **Trilingual and relocation framing stays in.** Already landed in #021 and #022, worth keeping as the closer.
- **story-bank.md is empty.** After the first round, append Stories 1-5 from Section 5 above as the first entries so next company gets them for free.
- **Verification of specifics before going live:** the Molebie architecture narrative in Q4-Q7 plus Story 1-2 is consistent with cv.md but richer than cv.md - cross-check against actual Molebie source before quoting specifics (step budget, fallback ordering, SQLite schema). If recall is fuzzy on any particular detail, generalise to "the pattern is X" rather than quoting numbers.
