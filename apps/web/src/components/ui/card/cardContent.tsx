import { cn } from "@/lib/utils"
import type { CardSectionProps } from "@/components/ui/card/types"

export function CardContent({
  className,
  children,
  ...props
}: CardSectionProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}
