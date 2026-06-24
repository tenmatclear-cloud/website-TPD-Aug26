import * as React from "react";

export interface InfoPanelProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** `accent` = green left-border block; `plain` = hairline soft card. @default "plain" */
  variant?: "accent" | "plain";
  /** Left-border colour for the accent variant. @default "teachers" */
  accent?: "teachers" | "programme" | "schools" | "blue" | string;
  style?: React.CSSProperties;
}

/**
 * Titled block of supporting copy — objectives, resources, logistics notes.
 * `accent` is the green left-border list item; `plain` is a soft bordered card.
 */
export function InfoPanel(props: InfoPanelProps): JSX.Element;
