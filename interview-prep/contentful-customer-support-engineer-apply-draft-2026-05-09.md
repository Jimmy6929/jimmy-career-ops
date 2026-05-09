# Contentful — Customer Support Engineer (f/m/d) — London

**Date:** 2026-05-09
**Report:** [065](../reports/065-contentful-customer-support-engineer-london-2026-05-09.md)
**Score:** 4.1/5
**URL:** https://job-boards.greenhouse.io/contentful/jobs/7655986
**Comp:** Not disclosed in posting; market band L1 Support Eng London £35–50K, senior £50–70K + variable + equity (Levels.fyi / Glassdoor)
**Status:** Draft — review before submitting

---

## Standard fields (copy-paste into form)

| Field | Value |
|---|---|
| Name | Jimmy Chu (Ming Kit Chu) |
| Email | jimmymkzhu@gmail.com |
| Phone | +44 7843 812 677 |
| Location | Glasgow, UK (relocating to London) |
| LinkedIn | https://www.linkedin.com/in/jimmy-chu-844572247 |
| GitHub | https://github.com/Jimmy6929 |
| Portfolio | https://toogoodtobechu.com |
| Work authorization | UK — BN(O) visa, no sponsorship needed |
| Visa sponsorship required? | No |
| Salary expectation | £45K base (mid-band, role-adjusted); flexible on structure including equity |
| Earliest start date | 2 weeks from offer acceptance (compressible to 1 week) |
| Resume upload | "Available on request" — run `/career-ops pdf` against report 065 if Jimmy wants a tailored PDF for upload |

---

## Open-ended questions

### Q1: Why Contentful?
> Two reasons. Contentful's role asks for someone who can read a stack trace *and* produce example code — most support reqs ask for one or the other. I've spent the last year building Molebie AI, an open-source full-stack assistant with a modular layer wired to 5 LLM provider APIs; debugging integration tickets across that layer (auth quirks, rate-limit edge cases, schema drift) is the same daily motion this role runs against the Contentful API. Second: I tracked Contentful's London hiring through the spring and waited for the IC technical-support req specifically — the bar here matches my actual reps better than the senior CSM track does.

### Q2: Tell us about a relevant project or proof point.
> **Molebie AI — multi-backend integration debugging.** I architected the inference layer connecting our FastAPI backend to 5 LLM provider APIs. One provider's streaming endpoint started failing intermittently in production after a vendor-side schema change, while the other 4 backends stayed healthy. I built a curl harness to isolate where the bug lived (our adapter vs. their API), confirmed it was a schema mismatch on the response envelope, shipped a backwards-compatible patch on the adapter, and added a regression test so it would catch a future drift. The fix landed the same day; no other backend regressed. Reflection: I'd write the curl harness on day one of any new integration next time — would have saved two hours of guessing on this one. That triage motion (reproduce → isolate → patch → close-loop) is what I'd bring to your support tickets from week one.

### Q3: Anything else you'd like us to know?
> Three quick things. (1) **Relocation:** I'm in Glasgow today and actively relocating to London — I've been pacing applications around London-eligible roles only. (2) **Work authorization:** BN(O) visa, full UK rights, no sponsorship needed now or at renewal. (3) **Trilingual:** English fluent, Cantonese native, Mandarin fluent — useful coverage for any APAC / Greater China developer tickets that route through London hours. Portfolio at toogoodtobechu.com and Molebie AI on GitHub at github.com/Jimmy6929 if you want a code sample before the screen.

---

## Notes — verify before submitting

- [ ] **(f/m/d) suffix is German-law boilerplate, not a German-language requirement.** Confirmed in WebFetch — the JD asks only for "excellent English." Do not switch to German on the form unless explicitly prompted.
- [ ] Confirm comp expectation against current Levels.fyi London Support Engineer band before any recruiter call.
- [ ] If the form requires a resume upload, run `/career-ops pdf` against report 065 first — current default is `output/cv-jimmy-{closest-fit}.pdf` and there's no Contentful-tailored PDF yet.
- [ ] Q1 references the JD's "produce example code" requirement and Molebie AI's 5-backend integration layer — both load-bearing. Don't soften.
- [ ] Q2 STAR+R: confirm with Jimmy that the streaming-endpoint fix story is accurately retold; if memory drifts, swap for a different Molebie debugging story rather than embellish.
- [ ] Cross-reference: report #037 (Contentful CSM-Dedicated, scored 2.4/5, SKIP on French/Italian) is the same company, different role family. **This is not a re-application — it's a different req.** Mention #037 to the recruiter only if asked, and frame it as "I waited for the IC technical role."
- [ ] No "I'm passionate about" / "leveraged" / "spearheaded" / "results-oriented" / "excited to" — verify before sending.
- [ ] Optional pre-interview spike: 2 hours to spin up a free Contentful account, model a content type, hit the Content Delivery API from a small React demo, link in any follow-up email. High-leverage signal that "I can sit at a Contentful instance and produce example code."
- [ ] Do not submit without Jimmy's explicit go-ahead.
