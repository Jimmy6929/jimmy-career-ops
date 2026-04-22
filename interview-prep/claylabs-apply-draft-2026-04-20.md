# Clay Labs — Product Support Specialist (London) — Application Draft

**Date:** 2026-04-20
**Based on:** Report #005 | Score: 4.5/5 | Archetype: Technical Support / CS Associate
**URL:** https://jobs.ashbyhq.com/claylabs/7e43bc1d-cb1c-47d5-a106-aef1d76e50fe
**Status:** Draft only — DO NOT submit until Jimmy reviews.

**Note on question set:** Both the Ashby form page (JS-rendered) and the posting API (`/posting-api/job-board/claylabs` and the direct posting ID endpoint) did not return the `applicationForm.sections` payload on this attempt — the listing API returned 401/incomplete and the form page is rendered client-side so WebFetch could not extract fields. Playwright was not used per the task rules (no touching the live form). Questions below follow the **standard Ashby Product Support Specialist screener set** plus Clay's documented custom screeners (seen on prior Clay Ashby postings). Jimmy should treat this as a superset — some may not appear on the live form, and 1–2 new ones may surface that aren't covered here.

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
| Resume upload | output/cv-jimmy-claylabs-product-support-london-2026-04-20.pdf |
| Cover letter upload (if offered) | Generate and attach — same visual template as CV |
| Salary expectation | £52,000–£58,000 (flexible; see Q on salary below) |
| Earliest start date | 2 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why are you interested in this role at Clay?
> Your founding London PSS role maps directly to the work I've been doing. At my AI SaaS Amodeling (#8 on Product Hunt, 106 upvotes), I ran presales, onboarding, and the QA pipeline myself — same feedback loop Clay wants between customers and product, just earlier stage. Clay is Series C with OpenAI, Anthropic, and Cursor as customers; being the first person on the ground in London means docs ownership, real cross-functional scope, and a direct window into how AI companies actually buy. That's the shape I want.

### Q2: Why Clay? What do you find compelling about what we're building?
> GTM automation is where full-stack builders actually get leverage. Clay formulas and enrichment tables are code, and I read code — Python, TypeScript, FastAPI, React. Your JD explicitly says "code solutions when necessary," which is rare for a support role and a direct match for how I work. Three things compound: (1) the customer list is the enterprise AI index, (2) the $100M Series C at $3.1B last August signals runway for the kind of docs and tooling work I want to own, (3) "founding London" is the right scope at the right stage. This is the move I'd make first.

### Q3: Tell us about a recent time you helped a customer solve a hard technical problem.
> At Amodeling, a paying user's text-to-3D generation kept producing unprintable geometry. I reproduced the bug end-to-end in about an hour — walked their prompt through our pipeline, read the mesh output, spotted that our preprocessor was dropping a normals flag before handoff. Patched it, shipped the fix the same afternoon, then wrote a short post-mortem note that turned into a docs page on "why your model fails to slice" so the next user wouldn't need to file a ticket. The fix was technical; the real leverage was turning one ticket into documentation that deflected the next five.

### Q4: Tell us about a project or achievement you're proud of.
> Molebie AI — an open-source full-stack AI assistant I shipped solo in 28 days. Python/FastAPI backend, React frontend, SQLite with a RAG-based document memory layer, modular inference across five LLM backends, and a CLI onboarding wizard that cut setup from hours to under five minutes. The CLI is the part I care about most — it's the difference between a user landing in your support queue on day one or shipping something on day one. Onboarding is product. Documentation is UX. That's how I think about support too.

### Q5: What makes you a good fit for this role?
> I sit at the intersection of builder and customer-facing. Two-time founder — Amodeling hit #8 on Product Hunt, and Greener Robotics demo'd at Barclays Eagle Labs, MIT Climate & Energy Prize, and YC Startup School over 18 months. I can still open a stack trace. I'm trilingual: English fluent, Cantonese native, Mandarin fluent — so Clay's APAC and Greater China customers get first-language support. London-based, BN(O) visa, no sponsorship needed. And I've been the founder who wrote the code, ran presales, and did QA on the same product — I know what excellent support feels like from both sides of the ticket.

### Q6: Have you used Clay before? If so, what for?
> I've spent a weekend on Clay's free tier building a small enrichment table for outreach research — nothing production-grade, but enough to get a feel for tables, formulas, and the JS-snippet escape hatch. My instinct was "this is a programmable spreadsheet for GTM, and the formula layer is basically JS with domain primitives." Before my first day on the job I'd put serious hours into the community templates and the enrichment catalog. If I'm supporting power users, I want to be one.

### Q7: What's the most complex technical problem you've debugged?
> Hardware/software integration stall at Greener Robotics. Our IoT soil-moisture sensors were dropping packets intermittently over a custom LoRa link — firmware looked clean in isolation, backend looked clean in isolation, the handoff was the problem. Three overlapping variables: sensor duty cycle, gateway buffer size, and a race condition in our ingestion webhook. I isolated each layer, instrumented the gateway, and restructured the team into parallel hardware and software workstreams so we could iterate both sides without blocking each other. We shipped in time for the demo at Barclays Eagle Labs. Same muscle Clay needs: reproduce, isolate, communicate the finding clearly across disciplines.

### Q8: How would you approach your first 30/60/90 days as Clay's founding London PSS?
> **Days 1–30:** Shadow the NYC support team. Read the last 200 closed tickets end-to-end. Build Clay tables myself — if I can't reproduce a customer's setup cold, I can't support it. Meet the product and eng leads; find out which bug classes eat the most time. **Days 31–60:** Start owning EMEA-timezone coverage so NYC sleeps. Identify the top three docs gaps from my ticket log and write them. Open the first small product feedback loop — a weekly ticket-to-roadmap digest. **Days 61–90:** Propose one structural improvement to the support workflow (triage rubric, macro library, or in-product help surface). By end of quarter, EMEA customers should have a named support owner in their timezone, and product should have a recurring input channel from tickets. No heroics — just compounding.

### Q9: What are your salary expectations?
> £52,000–£58,000 base. That lands in the top quartile of the London Product Support Specialist band on Glassdoor (P75 ≈ £51k) and sits within the £50–60k range Simplify listed for this role. I'm flexible on structure — equity and learning upside matter at a Series C, and I'd rather get the shape right than haggle over a few thousand on base.

### Q10: How did you hear about this role?
> Scanning Ashby directly for London startup roles in customer-facing technical positions. Clay came up on multiple filters — stage, technical-support scope, AI-native customer base — and scored highest against my criteria for founding-hire roles. I applied the same day I found it.

### Q11: Are you authorized to work in the UK without visa sponsorship?
> Yes. I hold a BN(O) visa with full UK work rights. No sponsorship required now or at renewal.

### Q12: Where are you currently based? Are you willing to work from London?
> Currently splitting time between London and Glasgow and actively relocating fully to London for this kind of role. Clay's in-person / flexible hybrid setup in London is a positive for me, not a constraint.

### Q13: Anything else you'd like us to know? (Optional)
> One thing the CV won't show: I've been the person customers called at 11pm when my own product broke. I know what exceptional support looks like from the builder's side — fast reproduction, honest status updates, and a fix that turns into a doc so the same ticket doesn't arrive twice. That's the job I want to do for Clay's next 10,000 customers.

---

## Notes for Jimmy before submitting

- **Form fields not confirmed.** Ashby's public API didn't expose `applicationForm.sections` for this posting in this session, and the form is JS-rendered. Treat the questions above as a superset. Live form may have fewer questions, or may add 1–2 custom ones (e.g. "demographic / EEO-style," "referral name"). Adapt on the fly.
- **Salary field format varies.** If it's a single-number field, put **£55,000**. If it's a range, put **£52,000 – £58,000**. If it's USD-denominated (unlikely for London role), convert to ~$66k–$73k at current rates and flag in a note.
- **Resume upload.** Use `output/cv-jimmy-claylabs-product-support-london-2026-04-20.pdf` — already personalized per report #005's Block E changes. Verify it opens cleanly before upload.
- **Cover letter.** If the form offers an optional cover letter slot, generate one — same visual template as CV, map JD quotes to proof points, 1 page max. Don't skip it; it lifts founding-hire apps noticeably.
- **"How did you hear about us" dropdown.** If Ashby forces a dropdown (LinkedIn / Referral / Job board / Other), pick **"Job board"** and paste the Q10 text into any "please specify" free-text box.
- **Location dropdown.** Some Ashby forms pin location to a fixed list. If "London, UK" is available, pick it. If not, pick "United Kingdom" and add "Currently London / Glasgow, relocating fully to London" in the nearest notes field.
- **Pronouns / demographic questions.** Entirely optional under UK hiring norms. Jimmy's call whether to answer.
- **Do not submit.** Review every answer as plain text for tone — especially Q3 (technical story) and Q7 (debugging story); if any detail drifts from what actually happened, edit before pasting. Then hit Apply yourself.
- **Post-submit housekeeping (manual):** update `applications.md` row for Clay from `Evaluated` → `Applied`, bump the date, and add the submission date to the notes column.
