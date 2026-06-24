import * as React from "react";

/**
 * @startingPoint section="Core" subtitle="Pill CTA with all brand variants" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /**
   * Visual style.
   * - `solid`: navy fill / white text — primary CTA on light surfaces
   * - `primary`: white fill / navy text — primary CTA on navy / hero
   * - `ghost`: transparent, white outline — on navy
   * - `ghostDark`: transparent, navy outline — on light
   * - `header`: compact navy fill / gold text, softer 20px radius
   * @default "solid"
   */
  variant?: "solid" | "primary" | "ghost" | "ghostDark" | "header";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Show a trailing arrow icon. @default false */
  showArrow?: boolean;
  /** Render as a link to this URL (otherwise a <button>). */
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

/**
 * Pill-shaped call-to-action button. The brand's primary interactive element —
 * always rounded (never sharp corners), weight 800, optional circular arrow.
 */
export function Button(props: ButtonProps): JSX.Element;
