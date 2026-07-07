// ============================================================================
//  Programme data loader
//  --------------------------------------------------------------------------
//  This file does NOT contain content. All text lives in the editable markdown
//  files in `src/content/pages/*.md` (see that folder's README.md). This loader
//  reads their frontmatter at build time and exposes typed data to the pages
//  and components. To change what the site says, edit the .md files — not here.
// ============================================================================

export type Lang = 'en' | 'zh-hk';

// Every bilingual value in the markdown is written as { en: "...", zh: "..." }.
export type LocalizedText = { en: string; zh: string };

export type Track = {
  audience: LocalizedText;
  title: LocalizedText;
  speakers?: LocalizedText;
  abstract?: LocalizedText;
};

export type Session = {
  // A normal session row:
  time?: string;
  duration?: string;
  title?: LocalizedText;
  speakers?: LocalizedText;
  abstract?: LocalizedText;
  note?: LocalizedText;
  // A divider band row:
  heading?: LocalizedText;
  // A split (parallel Primary / Secondary) row:
  tracks?: Track[];
};

export type ModuleSession = {
  title: LocalizedText;
  audience: LocalizedText;
  lessons?: LocalizedText;
  room?: string;
  facilitators: string[];
  abstract?: LocalizedText;
};

export type DaySummary = {
  day: number;
  date: LocalizedText;
  time: LocalizedText;
  audience: LocalizedText;
  focus: LocalizedText;
};

export type ScheduleBlock = { time: string; label: LocalizedText };

export type InfoColumn = {
  label: LocalizedText;
  name: string;
  email?: string;
};

export type InfoItem = {
  title: LocalizedText;
  body?: LocalizedText;
  columns?: InfoColumn[];
  href?: string;
  linkLabel?: LocalizedText;
  variant?: 'warning' | 'highlight';
};

export type FeatureAccent = 'programme' | 'teachers' | 'schools';

export type FeatureCard = {
  accent: FeatureAccent;
  meta: LocalizedText;
  title: LocalizedText;
  desc: LocalizedText;
};

export type ImpactStat = { value: string; label: LocalizedText };

export type FeatureSection = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  items: FeatureCard[];
};

export type ImpactSection = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  stats: ImpactStat[];
};

export type TakeawaysSection = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  items: LocalizedText[];
};

// English is the official site language. Set to true when the Chinese version is ready.
export const ZH_HK_ENABLED = false;

export const languages: { code: Lang; label: string; shortLabel: string }[] = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'zh-hk', label: '繁體中文', shortLabel: '繁' },
];

// Languages exposed on the live site (routes + switcher). zh-hk data in .md files is kept for later.
export const activeLanguages = ZH_HK_ENABLED
  ? languages
  : languages.filter(({ code }) => code === 'en');

// Maps a feature card's semantic accent name to its colour token. Keeping the
// mapping here (not in the markdown) means editors pick a meaning, not a hex.
export const featureAccents: Record<FeatureAccent, string> = {
  programme: 'var(--color-accent-orange)',
  teachers: 'var(--color-accent-green)',
  schools: 'var(--color-accent-yellow)',
};

// ---- Load the markdown frontmatter ----------------------------------------
const pageModules = import.meta.glob<{ frontmatter: Record<string, unknown> }>('./pages/*.md', {
  eager: true,
});

function frontmatter(slug: string): any {
  const match = Object.entries(pageModules).find(([path]) => path.endsWith(`/${slug}.md`));
  if (!match) {
    throw new Error(`Missing content file: src/content/pages/${slug}.md`);
  }
  return match[1].frontmatter;
}

const home = frontmatter('home');
const d1 = frontmatter('day-1');
const d2 = frontmatter('day-2');
const d3 = frontmatter('day-3');

// ---- Site-wide / home ------------------------------------------------------
export const workshop = {
  title: home.title as LocalizedText,
  projectName: home.projectName as LocalizedText,
  dateRange: home.dateRange as LocalizedText,
  venue: home.venue as LocalizedText,
  heroIntro: home.heroIntro as LocalizedText,
};

export const features = home.features as FeatureSection;
export const impact = home.impact as ImpactSection;
export const takeaways = home.takeaways as TakeawaysSection;

export const daySummaries = home.days as DaySummary[];

// ---- Per-day programme -----------------------------------------------------
export type ProgrammeDay = {
  intro: LocalizedText;
  goals: LocalizedText[];
  sessions?: Session[];
  schedule?: ScheduleBlock[];
  modules?: ModuleSession[];
};

export const programmeDays: Record<1 | 2 | 3, ProgrammeDay> = {
  1: { intro: d1.intro, goals: d1.goals, sessions: d1.sessions },
  2: { intro: d2.intro, goals: d2.goals, schedule: d2.schedule, modules: d2.modules },
  3: { intro: d3.intro, goals: d3.goals, schedule: d3.schedule, modules: d3.modules },
};

// ---- Static content pages --------------------------------------------------
function infoPage(slug: string): { title: LocalizedText; intro: LocalizedText; items: InfoItem[] } {
  const fm = frontmatter(slug);
  return { title: fm.title, intro: fm.intro, items: fm.items };
}

export const staticPages = {
  resources: infoPage('resources'),
  logistics: infoPage('logistics'),
  media: infoPage('media'),
};
