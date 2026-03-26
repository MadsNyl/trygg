"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { api } from "~/trpc/react";

const MapContent = dynamic(() => import("./map-content"), { ssr: false });

function MarkerList({
  markers,
  onRemove,
  isRemoving,
}: {
  markers: MapMarker[];
  onRemove: (id: string) => void;
  isRemoving: boolean;
}) {
  const [showRadius, setShowRadius] = useState(true);
  const [showShelter, setShowShelter] = useState(true);

  const radiusMarkers = markers.filter((m) => m.type === "RADIUS");
  const shelterMarkers = markers.filter((m) => m.type === "SHELTER");

  return (
    <div className="space-y-3">
      {radiusMarkers.length > 0 ? (
        <div>
          <button
            type="button"
            className="flex w-full items-center justify-between py-1 text-sm font-medium"
            onClick={() => setShowRadius((v) => !v)}
          >
            <span className="flex items-center gap-2">
              Faresoner
              <Badge variant="outline" className="bg-red-500/15 text-red-500 border-red-500/30">
                {radiusMarkers.length}
              </Badge>
            </span>
            <span className="text-muted-foreground">{showRadius ? "▲" : "▼"}</span>
          </button>
          {showRadius ? (
            <div className="mt-2 space-y-2">
              {radiusMarkers.map((marker) => (
                <MarkerRow key={marker.id} marker={marker} onRemove={onRemove} isRemoving={isRemoving} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {shelterMarkers.length > 0 ? (
        <div>
          <button
            type="button"
            className="flex w-full items-center justify-between py-1 text-sm font-medium"
            onClick={() => setShowShelter((v) => !v)}
          >
            <span className="flex items-center gap-2">
              Punkter
              <Badge variant="outline" className="bg-blue-500/15 text-blue-500 border-blue-500/30">
                {shelterMarkers.length}
              </Badge>
            </span>
            <span className="text-muted-foreground">{showShelter ? "▲" : "▼"}</span>
          </button>
          {showShelter ? (
            <div className="mt-2 space-y-2">
              {shelterMarkers.map((marker) => (
                <MarkerRow key={marker.id} marker={marker} onRemove={onRemove} isRemoving={isRemoving} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function MarkerRow({
  marker,
  onRemove,
  isRemoving,
}: {
  marker: MapMarker;
  onRemove: (id: string) => void;
  isRemoving: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="flex items-center gap-2">
        <div
          className="h-3 w-3 shrink-0 rounded-full"
          style={{ backgroundColor: marker.etat.themeColor }}
        />
        <span className="text-sm">{marker.label}</span>
        {marker.type === "RADIUS" && marker.radius ? (
          <span className="text-xs text-muted-foreground">{marker.radius}m</span>
        ) : null}
        {marker.type === "SHELTER" ? (
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:underline"
          >
            Åpne i Google Maps
          </a>
        ) : null}
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onRemove(marker.id)}
        disabled={isRemoving}
      >
        Fjern
      </Button>
    </div>
  );
}

type Etat = { id: string; title: string };

type MapMarker = {
  id: string;
  type: "RADIUS" | "SHELTER";
  label: string;
  lat: number;
  lng: number;
  radius: number | null;
  etat: { id: string; title: string; themeColor: string };
  createdBy: { id: string; name: string };
};

type PendingClick = { lat: number; lng: number };

export function MapSection({
  crisisId,
  userEtater,
  markers,
  onMarkersChanged,
}: {
  crisisId: string;
  userEtater: Etat[];
  markers: MapMarker[];
  onMarkersChanged: () => void;
}) {
  const [pendingClick, setPendingClick] = useState<PendingClick | null>(null);
  const [type, setType] = useState<"RADIUS" | "SHELTER">("RADIUS");
  const [label, setLabel] = useState("");
  const [radius, setRadius] = useState("500");
  const [etatId, setEtatId] = useState(userEtater[0]?.id ?? "");

  useEffect(() => {
    if (!etatId && userEtater[0]) setEtatId(userEtater[0].id);
  }, [userEtater, etatId]);

  const addMarker = api.crisis.addMapMarker.useMutation({
    onSuccess: () => {
      setPendingClick(null);
      setLabel("");
      setRadius("500");
      onMarkersChanged();
    },
    onError: (error) => {
      console.error("Failed to add marker:", error.message);
    },
  });

  const removeMarker = api.crisis.removeMapMarker.useMutation({
    onSuccess: () => {
      onMarkersChanged();
    },
  });

  const handleMapClick = (lat: number, lng: number) => {
    setPendingClick({ lat, lng });
  };

  const handleSubmit = () => {
    if (!pendingClick || !label.trim() || !etatId) return;

    addMarker.mutate({
      crisisId,
      type,
      label: label.trim(),
      lat: pendingClick.lat,
      lng: pendingClick.lng,
      radius: type === "RADIUS" ? parseInt(radius, 10) : undefined,
      etatId,
    });
  };

  const handleCancel = () => {
    setPendingClick(null);
    setLabel("");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold">Kart</h2>
      <p className="text-xs text-muted-foreground">
        Klikk på kartet for å legge til en markør.
      </p>

      <div className="overflow-hidden rounded-lg border" style={{ height: 400 }}>
        <MapContent
          markers={markers}
          pendingClick={pendingClick}
          pendingType={type}
          pendingRadius={type === "RADIUS" ? parseInt(radius, 10) || 500 : 0}
          onMapClick={handleMapClick}
          onRemoveMarker={(id) => removeMarker.mutate({ id })}
        />
      </div>

      {pendingClick ? (
        <div className="space-y-3 rounded-lg border p-4">
          <p className="text-sm font-medium">
            Ny markør ({pendingClick.lat.toFixed(5)}, {pendingClick.lng.toFixed(5)})
          </p>

          <ToggleGroup
            type="single"
            value={type}
            onValueChange={(v) => {
              if (v) setType(v as "RADIUS" | "SHELTER");
            }}
          >
            <ToggleGroupItem value="RADIUS" className="data-[state=on]:bg-red-500/15 data-[state=on]:text-red-500">
              Faresone
            </ToggleGroupItem>
            <ToggleGroupItem value="SHELTER" className="data-[state=on]:bg-blue-500/15 data-[state=on]:text-blue-500">
              Punkt
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex gap-2">
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder={type === "RADIUS" ? "Navn på faresone..." : "Navn på punkt (f.eks. Tilfluktsrom)..."}
              className="flex-1"
            />
            {type === "RADIUS" ? (
              <Input
                type="number"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                placeholder="Radius (meter)"
                className="w-32"
                min={1}
              />
            ) : null}
          </div>

          {userEtater.length > 1 ? (
            <Select value={etatId} onValueChange={setEtatId}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {userEtater.map((etat) => (
                  <SelectItem key={etat.id} value={etat.id}>
                    {etat.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCancel}
            >
              Avbryt
            </Button>
            <Button
              type="button"
              size="sm"
              disabled={!label.trim() || !etatId || addMarker.isPending}
              onClick={handleSubmit}
            >
              {addMarker.isPending ? "Legger til..." : "Legg til markør"}
            </Button>
          </div>
        </div>
      ) : null}

      {markers.length > 0 ? (
        <MarkerList
          markers={markers}
          onRemove={(id) => removeMarker.mutate({ id })}
          isRemoving={removeMarker.isPending}
        />
      ) : null}
    </div>
  );
}
