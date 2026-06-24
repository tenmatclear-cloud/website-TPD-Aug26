import React from "react";

/**
 * JC GoAI feature Card — white panel with a coloured left accent bar,
 * optional 4:3 image, meta pill, title and description.
 */
export function Card({
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
    blue: "var(--color-accent-blue)",
  };
  const accentColor = accents[accent] || accent;
  const Tag = href ? "a" : "div";

  const [hover, setHover] = React.useState(false);

  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{ position: "absolute", insetBlock: 0, insetInlineStart: 0, width: "var(--border-width-accent)", background: accentColor }}
      />
      {image ? (
        <div style={{ aspectRatio: "4 / 3", overflow: "hidden", marginInlineStart: "var(--border-width-accent)" }}>
          <img src={image} alt={imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : null}
      <div style={{ padding: "var(--space-card-pad)", paddingInlineStart: "calc(var(--space-card-pad) + var(--border-width-accent))" }}>
        {meta ? (
          <span
            style={{
              display: "inline-flex",
              marginBottom: 14,
              padding: "5px 10px",
              borderRadius: "var(--radius-button)",
              background: "var(--color-bg-light)",
              color: "var(--color-primary)",
              font: "800 0.82rem/1 var(--font-heading)",
            }}
          >
            {meta}
          </span>
        ) : null}
        {title ? <h3 style={{ marginBottom: description ? 10 : 0 }}>{title}</h3> : null}
        {description ? <p style={{ color: "var(--text-muted)" }}>{description}</p> : null}
        {children}
      </div>
    </Tag>
  );
}
