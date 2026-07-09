#!/usr/bin/env node
/**
 * Capacity check for workshop-day traffic on this static Astro site.
 * Run: node scripts/capacity-check.mjs
 *
 * Conclusion: 500 concurrent browsers are a Vercel CDN / plan concern,
 * not an application concurrency concern (no API/DB/SSR).
 */

const HOBBY_FAST_DATA_TRANSFER_GB = 100;
const PRO_FAST_DATA_TRANSFER_GB = 1024;

/** Approximate uncompressed transfer per full browse (KB), from current dist sizes. */
const PER_USER_FULL_BROWSE_KB =
  6.3 + // home
  18 + // day-1
  10 + // day-2
  10 + // day-3
  5.5 + // resources
  5.5 + // logistics
  4.3 + // media
  14 + // css
  32 + // header logo (resized)
  33; // footer logo

const perUserMb = PER_USER_FULL_BROWSE_KB / 1024;

function gbForUsers(n) {
  return (n * perUserMb) / 1024;
}

const scenarios = [500, 1000, 5000];

console.log('TPD guide site — static CDN capacity check\n');
console.log(`Approx per-user full browse: ${perUserMb.toFixed(2)} MB`);
console.log(`Hobby Fast Data Transfer: ${HOBBY_FAST_DATA_TRANSFER_GB} GB/mo`);
console.log(`Pro Fast Data Transfer: ${PRO_FAST_DATA_TRANSFER_GB} GB/mo\n`);

for (const n of scenarios) {
  const gb = gbForUsers(n);
  const hobbyOk = gb < HOBBY_FAST_DATA_TRANSFER_GB;
  const proOk = gb < PRO_FAST_DATA_TRANSFER_GB;
  console.log(
    `${n} users full browse ≈ ${gb.toFixed(3)} GB  | Hobby: ${hobbyOk ? 'OK' : 'RISK'} | Pro: ${proOk ? 'OK' : 'RISK'}`,
  );
}

console.log('\nVerdict:');
console.log('- Concurrent page views are served from Vercel CDN static files.');
console.log('- No app-level concurrency coding is required for this site.');
console.log('- Confirm the linked Vercel project plan in the dashboard before workshop day.');
console.log('- External deps (Google Drive / Forms / Fonts) are separate from site capacity.');
process.exit(0);
