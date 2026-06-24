import React from "react";

/**
 * JC GoAI Button — pill-shaped call-to-action.
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
export function Button({
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
    sm: { minHeight: 38, padding: "8px 16px", fontSize: "0.85rem" },
    md: { minHeight: 44, padding: "10px 18px", fontSize: "1rem" },
    lg: { minHeight: 52, padding: "14px 26px", fontSize: "1.05rem" },
  };

  const variants = {
    /* Navy fill — primary CTA on light surfaces */
    solid: {
      background: "var(--color-primary)",
      color: "var(--color-white)",
      border: "2px solid transparent",
    },
    /* White fill — primary CTA on navy / hero surfaces */
    primary: {
      background: "var(--color-white)",
      color: "var(--color-primary)",
      border: "2px solid transparent",
    },
    /* Outline on navy */
    ghost: {
      background: "transparent",
      color: "var(--color-white)",
      border: "2px solid rgb(255 255 255 / 0.8)",
    },
    /* Outline on light */
    ghostDark: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--color-primary)",
    },
    /* Compact header CTA — navy fill, gold text, softer radius */
    header: {
      background: "var(--color-primary)",
      color: "var(--color-accent-gold)",
      border: "2px solid transparent",
    },
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
    ...style,
  };

  const arrow = showArrow ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : null;

  const hoverIn = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-1px)";
    e.currentTarget.style.filter = "brightness(0.97)";
  };
  const hoverOut = (e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.filter = "none";
  };

  const content = (
    <>
      {children}
      {arrow}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} style={base} onMouseEnter={hoverIn} onMouseLeave={hoverOut} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} style={base} onClick={onClick} disabled={disabled} onMouseEnter={hoverIn} onMouseLeave={hoverOut} {...rest}>
      {content}
    </button>
  );
}
