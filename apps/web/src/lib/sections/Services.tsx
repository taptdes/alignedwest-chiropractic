import { ServiceCard } from '@/lib/blocks/cards/ServiceCard'
import type { ServiceCardProps } from '@/lib/blocks/cards/types'
import { services } from '@/lib/data/services' // or same file if still inline
import { Button } from '@/components/ui/button'

export default function Services(props?: Partial<ServiceCardProps>) {
  return (
    <section id="services" className="relative w-full py-20 bg-white" style={{ zIndex: 20 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            Comprehensive Chiropractic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full range of chiropractic and wellness services
            designed to address your specific needs and help you achieve optimal health.
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

        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}