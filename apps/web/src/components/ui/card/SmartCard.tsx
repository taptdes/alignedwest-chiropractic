import { cn, Badge, Card, cardStyles, getImageClasses, getContentAlignH, getContentAlignV, type SmartCardProps, formatPrice, iconMap } from "@/components/ui/card/index"
import { MapPin } from "lucide-react"

export function SmartCard({
  className,
  image,
  imagePosition = "top",
  title,
  description,
  price,
  badge,
  location,
  tags = [],
  services = [],
  orientation = "vertical",
  alignH = "left",
  alignV = "top",
  size = "md",
  color = "primary",
  variant = "filled",
  loading,
  children,
  ...props
}: SmartCardProps) {
  const hasImage = Boolean(image)
  const imageSrc =
    typeof image === "string" ? image : image && typeof image === "object" ? image.url : undefined

  return (
    <Card
      className={cn(
        cardStyles({ size, color, variant, orientation, alignH, alignV }),
        "overflow-hidden relative",
        className
      )}
      loading={loading}
      {...props}
    >
      {/* Inline Image */}
      {hasImage && imagePosition === "top" && (
        <div className={cn(getImageClasses("inline", orientation), "overflow-hidden")}>
          <img
            src={imageSrc}
            alt={title || "Card image"}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Background Image */}
      {hasImage && imagePosition === "background" && (
        <div className="absolute inset-0 z-0">
          <img
            src={imageSrc}
            alt={title || "Card background"}
            className="object-cover w-full h-full opacity-20"
          />
        </div>
      )}

      {/* Badge */}
      {badge && (
        <Badge
          className="absolute top-3 left-3 z-10 capitalize shadow-sm"
          variant="secondary"
        >
          {badge}
        </Badge>
      )}

      {/* Content */}
      <div
        className={cn(
          "flex flex-col gap-3 relative z-10",
          getContentAlignH(alignH),
          getContentAlignV(alignV),
          "p-6"
        )}
      >
        {/* Title */}
        {title && <h3 className="text-lg font-semibold">{title}</h3>}

        {/* Location */}
        {location && (
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        )}

        {/* Description */}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}

        {/* Price */}
        {price && (
          <p className="text-xl font-semibold text-primary">{formatPrice(price)}</p>
        )}

        {/* Services */}
        {Array.isArray(services) && services.length > 0 && (
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {services.map((service, idx) => {
              const key = typeof service === "string" ? service : service.icon
              const label = typeof service === "string" ? service : service.label
              const Icon = iconMap[key as keyof typeof iconMap]
              return (
                <div key={idx} className="flex items-center gap-1">
                  {Icon && <Icon className="w-4 h-4" />}
                  {label}
                </div>
              )
            })}
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {children}
      </div>
    </Card>
  )
}