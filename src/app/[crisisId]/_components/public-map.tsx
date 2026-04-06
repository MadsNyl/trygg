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
      {markers.some((m) => m.type === "RADIUS") && (
        <div className="bg-muted/30 flex items-center gap-2 border-t px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/60 ring-2 ring-red-400/20" />
          <span className="text-muted-foreground text-sm font-medium">
            Sperret område
          </span>
        </div>
      )}
    </div>
  );
}
