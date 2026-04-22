# LangChain — Customer Engineer (London) — Application Draft

**Date:** 2026-04-20
**Based on:** Report #004 | Score: 4.0/5 | Archetype: AI Forward Deployed / Developer Advocate (hybrid)
**URL:** https://jobs.ashbyhq.com/langchain/a16d58f7-e210-495c-9e6f-82222267de3a
**Status:** Draft only — DO NOT submit until Jimmy reviews.

**Note on question set:** Both the Ashby posting API (`api.ashbyhq.com/posting-api/job-board/langchain?includeCompensation=true`) and the form page (`/application`) did not return the `applicationForm.sections` payload this session — the listing endpoint returned a paginated subset that did not include posting `a16d58f7-...` in the response window, and the form page is JS-rendered so WebFetch could not extract field labels. Playwright was not used per task rules (no touching the live form). Questions below follow the **standard Ashby Customer Engineer screener set** plus LangChain-specific custom screeners inferred from the JD (ecosystem familiarity, agent architecture walkthrough — LangChain is known to screen hard on these). Treat this as a superset — the live form may have fewer questions, or may add 1–2 not covered here.

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
| Work authorization (EU) | No |
| Visa sponsorship needed | No |
| Willing to travel up to 20% | Yes |
| Resume upload | output/cv-jimmy-langchain-customer-engineer-london-2026-04-20.pdf |
| Cover letter upload (if offered) | Generate and attach — same visual template as CV |
| Salary expectation | £60,000–£72,000 base (flexible; see Q on salary below) |
| Earliest start date | 2 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why are you interested in this role at LangChain?
> Your Customer Engineer role is the job I've already been doing as a founder, just without the scale. At Molebie AI I shipped a CLI onboarding wizard that cut setup from hours to under 5 minutes across 5 LLM backends — that's the same onboarding problem LangSmith faces with enterprise customers, except you have 233 people and a $125M Series B to do it with. Enterprise Enablement is where "builder who can teach" compounds: reference implementations, live workshops, docs that deflect the next ticket. I want to do that for a platform I'd be building on anyway.

### Q2: Why LangChain? What do you find compelling about what we're building?
> LangChain is the provider-agnostic agent runtime the rest of the ecosystem converged on — and Molebie's inference layer is a small, honest tribute to that pattern, swap providers don't swap apps. Three things make the stage right: (1) LangSmith enterprise traction, the Series B in October at $1.25B was a commercial bet on observability, not a research bet; (2) 233 employees, zero layoffs, actively hiring — the operational signals I look for; (3) "Customer Engineer" is still a named role here, not a buried CSM-with-extra-steps, which tells me enablement is treated as a first-class function. Rare combination. I'd take this as my first non-founder seat.

### Q3: Have you used LangChain, LangGraph, or LangSmith? If so, what for?
> Not in production yet — my agent work has been hand-rolled in Molebie. What I have done is read enough of LangGraph's state-machine model and LangSmith's trace viewer to know they are what Molebie's loop wants to become. I'm using the weekend before our first conversation to port one Molebie agent loop to LangGraph end-to-end and write it up on toogoodtobechu.com as "What I learned porting Molebie's agent loop to LangGraph." I'll send you the link before we meet. I'd rather answer this question with an artefact than a claim.

### Q4: Walk us through an agent architecture you have designed or built.
> **Molebie's multi-backend agent loop.** One interface in front of five LLM providers (OpenAI, Anthropic, local Ollama, a fine-tuned variant, and one hosted open-weights), behind a Python/FastAPI surface. Each request enters a small router that picks a provider by task type and user config, then runs a tool-aware loop with short-term memory pulled from SQLite and long-term memory from a RAG layer over the user's local docs. The loop terminates on a natural stop or a configured step budget; errors flip to the next provider in the fallback list so a single backend outage does not kill the session. The CLI onboarding wizard wraps the whole thing — env detection, API-key prompts, sane defaults — which is why setup dropped from hours to under 5 minutes. LangGraph would collapse my router + loop + fallback logic into a graph with much cleaner state transitions; that's the port I want to do.

### Q5: Tell us about a time you onboarded a customer or user onto a technical product.
> The Molebie onboarding wizard is the clearest case. Early users kept dropping off during setup — 5 LLM backends, multiple env configs, API keys in the wrong places. I wrote a CLI wizard that detected the environment, prompted for keys interactively, set sane defaults, and let the user get to first query in under 5 minutes. My own support load dropped overnight. Reflection I carry from it: **the best enablement is the one I don't have to give live.** Every recurring live question is a missing docs page or a missing default. For LangSmith enterprise that scales up — the reference implementation you merge once deflects a quarter of onboarding calls.

### Q6: Tell us about a time you presented technical content to a live audience.
> At Greener Robotics I demo'd our smart-agri IoT stack to three very different audiences in four months: Barclays Eagle Labs (investor), MIT Climate & Energy Prize (academic / judging panel), and YC Startup School (founder cohort). Same hardware rig, three rebuilt decks. The lesson I keep going back to: **rebuild the deck for the listener, never for yourself.** The Barclays version led with unit economics; MIT led with the hardware novelty and emissions math; YC led with velocity and the two-person-team story. For LangChain workshops I'd expect the same muscle — an enterprise architecture review, a hands-on developer session, and a Loom-style async walkthrough are three different artefacts even if the product is the same.

### Q7: Tell us about a time you turned customer feedback into a product or roadmap change.
> At Greener Robotics hardware/software integration stalled, and customer signal was fragmented across 8 pilot farmers. I ran structured interviews, separated wants from needs, and restructured the backlog into parallel hardware and software workstreams so neither side blocked the other. Result: both sides unblocked in time for the STAC accelerator demos and we stayed on investor-ready velocity. The reflection I use: **customers tell you what's wrong, not what to build — the translation is the job.** A Customer Engineer sits at the same translation surface, just against a roadmap instead of a dev plan.

### Q8: How would you approach your first 30/60/90 days as a Customer Engineer at LangChain?
> **Days 1–30:** Ship a small LangGraph reference implementation end-to-end to force my own onboarding — reuse the Molebie port as the starting point. Shadow the Deployed Engineering and Professional Services teams on 2–3 enterprise onboardings. Read the last 100 LangSmith support tickets (or Slack Connect threads) cold. **Days 31–60:** Own an EMEA-timezone coverage slice so US customers get overnight responses and UK/EU customers get a local owner. Pick one recurring onboarding friction point and ship the enablement artefact that kills it — a video, a template, or a tutorial. **Days 61–90:** Lead a live workshop (in-person if London; Loom + Zoom otherwise) on one LangGraph pattern enterprises actually ask for. Propose one structural improvement to the onboarding playbook based on the ticket log. By end of quarter, EMEA customers have a named Customer Engineer, enablement has one new artefact per month as a cadence, and product has a recurring digest from the ticket log.

### Q9: What are your salary expectations?
> £60,000–£72,000 base. That sits at the lower end of London Customer Engineer bands at comparable Series B AI infra companies (Vercel, Temporal, Datadog UK typically run £75k–£120k for mid), which I think is honest given I'm closer to 3 years of founder operator reps than the 5+ years in the JD. I'd rather anchor under market and have the conversation about equity, on-call/variable, and a 6-month review tied to real milestones (NPS from onboarded customers, first reference implementation merged, one shipped enablement artefact) than over-anchor and force a renegotiation. If the role downlevels to associate Customer Engineer I'm fine starting lower with clear promotion criteria on paper.

### Q10: How did you hear about this role?
> Scanning Ashby directly for London startup roles in customer-facing technical positions. LangChain came up on multiple filters — stage, tooling category, named "Customer Engineer" scope — and scored highest against my criteria for "build-and-teach" roles this week. I applied the same day I found it.

### Q11: Are you authorized to work in the UK without visa sponsorship?
> Yes. I hold a BN(O) visa with full UK work rights. No sponsorship required now or at renewal.

### Q12: Where are you currently based? Are you willing to work from London, and travel up to 20%?
> Currently splitting time between London and Glasgow and actively relocating fully to London for this kind of role. On-site or hybrid London is a positive, not a constraint. Up to 20% travel is fine — I'm UK-based with EU mobility for business trips, and my only fixed commitment is part-time ops at the University of Glasgow ARC which I'd wind down on offer acceptance.

### Q13: What is your earliest available start date?
> Two weeks from offer acceptance. I can compress to one week if needed; I'd use the gap to ship the LangGraph port mentioned above so I arrive with an artefact instead of a blank notebook.

### Q14: Anything else you'd like us to know? (Optional)
> One thing the CV won't show: I've been the founder who wrote the code, pitched the investors, onboarded the first customers, and answered the 11pm "it's broken" messages myself. I know what excellent Customer Engineering feels like from the builder's side — fast reproduction, honest status, and a fix that turns into a reference implementation so the same question doesn't arrive twice. That's the job I want to do for LangChain's enterprise customers. Also: trilingual (English fluent, Cantonese native, Mandarin fluent) — not on the JD, but useful the day LangSmith lands a Greater China design partner.

---

## Notes for Jimmy before submitting

- **Form fields not confirmed.** The Ashby posting API did not surface the `applicationForm.sections` for this posting in this session (listing response didn't include this job ID), and the form page is JS-rendered so WebFetch could not read fields. Treat the questions above as a superset. Live form may have fewer questions, or may add 1–2 custom ones. Adapt on the fly — especially anything about LangGraph/LangSmith depth, since LangChain is known to screen hard there.
- **LangGraph port is a commitment.** Q3 and Q8 both reference the promised "port Molebie's agent loop to LangGraph and write it up on toogoodtobechu.com." **Do not send these answers unless you actually plan to ship the port before the first interview.** If you can't, soften Q3 to "I'm blocking time this week to do the port" and drop the "I'll send the link" line.
- **Salary anchor.** Report #004 says any reasonable London offer will clear Jimmy's £28–60K target (comp score 5/5). The £60K–£72K anchor in Q9 is deliberately under London market (£75–£120k for similar Series B AI infra) — stretch-up honest given 3y YOE vs 5+ required. If the field is a single number, put **£65,000**. If USD-denominated (unlikely for London), flag and convert at ~1 USD = 0.79 GBP. Do not drop below £55K base per report #004's downlevel floor.
- **Verify Q4 (Molebie agent loop walkthrough).** The architecture described (router + tool-aware loop + short-term SQLite memory + RAG long-term + fallback chain) is consistent with cv.md L17–20 but the specific wording ("router picks a provider by task type", "step budget", "fallback list") is a reasonable reconstruction, not a verbatim lift from the codebase. **Cross-check against your actual Molebie code before pasting** — if the router is keyed differently (e.g. user-selected vs task-typed), edit to match. If LangChain asks for a follow-up in interview, they'll dig into this.
- **Resume upload.** Use `output/cv-jimmy-langchain-customer-engineer-london-2026-04-20.pdf` — generate it per report #004 Block E changes (summary rewrite, Molebie bullet tweak, competencies add). Verify it opens cleanly before upload.
- **Cover letter.** If the form offers an optional cover letter slot, generate one — same visual template as CV, map JD quotes to proof points, 1 page max. Lead with the founder-years-as-customer-facing-technical reframe. Don't skip — it matters more here than at Clay because of the YOE gap.
- **"How did you hear about us" dropdown.** If Ashby forces a dropdown (LinkedIn / Referral / Job board / Other), pick **"Job board"** and paste Q10 text into the "please specify" box.
- **Location dropdown.** If "London, United Kingdom" is available, pick it. If not, pick "United Kingdom" and add "Currently London / Glasgow, relocating fully to London" in the nearest notes field.
- **Travel question.** If it's a hard yes/no on 20% travel, answer yes. If it's a slider/range, put 20–25%.
- **Pronouns / demographic / EEO questions.** Optional under UK hiring norms. Jimmy's call whether to answer.
- **Do not submit.** Review every answer as plain text for tone — especially Q4 (agent architecture) and Q7 (Greener Robotics feedback translation); if any detail drifts from what actually happened, edit before pasting. Then hit Apply yourself.
- **Post-submit housekeeping (manual):** update `applications.md` row for LangChain from `Evaluated` → `Applied`, bump the date, add the submission date to the notes column.
