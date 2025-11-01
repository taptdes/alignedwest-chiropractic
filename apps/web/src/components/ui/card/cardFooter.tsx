import { cn } from "@/lib/utils"
import type { CardSectionProps } from "@/components/ui/card/types"

export function CardFooter({
  className,
  children,
  ...props
}: CardSectionProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}