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
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { api } from "~/trpc/react";

type Etat = { id: string; title: string };

type Measure = {
  id: string;
  text: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  createdAt: Date;
  etat: { id: string; title: string; themeColor: string };
  createdBy: { id: string; name: string };
};

const severityConfig = {
  LOW: { label: "Lav", className: "bg-green-500/15 text-green-500 border-green-500/30" },
  MEDIUM: { label: "Middels", className: "bg-amber-500/15 text-amber-500 border-amber-500/30" },
  HIGH: { label: "Høy", className: "bg-red-500/15 text-red-500 border-red-500/30" },
} as const;

export function MeasuresSection({
  crisisId,
  userEtater,
  measures,
  onMeasureAdded,
}: {
  crisisId: string;
  userEtater: Etat[];
  measures: Measure[];
  onMeasureAdded: () => void;
}) {
  const [text, setText] = useState("");
  const [severity, setSeverity] = useState<"LOW" | "MEDIUM" | "HIGH">("MEDIUM");
  const [etatId, setEtatId] = useState(userEtater[0]?.id ?? "");

  useEffect(() => {
    if (!etatId && userEtater[0]) setEtatId(userEtater[0].id);
  }, [userEtater, etatId]);

  const addMeasure = api.crisis.addMeasure.useMutation({
    onSuccess: () => {
      setText("");
      onMeasureAdded();
    },
  });

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold">Tiltak</h2>

      <div className="space-y-2">
        <div className="flex gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nytt tiltak..."
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
        </div>
        <div className="flex items-center justify-between">
          <ToggleGroup
            type="single"
            value={severity}
            onValueChange={(value) => {
              if (value) setSeverity(value as "LOW" | "MEDIUM" | "HIGH");
            }}
          >
            <ToggleGroupItem value="LOW" className="data-[state=on]:bg-green-500/15 data-[state=on]:text-green-500">
              Lav
            </ToggleGroupItem>
            <ToggleGroupItem value="MEDIUM" className="data-[state=on]:bg-amber-500/15 data-[state=on]:text-amber-500">
              Middels
            </ToggleGroupItem>
            <ToggleGroupItem value="HIGH" className="data-[state=on]:bg-red-500/15 data-[state=on]:text-red-500">
              Høy
            </ToggleGroupItem>
          </ToggleGroup>
          <Button
            type="button"
            disabled={!text.trim() || !etatId || addMeasure.isPending}
            onClick={() => {
              addMeasure.mutate({
                crisisId,
                text: text.trim(),
                severity,
                etatId,
              });
            }}
          >
            {addMeasure.isPending ? "Legger til..." : "Legg til"}
          </Button>
        </div>
      </div>

      {measures.length === 0 ? (
        <p className="text-sm text-muted-foreground">Ingen tiltak enda.</p>
      ) : (
        <div className="space-y-3">
          {measures.map((measure) => {
            const sev = severityConfig[measure.severity];
            return (
              <div
                key={measure.id}
                className="flex gap-3 rounded-lg border p-3"
              >
                <div
                  className="mt-1 h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: measure.etat.themeColor }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">{measure.text}</p>
                    <Badge variant="outline" className={sev.className}>
                      {sev.label}
                    </Badge>
                  </div>
                  <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-[0.625rem]">
                      {measure.etat.title}
                    </Badge>
                    <span>{measure.createdBy.name}</span>
                    <span>
                      {new Date(measure.createdAt).toLocaleString("nb-NO", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
