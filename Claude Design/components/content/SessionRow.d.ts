import * as React from "react";

export interface SessionRowProps {
  /** Time range, e.g. "9:15am-9:25am". */
  time: React.ReactNode;
  /** Duration, e.g. "10 mins". */
  duration?: React.ReactNode;
  title: React.ReactNode;
  speakers?: React.ReactNode;
  abstract?: React.ReactNode;
  /** Light-blue note pill, e.g. "AM session conducted in English." */
  note?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Programme timeline entry — time/duration column beside the session title,
 * speakers, abstract and an optional note pill. Stack these for a day agenda.
 */
export function SessionRow(props: SessionRowProps): JSX.Element;
