import * as React from "react";

export interface TagProps {
  children: React.ReactNode;
  /**
   * Semantic colour.
   * - `programme` orange · `teachers` green · `schools` yellow (brand role map)
   * - `navy` solid navy · `soft` light-blue tint · `outline` hairline
   * @default "schools"
   */
  tone?: "programme" | "teachers" | "schools" | "navy" | "soft" | "outline";
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

/**
 * Small uppercase pill for categories, audiences and article labels.
 * Colour is semantic — orange=programme, green=teachers, yellow=schools/news.
 */
export function Tag(props: TagProps): JSX.Element;
