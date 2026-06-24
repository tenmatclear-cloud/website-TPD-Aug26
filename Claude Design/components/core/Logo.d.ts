import * as React from "react";

export interface LogoProps {
  /** `full` = bilingual lockup; `mark` = GOAI symbol only. @default "full" */
  variant?: "full" | "mark";
  /** Reversed (white) variant for navy / dark surfaces. @default false */
  reversed?: boolean;
  /** Pixel height (width auto). Defaults: full 56, mark 34. */
  height?: number;
  /** Image src — resolves relative to the host HTML document. */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}

/**
 * The GOAI wordmark — navy + gold geometric lockup. Use `mark` in headers,
 * `full` (with the JC GoAI · 賽馬會人工智能教育 lockup) in footers / heroes.
 */
export function Logo(props: LogoProps): JSX.Element;
