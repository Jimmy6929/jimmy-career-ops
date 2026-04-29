# Modo: auto-pipeline — Pipeline Completo Automático

Cuando el usuario pega un JD (texto o URL) sin sub-comando explícito, ejecutar TODO el pipeline en secuencia:

## Paso 0 — Extraer JD

Si el input es una **URL** (no texto de JD pegado), seguir esta estrategia para extraer el contenido:

**Orden de prioridad:**

1. **Playwright (preferido):** La mayoría de portales de empleo (Lever, Ashby, Greenhouse, Workday) son SPAs. Usar `browser_navigate` + `browser_snapshot` para renderizar y leer el JD.
2. **WebFetch (fallback):** Para páginas estáticas (ZipRecruiter, WeLoveProduct, company career pages).
3. **WebSearch (último recurso):** Buscar título del rol + empresa en portales secundarios que indexan el JD en HTML estático.

**Si ningún método funciona:** Pedir al candidato que pegue el JD manualmente o comparta un screenshot.

**Si el input es texto de JD** (no URL): usar directamente, sin necesidad de fetch.

## Paso 1 — Evaluación A-G
Ejecutar exactamente igual que el modo `oferta` (leer `modes/oferta.md` para todos los bloques A-F + Block G Posting Legitimacy).

## Paso 2 — Guardar Report .md
Guardar la evaluación completa en `reports/{###}-{company-slug}-{YYYY-MM-DD}.md` (ver formato en `modes/oferta.md`).
Include Block G in the saved report. Add `**Legitimacy:** {tier}` to the report header.

## Paso 3 — Generar Apply Draft `.md` (solo si score >= 3.5)

Si el score final es >= 3.5, generar el apply draft estándar como archivo independiente.

**Output:** `interview-prep/{company-slug}-{role-shorthand}-apply-draft-{YYYY-MM-DD}.md`

**Estructura:** Seguir EXACTAMENTE la plantilla canónica definida en `modes/_profile.md` → "Your Application Pack Defaults" → "Apply-draft canonical structure". No improvisar:
- Header block (Company, Date, Report link, Score, URL, Comp, Status)
- Standard fields table (12 rows: name through resume upload)
- **Exactamente 3 open-ended questions:**
  - Q1: Why {Company}?
  - Q2: Tell us about a relevant project or proof point.
  - Q3: Anything else you'd like us to know?
- Notes block (pre-submit checklist)

**No generar** Section H dentro del report, ni cover letter `.txt`, ni CV PDF. Esos solo corren cuando el usuario los pide explícitamente (ver "Trigger phrases" en `_profile.md`).

### Tono para las 3 respuestas

**Posición: "I'm choosing you."** El candidato tiene opciones y está eligiendo esta empresa por razones concretas.

**Reglas de tono:**
- **Confiado sin arrogancia**: "I've spent the past year building production AI agent systems — your role is where I want to apply that experience next"
- **Selectivo sin soberbia**: "I've been intentional about finding a team where I can contribute meaningfully from day one"
- **Específico y concreto**: Siempre referenciar algo REAL del JD o de la empresa, y algo REAL de la experiencia del candidato
- **Directo, sin fluff**: 2-4 frases por respuesta. Sin "I'm passionate about..." ni "I would love the opportunity to..."
- **El hook es la prueba, no la afirmación**: En vez de "I'm great at X", decir "I built X that does Y"

**Framework por pregunta:**
- **Q1 Why {Company}?** → Mencionar algo concreto sobre la empresa + un mapping de la experiencia. "Your [specific thing] maps directly to [specific thing I built]."
- **Q2 Relevant project?** → Un proof point cuantificado con STAR+R. "Built [X] that [metric]. Reflection: [what I'd do differently]."
- **Q3 Anything else?** → Opcional. Use para: London relocation, BN(O) no-sponsorship, portfolio link, idiomas. Saltar si Q1+Q2 ya cubren todo.

**Idioma**: Siempre en el idioma del JD (EN default).

## Paso 4 — Actualizar Tracker

Registrar en `data/applications.md` con todas las columnas. Importante: la columna **PDF** se escribe como `—` (em-dash), NO como `❌` ni `✅`. PDF ya no es parte del flujo por defecto; solo se genera si el usuario invoca `/career-ops pdf` explícitamente, en cuyo caso la columna se actualiza a `✅`.

**Si algún paso falla**, continuar con los siguientes y marcar el paso fallido como pendiente en el tracker.
