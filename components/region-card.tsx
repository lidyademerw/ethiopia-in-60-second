"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EthiopianFlag } from "@/components/ethiopian-flag";
import type { Region } from "@/lib/regions";

interface RegionCardProps {
  region: Region;
}

export function RegionCard({ region }: RegionCardProps) {
  return (
    <Link href={`/${region.id}`} className="block">
      <Card className="group overflow-hidden border-0 bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={region.imageUrl}
            alt={`${region.name} region of Ethiopia`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          
          {/* Flag badge */}
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1.5 backdrop-blur-sm">
            <EthiopianFlag className="h-3 w-5" />
          </div>

          {/* Region name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {region.name}
            </h3>
            <p className="text-lg font-medium text-white/90">
              {region.amharicName}
            </p>
            <p className="mt-1 text-sm text-white/80">
              {region.description}
            </p>
          </div>
        </div>

        <CardContent className="p-4">
          <Button className="w-full gap-2 bg-ethiopia-red text-white hover:bg-ethiopia-red/90">
            Explore in 60 Seconds
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
