import React from "react";

/**
 * JC GoAI StatBlock — a large impact number with a caption. Used in the
 * signature yellow/navy split section. `onDark` flips to white text.
 */
export function StatBlock({ value, label, onDark = false, align = "start", style, ...rest }) {
  return (
    <div style={{ textAlign: align, display: "grid", gap: 6, ...style }} {...rest}>
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "var(--text-stat)",
          fontWeight: "var(--weight-black)",
          lineHeight: 1.05,
          color: onDark ? "var(--color-white)" : "var(--color-primary)",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: "var(--text-small)",
          fontWeight: "var(--weight-semibold)",
          color: onDark ? "rgb(255 255 255 / 0.82)" : "var(--text-muted)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
