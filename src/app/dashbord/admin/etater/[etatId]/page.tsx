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

export default async function EtatDetailsPage({ params }: EtatDetailsPageProps) {
  const { etatId } = await params;
  const etat = await getEtatDetails(etatId);

  if (!etat) {
    notFound();
  }

  return (
    <main className="min-h-[calc(100vh-11.5rem)] space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
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
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: etat.themeColor }}
          />
          {etat.title}
        </h1>
        <p className="text-xs text-muted-foreground">{etat.contactEmail}</p>
        <p className="text-xs text-muted-foreground">Telefon: {etat.contactPhone}</p>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Medlemmer ({etat._count.users})</h2>
        <AddEtatUserDialog etatId={etat.id} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Navn</TableHead>
            <TableHead>E-post</TableHead>
            <TableHead>Handling</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {etat.users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="py-6 text-center text-muted-foreground">
                Ingen medlemmer ennå.
              </TableCell>
            </TableRow>
          ) : (
            etat.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
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
