import React from "react";

/**
 * JC GoAI Tag — small uppercase pill used for categories, audiences,
 * and article labels. Colour is semantic (programme / teachers / schools).
 */
export function Tag({ children, tone = "schools", size = "md", style, ...rest }) {
  const tones = {
    programme: { background: "var(--color-accent-orange)", color: "var(--color-white)" },
    teachers: { background: "var(--color-accent-green)", color: "var(--color-white)" },
    schools: { background: "var(--color-accent-yellow)", color: "var(--color-primary)" },
    navy: { background: "var(--color-primary)", color: "var(--color-white)" },
    soft: { background: "var(--color-bg-light)", color: "var(--color-primary)" },
    outline: { background: "transparent", color: "var(--color-primary)", boxShadow: "inset 0 0 0 1.5px var(--color-border)" },
  };

  const sizes = {
    sm: { padding: "3px 9px", fontSize: "0.7rem" },
    md: { padding: "5px 11px", fontSize: "var(--text-tag)" },
  };

  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
