import * as React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  /** Gold-on-navy treatment for dark surfaces. @default false */
  onDark?: boolean;
  /** Wrap in a hairline pill border. @default false */
  bordered?: boolean;
  style?: React.CSSProperties;
}

/**
 * Uppercase kicker label that sits above a section heading. Navy on light
 * surfaces, gold on dark; optionally wrapped in a hairline pill.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
