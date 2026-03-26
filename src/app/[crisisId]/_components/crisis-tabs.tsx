"use client";

import { useState } from "react";

import type { MapMarkerData, MeasureData, TimelineEntryData } from "./types";
import { PublicTimeline } from "./public-timeline";
import { PublicMeasures } from "./public-measures";
import { PublicMap } from "./public-map";

type Tab = "siste-nytt" | "tiltak" | "kart";

export function CrisisTabs({
  timelineEntries,
  measures,
  mapMarkers,
}: {
  timelineEntries: TimelineEntryData[];
  measures: MeasureData[];
  mapMarkers: MapMarkerData[];
}) {
  const hasMap = mapMarkers.length > 0;

  const tabs: { id: Tab; label: string }[] = [
    { id: "siste-nytt", label: "Siste nytt" },
    { id: "tiltak", label: "Tiltak" },
    ...(hasMap ? [{ id: "kart" as Tab, label: "Kart" }] : []),
  ];

  const [activeTab, setActiveTab] = useState<Tab>("siste-nytt");

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto">
        {activeTab === "siste-nytt" && (
          <PublicTimeline entries={timelineEntries} />
        )}
        {activeTab === "tiltak" && <PublicMeasures measures={measures} />}
        {activeTab === "kart" && hasMap && (
          <PublicMap markers={mapMarkers} />
        )}
      </div>

      <nav className="sticky bottom-0 flex border-t bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-t-2 border-blue-500 text-blue-600"
                : "text-muted-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
