"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { CrisisForm } from "~/app/dashbord/krise/_components/crisis-form";
import { TimelineSection } from "~/app/dashbord/krise/_components/timeline-section";
import { MeasuresSection } from "~/app/dashbord/krise/_components/measures-section";
import { MapSection } from "~/app/dashbord/krise/_components/map-section";
import { Spinner } from "~/components/ui/spinner";
import { severityConfig } from "~/lib/severity";
import { api } from "~/trpc/react";

type Tab = "generelt" | "oppdateringer" | "kart";

export default function RedigerKrisePage() {
  const params = useParams<{ crisisId: string }>();
  const router = useRouter();
  const utils = api.useUtils();

  const [activeTab, setActiveTab] = useState<Tab>("generelt");

  const { data: crisis, isLoading: crisisLoading } =
    api.crisis.getById.useQuery({ id: params.crisisId });

  const { data: etater } = api.crisis.listEtater.useQuery();

  const { data: timelineEntries } = api.crisis.listTimelineEntries.useQuery({
    crisisId: params.crisisId,
  });

  const { data: measures } = api.crisis.listMeasures.useQuery({
    crisisId: params.crisisId,
  });

  const { data: userEtater } = api.crisis.listEtater.useQuery();

  const { data: mapMarkers } = api.crisis.listMapMarkers.useQuery({
    crisisId: params.crisisId,
  });

  const [deleteOpen, setDeleteOpen] = useState(false);

  const updateCrisis = api.crisis.update.useMutation({
    onSuccess: () => {
      router.push("/dashbord");
      router.refresh();
    },
  });

  const deleteCrisis = api.crisis.delete.useMutation({
    onSuccess: () => {
      router.push("/dashbord");
      router.refresh();
    },
  });

  if (crisisLoading) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Spinner className="size-6" />
      </main>
    );
  }

  if (!crisis) {
    return (
      <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-10">
        <p className="text-muted-foreground text-base">Krise ikke funnet.</p>
        <Button asChild variant="outline" className="mt-4 h-11 px-6 text-sm">
          <Link href="/dashbord">Tilbake til oversikt</Link>
        </Button>
      </main>
    );
  }

  const severity = severityConfig[crisis.severity];

  const defaultValues = {
    title: crisis.title,
    description: crisis.description,
    what: crisis.what,
    how: crisis.how,
    when: new Date(crisis.when).toISOString().slice(0, 16),
    severity: crisis.severity,
    location: crisis.location ?? "",
    allowedEtaterIds: crisis.allowedEtater.map((e) => e.id),
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "generelt", label: "Generelt" },
    { id: "oppdateringer", label: "Oppdateringer og tiltak" },
    { id: "kart", label: "Kart" },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-10">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h1 className="font-heading text-3xl font-bold tracking-tight">
              {crisis.title}
            </h1>
            <Badge
              variant="outline"
              className={`px-3 py-1 text-sm ${severity.badge}`}
            >
              {severity.label}
            </Badge>
          </div>
          <p className="text-muted-foreground text-base">
            Oppdater kriseinformasjon, legg til oppdateringer og tiltak.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Button asChild variant="outline" className="h-11 px-6 text-sm">
            <Link href={`/${params.crisisId}`} target="_blank">
              Se offentlig side
            </Link>
          </Button>

          <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive" className="h-11 px-6 text-sm">
                Slett krise
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-xl">Slette krise?</DialogTitle>
                <DialogDescription className="text-sm">
                  Er du sikker på at du vil slette &ldquo;{crisis.title}
                  &rdquo;? Alle oppdateringer, tiltak og kartmarkører vil også
                  bli slettet. Handlingen kan ikke angres.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="h-10 px-5 text-sm">
                    Avbryt
                  </Button>
                </DialogClose>
                <Button
                  variant="destructive"
                  disabled={deleteCrisis.isPending}
                  className="h-10 px-5 text-sm"
                  onClick={() => {
                    deleteCrisis.mutate({ id: params.crisisId });
                  }}
                >
                  {deleteCrisis.isPending ? "Sletter..." : "Slett krise"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Tabs */}
      <nav
        role="tablist"
        aria-label="Kriseredigering"
        className="mb-10 flex border-b"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 px-5 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab panels */}
      {activeTab === "generelt" && (
        <section>
          <CrisisForm
            etater={etater ?? []}
            defaultValues={defaultValues}
            onSubmit={(values) => {
              updateCrisis.mutate({
                id: params.crisisId,
                title: values.title,
                description: values.description,
                what: values.what,
                how: values.how,
                when: new Date(values.when),
                severity: values.severity,
                location: values.location,
                allowedEtaterIds:
                  values.allowedEtaterIds.length > 0
                    ? values.allowedEtaterIds
                    : undefined,
              });
            }}
            isPending={updateCrisis.isPending}
            submitLabel="Lagre endringer"
            pendingLabel="Lagrer..."
          />
        </section>
      )}

      {activeTab === "oppdateringer" && (
        <div className="grid gap-12 lg:grid-cols-2">
          <TimelineSection
            crisisId={params.crisisId}
            userEtater={userEtater ?? []}
            entries={timelineEntries ?? []}
            onEntryAdded={() => {
              void utils.crisis.listTimelineEntries.invalidate({
                crisisId: params.crisisId,
              });
            }}
            onEntryRemoved={() => {
              void utils.crisis.listTimelineEntries.invalidate({
                crisisId: params.crisisId,
              });
            }}
          />

          <MeasuresSection
            crisisId={params.crisisId}
            userEtater={userEtater ?? []}
            measures={measures ?? []}
            onMeasureAdded={() => {
              void utils.crisis.listMeasures.invalidate({
                crisisId: params.crisisId,
              });
            }}
            onMeasureRemoved={() => {
              void utils.crisis.listMeasures.invalidate({
                crisisId: params.crisisId,
              });
            }}
          />
        </div>
      )}

      {activeTab === "kart" && (
        <MapSection
          crisisId={params.crisisId}
          userEtater={userEtater ?? []}
          markers={mapMarkers ?? []}
          onMarkersChanged={() => {
            void utils.crisis.listMapMarkers.invalidate({
              crisisId: params.crisisId,
            });
          }}
        />
      )}
    </main>
  );
}
