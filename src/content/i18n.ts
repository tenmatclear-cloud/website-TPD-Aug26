import type { Lang, LocalizedText } from './programme';

// UI chrome labels — navigation, buttons and field labels. These are structural
// (not "programme content"), so they live here in code. Page/programme text is
// edited in src/content/pages/*.md instead.

export type NavItem = {
  href: string;
  label: LocalizedText;
  hidden?: boolean;
};

export const navItems: NavItem[] = [
  { href: '', label: { en: 'Home', zh: '首頁' } },
  { href: 'day-1', label: { en: 'Day 1', zh: '第一日' } },
  { href: 'day-2', label: { en: 'Day 2', zh: '第二日' } },
  { href: 'day-3', label: { en: 'Day 3', zh: '第三日' } },
  { href: 'resources', label: { en: 'Resources', zh: '資源' } },
  { href: 'logistics', label: { en: 'Logistics', zh: '活動須知' } },
  // Remove `hidden` or set to false to show in navigation.
  { href: 'media', label: { en: 'Media', zh: '相片及錄影' }, hidden: true },
];

export const ui: Record<string, LocalizedText> = {
  skipToContent: { en: 'Skip to main content', zh: '跳至主要內容' },
  viewProgramme: { en: 'View programme', zh: '瀏覽日程' },
  logistics: { en: 'Logistics', zh: '活動須知' },
  learningObjectives: { en: 'Learning objectives', zh: '學習目標' },
  scheduleAtGlance: { en: 'Schedule at a glance', zh: '日程概覽' },
  audience: { en: 'Audience', zh: '對象' },
  focus: { en: 'Focus', zh: '重點' },
  time: { en: 'Time', zh: '時間' },
  date: { en: 'Date', zh: '日期' },
  venue: { en: 'Venue', zh: '地點' },
  speakers: { en: 'Speakers', zh: '講者' },
  facilitators: { en: 'Facilitators', zh: '導師' },
  abstract: { en: 'Abstract', zh: '簡介' },
  goals: { en: 'Goals', zh: '目標' },
  modules: { en: 'Modules', zh: '模組' },
  day: { en: 'Day', zh: '第' },
  backHome: { en: 'Back to home', zh: '返回首頁' },
  language: { en: 'Language', zh: '語言' },
  currentLanguage: { en: 'Current language', zh: '目前語言' },
  askQuestion: { en: 'Ask a question', zh: '即時提問' },
  askQuestionShort: { en: 'Ask', zh: '提問' },
};

export const pageTitles: Record<string, LocalizedText> = {
  home: { en: 'TPD Workshop Guide', zh: '教師專業發展工作坊導覽' },
  'day-1': { en: 'Day 1 Programme', zh: '第一日日程' },
  'day-2': { en: 'Day 2 Programme', zh: '第二日日程' },
  'day-3': { en: 'Day 3 Programme', zh: '第三日日程' },
  resources: { en: 'Resources', zh: '資源' },
  logistics: { en: 'Logistics', zh: '活動須知' },
  media: { en: 'Photos and Recordings', zh: '相片及錄影' },
};

export function localize(text: LocalizedText, lang: Lang) {
  if (!text) return '';
  return lang === 'zh-hk' ? text.zh ?? text.en : text.en;
}

export function pathFor(lang: Lang, path = '') {
  const normalized = path.replace(/^\/|\/$/g, '');
  return `/${lang}/${normalized ? `${normalized}/` : ''}`;
}
