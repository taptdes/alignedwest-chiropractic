import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Activity,
  Heart,
  Zap,
  Target,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Leaf,
  Sparkles,
  type LucideIcon as LucideIconType
} from 'lucide-react'

import { PopularBadge as Badge } from '@/components/ui/badge/PopularBadge'
import { Image } from '@/components/ui/image'
import img1 from "@/assets/bg-home-hero3.webp"

export const LucideIcon = [
  Activity,
  Heart,
  Zap,
  Target,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Leaf,
  Sparkles
]

export interface Service {
  id: string;
  icon: LucideIconType;          // your imported icon component
  title: string;
  description: string;
  popular?: boolean;
  duration: string;
  features: string[];
  color: string;
  price: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "adjustments",
    icon: Activity,
    title: "Spinal Adjustments",
    description: "Precise manual adjustments to restore proper spinal alignment and reduce pain using gentle, effective techniques.",
    popular: true,
    duration: "30 min",
    features: ["Manual therapy", "Gentle techniques", "Immediate relief"],
    color: "blue",
    price: "$95",
    image: img1
  },
  {
    id: "soul",
    icon: Heart,
    title: "Soul Alignment",
    description: "Specialized care for athletes and active individuals to recover faster and prevent future injuries.",
    popular: false,
    duration: "40 min",
    features: ["Performance optimization", "Injury prevention", "Recovery planning"],
    color: "red",
    price: "$50",
    image: img1

  },
  {
    id: "naet",
    icon: Zap,
    title: "NAET",
    description: "Comprehensive rehabilitation programs designed to strengthen muscles and restore full function.",
    popular: false,
    duration: "40 min",
    features: ["Exercise programs", "Strength training", "Mobility work"],
    color: "purple",
    price: "$50",
    image: img1

  },
]

export const getColorClasses = (color: string) => {
  const colors = {
    blue: "text-blue-600 bg-blue-50",
    red: "text-red-600 bg-red-50",
    purple: "text-purple-600 bg-purple-50",
    green: "text-green-600 bg-green-50",
    amber: "text-amber-600 bg-amber-50",
    indigo: "text-indigo-600 bg-indigo-50"
  }
  return colors[color as keyof typeof colors] || "text-gray-600 bg-gray-50"
}

export default function Services(props?: Partial<Service>) {
  return (
    <section id="services" className="relative w-full py-20 bg-white" style={{ zIndex: 20 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            Comprehensive Chiropractic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full range of chiropractic servicess and wellness services
            designed to address your specific needs and help you achieve optimal health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClasses = getColorClasses(service.color)

            return (
              <Card
                key={service.id} // use id instead of index for keys
                className="relative group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-visible"
              >
                {service.popular && <Badge className="z-30" label="Popular" />}

                {service.image && (
                  <div className="relative z-20">
                    <div className="aspect-[16/12] rounded-t-xl overflow-hidden">
                      <Image
                        src={service.image} // ✅ corrected
                        alt={service.title}  // ✅ corrected
                        className="w-full h-full object-cover rounded-none group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>

                    {/* Icon overlay */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
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
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 line-clamp-2 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 w-full mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl text-amber-700 tracking-tight">
                      {service.price}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-auto pb-6">
                      <Button
                        variant="default"
                        className="flex-1 hover:bg-primary hover:text-white transition-colors"
                        onClick={() => console.log("Book clicked")}
                      >
                        Book
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                  </div>
                </CardContent>
              </Card>

            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

