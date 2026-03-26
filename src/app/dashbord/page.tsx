import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "~/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, ShieldKeyIcon } from "@hugeicons/core-free-icons";
import { CrisisCard } from "~/app/dashbord/_components/crisis-card";
import { getCrises } from "~/services/crisis";
import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";

export default async function DashbordPage() {
  const session = await getSession();

  const user = session?.user
    ? await db.user.findUnique({
        where: { id: session.user.id },
        select: { isVerified: true, etater: { select: { id: true } } },
      })
    : null;

  const isEtatMember = user?.isVerified && (user.etater.length ?? 0) > 0;
  const userEtatIds = user?.etater.map((e) => e.id) ?? [];

  const crises =
    isEtatMember && session?.user
      ? await getCrises(session.user.id, userEtatIds)
      : [];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          Kriseoversikt
        </h1>
        {isEtatMember ? (
          <Button asChild className="h-10 px-5 text-sm">
            <Link href="/dashbord/krise/ny">Ny krise</Link>
          </Button>
        ) : null}
      </div>

      {!isEtatMember ? (
        <Empty className="py-20">
          <EmptyMedia>
            <HugeiconsIcon
              icon={ShieldKeyIcon}
              size={36}
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle className="text-base">Venter på tilgang</EmptyTitle>
            <EmptyDescription className="text-sm">
              Kontoen din må verifiseres og knyttes til en etat av en
              administrator før du kan se og opprette kriser.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : crises.length === 0 ? (
        <Empty className="py-20">
          <EmptyMedia>
            <HugeiconsIcon
              icon={Alert02Icon}
              size={36}
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle className="text-base">Ingen kriser enda</EmptyTitle>
            <EmptyDescription className="text-sm">
              Opprett din første krise for å komme i gang.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button asChild className="h-10 px-5 text-sm">
              <Link href="/dashbord/krise/ny">Opprett ny krise</Link>
            </Button>
          </EmptyContent>
        </Empty>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {crises.map((crisis) => (
            <CrisisCard key={crisis.id} crisis={crisis} />
          ))}
        </div>
      )}
    </main>
  );
}
