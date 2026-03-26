"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue with webpack/next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

type MapMarker = {
  id: string;
  type: "RADIUS" | "SHELTER";
  label: string;
  lat: number;
  lng: number;
  radius: number | null;
  etat: { id: string; title: string; themeColor: string };
};

function ClickHandler({ onClick }: { onClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function FitBounds({ markers }: { markers: MapMarker[] }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 0) return;

    const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
  }, [markers, map]);

  return null;
}

export default function MapContent({
  markers,
  pendingClick,
  pendingType,
  pendingRadius,
  onMapClick,
  onRemoveMarker,
}: {
  markers: MapMarker[];
  pendingClick: { lat: number; lng: number } | null;
  pendingType: "RADIUS" | "SHELTER";
  pendingRadius: number;
  onMapClick: (lat: number, lng: number) => void;
  onRemoveMarker: (id: string) => void;
}) {
  return (
    <MapContainer
      center={[63.4, 10.4]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler onClick={onMapClick} />
      {markers.length > 0 ? <FitBounds markers={markers} /> : null}

      {markers.map((marker) =>
        marker.type === "RADIUS" && marker.radius ? (
          <Circle
            key={marker.id}
            center={[marker.lat, marker.lng]}
            radius={marker.radius}
            pathOptions={{
              color: marker.etat.themeColor,
              fillColor: marker.etat.themeColor,
              fillOpacity: 0.15,
            }}
          >
            <Popup>
              <div className="space-y-1">
                <p className="font-medium">{marker.label}</p>
                <p className="text-xs text-gray-500">
                  {marker.etat.title} · {marker.radius}m radius
                </p>
                <button
                  onClick={() => onRemoveMarker(marker.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Fjern
                </button>
              </div>
            </Popup>
          </Circle>
        ) : (
          <Marker key={marker.id} position={[marker.lat, marker.lng]}>
            <Popup>
              <div className="space-y-1">
                <p className="font-medium">{marker.label}</p>
                <p className="text-xs text-gray-500">{marker.etat.title}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline"
                >
                  Åpne i Google Maps
                </a>
                <br />
                <button
                  onClick={() => onRemoveMarker(marker.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Fjern
                </button>
              </div>
            </Popup>
          </Marker>
        ),
      )}

      {pendingClick ? (
        pendingType === "RADIUS" ? (
          <Circle
            center={[pendingClick.lat, pendingClick.lng]}
            radius={pendingRadius}
            pathOptions={{
              color: "#ef4444",
              fillColor: "#ef4444",
              fillOpacity: 0.1,
              dashArray: "5 5",
            }}
          />
        ) : (
          <Marker position={[pendingClick.lat, pendingClick.lng]} opacity={0.6} />
        )
      ) : null}
    </MapContainer>
  );
}
