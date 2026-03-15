"use client";

import { Clock } from "lucide-react";
import type { HistoryEvent } from "@/lib/regions";

interface HistoryTimelineProps {
  events: HistoryEvent[];
}

export function HistoryTimeline({ events }: HistoryTimelineProps) {
  return (
    <section className="py-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ethiopia-yellow">
          <Clock className="h-5 w-5 text-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            History in 60 Seconds
          </h2>
          <p className="text-muted-foreground">ታሪክ በ60 ሰከንድ</p>
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-ethiopia-green via-ethiopia-yellow to-ethiopia-red sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-4 sm:items-center ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-ethiopia-green sm:left-1/2">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div
                className={`ml-10 flex-1 sm:ml-0 ${
                  index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"
                }`}
              >
                <div className="rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="inline-block rounded-full bg-ethiopia-green/10 px-3 py-1 text-sm font-bold text-ethiopia-green">
                    {event.year}
                  </span>
                  <p className="mt-2 text-foreground">{event.event}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden flex-1 sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
