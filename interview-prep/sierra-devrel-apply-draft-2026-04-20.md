# Sierra — Developer Relations Engineer (London) — Application Draft

**Date:** 2026-04-20
**Based on:** Report #006 | Score: 4.1/5 | Archetype: Developer Advocate + Agent Software Engineer (hybrid)
**URL:** https://jobs.ashbyhq.com/sierra/23efd6e0-a64d-4421-b684-bbd44e5c752e
**Apply URL:** https://jobs.ashbyhq.com/sierra/23efd6e0-a64d-4421-b684-bbd44e5c752e/application
**Comp on JD:** £140K – £220K base + equity (GBP)
**Status:** Draft only — DO NOT submit until Jimmy reviews.

**Note on question set:** Sierra uses an Ashby form. Fetched the JD via the Ashby posting API (full description retrieved), but the live form fields themselves are JS-rendered so the exact form layout isn't visible. Questions below follow Sierra's standard Ashby founding-DevRel screener superset. Treat as a superset — some may not appear, some custom ones may surface. Adapt on the fly.

---

## Standard fields

| Field | Value |
|-------|-------|
| Full name | Ming Kit Chu (Jimmy) |
| Preferred name | Jimmy |
| Email | jimmymkzhu@gmail.com |
| Phone | +44 7843 812 677 |
| Location (city) | London (relocating from Glasgow) |
| LinkedIn | https://www.linkedin.com/in/jimmy-chu-844572247 |
| GitHub | https://github.com/Jimmy6929 |
| Portfolio / Website | https://toogoodtobechu.com |
| Work authorization (UK) | Yes — BN(O) visa, no sponsorship required |
| Work authorization (US) | No |
| Visa sponsorship needed | No |
| Resume upload | output/cv-jimmy-sierra-devrel-london-2026-04-20.pdf |
| Cover letter upload | output/cover-letter-sierra-devrel-2026-04-20.pdf |
| Salary expectation | £140,000 – £180,000 base (within posted £140–220K band) |
| Earliest start date | 3 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why are you interested in this role at Sierra?
> Your founding London DevRel role maps directly to the work I've been doing, just at smaller scale. I build AI agents full-stack for fun — Molebie AI is a multi-backend LLM assistant I shipped solo in 28 days with a CLI onboarding wizard that cuts setup from hours to under five minutes. That wizard is exactly the shape of the content a DevRel role at Sierra produces: reduce the distance between "powerful SDK" and "working in a customer's environment." Doing that for the Sierra Agent SDK + Agent Studio, in an in-person London team founded by Bret Taylor and Clay Bavor, is a step up worth making.

### Q2: Why Sierra, specifically?
> Three reasons. First, the founder pair — Bret Taylor running point on OpenAI's board and previously co-CEO of Salesforce, Clay Bavor running Google Labs — signals a technical bar and a teaching-through-product philosophy I want to work inside. Second, Sierra is one of the few AI-native companies where DevRel is a founding London hire, which means I'd write the EMEA playbook rather than inherit one. Third, your JD specifically calls out LangGraph, MCP servers, and AI-assisted coding with Claude / Codex / Cursor — that's the exact stack I've been building in, so the content loop compounds quickly.

### Q3: Tell us about a recent time you helped a customer or user learn a technical tool.
> Molebie AI's CLI onboarding wizard. Early open-source users were dropping off at the "configure five LLM backends and a RAG index" step. I sat with the user flow, rebuilt it as a single interactive CLI, and shipped it the same week. Setup time went from hours to under five minutes. The wizard wasn't just code — it was a teaching artefact: each prompt surfaces a decision the user has to make, with sensible defaults and an explanation of why. That's the same mental model I'd bring to Sierra's Agent SDK onboarding path.

### Q4: Walk us through an AI agent architecture you have built.
> Molebie AI runs a modular inference layer across five LLM backends. The agent loop has three parts: a retrieval stage against a SQLite-backed RAG memory, a routing stage that picks the right backend based on request shape and cost, and an execution stage with structured output parsing. The FastAPI backend exposes this as a clean API; the React frontend and the CLI wizard both consume the same contract. The bit I care about most architecturally is the backend-abstraction — the caller doesn't know which LLM answered, which is what makes the SDK replaceable and the documentation tractable. (Happy to walk through the repo on a call; https://github.com/Jimmy6929.)

### Q5: What's your experience with LangGraph, MCP, or similar agent frameworks?
> Honest answer: Molebie AI's architecture is adjacent — multi-backend inference with a memory layer — but I haven't shipped production LangGraph or MCP code yet. Before the first technical interview I'll do two things as good-faith proof. (1) Port one Molebie agent loop to Sierra's Agent SDK (and/or LangGraph) and publish a short writeup on toogoodtobechu.com — "What I learned porting Molebie's agent loop to the Sierra Agent SDK." (2) Record a 10-minute Loom walking a prospective developer through the port, so you can judge teaching style rather than infer it from bullets. I'll drop both links in the application once they're live.

### Q6: Tell us about a time you designed or executed a technical training or community initiative.
> As Marketing Director at the Glasgow University Entrepreneurship Society (2022–2023), I grew the community from 45 to 150+ members in one year — 233% year-on-year growth. The mechanics were the same ones that work for developer community: a regular cadence of events, tight positioning, amplifying member wins publicly, and being an accessible first point of contact. Student-scale, yes, but the growth mechanics transfer directly to DevRel. For technical training, Molebie AI's docs + CLI wizard + sample repos are my lightweight version of developer enablement material.

### Q7: Describe a complex technical project you've delivered end-to-end.
> Greener Robotics — 18 months running a 2–4 person cross-functional team across hardware and software. When our IoT sensors hit an integration stall, I restructured sprints into parallel hardware and software workstreams so both sides could iterate without blocking each other. We shipped in time to demo at **Barclays Eagle Labs, the MIT Climate & Energy Prize, and YC Startup School** — three high-signal rooms, 15 minutes each, no retakes. We took the Judges' Commendation for Startup of the Year at Glasgow. That's the cross-functional coordination muscle DevRel uses daily — except the audience is developers, not investors.

### Q8: How do you think about developer community? What makes one work?
> Three things. First, cadence beats polish — developers trust a community that ships weekly, even if each post is imperfect, over one that drops a beautifully-produced quarterly newsletter. Second, the feedback loop has to be real — developer suggestions that become product changes build more trust than any content artefact. Third, proximity to the code — DevRel that can't open the SDK and patch a bug loses credibility fast. I want to be the DevRel who fixes the thing while writing about it.

### Q9: Why do you think you'd be effective despite being earlier in your career than the 4+ years the JD asks for?
> Fair question, and I want to be direct. My CV reads as about 3 years of founder/maintainer reps rather than 4+ years as a titled developer. What I'd ask you to weight: volume of shipped output (Molebie AI in 28 days, Amodeling to #8 on Product Hunt, Greener Robotics to live demos at Barclays/MIT/YC), and the genuine match between what DevRel does and what I've been doing — onboarding, teaching, cross-functional communication. If the gap makes this a hard no, I appreciate the clarity. If it doesn't, I think I'd compound faster than someone on paper a year ahead of me.

### Q10: What are your salary expectations?
> £140,000 – £180,000 base. That's within your posted £140K–£220K band, anchored toward the lower-middle given the YOE gap. I'm flexible on structure — equity weighting and learning upside both matter at Sierra's stage, and I'd rather get the shape right than haggle on base.

### Q11: How did you hear about this role?
> Scanning Ashby directly for London AI startup roles in customer-facing technical positions. Sierra came up high on multiple filters — founding London, AI agent platform, in-person — and scored among the highest in my evaluation criteria for this career move. I applied the same day I found it.

### Q12: Are you authorized to work in the UK without sponsorship?
> Yes. I hold a BN(O) visa with full UK work rights. No sponsorship required now or at renewal.

### Q13: Sierra is primarily an in-person company based in San Francisco, with growing offices in London and elsewhere. How do you feel about that?
> Positive. I'm actively relocating from Glasgow to London for exactly this kind of role. Happy to travel to SF for onboarding ramp (a couple of weeks would be a net positive, not a cost), and happy to be physically present in the London office as the default mode. In-person compounds faster when the team is small.

### Q14: Anything else you'd like us to know? (Optional)
> Two things the CV won't surface. I'm trilingual — English fluent, Cantonese native, Mandarin fluent — which is first-language support for any DevRel content targeting APAC developer communities (Singapore, Japan, Greater China). And my 3D-printing side business (toogoodtobechu.com) runs on a near-perfect 5-star customer rating — the same customer-empathy default I'd bring to Sierra's early developer users.

---

## Notes for Jimmy before submitting

- **Form fields not confirmed.** Ashby form JS-rendered, superset used. Live form may have fewer or different questions.
- **Comp is in GBP directly on the JD.** £140K – £220K + equity. No USD conversion needed. Your £140–180K anchor is honest given YOE gap.
- **Q5 commits to a pre-interview artefact.** Only send the letter + answers if you'll actually port a Molebie agent loop to Sierra's SDK (or LangGraph) + write it up. Same commitment pattern as LangChain. If you don't want to, we rewrite Q5.
- **Q4 architecture wording.** Reconstructed from what's reasonable about Molebie AI's design (multi-backend routing, RAG via SQLite, FastAPI + React + CLI wizard). Cross-check against the actual codebase before pasting.
- **Resume upload.** Use `output/cv-jimmy-sierra-devrel-london-2026-04-20.pdf`.
- **Cover letter upload.** Use `output/cover-letter-sierra-devrel-2026-04-20.pdf` (same file I'll generate alongside this draft).
- **"How did you hear about us" dropdown.** Pick "Ashby" or "Job board" if forced to a fixed list; paste Q11 text into any free-text box.
- **Do not submit.** Review Q4 + Q5 carefully — those are the two paragraphs most likely to be followed up in a phone screen. Then you hit Apply.
- **Post-submit housekeeping.** Update `applications.md` row #6 from Evaluated → Applied, note submission date.
