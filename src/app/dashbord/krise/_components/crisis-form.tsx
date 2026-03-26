"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Textarea } from "~/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { severityConfig, type Severity } from "~/lib/severity";

type CrisisFormValues = {
  title: string;
  description: string;
  what: string;
  how: string;
  when: string;
  severity: Severity;
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

const inputClass = "h-11 px-3 text-base md:text-base";
const textareaClass = "px-3 py-3 text-base md:text-base min-h-28";
const labelClass = "text-sm md:text-sm";

function parseDateFromWhen(when: string): Date | undefined {
  if (!when) return undefined;
  const d = new Date(when);
  return isNaN(d.getTime()) ? undefined : d;
}

function parseTimeFromWhen(when: string): string {
  if (!when) return "";
  const parts = when.split("T");
  return parts[1] ?? "";
}

function combineDateTime(date: Date | undefined, time: string): string {
  if (!date) return "";
  const dateStr = format(date, "yyyy-MM-dd");
  return time ? `${dateStr}T${time}` : `${dateStr}T00:00`;
}

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
  const [datePickerOpen, setDatePickerOpen] = useState(false);

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
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
        {/* Left column — primary fields */}
        <div className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="crisis-title" className={labelClass}>
              Tittel
            </Label>
            <Input
              id="crisis-title"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="Kort, beskrivende tittel..."
              className="h-12 px-4 text-lg font-medium md:text-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="crisis-description" className={labelClass}>
              Beskrivelse
            </Label>
            <Textarea
              id="crisis-description"
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Detaljert beskrivelse av situasjonen..."
              className={textareaClass}
              rows={4}
              required
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="crisis-what" className={labelClass}>
                Hva har skjedd
              </Label>
              <Input
                id="crisis-what"
                value={form.what}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, what: e.target.value }))
                }
                placeholder="Beskrivelse av hendelsen..."
                className={inputClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="crisis-how" className={labelClass}>
                Hvordan skjedde det
              </Label>
              <Input
                id="crisis-how"
                value={form.how}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, how: e.target.value }))
                }
                placeholder="Årsak og omstendigheter..."
                className={inputClass}
                required
              />
            </div>
          </div>
        </div>

        {/* Right column — metadata */}
        <div className="space-y-8 lg:border-l lg:pl-12">
          <div className="space-y-3">
            <Label id="crisis-severity-label" className={labelClass}>
              Alvorlighetsgrad
            </Label>
            <ToggleGroup
              type="single"
              value={form.severity}
              aria-labelledby="crisis-severity-label"
              onValueChange={(value) => {
                if (value) {
                  setForm((prev) => ({
                    ...prev,
                    severity: value as Severity,
                  }));
                }
              }}
              className="w-full"
            >
              <ToggleGroupItem
                value="LOW"
                className={`h-11 flex-1 text-sm ${severityConfig.LOW.toggleActive}`}
              >
                Lav
              </ToggleGroupItem>
              <ToggleGroupItem
                value="MEDIUM"
                className={`h-11 flex-1 text-sm ${severityConfig.MEDIUM.toggleActive}`}
              >
                Middels
              </ToggleGroupItem>
              <ToggleGroupItem
                value="HIGH"
                className={`h-11 flex-1 text-sm ${severityConfig.HIGH.toggleActive}`}
              >
                Høy
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <Label className={labelClass}>Tidspunkt</Label>
            <div className="flex gap-3">
              <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    id="crisis-when-date"
                    className="h-11 flex-1 justify-between px-3 text-sm font-normal"
                  >
                    {parseDateFromWhen(form.when)
                      ? format(parseDateFromWhen(form.when)!, "PPP", {
                          locale: nb,
                        })
                      : "Velg dato"}
                    <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    locale={nb}
                    selected={parseDateFromWhen(form.when)}
                    defaultMonth={parseDateFromWhen(form.when)}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      if (date) {
                        const time = parseTimeFromWhen(form.when) || "12:00";
                        setForm((prev) => ({
                          ...prev,
                          when: combineDateTime(date, time),
                        }));
                      }
                      setDatePickerOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
              <Input
                type="time"
                id="crisis-when-time"
                aria-label="Klokkeslett"
                value={parseTimeFromWhen(form.when)}
                onChange={(e) => {
                  const date = parseDateFromWhen(form.when);
                  setForm((prev) => ({
                    ...prev,
                    when: combineDateTime(date, e.target.value),
                  }));
                }}
                className="h-11 w-28 px-3 text-base md:text-base [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="crisis-location" className={labelClass}>
              Sted
            </Label>
            <Input
              id="crisis-location"
              value={form.location}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="F.eks. Trondheim"
              className={inputClass}
              required
            />
          </div>

          <div className="space-y-3">
            <div>
              <Label className={labelClass}>Redigeringstilgang</Label>
              <p className="text-muted-foreground mt-1 text-sm">
                Hvilke etater kan redigere denne krisen.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant={allEtaterSelected ? "default" : "outline"}
                className="h-9 px-4 text-sm"
                onClick={selectAllEtater}
              >
                Alle
              </Button>
              {etater.map((etat) => (
                <Button
                  key={etat.id}
                  type="button"
                  variant={
                    form.allowedEtaterIds.includes(etat.id)
                      ? "default"
                      : "outline"
                  }
                  className="h-9 px-4 text-sm"
                  onClick={() => toggleEtat(etat.id)}
                >
                  {etat.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-12 flex items-center justify-end gap-3 border-t pt-8">
        <Button
          type="button"
          variant="ghost"
          className="h-11 px-6 text-sm"
          onClick={() => router.push("/dashbord")}
        >
          Avbryt
        </Button>
        <Button
          type="submit"
          disabled={isPending}
          className="h-11 px-8 text-sm"
        >
          {isPending ? pendingLabel : submitLabel}
        </Button>
      </div>
    </form>
  );
}
