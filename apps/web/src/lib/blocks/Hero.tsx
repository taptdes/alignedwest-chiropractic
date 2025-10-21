'use client'

import React from 'react';
import { heroVariants, HERO_CONTENT_STYLES, OVERLAY_STYLES, HERO_ALIGNMENT_STYLES, HERO_LAYOUT_STYLES, GALLERY_GRID_CLASSES } from '@/lib/index';
import type { HeroProps, OverlayVariant } from '@/lib/index';
import { BackgroundImages } from '@/lib/blocks/BG';
import { cn } from '@/lib/utils';
import { Image } from '@/components/ui/image';

export const Hero: React.FC<HeroProps> = ({
  variant = 'default',
  size,
  container,
  bg,
  overlays,
  alignment = 'center',
  layout = 'default',
  content,
  parallax = false,
  className,
  children,
}) => {
  return (
    <section
      className={cn(
        heroVariants({ variant, size, container }),
        HERO_ALIGNMENT_STYLES[alignment],
        HERO_LAYOUT_STYLES[layout],
        className
      )}
    >
      {/* Background images */}
      {bg && (
        <BackgroundImages
          images={bg.images}
          fallback={bg.fallback}
          alt={bg.alt}
          fixed={bg.fixed ?? parallax}
          className={bg.className}
        />
      )}

      {/* Overlays */}
      {overlays?.map((overlay: OverlayVariant, idx) => (
        <div key={idx} className={OVERLAY_STYLES[overlay]} />
      ))}

      {/* Hero Content */}
      {content && (
        <div className={cn(HERO_CONTENT_STYLES.container, content.className)}>
          {content.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-sm font-semibold mb-2">
              {content.badge}
            </span>
          )}
          <h1 className={HERO_CONTENT_STYLES.title}>{content.title}</h1>
          {content.subheader && (
            <p className={HERO_CONTENT_STYLES.subheader}>{content.subheader}</p>
          )}

          {/* Buttons */}
{content.buttons && content.buttons.length > 0 && (
              <div className={HERO_CONTENT_STYLES.buttons}>
              {content.buttons.map((btn, idx) => (
                <button key={idx} onClick={btn.onClick} className={HERO_CONTENT_STYLES.button}>
                  {btn.text}
                </button>
              ))}
            </div>
          )}

          {/* Gallery */}
          {content.gallery && content.gallery.images.length > 0 && (
            <div className={cn(HERO_CONTENT_STYLES.galleryWrapper, GALLERY_GRID_CLASSES[content.gallery.size || 'md'])}>
              {content.gallery.images.map((img, idx) => (
                <Image key={idx} src={img} alt={`Gallery image ${idx + 1}`} className={HERO_CONTENT_STYLES.galleryImage} />
              ))}
            </div>
          )}

          {/* Children inside content */}
          {content.children}
        </div>
      )}

      {/* Full-bleed children (wave separators, etc.) */}
      {children && <div className="absolute inset-x-0 w-full h-screen">{children}</div>}
    </section>
  );
};