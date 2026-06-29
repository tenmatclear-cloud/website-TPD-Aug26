/* @ds-bundle: {"format":3,"namespace":"JCGoAIDesignSystem_019a01","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"InfoPanel","sourcePath":"components/content/InfoPanel.jsx"},{"name":"ModuleCard","sourcePath":"components/content/ModuleCard.jsx"},{"name":"SessionRow","sourcePath":"components/content/SessionRow.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"chrome.jsx":"171eb4c62885","components/content/Card.jsx":"584f04903016","components/content/InfoPanel.jsx":"f45c3a1afe98","components/content/ModuleCard.jsx":"77f999de6e93","components/content/SessionRow.jsx":"fa430dbcf256","components/content/StatBlock.jsx":"5da323008740","components/core/Button.jsx":"37b7ee5cdd97","components/core/Eyebrow.jsx":"84baf345e070","components/core/Logo.jsx":"4d80647ce874","components/core/Tag.jsx":"7a3aa1ae57e8","ui_kits/tpd-website/app.jsx":"a04b6a99a8a7","ui_kits/tpd-website/chrome.jsx":"134145c48204","ui_kits/tpd-website/data.js":"f80c3f44e1e8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JCGoAIDesignSystem_019a01 = window.JCGoAIDesignSystem_019a01 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// chrome.jsx
try { (() => {
/* TPD UI kit — Header & Footer chrome. Composes Logo + Button from the DS. */
const {
  Logo,
  Button
} = window.JCGoAIDesignSystem_019a01;
const T = window.TPD;
const tx = (obj, lang) => obj ? obj[lang] ?? obj.en : "";
function Header({
  lang,
  setLang,
  page,
  setPage
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "tpd-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-header-inner",
    "data-comment-anchor": "be837db9d8-div-9-7"
  }, /*#__PURE__*/React.createElement("a", {
    className: "tpd-brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage("home");
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 30,
    src: "../../assets/goai-mark.png",
    alt: "JC GoAI"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tpd-brand-text"
  }, /*#__PURE__*/React.createElement("strong", null, "JC GoAI"), /*#__PURE__*/React.createElement("em", null, tx(T.workshop.title, lang)))), /*#__PURE__*/React.createElement("nav", {
    className: "tpd-nav",
    "aria-label": "Main navigation"
  }, T.nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.id,
    href: "#",
    "aria-current": page === item.id ? "page" : undefined,
    className: page === item.id ? "is-current" : "",
    onClick: e => {
      e.preventDefault();
      setPage(item.id);
    }
  }, tx(item.label, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-header-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-lang",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "on" : "",
    onClick: () => setLang("en")
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    className: lang === "zh-hk" ? "on" : "",
    onClick: () => setLang("zh-hk")
  }, "\u7E41")), /*#__PURE__*/React.createElement(Button, {
    variant: "header"
  }, tx(T.ui.register, lang)))));
}
function Footer({
  lang
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "tpd-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-footer-inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    height: 66,
    src: "../../assets/goai-logo.png",
    alt: "JC GoAI"
  }), /*#__PURE__*/React.createElement("p", {
    className: "tpd-footer-note"
  }, tx(T.workshop.statusNote, lang)), /*#__PURE__*/React.createElement("p", {
    className: "tpd-footer-meta"
  }, tx(T.workshop.title, lang), " \xB7 ", tx(T.workshop.dateRange, lang), " \xB7 ", tx(T.workshop.venue, lang))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-footer-bar",
    "aria-hidden": "true"
  }));
}
Object.assign(window, {
  Header,
  Footer,
  tpdTx: tx
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "chrome.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI feature Card — white panel with a coloured left accent bar,
 * optional 4:3 image, meta pill, title and description.
 */
function Card({
  title,
  description,
  accent = "programme",
  meta,
  image,
  imageAlt = "",
  href,
  children,
  style,
  ...rest
}) {
  const accents = {
    programme: "var(--color-accent-orange)",
    teachers: "var(--color-accent-green)",
    schools: "var(--color-accent-yellow)",
    blue: "var(--color-accent-blue)"
  };
  const accentColor = accents[accent] || accent;
  const Tag = href ? "a" : "div";
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      display: "block",
      minHeight: "100%",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-card)",
      background: "var(--surface-card)",
      transition: "transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      transform: hover && href ? "translateY(-3px)" : "none",
      boxShadow: hover && href ? "var(--shadow-card-hover)" : "none",
      cursor: href ? "pointer" : "default",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      insetBlock: 0,
      insetInlineStart: 0,
      width: "var(--border-width-accent)",
      background: accentColor
    }
  }), image ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      overflow: "hidden",
      marginInlineStart: "var(--border-width-accent)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-card-pad)",
      paddingInlineStart: "calc(var(--space-card-pad) + var(--border-width-accent))"
    }
  }, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginBottom: 14,
      padding: "5px 10px",
      borderRadius: "var(--radius-button)",
      background: "var(--color-bg-light)",
      color: "var(--color-primary)",
      font: "800 0.82rem/1 var(--font-heading)"
    }
  }, meta) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: description ? 10 : 0
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, description) : null, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/InfoPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI InfoPanel — a titled block of supporting copy (objectives,
 * resources, logistics). `accent` adds the green left-border treatment;
 * `plain` is a hairline-bordered soft card.
 */
function InfoPanel({
  title,
  children,
  variant = "plain",
  accent = "teachers",
  style,
  ...rest
}) {
  const accents = {
    teachers: "var(--color-accent-green)",
    programme: "var(--color-accent-orange)",
    schools: "var(--color-accent-yellow)",
    blue: "var(--color-accent-blue)"
  };
  const accentColor = accents[accent] || accent;
  const variants = {
    accent: {
      padding: "18px 20px",
      borderInlineStart: `6px solid ${accentColor}`,
      borderRadius: "var(--radius-sm)",
      background: "#f8fbff"
    },
    plain: {
      padding: 22,
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card-soft)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...variants[variant],
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.1rem",
      marginBottom: children ? 8 : 0
    }
  }, title) : null, typeof children === "string" ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, children) : children);
}
Object.assign(__ds_scope, { InfoPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InfoPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/ModuleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI ModuleCard — a subject-module tile for the deep-dive days.
 * Shows the module title, an audience pill, period / lessons, facilitators
 * and an abstract on the soft blue-white surface.
 */
function ModuleCard({
  title,
  audience,
  period,
  lessons,
  facilitators,
  abstract,
  style,
  ...rest
}) {
  const audienceTone = String(audience).toLowerCase().includes("second") ? {
    background: "var(--color-accent-blue)",
    color: "var(--color-white)"
  } : {
    background: "var(--color-accent-yellow)",
    color: "var(--color-primary)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: 12,
      padding: 24,
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-card)",
      background: "var(--surface-card-soft)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.25rem"
    }
  }, title), audience ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "4px 11px",
      borderRadius: "var(--radius-button)",
      font: "800 var(--text-tag)/1 var(--font-heading)",
      letterSpacing: "var(--tracking-tag)",
      textTransform: "uppercase",
      ...audienceTone
    }
  }, audience) : null), period || lessons ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, period ? /*#__PURE__*/React.createElement(Chip, null, period) : null, lessons ? /*#__PURE__*/React.createElement(Chip, null, lessons) : null) : null, facilitators ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-primary)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "0.95rem"
    }
  }, facilitators) : null, abstract ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, abstract) : null);
}
function Chip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "4px 10px",
      borderRadius: "var(--radius-button)",
      background: "var(--color-bg-light)",
      color: "var(--color-primary)",
      font: "700 0.8rem/1 var(--font-body)"
    }
  }, children);
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SessionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI SessionRow — a programme timeline entry. Left column holds the
 * time + duration; right column the title, speakers, abstract and an
 * optional note pill.
 */
function SessionRow({
  time,
  duration,
  title,
  speakers,
  abstract,
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "170px 1fr",
      gap: 20,
      padding: 22,
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-primary)",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--weight-black)"
    }
  }, time, duration ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 2,
      color: "var(--text-muted)",
      fontSize: "0.85rem",
      fontWeight: "var(--weight-bold)"
    }
  }, duration) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.18rem"
    }
  }, title), speakers ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      color: "var(--color-primary)",
      fontWeight: "var(--weight-semibold)"
    }
  }, speakers) : null, abstract ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      color: "var(--text-muted)"
    }
  }, abstract) : null, note ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginTop: 12,
      padding: "5px 11px",
      borderRadius: "var(--radius-button)",
      background: "var(--color-bg-light)",
      color: "var(--color-primary)",
      font: "700 0.8rem/1.2 var(--font-body)"
    }
  }, note) : null));
}
Object.assign(__ds_scope, { SessionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SessionRow.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI StatBlock — a large impact number with a caption. Used in the
 * signature yellow/navy split section. `onDark` flips to white text.
 */
function StatBlock({
  value,
  label,
  onDark = false,
  align = "start",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      display: "grid",
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-stat)",
      fontWeight: "var(--weight-black)",
      lineHeight: 1.05,
      color: onDark ? "var(--color-white)" : "var(--color-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      fontWeight: "var(--weight-semibold)",
      color: onDark ? "rgb(255 255 255 / 0.82)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI Button — pill-shaped call-to-action.
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
function Button({
  children,
  variant = "solid",
  size = "md",
  showArrow = false,
  href,
  onClick,
  disabled = false,
  type = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      minHeight: 38,
      padding: "8px 16px",
      fontSize: "0.85rem"
    },
    md: {
      minHeight: 44,
      padding: "10px 18px",
      fontSize: "1rem"
    },
    lg: {
      minHeight: 52,
      padding: "14px 26px",
      fontSize: "1.05rem"
    }
  };
  const variants = {
    /* Navy fill — primary CTA on light surfaces */
    solid: {
      background: "var(--color-primary)",
      color: "var(--color-white)",
      border: "2px solid transparent"
    },
    /* White fill — primary CTA on navy / hero surfaces */
    primary: {
      background: "var(--color-white)",
      color: "var(--color-primary)",
      border: "2px solid transparent"
    },
    /* Outline on navy */
    ghost: {
      background: "transparent",
      color: "var(--color-white)",
      border: "2px solid rgb(255 255 255 / 0.8)"
    },
    /* Outline on light */
    ghostDark: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--color-primary)"
    },
    /* Compact header CTA — navy fill, gold text, softer radius */
    header: {
      background: "var(--color-primary)",
      color: "var(--color-accent-gold)",
      border: "2px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-heading)",
    fontWeight: "var(--weight-extrabold)",
    borderRadius: variant === "header" ? "20px" : "var(--radius-button)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform var(--duration-fast) var(--ease-standard), filter var(--duration-fast) var(--ease-standard)",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const arrow = showArrow ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h9M8.5 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null;
  const hoverIn = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-1px)";
    e.currentTarget.style.filter = "brightness(0.97)";
  };
  const hoverOut = e => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.filter = "none";
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onMouseEnter: hoverIn,
      onMouseLeave: hoverOut
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI Eyebrow — uppercase kicker label that sits above a heading.
 * `onDark` renders the gold-on-navy treatment with a hairline pill border.
 */
function Eyebrow({
  children,
  onDark = false,
  bordered = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      width: "fit-content",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--color-accent-gold)" : "var(--color-primary)",
      ...(bordered ? {
        padding: "6px 12px",
        borderRadius: "var(--radius-button)",
        border: onDark ? "1px solid rgb(255 255 255 / 0.35)" : "1px solid var(--color-border)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI Logo — the GOAI wordmark. `variant="full"` is the bilingual
 * lockup (GOAI + JC GoAI · 賽馬會人工智能教育); `variant="mark"` is the
 * GOAI symbol only, for compact headers.
 *
 * NOTE: image `src` resolves relative to the HOST HTML document, so pass the
 * correct relative path from wherever you mount this (default assumes the
 * page sits at the project root next to /assets).
 */
function Logo({
  variant = "full",
  reversed = false,
  height,
  src,
  alt = "JC GoAI",
  style,
  ...rest
}) {
  const file = variant === "mark" ? reversed ? "assets/goai-mark-white.png" : "assets/goai-mark.png" : reversed ? "assets/goai-logo-white.png" : "assets/goai-logo.png";
  const h = height ?? (variant === "mark" ? 34 : 56);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src ?? file,
    alt: alt,
    style: {
      height: h,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JC GoAI Tag — small uppercase pill used for categories, audiences,
 * and article labels. Colour is semantic (programme / teachers / schools).
 */
function Tag({
  children,
  tone = "schools",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    programme: {
      background: "var(--color-accent-orange)",
      color: "var(--color-white)"
    },
    teachers: {
      background: "var(--color-accent-green)",
      color: "var(--color-white)"
    },
    schools: {
      background: "var(--color-accent-yellow)",
      color: "var(--color-primary)"
    },
    navy: {
      background: "var(--color-primary)",
      color: "var(--color-white)"
    },
    soft: {
      background: "var(--color-bg-light)",
      color: "var(--color-primary)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-primary)",
      boxShadow: "inset 0 0 0 1.5px var(--color-border)"
    }
  };
  const sizes = {
    sm: {
      padding: "3px 9px",
      fontSize: "0.7rem"
    },
    md: {
      padding: "5px 11px",
      fontSize: "var(--text-tag)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      width: "fit-content",
      borderRadius: "var(--radius-button)",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "var(--tracking-tag)",
      textTransform: "uppercase",
      lineHeight: 1,
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tpd-website/app.jsx
try { (() => {
/* TPD UI kit — screens + app shell. Composes the DS content components. */
const {
  Button,
  Tag,
  Eyebrow,
  Card,
  StatBlock,
  SessionRow,
  ModuleCard,
  InfoPanel
} = window.JCGoAIDesignSystem_019a01;
const TPDc = window.TPD;
const tt = window.tpdTx;
function Hero({
  lang,
  setPage
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "tpd-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-hero-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true,
    bordered: true
  }, tt(TPDc.workshop.project, lang)), /*#__PURE__*/React.createElement("h1", {
    className: "tpd-hero-title"
  }, tt(TPDc.workshop.title, lang)), /*#__PURE__*/React.createElement("p", {
    className: "tpd-hero-lead"
  }, tt(TPDc.workshop.heroIntro, lang)), /*#__PURE__*/React.createElement("div", {
    className: "tpd-hero-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    showArrow: true,
    onClick: () => setPage("day-1")
  }, tt(TPDc.ui.viewProgramme, lang)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setPage("logistics")
  }, tt(TPDc.ui.logistics, lang)))), /*#__PURE__*/React.createElement("aside", {
    className: "tpd-hero-panel",
    "aria-label": "Workshop summary"
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tt(TPDc.ui.date, lang)), /*#__PURE__*/React.createElement("dd", null, tt(TPDc.workshop.dateRange, lang))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tt(TPDc.ui.venue, lang)), /*#__PURE__*/React.createElement("dd", null, tt(TPDc.workshop.venue, lang))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, tt(TPDc.ui.status, lang)), /*#__PURE__*/React.createElement("dd", {
    className: "muted"
  }, tt(TPDc.workshop.statusNote, lang)))))));
}
function HomeScreen({
  lang,
  setPage
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    lang: lang,
    setPage: setPage
  }), /*#__PURE__*/React.createElement("div", {
    className: "tpd-shell"
  }, /*#__PURE__*/React.createElement("section", {
    className: "tpd-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, tt({
    en: "What to expect",
    "zh-hk": "活動內容"
  }, lang)), /*#__PURE__*/React.createElement("h2", null, tt({
    en: "Three days, one community",
    "zh-hk": "三日，一個社群"
  }, lang))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostDark",
    showArrow: true,
    onClick: () => setPage("day-1")
  }, tt(TPDc.ui.viewProgramme, lang))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-grid-3"
  }, TPDc.features.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    accent: f.accent,
    meta: tt(f.meta, lang),
    title: tt(f.title, lang),
    description: tt(f.desc, lang),
    href: "#"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "tpd-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-split-yellow"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, tt({
    en: "Impact at a glance",
    "zh-hk": "成效概覽"
  }, lang)), /*#__PURE__*/React.createElement("h2", null, tt({
    en: "Built for Hong Kong classrooms",
    "zh-hk": "為香港課堂而設"
  }, lang))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-split-navy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-stats"
  }, TPDc.stats.map((s, i) => /*#__PURE__*/React.createElement(StatBlock, {
    key: i,
    value: s.value,
    label: tt(s.label, lang),
    onDark: true
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "tpd-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, tt(TPDc.ui.objectives, lang)), /*#__PURE__*/React.createElement("h2", null, tt({
    en: "What you'll take away",
    "zh-hk": "你的收穫"
  }, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-stack"
  }, TPDc.objectives.map((o, i) => /*#__PURE__*/React.createElement(InfoPanel, {
    key: i,
    variant: "accent"
  }, tt(o, lang)))))));
}
function DayOneScreen({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tpd-shell tpd-shell-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "tpd-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, tt({
    en: "26 August 2026 · Wednesday",
    "zh-hk": "2026年8月26日 · 星期三"
  }, lang)), /*#__PURE__*/React.createElement("h2", null, tt(TPDc.ui.schedule, lang))), /*#__PURE__*/React.createElement(Tag, {
    tone: "programme"
  }, tt({
    en: "All schools",
    "zh-hk": "所有學校"
  }, lang))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-stack"
  }, TPDc.day1.map((s, i) => /*#__PURE__*/React.createElement(SessionRow, {
    key: i,
    time: s.time,
    duration: tt(s.duration, lang),
    title: tt(s.title, lang),
    speakers: tt(s.speakers, lang),
    abstract: s.abstract ? tt(s.abstract, lang) : undefined,
    note: s.note ? tt(s.note, lang) : undefined
  })))));
}
function DayTwoScreen({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tpd-shell tpd-shell-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "tpd-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, tt({
    en: "27 August 2026 · Thursday",
    "zh-hk": "2026年8月27日 · 星期四"
  }, lang)), /*#__PURE__*/React.createElement("h2", null, tt(TPDc.ui.modules, lang))), /*#__PURE__*/React.createElement(Tag, {
    tone: "schools"
  }, tt(TPDc.ui.primaryOnly, lang))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-grid-2"
  }, TPDc.day2.map((m, i) => /*#__PURE__*/React.createElement(ModuleCard, {
    key: i,
    title: m.title,
    audience: tt(m.audience, lang),
    period: tt(m.period, lang),
    lessons: m.lessons,
    facilitators: tt(m.facilitators, lang),
    abstract: tt({
      en: "To be confirmed.",
      "zh-hk": "待確認。"
    }, lang)
  })))));
}
function DayThreeScreen({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tpd-shell tpd-shell-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "tpd-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, tt({
    en: "28 August 2026 · Friday",
    "zh-hk": "2026年8月28日 · 星期五"
  }, lang)), /*#__PURE__*/React.createElement("h2", null, tt(TPDc.ui.modules3, lang))), /*#__PURE__*/React.createElement(Tag, {
    tone: "programme"
  }, tt(TPDc.ui.allSchools, lang))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-grid-2"
  }, TPDc.day3.map((m, i) => /*#__PURE__*/React.createElement(ModuleCard, {
    key: i,
    title: m.title,
    audience: tt(m.audience, lang),
    period: tt(m.period, lang),
    lessons: m.lessons,
    facilitators: tt(m.facilitators, lang),
    abstract: tt({
      en: "To be confirmed.",
      "zh-hk": "待確認。"
    }, lang)
  })))));
}
function InfoListScreen({
  lang,
  heading,
  eyebrow,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tpd-shell tpd-shell-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "tpd-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, tt(eyebrow, lang)), /*#__PURE__*/React.createElement("h2", null, tt(heading, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-stack"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(InfoPanel, {
    key: i,
    variant: "plain",
    title: tt(it.title, lang)
  }, tt(it.body, lang))))));
}
function App() {
  const [lang, setLang] = React.useState("en");
  const [page, setPage] = React.useState("home");
  React.useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [page]);
  let screen;
  if (page === "home") screen = /*#__PURE__*/React.createElement(HomeScreen, {
    lang: lang,
    setPage: setPage
  });else if (page === "day-1") screen = /*#__PURE__*/React.createElement(DayOneScreen, {
    lang: lang
  });else if (page === "day-2") screen = /*#__PURE__*/React.createElement(DayTwoScreen, {
    lang: lang
  });else if (page === "day-3") screen = /*#__PURE__*/React.createElement(DayThreeScreen, {
    lang: lang
  });else if (page === "resources") screen = /*#__PURE__*/React.createElement(InfoListScreen, {
    lang: lang,
    eyebrow: {
      en: "Materials & courses",
      "zh-hk": "教材及課程"
    },
    heading: TPDc.ui.resourcesH,
    items: TPDc.resources
  });else screen = /*#__PURE__*/React.createElement(InfoListScreen, {
    lang: lang,
    eyebrow: {
      en: "Before you arrive",
      "zh-hk": "出席前須知"
    },
    heading: TPDc.ui.logisticsH,
    items: TPDc.logistics
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "tpd-app",
    lang: lang === "zh-hk" ? "zh-Hant-HK" : "en"
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang,
    page: page,
    setPage: setPage
  }), /*#__PURE__*/React.createElement("main", null, screen), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tpd-website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tpd-website/chrome.jsx
try { (() => {
/* TPD UI kit — Header & Footer chrome. Composes Logo + Button from the DS. */
const {
  Logo
} = window.JCGoAIDesignSystem_019a01;
const T = window.TPD;
const tx = (obj, lang) => obj ? obj[lang] ?? obj.en : "";
function Header({
  lang,
  setLang,
  page,
  setPage
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "tpd-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "tpd-brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage("home");
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 30,
    src: "../../assets/goai-mark.png",
    alt: "JC GoAI"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tpd-brand-text"
  }, /*#__PURE__*/React.createElement("strong", null, "JC GoAI"), /*#__PURE__*/React.createElement("em", null, tx(T.workshop.title, lang)))), /*#__PURE__*/React.createElement("nav", {
    className: "tpd-nav",
    "aria-label": "Main navigation"
  }, T.nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.id,
    href: "#",
    "aria-current": page === item.id ? "page" : undefined,
    className: page === item.id ? "is-current" : "",
    onClick: e => {
      e.preventDefault();
      setPage(item.id);
    }
  }, tx(item.label, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-header-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-lang",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "on" : "",
    onClick: () => setLang("en")
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    className: lang === "zh-hk" ? "on" : "",
    onClick: () => setLang("zh-hk")
  }, "\u7E41")))));
}
function Footer({
  lang
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "tpd-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpd-footer-inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    height: 66,
    src: "../../assets/goai-logo.png",
    alt: "JC GoAI"
  }), /*#__PURE__*/React.createElement("p", {
    className: "tpd-footer-note"
  }, tx(T.workshop.statusNote, lang)), /*#__PURE__*/React.createElement("p", {
    className: "tpd-footer-meta"
  }, tx(T.workshop.title, lang), " \xB7 ", tx(T.workshop.dateRange, lang), " \xB7 ", tx(T.workshop.venue, lang))), /*#__PURE__*/React.createElement("div", {
    className: "tpd-footer-bar",
    "aria-hidden": "true"
  }));
}
Object.assign(window, {
  Header,
  Footer,
  tpdTx: tx
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tpd-website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tpd-website/data.js
try { (() => {
/* TPD workshop content — a curated bilingual subset of the real programme data
   (from website-TPD-Aug26/src/content/programme.ts) for the UI-kit recreation. */
window.TPD = function () {
  const L = (en, zh) => ({
    en,
    "zh-hk": zh
  });
  const workshop = {
    project: L("JC GoAI Project", "賽馬會人工智能教育計劃"),
    title: L("Teacher Professional Development Workshop", "教師專業發展工作坊"),
    dateRange: L("26–28 August 2026", "2026年8月26日至28日"),
    venue: L("The Chinese University of Hong Kong", "香港中文大學"),
    heroIntro: L("A three-day guide for participating principals and teachers to explore AI learning and teaching resources, pedagogy, implementation cases, and subject-specific modules.", "為參與校長及教師而設的三日導覽，涵蓋人工智能學與教資源、教學法、實踐案例及不同科目的專題模組。"),
    statusNote: L("Programme details are based on the August 2026 draft and will be updated as sessions are confirmed.", "活動資料根據2026年8月草擬日程整理，已確認後會持續更新。")
  };
  const nav = [{
    id: "home",
    label: L("Home", "首頁")
  }, {
    id: "day-1",
    label: L("Day 1", "第一日")
  }, {
    id: "day-2",
    label: L("Day 2", "第二日")
  }, {
    id: "day-3",
    label: L("Day 3", "第三日")
  }, {
    id: "resources",
    label: L("Resources", "資源")
  }, {
    id: "logistics",
    label: L("Logistics", "活動須知")
  }];
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
    status: L("Draft", "草擬")
  };
  const features = [{
    accent: "programme",
    meta: L("Our Programme", "計劃內容"),
    title: L("Three-day guide", "三日導覽"),
    desc: L("Framework, pedagogy, international and local perspectives, and authentic implementation cases.", "涵蓋框架、教學法、國際及本地觀點，以及真實實踐案例。")
  }, {
    accent: "teachers",
    meta: L("Teacher Co-creation", "教師共創"),
    title: L("Peer coaching", "同儕教練"),
    desc: L("Collaborative lesson design with local trainers and MIT facilitators across subjects.", "與本地培訓導師及麻省理工促進者跨科協作設計課節。")
  }, {
    accent: "schools",
    meta: L("Our Schools", "參與學校"),
    title: L("Pilot evidence", "試點實證"),
    desc: L("Authentic classroom impact shared by pilot schools, their teachers and students.", "由試點學校、教師及學生分享真實課堂成效。")
  }];
  const stats = [{
    value: "3",
    label: L("Workshop days", "工作坊日數")
  }, {
    value: "20+",
    label: L("Subject modules", "學科模組")
  }, {
    value: "P4–S3",
    label: L("Year levels", "適用年級")
  }, {
    value: "EN · 繁",
    label: L("Bilingual delivery", "雙語進行")
  }];
  const objectives = [L("Develop a deeper understanding of JC GoAI AI learning and teaching resources and the design principles behind them.", "深入了解賽馬會人工智能教育計劃的人工智能學與教資源及其設計原則。"), L("Gain confidence, strategies, and practical skills for implementing the AI curriculum effectively.", "建立有效推行人工智能課程所需的信心、策略及實務技巧。"), L("Collaborate with international and local experts, teachers, and peers through demonstrations, hands-on activities, and focused discussions.", "透過教學示範、實作活動及專題討論，與國際及本地專家、教師和同儕交流協作。")];
  const day1 = [{
    time: "9:15am–9:25am",
    duration: L("10 mins", "10分鐘"),
    title: L("Welcoming and JC GoAI Overview", "歡迎辭及計劃概覽"),
    speakers: L("Ir. Daniel Lai, BBS, JP — Programme Director", "賽馬會人工智能教育計劃總監黎達強工程師, BBS, JP"),
    note: L("AM session conducted in English.", "上午環節以英語進行。")
  }, {
    time: "9:40am–10:05am",
    duration: L("25 mins", "25分鐘"),
    title: L("AI Framework and L&T Resources Design Principles", "人工智能框架及學與教資源設計原則"),
    speakers: L("Prof. Helen Meng", "蒙美玲教授")
  }, {
    time: "10:05am–10:50am",
    duration: L("45 mins", "45分鐘"),
    title: L("Latest Trends in Educational AI Applications", "教育人工智能應用的最新趨勢"),
    speakers: L("Prof. Cynthia Breazeal", "Cynthia Breazeal教授"),
    abstract: L("AI literacy and fluency, and how AI can transform learning and teaching.", "人工智能素養與流暢度，以及人工智能如何轉化學與教。")
  }, {
    time: "11:25am–12:30pm",
    duration: L("65 mins", "65分鐘"),
    title: L("The Great AI Exchange: International Perspectives for Local Success", "人工智能教育交流：以國際視野促進本地實踐"),
    speakers: L("Dr. Salazar Gomez, Dr. Eric Klopfer, Prof. C S Chai — moderated panel", "Salazar Gomez博士、Eric Klopfer博士、謝錫金教授 — 專題討論"),
    abstract: L("Bridges global research with Hong Kong implementation realities.", "連結全球研究與香港推行人工智能教育的實際情況。")
  }, {
    time: "2:00pm–2:40pm",
    duration: L("40 mins", "40分鐘"),
    title: L("Overview of Learning Modules", "學習模組概覽"),
    speakers: L("Related teacher trainers", "相關教師培訓導師"),
    note: L("PM session conducted in Cantonese.", "下午環節以廣東話進行。")
  }, {
    time: "3:40pm–4:20pm",
    duration: L("40 mins", "40分鐘"),
    title: L("The Power of Peer Coaching", "同儕教練的力量"),
    speakers: L("Peer facilitators and the teachers they supported", "同儕促進者及獲支援的參與教師")
  }];
  const day2 = [{
    title: "TechEd P4",
    audience: L("Primary", "小學"),
    period: L("AM or PM session", "上午或下午環節"),
    lessons: "Lessons 1–6",
    facilitators: L("HK trainers", "香港培訓導師")
  }, {
    title: "TechEd P5",
    audience: L("Primary", "小學"),
    period: L("AM or PM session", "上午或下午環節"),
    lessons: "Lessons 1–6",
    facilitators: L("MIT Sharifa / Philip + HK trainers", "MIT Sharifa / Philip及香港培訓導師")
  }, {
    title: "Humanities P4",
    audience: L("Primary", "小學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("MIT Allison + HK trainers", "MIT Allison及香港培訓導師")
  }, {
    title: "Science P4",
    audience: L("Primary", "小學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("MIT Sarah + HK trainers", "MIT Sarah及香港培訓導師")
  }, {
    title: "Chinese P5",
    audience: L("Primary", "小學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("Prof. Poon + HK trainers", "潘教授及香港培訓導師")
  }, {
    title: "Math P5",
    audience: L("Primary", "小學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("MIT Robert + HK trainers", "MIT Robert及香港培訓導師")
  }];
  const day3 = [{
    title: "TechEd P6",
    audience: L("Primary", "小學"),
    period: L("AM or PM session", "上午或下午環節"),
    lessons: "Lessons 7–12",
    facilitators: L("MIT Selim / Andres + HK trainers", "MIT Selim / Andres及香港培訓導師")
  }, {
    title: "Chinese S1",
    audience: L("Secondary", "中學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("Prof. Poon + HK trainers", "潘教授及香港培訓導師")
  }, {
    title: "Citizenship, Economics & Society S1",
    audience: L("Secondary", "中學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("HK trainers", "香港培訓導師")
  }, {
    title: "Science S2",
    audience: L("Secondary", "中學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("MIT Sarah + HK trainers", "MIT Sarah及香港培訓導師")
  }, {
    title: "English S3",
    audience: L("Secondary", "中學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("MIT John + HK trainers", "MIT John及香港培訓導師")
  }, {
    title: "Visual Arts S3 + Project",
    audience: L("Secondary", "中學"),
    period: L("AM or PM session", "上午或下午環節"),
    facilitators: L("MIT Allison / Cynthia + HK trainers", "MIT Allison / Cynthia及香港培訓導師")
  }];
  const resources = [{
    title: L("Teaching and Learning Resources", "學與教資源"),
    body: L("Resources will be uploaded as they become available. Use your registered school email for access when links are shared.", "資源會在備妥後陸續上載。連結發放後，請使用已登記的學校電郵登入。")
  }, {
    title: L("Teacher Self-paced Online Courses", "教師自學網上課程"),
    body: L("Refer to the access instructions and password sent by the project team before the workshop.", "請參閱計劃團隊於工作坊前發出的登入指引及課程密碼。")
  }, {
    title: L("Important Resource Note", "資源使用重要提示"),
    body: L("Draft resources are for professional development only and should not be published outside eligible participating schools.", "草擬資源只供專業發展用途，不應向合資格參與學校以外人士發布或分發。")
  }];
  const logistics = [{
    title: L("Bring Your Own Device", "請自備電子裝置"),
    body: L("The workshop is interactive and most materials are shared online. Bring a laptop or tablet, charger, and power bank.", "工作坊重視互動，大部分材料將於網上分享。建議攜帶手提電腦或平板、充電器及外置充電器。")
  }, {
    title: L("Check-in and Certificates", "登記及出席證書"),
    body: L("Participants should check in each day. Certificate arrangements and locations will be confirmed closer to the workshop.", "參加者須每日登記。證書安排及登記地點將於工作坊前確認。")
  }, {
    title: L("Transport", "交通"),
    body: L("Public transport is recommended as campus parking is limited. Venue and access details will be shared before the event.", "由於校園泊車位有限，建議乘搭公共交通工具。場地及進入安排將於活動前公布。")
  }, {
    title: L("Enquiry", "查詢"),
    body: L("Primary: Ms. Vanessa Kiu, vanessakiu@cuhk.edu.hk. Secondary: Ms. Didy Wan, didywan@cuhk.edu.hk.", "小學查詢：Ms. Vanessa Kiu，vanessakiu@cuhk.edu.hk。中學查詢：Ms. Didy Wan，didywan@cuhk.edu.hk。")
  }];
  return {
    workshop,
    nav,
    ui,
    features,
    stats,
    objectives,
    day1,
    day2,
    day3,
    resources,
    logistics
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tpd-website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.InfoPanel = __ds_scope.InfoPanel;

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.SessionRow = __ds_scope.SessionRow;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

})();
