"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Does chiropractic treatment hurt?",
    answer: "Most patients find chiropractic treatments to be comfortable and relaxing. You may hear some popping sounds during adjustments, which is completely normal and painless - it's just gas bubbles releasing from your joints. Many patients actually find the treatments quite soothing.",
    category: "Treatment"
  },
  {
    question: "How quickly will I see results?",
    answer: "Many patients experience some relief after their first visit, though everyone's timeline is different. Factors like the nature of your condition, how long you've had it, and your overall health all play a role. We'll give you a realistic expectation of your recovery timeline after your initial evaluation.",
    category: "Results"
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Comfortable, loose-fitting clothing works best for chiropractic appointments. Think athletic wear, yoga pants, or anything that allows you to move freely. Avoid tight jeans or restrictive clothing that might limit your range of motion during the examination.",
    category: "Preparation"
  },
  {
    question: "Do I need X-rays or other imaging?",
    answer: "Not necessarily. Our doctors are skilled at diagnosing many conditions through physical examination and health history. If imaging would be helpful for your specific case, we'll discuss it with you first. Many conditions can be effectively diagnosed and treated without any imaging.",
    category: "Diagnosis"
  },
  {
    question: "Is chiropractic care safe?",
    answer: "Yes, chiropractic care is considered one of the safest, most effective treatments for musculoskeletal conditions. Our doctors are extensively trained and licensed. Serious complications are extremely rare when treatment is provided by qualified professionals.",
    category: "Safety"
  },
  {
    question: "How long will I need to continue treatment?",
    answer: "Treatment length varies depending on your condition and goals. Our aim is to get you feeling better and teach you how to maintain your health. Some patients choose ongoing wellness care, but you're never required to continue treatment beyond what's necessary for your recovery.",
    category: "Treatment"
  },
  {
    question: "What if I'm nervous about my first visit?",
    answer: "It's completely normal to feel nervous before your first chiropractic visit. We'll explain everything we're doing, answer all your questions, and never perform any treatment you're not comfortable with. Our team is experienced in helping anxious patients feel at ease.",
    category: "Comfort"
  },
  {
    question: "Do you accept insurance?",
    answer: "We work with most major insurance plans. Our staff will verify your benefits before your first visit so you know exactly what to expect. We also offer affordable payment plans for those without coverage or for services not covered by insurance.",
    category: "Payment"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 bg-white w-full" style={{ zIndex: 20 }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about chiropractic care and our practice.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md"
              onClick={() => toggleFAQ(index)}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    openIndex === index ? 'bg-primary/10 rotate-180' : 'bg-gray-100'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </div>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <h3 className="text-xl mb-4 text-gray-900">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We're here to help! Contact us and we'll be happy to answer any additional 
              questions you may have about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Call Us Now
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}