"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/dashbord"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Tilbake til oversikt
      </Link>

      <h1 className="mb-1 text-xl font-semibold">Opprett ny krise</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Fyll inn informasjon om krisesituasjonen.
      </p>

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
