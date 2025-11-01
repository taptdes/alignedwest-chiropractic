import { cn } from "@/lib/utils"

interface PopularBadgeProps {
  children?: React.ReactNode
  className?: string
  label: string
}
export function PopularBadge({ children, label, className }: PopularBadgeProps) {
  return (
    <div className={cn(
      "absolute bg-primary box-border content-stretch flex gap-1.5 items-center justify-center -left-2 px-2.5 py-1.5 rounded-t-md rounded-ee-md top-[-13px]",
      className
    )}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-br-2 rounded-tl-2 rounded-tr-2" />
      <div className="relative shrink-0 size-4">
        {children}
      </div>
      <p className="font-montserrat font-primary font-semibold leading-3.5 not-italic relative shrink-0 text-xs text-nowrap text-white tracking-relaxed whitespace-pre">{label}</p>
      <div className="absolute bottom-[-7.5px] left-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d="M8 8L0 0H8V8Z" fill="#BA4914" />
        </svg>
      </div>
    </div>
  )
}