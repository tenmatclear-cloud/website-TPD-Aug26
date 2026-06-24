import * as React from "react";

/**
 * @startingPoint section="Content" subtitle="Feature card with accent bar + image" viewport="380x420"
 */
export interface CardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Left accent-bar colour (semantic role or a CSS colour). @default "programme" */
  accent?: "programme" | "teachers" | "schools" | "blue" | string;
  /** Small pill above the title. */
  meta?: React.ReactNode;
  /** Image URL — rendered 4:3 above the body. */
  image?: string;
  imageAlt?: string;
  /** Makes the whole card a hover-lifting link. */
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Feature card — white panel with a coloured left accent bar, optional 4:3
 * image, meta pill, title and description. The brand's primary content tile.
 */
export function Card(props: CardProps): JSX.Element;
