// 2D point type for ripples
export interface Point {
  x: number;
  y: number;
}

// Optional props for HeroBG component
export interface HeroBGProps {
  className?: string;
  sandImageSrc?: string;
}

// Noise / grain settings
export interface NoiseSettings {
  scale: number;
  seed: number;
}

// Ripple settings
export interface RippleSettings {
  rippleDetail: number;
  wobbleAmp: number;
  rippleCount: number;
  rippleSpeed: number;
}

// Sand texture settings
export interface SandTextureSettings {
  grainIntensity: number;
  windLineSpacing: number;
}

// Inline style type for gradient
export type GradientStyle = React.CSSProperties;