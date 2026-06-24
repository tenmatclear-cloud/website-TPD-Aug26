import React from "react";

/**
 * JC GoAI Eyebrow — uppercase kicker label that sits above a heading.
 * `onDark` renders the gold-on-navy treatment with a hairline pill border.
 */
export function Eyebrow({ children, onDark = false, bordered = false, style, ...rest }) {
  return (
    <span
      style={{
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
        ...(bordered
          ? {
              padding: "6px 12px",
              borderRadius: "var(--radius-button)",
              border: onDark ? "1px solid rgb(255 255 255 / 0.35)" : "1px solid var(--color-border)",
            }
          : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
