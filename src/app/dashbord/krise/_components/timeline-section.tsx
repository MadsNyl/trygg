"use client";

import { useEffect, useState } from "react";

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
}: {
  crisisId: string;
  userEtater: Etat[];
  entries: TimelineEntry[];
  onEntryAdded: () => void;
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

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold">Tidslinje</h2>

      <div className="flex gap-2">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ny oppdatering..."
          className="flex-1"
        />
        {userEtater.length > 1 ? (
          <Select value={etatId} onValueChange={setEtatId}>
            <SelectTrigger className="w-40">
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
        <Button
          type="button"
          disabled={!text.trim() || !etatId || addEntry.isPending}
          onClick={() => {
            addEntry.mutate({ crisisId, text: text.trim(), etatId });
          }}
        >
          {addEntry.isPending ? "Legger til..." : "Legg til"}
        </Button>
      </div>

      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Ingen oppdateringer enda.
        </p>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="flex gap-3 rounded-lg border p-3"
            >
              <div
                className="mt-1 h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: entry.etat.themeColor }}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm">{entry.text}</p>
                <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-[0.625rem]">
                    {entry.etat.title}
                  </Badge>
                  <span>{entry.createdBy.name}</span>
                  <span>
                    {new Date(entry.createdAt).toLocaleString("nb-NO", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
