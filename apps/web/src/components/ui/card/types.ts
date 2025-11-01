import * as React from "react"
import type {
  CardSize,
  CardColor,
  CardVariant,
  CardBadge,
  CardOrientation,
  CardImagePosition,
  CardHorizAlign,
  CardVertAlign,
  CardServices,
  CardServiceKey
} from "./constants"
import type { CardBaseVariants } from "./styles"

export type CardAmenity = CardServiceKey | { icon: CardServiceKey; label: string }

// Remove keys from HTMLAttributes that CVA also declares to avoid conflicts
type HTMLDivPropsWithoutVariants = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  keyof CardBaseVariants
>

export interface CardBaseProps
  extends HTMLDivPropsWithoutVariants,
    CardBaseVariants {
  className?: string
  children?: React.ReactNode
  size?: CardSize
  color?: CardColor
  variant?: CardVariant
  onHover?: boolean
  onClick?: () => void
  loading?: boolean
  hasBadge?: boolean | CardBadge
  onRef?: React.Ref<HTMLDivElement>
}

export type CardImageProps = {
  src: string;
  alt?: string;
  className?: string;
  background?: boolean;
  fill?: boolean;
};

export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string;
}

export interface SmartCardProps extends CardBaseProps {
  image?: string | { url: string }
  imagePosition?: CardImagePosition
  badge?: string
  title?: string
  description?: string
  price?: number
  tags?: string[]
  services?: CardServices[]
  location?: string
  avatarTag?: {
    name?: string
    image?: string
    initial?: string
  }
  buttonLabel?: string
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onAddToCart?: (item?: any) => void
  orientation?: CardOrientation
  alignH?: CardHorizAlign
  alignV?: CardVertAlign
  actions?: React.ReactNode
}