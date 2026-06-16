export type Lang = 'en' | 'zh-hk';

export type LocalizedText = Record<Lang, string>;

export type Session = {
  time: string;
  duration?: string;
  title: LocalizedText;
  speakers?: LocalizedText;
  abstract?: LocalizedText;
  note?: LocalizedText;
};

export type ModuleSession = {
  title: LocalizedText;
  audience: LocalizedText;
  period: LocalizedText;
  lessons?: string;
  facilitators: LocalizedText;
  abstract: LocalizedText;
};

export const languages: { code: Lang; label: string; shortLabel: string }[] = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'zh-hk', label: '繁體中文', shortLabel: '繁' },
];

export const workshop = {
  title: {
    en: 'Teacher Professional Development Workshop',
    'zh-hk': '教師專業發展工作坊',
  },
  projectName: {
    en: 'JC GoAI Project',
    'zh-hk': '賽馬會人工智能教育計劃',
  },
  dateRange: {
    en: '26-28 August 2026',
    'zh-hk': '2026年8月26日至28日',
  },
  venue: {
    en: 'The Chinese University of Hong Kong',
    'zh-hk': '香港中文大學',
  },
  heroIntro: {
    en: 'A three-day guide for participating principals and teachers to explore AI learning and teaching resources, pedagogy, implementation cases, and subject-specific modules.',
    'zh-hk':
      '為參與校長及教師而設的三日導覽，涵蓋人工智能學與教資源、教學法、實踐案例及不同科目的專題模組。',
  },
  statusNote: {
    en: 'Programme details are based on the August 2026 draft and will be updated as sessions are confirmed.',
    'zh-hk': '活動資料根據2026年8月草擬日程整理，已確認後會持續更新。',
  },
};

export const objectives: LocalizedText[] = [
  {
    en: 'Develop a deeper understanding of JC GoAI AI learning and teaching resources and the design principles behind them.',
    'zh-hk': '深入了解賽馬會人工智能教育計劃的人工智能學與教資源及其設計原則。',
  },
  {
    en: 'Gain confidence, strategies, and practical skills for implementing the AI curriculum effectively.',
    'zh-hk': '建立有效推行人工智能課程所需的信心、策略及實務技巧。',
  },
  {
    en: 'Collaborate with international and local experts, teachers, and peers through demonstrations, hands-on activities, and focused discussions.',
    'zh-hk': '透過教學示範、實作活動及專題討論，與國際及本地專家、教師和同儕交流協作。',
  },
];

export const daySummaries = [
  {
    day: 1,
    date: {
      en: '26 August 2026, Wednesday',
      'zh-hk': '2026年8月26日，星期三',
    },
    time: {
      en: 'Full day',
      'zh-hk': '全日',
    },
    focus: {
      en: 'Project overview, AI education framework, pedagogy, international and local perspectives, and implementation cases.',
      'zh-hk': '計劃概覽、人工智能教育框架、教學法、國際及本地觀點，以及實踐案例。',
    },
    audience: {
      en: 'All schools: school principals and teacher representatives.',
      'zh-hk': '所有學校：校長及教師代表。',
    },
  },
  {
    day: 2,
    date: {
      en: '27 August 2026, Thursday',
      'zh-hk': '2026年8月27日，星期四',
    },
    time: {
      en: '9:30am-4:45pm',
      'zh-hk': '上午9:30至下午4:45',
    },
    focus: {
      en: 'Deep dive into primary AI + TechEd and AI + Subjects learning and teaching resources.',
      'zh-hk': '深入認識小學「人工智能 + 科技教育」及「人工智能 + 學科」學與教資源。',
    },
    audience: {
      en: 'Primary schools only.',
      'zh-hk': '只限小學。',
    },
  },
  {
    day: 3,
    date: {
      en: '28 August 2026, Friday',
      'zh-hk': '2026年8月28日，星期五',
    },
    time: {
      en: '9:30am-4:45pm',
      'zh-hk': '上午9:30至下午4:45',
    },
    focus: {
      en: 'Continuation of TechEd modules and secondary subject-specific learning resources.',
      'zh-hk': '延續科技教育模組，並涵蓋中學學科專題學與教資源。',
    },
    audience: {
      en: 'All schools.',
      'zh-hk': '所有學校。',
    },
  },
];

export const day1Goals: LocalizedText[] = [
  {
    en: 'Understand the JC GoAI Project approach across learning resources, the GenAI tools platform, school support, teacher community, and parent engagement.',
    'zh-hk':
      '了解賽馬會人工智能教育計劃在學與教資源、生成式人工智能工具平台、學校支援、教師社群及家長教育方面的整體取向。',
  },
  {
    en: 'Connect international research and the latest AI education trends with Hong Kong classroom needs.',
    'zh-hk': '連繫國際研究及人工智能教育最新趨勢，回應香港課堂的實際需要。',
  },
  {
    en: 'Explore AI-integrated lesson design principles and implementation strategies through authentic case sharing.',
    'zh-hk': '透過真實案例分享，探索人工智能融入課堂的設計原則及推行策略。',
  },
];

export const day1Sessions: Session[] = [
  {
    time: '8:45am-9:15am',
    duration: '30 mins',
    title: { en: 'Registration', 'zh-hk': '登記' },
  },
  {
    time: '9:15am-9:25am',
    duration: '10 mins',
    title: { en: 'Welcoming and JC GoAI Overview', 'zh-hk': '歡迎辭及計劃概覽' },
    speakers: {
      en: 'Ir. Daniel Lai, BBS, JP, Programme Director, JC GoAI Project',
      'zh-hk': '賽馬會人工智能教育計劃總監黎達強工程師, BBS, JP',
    },
    note: { en: 'AM session conducted in English.', 'zh-hk': '上午環節以英語進行。' },
  },
  {
    time: '9:25am-9:40am',
    duration: '15 mins',
    title: { en: 'Opening Remarks', 'zh-hk': '開幕致辭' },
    speakers: {
      en: 'Prof. Helen Meng and Prof. Cynthia Breazeal',
      'zh-hk': '蒙美玲教授及Cynthia Breazeal教授',
    },
    note: { en: 'Includes group photo.', 'zh-hk': '包括大合照。' },
  },
  {
    time: '9:40am-10:05am',
    duration: '25 mins',
    title: {
      en: 'JC GoAI: AI Framework and L&T Resources Design Principles',
      'zh-hk': '人工智能框架及學與教資源設計原則',
    },
    speakers: { en: 'Prof. Helen Meng', 'zh-hk': '蒙美玲教授' },
    abstract: { en: 'To be confirmed.', 'zh-hk': '待確認。' },
  },
  {
    time: '10:05am-10:50am',
    duration: '45 mins',
    title: {
      en: 'Latest Trends in Educational AI Applications',
      'zh-hk': '教育人工智能應用的最新趨勢',
    },
    speakers: { en: 'Prof. Cynthia Breazeal', 'zh-hk': 'Cynthia Breazeal教授' },
    abstract: {
      en: 'Suggested focus includes AI literacy and fluency, and how AI can transform learning and teaching.',
      'zh-hk': '建議重點包括人工智能素養與流暢度，以及人工智能如何轉化學與教。',
    },
  },
  {
    time: '10:50am-11:25am',
    duration: '35 mins',
    title: { en: 'Networking Break', 'zh-hk': '交流小休' },
    note: { en: 'Light refreshments will be provided.', 'zh-hk': '將提供簡便茶點。' },
  },
  {
    time: '11:25am-12:30pm',
    duration: '65 mins',
    title: {
      en: 'The Great AI Exchange: Cultivating International Perspectives for Local Success',
      'zh-hk': '人工智能教育交流：以國際視野促進本地實踐',
    },
    speakers: {
      en: 'Dr. Andres Felipe Salazar Gomez, Dr. Eric Klopfer, Prof. C S Chai, with panel moderated by JC GoAI leads',
      'zh-hk': 'Andres Felipe Salazar Gomez博士、Eric Klopfer博士、謝錫金教授，以及由計劃團隊主持的專題討論',
    },
    abstract: {
      en: 'This session bridges global research with Hong Kong implementation realities through short research presentations and a moderated panel discussion.',
      'zh-hk': '本環節透過簡短研究分享及主持討論，連結全球研究與香港推行人工智能教育的實際情況。',
    },
  },
  {
    time: '12:30pm-12:45pm',
    duration: '15 mins',
    title: {
      en: 'Appreciation for Project Support Teachers',
      'zh-hk': '答謝計劃支援教師',
    },
    note: {
      en: 'Includes project achievement video, certificate presentation, and group photo.',
      'zh-hk': '包括計劃成果短片、證書頒發及大合照。',
    },
  },
  {
    time: '12:45pm-2:00pm',
    duration: '75 mins',
    title: { en: 'Lunch', 'zh-hk': '午膳' },
  },
  {
    time: '2:00pm-2:40pm',
    duration: '40 mins',
    title: { en: 'Overview of Learning Modules', 'zh-hk': '學習模組概覽' },
    speakers: { en: 'Related teacher trainers', 'zh-hk': '相關教師培訓導師' },
    abstract: {
      en: 'Teacher trainers introduce subject-specific resources across AI Foundation and AI + Subjects, helping teachers identify opportunities for classroom adoption.',
      'zh-hk': '教師培訓導師介紹「人工智能基礎」及「人工智能 + 學科」的科本資源，協助教師尋找可即時應用於課堂的切入點。',
    },
    note: { en: 'PM session conducted in Cantonese.', 'zh-hk': '下午環節以廣東話進行。' },
  },
  {
    time: '2:40pm-3:30pm',
    duration: '50 mins',
    title: {
      en: 'GenAI Tools Platform, Parent Education, and Implementation Cases',
      'zh-hk': '生成式人工智能工具平台、家長教育及實踐案例',
    },
    speakers: {
      en: 'FoEng representative, Mr. Tenma Wong, pilot school representatives and students',
      'zh-hk': '工程學院代表、黃天馬先生、試點學校代表及學生',
    },
    abstract: {
      en: 'Participants learn about platform support and hear authentic evidence of classroom impact from pilot schools.',
      'zh-hk': '參加者將了解平台支援，並從試點學校聽取具體課堂成效及推行經驗。',
    },
  },
  {
    time: '3:40pm-4:20pm',
    duration: '40 mins',
    title: {
      en: 'The Power of Peer Coaching',
      'zh-hk': '同儕教練的力量',
    },
    speakers: {
      en: 'Peer facilitators and participating teachers they supported',
      'zh-hk': '同儕促進者及獲支援的參與教師',
    },
    abstract: {
      en: 'Peer facilitators share how collaborative coaching helps teachers adapt ready-made lessons and develop new AI-integrated learning experiences.',
      'zh-hk': '同儕促進者分享如何透過協作支援，協助教師調適既有課節並發展新的人工智能融入學習經歷。',
    },
  },
  {
    time: '4:20pm-4:30pm',
    duration: '10 mins',
    title: { en: 'Wrap-up', 'zh-hk': '總結' },
  },
];

const tbc = {
  en: 'To be confirmed.',
  'zh-hk': '待確認。',
};

export const moduleSessionsByDay: Record<2 | 3, ModuleSession[]> = {
  2: [
    {
      title: { en: 'TechEd P4', 'zh-hk': '科技教育小四' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      lessons: 'Lessons 1-6',
      facilitators: { en: 'HK trainers only', 'zh-hk': '香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'TechEd P5', 'zh-hk': '科技教育小五' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      lessons: 'Lessons 1-6',
      facilitators: { en: 'MIT Sharifa / MIT Philip + HK trainers', 'zh-hk': 'MIT Sharifa / MIT Philip及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'TechEd P6', 'zh-hk': '科技教育小六' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      lessons: 'Lessons 1-6',
      facilitators: { en: 'MIT Selim / MIT Andres + HK trainers', 'zh-hk': 'MIT Selim / MIT Andres及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Humanities P4', 'zh-hk': '人文科小四' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'MIT Allison + HK trainers', 'zh-hk': 'MIT Allison及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Science P4', 'zh-hk': '科學科小四' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'MIT Sarah + HK trainers', 'zh-hk': 'MIT Sarah及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Chinese P5', 'zh-hk': '中國語文小五' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'Prof. Poon + HK trainers', 'zh-hk': '潘教授及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Math P5', 'zh-hk': '數學小五' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'MIT Robert + HK trainers', 'zh-hk': 'MIT Robert及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'English P6 + Project', 'zh-hk': '英國語文小六及專題' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'MIT John + HK trainers', 'zh-hk': 'MIT John及香港培訓導師' },
      abstract: tbc,
    },
  ],
  3: [
    {
      title: { en: 'TechEd P4', 'zh-hk': '科技教育小四' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      lessons: 'Lessons 7-12',
      facilitators: { en: 'HK trainers only', 'zh-hk': '香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'TechEd P5', 'zh-hk': '科技教育小五' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      lessons: 'Lessons 7-12',
      facilitators: { en: 'MIT Sharifa / MIT Philip + HK trainers', 'zh-hk': 'MIT Sharifa / MIT Philip及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'TechEd P6', 'zh-hk': '科技教育小六' },
      audience: { en: 'Primary', 'zh-hk': '小學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      lessons: 'Lessons 7-12',
      facilitators: { en: 'MIT Selim / MIT Andres + HK trainers', 'zh-hk': 'MIT Selim / MIT Andres及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Chinese S1', 'zh-hk': '中國語文中一' },
      audience: { en: 'Secondary', 'zh-hk': '中學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'Prof. Poon + HK trainers', 'zh-hk': '潘教授及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Citizenship, Economics and Society S1', 'zh-hk': '公民、經濟與社會中一' },
      audience: { en: 'Secondary', 'zh-hk': '中學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'HK trainers only', 'zh-hk': '香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Science S2', 'zh-hk': '科學科中二' },
      audience: { en: 'Secondary', 'zh-hk': '中學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'MIT Sarah + HK trainers', 'zh-hk': 'MIT Sarah及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'English S3', 'zh-hk': '英國語文中三' },
      audience: { en: 'Secondary', 'zh-hk': '中學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'MIT John + HK trainers', 'zh-hk': 'MIT John及香港培訓導師' },
      abstract: tbc,
    },
    {
      title: { en: 'Visual Arts S3 + Project', 'zh-hk': '視覺藝術中三及專題' },
      audience: { en: 'Secondary', 'zh-hk': '中學' },
      period: { en: 'AM or PM session', 'zh-hk': '上午或下午環節' },
      facilitators: { en: 'MIT Allison / Cynthia + HK trainers', 'zh-hk': 'MIT Allison / Cynthia及香港培訓導師' },
      abstract: tbc,
    },
  ],
};

export const dayDeepDiveInfo = {
  goals: [
    {
      en: 'Understand the lesson-design rationale and how AI concepts are woven into each discipline.',
      'zh-hk': '了解課節設計理念，以及人工智能概念如何融入不同學科。',
    },
    {
      en: 'Explore common implementation challenges and collaborate on practical solutions for classroom delivery.',
      'zh-hk': '探討常見推行挑戰，並共同尋找適合課堂實踐的解決方案。',
    },
  ],
  schedule: [
    { time: '9:30am-12:30pm', label: { en: 'AM session', 'zh-hk': '上午環節' } },
    { time: '12:30pm-1:45pm', label: { en: 'Lunch break', 'zh-hk': '午膳時間' } },
    { time: '1:45pm-4:45pm', label: { en: 'PM session', 'zh-hk': '下午環節' } },
  ],
};

export const resources = [
  {
    title: { en: 'Teaching and Learning Resources', 'zh-hk': '學與教資源' },
    body: {
      en: 'Resources will be uploaded as they become available. Please use your registered school email for access when links are shared.',
      'zh-hk': '資源會在備妥後陸續上載。連結發放後，請使用已登記的學校電郵登入。',
    },
  },
  {
    title: { en: 'Teacher Self-paced Online Courses', 'zh-hk': '教師自學網上課程' },
    body: {
      en: 'Please refer to the access instructions and password sent by the project team before the workshop.',
      'zh-hk': '請參閱計劃團隊於工作坊前發出的登入指引及課程密碼。',
    },
  },
  {
    title: { en: 'Important Resource Note', 'zh-hk': '資源使用重要提示' },
    body: {
      en: 'Draft resources are provided for professional development purposes and should not be published or distributed outside eligible participating schools.',
      'zh-hk': '草擬資源只供專業發展用途，不應向合資格參與學校以外的人士或機構發布或分發。',
    },
  },
];

export const logistics = [
  {
    title: { en: 'Bring Your Own Device', 'zh-hk': '請自備電子裝置' },
    body: {
      en: 'The workshop is interactive and most materials will be shared online. Participants are encouraged to bring a laptop or tablet, charger, and power bank.',
      'zh-hk': '工作坊設計重視互動，大部分材料將於網上分享。建議參加者攜帶手提電腦或平板電腦、充電器及外置充電器。',
    },
  },
  {
    title: { en: 'Check-in and Certificates', 'zh-hk': '登記及出席證書' },
    body: {
      en: 'Participants should check in each day. Certificate arrangements and check-in locations will be confirmed closer to the workshop.',
      'zh-hk': '參加者須每日登記。證書安排及登記地點將於工作坊前確認。',
    },
  },
  {
    title: { en: 'Transport', 'zh-hk': '交通' },
    body: {
      en: 'Public transport is recommended because campus parking is limited. Venue details and campus access instructions will be shared before the event.',
      'zh-hk': '由於校園泊車位有限，建議乘搭公共交通工具前往。場地資料及校園進入安排將於活動前公布。',
    },
  },
  {
    title: { en: 'Lunch', 'zh-hk': '午膳' },
    body: {
      en: 'Lunch arrangements will be confirmed. Participants may also use campus canteens and restaurants.',
      'zh-hk': '午膳安排有待確認。參加者亦可自行使用校園飯堂及餐廳。',
    },
  },
  {
    title: { en: 'Enquiry', 'zh-hk': '查詢' },
    body: {
      en: 'Primary school contact: Ms. Vanessa Kiu, vanessakiu@cuhk.edu.hk. Secondary school contact: Ms. Didy Wan, didywan@cuhk.edu.hk.',
      'zh-hk': '小學查詢：Ms. Vanessa Kiu，vanessakiu@cuhk.edu.hk。中學查詢：Ms. Didy Wan，didywan@cuhk.edu.hk。',
    },
  },
];
