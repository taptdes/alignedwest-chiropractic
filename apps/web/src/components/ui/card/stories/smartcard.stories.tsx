import type { Meta, StoryObj } from "@storybook/react"
import { SmartCard } from "@/components/ui/card/SmartCard"
import { CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { PopularBadge as Badge } from "@/components/ui/badge/PopularBadge"
import { Image } from "@/components/ui/image"
import { getColorClasses } from "@/lib/blocks/Services"
import { Activity, Star, CheckCircle, Clock, ArrowRight } from "lucide-react"

const meta: Meta<typeof SmartCard> = {
  title: "UI/CardSmart",
  component: SmartCard,
}
export default meta

type Story = StoryObj<typeof SmartCard>

export const ServiceCard: Story = {
  render: () => {
    const colorClasses = getColorClasses("amber")

    return (
      <div className="max-w-sm mx-auto">
        <SmartCard size="sm" className="relative flex flex-col size-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-visible">
          {/* Badge */}
          <Badge className="flex z-30 text-sm text-white font-semibold items-center justify-center" label="Popular"><Star className="w-3 h-3 items-center content-center mr-1 fill-current" /></Badge>

          {/* Image */}
          <div className="relative z-10 size-full ">
            <div className="aspect-16/10 size-full overflow-hidden rounded-t-xl">
              <Image
                src="https://images.unsplash.com/photo-1691780325847-7a06ad859f02?auto=format&fit=crop&w=800&q=80"
                alt="Spinal Adjustments"
                fallbackSrc="https://placehold.co/600x400?text=No+Image"
                className="size-full z-10 object-cover group-hover:scale-110 transition-transform rounded-none duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Icon */}
            <div className="absolute bottom-4 z-30 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-amber-600" />
            </div>
          </div>

          {/* Header */}
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-lg ${colorClasses}`}>
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">
                  Spinal Adjustments
                </CardTitle>
              </div>
            </div>
            <CardDescription className="text-neutral-600 line-clamp-2 leading-relaxed">
              Precise manual adjustments to restore proper spinal alignment and reduce pain using gentle, effective techniques.
            </CardDescription>
          </CardHeader>

          {/* Content */}
          <CardContent className="relative">
            <div className="space-y-3 w-full mb-6">
              {["Manual therapy", "Gentle techniques", "Immediate relief"].map(
                (feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-mint-500" />
                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>

            <div className="flex w-full justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>30 min</span>
              </div>
              <div className="text-2xl font-semibold text-amber-700">$95</div>
            </div>

            <div className="flex gap-4 mt-auto">
              <Button className="flex-1" onClick={() => alert("Book clicked")}>
                Book
              </Button>
              <Button
                variant="outline"
                className="flex-1 items-center justify-center"
                onClick={() => alert("Learn more")}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </SmartCard>
      </div>
    )
  },
}