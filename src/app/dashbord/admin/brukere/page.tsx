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

export default async function BrukerePage({ searchParams }: BrukerePageProps) {
  const resolvedSearchParams = await searchParams;
  const { users, query, pagination } = await getUsers(resolvedSearchParams);

  return (
    <main className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          Brukere
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Administrer brukere og tilganger
        </p>
      </div>

      <form
        action="/dashbord/admin/brukere"
        className="flex max-w-md items-center gap-3"
      >
        <Input
          name="q"
          placeholder="Søk etter navn eller e-post"
          defaultValue={query}
          className="h-10 px-3 text-sm md:text-sm"
        />
        <Button type="submit" variant="outline" className="h-10 px-5 text-sm">
          Søk
        </Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Bruker</TableHead>
            <TableHead className="text-sm">E-post</TableHead>
            <TableHead className="text-sm">Verifisert</TableHead>
            <TableHead className="text-sm">Admin</TableHead>
            <TableHead className="text-sm">Handlinger</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-muted-foreground py-8 text-center text-sm"
              >
                Ingen brukere funnet.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      {user.image ? (
                        <AvatarImage src={user.image} alt={user.name} />
                      ) : null}
                      <AvatarFallback className="text-sm">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{user.email}</TableCell>
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
        <p className="text-muted-foreground text-sm">
          Side {pagination.page} av {pagination.totalPages} ({pagination.total}{" "}
          brukere)
        </p>

        <div className="flex items-center gap-3">
          {pagination.hasPreviousPage ? (
            <Button variant="outline" asChild className="h-10 px-5 text-sm">
              <Link href={buildPageHref(pagination.page - 1, query)}>
                Forrige
              </Link>
            </Button>
          ) : (
            <Button variant="outline" disabled className="h-10 px-5 text-sm">
              Forrige
            </Button>
          )}

          {pagination.hasNextPage ? (
            <Button variant="outline" asChild className="h-10 px-5 text-sm">
              <Link href={buildPageHref(pagination.page + 1, query)}>
                Neste
              </Link>
            </Button>
          ) : (
            <Button variant="outline" disabled className="h-10 px-5 text-sm">
              Neste
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
