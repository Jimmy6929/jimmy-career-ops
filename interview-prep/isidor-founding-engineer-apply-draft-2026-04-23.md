# Isidor - Founding Engineer London - Application Draft

**Date:** 2026-04-23
**Based on:** Report #028 | Score: 4.2/5 | Archetype: AI Engineer / Founding Eng - vibe-coder shaped
**URL:** https://job-boards.greenhouse.io/isidor/jobs/4050484009
**Comp:** Undisclosed. Market estimate: £75-95K base + meaningful equity + possible housing bonus (within 3 miles of office). Above Jimmy's stated £28-60K target - anchor at the lower end of their likely band.
**Status:** Draft only - DO NOT submit until Jimmy reviews.

**Note on question set:** Greenhouse-hosted posting. Live form surfaces standard Greenhouse fields plus 3-6 company-specific screeners. Questions below are the most probable set for a pre-seed founding-engineer role based on the JD; adapt once the live form loads.

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
| Work authorization (UK) | Yes - BN(O) visa, no sponsorship required |
| Visa sponsorship needed (UK) | No |
| Willing to work in person in London | Yes - actively relocating |
| Open to SF relocation H1 2026 | Yes - with a visa conversation. BN(O) is UK-only; US move would need employer-supported US work auth. Happy to discuss. |
| Resume upload | output/cv-jimmy-isidor-founding-engineer-london-2026-04-23.pdf |
| Cover letter | output/cover-letter-isidor-founding-engineer-london-2026-04-23.txt |
| Salary expectation | £60-75K base floor, anchoring at the lower end of their likely band with equity upside. Flexible on structure. |
| Earliest start date | 2 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why Isidor?
> Three reasons. (1) **Your product is the thing I've already been building at toy scale.** Molebie AI's inference layer abstracts across 5 LLM backends behind one interface - that is the atomic primitive your evaluation platform has to get right. I didn't build it for evals; I built it because I needed my assistant to degrade gracefully when one provider went down. But the shape is the same: one normalised surface, five heterogeneous APIs, consistent outputs. (2) **The "1-5 years building and scaling backend systems, strong front end" bracket is rare honesty in an engineering JD.** Most founding-engineer posts say "senior" and mean "10+ years with one specific stack." Yours says "in that bracket, with a builder's mindset." I've shipped two companies and one full-stack AI system in that window - I'm exactly the candidate that bracket is trying to surface. (3) **Gradient + Seedcamp + DeepMind/Perplexity angels at pre-seed is a rocket-launch signal**, and in-person London with SF optionality lines up with my actual relocation plan. I'm choosing to apply here because the shape of the team and the shape of the problem both match what I'd build if I were starting from scratch again.

### Q2: Tell us about a time you shipped something end-to-end.
> **Molebie AI - 28 days, open source, full stack.** I architected and shipped a full-stack AI assistant alone: Python/FastAPI backend, React frontend, SQLite persistence with a RAG-based document memory layer, and a modular inference layer supporting 5 LLM backends behind one interface. I also wrote a CLI onboarding wizard that cut first-run setup from hours to under 5 minutes. The repo is public on my GitHub. The reflection I carry: **shipping velocity at this quality comes from refusing to let any layer go soft** - if the inference abstraction is sloppy, swapping backends turns into a weekend-wrecker three weeks later. I designed the layer so a new backend is roughly a 30-line adapter plus a config entry. That's the same discipline your evaluation/benchmarking infra needs: one normalised surface, N model providers, no special cases leaking up the stack.

### Q3: Describe a technical tradeoff you made.
> **Molebie AI's inference-layer abstraction.** The tradeoff: one universal interface across 5 LLM backends (OpenAI-compatible, Anthropic-shaped, local/Ollama-style, etc.) vs. per-backend specialised adapters that exploit each provider's unique features (e.g. tool-calling schemas, streaming quirks, function-calling payload shapes). I chose the universal interface. **Cost:** I give up some per-backend optimisations - a few providers have richer tool-calling that I flatten. **Benefit:** adding a 6th backend is roughly a day's work, not a week; behaviour is predictable across models; the persistence layer and the RAG pipeline don't have to know which backend is live. For an eval/benchmarking platform the calculus is even more one-sided - the whole point is apples-to-apples comparison, so normalisation is the product, not a cost. Happy to walk through the adapter code on a screen share.

### Q4: How would you approach evaluating an LLM for a specific task?
> Practical answer, grounded in what I've already done with Molebie. **Step 1: pin the task.** Define the unit of work precisely - input schema, output schema, acceptance criteria. Vague evals measure nothing. **Step 2: build the harness.** One function that takes (backend, prompt, input) and returns a normalised output. Molebie's inference layer is exactly this - I'd reuse the pattern. **Step 3: reference set.** 30-100 hand-labelled examples covering happy path, edge cases, and adversarial inputs. Small enough to iterate fast, large enough to separate noise from signal. **Step 4: metrics layered by cost.** Cheap automatic checks first (regex, structural match, embedding similarity to gold output), then LLM-as-judge for fuzzier criteria, then human review on disagreements only. **Step 5: track over time.** Versioned datasets, versioned prompts, versioned model endpoints - because "the model got worse" is meaningless without that. The thing I'd want to learn fast from your team: how you handle **drift detection** across model provider updates, since that's the hard part I haven't solved at production scale yet.

### Q5: What's your salary expectation?
> I'm flexible on structure. Your JD says "competitive + equity" and doesn't disclose a range - market data for pre-seed London founding engineers sits around £75-95K base + meaningful equity, and I'd anchor at the lower end of your band in exchange for stronger equity and the housing-bonus benefit you mention. **If the field takes a single base number, put £70K.** I care more about the equity grant, vesting terms, and how the housing allowance works than about base creep. Happy to discuss the whole package in a recruiter call.

### Q6: Why are you leaving your current situation / what do you want next?
> I've been a two-time founder out of Glasgow - Amodeling (AI SaaS, #8 on Product Hunt) and Greener Robotics (smart-agri IoT, demo'd at Barclays Eagle Labs / MIT Climate & Energy Prize / YC Startup School, STAC accelerator £60k). I'm relocating to London to plug into the startup ecosystem directly. **What I want next is a founding-engineer role where my founder reps compound instead of reset** - somewhere I'm still writing code, still talking to the first customers, still in the room when the product direction pivots, but at a company I didn't have to raise money for. Isidor is a literal match for that shape. I'm not looking for a "senior engineer at a 200-person Series C" role - that's the opposite of what I'd be good at.

### Q7: Do you have AWS / GCP experience?
> **Honest answer: limited, and I'd rather flag it than fudge it.** My production cloud stack so far is Supabase (Postgres + auth + storage) and SQLite for Molebie's local-first persistence - I haven't run production workloads on AWS or GCP. **What transfers:** the abstraction discipline (Molebie's inference layer is provider-agnostic by design, same muscle), Docker, CI basics, and the mental model of infra-as-code. **Concrete plan for closing the gap fast:** GCP first (you're YC/Gradient-adjacent, DeepMind angels - my bet is you're on GCP), walking through the official Cloud Run + Cloud Storage + Vertex AI tutorials week one, shipping a small benchmark harness to GCP as a self-assigned onboarding project. **Open to being tested** - if you want a take-home that deploys to GCP, I'll take the hit and learn in public. I'd rather you catch this now than in month two.

### Q8: How did you hear about us?
> Found the posting on your Greenhouse board this week while filtering for London-based founding-engineer roles at recently-funded pre-seeds with AI/LLM problem surface area. Isidor scored high on three axes: **credible team and backers** (Gradient / Seedcamp / DeepMind angels), **1-5 YoE bracket stated explicitly** (rare), and **evaluation/benchmarking as the product** (the thing I've already been building). Applied same day.

### Q9: Anything else you'd like us to know? (Optional)
> Three things not fully on the CV. (1) **Visa: BN(O)** - full UK work rights, no sponsorship required. The JD mentions potential SF relocation in H1 2026; BN(O) is UK-only, so that move would need a real US visa conversation (O-1 / L-1 / H-1B route), which I'm open to discussing - just not hiding it now to find out later. (2) **Trilingual** - English fluent, Cantonese native, Mandarin fluent. Not load-bearing for this role, but useful if your eval datasets or customer pipeline ever touch Greater China. (3) I'm **not applying to engineering roles broadly** - the positioning on my CV reads customer-facing / support-adjacent because that's my primary archetype bucket on paper. Isidor is the exception because the founder-who-ships-code profile is exactly what this specific role asks for. If the answer is no, I'd appreciate the calibration signal on whether it was the cloud/DevOps gap or the title-on-paper gap - I'll act on either.

---

## Notes for Jimmy before submitting

- **The 1-5 YoE framing is load-bearing.** The JD says 1-5; your CV reads ~3 if you count founder stints as engineering time. Q1 and Q6 lean into this. If an interviewer probes "what counts as a year," answer: "three years founder/operator, with roughly 18 months of that as primary hands-on-keyboard - Molebie AI is the clearest production example." Don't inflate.
- **AWS/GCP gap - do not inflate.** Q7 is the pre-emptive answer. The report (#028) flags this as the weakest edge. If the interviewer asks "have you deployed to GCP?", the answer is "no, but here's the transfer story and here's my plan." Honest beats plausible here - they will catch fudging in the technical screen.
- **SF relocation = US visa conversation.** BN(O) is UK-only. The JD mentions SF optionality. Q9 flags this upfront. Do NOT say "yes, happy to relocate" without the visa caveat - that's a bait-and-switch that blows up in month six. The right frame is: "yes to SF with employer visa support; here are the likely routes."
- **Comp anchor: £70K single-number, £60-75K range.** Report #028 estimates their band at £75-95K. Anchoring at £70K leaves room for them to come back with £75-80K + strong equity, which is the target outcome. Do NOT drop below £60K base. Do NOT quote your £28-60K profile range - that was set for Support/CS roles and this one sits above it. The gap is a feature, not a bug: it tells them you know the market.
- **Verify Molebie repo is live and the README leads with the 5-backend architecture.** The whole application rests on this proof point. If the README buries the inference layer, fix it before submitting. Q2, Q3, and Q4 all assume an interviewer can click through and see the adapter pattern within 30 seconds.
- **Resume upload:** `output/cv-jimmy-isidor-founding-engineer-london-2026-04-23.pdf` - already generated. Verify it reads as a founding-engineer candidate (Molebie AI at the top, 5 LLM backends named, 28-day ship called out), not a support-engineer CV.
- **Cover letter:** `output/cover-letter-isidor-founding-engineer-london-2026-04-23.txt` - already generated. Attach or paste body (skip header).
- **Do not submit.** Read every answer - especially Q3 (the tradeoff reasoning must match what the Molebie code actually does) and Q7 (cloud gap phrasing - one wrong word here turns honesty into a red flag). Edit anything that drifts.
- **Post-submit housekeeping (manual):** update `applications.md` row #028 from `Evaluated` -> `Applied`, flip PDF column to `✅`, update notes with submission timestamp.
