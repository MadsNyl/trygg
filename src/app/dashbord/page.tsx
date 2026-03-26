import Link from "next/link";

import { Button } from "~/components/ui/button";
import { CrisisCard } from "~/app/dashbord/_components/crisis-card";
import { getCrises } from "~/services/crisis";
import { getSession } from "~/server/better-auth/server";
import { redirect } from "next/navigation";
import { db } from "~/server/db";

export default async function DashbordPage() {
  const session = await getSession();
  if (!session?.user) redirect("/logg-inn");

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { isVerified: true, etater: { select: { id: true } } },
  });

  const isEtatMember = user?.isVerified && (user.etater.length ?? 0) > 0;
  const userEtatIds = user?.etater.map((e) => e.id) ?? [];

  const crises = isEtatMember
    ? await getCrises(session.user.id, userEtatIds)
    : [];

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Kriseoversikt</h1>
        {isEtatMember ? (
          <Button asChild>
            <Link href="/dashbord/krise/ny">Ny krise</Link>
          </Button>
        ) : null}
      </div>

      {!isEtatMember ? (
        <p className="text-sm text-muted-foreground">
          Du må være verifisert og medlem av en etat for å se kriser.
        </p>
      ) : crises.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Ingen kriser opprettet enda.
        </p>
      ) : (
        <div className="space-y-4">
          {crises.map((crisis) => (
            <CrisisCard key={crisis.id} crisis={crisis} />
          ))}
        </div>
      )}
    </main>
  );
}
