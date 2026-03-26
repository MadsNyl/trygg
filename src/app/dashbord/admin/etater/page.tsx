import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "~/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { Building01Icon } from "@hugeicons/core-free-icons";
import { CreateEtatDialog } from "~/app/dashbord/admin/etater/_components/create-etat-dialog";
import { getEtater } from "~/services/etater";

export default async function EtaterPage() {
  const etater = await getEtater();

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            Etater
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Administrer offentlige enheter
          </p>
        </div>

        <CreateEtatDialog />
      </div>

      {etater.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {etater.map((etat) => (
            <Card key={etat.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{ backgroundColor: etat.themeColor }}
                    aria-hidden="true"
                  />
                  <Link
                    href={`/dashbord/admin/etater/${etat.id}`}
                    className="hover:underline"
                  >
                    {etat.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">
                  {etat.contactEmail}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-1 text-sm">
                <p>Telefon: {etat.contactPhone}</p>
                <p>Medlemmer: {etat._count.users}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Empty className="py-20">
          <EmptyMedia>
            <HugeiconsIcon
              icon={Building01Icon}
              size={36}
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle className="text-base">Ingen etater enda</EmptyTitle>
            <EmptyDescription className="text-sm">
              Opprett den første etaten for å organisere brukere og
              krisehåndtering.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <CreateEtatDialog />
          </EmptyContent>
        </Empty>
      )}
    </main>
  );
}
