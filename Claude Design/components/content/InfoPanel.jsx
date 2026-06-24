import React from "react";

/**
 * JC GoAI InfoPanel — a titled block of supporting copy (objectives,
 * resources, logistics). `accent` adds the green left-border treatment;
 * `plain` is a hairline-bordered soft card.
 */
export function InfoPanel({ title, children, variant = "plain", accent = "teachers", style, ...rest }) {
  const accents = {
    teachers: "var(--color-accent-green)",
    programme: "var(--color-accent-orange)",
    schools: "var(--color-accent-yellow)",
    blue: "var(--color-accent-blue)",
  };
  const accentColor = accents[accent] || accent;

  const variants = {
    accent: {
      padding: "18px 20px",
      borderInlineStart: `6px solid ${accentColor}`,
      borderRadius: "var(--radius-sm)",
      background: "#f8fbff",
    },
    plain: {
      padding: 22,
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card-soft)",
    },
  };

  return (
    <div style={{ ...variants[variant], ...style }} {...rest}>
      {title ? (
        <h3 style={{ fontSize: "1.1rem", marginBottom: children ? 8 : 0 }}>{title}</h3>
      ) : null}
      {typeof children === "string" ? <p style={{ color: "var(--text-muted)" }}>{children}</p> : children}
    </div>
  );
}
