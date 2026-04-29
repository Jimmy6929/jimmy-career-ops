# Tessl — Member of Technical Staff, AI Engineer (London) — Application Draft

**Date:** 2026-04-24
**Based on:** Report #032 | Score: 3.8/5 | Archetype: AI Engineer / Founding-Eng-shaped / vibe-coder
**URL:** https://jobs.ashbyhq.com/tesslcareers/b0d7ac51-f587-4944-8b62-58c8e11e918e
**Comp:** Undisclosed on JD. London Series A AI-eng band: £85–120K base + 0.05–0.2% equity (inferred from $750M valuation, 21-person team at Series A close, and London market comps). Overshoots Jimmy's £28–60K stated target by ~50–100%. Treat as positive overshoot; anchor low-band + equity-weighted in the form.
**Status:** Draft only — DO NOT submit until Jimmy reviews.

**Note on question set:** Ashby form fields not accessible without submission. Questions below are the likely superset: Ashby standard personal fields + Tessl's signature "cool project" + "why Tessl" filters (confirmed in the indexed JD text) + standard screener questions for Series A AI-eng roles. Adapt on the fly if the live form differs.

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
| Work authorisation (UK) | Yes — BN(O) visa, no sponsorship required |
| Visa sponsorship needed | No |
| Willing to work London hybrid from Kings Cross | Yes — actively relocating to London |
| Resume upload | output/cv-jimmy-isidor-founding-engineer-london-2026-04-23.pdf |
| Cover letter | Optional on Ashby. If a field exists, point to the "Why Tessl?" answer below. |
| Salary expectation | £85K base (low-band anchor); equity-weighted preference given Series A stage |
| Earliest start date | 2 weeks from offer acceptance (flexible up to 4) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why Tessl?

> Three reasons, in order. (1) **The spec-to-code thesis is the one I'd bet on if I were starting a company today.** I've used Claude Code and Cursor to ship Molebie (my open-source AI assistant) and the pattern is clear — agents hallucinate less when they commit to a structured intent document than when they chase a one-shot prompt. Spec-first is the scaffolding that makes agentic code-gen a production system rather than a demo. (2) **Guy Podjarny and the Snyk DNA.** Snyk won on developer-first security that shipped as open-source before it shipped as enterprise. Tessl is running the same playbook on code-gen, and that playbook is recognisably correct — developers adopt tools that respect their workflow, then their companies buy the enterprise tier. Molebie is my amateur-scale attempt at the same OSS-first thesis. (3) **Model-abstraction library is literally the thing I've already shipped.** Molebie's inference layer supports 5 LLM backends behind one interface. That's the same shape as the day-1 task in your JD. The gap is scale and production-hardening — which is why I'm applying to you rather than trying to grow Molebie into a company.

### Q2: Walk me through a cool project of yours. (Expect this to be a form field — it's explicit in the JD.)

> **Molebie AI — github.com/Jimmy6929.** Full-stack open-source AI assistant, shipped in 28 days. Python/FastAPI backend, React frontend, SQLite persistence with RAG-based document memory. The engineering decision I'm proud of is the **modular inference layer**: a `Backend` interface with `.chat()`, `.embed()`, `.stream()` methods, per-backend adapters implementing it. Swapping Claude for Llama doesn't touch calling code. Onboarding a sixth backend takes under an hour. The thing I'd rebuild: add a capability-declaration layer so callers can query what a backend supports (streaming? function-calling? JSON-mode?) rather than catching unsupported-feature exceptions at runtime. Generality-first was right for the demo; capability-declaration is the right next iteration. I'll push that refactor in the next release cycle regardless of whether this application lands.

### Q3: What's your opinion on spec-to-code and agents-that-write-code paradigms?

> Builder's honest take, not a hedge. **The spec-first pattern is obviously right for anything non-trivial.** Agents that commit to structured intent before generating code hallucinate less, regenerate cleaner on requirement drift, and produce artifacts that survive code review. I've experienced this directly — shipping Molebie with Claude Code, my most reliable workflow was "write the module spec as a markdown block, paste it into the agent, let it produce the implementation, then review against the spec." One-shot prompting produced drift I could feel within 200 lines. **The open question I don't know the answer to: who maintains the spec as requirements evolve?** My current hypothesis is that the spec becomes the code-review artifact rather than a separate document — you review the spec diff and the implementation diff together. I'd be curious whether that matches how you think about it internally, or whether you've landed somewhere I haven't considered. I'd rather have the honest opinion and be wrong than hedge.

### Q4: Tell us about a time you shipped something end-to-end in weeks not months.

> **Molebie — 28 days from empty repo to public release.** Scope was deliberate: three user journeys (chat, document RAG, backend swap), one CLI onboarding path, one persistence layer. I picked the boring stack over the novel one — FastAPI + SQLite rather than a vector DB and message bus — because the product needed to demo across 5 LLM backends, not prove a novel infra pattern. Cut features I'd normally want: no auth, no multi-user, no observability beyond logs. Shipped on day 28, CLI onboarding dropped setup from hours to under 5 minutes, open-sourced the repo. The lesson I carry: **boring stack plus ruthless scope-cutting beats novelty every time the ship date matters more than the architecture review.** I'd bring the same reflex to Tessl's rapid-prototype workflow — bias to shipping, leave instrumentation hooks for the platform team to industrialise later.

### Q5: What's a technical tradeoff you made that you'd revisit?

> Molebie's **inference-layer abstraction was generality-first, not capability-first.** Every backend implements the same `Backend` interface — `.chat()`, `.embed()`, `.stream()`. That works until you hit a backend that does function-calling natively and another that doesn't — at which point the caller has to catch an `UnsupportedFeatureError` at runtime. What I'd rebuild: a capability-declaration API. Each backend registers what it supports at init time, callers query the registry before attempting a feature, the interface stays honest instead of throwing. I didn't build it that way in the 28-day sprint because generality-first was enough for the demo — but it's the first thing I'd refactor before scale. This is the kind of tradeoff I'd expect to have real conversations about on Tessl's team.

### Q6: How do you think about testing and evals for AI-generated code specifically?

> Honest: **I haven't built evals at scale.** My Molebie RAG tuning was 15 test queries and qualitative judgment — which is how prototypes start, not how production systems stay reliable. If I were designing an eval harness for AI-generated code tomorrow, my plan would layer: **(a) structural checks** — does the generated code compile, does it match the spec's declared type signatures, does it pass lint; **(b) golden outputs** for deterministic cases where a specific spec should produce a specific implementation shape; **(c) LLM-as-judge** for the fuzzy middle, with a rule that any judge/reference disagreement gets flagged for human review; **(d) drift tracking** per model version, because what Claude 4.5 produces for a spec is not what Claude 4.7 produces. The hard part is coverage — you never know what edge-case behaviour you're missing until it ships. I'd want to learn from your platform team on that. I'd show up with a plan, not shipped experience.

### Q7: What's your open-source story?

> **Molebie AI on github.com/Jimmy6929** is the live story — I'm the maintainer, I ship releases, I triage issues, I write the README and the CLI onboarding doc. The repo is real code (Python + TypeScript, ~4k lines) and the release cadence is weekly-ish. Outside Molebie, my OSS footprint is smaller: occasional PRs to tools I use, nothing at library-maintainer scale. The honest read is that Molebie is my first meaningful maintainer role and I'm learning the rhythm — what to accept, what to decline, how to communicate with contributors I've never met. I'd expect working on a team at Tessl to accelerate that skill by about 10x, because I'd be working alongside people who've maintained much larger repos.

### Q8: Salary expectation?

> **£85K base as the anchor**, with a strong equity preference given the Series A stage and the $750M valuation at last round. I know MTS at a $125M-raised London startup typically lands above that band — I'm anchoring low because my engineering-tenure CV is 3 years of founder reps, not 5 years of production engineering, and I want the comp conversation to reflect that honestly. If the team's MTS band starts higher and your internal calibration of my interview output lands me there, that's a happy problem. If you downlevel me to a Software Engineer title, I'd accept a lower base in exchange for a written 6-month review with clear MTS criteria. I care more about the work scope and the equity grant than I do about the title.

### Q9: Why Tessl over other Series A London AI companies?

> Specifically over Cursor, Poolside, Magic, Factory, Cognition. **The filter is Guy Podjarny plus OSS-first plus UK-based.** (1) Guy Podjarny's Snyk track record is the single best proxy I can find for "is this founder shipping the next category-defining developer tool." Most of the Series A agentic-code companies have strong ML pedigrees but weaker developer-tool product instincts; Tessl inverts that. (2) Tessl opens a waitlist and courts a DevRel/OSS audience before going enterprise — same pattern Snyk ran. That's the culture I want to be in. (3) UK-based means I can be in the office in Kings Cross tomorrow. I'm relocating from Glasgow to London specifically to close the distance to startups like yours. I'm not interviewing for the US-based ones.

### Q10: Do you require visa sponsorship to work in the UK?

> No. BN(O) visa — full UK work rights, no sponsorship required now or at renewal.

### Q11: How did you hear about us?

> Found Tessl through my own career-search filter for London Series A AI startups with OSS-friendly culture and a recognisable founder. Tessl came up on Accel's job board and Tessl's own careers page; I checked the company page on the same day and applied. Specifically, I'd been tracking the spec-to-code category since Guy Podjarny's launch announcement in late 2024.

### Q12: When can you start?

> Two weeks from offer acceptance, compressible to one week if useful for a start-date target; flexible up to four weeks if the team needs it. I'd use the gap to land one more Molebie release (the capability-declaration refactor mentioned in Q2/Q5) so I show up with fresh shipping muscle memory and a demo I can walk the team through.

### Q13: Anything else you'd like us to know? (Optional)

> Three things not on the CV. **Trilingual** — English fluent, Cantonese native, Mandarin fluent — relevant when Tessl's platform touches APAC developer communities. **Two-time founder** — Amodeling (AI SaaS, #8 on Product Hunt) and Greener Robotics (IoT smart-agri, demo'd at Barclays Eagle Labs, MIT Climate & Energy Prize, YC Startup School). Founder reps look different from engineering tenure on paper; happy to walk through the specific skills that transfer. And one self-aware note: **MTS is a stretch title for me based on pure engineering YoE.** I'd rather you know that upfront — if the bar is strictly 5+ years of production engineering, I'll fail your filter, and I'd rather that land in a 30-minute recruiter call than after a take-home. If the bar is "can this person ship and can they learn fast," I can pass that filter.

---

## Notes for Jimmy before submitting

- **The MTS title is the risk — probe the seniority bar in round 1.** Same move you made with Nick at Elyos. Before committing to a take-home, send the recruiter a direct message: "I want to make sure we're not wasting each other's time — my engineering tenure is 3 years of founder builds, not 5 years of production engineering. If your MTS bar is strictly 5+ YoE I'd rather know now. If the bar is project quality and learning velocity, I'm in." If they hedge, pass. If they say "we hire on projects," proceed.
- **Guy Podjarny / Snyk heritage is the hook — reference it once, not twice.** Q1 and Q9 both touch the Snyk DNA. Don't mention it in Q3 or Q6 too — that would be over-indexing. Interviewers spot the name-drop pattern.
- **The spec-to-code opinion in Q3 IS the filter.** Have a real take, not a hedge. The answer above is a genuine builder's position — "spec-first is obviously right, the open question is who maintains the spec." If you don't actually believe that, write your own version. Do not ship a hedge — Tessl selects against candidates who won't commit.
- **Q2 (cool project) is the highest-leverage answer.** This is the one they'll read first. Molebie's inference-layer abstraction + the capability-declaration refactor you'd do next is the right shape. Make sure the GitHub link resolves and the README reads as production-ish, not as a weekend hack, before submitting.
- **Salary anchor at £85K, not £60K.** The Series A + $750M valuation signals top-quartile bands. Do not anchor inside your £28–60K stated target — that's a mismatch flag. The draft above already anchors correctly; just don't edit it down.
- **Resume upload.** `output/cv-jimmy-isidor-founding-engineer-london-2026-04-23.pdf` — closest-fit vibe-coder CV already on disk. DO NOT regenerate a new CV. If the form asks for "CV tailored to this role," upload this one and paste the Q1 answer into a cover-letter field.
- **Do not submit until you've re-read Q2, Q3, Q5.** Those three are doing the heavy lifting. Everything else is standard-form filler.
- **Post-submit housekeeping:** update `applications.md` row #032 from `Evaluated` → `Applied`, flip PDF ❌ → ✅, update notes with "MTS seniority probe in round 1."
