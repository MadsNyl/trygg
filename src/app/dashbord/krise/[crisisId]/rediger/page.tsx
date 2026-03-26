"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import { CrisisForm } from "~/app/dashbord/krise/_components/crisis-form";
import { TimelineSection } from "~/app/dashbord/krise/_components/timeline-section";
import { MeasuresSection } from "~/app/dashbord/krise/_components/measures-section";
import { MapSection } from "~/app/dashbord/krise/_components/map-section";
import { Spinner } from "~/components/ui/spinner";
import { api } from "~/trpc/react";

export default function RedigerKrisePage() {
  const params = useParams<{ crisisId: string }>();
  const router = useRouter();
  const utils = api.useUtils();

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

  const updateCrisis = api.crisis.update.useMutation({
    onSuccess: () => {
      router.push("/dashbord");
      router.refresh();
    },
  });

  if (crisisLoading) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Spinner />
      </main>
    );
  }

  if (!crisis) {
    return (
      <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">Krise ikke funnet.</p>
      </main>
    );
  }

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

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/dashbord"
        className="text-muted-foreground hover:text-foreground mb-6 inline-block text-sm"
      >
        ← Tilbake til oversikt
      </Link>

      <h1 className="mb-1 text-xl font-semibold">Rediger krise</h1>
      <p className="text-muted-foreground mb-8 text-sm">
        Oppdater informasjon om krisesituasjonen.
      </p>

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

      <div className="mt-10 space-y-10 border-t pt-10">
        <TimelineSection
          crisisId={params.crisisId}
          userEtater={userEtater ?? []}
          entries={timelineEntries ?? []}
          onEntryAdded={() => {
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
        />

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
      </div>
    </main>
  );
}
