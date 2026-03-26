import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { CreateEtatDialog } from "~/app/dashbord/admin/etater/_components/create-etat-dialog";
import { getEtater } from "~/services/etater";

export default async function EtaterPage() {
  const etater = await getEtater();

  return (
    <main className="min-h-[calc(100vh-11.5rem)] space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Etater</h1>
          <p className="text-muted-foreground text-xs">
            Administrer offentlige enheter
          </p>
        </div>

        <CreateEtatDialog />
      </div>

      {etater.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {etater.map((etat) => (
            <Card key={etat.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: etat.themeColor }}
                  />
                  <Link
                    href={`/dashbord/admin/etater/${etat.id}`}
                    className="hover:underline"
                  >
                    {etat.title}
                  </Link>
                </CardTitle>
                <CardDescription>{etat.contactEmail}</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-1 text-xs">
                <p>Telefon: {etat.contactPhone}</p>
                <p>Medlemmer: {etat._count.users}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">
          Ingen etater opprettet enda.
        </p>
      )}
    </main>
  );
}
