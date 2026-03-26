import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { UserRowActions } from "~/app/dashbord/admin/brukere/_components/user-row-actions";
import { getUsers } from "~/services/users";

type BrukerePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const buildPageHref = (page: number, query: string) => {
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }

  params.set("page", String(page));

  return `/dashbord/admin/brukere?${params.toString()}`;
};

export default async function BrukerePage({
  searchParams,
}: BrukerePageProps) {
  const resolvedSearchParams = await searchParams;
  const { users, query, pagination } = await getUsers(resolvedSearchParams);

  return (
    <main className="min-h-[calc(100vh-11.5rem)] space-y-4">
      <form action="/dashbord/admin/brukere" className="flex max-w-sm items-center gap-2">
        <Input
          name="q"
          placeholder="Søk etter navn eller e-post"
          defaultValue={query}
        />
        <Button type="submit" variant="outline">
          Søk
        </Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bruker</TableHead>
            <TableHead>E-post</TableHead>
            <TableHead>Verifisert</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead>Handlinger</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="py-6 text-center text-muted-foreground">
                Ingen brukere funnet.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      {user.image ? <AvatarImage src={user.image} alt={user.name} /> : null}
                      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.isVerified ? "default" : "outline"}>
                    {user.isVerified ? "Ja" : "Nei"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.isAdmin ? "default" : "outline"}>
                    {user.isAdmin ? "Ja" : "Nei"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <UserRowActions
                    user={{
                      id: user.id,
                      name: user.name,
                      isVerified: user.isVerified,
                      isAdmin: user.isAdmin,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          Side {pagination.page} av {pagination.totalPages} ({pagination.total} brukere)
        </p>

        <div className="flex items-center gap-2">
          {pagination.hasPreviousPage ? (
            <Button variant="outline" asChild>
              <Link href={buildPageHref(pagination.page - 1, query)}>Forrige</Link>
            </Button>
          ) : (
            <Button variant="outline" disabled>
              Forrige
            </Button>
          )}

          {pagination.hasNextPage ? (
            <Button variant="outline" asChild>
              <Link href={buildPageHref(pagination.page + 1, query)}>Neste</Link>
            </Button>
          ) : (
            <Button variant="outline" disabled>
              Neste
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
