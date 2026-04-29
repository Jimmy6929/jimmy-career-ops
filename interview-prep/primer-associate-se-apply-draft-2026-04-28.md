# Apply Draft — Primer, Associate Solutions Engineer (UK, Remote)

**URL:** https://jobs.ashbyhq.com/primer.io/fa6a464b-5d17-4f14-b5eb-7ee1b4b87f3e
**Apply URL:** https://jobs.ashbyhq.com/primer.io/fa6a464b-5d17-4f14-b5eb-7ee1b4b87f3e/application
**Deadline:** rolling
**Form:** Ashby standard + likely 2–4 short motivation / experience questions

⚠️ **Pre-flight check:** Jimmy applied to Primer's "Events and Community Manager" on 2026-04-23 and was rejected within 24h. ATS may flag the email. Different team / hiring manager. Apply, but be prepared to address if asked. Do NOT mention proactively in cover letter.

---

## Standard fields

| Field | Answer |
|-------|--------|
| First name | Ming Kit |
| Last name | Chu |
| Preferred name | Jimmy |
| Email | jimmymkzhu@gmail.com |
| Phone | +44 7843 812 677 |
| LinkedIn | https://www.linkedin.com/in/jimmy-chu-844572247 |
| Portfolio / website | https://toogoodtobechu.com |
| GitHub | https://github.com/Jimmy6929 |
| Resume | use closest-fit existing CV PDF from `output/` (SE / DevRel / FDE-tailored if available) — Jimmy default: do not regenerate |
| Cover letter | not required; if Ashby form has a free-text motivation field, use the "Why are you interested in Primer specifically?" answer below |
| Current location | Glasgow, UK (relocating to London) |
| Work eligibility | UK — full work rights (BN(O) visa) |

---

## Likely Ashby screening questions

### "Why are you interested in Primer specifically?"
Three reasons. First, unified payments infrastructure is the right product wedge — card networks have largely been won; orchestration, A2A, FX, reconciliation, and CFO tooling is the next decade of fintech infra value. Second, your JD explicitly invites people to apply when their experience doesn't perfectly fit — that told me Associate actually means Associate. Third, your remote-first culture matches how I've worked at both my startups (async, output-based, distributed).

### "Tell us about your relevant experience."
The closest parallel to Primer's product is Molebie AI, my open-source full-stack AI assistant shipped in 28 days. I built a modular inference layer that abstracts five LLM backends behind a single contract — same primitive as payment-method orchestration: heterogeneous backends, normalised interface, retry / fallback / observability.

The discovery and demo reps come from Greener Robotics, my smart-agriculture IoT startup. 30+ customer-discovery interviews with smallholder farmers, live technical demos at Barclays Eagle Labs, MIT Climate & Energy Prize, and YC Startup School — including live technical Q&A from MIT engineering judges.

At Amodeling, my AI SaaS that hit #8 on Product Hunt, I owned presales, onboarding, and the QA pipeline end-to-end — translating user pain into product feedback for live shipping.

### "What experience do you have with complex API products?"
Direct: I built one. Molebie AI exposes a Python/FastAPI backend with a modular inference layer, RAG-based document memory, and a CLI onboarding wizard that cut setup time from hours to under five minutes. The architecture's whole point is multi-backend abstraction — the same primitive Primer uses for payment-method orchestration. Public repo: github.com/Jimmy6929.

Adjacent: Amodeling integrated multiple third-party AI APIs and rendering pipelines on a Next.js / Supabase stack. I integrated and reasoned about API contracts there too.

Honest gap: I have not built or operated payments APIs specifically. The shape is familiar; the domain isn't. I'd close that in week 1–2 with the Primer dev portal and a sample integration build.

### "Describe a time you led a discovery session or technical conversation with a customer."
At Greener Robotics, our hardware partner shipped late and our pilot farmers were getting nervous. I ran a series of one-hour discovery sessions with each pilot — listened to what they were actually worried about (it turned out to be data ownership, not delivery date), restructured the timeline narrative around what we could ship in parallel (simulated sensor feeds, dashboard mockups), and converted the conversations into pilot retention rather than pilot churn. Result: zero pilots dropped during the integration stall, all four converted to data-collection deployment, and the case study fed our YC Startup School pitch.

The broader lesson: discovery isn't asking what the customer needs — it's listening for the gap between what they say and what they're actually anxious about.

### "What's a complex technical concept you've had to explain to a non-technical audience?"
At MIT C&E Prize, I had to explain a multi-sensor IoT integration (LoRa mesh, edge compute, PostgreSQL ingestion, dashboard) to engineering judges who were experts in adjacent domains, not in our specific stack. I compressed it to: "Each sensor is a check-in postcard. The mesh is the postal service. The dashboard is the wall where the postcards land." Then I went technical only when a judge asked. Made the shortlist.

Same primitive applies to a merchant-engineer SE call: lead with the analogy that fits their world, drop into technical detail only when they steer there.

### "Why are you leaving your current role / why now?"
I've been a founder for three years across two startups (Greener Robotics, 18 months; Amodeling, 6 months) plus an active open-source project (Molebie AI). I now want to apply those reps inside a company where I'm not the one having to build the playbook — and a payments-infra Associate SE seat at Primer is exactly that shape. Now is the right moment because I'm relocating Glasgow → London for startup proximity and want to plug into a team rather than start a third venture from scratch.

### "Salary expectations?"
The role is undisclosed on comp; my expectation is anchored to the UK Series B/C FinTech Associate SE market. Open to discussing the full package — share options matter to me, and I'd want clarity on the equity grant alongside base.

### "When can you start?"
Two weeks from current freelance commitments — realistic earliest mid-to-late May 2026.

### "Do you require visa sponsorship?"
**No.** I hold a BN(O) visa with full UK work rights.

---

## DO-NOT-SUBMIT checklist (review with Jimmy before sending)

- [ ] Confirm Jimmy is OK applying to Primer again given prior 2026-04-23 rejection (different team — recommend yes)
- [ ] Resume: use closest-fit existing PDF in `output/`; do not regenerate unless Jimmy asks
- [ ] No cover letter required; paste a free-text motivation answer only if the form has that field
- [ ] Visa screening = "No, BN(O) visa"
- [ ] Salary expectation kept open-ended; do NOT commit to a number in writing
- [ ] References field — leave blank or "available on request"
- [ ] Optional: pre-build a small sample integration against Primer's public docs IF the screening call goes well — do not pre-build it for the application itself
