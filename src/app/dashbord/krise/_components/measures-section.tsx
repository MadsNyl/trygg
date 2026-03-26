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
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { formatDateTimeCompact } from "~/lib/format";
import { severityConfig, type Severity } from "~/lib/severity";
import { api } from "~/trpc/react";

type Etat = { id: string; title: string };

type Measure = {
  id: string;
  text: string;
  severity: Severity;
  createdAt: Date;
  etat: { id: string; title: string; themeColor: string };
  createdBy: { id: string; name: string };
};

export function MeasuresSection({
  crisisId,
  userEtater,
  measures,
  onMeasureAdded,
  onMeasureRemoved,
}: {
  crisisId: string;
  userEtater: Etat[];
  measures: Measure[];
  onMeasureAdded: () => void;
  onMeasureRemoved: () => void;
}) {
  const [text, setText] = useState("");
  const [severity, setSeverity] = useState<Severity>("MEDIUM");
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

  const removeMeasure = api.crisis.removeMeasure.useMutation({
    onSuccess: () => {
      onMeasureRemoved();
    },
  });

  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold">Tiltak</h3>

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
        <div className="flex items-center gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nytt tiltak..."
            className="h-10 min-w-0 flex-1 px-3 text-sm md:text-sm"
          />
          <ToggleGroup
            type="single"
            value={severity}
            onValueChange={(value) => {
              if (value) setSeverity(value as Severity);
            }}
          >
            <ToggleGroupItem
              value="LOW"
              className={`h-10 px-3 text-sm ${severityConfig.LOW.toggleActive}`}
            >
              Lav
            </ToggleGroupItem>
            <ToggleGroupItem
              value="MEDIUM"
              className={`h-10 px-3 text-sm ${severityConfig.MEDIUM.toggleActive}`}
            >
              Middels
            </ToggleGroupItem>
            <ToggleGroupItem
              value="HIGH"
              className={`h-10 px-3 text-sm ${severityConfig.HIGH.toggleActive}`}
            >
              Høy
            </ToggleGroupItem>
          </ToggleGroup>
          <Button
            type="button"
            disabled={!text.trim() || !etatId || addMeasure.isPending}
            className="h-10 px-5 text-sm"
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
        <p className="text-muted-foreground rounded-lg border border-dashed py-8 text-center text-sm">
          Ingen tiltak enda. Bruk feltet over for å legge til det første.
        </p>
      ) : (
        <div className="space-y-3">
          {measures.map((measure) => {
            const sev = severityConfig[measure.severity];
            return (
              <div
                key={measure.id}
                className="flex gap-3 rounded-lg border p-4"
              >
                <div
                  className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full"
                  style={{ backgroundColor: measure.etat.themeColor }}
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm leading-relaxed">{measure.text}</p>
                    <Badge variant="outline" className={sev.badge}>
                      {sev.label}
                    </Badge>
                  </div>
                  <div className="text-muted-foreground mt-1.5 flex items-center gap-2 text-xs">
                    <Badge variant="outline">{measure.etat.title}</Badge>
                    <span>{measure.createdBy.name}</span>
                    <span>
                      {formatDateTimeCompact(new Date(measure.createdAt))}
                    </span>
                  </div>
                </div>
                <RemoveButton
                  title="Fjerne tiltak?"
                  description={`Er du sikker på at du vil fjerne tiltaket "${measure.text}"?`}
                  isPending={removeMeasure.isPending}
                  onConfirm={() => removeMeasure.mutate({ id: measure.id })}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
