import Link from "next/link";
import { redirect } from "next/navigation";

import { HugeiconsIcon } from "@hugeicons/react";
import { ShieldKeyIcon } from "@hugeicons/core-free-icons";

import { Button } from "~/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";
import { LoggUtKnapp } from "~/app/venter-verifisering/_components/logg-ut-knapp";
import { getSession } from "~/server/better-auth/server";

export default async function VenterVerifiseringSide() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/logg-inn");
  }

  if (session.user.isVerified === true) {
    redirect("/dashbord");
  }

  return (
    <main className="bg-background min-h-screen">
      <header className="bg-background border-b">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 lg:px-0">
          <div>
            <h1 className="font-heading text-xl font-bold tracking-tight">
              trygg
            </h1>
          </div>
          <nav className="hidden items-center gap-3 sm:flex">
            <Button asChild variant="outline" className="h-9 px-4 text-sm">
              <Link href="/">Til forsiden</Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-0 lg:py-10">
        <Empty className="py-20">
          <EmptyMedia>
            <HugeiconsIcon
              icon={ShieldKeyIcon}
              size={36}
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle className="text-base">
              Venter på verifisering
            </EmptyTitle>
            <EmptyDescription className="text-sm">
              Kontoen din må verifiseres av en administrator før du får tilgang
              til etatsverktøyene. Du kan fortsatt se den offentlige
              kriseoversikten.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <LoggUtKnapp />
          </EmptyContent>
        </Empty>
      </div>
    </main>
  );
}
