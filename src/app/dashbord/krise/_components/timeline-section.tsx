"use client";

import { useEffect, useState } from "react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { RemoveButton } from "./remove-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { formatDateTimeCompact } from "~/lib/format";
import { api } from "~/trpc/react";

type Etat = { id: string; title: string };

type TimelineEntry = {
  id: string;
  text: string;
  createdAt: Date;
  etat: { id: string; title: string; themeColor: string };
  createdBy: { id: string; name: string };
};

export function TimelineSection({
  crisisId,
  userEtater,
  entries,
  onEntryAdded,
  onEntryRemoved,
}: {
  crisisId: string;
  userEtater: Etat[];
  entries: TimelineEntry[];
  onEntryAdded: () => void;
  onEntryRemoved: () => void;
}) {
  const [text, setText] = useState("");
  const [etatId, setEtatId] = useState(userEtater[0]?.id ?? "");

  useEffect(() => {
    if (!etatId && userEtater[0]) setEtatId(userEtater[0].id);
  }, [userEtater, etatId]);

  const addEntry = api.crisis.addTimelineEntry.useMutation({
    onSuccess: () => {
      setText("");
      onEntryAdded();
    },
  });

  const removeEntry = api.crisis.removeTimelineEntry.useMutation({
    onSuccess: () => {
      onEntryRemoved();
    },
  });

  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold">Tidslinje</h3>

      <div className="space-y-3">
        {userEtater.length > 1 ? (
          <Select value={etatId} onValueChange={setEtatId}>
            <SelectTrigger className="h-10 w-48 text-sm">
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
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ny oppdatering..."
            className="h-10 flex-1 px-3 text-sm md:text-sm"
          />
          <Button
            type="button"
            disabled={!text.trim() || !etatId || addEntry.isPending}
            className="h-10 px-5 text-sm"
            onClick={() => {
              addEntry.mutate({ crisisId, text: text.trim(), etatId });
            }}
          >
            {addEntry.isPending ? "Legger til..." : "Legg til"}
          </Button>
        </div>
      </div>

      {entries.length === 0 ? (
        <p className="text-muted-foreground rounded-lg border border-dashed py-8 text-center text-sm">
          Ingen oppdateringer enda. Bruk feltet over for å legge til den første.
        </p>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <div key={entry.id} className="flex gap-3 rounded-lg border p-4">
              <div
                className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: entry.etat.themeColor }}
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-relaxed">{entry.text}</p>
                <div className="text-muted-foreground mt-1.5 flex items-center gap-2 text-xs">
                  <Badge variant="outline">{entry.etat.title}</Badge>
                  <span>{entry.createdBy.name}</span>
                  <span>
                    {formatDateTimeCompact(new Date(entry.createdAt))}
                  </span>
                </div>
              </div>
              <RemoveButton
                title="Fjerne oppdatering?"
                description={`Er du sikker på at du vil fjerne oppdateringen "${entry.text}"?`}
                isPending={removeEntry.isPending}
                onConfirm={() => removeEntry.mutate({ id: entry.id })}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
