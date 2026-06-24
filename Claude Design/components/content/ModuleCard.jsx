import React from "react";

/**
 * JC GoAI ModuleCard — a subject-module tile for the deep-dive days.
 * Shows the module title, an audience pill, period / lessons, facilitators
 * and an abstract on the soft blue-white surface.
 */
export function ModuleCard({ title, audience, period, lessons, facilitators, abstract, style, ...rest }) {
  const audienceTone = String(audience).toLowerCase().includes("second")
    ? { background: "var(--color-accent-blue)", color: "var(--color-white)" }
    : { background: "var(--color-accent-yellow)", color: "var(--color-primary)" };

  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        padding: 24,
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-card)",
        background: "var(--surface-card-soft)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <h3 style={{ fontSize: "1.25rem" }}>{title}</h3>
        {audience ? (
          <span
            style={{
              display: "inline-flex",
              padding: "4px 11px",
              borderRadius: "var(--radius-button)",
              font: "800 var(--text-tag)/1 var(--font-heading)",
              letterSpacing: "var(--tracking-tag)",
              textTransform: "uppercase",
              ...audienceTone,
            }}
          >
            {audience}
          </span>
        ) : null}
      </div>
      {(period || lessons) ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {period ? <Chip>{period}</Chip> : null}
          {lessons ? <Chip>{lessons}</Chip> : null}
        </div>
      ) : null}
      {facilitators ? (
        <p style={{ color: "var(--color-primary)", fontWeight: "var(--weight-semibold)", fontSize: "0.95rem" }}>{facilitators}</p>
      ) : null}
      {abstract ? <p style={{ color: "var(--text-muted)" }}>{abstract}</p> : null}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "4px 10px",
        borderRadius: "var(--radius-button)",
        background: "var(--color-bg-light)",
        color: "var(--color-primary)",
        font: "700 0.8rem/1 var(--font-body)",
      }}
    >
      {children}
    </span>
  );
}
