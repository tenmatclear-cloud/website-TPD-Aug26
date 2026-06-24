import * as React from "react";

export interface StatBlockProps {
  /** The big number, e.g. "255M" or "3 days". */
  value: React.ReactNode;
  /** Caption beneath the number. */
  label: React.ReactNode;
  /** White text for placement on the navy half of the split section. @default false */
  onDark?: boolean;
  /** @default "start" */
  align?: "start" | "center" | "end";
  style?: React.CSSProperties;
}

/**
 * Large impact number with a caption — built for the signature yellow/navy
 * split stats section. Navy text on yellow, white text on navy (`onDark`).
 */
export function StatBlock(props: StatBlockProps): JSX.Element;
