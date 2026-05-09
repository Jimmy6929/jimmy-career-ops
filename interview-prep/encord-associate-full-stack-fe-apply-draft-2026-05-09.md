# Encord — Associate Full-Stack Engineer, Front-End Leaning (London)

**Date:** 2026-05-09
**Report:** [069](../reports/069-encord-associate-full-stack-fe-london-2026-05-09.md)
**Score:** 4.2/5
**URL:** https://jobs.lever.co/CordTechnologies/b683d54a-53e5-4683-959a-817e8f73e0e3
**Comp:** "Competitive salary, commission, and equity" (no band; UK Series C — target £50-60K base + equity)
**Status:** Draft — review before submitting

---

## Standard fields (copy-paste into form)

| Field | Value |
|---|---|
| Name | Jimmy Chu (Ming Kit Chu) |
| Email | jimmymkzhu@gmail.com |
| Phone | +44 7843 812 677 |
| Location | Glasgow, UK (relocating to London) |
| LinkedIn | linkedin.com/in/jimmy-chu-844572247 |
| GitHub | github.com/Jimmy6929 |
| Portfolio | toogoodtobechu.com |
| Work authorization | UK — BN(O) visa, no sponsorship needed |
| Visa sponsorship required? | No |
| Salary expectation | £50-60K base + equity (open on structure) |
| Earliest start date | 2 weeks from offer (sooner if needed) |
| Resume upload | `output/cv-jimmy-fullstack.pdf` (run `/career-ops pdf` if not yet generated) |

---

## Open-ended questions

### Q1: Why Encord?

Your stack — Python on the backend, React/TypeScript on the front, GCP underneath, ML in the loop — is exactly the shape I've been building solo for the past 12 months. Molebie AI is a full-stack AI assistant I shipped in 28 days: FastAPI + React + RAG + a modular layer over 5 LLM backends. Encord's "universal data layer for AI" is a much harder version of the same problem (real customers, real scale, real eng team), and your tech-agnostic + open-to-learning stance tells me you hire for slope. That's the bet I want made on me. Also — on-site London 4+ days fits my relocation plan exactly.

### Q2: Tell us about a relevant project or proof point.

**S:** In Mar 2026 I started Molebie AI as an open-source full-stack AI assistant — solo, no PRD, blank repo.
**T:** Ship a working v0.1 in 28 days that a non-technical user could install and use with a single LLM provider, but that another developer could extend to any backend.
**A:** Built the Python/FastAPI service (chat, sessions, RAG retrieval over SQLite); built the React/TypeScript chat UI; designed a modular inference layer that abstracts 5 LLM backends behind one contract; wrote a CLI onboarding wizard that walks the user through provider keys, model selection, and first message.
**R:** Shipped on day 28. CLI cuts setup from "an hour of reading docs" to under 5 minutes. Backend swap is now a one-line config change.
**Reflection:** Owning every layer reveals which abstractions actually matter — the inference layer was load-bearing, the chat surface was disposable, the CLI was the difference between "interesting repo" and "people actually run it." Next time I'd build the CLI first.

### Q3: Anything else you'd like us to know?

I'm relocating from Glasgow to London — already lined up — so the on-site 4+ days expectation is a feature, not a bug. BN(O) visa, full UK work rights, no sponsorship needed. Trilingual (English fluent, Cantonese native, Mandarin fluent) if that ever helps with APAC customers. Repo if you want to read code: github.com/Jimmy6929 (Molebie); portfolio: toogoodtobechu.com.

---

## Notes — verify before submitting

- [ ] Confirm comp framing — "commission" line in JD is unusual for an Associate IC SWE; ask in screen whether it's a real OTE component or copy-paste from FDE boilerplate
- [ ] Resume upload path — run `/career-ops pdf` first if `output/cv-jimmy-fullstack.pdf` doesn't exist yet
- [ ] Cross-check: report #049 (Encord FDE) is also live — decide whether to apply to both or only this one (this one is the primary)
- [ ] Q1 references Encord's actual stack + their explicit "tech-agnostic" line — verify still in JD before submit
- [ ] No "I'm passionate about" / "leveraged" / "spearheaded" / "results-oriented" — confirmed clean
- [ ] Confirm no Kubernetes / GCP / PyTorch claims slipped into the CV — they're explicitly bonus-only on JD
