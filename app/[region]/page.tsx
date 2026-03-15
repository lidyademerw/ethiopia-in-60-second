import { notFound } from "next/navigation";
import { regions, getRegionById } from "@/lib/regions";
import { RegionPageContent } from "@/components/region-page-content";

interface RegionPageProps {
  params: Promise<{
    region: string;
  }>;
}

export async function generateStaticParams() {
  return regions.map((region) => ({
    region: region.id,
  }));
}

export async function generateMetadata({ params }: RegionPageProps) {
  const { region: regionId } = await params;
  const region = getRegionById(regionId);
  
  if (!region) {
    return {
      title: "Region Not Found",
    };
  }

  return {
    title: `${region.name} / ${region.amharicName} - Ethiopia in 60 Seconds`,
    description: `Discover ${region.name}: ${region.description}. Explore food, culture, music, places, and women's celebrations.`,
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { region: regionId } = await params;
  const region = getRegionById(regionId);

  if (!region) {
    notFound();
  }

  return <RegionPageContent region={region} />;
}
