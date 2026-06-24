import * as React from "react";

export interface ModuleCardProps {
  title: React.ReactNode;
  /** Audience — "Primary" (yellow pill) or "Secondary" (blue pill). */
  audience?: React.ReactNode;
  /** Session period, e.g. "AM or PM session". */
  period?: React.ReactNode;
  /** Lessons covered, e.g. "Lessons 1-6". */
  lessons?: React.ReactNode;
  facilitators?: React.ReactNode;
  abstract?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Subject-module tile for the deep-dive days — title, audience pill,
 * period/lessons chips, facilitators and abstract on the soft blue-white card.
 */
export function ModuleCard(props: ModuleCardProps): JSX.Element;
