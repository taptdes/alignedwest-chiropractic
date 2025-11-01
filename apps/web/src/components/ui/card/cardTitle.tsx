import { cn } from "@/lib/utils"

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-montserrat font-semibold title-md text-2xl leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}