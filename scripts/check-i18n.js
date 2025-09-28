#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const enPath = path.resolve(root, 'src/locales/en.json');
const jaPath = path.resolve(root, 'src/locales/ja.json');

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

const flatten = (obj, prefix = '') => {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = String(v);
    }
  }
  return out;
};

const diffKeys = (a, b) => {
  const missing = [];
  for (const k of Object.keys(a)) {
    if (!(k in b)) missing.push(k);
  }
  return missing.sort();
};

const main = () => {
  const en = readJson(enPath);
  const ja = readJson(jaPath);
  const fe = flatten(en);
  const fj = flatten(ja);

  const missingInJa = diffKeys(fe, fj);
  const missingInEn = diffKeys(fj, fe);

  let exitCode = 0;
  if (missingInJa.length) {
    exitCode = 1;
    console.error('\n[Missing in ja.json]');
    for (const k of missingInJa) console.error('-', k);
  }
  if (missingInEn.length) {
    exitCode = 1;
    console.error('\n[Missing in en.json]');
    for (const k of missingInEn) console.error('-', k);
  }

  // Optional: warn on identical English/JA strings for likely untranslated entries
  const likelyUntranslated = [];
  for (const k of Object.keys(fe)) {
    if (k in fj && fe[k] === fj[k]) likelyUntranslated.push(k);
  }
  if (likelyUntranslated.length) {
    console.warn('\n[Warning: likely untranslated keys where en === ja]');
    for (const k of likelyUntranslated) console.warn('-', k);
  }

  if (exitCode === 0) {
    console.log('✅ i18n check passed: en.json and ja.json are in sync.');
  }
  process.exit(exitCode);
};

main();
