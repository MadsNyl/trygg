"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

import { Input } from "~/components/ui/input";

type FeedFiltersProps = {
  locations: string[];
};

const selectClass =
  "border-input bg-input/20 h-10 rounded-md border px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30";

export function FeedFilters({ locations }: FeedFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/?${params.toString()}`);
    },
    [router, searchParams],
  );

  const debouncedUpdateParams = useCallback(
    (key: string, value: string) => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => updateParams(key, value), 300);
    },
    [updateParams],
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Input
        placeholder="Søk etter krise..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => debouncedUpdateParams("q", e.target.value)}
        className="h-10 px-3 text-sm sm:flex-1 md:text-sm"
      />
      <div className="grid grid-cols-2 gap-2 sm:flex">
        <select
          aria-label="Filtrer etter alvorlighetsgrad"
          className={selectClass}
          defaultValue={searchParams.get("severity") ?? ""}
          onChange={(e) => updateParams("severity", e.target.value)}
        >
          <option value="">Alvorlighetsgrad</option>
          <option value="HIGH">Høy</option>
          <option value="MEDIUM">Middels</option>
          <option value="LOW">Lav</option>
        </select>
        <select
          aria-label="Filtrer etter sted"
          className={selectClass}
          defaultValue={searchParams.get("location") ?? ""}
          onChange={(e) => updateParams("location", e.target.value)}
        >
          <option value="">Alle steder</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
