import { Waves, Heart, Shield } from "lucide-react"

export type CardSize = "sm" | "md" | "lg"
export type CardColor = "default" | "primary" | "secondary" | "contrast" | "critical" | "neutral" | "promo"
export type CardVariant = "filled" | "outlined" | "ghost"
export type CardImagePosition = "top" | "background" | "left" | "right"
export type CardOrientation = "vertical" | "horizontal"
export type CardHorizAlign = "center" | "left" | "right"
export type CardVertAlign = "center" | "top" | "bottom"
export type CardBadge = "popular" | "deal" | "special" | "recommended"
export type CardServiceKey = "wave" | "wellness" | "soul"
export type CardService = (CardServiceKey | CardServices)[]
export interface CardServices {
  icon: CardServiceKey
  label: string
}

export const iconMap = {
  wave: Waves,
  wellness: Heart,
  soul: Shield,
} as const

export const serviceIcons: Record<CardServiceKey, CardServices> = {
  wave: { icon: "wave", label: "Adjustment" },
  wellness: { icon: "wellness", label: "NAET" },
  soul: { icon: "soul", label: "Soul Alignment" },
}

export const formatPrice = (num?: number) =>
  typeof num === "number"
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(num)
    : num || ""
