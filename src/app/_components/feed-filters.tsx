"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

type FeedFiltersProps = {
  locations: string[];
};

const selectClass =
  "border-input bg-background h-10 rounded-md border px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30";

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

  const hasFilters =
    searchParams.get("q") ??
    searchParams.get("severity") ??
    searchParams.get("location");

  const clearFilters = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="space-y-3">
      <Input
        placeholder="Søk etter krise..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => debouncedUpdateParams("q", e.target.value)}
        className="h-10 px-3 text-sm md:text-sm"
      />
      <div className="grid grid-cols-2 gap-3">
        <select
          aria-label="Filtrer etter alvorlighetsgrad"
          className={`${selectClass} w-full`}
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
          className={`${selectClass} w-full`}
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
      {hasFilters ? (
        <Button
          variant="ghost"
          onClick={clearFilters}
          className="h-10 px-4 text-sm"
        >
          Nullstill
        </Button>
      ) : null}
    </div>
  );
}
