"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  UtensilsCrossed, 
  Users, 
  Music, 
  MapPin, 
  Shirt, 
  Globe, 
  Landmark, 
  Heart 
} from "lucide-react";
import type { TabContent, TabItem, Region } from "@/lib/regions";

interface RegionTabsProps {
  tabs: TabContent;
  region: Region;
}

const tabConfig = [
  { id: "food", label: "FOOD", amharic: "ምግብ", icon: UtensilsCrossed },
  { id: "culture", label: "CULTURE", amharic: "ባህል", icon: Users },
  { id: "music", label: "MUSIC", amharic: "ሙዚቃ", icon: Music },
  { id: "places", label: "PLACES", amharic: "ቦታዎች", icon: MapPin },
  { id: "dress", label: "WHAT TO DRESS", amharic: "ልብስ", icon: Shirt },
  { id: "location", label: "LOCATION", amharic: "አካባቢ", icon: Globe },
  { id: "heritage", label: "HERITAGE", amharic: "ቅርስ", icon: Landmark },
  { id: "womensCelebrations", label: "WOMEN'S CELEBRATIONS", amharic: "የሴቶች በዓላት", icon: Heart },
] as const;

type TabId = typeof tabConfig[number]["id"];

// Map coordinates for Ethiopian regions
const regionCoordinates: Record<string, { lat: number; lng: number; zoom: number }> = {
  "tigray": { lat: 14.0323, lng: 38.3165, zoom: 7 },
  "amhara": { lat: 11.5936, lng: 37.3908, zoom: 7 },
  "oromia": { lat: 7.5460, lng: 40.6347, zoom: 6 },
  "snnpr": { lat: 6.8569, lng: 37.5826, zoom: 7 },
  "somali": { lat: 6.6612, lng: 43.7908, zoom: 6 },
  "harar": { lat: 9.3094, lng: 42.1170, zoom: 10 },
  "afar": { lat: 11.7559, lng: 40.9587, zoom: 7 },
  "benishangul": { lat: 10.7833, lng: 35.5333, zoom: 7 },
  "gambella": { lat: 8.2500, lng: 34.5833, zoom: 8 },
  "sidama": { lat: 6.7375, lng: 38.4614, zoom: 8 },
  "south-west": { lat: 7.0000, lng: 35.5000, zoom: 8 },
  "addis-ababa": { lat: 9.0320, lng: 38.7469, zoom: 11 },
  "dire-dawa": { lat: 9.6009, lng: 41.8501, zoom: 11 },
};

export function RegionTabs({ tabs, region }: RegionTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("food");

  const getTabContent = (tabId: TabId): TabItem[] => {
    return tabs[tabId] || [];
  };

  const activeConfig = tabConfig.find(t => t.id === activeTab);
  const ActiveIcon = activeConfig?.icon || UtensilsCrossed;
  
  const coords = regionCoordinates[region.id] || { lat: 9.1450, lng: 40.4897, zoom: 6 };
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 2}%2C${coords.lat - 2}%2C${coords.lng + 2}%2C${coords.lat + 2}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`;

  // Default images for tabs that need them
  const getDefaultImage = (tabId: TabId): string | null => {
    switch (tabId) {
      case "food":
        return "/images/tabs/ethiopian-food.jpg";
      case "music":
        return "/images/tabs/ethiopian-music.jpg";
      case "dress":
        return "/images/tabs/ethiopian-dress.jpg";
      default:
        return null;
    }
  };

  return (
    <div className="py-8">
      {/* Tab Navigation */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex min-w-max gap-2 pb-2">
          {tabConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isWomens = tab.id === "womensCelebrations";
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? isWomens
                      ? "bg-ethiopia-red text-white shadow-md"
                      : "bg-ethiopia-green text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                } ${isWomens && !isActive ? "ring-2 ring-ethiopia-red/30" : ""}`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.amharic}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
            activeTab === "womensCelebrations" ? "bg-ethiopia-red" : "bg-ethiopia-green"
          }`}>
            <ActiveIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {activeConfig?.label}
            </h3>
            <p className="text-sm text-muted-foreground">{activeConfig?.amharic}</p>
          </div>
        </div>

        {/* Map for Location Tab */}
        {activeTab === "location" && (
          <div className="mb-6 overflow-hidden rounded-lg border border-border">
            <div className="bg-muted p-3">
              <h4 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-ethiopia-green" />
                {region.name} on the Map / {region.amharicName} በካርታ ላይ
              </h4>
            </div>
            <iframe
              src={mapUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${region.name}`}
              className="w-full"
            />
            <div className="bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
              Coordinates: {coords.lat.toFixed(4)}°N, {coords.lng.toFixed(4)}°E
            </div>
          </div>
        )}

        {/* Default Image Header for Food, Music, Dress tabs */}
        {(activeTab === "food" || activeTab === "music" || activeTab === "dress") && (
          <div className="mb-6 overflow-hidden rounded-lg">
            <div className="relative h-48 w-full sm:h-64">
              <Image
                src={getDefaultImage(activeTab) || ""}
                alt={`${activeConfig?.label} in Ethiopia`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-bold">Ethiopian {activeConfig?.label}</p>
                <p className="text-sm opacity-90">የኢትዮጵያ {activeConfig?.amharic}</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {getTabContent(activeTab).map((item, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg ${
                activeTab === "womensCelebrations" 
                  ? "border-l-4 border-ethiopia-red bg-ethiopia-red/5" 
                  : "border-l-4 border-ethiopia-yellow bg-muted/50"
              }`}
            >
              {item.image && (
                <div className="relative h-48 w-full sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.text.split(':')[0]}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {activeTab === "womensCelebrations" && (
          <div className="mt-6 rounded-lg bg-ethiopia-red/10 p-4 text-center">
            <Heart className="mx-auto mb-2 h-6 w-6 text-ethiopia-red" />
            <p className="text-sm font-medium text-ethiopia-red">
              Celebrating the vital role of women in Ethiopian culture
            </p>
            <p className="text-xs text-muted-foreground">
              የኢትዮጵያ ሴቶች በባህላችን ውስጥ ያላቸውን ወሳኝ ሚና እናከብራለን
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
