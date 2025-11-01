"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Image } from '@/components/ui/image'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { AnimatedSection } from '@/lib/blocks/AnimatedSection'
import type { TestimonialCardProps } from '@/lib/blocks/cards/types'

export function TestimonialCard({ testimonial, index, currentIndex = 0 }: TestimonialCardProps) {
  return (
    <AnimatedSection delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          key={`${currentIndex}-${index}`}
          className={`shadow-lg transition-all duration-300 ${
            index === 1 ? 'md:scale-105 border-primary/20' : ''
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-center mb-4 justify-between">
              <Quote className="h-8 w-8 text-primary/20" />
              <div className="flex gap-1">
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
            </div>

            <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>

            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.treatment}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  )
}