"use client";

import { useRouter } from "next/navigation";

import { CrisisForm } from "~/app/dashbord/krise/_components/crisis-form";
import { api } from "~/trpc/react";

export default function NyKrisePage() {
  const router = useRouter();

  const { data: etater } = api.crisis.listEtater.useQuery();

  const createCrisis = api.crisis.create.useMutation({
    onSuccess: (data) => {
      router.push(`/dashbord/krise/${data.id}/rediger`);
      router.refresh();
    },
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-10">
      <div className="mb-12">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Opprett ny krise
        </h1>
        <p className="text-muted-foreground mt-2 text-base">
          Registrer en ny krisesituasjon og publiser informasjon til innbyggere.
        </p>
      </div>

      <CrisisForm
        etater={etater ?? []}
        onSubmit={(values) => {
          createCrisis.mutate({
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
        isPending={createCrisis.isPending}
        submitLabel="Opprett krise"
        pendingLabel="Oppretter..."
      />
    </main>
  );
}
