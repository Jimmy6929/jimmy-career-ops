# Encord — Solutions Engineer (London) — Application Draft

**Date:** 2026-04-21
**Based on:** Report #019 | Score: 4.0/5 | Archetype: Solutions Engineer (Jimmy's #4 secondary, stretch sibling to CSA #018)
**URL:** https://jobs.lever.co/CordTechnologies/3ab16807-aede-472d-b807-30229f8dcef2
**Status:** Draft only — DO NOT submit until Jimmy reviews. **Submit AFTER the CSA (018)** so the disclosure flow reads right.

**Note on question set:** Same note as the CSA draft — Lever custom questions not retrievable via public API. Questions below follow the standard Lever SE screener set plus Encord-specific technical questions inferred from the JD.

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
| Work authorization (UK) | Yes — BN(O) visa, no sponsorship required |
| Visa sponsorship needed | No |
| Willing to work 4+ days/week from London office | Yes |
| Willing to travel (UK + Europe) | Yes |
| Resume upload | output/cv-jimmy-encord-se-london-2026-04-21.pdf |
| Cover letter | interview-prep/encord-se-cover-letter-2026-04-21.md |
| Salary expectation | £55,000–£72,000 base + OTE/equity (flexible; see Q on salary) |
| Earliest start date | 2 weeks from offer acceptance (flexible) |
| Pronouns (optional) | He/him |

## Open-ended questions

### Q1: Why do you want to work at Encord as a Solutions Engineer?
> Three reasons. (1) **Your JD's bonus line** — *"hands-on experience with multimodal AI, sensor-fusion, physical AI, LiDAR, or robotics"* — describes 18 months of my founder life at Greener Robotics literally. Multi-sensor hardware/software integration in production, farmer-facing dashboards, the physical-AI loop end-to-end. Very few 3-year-tenure candidates in London have that credential honestly; I want to bring it into Encord's SE function before it decays. (2) **Customer mix** — Woven, AXA, UiPath, Zipline. The enterprise AI crowd actually shipping physical/production AI. I'd rather be an SE across that breadth than deeper in one vertical. (3) **Stage and team.** Series C, ~100 people, YC + Wellington + CRV + Next47 backed, London HQ, 4+ days in-person. The stage where SE playbooks still get shaped rather than inherited.

### Q2: Walk us through a technical architecture you've designed or built.
> **Molebie AI's multi-backend inference layer.** One Python/FastAPI surface in front of 5 LLM providers (OpenAI, Anthropic, local Ollama, a fine-tuned variant, open-weights hosted). Each request enters a small router that picks a provider by task type and user config, then runs a tool-aware loop with short-term memory pulled from SQLite and long-term memory from a RAG layer over user-local docs. The loop terminates on natural stop or a configured step budget; errors flip to the next provider in the fallback list so a single backend outage doesn't kill the session. The CLI onboarding wizard wraps the whole thing — env detection, API-key prompting, sane defaults — which is why setup dropped from hours to under 5 minutes. Shipped in 28 days. Open-source at github.com/Jimmy6929. Happy to walk the code live.
> 
> The pattern I'd carry into Encord SE work: **reusable adapter layer + typed interface + fallback on error + onboarding that wraps the complexity**. That's how you scale a customer POC into a production integration without the SC-becomes-24/7-support anti-pattern.

### Q3: Tell us about a time you led technical discovery with a complex enterprise-style customer.
> At **Greener Robotics** I ran 12-week discovery cycles with 8 pilot farmers who had radically different farm sizes, crop mixes, and technical comfort. The initial dashboard spec ("put everything on one screen") was wrong — real discovery revealed the core decision each farmer actually made daily was a yes/no *"can I skip the field walk today?"* I reframed the dashboard around that single decision, cut the feature scope by two-thirds, and used the remaining engineering time on alerting. Adoption went from "they opened it when we asked" to "they opened it before their first tea of the day." 
> 
> The reflection I carry: **vague requests hide a sharper decision the customer is making day-to-day — find that, reframe around it, the solution collapses into something shippable.** For Encord SE work that's exactly the conversation I'd want to be leading with a Woven or Zipline ML lead — not "what features do you want," but "what decision are you trying to make faster with better-labelled data, and what's the minimum path there."

### Q4: Describe a POC you've built and shipped.
> **Amodeling** — AI SaaS converting text/images into printable 3D models. Every early customer got a bespoke POC: I'd scope their content (architectural mockups, ecommerce product shots, game assets), build a customised demo on their inputs, walk them through the first successful generation, and document what broke. Each POC informed both the product backlog (what breaks repeatedly) and the next customer's onboarding (what to default for them). We hit **#8 on Product Hunt** with 106 upvotes because the POC motion was a flywheel: every onboarded user generated content and feedback the next one inherited. That's the same motion your JD describes — "Architect, build, and deliver highly-technical, customised product demonstrations and POCs that solve specific, complex customer problems."

### Q5: Walk us through your Python experience and a complex script or service you've built.
> Python is my primary production language. **Molebie AI** is the cleanest example: Python/FastAPI backend (routers, middleware, async handlers, pydantic validation), a modular provider abstraction with fallback logic, a RAG layer with custom chunking + embedding + retrieval, and a CLI onboarding wizard using Python's argparse + rich for interactive setup. Production-quality: tests, type hints, lint-clean, env-isolated. Github: [github.com/Jimmy6929](https://github.com/Jimmy6929). I've also written Python data pipelines for Greener Robotics (multi-sensor ingestion, time-series aggregation, alert rules) and automation scripts for the 3D printing business (CAD slicer preprocessing). For Encord SE work — data ingestion, pre/post-processing, dataset management, custom integrations — this is squarely in my comfort zone.

### Q6: What's your experience with cloud platforms (AWS/GCP/Azure) and ML production workflows?
> Honest answer: lighter than someone at the 5-year-SE end of your band. Most of my production deploys have been edge-local (Greener Robotics sensor hardware, Molebie desktop CLI) or PaaS (Vercel/Railway for web). I've read enough AWS/GCP architecture to hold a conversation — S3 + Lambda + API Gateway, compute patterns, IAM basics — but I haven't lived inside a production ML workflow on the big clouds yet.
> 
> I want to close this gap as a pre-interview artefact, not as a line on my CV. Before our first technical interview I'll stand up a small AWS-hosted Molebie inference service — a single Lambda-backed endpoint with S3 dataset storage — and share the code. That turns the gap from "filter me out" to "here's the ramp; judge it on weekly progress." If that's not enough and the role requires someone who's lived on AWS for years, I'd rather know now than discover mid-POC.

### Q7: Have you worked with multimodal data, sensor fusion, LiDAR, or robotics data?
> Yes — 18 months at **Greener Robotics**. Smart-agri IoT with soil moisture, climate, imaging, and location sensor streams feeding real-time dashboards. The closest analogue to LiDAR-style production data I have is the imaging stream — a fleet of low-power cameras doing change-detection for crop monitoring, with labelled outputs feeding downstream model training. The edge-to-cloud pipeline (ingest, timestamp, chunk, forward, store) is structurally similar to what a robotics customer of Encord would be building. I demo'd the rig at **Barclays Eagle Labs**, the **MIT Climate & Energy Prize**, and **YC Startup School**. It's not autonomous-vehicle scale, but it's real production sensor data with all the messiness of hardware in the loop (dropped packets, clock skew, labelling cost) — which I'd argue is the useful kind of experience to bring into customer conversations.

### Q8: How would you structure your first 30/60/90 days as an SE at Encord?
> **Days 1–30:** Ramp deep on Encord's platform — write my own end-to-end annotation project on a public dataset, including API/SDK integration, so I've felt every onboarding step a customer feels. Shadow 2–3 live deals across different verticals (robotics / insurance / RPA). Read the last quarter of SE-owned POCs cold. Ship the AWS-hosted Molebie service from the cover letter as my "ramp proof." **Days 31–60:** Own the technical win on one live enterprise deal under senior SE supervision. Pick the most common recurring POC objection and ship a reusable demo/asset that handles it. Start logging solution patterns for the shared library. **Days 61–90:** Own one POC end-to-end for a robotics or physical-AI customer (leaning on the Greener Robotics background). Propose one structural improvement to the POC playbook based on what I saw in days 1–60. By end of quarter: one more shipped enterprise reference, one reusable asset in the library, credible Python-production-script history on customer-facing code.

### Q9: What's your salary expectation?
> £55,000–£72,000 base, plus commission/OTE and equity per your band. I'm anchoring inside the realistic London SE band at Series C AI infra rather than top — 3 years of founder-operator reps puts me at the floor of your 1-5+ YOE window, not the middle. I'd rather start inside-band with a 6-month review tied to real milestones (one shipped POC, one reusable asset, credible Python production deployment on AWS) than over-anchor and force a renegotiation. If the role calibrates senior, happy to discuss; if it calibrates as Associate SE, I'd start at the bottom of that band with clear promotion criteria. Single-number fallback: £60,000.

### Q10: How did you hear about us?
> External search this week filtering for London / Series B-C / AI-infra / customer-facing-technical roles. Encord came up because I was specifically looking at YC portfolio companies with London offices that had either Support, CS, Solutions, or DevRel openings. Scored highest on fit. Applied same day.

### Q11: Do you require visa sponsorship to work in the UK?
> No. BN(O) visa — full UK work rights, no sponsorship required.

### Q12: Are you comfortable working 4+ days/week from the London office?
> Yes. Actively relocating from Glasgow to London to be closer to the startup ecosystem — 4+ days in-office is a positive.

### Q13: When can you start?
> Two weeks from offer acceptance, compressible to one week. I'd use the gap to ship the AWS-hosted Molebie service I committed to above.

### Q14: Are you applying for any other roles at Encord?
> Yes — I also applied for the **Customer Success Associate** posting in London (submitted earlier today). Both roles map to the shape of work I've done as a founder, and I'd genuinely be excited in either seat — CSA with more growth-and-community weight, SE with more Python-and-architecture weight. You're better placed than me to calibrate where I fit best. Treat this as "wherever you think I add the most value," not two separate bets.

### Q15: Anything else you'd like us to know? (Optional)
> **Trilingual** — English fluent, Cantonese native, Mandarin fluent — useful the day Encord lands a Greater China / Hong Kong enterprise customer that wants first-language technical walkthroughs. And one honest framing note: I know my cloud-platform depth is thinner than the top of your SE band. My bet is that the robotics/physical-AI vertical match + Python builder credentials + customer-facing reps compensate at the Associate/mid-SE band — and that the AWS-hosted Molebie demo I've committed to will show the ramp is time-bounded. If that bet doesn't land, I'd rather know early.

---

## Notes for Jimmy before submitting

- **Submit order: CSA (018) first, THEN SE (019).** Q14 here discloses the CSA application — Encord's recruiter should see CSA first so the disclosure flow reads right. Do NOT submit SE before CSA.
- **Lever custom questions not retrievable via public API.** Live form may have 1–3 Encord-specific SE screeners not covered here. Most likely: "architecture walkthrough" (covered Q2), "POC example" (Q4), "Python experience" (Q5), "cloud experience" (Q6). Adapt on the fly.
- **Biggest commitment: AWS-hosted Molebie inference service.** Mentioned in cover letter, Q6, Q8, Q13. This is a 3-5 hour afternoon project (Lambda + S3 + API Gateway + a Molebie endpoint) but it's *load-bearing* on the application's credibility. **Do not submit unless you can actually ship it before the first interview.** If you can't, soften Q6 ("I'm actively ramping on AWS — would welcome your guidance on what to focus on") and drop the pre-interview commitment from cover + Q13.
- **Salary anchor.** Report #019 benchmark: £65–95K base + commission + equity for London SE at Series C AI infra with 1–5 YOE. Q9 anchors £55–72K (deliberately at floor-to-middle, given 3y founder-reps vs 5y SE-ladder). Single-number fallback £60K. Do not drop below £50K base.
- **Verify Q2 (Molebie architecture)** against actual codebase — the router + tool loop + fallback description is consistent with cv.md but specifics (task-typed routing, step budget, fallback ordering) are reconstructed. **Cross-check before pasting.** If Encord digs in at interview, they'll find drift.
- **Verify Q3 (Greener Robotics farmer discovery)** and Q7 (sensor types) against what actually happened — the "tea of the day" line is vivid and specific. If your recall is that the pivot was slightly different, edit to match.
- **Resume upload.** `output/cv-jimmy-encord-se-london-2026-04-21.pdf` — 2 pages A4, 124 KB. Lead bullets on Molebie emphasise Python/FastAPI architecture; lead bullets on Greener Robotics emphasise sensor data + physical AI. Check it reads as an SE candidate, not a CSA candidate.
- **Cover letter.** `interview-prep/encord-se-cover-letter-2026-04-21.md`. If form has a slot, attach/paste the body.
- **Post-submit housekeeping (manual):** update `applications.md` row #19 from `Evaluated` → `Applied`, flip PDF ❌ → ✅, update notes to start with `Submitted 2026-04-21.`.
- **Do not submit.** Read every answer as plain text — especially Q2 (architecture), Q3 (discovery story), Q7 (sensor types). Edit anything that drifts. Then hit Apply yourself.
