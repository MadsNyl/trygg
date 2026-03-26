"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import { CrisisForm } from "~/app/dashbord/krise/_components/crisis-form";
import { Spinner } from "~/components/ui/spinner";
import { api } from "~/trpc/react";

export default function RedigerKrisePage() {
  const params = useParams<{ crisisId: string }>();
  const router = useRouter();

  const { data: crisis, isLoading: crisisLoading } =
    api.crisis.getById.useQuery({ id: params.crisisId });

  const { data: etater } = api.crisis.listEtater.useQuery();

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
        <p className="text-sm text-muted-foreground">Krise ikke funnet.</p>
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
    allowedEtaterIds: crisis.allowedEtater.map((e) => e.id),
  };

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/dashbord"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Tilbake til oversikt
      </Link>

      <h1 className="mb-1 text-xl font-semibold">Rediger krise</h1>
      <p className="mb-8 text-sm text-muted-foreground">
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
    </main>
  );
}
