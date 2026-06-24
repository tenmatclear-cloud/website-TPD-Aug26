import React from "react";

/**
 * JC GoAI SessionRow — a programme timeline entry. Left column holds the
 * time + duration; right column the title, speakers, abstract and an
 * optional note pill.
 */
export function SessionRow({ time, duration, title, speakers, abstract, note, style, ...rest }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "170px 1fr",
        gap: 20,
        padding: 22,
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        background: "var(--surface-card)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)", fontWeight: "var(--weight-black)" }}>
        {time}
        {duration ? (
          <span style={{ display: "block", marginTop: 2, color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: "var(--weight-bold)" }}>
            {duration}
          </span>
        ) : null}
      </div>
      <div>
        <h3 style={{ fontSize: "1.18rem" }}>{title}</h3>
        {speakers ? (
          <p style={{ marginTop: 8, color: "var(--color-primary)", fontWeight: "var(--weight-semibold)" }}>{speakers}</p>
        ) : null}
        {abstract ? <p style={{ marginTop: 8, color: "var(--text-muted)" }}>{abstract}</p> : null}
        {note ? (
          <span
            style={{
              display: "inline-flex",
              marginTop: 12,
              padding: "5px 11px",
              borderRadius: "var(--radius-button)",
              background: "var(--color-bg-light)",
              color: "var(--color-primary)",
              font: "700 0.8rem/1.2 var(--font-body)",
            }}
          >
            {note}
          </span>
        ) : null}
      </div>
    </div>
  );
}
