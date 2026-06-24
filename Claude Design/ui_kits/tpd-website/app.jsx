/* TPD UI kit — screens + app shell. Composes the DS content components. */
const { Button, Tag, Eyebrow, Card, StatBlock, SessionRow, ModuleCard, InfoPanel } =
  window.JCGoAIDesignSystem_019a01;
const TPDc = window.TPD;
const tt = window.tpdTx;

function Hero({ lang, setPage }) {
  return (
    <section className="tpd-hero">
      <div className="tpd-hero-inner">
        <div>
          <Eyebrow onDark bordered>{tt(TPDc.workshop.project, lang)}</Eyebrow>
          <h1 className="tpd-hero-title">{tt(TPDc.workshop.title, lang)}</h1>
          <p className="tpd-hero-lead">{tt(TPDc.workshop.heroIntro, lang)}</p>
          <div className="tpd-hero-actions">
            <Button variant="primary" showArrow onClick={() => setPage("day-1")}>{tt(TPDc.ui.viewProgramme, lang)}</Button>
            <Button variant="ghost" onClick={() => setPage("logistics")}>{tt(TPDc.ui.logistics, lang)}</Button>
          </div>
        </div>
        <aside className="tpd-hero-panel" aria-label="Workshop summary">
          <dl>
            <div><dt>{tt(TPDc.ui.date, lang)}</dt><dd>{tt(TPDc.workshop.dateRange, lang)}</dd></div>
            <div><dt>{tt(TPDc.ui.venue, lang)}</dt><dd>{tt(TPDc.workshop.venue, lang)}</dd></div>
            <div><dt>{tt(TPDc.ui.status, lang)}</dt><dd className="muted">{tt(TPDc.workshop.statusNote, lang)}</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function HomeScreen({ lang, setPage }) {
  return (
    <>
      <Hero lang={lang} setPage={setPage} />
      <div className="tpd-shell">
        <section className="tpd-section">
          <div className="tpd-section-head">
            <div>
              <Eyebrow>{tt({ en: "What to expect", "zh-hk": "活動內容" }, lang)}</Eyebrow>
              <h2>{tt({ en: "Three days, one community", "zh-hk": "三日，一個社群" }, lang)}</h2>
            </div>
            <Button variant="ghostDark" showArrow onClick={() => setPage("day-1")}>
              {tt(TPDc.ui.viewProgramme, lang)}
            </Button>
          </div>
          <div className="tpd-grid-3">
            {TPDc.features.map((f, i) => (
              <Card key={i} accent={f.accent} meta={tt(f.meta, lang)} title={tt(f.title, lang)} description={tt(f.desc, lang)} href="#" />
            ))}
          </div>
        </section>

        <section className="tpd-split">
          <div className="tpd-split-yellow">
            <Eyebrow>{tt({ en: "Impact at a glance", "zh-hk": "成效概覽" }, lang)}</Eyebrow>
            <h2>{tt({ en: "Built for Hong Kong classrooms", "zh-hk": "為香港課堂而設" }, lang)}</h2>
          </div>
          <div className="tpd-split-navy">
            <div className="tpd-stats">
              {TPDc.stats.map((s, i) => (
                <StatBlock key={i} value={s.value} label={tt(s.label, lang)} onDark />
              ))}
            </div>
          </div>
        </section>

        <section className="tpd-section">
          <div className="tpd-section-head">
            <div>
              <Eyebrow>{tt(TPDc.ui.objectives, lang)}</Eyebrow>
              <h2>{tt({ en: "What you'll take away", "zh-hk": "你的收穫" }, lang)}</h2>
            </div>
          </div>
          <div className="tpd-stack">
            {TPDc.objectives.map((o, i) => (
              <InfoPanel key={i} variant="accent">{tt(o, lang)}</InfoPanel>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function DayOneScreen({ lang }) {
  return (
    <div className="tpd-shell tpd-shell-top">
      <section className="tpd-section">
        <div className="tpd-section-head">
          <div>
            <Eyebrow>{tt({ en: "26 August 2026 · Wednesday", "zh-hk": "2026年8月26日 · 星期三" }, lang)}</Eyebrow>
            <h2>{tt(TPDc.ui.schedule, lang)}</h2>
          </div>
          <Tag tone="programme">{tt({ en: "All schools", "zh-hk": "所有學校" }, lang)}</Tag>
        </div>
        <div className="tpd-stack">
          {TPDc.day1.map((s, i) => (
            <SessionRow key={i} time={s.time} duration={tt(s.duration, lang)} title={tt(s.title, lang)}
              speakers={tt(s.speakers, lang)} abstract={s.abstract ? tt(s.abstract, lang) : undefined}
              note={s.note ? tt(s.note, lang) : undefined} />
          ))}
        </div>
      </section>
    </div>
  );
}

function DayTwoScreen({ lang }) {
  return (
    <div className="tpd-shell tpd-shell-top">
      <section className="tpd-section">
        <div className="tpd-section-head">
          <div>
            <Eyebrow>{tt({ en: "27 August 2026 · Thursday", "zh-hk": "2026年8月27日 · 星期四" }, lang)}</Eyebrow>
            <h2>{tt(TPDc.ui.modules, lang)}</h2>
          </div>
          <Tag tone="schools">{tt(TPDc.ui.primaryOnly, lang)}</Tag>
        </div>
        <div className="tpd-grid-2">
          {TPDc.day2.map((m, i) => (
            <ModuleCard key={i} title={m.title} audience={tt(m.audience, lang)} period={tt(m.period, lang)}
              lessons={m.lessons} facilitators={tt(m.facilitators, lang)} abstract={tt({ en: "To be confirmed.", "zh-hk": "待確認。" }, lang)} />
          ))}
        </div>
      </section>
    </div>
  );
}

function DayThreeScreen({ lang }) {
  return (
    <div className="tpd-shell tpd-shell-top">
      <section className="tpd-section">
        <div className="tpd-section-head">
          <div>
            <Eyebrow>{tt({ en: "28 August 2026 · Friday", "zh-hk": "2026年8月28日 · 星期五" }, lang)}</Eyebrow>
            <h2>{tt(TPDc.ui.modules3, lang)}</h2>
          </div>
          <Tag tone="programme">{tt(TPDc.ui.allSchools, lang)}</Tag>
        </div>
        <div className="tpd-grid-2">
          {TPDc.day3.map((m, i) => (
            <ModuleCard key={i} title={m.title} audience={tt(m.audience, lang)} period={tt(m.period, lang)}
              lessons={m.lessons} facilitators={tt(m.facilitators, lang)} abstract={tt({ en: "To be confirmed.", "zh-hk": "待確認。" }, lang)} />
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoListScreen({ lang, heading, eyebrow, items }) {
  return (
    <div className="tpd-shell tpd-shell-top">
      <section className="tpd-section">
        <div className="tpd-section-head">
          <div>
            <Eyebrow>{tt(eyebrow, lang)}</Eyebrow>
            <h2>{tt(heading, lang)}</h2>
          </div>
        </div>
        <div className="tpd-stack">
          {items.map((it, i) => (
            <InfoPanel key={i} variant="plain" title={tt(it.title, lang)}>{tt(it.body, lang)}</InfoPanel>
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  const [lang, setLang] = React.useState("en");
  const [page, setPage] = React.useState("home");
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, [page]);

  let screen;
  if (page === "home") screen = <HomeScreen lang={lang} setPage={setPage} />;
  else if (page === "day-1") screen = <DayOneScreen lang={lang} />;
  else if (page === "day-2") screen = <DayTwoScreen lang={lang} />;
  else if (page === "day-3") screen = <DayThreeScreen lang={lang} />;
  else if (page === "resources")
    screen = <InfoListScreen lang={lang} eyebrow={{ en: "Materials & courses", "zh-hk": "教材及課程" }} heading={TPDc.ui.resourcesH} items={TPDc.resources} />;
  else
    screen = <InfoListScreen lang={lang} eyebrow={{ en: "Before you arrive", "zh-hk": "出席前須知" }} heading={TPDc.ui.logisticsH} items={TPDc.logistics} />;

  return (
    <div className="tpd-app" lang={lang === "zh-hk" ? "zh-Hant-HK" : "en"}>
      <Header lang={lang} setLang={setLang} page={page} setPage={setPage} />
      <main>{screen}</main>
      <Footer lang={lang} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
