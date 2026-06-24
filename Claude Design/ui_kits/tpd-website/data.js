/* TPD workshop content — a curated bilingual subset of the real programme data
   (from website-TPD-Aug26/src/content/programme.ts) for the UI-kit recreation. */
window.TPD = (function () {
  const L = (en, zh) => ({ en, "zh-hk": zh });

  const workshop = {
    project: L("JC GoAI Project", "賽馬會人工智能教育計劃"),
    title: L("Teacher Professional Development Workshop", "教師專業發展工作坊"),
    dateRange: L("26–28 August 2026", "2026年8月26日至28日"),
    venue: L("The Chinese University of Hong Kong", "香港中文大學"),
    heroIntro: L(
      "A three-day guide for participating principals and teachers to explore AI learning and teaching resources, pedagogy, implementation cases, and subject-specific modules.",
      "為參與校長及教師而設的三日導覽，涵蓋人工智能學與教資源、教學法、實踐案例及不同科目的專題模組。"
    ),
    statusNote: L(
      "Programme details are based on the August 2026 draft and will be updated as sessions are confirmed.",
      "活動資料根據2026年8月草擬日程整理，已確認後會持續更新。"
    ),
  };

  const nav = [
    { id: "home", label: L("Home", "首頁") },
    { id: "day-1", label: L("Day 1", "第一日") },
    { id: "day-2", label: L("Day 2", "第二日") },
    { id: "day-3", label: L("Day 3", "第三日") },
    { id: "resources", label: L("Resources", "資源") },
    { id: "logistics", label: L("Logistics", "活動須知") },
  ];

  const ui = {
    register: L("Register", "立即報名"),
    viewProgramme: L("View programme", "瀏覽日程"),
    logistics: L("Logistics", "活動須知"),
    objectives: L("Learning objectives", "學習目標"),
    schedule: L("Day 1 — Schedule at a glance", "第一日 — 日程概覽"),
    modules: L("Day 2 — Subject modules", "第二日 — 學科模組"),
    modules3: L("Day 3 — Subject modules", "第三日 — 學科模組"),
    primaryOnly: L("Primary schools only", "只限小學"),
    allSchools: L("All schools", "所有學校"),
    resourcesH: L("Resources", "資源"),
    logisticsH: L("Logistics", "活動須知"),
    date: L("Date", "日期"),
    venue: L("Venue", "地點"),
    status: L("Draft", "草擬"),
  };

  const features = [
    {
      accent: "programme",
      meta: L("Our Programme", "計劃內容"),
      title: L("Three-day guide", "三日導覽"),
      desc: L(
        "Framework, pedagogy, international and local perspectives, and authentic implementation cases.",
        "涵蓋框架、教學法、國際及本地觀點，以及真實實踐案例。"
      ),
    },
    {
      accent: "teachers",
      meta: L("Teacher Co-creation", "教師共創"),
      title: L("Peer coaching", "同儕教練"),
      desc: L(
        "Collaborative lesson design with local trainers and MIT facilitators across subjects.",
        "與本地培訓導師及麻省理工促進者跨科協作設計課節。"
      ),
    },
    {
      accent: "schools",
      meta: L("Our Schools", "參與學校"),
      title: L("Pilot evidence", "試點實證"),
      desc: L(
        "Authentic classroom impact shared by pilot schools, their teachers and students.",
        "由試點學校、教師及學生分享真實課堂成效。"
      ),
    },
  ];

  const stats = [
    { value: "3", label: L("Workshop days", "工作坊日數") },
    { value: "20+", label: L("Subject modules", "學科模組") },
    { value: "P4–S3", label: L("Year levels", "適用年級") },
    { value: "EN · 繁", label: L("Bilingual delivery", "雙語進行") },
  ];

  const objectives = [
    L("Develop a deeper understanding of JC GoAI AI learning and teaching resources and the design principles behind them.",
      "深入了解賽馬會人工智能教育計劃的人工智能學與教資源及其設計原則。"),
    L("Gain confidence, strategies, and practical skills for implementing the AI curriculum effectively.",
      "建立有效推行人工智能課程所需的信心、策略及實務技巧。"),
    L("Collaborate with international and local experts, teachers, and peers through demonstrations, hands-on activities, and focused discussions.",
      "透過教學示範、實作活動及專題討論，與國際及本地專家、教師和同儕交流協作。"),
  ];

  const day1 = [
    { time: "9:15am–9:25am", duration: L("10 mins", "10分鐘"),
      title: L("Welcoming and JC GoAI Overview", "歡迎辭及計劃概覽"),
      speakers: L("Ir. Daniel Lai, BBS, JP — Programme Director", "賽馬會人工智能教育計劃總監黎達強工程師, BBS, JP"),
      note: L("AM session conducted in English.", "上午環節以英語進行。") },
    { time: "9:40am–10:05am", duration: L("25 mins", "25分鐘"),
      title: L("AI Framework and L&T Resources Design Principles", "人工智能框架及學與教資源設計原則"),
      speakers: L("Prof. Helen Meng", "蒙美玲教授") },
    { time: "10:05am–10:50am", duration: L("45 mins", "45分鐘"),
      title: L("Latest Trends in Educational AI Applications", "教育人工智能應用的最新趨勢"),
      speakers: L("Prof. Cynthia Breazeal", "Cynthia Breazeal教授"),
      abstract: L("AI literacy and fluency, and how AI can transform learning and teaching.",
        "人工智能素養與流暢度，以及人工智能如何轉化學與教。") },
    { time: "11:25am–12:30pm", duration: L("65 mins", "65分鐘"),
      title: L("The Great AI Exchange: International Perspectives for Local Success", "人工智能教育交流：以國際視野促進本地實踐"),
      speakers: L("Dr. Salazar Gomez, Dr. Eric Klopfer, Prof. C S Chai — moderated panel", "Salazar Gomez博士、Eric Klopfer博士、謝錫金教授 — 專題討論"),
      abstract: L("Bridges global research with Hong Kong implementation realities.",
        "連結全球研究與香港推行人工智能教育的實際情況。") },
    { time: "2:00pm–2:40pm", duration: L("40 mins", "40分鐘"),
      title: L("Overview of Learning Modules", "學習模組概覽"),
      speakers: L("Related teacher trainers", "相關教師培訓導師"),
      note: L("PM session conducted in Cantonese.", "下午環節以廣東話進行。") },
    { time: "3:40pm–4:20pm", duration: L("40 mins", "40分鐘"),
      title: L("The Power of Peer Coaching", "同儕教練的力量"),
      speakers: L("Peer facilitators and the teachers they supported", "同儕促進者及獲支援的參與教師") },
  ];

  const day2 = [
    { title: "TechEd P4", audience: L("Primary", "小學"), period: L("AM or PM session", "上午或下午環節"), lessons: "Lessons 1–6", facilitators: L("HK trainers", "香港培訓導師") },
    { title: "TechEd P5", audience: L("Primary", "小學"), period: L("AM or PM session", "上午或下午環節"), lessons: "Lessons 1–6", facilitators: L("MIT Sharifa / Philip + HK trainers", "MIT Sharifa / Philip及香港培訓導師") },
    { title: "Humanities P4", audience: L("Primary", "小學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("MIT Allison + HK trainers", "MIT Allison及香港培訓導師") },
    { title: "Science P4", audience: L("Primary", "小學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("MIT Sarah + HK trainers", "MIT Sarah及香港培訓導師") },
    { title: "Chinese P5", audience: L("Primary", "小學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("Prof. Poon + HK trainers", "潘教授及香港培訓導師") },
    { title: "Math P5", audience: L("Primary", "小學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("MIT Robert + HK trainers", "MIT Robert及香港培訓導師") },
  ];

  const day3 = [
    { title: "TechEd P6", audience: L("Primary", "小學"), period: L("AM or PM session", "上午或下午環節"), lessons: "Lessons 7–12", facilitators: L("MIT Selim / Andres + HK trainers", "MIT Selim / Andres及香港培訓導師") },
    { title: "Chinese S1", audience: L("Secondary", "中學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("Prof. Poon + HK trainers", "潘教授及香港培訓導師") },
    { title: "Citizenship, Economics & Society S1", audience: L("Secondary", "中學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("HK trainers", "香港培訓導師") },
    { title: "Science S2", audience: L("Secondary", "中學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("MIT Sarah + HK trainers", "MIT Sarah及香港培訓導師") },
    { title: "English S3", audience: L("Secondary", "中學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("MIT John + HK trainers", "MIT John及香港培訓導師") },
    { title: "Visual Arts S3 + Project", audience: L("Secondary", "中學"), period: L("AM or PM session", "上午或下午環節"), facilitators: L("MIT Allison / Cynthia + HK trainers", "MIT Allison / Cynthia及香港培訓導師") },
  ];

  const resources = [
    { title: L("Teaching and Learning Resources", "學與教資源"),
      body: L("Resources will be uploaded as they become available. Use your registered school email for access when links are shared.",
        "資源會在備妥後陸續上載。連結發放後，請使用已登記的學校電郵登入。") },
    { title: L("Teacher Self-paced Online Courses", "教師自學網上課程"),
      body: L("Refer to the access instructions and password sent by the project team before the workshop.",
        "請參閱計劃團隊於工作坊前發出的登入指引及課程密碼。") },
    { title: L("Important Resource Note", "資源使用重要提示"),
      body: L("Draft resources are for professional development only and should not be published outside eligible participating schools.",
        "草擬資源只供專業發展用途，不應向合資格參與學校以外人士發布或分發。") },
  ];

  const logistics = [
    { title: L("Bring Your Own Device", "請自備電子裝置"),
      body: L("The workshop is interactive and most materials are shared online. Bring a laptop or tablet, charger, and power bank.",
        "工作坊重視互動，大部分材料將於網上分享。建議攜帶手提電腦或平板、充電器及外置充電器。") },
    { title: L("Check-in and Certificates", "登記及出席證書"),
      body: L("Participants should check in each day. Certificate arrangements and locations will be confirmed closer to the workshop.",
        "參加者須每日登記。證書安排及登記地點將於工作坊前確認。") },
    { title: L("Transport", "交通"),
      body: L("Public transport is recommended as campus parking is limited. Venue and access details will be shared before the event.",
        "由於校園泊車位有限，建議乘搭公共交通工具。場地及進入安排將於活動前公布。") },
    { title: L("Enquiry", "查詢"),
      body: L("Primary: Ms. Vanessa Kiu, vanessakiu@cuhk.edu.hk. Secondary: Ms. Didy Wan, didywan@cuhk.edu.hk.",
        "小學查詢：Ms. Vanessa Kiu，vanessakiu@cuhk.edu.hk。中學查詢：Ms. Didy Wan，didywan@cuhk.edu.hk。") },
  ];

  return { workshop, nav, ui, features, stats, objectives, day1, day2, day3, resources, logistics };
})();
