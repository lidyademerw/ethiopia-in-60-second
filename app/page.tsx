"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/hero-section";
import { RegionsGrid } from "@/components/regions-grid";
import { ContactForm } from "@/components/contact-form";
import { regions } from "@/lib/regions";
import { EthiopianFlag } from "@/components/ethiopian-flag";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRegions = useMemo(() => {
    if (!searchQuery.trim()) return regions;
    const query = searchQuery.toLowerCase();
    return regions.filter(
      (region) =>
        region.name.toLowerCase().includes(query) ||
        region.amharicName.includes(query) ||
        region.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleRandomRegion = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * regions.length);
    const randomRegion = regions[randomIndex];
    router.push(`/${randomRegion.id}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <EthiopianFlag className="h-6 w-9" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">
                Ethiopia in 60 Seconds
              </span>
              <span className="text-sm text-ethiopia-green">
                ኢትዮጵያ በ60 ሰከንድ
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 sm:flex">
            <a
              href="#regions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Regions / ክልሎች
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact / አግኙን
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onRandomRegion={handleRandomRegion}
      />

      {/* Regions Grid */}
      <main id="regions" className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Explore All Regions
            </h2>
            <p className="mt-1 text-ethiopia-green font-medium">
              ሁሉንም ክልሎች ያስሱ
            </p>
            <p className="mt-1 text-muted-foreground">
              {filteredRegions.length} region{filteredRegions.length !== 1 ? "s" : ""} to discover
            </p>
          </div>
        </div>
        <RegionsGrid regions={filteredRegions} />
      </main>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
