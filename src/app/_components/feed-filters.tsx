"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { Input } from "~/components/ui/input";

type FeedFiltersProps = {
  locations: string[];
};

export function FeedFilters({ locations }: FeedFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <div className="space-y-3 bg-white px-4 pb-4">
      <Input
        placeholder="Søk etter krise..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => updateParams("q", e.target.value)}
      />
      <div className="flex gap-2">
        <select
          className="flex-1 rounded-md border bg-white px-3 py-2 text-sm"
          defaultValue={searchParams.get("severity") ?? ""}
          onChange={(e) => updateParams("severity", e.target.value)}
        >
          <option value="">Alle alvorlighetsgrader</option>
          <option value="HIGH">Høy</option>
          <option value="MEDIUM">Middels</option>
          <option value="LOW">Lav</option>
        </select>
        <select
          className="flex-1 rounded-md border bg-white px-3 py-2 text-sm"
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
