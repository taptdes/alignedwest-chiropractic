import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/ui/image";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    title: "Signature Massage Therapy",
    description: "Experience deep relaxation with our customized massage treatments designed to release tension and restore balance.",
    duration: "60-90 minutes",
    price: "From $120",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true
  },
  {
    title: "Rejuvenating Facial Treatments",
    description: "Revitalize your skin with our advanced facial therapies using premium organic products and cutting-edge techniques.",
    duration: "75 minutes",
    price: "From $95",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Aromatherapy & Body Wraps",
    description: "Indulge in our therapeutic body treatments that detoxify, hydrate, and nourish your skin from head to toe.",
    duration: "90 minutes",
    price: "From $150",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Couples Retreat Package",
    description: "Share a blissful experience with your loved one in our private couples suite with synchronized treatments.",
    duration: "2 hours",
    price: "From $280",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Wellness Day Package",
    description: "A complete day of pampering including massage, facial, body treatment, and access to our wellness facilities.",
    duration: "Full day",
    price: "From $350",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Hot Stone Therapy",
    description: "Melt away stress with our therapeutic hot stone massage that penetrates deep into muscle tissue.",
    duration: "90 minutes",
    price: "From $140",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export function Services() {
  return (
    <section id="about" className="relative w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Signature Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of treatments designed to nurture your well-being and restore your natural radiance.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    {service.popular && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                      <span className="font-medium text-primary">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}