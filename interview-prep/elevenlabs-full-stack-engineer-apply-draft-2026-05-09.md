# ElevenLabs — Full-Stack Engineer (general)

**Date:** 2026-05-09
**Report:** [074](../reports/074-elevenlabs-full-stack-engineer-uk-2026-05-09.md)
**Score:** 4.4/5
**URL:** https://jobs.ashbyhq.com/elevenlabs/6a530871-b6c6-4783-ac6b-69cc3b084192
**Comp:** Not listed; market band ~£90-140K base + equity at Series D AI scaleup
**Status:** Draft — review before submitting

---

## Standard fields (copy-paste into form)

| Field | Value |
|---|---|
| Name | Jimmy Chu |
| Email | jimmymkzhu@gmail.com |
| Phone | +44 7843 812 677 |
| Location | Glasgow, UK (relocating to London) |
| LinkedIn | linkedin.com/in/jimmy-chu-844572247 |
| GitHub | github.com/Jimmy6929 |
| Portfolio | toogoodtobechu.com |
| Work authorization | UK — BN(O) visa, no sponsorship needed |
| Visa sponsorship required? | No |
| Salary expectation | £80-110K base (open to discuss; equity matters) |
| Earliest start date | 2026-05-25 (or sooner) |
| Resume upload | available on request (run `/career-ops pdf` if a tailored CV is needed) |

---

## Open-ended questions

### Q1: Why ElevenLabs?

ElevenLabs is the clearest example of an AI scaleup where the product is the model — voice quality is the moat, and the engineering work is wiring world-class models into things millions of people actually use. That maps directly to what I just spent a month doing on Molebie AI: a full-stack AI assistant with five LLM backends behind one API and RAG over local docs. I want to bring that same "model in, useful product out" instinct to a team where the model is already best in class and the gap between research and product is where the leverage lives.

### Q2: Tell us about a relevant project or proof point.

In 28 days I shipped Molebie AI end-to-end as a solo engineer: FastAPI backend, React frontend, SQLite persistence with RAG-based document memory, and a modular inference layer wired to five LLM backends behind a single API. A CLI onboarding wizard cut setup from hours to under five minutes. **Reflection:** my first cut leaked provider-specific quirks into the chat layer; I refactored to push all of them behind the inference abstraction, which halved integration time when adding the fourth and fifth backends. Lesson learned — design the interface first, build the UI against a mock, then plug providers in.

### Q3: Anything else you'd like us to know?

I am two-time founder relocating from Glasgow to London, BN(O) visa so no sponsorship needed. I have shipped one AI product to Product Hunt #8 (Amodeling, text/image to 3D) and demo'd a hardware/software startup at Barclays Eagle Labs, MIT Climate & Energy Prize, and YC Startup School. The pattern across all three: I write the code and I run the demo. Repo for Molebie AI on github.com/Jimmy6929 if you want to read it before talking.

---

## Notes — verify before submitting

- [ ] Confirm salary range is current — Series D ($20M, March 2026) on top of Series C suggests bands moved up; recheck Levels.fyi before submitting
- [ ] Confirm role title in the Ashby form matches "Full-Stack Engineer" (not BE/FE-leaning sibling)
- [ ] Resume upload — note this is the general FS req; a tailored CV would emphasize Molebie AI's Python+React combo over either side alone
- [ ] Q1 references something concrete (voice = model = moat); confirm this language still fits if their current marketing pivots
- [ ] No "I'm passionate about" / "leveraged" / "spearheaded" / "results-oriented" — confirmed clean
- [ ] If applying across all three FS reqs, lead with this one (general) and only apply to BE/FE if recruiter asks
