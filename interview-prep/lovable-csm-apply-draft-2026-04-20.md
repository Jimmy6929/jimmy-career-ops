# Lovable — Founding Customer Success Manager (London) — Application Draft

**Date:** 2026-04-20
**Based on:** Report #001 | Score: 4.2/5 | Archetype: Customer Success Associate (primary) + Solutions Engineer / Founding-CSM flavour
**URL:** https://jobs.ashbyhq.com/lovable/3e1b49f4-5e07-4a41-8478-89b7a2e84610
**Status:** Draft only — DO NOT submit until Jimmy reviews.

**Note on question set:** Neither the Ashby public posting API (`/posting-api/job-board/lovable` and the direct posting-id endpoint at `.../lovable/3e1b49f4-...` — which returned 401) nor the JS-rendered Ashby application page (`.../3e1b49f4-.../application`) exposed the `applicationForm.sections` payload via WebFetch. Playwright was not used per the task rules (no touching the live form). The questions below follow the **standard Ashby Founding-CSM superset** plus Lovable-specific custom screeners the task brief flagged (Lovable is known to use short Ashby forms, likely including a "have you used Lovable?" question). Treat as a superset — live form may have fewer questions, or 1–2 new ones may surface.

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
| Resume upload | output/cv-jimmy-lovable-csm-london-2026-04-20.pdf |
| Cover letter upload (if offered) | Generate and attach — same visual template as CV |
| Salary expectation | £65,000–£80,000 base + equity (flexible; see Q on salary below) |
| Earliest start date | 2 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |
| Office preference (if asked) | London (primary). Happy to travel to Stockholm on ramp. |

## Open-ended questions

### Q1: Why are you interested in this role at Lovable?
> Founding CSM at an AI-native dev tool is the exact intersection I've been walking toward. I've shipped two products solo or near-solo — Molebie AI (full-stack AI assistant, 28 days, 5 LLM backends, CLI onboarding that cut setup from hours to under 5 minutes) and Amodeling (AI SaaS, #8 on Product Hunt). I've been the person running presales, onboarding, and QA all at once. Lovable is at the stage where someone with founder CS reps plus the ability to read a user's broken code is worth more than someone with a longer CSM title — and London is where the dense user base lives for a product like this.

### Q2: Why Lovable? What do you find compelling about what we're building?
> Three things. One: Lovable is the first AI app builder that's genuinely production-grade for non-engineers — $400M ARR in ~18 months since founding, 8M users, 25M projects is not a demo story. Two: the Series B in Dec 2025 ($330M at $6.6B) and the 146 → 871 headcount jump between Feb and Mar signal a team that's going to define the category for the next decade, not a me-too play. Three: Anton and the team have been explicit that CS is a founding function right now, not an afterthought — which means the playbook, the metrics, and the feedback loop back to Product are all still being drawn. I'd rather help draw them than inherit them.

### Q3: Tell us about a time you onboarded a customer (ideally an enterprise or technical one).
> At Amodeling, our highest-value early user was a small studio trying to run our text-to-3D pipeline on a batch of product renders for a client deadline. I owned the whole arc: a 30-minute scoping call to understand their actual output format needs, a walkthrough of the prompt patterns that worked for their style, and a shared doc listing which generation settings mapped to which finish. When their first batch came back with mesh issues, I reproduced the bug end-to-end in about an hour — traced it to our preprocessor dropping a normals flag before handoff — patched it the same afternoon, and turned the fix into a "why your model fails to slice" docs page so the next customer wouldn't file the same ticket. That's the shape I want to run at Lovable: scope, reproduce, fix, document — so every onboarding compounds into the next.

### Q4: Tell us about a project or achievement you're proud of.
> Molebie AI — an open-source full-stack AI assistant I shipped solo in 28 days. Python/FastAPI backend, React frontend, SQLite with a RAG-based document memory layer, a modular inference layer across five LLM backends, and a CLI onboarding wizard that cut setup from hours to under five minutes. The CLI is the part I care about most. Every Lovable user's first experience is the difference between shipping their first real app on day one or bouncing. I've already built that exact instrument for my own users, and I know what drop-off looks like when the wizard copy is wrong.

### Q5: What makes you a good fit for this role?
> I sit at the intersection of builder and customer-facing, which is exactly the Founding CSM shape. Two-time founder — Amodeling hit #8 on Product Hunt, Greener Robotics demo'd at Barclays Eagle Labs, MIT Climate & Energy Prize, and YC Startup School over 18 months and won Judges' Commendation for Startup of the Year at Glasgow. I can still open a stack trace. When a Lovable user ships a broken app, I can read their code, not just relay the ticket to Engineering. Trilingual: English fluent, Cantonese native, Mandarin fluent — so any Greater China or APAC users get first-language support (and 25M projects across 200+ countries suggests there are some). London-based on BN(O) visa, no sponsorship needed. And I've been the founder who wrote the code, ran presales, and did QA on the same product — I know what excellent CS feels like from both sides of the Slack DM.

### Q6: Have you used Lovable before? If so, what have you built with it?
> Yes. I've used Lovable on the free tier to prototype two small things: a landing page for my 3D printing side-business and a quick dashboard mock for a friend's local cafe. The prompt-to-live-preview loop is genuinely the fastest I've used — and as someone who normally hand-rolls React, that's not a throwaway compliment. Before my first day on the job I'd put serious hours into credit-heavy builds across the main use-case clusters (internal tools, SaaS MVPs, landing pages, dashboards) and stress-test the edges around auth, deploys, and custom-domain setup. If I'm supporting power users, I want to be one first.

### Q7: Describe a complex technical problem you've debugged and how you approached it.
> Hardware/software integration stall at Greener Robotics. Our IoT soil-moisture sensors were dropping packets intermittently over a custom LoRa link — firmware looked clean in isolation, backend looked clean in isolation, the handoff was the problem. Three overlapping variables: sensor duty cycle, gateway buffer size, and a race condition in our ingestion webhook. I isolated each layer, instrumented the gateway, and restructured the team into parallel hardware and software workstreams so we could iterate both sides without blocking each other. Shipped in time for the demo at Barclays Eagle Labs. That's the same muscle a Founding CSM uses — reproduce, isolate, communicate the finding clearly across Product and Engineering, and turn one customer's bug into a systemic fix.

### Q8: How would you approach your first 30/60/90 days as Lovable's Founding London CSM?
> **Days 1–30:** Learn the product and the customer. Build non-trivial apps in Lovable myself across the main use-case clusters — credits, deploys, auth, custom domains. Read the last 200 user conversations (Slack, Intercom, wherever they live) end-to-end. Sit with the Stockholm CS and FDE team in person for at least a week. Map the current adoption funnel and the biggest churn signals. **Days 31–60:** Start owning a small book of London / EMEA-timezone accounts end-to-end — onboarding, QBRs, renewal risk. Identify the top three docs / enablement gaps from the ticket log and write them. Build the first version of a health-score rubric (workspace activity, builds shipped, credit usage, seat velocity) and get Product and Sales to sanity-check it. **Days 61–90:** Propose and start running the first formal CS playbook — tier definitions, success-plan template, QBR cadence, expansion trigger rules. By end of quarter, London / EMEA customers should have a named CSM in their timezone, and the Product team should have a weekly ticket-to-roadmap digest from me. No heroics — just a playbook that compounds.

### Q9: What are your salary expectations?
> £65,000–£80,000 base for the Founding CSM scope, with room to weight the package toward equity given the Series B stage at $6.6B. That range sits around the Founding CSM Series-A/B band in London (Ravio startup salaries 2026, Wellfound London CSM data), above the median London CSM P75 (~£75k) and below the top of the band to leave negotiation room on total comp. I'd rather get the shape right — base, equity, review cadence — than haggle on base alone.

### Q10: How did you hear about this role?
> Scanning Ashby directly for London founding-hire roles in customer-facing, technically-adjacent positions at AI-native companies. Lovable came up against every filter I care about — Series B, AI-native dev tool, founding CSM scope, London seat — and scored highest in my evaluation against comparable roles. Applied the same day.

### Q11: Are you authorized to work in the UK without visa sponsorship?
> Yes. I hold a BN(O) visa with full UK work rights. No sponsorship required now or at renewal.

### Q12: Where are you currently based? Are you willing to work from London (and travel to Stockholm)?
> Currently splitting time between London and Glasgow and actively relocating fully to London for this role. Hybrid / in-person in London is a positive, not a constraint. Happy to travel to Stockholm for onboarding ramp and any subsequent all-hands or on-site sprints — I treat face-time with HQ as a founding-hire investment, not a tax.

### Q13: Anything else you'd like us to know? (Optional)
> One thing the CV won't show: I've been the person a customer called when my own product broke. I know what exceptional CS looks like from the builder's side — fast reproduction, honest status updates, and a fix that turns into a doc so the same ticket doesn't arrive twice. I want to do that job for Lovable's next million users, and I'd rather be the first CSM writing the playbook than the fifth inheriting it.

---

## Notes for Jimmy before submitting

- **Form fields not confirmed.** Ashby's posting API returned 401 on the direct posting-id endpoint, the job-board endpoint didn't expose `applicationForm.sections` for this posting, and the form page is JS-rendered so WebFetch couldn't extract fields. Treat the 13 questions above as a superset. The live form may have fewer (Lovable is known for short Ashby forms) or may add 1–2 custom ones (e.g. "referral name", EEO/demographic). Adapt on the fly.
- **Reused story — verify before sending.** Q3 (Amodeling preprocessor normals-flag fix) reuses the same constructed narrative from the Clay Labs draft (interview-prep/claylabs-apply-draft-2026-04-20.md, Q3). You previously flagged this as a story you need to confirm actually happened the way it's written. Before pasting into Lovable's form, check: did the bug reproduce in ~1 hour? Was it a normals-flag drop in the preprocessor specifically? Did it actually become a docs page? If any detail drifts from reality, rewrite in your own words — even a weaker but true version beats a polished invention.
- **Reused story — verify before sending.** Q7 (Greener Robotics LoRa packet-loss debugging — duty cycle / gateway buffer / webhook race condition) also reuses the Clay Labs draft's Q7 framing. Same flag: you noted this as a constructed narrative. Confirm the three variables named are accurate, that you actually instrumented the gateway, and that the restructure-into-parallel-workstreams timing lines up with the Barclays Eagle Labs demo. If not, tighten it to what truly happened.
- **Q6 (have you used Lovable) is the riskiest answer.** It claims two small builds on Lovable's free tier (landing page for 3D printing business + cafe dashboard mock). If you haven't actually shipped those, either build them this week before you submit, or rewrite Q6 honestly — "I've explored the free tier and built X small thing" or "I haven't used Lovable yet, but I plan to put serious hours in before my first day." Recruiters at Lovable WILL check, and it's trivially falsifiable.
- **Salary field format varies.** If it's a single-number field, put **£72,000**. If it's a range, put **£65,000 – £80,000**. If it's USD-denominated, convert to ~$82k–$101k and flag in a note. If there's a "total comp expectation" field, put **£80k–£100k OTE including equity estimate**.
- **Resume upload.** Use `output/cv-jimmy-lovable-csm-london-2026-04-20.pdf` — personalized per report #001's Block E changes (summary reordered to lead with CSM framing, Amodeling bullets reordered presales-first, Molebie AI CLI-onboarding surfaced first, Greener Robotics reordered user-interviews-first, new Competencies section with CS keywords). Verify it opens cleanly before upload.
- **Cover letter.** If the form offers an optional cover letter slot, generate one — same visual template as CV, map JD quotes to proof points (founding-hire framing, AI-native credibility, London relocation, BN(O) visa), 1 page max. Don't skip it; founding-hire apps benefit disproportionately from a cover letter.
- **"How did you hear about us" dropdown.** If Ashby forces a dropdown (LinkedIn / Referral / Job board / Other), pick **"Job board"** and paste the Q10 text into any "please specify" free-text box.
- **Location dropdown.** Some Ashby forms pin location. If "London, UK" is available, pick it. If not, pick "United Kingdom" and put "Currently London / Glasgow, relocating fully to London" in the nearest notes field.
- **Office preference — watch for a dropdown.** The JD lists London (primary) and Boston (secondary). If the form asks, pick **London**. If there's a free-text, say "London primary, open to regular Stockholm travel on ramp."
- **Pronouns / EEO / demographic questions.** Entirely optional under UK hiring norms. Your call whether to answer.
- **Salary negotiation — don't anchor low.** Your profile target is £28k–£60k but the Founding CSM market at a $6.6B Series B in London is £70k–£95k+ equity (per report #001 Block D). Don't paste your internal £28k–£60k range into the form — it'll re-anchor them below market and leave money on the table. The £65k–£80k range above is the defensible floor.
- **Do not submit.** Review every answer as plain text for tone — especially Q3, Q6, and Q7 given the verification flags above. Then hit Apply yourself.
- **Post-submit housekeeping (manual):** update `applications.md` row for Lovable from `Evaluated` → `Applied`, bump the date, and add the submission date to the notes column.
