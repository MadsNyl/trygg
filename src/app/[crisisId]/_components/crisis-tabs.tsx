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
    ...(hasMap ? [{ id: "kart" as Tab, label: "Kart", icon: MapsIcon }] : []),
  ];

  const [activeTab, setActiveTab] = useState<Tab>("siste-nytt");

  return (
    <div>
      <nav
        role="tablist"
        aria-label="Krisedetaljer"
        className="bg-muted mb-8 flex gap-1 rounded-lg p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <HugeiconsIcon icon={tab.icon} size={16} />
            {tab.label}
          </button>
        ))}
      </nav>

      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="pb-12"
      >
        {activeTab === "siste-nytt" && (
          <PublicTimeline entries={timelineEntries} />
        )}
        {activeTab === "tiltak" && <PublicMeasures measures={measures} />}
        {activeTab === "kart" && hasMap && <PublicMap markers={mapMarkers} />}
      </div>
    </div>
  );
}
