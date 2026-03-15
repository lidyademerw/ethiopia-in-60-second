"use client";

import { RegionCard } from "@/components/region-card";
import type { Region } from "@/lib/regions";

interface RegionsGridProps {
  regions: Region[];
}

export function RegionsGrid({ regions }: RegionsGridProps) {
  if (regions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <svg
            className="h-8 w-8 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">No regions found</h3>
        <p className="text-muted-foreground">Try a different search term</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {regions.map((region) => (
        <RegionCard key={region.id} region={region} />
      ))}
    </div>
  );
}
