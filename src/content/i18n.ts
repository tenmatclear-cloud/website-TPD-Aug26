import type { Lang, LocalizedText } from './programme';

export const navItems = [
  { href: '', label: { en: 'Home', 'zh-hk': '首頁' } },
  { href: 'day-1', label: { en: 'Day 1', 'zh-hk': '第一日' } },
  { href: 'day-2', label: { en: 'Day 2', 'zh-hk': '第二日' } },
  { href: 'day-3', label: { en: 'Day 3', 'zh-hk': '第三日' } },
  { href: 'resources', label: { en: 'Resources', 'zh-hk': '資源' } },
  { href: 'logistics', label: { en: 'Logistics', 'zh-hk': '活動須知' } },
  { href: 'media', label: { en: 'Media', 'zh-hk': '相片及錄影' } },
];

export const ui: Record<string, LocalizedText> = {
  skipToContent: { en: 'Skip to main content', 'zh-hk': '跳至主要內容' },
  viewProgramme: { en: 'View programme', 'zh-hk': '瀏覽日程' },
  logistics: { en: 'Logistics', 'zh-hk': '活動須知' },
  draft: { en: 'Draft', 'zh-hk': '草擬' },
  learningObjectives: { en: 'Learning objectives', 'zh-hk': '學習目標' },
  scheduleAtGlance: { en: 'Schedule at a glance', 'zh-hk': '日程概覽' },
  audience: { en: 'Audience', 'zh-hk': '對象' },
  focus: { en: 'Focus', 'zh-hk': '重點' },
  time: { en: 'Time', 'zh-hk': '時間' },
  date: { en: 'Date', 'zh-hk': '日期' },
  venue: { en: 'Venue', 'zh-hk': '地點' },
  speakers: { en: 'Speakers', 'zh-hk': '講者' },
  facilitators: { en: 'Facilitators', 'zh-hk': '導師' },
  abstract: { en: 'Abstract', 'zh-hk': '簡介' },
  goals: { en: 'Goals', 'zh-hk': '目標' },
  modules: { en: 'Modules', 'zh-hk': '模組' },
  day: { en: 'Day', 'zh-hk': '第' },
  resourcesIntro: {
    en: 'Access details will be updated as workshop materials and online course links become available.',
    'zh-hk': '工作坊材料及網上課程連結備妥後，本頁會更新相關存取資料。',
  },
  logisticsIntro: {
    en: 'Use this page to prepare for registration, daily check-in, transport, lunch, and campus access.',
    'zh-hk': '請參閱本頁準備登記、每日簽到、交通、午膳及校園進入安排。',
  },
  mediaIntro: {
    en: 'Photos and recordings will be added after the workshop when they are ready for participating teachers.',
    'zh-hk': '工作坊後，相片及錄影整理完成後會在此供參與教師瀏覽。',
  },
  backHome: { en: 'Back to home', 'zh-hk': '返回首頁' },
  language: { en: 'Language', 'zh-hk': '語言' },
  currentLanguage: { en: 'Current language', 'zh-hk': '目前語言' },
};

export const pageTitles: Record<string, LocalizedText> = {
  home: { en: 'TPD Workshop Guide', 'zh-hk': '教師專業發展工作坊導覽' },
  'day-1': { en: 'Day 1 Programme', 'zh-hk': '第一日日程' },
  'day-2': { en: 'Day 2 Programme', 'zh-hk': '第二日日程' },
  'day-3': { en: 'Day 3 Programme', 'zh-hk': '第三日日程' },
  resources: { en: 'Resources', 'zh-hk': '資源' },
  logistics: { en: 'Logistics', 'zh-hk': '活動須知' },
  media: { en: 'Photos and Recordings', 'zh-hk': '相片及錄影' },
};

export function localize(text: LocalizedText, lang: Lang) {
  return text[lang] ?? text.en;
}

export function pathFor(lang: Lang, path = '') {
  const normalized = path.replace(/^\/|\/$/g, '');
  return `/${lang}/${normalized ? `${normalized}/` : ''}`;
}
