import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/ui/image"
import { Clock, Star, Leaf, Sparkles } from "lucide-react";

const treatments = [
  {
    title: "Gentle Spinal Harmony",
    description: "A nurturing approach to realign your spine and restore your body's natural flow of energy.",
    duration: "60 min",
    price: "$95",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    popular: true,
    icon: Leaf
  },
  {
    title: "Therapeutic Touch Massage",
    description: "Deeply relaxing massage therapy that complements your healing journey with mindful touch.",
    duration: "75 min",
    price: "$110",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    popular: false,
    icon: Sparkles
  },
  {
    title: "Postural Restoration",
    description: "Gentle guidance to help your body remember its natural, graceful alignment.",
    duration: "45 min",
    price: "$75",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    popular: false,
    icon: Star
  },
  {
    title: "Athletic Recovery Sanctuary",
    description: "Specialized care for active souls seeking to heal and strengthen with mindful movement.",
    duration: "90 min",
    price: "$130",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    popular: false,
    icon: Leaf
  },
  {
    title: "Wellness Consultation",
    description: "A sacred space to explore your unique path to optimal health and inner vitality.",
    duration: "90 min",
    price: "$160",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80",
    popular: false,
    icon: Sparkles
  },
  {
    title: "Maintenance & Renewal",
    description: "Regular nurturing sessions to maintain your body's harmony and prevent future imbalances.",
    duration: "45 min",
    price: "$70",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    popular: false,
    icon: Star
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-amber-50/20">
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
          {treatments.map((treatment, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 warm-shadow bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
              <div className="relative">
                <div className="aspect-[16/12] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {treatment.popular && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-full px-3 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Loved
                  </Badge>
                )}
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <treatment.icon className="w-6 h-6 text-amber-700" />
                </div>
              </div>
              
              <CardHeader className="pb-4 px-6 pt-6">
                <CardTitle className="text-xl text-primary tracking-wide">{treatment.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {treatment.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{treatment.duration}</span>
                  </div>
                  <div className="text-2xl text-amber-700 tracking-tight">
                    {treatment.price}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-full py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Reserve This Experience
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500"></div>
            <Leaf className="w-6 h-6 text-amber-600" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-amber-300 to-amber-500"></div>
            <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}