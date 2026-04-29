#!/usr/bin/env node
/**
 * One-shot cleanup: scan data/pipeline.md "Pendientes" section, mark non-UK roles
 * (per Jimmy's location policy in modes/_profile.md) as `- [!]` with a defer note.
 *
 * UK-eligible signals (KEEP `- [ ]`):
 *   - explicit UK markers: UK, London, Glasgow, Manchester, Edinburgh, Bristol,
 *     Leeds, Birmingham, Belfast, United Kingdom, England
 *   - UK-inclusive regional markers: EMEA, UK&I, UK/I, UKI, "UK and Ireland"
 *   - no geo signal at all (could be UK / global / remote)
 *
 * Defer signals (MARK `- [!]`):
 *   - non-UK countries / regions / cities in title
 *
 * Run: node scripts/cleanup-non-uk-pipeline.mjs [--dry-run]
 */

import fs from 'node:fs';
import path from 'node:path';

const PIPELINE = path.resolve('data/pipeline.md');
const DRY_RUN = process.argv.includes('--dry-run');

// ── Geo signals ─────────────────────────────────────────────────────

// Words/phrases that, if present in the title, indicate the role is NOT UK-targeted.
// Lowercase comparison, word-boundary aware via regex.
const DEFER_PATTERNS = [
  // Regions
  /\blatam\b/i,
  /\bapac\b/i,
  /\banz\b/i,
  /\bnordics?\b/i,
  /\bbenelux\b/i,
  /\bdach\b/i,
  /\bmiddle east\b/i,
  /\bmena\b/i,
  /\bcentral eastern europe\b/i,
  /\bnorth america\b/i,
  /\bamericas\b/i,
  /\bsouthern europe\b/i,
  /\bnorthern europe\b/i,
  /\bsoutheast asia\b/i,
  /\bsea\b/i,                       // Southeast Asia abbr (rare false-positive on "sea")
  // Countries
  /\bindia\b/i,
  /\bjapan\b/i,
  /\bbrazil\b/i,
  /\bmexico\b/i,
  /\bspain\b/i,
  /\bportugal\b/i,
  /\bfrance\b/i,
  /\bgermany\b/i,
  /\bitaly\b/i,
  /\bnetherlands\b/i,
  /\bbelgium\b/i,
  /\bsweden\b/i,
  /\bnorway\b/i,
  /\bdenmark\b/i,
  /\bfinland\b/i,
  /\bgreece\b/i,
  /\bturkey\b/i,
  /\bpoland\b/i,
  /\bsingapore\b/i,
  /\b(south )?korea\b/i,
  /\bchina\b/i,
  /\bhong kong\b/i,
  /\btaiwan\b/i,
  /\baustralia\b/i,
  /\bnew zealand\b/i,
  /\bcanada\b/i,
  /\b(ireland|dublin)\b/i,          // Dublin / Ireland — adjacent but separate market
  /\bphilippines\b/i,
  /\bvietnam\b/i,
  /\bthailand\b/i,
  /\bindonesia\b/i,
  /\bmalaysia\b/i,
  /\bargentina\b/i,
  /\bcolombia\b/i,
  /\bchile\b/i,
  /\bperu\b/i,
  /\buae\b/i,
  /\bsaudi(\sarabia)?\b/i,
  // US-specific
  /\bunited states\b/i,
  /\busa?\b/i,
  /\b(est|pst|cst|mst)( timezone| time zone)?\b/i,
  /\bfederal civilian\b/i,
  /\bfederal\b/i,
  /\bwest coast\b/i,
  /\beast coast\b/i,
  /\bbay area\b/i,
  // Cities (non-UK)
  /\bnew york( city)?\b/i,
  /\bnyc\b/i,
  /\bsan francisco\b/i,
  /\bsf bay\b/i,
  /\btokyo\b/i,
  /\bseoul\b/i,
  /\bsydney\b/i,
  /\bmelbourne\b/i,
  /\bberlin\b/i,
  /\bmunich\b/i,
  /\bparis\b/i,
  /\bmadrid\b/i,
  /\bbarcelona\b/i,
  /\bamsterdam\b/i,
  /\bzurich\b/i,
  /\bzürich\b/i,
  /\bstockholm\b/i,
  /\bcopenhagen\b/i,
  /\bhelsinki\b/i,
  /\bdubai\b/i,
  /\bwarsaw\b/i,
  /\bprague\b/i,
  /\bvienna\b/i,
  /\bmilan\b/i,
  /\brome\b/i,
  /\blisbon\b/i,
  /\bbangalore\b/i,
  /\bmumbai\b/i,
  /\bdelhi\b/i,
  /\bsão paulo\b/i,
  /\bsao paulo\b/i,
  /\bmexico city\b/i,
  // Language-locked roles (typically location-coupled to the language market)
  /\bgerman.speaking\b/i,
  /\bfrench.speaking\b/i,
  /\bspanish.speaking\b/i,
  /\bdutch.speaking\b/i,
  /\bitalian.speaking\b/i,
  /\bportuguese.speaking\b/i,
  /\bpolish.speaking\b/i,
  /\bnordic.speaking\b/i,
  /\bjapanese.speaking\b/i,
  /\bkorean.speaking\b/i,
  /\barabic.speaking\b/i,
  // Mandarin/Cantonese roles are usually location-locked too (mainland CN / SG / HK).
  // Jimmy IS trilingual, so flag for review rather than auto-defer.
  // We'll TREAT Mandarin/Cantonese as defer (since the role region is non-UK) but
  // any "EMEA Mandarin" or similar with EMEA tag will stay due to EMEA override below.
  /\bmandarin\b/i,
  /\bcantonese\b/i,
];

// UK-inclusive override patterns. If a title matches one of these AND a defer pattern,
// the UK signal wins (e.g. "EMEA Sales Engineer" stays even if "France" appears
// somewhere — though that's unlikely in practice).
const UK_OVERRIDE_PATTERNS = [
  /\buk\b/i,
  /\bunited kingdom\b/i,
  /\bengland\b/i,
  /\blondon\b/i,
  /\bglasgow\b/i,
  /\bmanchester\b/i,
  /\bedinburgh\b/i,
  /\bbristol\b/i,
  /\bleeds\b/i,
  /\bbirmingham\b/i,
  /\bbelfast\b/i,
  /\bcambridge\b/i,
  /\boxford\b/i,
  /\bemea\b/i,
  /\buki\b/i,
  /\buk[\s/&]+i(reland)?\b/i,         // UK&I, UK/I, "UK and Ireland"
  /\beurope\b/i,                      // pan-Europe roles often include UK; review later
  /\bwestern europe\b/i,
];

// ── Parse pipeline.md ───────────────────────────────────────────────

function classifyTitle(title) {
  const ukHit = UK_OVERRIDE_PATTERNS.some(re => re.test(title));
  if (ukHit) return 'keep';
  const deferHit = DEFER_PATTERNS.some(re => re.test(title));
  return deferHit ? 'defer' : 'keep';
}

function main() {
  const src = fs.readFileSync(PIPELINE, 'utf8');
  const lines = src.split('\n');

  let inPendientes = false;
  let kept = 0;
  let deferred = 0;
  let unparsed = 0;
  const deferredExamples = [];
  const keptExamples = [];

  const newLines = lines.map(line => {
    if (/^##\s+Pendientes\s*$/.test(line)) { inPendientes = true; return line; }
    if (/^##\s+Procesadas\s*$/.test(line)) { inPendientes = false; return line; }
    if (!inPendientes) return line;

    const m = line.match(/^- \[ \]\s+(\S+)\s*\|\s*([^|]+?)\s*\|\s*(.+?)\s*$/);
    if (!m) {
      // could be a `- [ ] URL` (no pipes) or already-flagged or blank
      if (/^- \[ \]\s+/.test(line)) unparsed++;
      return line;
    }
    const [, url, company, title] = m;
    const verdict = classifyTitle(title);

    if (verdict === 'defer') {
      deferred++;
      if (deferredExamples.length < 8) deferredExamples.push(`${company.trim()} | ${title.trim()}`);
      return `- [!] ${url} | ${company.trim()} | ${title.trim()} — deferred 2026-04-28 (non-UK per location policy)`;
    } else {
      kept++;
      if (keptExamples.length < 12) keptExamples.push(`${company.trim()} | ${title.trim()}`);
      return line;
    }
  });

  const out = newLines.join('\n');
  if (!DRY_RUN) fs.writeFileSync(PIPELINE, out, 'utf8');

  console.log(`Pipeline cleanup ${DRY_RUN ? '(dry-run)' : ''}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Kept (UK-eligible / no geo signal): ${kept}`);
  console.log(`Deferred (non-UK):                  ${deferred}`);
  console.log(`Unparsed (no `+'`|`'+` separators):           ${unparsed}`);
  console.log('');
  console.log('Sample DEFERRED:');
  deferredExamples.forEach(e => console.log(`  - ${e}`));
  console.log('');
  console.log('Sample KEPT:');
  keptExamples.forEach(e => console.log(`  + ${e}`));
}

main();
