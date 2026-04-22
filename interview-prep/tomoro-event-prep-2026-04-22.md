# Tomoro.ai — AI Event Prep (2026-04-23)

**Context:** Warm intro via personal contact at Tomoro. Invited to an AI event tomorrow. Target role: Applied AI Solutions Engineer, UK-wide, £70–90K.

---

## 1. Reality Check First (Read This)

**This is a genuine stretch, not a non-starter.** The JD explicitly says: *"We do not expect every successful candidate to have experience in all of these areas."* Mentoring is framed as a growth-path responsibility ("as your experience grows, this may extend to leading teams") — not a day-one gate. £70–90K is London AI-market pricing for mid-level SE, not "must be senior."

### Mapped against their actual "Indicators you'll be a good fit":

| Their ask | Your reality | Verdict |
|---|---|---|
| Microservices + scalable data pipelines (Spark) | FastAPI microservices ✅, no Spark | ⚠️ real gap |
| Python, SQL | Python strong ✅; SQLite only, not SQL-at-scale | ⚠️ partial |
| LLMs, fine-tuning (OpenAI API, open/closed) | 5-backend inference layer ✅; haven't fine-tuned seriously | ⚠️ partial |
| Solution design in Python/SQL | ✅ Molebie + Amodeling | ✅ strong |
| Analytical problem solving | ✅ Founder reps | ✅ |
| Client-facing communication & translation | ✅ Barclays Eagle Labs / MIT / YC demos, Amodeling presales | ✅ **strong** |
| Business acumen | ✅ Two founder stints | ✅ **strong** |
| Adaptable, self-sufficient | ✅ Founder DNA | ✅ **strong** |
| Passionate, curious | ✅ Genuine | ✅ |
| Ethical AI / compliance | ⚠️ Not a strong narrative yet — prep an honest answer | ⚠️ |

### Honest positioning

You're a credible **mid-level Applied AI SE candidate with real gaps on enterprise data tooling (Spark) and fine-tuning**, but unusually strong on the client-facing + founder-judgement axis that they explicitly flag as the harder-to-hire side. This is *worth* a real application after the event — don't treat it as pure long-game.

**Two gaps you need a clean answer for if probed:**
1. **Spark / scalable pipelines** — don't fake it. Say: "Haven't used Spark in production. I've built FastAPI microservices and multi-backend inference gateways, and I'd expect Spark to slot in as another abstraction layer. Would pick it up fast."
2. **Fine-tuning** — don't fake it. Say: "Used foundational models via API and local inference. Haven't run a real fine-tune. If the project calls for it I'd want to pair with someone experienced for the first one."

**The framing that works:** you are the candidate who *can demonstrate a combination* of the capabilities — strong on ~6 of the 10, weak on 2, missing on 2. That's exactly what their JD language invites.

---

## 2. The Event Strategy — What to Do

**Primary goal:** Be memorable and likeable to 2–3 people. That's it.
**Secondary goal:** Get enough signal on Tomoro's culture/stack to write a sharp follow-up.
**NOT a goal:** Pitch yourself into the job. Do not bring up salary, interviews, or "how do I apply" unless someone else opens that door.

### Before the event (today)

- [ ] **DM your contact**: thank him, confirm attendance, ask "anyone you think I should meet?" — gives him permission to pre-frame you
- [ ] **LinkedIn swipe**: note the 7 founders (Rishabh Sagar, Albert Phelps, Chris Spencer, Ed Broussard, Chloe Kelleher, Ash Garner, Sandi Chanda). If any are at the event, you'll want to recognize faces
- [ ] **Read one Tomoro insights post** (the "Enterprise AI in 2025" one is already summarized below) — gives you one real reference point in conversation
- [ ] **Charge your phone**, have Molebie AI demo-ready (localhost running on laptop OR just the GitHub page + a 20-sec screen recording in Photos). Don't push it; have it if asked.
- [ ] **Decide your outfit**: smart-casual, slightly above their dress code. You're a guest, not crew.

### At the event

**Opening line when your contact introduces you:**
> "Jimmy — I've been shipping AI stuff out of Glasgow, now moving to London. [Contact] and I go back to [context]."

Short, low-pressure, no pitch. Let *them* ask the next question.

**When someone asks "what do you do?":**
> "I'm a founder type — shipped an AI SaaS last year that hit #8 on Product Hunt, and more recently I built an open-source AI assistant in 28 days with a multi-backend inference layer. Right now I'm looking at what's next — which is honestly why I'm here, want to see how Tomoro's team thinks about agent architecture at enterprise scale."

This is ~20 seconds, shows you build, signals you're exploring, and invites *their* expertise into the chat.

**Rules of engagement:**
- **Listen 60%, talk 40%.** Founders and SEs love explaining their system; let them.
- **Don't namedrop OpenAI/NVIDIA/etc. unprompted.** Everyone at an AI event does that. Be the one who doesn't.
- **Do not ask about the specific job opening.** If they bring it up, say: "Yeah, saw the Applied AI SE listing — [contact] mentioned it. I'd love to chat properly after I've had time to think about fit. Tonight I just wanted to meet the team."
- **Don't drink more than one.** Seriously.

### The one move that 90% of people miss

After a good conversation, before you leave: **"Hey, do you mind if I follow you on LinkedIn / drop you a quick message tomorrow? I'd love to stay in touch."** Zero ambiguity. Non-pushy. Gets you the connection before the alcohol wears off and they forget your face.

---

## 3. The Molebie AI Pitch (THIS IS THE ONE THEY'LL ASK ABOUT)

### 20-second version (if they ask "what's Molebie?")

> "Self-hosted AI assistant — think ChatGPT running entirely on your own hardware. Voice, vision, document memory, web search, all offline. The interesting bit was the inference layer — I standardized on the OpenAI API shape as the interface, then wrote adapters for MLX, Ollama, vLLM, and llama.cpp to conform. So any OpenAI-compatible server drops in. MIT licensed, one-line installer."

### 2-minute version (if they lean in)

Walk them through:
1. **Why I built it** — I wanted to know what it actually takes to run LLMs locally with real features (not just a chat wrapper). Also wanted an honest benchmark of my full-stack speed.
2. **The architecture** — Next.js 16 + React 19 frontend, FastAPI backend, SQLite with `sqlite-vec` for embeddings, multi-backend inference layer. faster-whisper for STT, Kokoro (Docker) for TTS, SearXNG (Docker) for self-hosted search. Hybrid vector + BM25 for document memory (PDF/DOCX/TXT/MD). JWT + bcrypt auth with per-user data isolation from day one.
3. **The one interesting design choice** — standardizing on the OpenAI API shape as the universal interface. Adapters wrap MLX, Ollama, vLLM, llama.cpp to emit OpenAI-compatible streaming + tool-call output. That decision made the whole thing extensible — any OpenAI-compatible server just slots in without new code.
4. **The enterprise-relevant bit** — multi-user isolation, wake-word + speaker verification for voice, fully offline capability, local-only data. Privacy-by-default was the design constraint, not a feature.
5. **What I'd do differently** — didn't invest enough in eval harnesses early; retrofitted later. Also would have chosen Postgres over SQLite from the start for multi-user scale.

### Honest numbers if asked about traction

> "It's open-source and I've been the main maintainer with one other contributor. Around 160 commits on main. Traction's early — low double-digit stars. The point for me was the build, not distribution."

**Never inflate this.** The repo numbers (10 stars, 2 forks, 2 contributors) are real. The engineering is the sell, not the popularity.

### The pivot to Tomoro

**The bridge sentence to memorize:**
> "Building Molebie made me realize I want to do this for enterprises, not just me. You're shipping multi-model agent systems to production for companies like Virgin Atlantic in 12 weeks — that's the real version of what I did as a toy. I'd love to learn how your team handles [X]."

Where [X] is one of:
- Non-deterministic LLM output evaluation in enterprise DevOps pipelines
- Governance frameworks adapted for agentic systems (not legacy ML)
- Keeping architectural flexibility across model providers as capabilities shift

All three are themes from their public "Enterprise AI in 2025" thesis — see §6.

---

## 4. Questions They Might Probe

### "Have you ever shipped anything to paying customers?"

> "Amodeling — the AI 3D-model SaaS — had real users via Product Hunt, I ran presales and onboarding. Revenue was limited and we wound it down, but I've sat across from paying users asking 'why is this broken.' Molebie is personal/OSS — I'm honest about the difference. I haven't shipped at enterprise scale yet, but I've shipped at founder scale across two products, which is where the customer-facing instincts come from."

**Don't oversell. The "I'm honest about the difference" line is the move.**

### "What's the hardest technical problem you've debugged?"

> "The multi-backend inference layer in Molebie. I decided early to standardize on the OpenAI API shape as the interface, then wrote adapters for MLX, Ollama, vLLM, and llama.cpp to conform to it. The hard part was normalizing streaming token output and tool-call format across engines that each do it differently — Ollama batches, vLLM streams per-token, llama.cpp has its own protocol. The payoff is extensibility: any OpenAI-compatible server drops in without new code. Happy to walk through the adapter code if useful."

### "Where do you see the gap between building your own project and enterprise work?"

> "Two things. One — evaluation. I could ship Molebie fast because if a response is weird, I notice. At enterprise scale you need real eval harnesses and the discipline to define success metrics up front. Two — governance. I didn't think hard about non-deterministic output risk, because the blast radius was me. I'd expect a steep learning curve there and I'm genuinely interested in it."

**This answers the "are you self-aware?" question without being self-deprecating.**

### "Why not just keep founding?"

> "Two founder stints in three years. I learned a lot and I'd do it again someday, but right now I want to compound inside a team that's further along than I am. Tomoro's growth trajectory and the 'in alliance with OpenAI' positioning means the problems you're solving are already harder than anything I'd set up solo. Founder reps + learning inside a scaled team is the combo I want for the next phase."

### "Are you based in London?"

> "Glasgow now, actively relocating to London — specifically for startup density. BN(O) visa so no sponsorship needed. Happy to travel or do whatever rhythm makes sense for the team."

### "Have you used Spark / scalable data pipelines?"

**Don't fake it.**
> "Haven't used Spark in production. I've built FastAPI microservices and a multi-backend inference gateway that normalizes streaming token output across five engines — that's the microservices/abstraction muscle. I'd pick up Spark fast if the project calls for it; your JD says you're flexible on the stack, which is part of why this appeals."

### "Have you fine-tuned models?"

**Don't fake it.**
> "Used foundational models via API and local inference — OpenAI, plus local models through Ollama / vLLM / llama.cpp / MLX. Haven't run a serious production fine-tune. For the first real one I'd want to pair with someone experienced, then I'd own it from there."

### "How do you think about ethics, data privacy, or compliance in AI?"

**Lean into Molebie's design choices — this is now a real answer, not a gap.**
> "Molebie was designed privacy-first on purpose. Data stays local — SQLite on the user's machine, no cloud round-trip unless they explicitly opt into the OpenAI backend. Multi-user from day one with JWT + bcrypt and per-user isolation, so one user's documents can't leak into another's RAG context. Wake-word + speaker verification on the voice side means the mic isn't a surveillance vector. I haven't worked inside a formal compliance framework like SOC 2 or ISO, so there's a real learning curve there — but the instincts of 'what's the blast radius if this leaks' are baked into the project."

### "What salary are you looking at?"

**If this comes up at the event: deflect.**
> "Honestly, I'd rather figure out fit first. Happy to talk numbers if there's mutual interest after we both know more."

**If pushed in a formal conversation later:** the listing is £70–90K. Don't anchor low — the role justifies the range and you'd be selling yourself short. Try: "The range on the listing works for me. I'd want to understand the level and expectations properly before landing on a specific number, but £70–90K is in scope on my side."

---

## 5. Questions YOU Ask Them (Pick 2–3, Not All)

Optimized for "sounds like someone who thinks" without being try-hard.

1. **"How do you handle evaluation for agents in production? Enterprise clients can't tolerate non-determinism the way consumer apps can — curious what your playbook is."**
   *Why it's good:* Signals you've thought about the hard part, not the sexy part.

2. **"The 12-weeks-to-production methodology — what breaks at that pace? Where do you see teams underinvest?"**
   *Why it's good:* Invites them to be candid about real constraints. People love answering this.

3. **"How much of the SE role is greenfield build vs. sitting in the client's existing stack and retrofitting? Curious what the day-to-day ratio is."**
   *Why it's good:* Practical, shows you understand consulting reality.

4. **"You've named some serious enterprise clients — Virgin Atlantic, Fidelity, Tesco. What's the hand-off model? Do you ever stay embedded, or is it always 'build, train, leave'?"**
   *Why it's good:* Shows you care about what happens *after* delivery.

5. **"What's the single thing you wish more applicants understood about Applied AI work vs. pure ML research?"**
   *Why it's good:* Indirect self-education. Their answer tells you what to emphasize in a future application.

6. **"What's the vibe like across the Edinburgh / London / Sydney / Singapore offices? Is one the mothership or is it genuinely distributed?"**
   *Why it's good:* Human, curious, relevant to where you'd fit.

**DO NOT ask:**
- "What's the interview process?" — killjoy, transactional
- "How many junior roles do you have?" — too direct
- "Tell me about your funding" — they have none yet, public; don't make it weird
- Anything easily Googleable

---

## 6. Tomoro Intel Cheat Sheet

**What they do:** AI consulting/engineering firm building production-ready AI agents for enterprises. "In alliance with OpenAI." Founded 2023.

**Scale:** ~30 employees as of early 2025, quadrupled headcount in a year, revenue 10x'd. Plan to double again over 3 years. Offices in London, Edinburgh, Sydney, Singapore. **Not yet funded** (bootstrapped/revenue-funded — mention if relevant).

**Named clients:** Mattel, Supercell, Red Bull, Virgin Atlantic, Fidelity, Tesco, DPD, Petex.

**Founders (7):** Rishabh Sagar, Albert Phelps, Chris Spencer, Ed Broussard, Chloe Kelleher, Ash Garner, Sandi Chanda.

**Partnerships:** Early access with OpenAI, NVIDIA, Microsoft.

**Methodology:** Strategy in ~2 weeks. Agents in production in <12 weeks.

**Public thesis (from their "Enterprise AI in 2025" post):** 5 things separate winners from losers:
1. **AI Gravity** — fund business units with real influence, not central tech budgets
2. **Design for future AI** — "today's models are the most expensive and dumbest they'll ever be"
3. **Pragmatic governance** — adapt existing frameworks, don't paste legacy ML governance onto LLMs
4. **Continuous adaptation** — architectural flexibility, no vendor lock-in
5. **New possibilities** — beyond cost-cutting, toward things impossible at human scale

**If you remember ONE thing:** the "no vendor lock-in / architectural flexibility" line. It maps directly onto your Molebie multi-backend inference layer. That's your natural bridge.

---

## 7. Follow-Up Plan (Day After)

**Within 24 hours:**
1. LinkedIn message to your contact:
   > "Thanks again for last night — genuinely enjoyed meeting [name 1] and [name 2]. Got a lot out of [specific thing someone said]. Let me know the best next step re: the Applied AI SE role — happy to put together a proper application if you think it's worth a shot."

2. LinkedIn connect with 2–3 people you actually spoke to. Reference the conversation:
   > "Jimmy from last night — really enjoyed the chat about [X]. Connecting so we stay in touch."

**Within 72 hours (only if signal is positive):**
Run `/career-ops oferta` on the JD with me, then `/career-ops apply` to draft a tailored application. Reference the conversations in the cover letter — that's the unfair advantage of the warm path.

**If signal is cool/neutral:**
Don't force it. Stay in touch with your contact, mention Tomoro casually in 1–2 months, and keep applying elsewhere. The event still wasn't wasted — you have a foothold now.

---

## 8. The One-Liner To Remember Tomorrow

> **"Founder who can still read the stack trace — and shipped a 5-backend AI assistant in 28 days."**

That's your shape. Everything else is decoration.

---

## Appendix: Emergency Icebreakers

If a conversation stalls:
- "What's your role here — are you on the engineering side or more client-facing?"
- "Heard you're hiring fast — what's the most interesting problem you're trying to hire *for* right now?"
- "What brought you to Tomoro specifically? There are a lot of AI places to work right now."

If someone asks *you* something hard and you don't know:
- "Honestly, I haven't thought deeply about that — what's your take?" (Flip it, learn something.)
- "That's outside what I've built so far. I'd be curious how you'd approach it." (Same move, slightly different wrapper.)

**Never bluff.** Tomoro staff will smell it in 3 seconds and it's the fastest way to kill a warm intro.
