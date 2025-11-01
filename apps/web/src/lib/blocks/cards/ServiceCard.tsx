import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PopularBadge as Badge } from '@/components/ui/badge/PopularBadge'
import { Image } from '@/components/ui/image'
import {
  CheckCircle,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { getColorClasses } from '@/lib/blocks/cards/styles' // or wherever you placed it
import type { ServiceCardProps } from './types'

export function ServiceCard({
  id,
  icon: IconComponent,
  title,
  description,
  duration,
  features,
  color,
  price,
  image,
  popular,
  index = 0,
  onBook,
  onLearnMore
}: ServiceCardProps) {
  const colorClasses = getColorClasses(color)
  const animationDelay = `${index * 0.1}s`

  return (
    <Card
      key={id}
      size="sm"
      style={{ animationDelay }}
      className={`relative flex flex-col group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-visible ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      {popular && <Badge className="z-30" label="Popular" />}

      {image && (
        <div className="relative z-20">
          <div className="aspect-16/10 rounded-t-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-none group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          <div className="absolute bottom-4 z-30 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-amber-700" />
          </div>
        </div>
      )}

      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-lg ${colorClasses}`}>
            <IconComponent className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="text-neutral-600 line-clamp-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-3 w-full mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-mint-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="text-2xl text-amber-700 tracking-tight">{price}</div>
        </div>

        <div className="flex gap-4 mt-auto">
          <Button
            variant="default"
            className="flex-1 hover:bg-primary hover:text-white transition-colors"
            onClick={() => onBook?.(id)}
          >
            Book
          </Button>
          <Button
            variant="outline"
            className="flex-1 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            onClick={() => onLearnMore?.(id)}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}