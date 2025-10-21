import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    treatment: "Couples Retreat Package",
    rating: 5,
    review: "An absolutely magical experience! The attention to detail and the serene atmosphere made our anniversary celebration perfect. The therapists were incredibly skilled and professional."
  },
  {
    name: "Michael Chen",
    treatment: "Hot Stone Therapy",
    rating: 5,
    review: "I've been to many spas, but Serenity Spa is truly exceptional. The hot stone massage was exactly what I needed after months of stress. I left feeling completely renewed."
  },
  {
    name: "Emma Rodriguez",
    treatment: "Rejuvenating Facial",
    rating: 5,
    review: "The facial treatment exceeded all my expectations. My skin has never looked better! The organic products they use are amazing, and the results speak for themselves."
  },
  {
    name: "David Thompson",
    treatment: "Wellness Day Package",
    rating: 5,
    review: "Spent the entire day here and it was worth every penny. From the massage to the facilities, everything was top-notch. This place is a true sanctuary."
  },
  {
    name: "Lisa Park",
    treatment: "Aromatherapy Treatment",
    rating: 5,
    review: "The aromatherapy session was incredibly relaxing. The scents were divine and the whole experience was so peaceful. I can't wait to book my next appointment!"
  },
  {
    name: "James Wilson",
    treatment: "Signature Massage",
    rating: 5,
    review: "Outstanding service and ambiance. The massage therapist was highly skilled and really understood how to address my specific needs. Highly recommended!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of clients choose Serenity Spa for their wellness journey.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i, duration: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.treatment}</div>
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