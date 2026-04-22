# Synthesia — Solutions Consultant (UK Remote) — Application Draft

**Date:** 2026-04-21
**Based on:** Report #017 | Score: 4.2/5 | Archetype: Solutions Engineer (secondary)
**URL:** https://jobs.ashbyhq.com/synthesia/e7ff7ec3-cf5b-4bf8-a161-fe0471e81653
**Status:** Draft only — DO NOT submit until Jimmy reviews.

**Note on question set:** The Synthesia Ashby posting API (`api.ashbyhq.com/posting-api/job-board/synthesia?includeCompensation=true`) returned `applicationForm: null` and `customQuestions: null` for this posting — fields are gated behind the JS-rendered form page. Playwright was not used per task rules. Questions below follow the **standard Ashby Solutions Consultant screener set** plus Synthesia-specific custom screeners inferred from the JD (video/AI product demo walkthrough, "first value" workflow design). Treat this as a superset — the live form may have fewer questions, or add 1–2 not covered here.

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
| Resume upload | output/cv-jimmy-synthesia-solutions-consultant-uk-remote-2026-04-21.pdf |
| Cover letter (if offered) | interview-prep/synthesia-cover-letter-2026-04-21.md |
| Salary expectation | £55,000–£72,000 base (flexible; see Q on salary below) |
| Earliest start date | 2 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q0 (LIVE-FORM, confirmed 2026-04-21): Tell us a little bit about your Solutions Consulting experience...
> I'll be upfront: my three years sit under founder/operator labels rather than the "Solutions Consultant" badge, but the scope overlaps cleanly with your JD.
>
> At **Amodeling** (our AI SaaS, #8 on Product Hunt) I personally ran every pre-sale — structured discovery, demo delivery, scoping the use case, and the handoff into onboarding and QA. Every account was mine to technically validate, get to first value, and keep adopting.
>
> At **Greener Robotics** I led live technical demos at **Barclays Eagle Labs**, the **MIT Climate & Energy Prize**, and **YC Startup School** — three very different audiences, same product, three rebuilt decks. Customer discovery with 8 pilot farmers fed directly into how I re-scoped the solution.
>
> At **Molebie AI** (my open-source full-stack AI assistant, shipped in 28 days across 5 LLM backends) I built the CLI onboarding wizard that cut customer setup from hours to under 5 minutes — a reusable first-workflow pattern at product scale.
>
> Short version: **discovery → technical validation → first live workflow → adoption** is the shape of what I've been doing, just without the SC title and at a smaller unit of scale. Synthesia is where I'd do it against Fortune 100 deals.

### Q1: Why are you interested in this Solutions Consultant role at Synthesia?
> Because the JD reads like the work I've been doing for three years, just without the scale or the badge. As a founder at Amodeling and Greener Robotics I ran discovery, designed solutions, delivered demos to investors and pilot customers, owned QA, and drove first-workflow adoption myself. At Molebie AI I built the CLI onboarding wizard that turned "hours of setup" into "<5 minutes to first query" — the same "drive first value" muscle your JD names. Synthesia is where that combination becomes a first-class function, at a Series E $4B company where 90% of the Fortune 100 already uses the product. That's the seat where builder reps compound fastest.

### Q2: Why Synthesia specifically? What's compelling about the product?
> Three things. (1) AI video is where the enterprise AI story gets tangible for non-technical buyers — L&D, internal comms, customer education. The gap between "AI is powerful" and "this week's onboarding module is an AI video" is the gap a Solutions Consultant closes, and that gap is where I want to work. (2) Series E at $4B with 90% of the Fortune 100 using the product means the function is hiring for expansion and repeatability, not foundational convincing — exactly the stage where "capture reusable solution patterns" starts paying off. (3) London HQ + UK Remote flexibility fits me without compromise: BN(O) visa, no sponsorship, already based here. I can start Monday.

### Q3: Have you used Synthesia? What did you think?
> Not yet in production. My plan before our first call is to stand up a Synthesia trial and build a **one-minute AI video walking a prospective enterprise L&D champion through a use case** — a short onboarding module for a hypothetical customer. I'll share the link with the recruiter once it's live. I'd rather answer this question with a Synthesia-built artefact than a critique or a claim. If a live usage question comes up in interview before I've finished, I'll flag that, show what I've done so far, and not oversell.

### Q4: Walk us through a complex pre-sale or solution design you've led end-to-end.
> **Greener Robotics at the MIT Climate & Energy Prize.** The context: a smart-agri IoT prototype (hardware + firmware + dashboard), a 15-minute slot, an academic judging panel who'd seen five similar pitches that morning. Structured discovery beforehand told me this audience didn't care about unit economics — they cared about emissions math and hardware novelty. I rebuilt the deck around that: lead with the emissions delta, anchor on the physical rig so it felt real, close on "what we'd need to run the next pilot." I paired the pitch with a two-page technical appendix for the judges who wanted depth. Outcome: advanced past the initial round and pulled a line of follow-up questions I'd scripted contingencies for. The translation of "here's what the product does" into "here's what this specific audience already cares about, answered" is the same translation I'd be doing for Synthesia prospects every week — just swap an academic judge for a Fortune 100 L&D VP.

### Q5: Tell us about a time you ran discovery with senior stakeholders and re-scoped a request.
> At **Greener Robotics**, early pilot farmers kept asking for a "dashboard with everything on it" — ten different data sources, all on one screen. The real need, once I ran structured interviews separating wants from constraints, was a morning-of status check that answered one question: *can I skip the field walk today?* Same request, totally different product. I re-scoped the dashboard around that single decision, cut the feature list by two-thirds, and used the remaining engineering time on alerting. Adoption went from "they opened it when we asked" to "they opened it before tea." The reflection I carry from it: **vague requests almost always hide a sharper decision the customer is making day-to-day — find that, reframe around it, and the solution collapses into something shippable.**

### Q6: Tell us about a time you drove a customer from signed deal to first live workflow.
> **Molebie AI's CLI onboarding wizard is the cleanest case at product-level, not account-level.** Early users of Molebie kept dropping off during setup — 5 LLM backends, env vars, API keys in the wrong place. I wrote a CLI wizard that detected environment, prompted for credentials interactively, set sane defaults, and got them to first query in under 5 minutes. Drop-off halved inside a week. For an enterprise analogue: at **Amodeling** I was the person walking new accounts from signed demo to their first successful 3D model generation — scoped their content, built them a bespoke template, sat with them the first time they generated, and documented what broke so the next account didn't hit the same wall. Same pattern as your JD: define early success measures, track them tightly, intervene fast when adoption risk shows up.

### Q7: Tell us about a time you turned customer insight into a product or positioning change.
> At Greener Robotics hardware/software integration stalled and customer signal was fragmented across our 8 pilot farmers. I ran structured interviews, separated noise from pattern, and fed the result back as two concrete changes: (a) restructure the backlog into **parallel hardware and software workstreams** so neither side blocked the other, and (b) re-anchor the positioning of the prototype for investor decks around the *farmer's morning decision* (discussed above) rather than sensor specs. Both sides unblocked in time for STAC accelerator demos, and the investor deck landed harder. **Customers tell you what's wrong; the translation into what to build is the job.**

### Q8: How would you approach your first 30/60/90 days as a Solutions Consultant at Synthesia?
> **Days 1–30:** Shadow Account Executives and existing Solutions Consultants on 3–5 live enterprise deals across different verticals (L&D, internal comms, customer education). Read the last 100 deal postmortems or win/loss notes cold. Build my own Synthesia trial workflow end-to-end to force onboarding. Ship the "first-workflow playbook" I committed to in the cover letter — one page, opinionated, reusable, draft-shared with Post Sales for feedback. **Days 31–60:** Own the technical win on one active enterprise deal alongside an AE. Pick the most common pre-sale objection from the deal postmortems and build the reusable demo/asset that handles it — video, workshop template, or pilot framework. Start logging solution patterns in a shared library. **Days 61–90:** Lead one pilot workshop end-to-end for a Fortune 100 prospect. Own first-value adoption for one new customer from signed deal to first live AI video in production. Propose one structural improvement to the onboarding playbook based on what broke during the pilot. By end of quarter, Synthesia has one more shipped enterprise reference, one new reusable asset in the solution library, and a repeatable first-workflow pattern I can hand to the next SC who joins.

### Q9: What are your salary expectations?
> £55,000–£72,000 base, plus whatever OTE/variable structure matches the team's band. I'm anchoring honest-middle rather than top because my CV is three years of founder-operator reps, which I think lines up cleanly with your 2+ year bar but not with the senior end of the SC ladder. I'd rather start inside-band with a 6-month review tied to real milestones (NPS from enterprise deals I supported, first reference implementation shipped, one pilot workshop led end-to-end) than over-anchor. If the role calibrates as senior SC, I'm happy to discuss — I'd just want the expectations on paper. If it calibrates to associate, I'm fine starting at the lower end of the band with clear promotion criteria.

### Q10: How did you hear about this role?
> Scanning Ashby directly for London / UK Remote Solutions Consulting and pre-sales roles at AI-native scale-ups. Synthesia came up and scored highest against my criteria this week: (i) the JD language (builder mindset, bias for action, clarity to ambiguity) matched what I've actually been doing, (ii) 2+ YOE bar I could clear honestly, (iii) UK geography with no sponsorship friction. Applied the same day I found it.

### Q11: Are you authorized to work in the UK without visa sponsorship?
> Yes. I hold a BN(O) visa with full UK work rights. No sponsorship required now or at renewal.

### Q12: Where are you currently based? Are you willing to be UK Remote with occasional travel to London HQ?
> Currently split between London and Glasgow; actively relocating fully to London. UK Remote with travel to HQ is ideal — I'd be in London most weeks anyway. Up to 20% travel for customer pilots or team offsites is fine; passport is valid for EU business trips.

### Q13: What is your earliest available start date?
> Two weeks from offer acceptance. I can compress to one week if needed; I'd use the gap to ship the Synthesia trial walkthrough and the first-workflow playbook I committed to, so I arrive with artefacts rather than a blank notebook.

### Q14: Are you comfortable with a role that bridges pre-sale and post-sale work?
> Yes — that's the shape of every founder role I've done. At Amodeling I personally ran presales discovery, demo delivery, onboarding, and QA. At Greener Robotics I ran customer discovery with pilot farmers and then owned their adoption path when the product shipped. The handoff cost between pre-sale and post-sale is one of the main reasons customers churn early — I've lived through it as a one-person team, and I'd rather own both ends than own either half.

### Q15: What's your experience with AI-native or LLM-based products?
> Hands-on builder. **Molebie AI** is an open-source full-stack AI assistant I shipped in 28 days — Python/FastAPI backend, React frontend, SQLite with RAG-based document memory, and a modular inference layer supporting 5 LLM backends (OpenAI, Anthropic, local Ollama, a fine-tuned variant, and an open-weights hosted model). I understand how providers behave under load, how context windows and RAG retrieval interact, and where the "AI is magic" pitch hits the reality of latency, cost, and error handling. That grounding makes pre-sale conversations with technical buyers faster — I can answer the question behind the question.

### Q16: Anything else you'd like us to know? (Optional)
> Two things the CV won't surface. **Trilingual** — English fluent, Cantonese native, Mandarin fluent — useful the day Synthesia lands a Greater China or Hong Kong enterprise rollout that needs first-language technical walkthroughs. **Founder reflex for "tell me what broke"** — I've been on the other end of a bad enterprise onboarding (as the buyer of my own tooling stack), and I know what it feels like when the vendor's SC goes silent during week two. I don't do that. If the customer hits an adoption wall, I'd rather flag it Tuesday than get surprised at QBR.

---

## Notes for Jimmy before submitting

- **Form fields not confirmed.** Ashby posting API for this job returned `applicationForm: null` and `customQuestions: null` — fields are JS-rendered only. Treat the questions above as a **superset**. Live form may drop 2–4 of them or add 1–2 (likely around video product use case or L&D industry experience).
- **Commitments are commitments.** Q3 and Q8 both reference a Synthesia trial walkthrough video; Q8 and the cover letter reference a "first-workflow playbook." **Do not submit these answers unless you actually plan to build both before the first interview.** If you can't, soften Q3 to "I'm blocking this week to stand up the trial" and drop the playbook mention from Q8/cover. Credibility on these is half the value of the answer.
- **Salary anchor.** Report #017 comp band benchmark is £55–85K base (up to £75–110K OTE with variable) for a London/UK Remote SC at Series E $4B SaaS. £55–72K base in Q9 is **deliberately inside-band-lower-half** given the 3y founder-reps vs. SC-ladder framing. If the field takes a single number, put **£62,000**. Do not drop below £55K base per the report's downlevel floor. If the recruiter pushes top-of-band, Q9 gives you the "calibrates as senior SC" line to lean into.
- **Verify Molebie architecture.** Q15 describes Molebie's 5-backend inference layer and RAG memory. This tracks cv.md L17–20, but the specific framing (provider fallback, task-typed routing) is consistent with how I described it in report #017 — **cross-check against the actual Molebie codebase** before pasting, edit any detail that drifts. Synthesia Commercial/Post-Sales may not dig hard here but an interviewer could.
- **Resume upload.** `output/cv-jimmy-synthesia-solutions-consultant-uk-remote-2026-04-21.pdf` — 2 pages, A4, already generated. Verify it opens cleanly before upload.
- **Cover letter.** `interview-prep/synthesia-cover-letter-2026-04-21.md`. If the form offers a cover-letter slot, attach. If it's a paste-text field, paste the body (skip the header/footer metadata lines). Don't skip — the YOE-to-founder-reps reframe matters here.
- **"How did you hear about us" dropdown.** If Ashby forces a choice (LinkedIn / Referral / Job board / Other), pick **"Job board"** and paste Q10 text into the "please specify" box if offered.
- **Location dropdown.** Pick **"United Kingdom"** or **"London, United Kingdom"** if available. If only a free-text field, put "London, UK (currently Glasgow, relocating)".
- **Travel question.** Hard yes on 20%; if slider, put 20–25%.
- **Pronouns / demographic / EEO questions.** Optional under UK norms. Jimmy's call.
- **Post-submit housekeeping (manual):** update `applications.md` row #17 (Synthesia) from `Evaluated` → `Applied`, flip PDF ❌ → ✅, update notes to start with `Submitted 2026-04-21.`.
- **Do not submit.** Read every answer as plain text for tone — especially Q4 (MIT Climate pitch), Q5 (farmers dashboard re-scope), and Q6 (Molebie wizard + Amodeling onboarding). Edit anything that drifts from what actually happened. Then hit Apply yourself.
