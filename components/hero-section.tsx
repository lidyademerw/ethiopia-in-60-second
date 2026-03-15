"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Shuffle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onRandomRegion: () => void;
}

const heroImages = [
  { src: "/images/hero/hero-1.jpg", alt: "Ethiopian Coffee Ceremony" },
  { src: "/images/hero/hero-2.jpg", alt: "Lalibela Rock-Hewn Church" },
  { src: "/images/hero/hero-3.jpg", alt: "Timkat Festival Celebration" },
  { src: "/images/hero/hero-4.jpg", alt: "Omo Valley Tribes" },
  { src: "/images/hero/hero-5.jpg", alt: "Simien Mountains" },
];

export function HeroSection({ searchQuery, onSearchChange, onRandomRegion }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden sm:h-[700px]">
      {/* Sliding Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-28">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-ethiopia-yellow"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Ethiopian flag stripe decoration */}
          <div className="mx-auto mb-8 flex h-2 w-32 overflow-hidden rounded-full">
            <div className="flex-1 bg-ethiopia-green" />
            <div className="flex-1 bg-ethiopia-yellow" />
            <div className="flex-1 bg-ethiopia-red" />
          </div>

          <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            Ethiopia in 60 Seconds
          </h1>
          <p className="mb-4 text-2xl font-medium text-ethiopia-yellow drop-shadow-md sm:text-3xl">
            ኢትዮጵያ በ60 ሰከንድ
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-white/90 drop-shadow-md sm:text-xl">
            Discover food, culture, music, clothing, and history from Ethiopia&apos;s diverse regions through quick immersive stories.
          </p>

          {/* Search and Random */}
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 sm:flex-row">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search regions... / ክልሎችን ይፈልጉ..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-12 w-full rounded-xl border-0 bg-white/95 pl-10 text-foreground shadow-lg backdrop-blur-sm placeholder:text-muted-foreground focus-visible:ring-ethiopia-yellow"
              />
            </div>
            <Button
              onClick={onRandomRegion}
              className="h-12 w-full shrink-0 gap-2 rounded-xl bg-ethiopia-yellow text-ethiopia-green shadow-lg hover:bg-ethiopia-yellow/90 sm:w-auto"
            >
              <Shuffle className="h-5 w-5" />
              Random Region
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
