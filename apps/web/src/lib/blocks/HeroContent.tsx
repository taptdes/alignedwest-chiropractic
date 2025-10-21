'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { HeroContent } from '@/lib/types';
import type { PageType } from '@/components/ui/navigation/types';

export function HeroContent({
  title,
  subheader,
  children,
  className,
  onNavigate,
}: HeroContent) {
  return (
    <div className={cn("box-border z-10 content-stretch flex flex-col gap-8 items-center justify-center p-0 relative w-full h-screen", className)}>
      <h1 className="text-7xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight whitespace-pre-line text-white">
        {title}
      </h1>

      {subheader && (
        <p className="text-2xl sm:text-xl lg:text-2xl text-white max-w-3xl whitespace-pre-line">
          {subheader}
        </p>
      )}

      <div className="flex items-start gap-4 mt-4">
        {children}
        {onNavigate && (
          <Button
            size="lg"
            onClick={() => onNavigate("book" as PageType)}
            className="bg-white/20 text-white hover:bg-white/30 text-base font-semibold px-8 py-4 rounded-lg backdrop-blur-sm shadow-md"
          >
            Book Now
          </Button>
        )}
      </div>
    </div>
  );
}