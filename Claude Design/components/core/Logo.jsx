import React from "react";

/**
 * JC GoAI Logo — the GOAI wordmark. `variant="full"` is the bilingual
 * lockup (GOAI + JC GoAI · 賽馬會人工智能教育); `variant="mark"` is the
 * GOAI symbol only, for compact headers.
 *
 * NOTE: image `src` resolves relative to the HOST HTML document, so pass the
 * correct relative path from wherever you mount this (default assumes the
 * page sits at the project root next to /assets).
 */
export function Logo({ variant = "full", reversed = false, height, src, alt = "JC GoAI", style, ...rest }) {
  const file = variant === "mark"
    ? (reversed ? "assets/goai-mark-white.png" : "assets/goai-mark.png")
    : (reversed ? "assets/goai-logo-white.png" : "assets/goai-logo.png");
  const h = height ?? (variant === "mark" ? 34 : 56);
  return (
    <img
      src={src ?? file}
      alt={alt}
      style={{ height: h, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
