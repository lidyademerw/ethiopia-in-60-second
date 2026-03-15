"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shuffle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EthiopianFlag } from "@/components/ethiopian-flag";
import { RegionTabs } from "@/components/region-tabs";
import { HistoryTimeline } from "@/components/history-timeline";
import { ContactForm } from "@/components/contact-form";
import { regions, type Region } from "@/lib/regions";

interface RegionPageContentProps {
  region: Region;
}

export function RegionPageContent({ region }: RegionPageContentProps) {
  const router = useRouter();

  const handleRandomRegion = () => {
    const otherRegions = regions.filter(r => r.id !== region.id);
    const randomIndex = Math.floor(Math.random() * otherRegions.length);
    const randomRegion = otherRegions[randomIndex];
    router.push(`/${randomRegion.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <EthiopianFlag className="h-5 w-8" />
            <span className="text-sm font-bold text-foreground sm:text-base">
              Ethiopia in 60 Seconds
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRandomRegion}
              className="gap-1.5 text-xs sm:text-sm"
            >
              <Shuffle className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Random Region</span>
            </Button>
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1.5">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] sm:h-[50vh]">
        <Image
          src={region.imageUrl}
          alt={`${region.name} region of Ethiopia`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-3">
              <EthiopianFlag className="h-6 w-10" />
              <div className="h-1 flex-1 max-w-32 rounded-full overflow-hidden flex">
                <div className="flex-1 bg-ethiopia-green" />
                <div className="flex-1 bg-ethiopia-yellow" />
                <div className="flex-1 bg-ethiopia-red" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              {region.name}
            </h1>
            <p className="mt-2 text-2xl font-medium text-ethiopia-green sm:text-3xl">
              {region.amharicName}
            </p>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              {region.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Tabs Section */}
        <RegionTabs tabs={region.tabs} region={region} />

        {/* History Timeline */}
        <HistoryTimeline events={region.history} />
      </main>

      {/* Contact Form Footer */}
      <ContactForm />
    </div>
  );
}
