/* TPD UI kit — Header & Footer chrome. Composes Logo + Button from the DS. */
const { Logo } = window.JCGoAIDesignSystem_019a01;
const T = window.TPD;
const tx = (obj, lang) => (obj ? obj[lang] ?? obj.en : "");

function Header({ lang, setLang, page, setPage }) {
  return (
    <header className="tpd-header">
      <div className="tpd-header-inner">
        <a className="tpd-brand" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
          <Logo variant="mark" height={30} src="../../assets/goai-mark.png" alt="JC GoAI" />
          <span className="tpd-brand-text">
            <strong>JC GoAI</strong>
            <em>{tx(T.workshop.title, lang)}</em>
          </span>
        </a>

        <nav className="tpd-nav" aria-label="Main navigation">
          {T.nav.map((item) => (
            <a
              key={item.id}
              href="#"
              aria-current={page === item.id ? "page" : undefined}
              className={page === item.id ? "is-current" : ""}
              onClick={(e) => { e.preventDefault(); setPage(item.id); }}
            >
              {tx(item.label, lang)}
            </a>
          ))}
        </nav>

        <div className="tpd-header-actions">
          <div className="tpd-lang" role="group" aria-label="Language">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "zh-hk" ? "on" : ""} onClick={() => setLang("zh-hk")}>繁</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer({ lang }) {
  return (
    <footer className="tpd-footer">
      <div className="tpd-footer-inner">
        <Logo variant="full" height={66} src="../../assets/goai-logo.png" alt="JC GoAI" />
        <p className="tpd-footer-note">{tx(T.workshop.statusNote, lang)}</p>
        <p className="tpd-footer-meta">
          {tx(T.workshop.title, lang)} · {tx(T.workshop.dateRange, lang)} · {tx(T.workshop.venue, lang)}
        </p>
      </div>
      <div className="tpd-footer-bar" aria-hidden="true"></div>
    </footer>
  );
}

Object.assign(window, { Header, Footer, tpdTx: tx });
