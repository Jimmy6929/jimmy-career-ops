# Humanloop — Product Engineer (London) — Application Draft

**Date:** 2026-04-24
**Based on:** Report #031 | Score: 2.3/5 | Archetype: Product Engineer / vibe-coder (AI Platform / LLMOps primary)
**URL:** https://www.ycombinator.com/companies/humanloop/jobs (returns "No jobs"); https://humanloop.com (migration banner)
**Comp:** Hypothetical London Series A product engineer band was £70–95K base + equity. Above Jimmy's stated £28–60K target but aligned with the founding-SWE pattern he has been interviewing for. Anchor £65K floor, £75K mid, £85K stretch if this role existed.
**Status:** **Draft only — DO NOT submit. Role does not exist. See "Context" section below.**

---

## Context — read first

Humanloop was acqui-hired by Anthropic in August 2025. Three co-founders plus around a dozen engineers and researchers moved to Anthropic. The YC jobs page shows zero positions. humanloop.com serves a "Humanloop joins Anthropic" migration notice. humanloop.com/careers and /jobs both return 404. There is no live application form to submit to.

This draft is preserved as a **redirect artifact**: the proof points, framings, and Q&A below are tuned for an LLM evals product engineer role and should be adapted to **Anthropic London** openings (Product Engineer, Frontend Engineer, Applied AI, Solutions Engineer). The five-LLM-backend inference layer, RAG-over-SQLite, and CLI onboarding wizard from Molebie AI are the load-bearing proof points for any of those.

**If Jimmy still wants a Humanloop-branded signal:** reach out directly to Raza Habib, Peter Hayes, or Jordan Burgess on LinkedIn (all now at Anthropic London) with a one-paragraph note referencing Molebie's five-backend inference layer and the RAG work. That is the highest-leverage channel, not a form submission.

---

## Standard fields (for the Anthropic London redirect)

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
| Willing to relocate to / commute in London | Yes — actively relocating |
| Resume upload | output/cv-jimmy-isidor-founding-engineer-london-2026-04-23.pdf (closest-fit existing CV — vibe-coder / founding-engineer shaped; do NOT generate a new one) |
| Cover letter | Not generated per instruction. If the redirect target requires one, adapt the Corgi cover letter structure to this proof-point stack. |
| Salary expectation | Anchor £65K base, floor £55K, openness to equity-weighted packages for Series A / Anthropic-scale roles |
| Earliest start date | 2 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why Humanloop? (and how to rewrite for Anthropic London)
> I have already built the toy-scale version of what Humanloop sells. At **Molebie AI** I shipped a full-stack AI assistant in 28 days with a modular inference layer spanning **five LLM backends** — the exact primitive your evaluation runs operate on. I hand-graded test sets across those backends to compare prompt performance. That is a scrappy, single-person version of what your product does at enterprise scale, and it is the problem I want to keep working on. The second reason is narrower: **LLM evals is the piece of the stack that matters most if AI is going to ship safely into enterprise workflows.** Promising I would enjoy working on it isn't the point — I chose it for my own open-source project, unprompted, before I knew you were hiring.

> *Rewrite for Anthropic London:* Replace "Humanloop" with "Anthropic's enterprise push." Keep the Molebie paragraph verbatim. Add: "I was preparing an application to Humanloop when I saw the Anthropic acquisition announcement — the evals problem is what I want to work on, and the team that built the sharpest evals product I know of is now inside Anthropic."

### Q2: Walk me through Molebie AI.
> 28-day scratch build, solo, open source on my GitHub. Python/FastAPI backend, React frontend, SQLite with a RAG layer for document memory. The most load-bearing design decision was the **inference layer**: instead of hardcoding one provider, I wrote a backend-agnostic adapter pattern that lets the same prompt route to any of five LLMs with a single config change. That meant I could A/B the same prompt across providers, compare output quality, and swap providers without rewriting the app. The scrappy parts I own honestly: I built hand-graded test sets rather than a proper eval harness, and I used sentence-transformers + SQLite instead of a production vector DB because I wanted zero infra cost for a single-user tool. Both decisions I would change at real scale — and that is exactly the kind of tradeoff a Humanloop customer is making every week.

### Q3: Tell me about a product decision you made as an engineer.
> **RAG layer tradeoff in Molebie.** I had two options: ship a proper vector DB (pgvector / Pinecone / Weaviate) with clean infra and higher latency tolerance, or ship a local-first retrieval layer over SQLite + sentence-transformers. I chose SQLite. Two reasons: (1) the product was single-user at launch — real-time retrieval over thousands of docs works fine on SQLite and keeps the dependency count at zero; (2) the 5-minute setup time in the onboarding wizard was load-bearing for adoption, and a vector DB service breaks that. **Reflection:** if Molebie went multi-user I would have moved to pgvector day one — the ergonomics stopped being worth it past single-tenant. The lesson I carry is **choose the infra that matches the first 100 users, not the first 100,000**, and make the migration path explicit in your roadmap.

### Q4: How do you approach evaluating an LLM for a task?
> Four steps, in order. **(1) Define the task in observable terms** — not "good answers" but "retrieves the right doc 8 times out of 10 for a held-out set of 50 queries." **(2) Build a small hand-graded test set before touching any model** — I made this mistake early with Molebie and had to backfill 30 test cases after a model swap broke retrieval quality. **(3) Run the same prompt across providers on the same test set** — this is where my five-backend inference layer earned its keep; I could diff outputs side-by-side in hours rather than rewriting integration code. **(4) Grade on the axes that actually matter to the user** — for Molebie it was relevance + latency + token cost, in that order, because it was a single-user productivity tool. **Reflection:** I have never run this at production scale with automated graders and rubric-based LLM-judge pipelines. That is the biggest gap I would ask to pair on in the first 90 days.

### Q5: Frontend vs backend — which do you lean toward and why?
> Honest: **backend depth via FastAPI and the inference layer**, comfortable with React + TypeScript from Molebie and Nest.js from earlier. If the role is weighted 60/40 frontend I can ship, but the first 90 days would be me catching up on component-library internals, advanced hook patterns, and state management at production scale. If the role is 60/40 backend I move faster. The one thing I would push back on is being pigeonholed as "only backend" — the Product Hunt launch at **Amodeling** was half frontend work driven directly by customer feedback, and I want to keep shipping user-facing features. I work better when I own the full vertical slice of a feature.

### Q6: Tell me about shipping user-facing features fast.
> Two examples. **Molebie CLI onboarding wizard:** setup was over an hour for new users. I built a wizard that auto-detected the environment, generated config, and ran a test inference — **under 5 minutes end-to-end.** Same-day build, same-day merge. **Amodeling Product Hunt launch:** final 72 hours before launch, the onboarding flow had a 40%+ drop-off in user tests. I rewrote it from scratch in those 72 hours, shipped four iterations driven by customer interview feedback, and launched. Result: **#8 on Product Hunt, 106 upvotes on launch day.** The reflection I carry: **user-test the onboarding flow two weeks earlier, not two days.** It is almost always the biggest drop-off point in a new product.

### Q7: What's your relationship with evals and testing discipline?
> Incomplete but honest. At Molebie AI I ran **hand-graded test sets** across the five backends — I would write 30–50 prompts, run them through each provider, and grade outputs on relevance, format compliance, and latency. That worked for a solo open-source project. What I have **not** done is build an automated eval harness at production scale — LLM-as-judge pipelines, rubric-based grading, regression detection on prompt changes, cost/latency tracking at enterprise volumes. That is the biggest gap on this exact role and I am not going to pretend otherwise. My mitigation plan would be: pair with whoever owns the eval infra in the first 30 days, ship one concrete improvement to the harness in the first 60, own a vertical slice of the eval product by day 90.

### Q8: What's your salary expectation?
> My baseline target range is £28–60K, anchored on associate support / CS / SE roles which is where I have been interviewing. For a founding-engineer-shaped role at a Series A LLMOps company I would anchor **£65K base**, with floor at £55K, and I am openly equity-weighted — I would rather take less cash and more equity at this stage. For Anthropic-scale (post-acquisition redirect), I would follow the published London band. I care more about the vertical slice of work I own and the path to shipping real product than about base creep.

### Q9: Why now, why Humanloop specifically (not just "any LLM platform")?
> *This answer is load-bearing — it is the one Jimmy should lead with in the "why Humanloop" conversation:*
>
> **Because the five-backend inference layer I shipped in Molebie is the primitive Humanloop sells.** I did not pick that design to match a job posting — I picked it in January for an open-source project because switching between providers was the problem I most wanted to solve for my own AI assistant workflow. Three months later I found the company whose whole product is that primitive at enterprise scale, in London, built by ex-UCL founders. That is not market-fit matching — it is the product I was already building, with a real team and real customers. The honest second half of the answer: **I want to stop shipping toy-scale evals and start shipping them at volumes where the output matters to paying customers.** That is what you offer that I cannot build alone.
>
> *Rewrite for Anthropic London:* "Humanloop is now inside Anthropic. The evals work I care about is happening there."

### Q10: How did you hear about us?
> Found through Y Combinator's London jobs board this week while filtering for LLM-platform and product-engineer roles. I was putting together an application when I saw the Anthropic acquisition announcement from August 2025. The acquisition is what redirected me toward Anthropic's London openings — the problem has not moved, just the team.

### Q11: Do you require visa sponsorship?
> No. BN(O) visa — full UK work rights, no sponsorship required now or at renewal.

### Q12: When can you start?
> Two weeks from offer acceptance, compressible to one week. The Glasgow → London move is already planned.

### Q13: Anything else you'd like us to know? (Optional)
> Three things not on the CV. **Trilingual** — English fluent, Cantonese native, Mandarin fluent — useful the day your enterprise push touches APAC or Greater China customers. **Open-source maintainer reps** — Molebie is public and I respond to issues and PRs on it weekly. **Two-time founder context** — I have sat on the customer side of every SaaS negotiation I will ever sit on as an engineer; I know what makes enterprise customers trust a platform and what makes them churn. The combination — founder + full-stack builder + trilingual + open-source maintainer — is the signature I am bringing to whichever team picks it up.

---

## Notes for Jimmy before submitting

1. **DO NOT SUBMIT to Humanloop.** The role does not exist. humanloop.com/careers is 404. YC jobs page shows zero positions. The company was acqui-hired by Anthropic in August 2025.
2. **The #1 thing to lead with in "why Humanloop" (or Anthropic London rewrite):** **"The five-LLM-backend inference layer I shipped in Molebie is the primitive your product sells. I built that design for its own sake, three months before I knew you were hiring. That is not market-fit matching — that is the product I was already building."** This is load-bearing — do not bury it in paragraph three of any answer.
3. **The five-backend inference layer is the single load-bearing proof point across every answer.** Do not let any Humanloop / Anthropic / LLMOps conversation end without mentioning it. It is the most shape-matched artifact on the CV.
4. **Be honest about TypeScript / React depth.** Backend (FastAPI + inference layer) is deeper than frontend. Q5 handles this directly. Do not inflate.
5. **Eval-harness-at-production-scale is the real gap to pre-empt.** Q4 and Q7 both name it openly. Do not wait for the interviewer to find it.
6. **London + BN(O) visa is a positive filter-clearer.** Every form will have a sponsorship question. Always "No." Q11 handles it.
7. **Resume upload:** reference `output/cv-jimmy-isidor-founding-engineer-london-2026-04-23.pdf` — the existing vibe-coder / founding-engineer shaped CV. Do NOT generate a new CV for this submission. The Isidor CV is already the closest fit.
8. **Redirect target (recommended):** Anthropic London careers board — Product Engineer, Frontend Engineer, Applied AI, Solutions roles. Rewrite Q1 and Q9 per the notes above.
9. **Alternative redirect (higher-leverage):** direct LinkedIn outreach to Raza Habib, Peter Hayes, or Jordan Burgess (all now at Anthropic London, formerly Humanloop founders). One paragraph referencing Molebie's five-backend inference layer + the RAG-over-SQLite decision. Lands better than a form submission.
10. **Post-submit housekeeping (manual, if any redirect actually gets submitted):** directly edit `data/applications.md` row #031 — change status from `Evaluated` to `Applied`, flip PDF `❌` to `✅` (if a new CV was generated for the redirect target), update notes column to reflect the actual target company (e.g., "Redirected to Anthropic London — Product Engineer").
11. **Do not submit this draft verbatim to any form.** Every answer needs the Humanloop → Anthropic rewrite first.
