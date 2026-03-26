"use client";

import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  News01Icon,
  TaskEdit01Icon,
  MapsIcon,
} from "@hugeicons/core-free-icons";

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

  const tabs: { id: Tab; label: string; icon: typeof News01Icon }[] = [
    { id: "siste-nytt", label: "Siste nytt", icon: News01Icon },
    { id: "tiltak", label: "Tiltak", icon: TaskEdit01Icon },
    ...(hasMap
      ? [{ id: "kart" as Tab, label: "Kart", icon: MapsIcon }]
      : []),
  ];

  const [activeTab, setActiveTab] = useState<Tab>("siste-nytt");

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto">
        {activeTab === "siste-nytt" && (
          <PublicTimeline entries={timelineEntries} />
        )}
        {activeTab === "tiltak" && <PublicMeasures measures={measures} />}
        {activeTab === "kart" && hasMap && <PublicMap markers={mapMarkers} />}
      </div>

      <nav className="sticky bottom-0 flex border-t bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium transition-colors ${
              activeTab === tab.id
                ? "border-t-2 border-primary text-primary"
                : "text-muted-foreground"
            }`}
          >
            <HugeiconsIcon icon={tab.icon} size={18} />
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
