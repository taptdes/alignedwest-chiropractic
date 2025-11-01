import { cn } from "@/lib/utils"
import { type CardBaseProps, cardBaseStyles } from "@/components/ui/card/index"

export function Card({ className, children, size = "md", color = "primary", variant = "filled", onHover = false, onClick, loading = false, hasBadge = false, onRef, ...props }: CardBaseProps) {
  return (
    <div
      ref={onRef}
      onClick={onClick}
      role={onClick ? "button" : props.role}
      tabIndex={onClick ? 0 : props.tabIndex}
      className={cn(
        cardBaseStyles({ size, color, variant }),
        onHover && "hover:shadow-md hover:-translate-y-0.5",
        onClick && "cursor-pointer",
        loading && "opacity-60 pointer-events-none",
        hasBadge && "overflow-visible",
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm rounded-xl z-10">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
        </div>
      )}
      {children}
    </div>
  )
}