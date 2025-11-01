import { cn } from "@/lib/utils"
import type { CardSectionProps } from "@/components/ui/card/types"

export function CardHeader({ className, children, ...props }: CardSectionProps) {
  return (
    <div className={cn("flex flex-col typography space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  )
}
