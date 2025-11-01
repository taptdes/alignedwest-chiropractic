import {
  type LucideIcon as LucideIconType
} from 'lucide-react'
export interface ServiceCardProps {
  id: string
  icon: LucideIconType
  title: string
  description: string
  duration: string
  features: string[]
  color: string
  price: string
  image?: string
  popular?: boolean
  index?: number
  onBook?: (id: string) => void
  onLearnMore?: (id: string) => void
}

export interface Testimonial {
  name: string
  treatment: string
  rating: number
  image: string
  review: string
}

export interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
  currentIndex?: number
}