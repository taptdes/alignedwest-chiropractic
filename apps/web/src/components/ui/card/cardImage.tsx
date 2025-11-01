import type { CardImageProps } from "./types"
import { clsx } from "clsx"

export function CardImage({
  src,
  alt = "",
  className,
  background = false,
  fill = false,
}: CardImageProps) {
  return (
    <div
      className={clsx(
        fill ? "relative" : "",
        background ? "absolute inset-0 z-0 pointer-events-none" : "overflow-hidden",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          fill ? "absolute inset-0 w-full h-full object-cover" : "w-full h-full object-cover",
          background && "opacity-20"
        )}
        style={background ? { filter: "brightness(0.8)" } : undefined}
      />
    </div>
  )
}