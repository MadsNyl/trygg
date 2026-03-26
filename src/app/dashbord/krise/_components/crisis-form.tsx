"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

type CrisisFormValues = {
  title: string;
  description: string;
  what: string;
  how: string;
  when: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  location: string;
  allowedEtaterIds: string[];
};

type Etat = {
  id: string;
  title: string;
};

type CrisisFormProps = {
  etater: Etat[];
  defaultValues?: CrisisFormValues;
  onSubmit: (values: CrisisFormValues) => void;
  isPending: boolean;
  submitLabel: string;
  pendingLabel: string;
};

const defaultInitialValues: CrisisFormValues = {
  title: "",
  description: "",
  what: "",
  how: "",
  when: "",
  severity: "LOW",
  location: "",
  allowedEtaterIds: [],
};

export function CrisisForm({
  etater,
  defaultValues,
  onSubmit,
  isPending,
  submitLabel,
  pendingLabel,
}: CrisisFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<CrisisFormValues>(
    defaultValues ?? defaultInitialValues,
  );

  const allEtaterSelected = form.allowedEtaterIds.length === 0;

  const toggleEtat = (etatId: string) => {
    setForm((prev) => {
      const ids = prev.allowedEtaterIds.includes(etatId)
        ? prev.allowedEtaterIds.filter((id) => id !== etatId)
        : [...prev.allowedEtaterIds, etatId];
      return { ...prev, allowedEtaterIds: ids };
    });
  };

  const selectAllEtater = () => {
    setForm((prev) => ({ ...prev, allowedEtaterIds: [] }));
  };

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      {/* Grunnleggende */}
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Tittel</label>
          <Input
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Kort, beskrivende tittel..."
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Beskrivelse</label>
          <Textarea
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Detaljert beskrivelse av situasjonen..."
            rows={3}
            required
          />
        </div>
      </div>

      {/* Detaljer */}
      <div className="space-y-4 border-t pt-6">
        <h2 className="text-sm font-semibold">Detaljer</h2>

        <div className="space-y-1">
          <label className="text-sm font-medium">Hva</label>
          <Input
            value={form.what}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, what: e.target.value }))
            }
            placeholder="Hva har skjedd..."
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Hvordan</label>
          <Input
            value={form.how}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, how: e.target.value }))
            }
            placeholder="Hvordan skjedde det..."
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Når</label>
            <Input
              type="datetime-local"
              value={form.when}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, when: e.target.value }))
              }
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Alvorlighetsgrad</label>
            <ToggleGroup
              type="single"
              value={form.severity}
              onValueChange={(value) => {
                if (value) {
                  setForm((prev) => ({
                    ...prev,
                    severity: value as "LOW" | "MEDIUM" | "HIGH",
                  }));
                }
              }}
              className="justify-start"
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
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Sted</label>
          <Input
            value={form.location}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="F.eks. Trondheim"
            required
          />
        </div>
      </div>

      {/* Tilgang */}
      <div className="space-y-4 border-t pt-6">
        <div>
          <h2 className="text-sm font-semibold">Redigeringstilgang</h2>
          <p className="text-xs text-muted-foreground">
            Velg hvilke etater som kan redigere denne krisen. Standard er alle.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant={allEtaterSelected ? "default" : "outline"}
            size="sm"
            onClick={selectAllEtater}
          >
            Alle etater
          </Button>
          {etater.map((etat) => (
            <Button
              key={etat.id}
              type="button"
              variant={
                form.allowedEtaterIds.includes(etat.id) ? "default" : "outline"
              }
              size="sm"
              onClick={() => toggleEtat(etat.id)}
            >
              {etat.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 border-t pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/dashbord")}
        >
          Avbryt
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? pendingLabel : submitLabel}
        </Button>
      </div>
    </form>
  );
}
