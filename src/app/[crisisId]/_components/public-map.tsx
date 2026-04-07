"use client";

import dynamic from "next/dynamic";

import type { MapMarkerData } from "./types";

const PublicMapContent = dynamic(() => import("./public-map-content"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <p className="text-muted-foreground text-sm">Laster kart...</p>
    </div>
  ),
});

export function PublicMap({ markers }: { markers: MapMarkerData[] }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="h-[50vh] min-h-[320px]">
        <PublicMapContent markers={markers} />
      </div>
      {markers.length > 0 && (
        <ul className="bg-muted/30 divide-border/60 divide-y border-t">
          {markers.map((marker) => (
            <li
              key={marker.id}
              className="flex items-center gap-2 px-4 py-2.5"
            >
              {marker.type === "RADIUS" ? (
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-full bg-red-400/60 ring-2 ring-red-400/20"
                />
              ) : (
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-full bg-blue-500 ring-2 ring-blue-500/20"
                />
              )}
              <span className="text-sm font-medium">{marker.label}</span>
              <span className="text-muted-foreground text-xs">
                {marker.type === "RADIUS" ? "Sperret område" : "Punkt"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
