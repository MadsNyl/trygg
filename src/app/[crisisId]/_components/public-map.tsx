"use client";

import dynamic from "next/dynamic";

import type { MapMarkerData } from "./types";

const PublicMapContent = dynamic(() => import("./public-map-content"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <p className="text-sm text-muted-foreground">Laster kart...</p>
    </div>
  ),
});

export function PublicMap({ markers }: { markers: MapMarkerData[] }) {
  return (
    <div className="flex flex-col">
      <div className="h-[60vh]">
        <PublicMapContent markers={markers} />
      </div>
      {markers.some((m) => m.type === "RADIUS") && (
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-300" />
          <span className="text-sm text-muted-foreground">
            Sperret område — hold deg unna
          </span>
        </div>
      )}
    </div>
  );
}
