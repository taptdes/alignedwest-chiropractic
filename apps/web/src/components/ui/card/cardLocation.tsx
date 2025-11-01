import { MapPin } from "lucide-react"

export function CardLocation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center text-body text-sm">
      <MapPin className="w-4 h-4 mr-1" />
      {children}
    </div>
  )
}