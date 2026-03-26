import Link from "next/link";
import { notFound } from "next/navigation";

import { AddEtatUserDialog } from "~/app/dashbord/admin/etater/_components/add-etat-user-dialog";
import { EditEtatDialog } from "~/app/dashbord/admin/etater/_components/edit-etat-dialog";
import { RemoveEtatUserButton } from "~/app/dashbord/admin/etater/_components/remove-etat-user-button";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { getEtatDetails } from "~/services/etater";

type EtatDetailsPageProps = {
  params: Promise<{
    etatId: string;
  }>;
};

export default async function EtatDetailsPage({
  params,
}: EtatDetailsPageProps) {
  const { etatId } = await params;
  const etat = await getEtatDetails(etatId);

  if (!etat) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild className="h-10 px-5 text-sm">
          <Link href="/dashbord/admin/etater">Tilbake til etater</Link>
        </Button>

        <EditEtatDialog
          etat={{
            id: etat.id,
            title: etat.title,
            contactPhone: etat.contactPhone,
            contactEmail: etat.contactEmail,
            themeColor: etat.themeColor,
          }}
        />
      </div>

      <div className="space-y-1">
        <h1 className="font-heading flex items-center gap-2 text-2xl font-bold tracking-tight">
          <span
            className="h-4 w-4 shrink-0 rounded-full"
            style={{ backgroundColor: etat.themeColor }}
            aria-hidden="true"
          />
          {etat.title}
        </h1>
        <p className="text-muted-foreground text-sm">{etat.contactEmail}</p>
        <p className="text-muted-foreground text-sm">
          Telefon: {etat.contactPhone}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">
          Medlemmer ({etat._count.users})
        </h2>
        <AddEtatUserDialog etatId={etat.id} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Navn</TableHead>
            <TableHead className="text-sm">E-post</TableHead>
            <TableHead className="text-sm">Handling</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {etat.users.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={3}
                className="text-muted-foreground py-8 text-center text-sm"
              >
                Ingen medlemmer ennå.
              </TableCell>
            </TableRow>
          ) : (
            etat.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="text-sm">{user.name}</TableCell>
                <TableCell className="text-sm">{user.email}</TableCell>
                <TableCell>
                  <RemoveEtatUserButton etatId={etat.id} userId={user.id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </main>
  );
}
