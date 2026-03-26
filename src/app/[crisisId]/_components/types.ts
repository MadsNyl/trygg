export type TimelineEntryData = {
  id: string;
  text: string;
  createdAt: Date;
  etat: { id: string; title: string; themeColor: string };
};

export type MeasureData = {
  id: string;
  text: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  etat: { id: string; title: string; themeColor: string };
};

export type MapMarkerData = {
  id: string;
  type: "RADIUS" | "SHELTER";
  label: string;
  lat: number;
  lng: number;
  radius: number | null;
  etat: { id: string; title: string; themeColor: string };
};

export type CrisisDetailData = {
  id: string;
  title: string;
  description: string;
  what: string;
  how: string;
  when: Date;
  severity: "LOW" | "MEDIUM" | "HIGH";
  location: string | null;
  timelineEntries: TimelineEntryData[];
  measures: MeasureData[];
  mapMarkers: MapMarkerData[];
};
