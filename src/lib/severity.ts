export type Severity = "LOW" | "MEDIUM" | "HIGH";

export const severityConfig = {
  LOW: {
    label: "Lav",
    labelLong: "Lav alvorlighet",
    badge: "bg-green-500/15 text-green-700 border-green-500/30",
    border: "border-l-green-500",
    topBorder: "border-t-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600",
    toggleActive:
      "data-[state=on]:bg-green-500/15 data-[state=on]:text-green-700",
  },
  MEDIUM: {
    label: "Middels",
    labelLong: "Middels alvorlighet",
    badge: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    border: "border-l-amber-500",
    topBorder: "border-t-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    iconColor: "text-amber-600",
    toggleActive:
      "data-[state=on]:bg-amber-500/15 data-[state=on]:text-amber-700",
  },
  HIGH: {
    label: "Høy",
    labelLong: "Høy alvorlighet",
    badge: "bg-red-500/15 text-red-700 border-red-500/30",
    border: "border-l-red-500",
    topBorder: "border-t-red-500",
    bg: "bg-red-50 dark:bg-red-950/30",
    iconColor: "text-red-600",
    toggleActive: "data-[state=on]:bg-red-500/15 data-[state=on]:text-red-700",
  },
} as const;
