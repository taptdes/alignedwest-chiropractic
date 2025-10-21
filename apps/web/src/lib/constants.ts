export const DEFAULT_BACKGROUND_ALT = "Background image";
export const DEFAULT_OVERLAY_ALT = "Background overlay";

export type OverlayVariant =
  | "gradient"
  | "dark"
  | "light"
  | "pattern"
  | "home"
  | "none";

export type Breakpoint = "sm" | "md" | "lg";

export const BREAKPOINTS: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
};

export type HeroVariant =
  | "default"
  | "dark"
  | "image"
  | "minimal"
  | "fullscreen"
  | "section";

export type HeroHeight = "screen" | "md" | "sm";
export type HeroAlignment = "center" | "left" | "right";
export type HeroLayout = "default" | "columns";
