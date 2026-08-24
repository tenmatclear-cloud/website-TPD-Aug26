#!/usr/bin/env node
/**
 * Smoke-test local preview (or a base URL) for workshop-day readiness.
 * Usage:
 *   BASE_URL=http://127.0.0.1:4321 node scripts/smoke-test.mjs
 */

const BASE = (process.env.BASE_URL || 'http://127.0.0.1:4321').replace(/\/$/, '');

const LOCAL_PATHS = [
  '/',
  '/en/',
  '/en/day-1/',
  '/en/day-2/',
  '/en/day-3/',
  '/en/resources/',
  '/en/logistics/',
  '/en/media/',
  '/404.html',
  '/brand/JC-Project_AI-Logo_TC_EN.png',
];

const EXTERNAL_URLS = [
  'https://drive.google.com/drive/folders/1Cte8fkfYWXrk-lf_I-K1uXa276NcZ-UU?usp=drive_link',
  'https://forms.gle/pCVSXUm1CPbek1ev8',
  'https://goaiforteachers.org',
];

async function check(url, { follow = true } = {}) {
  const started = Date.now();
  try {
    const res = await fetch(url, {
      redirect: follow ? 'follow' : 'manual',
      headers: { 'user-agent': 'tpd-smoke-test/1.0' },
    });
    return {
      url,
      ok: res.status >= 200 && res.status < 400,
      status: res.status,
      ms: Date.now() - started,
      finalUrl: res.url,
    };
  } catch (err) {
    return {
      url,
      ok: false,
      status: 0,
      ms: Date.now() - started,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

function printResult(label, result) {
  const mark = result.ok ? 'PASS' : 'FAIL';
  const extra = result.error
    ? ` error=${result.error}`
    : ` status=${result.status} ${result.ms}ms`;
  console.log(`[${mark}] ${label}${extra}`);
  return result.ok;
}

async function main() {
  console.log(`Smoke test against ${BASE}\n`);
  let failed = 0;

  console.log('Local pages / assets');
  for (const path of LOCAL_PATHS) {
    const result = await check(`${BASE}${path}`);
    if (!printResult(path, result)) failed += 1;
  }

  console.log('\nExternal dependencies (Drive / Forms / courses / fonts)');
  for (const url of EXTERNAL_URLS) {
    const result = await check(url);
    if (!printResult(url, result)) failed += 1;
  }

  console.log(
    failed === 0
      ? '\nAll smoke checks passed.'
      : `\n${failed} check(s) failed.`,
  );
  process.exit(failed === 0 ? 0 : 1);
}

main();
