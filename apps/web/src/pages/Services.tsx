import { Leaf, Sparkles } from "lucide-react"
import { services } from '@/lib/data/services' // or same file if still inline
import type { ServiceCardProps } from '@/lib/blocks/cards/types'
import { ServiceCard } from '@/lib/blocks/cards/ServiceCard'




export default function Services(props?: Partial<ServiceCardProps>) {
  return (
    <section id="services" className="pt-50 pb-30 bg-linear-to-b from-background to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-6 h-6 text-amber-600" />
            <span className="text-sm text-muted-foreground tracking-wider uppercase">
              Healing Treatments
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-primary mb-6 tracking-tight">
            Your Journey to
            <span className="block text-amber-700 italic">Wellness</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each treatment is thoughtfully crafted to honor your body's wisdom and support your unique healing journey. 
            Experience the gentle power of natural restoration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      {...service}
                      {...props}
                      index={index}
                      onBook={(id) => console.log(`Book clicked for ${id}`)}
                      onLearnMore={(id) => console.log(`Learn more about ${id}`)}
                    />
                  ))}
                </div>

        {/* Decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
            <div className="w-8 h-0.5 bg-linear-to-r from-amber-300 to-amber-500"></div>
            <Leaf className="w-6 h-6 text-amber-600" />
            <div className="w-8 h-0.5 bg-linear-to-l from-amber-300 to-amber-500"></div>
            <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}