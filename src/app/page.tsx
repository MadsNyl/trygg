import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";

export default async function Home() {
  const session = await getSession();
  const isVerified = session?.user?.isVerified === true;

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      {session ? (
        <div className="w-full max-w-md space-y-4">
          {!isVerified ? (
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-base text-amber-900">
                  Kontoen din venter på godkjenning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-800">
                  Du er logget inn, men kontoen er ikke verifisert enda. Når en
                  administrator har godkjent kontoen din, får du full tilgang.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Velkommen tilbake</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kontoen din er verifisert.
                </p>
              </CardContent>
            </Card>
          )}

          <form className="flex justify-center">
            <Button
              size="lg"
              formAction={async () => {
                "use server";
                await auth.api.signOut({
                  headers: await headers(),
                });
                redirect("/");
              }}
            >
              Logg ut
            </Button>
          </form>
        </div>
      ) : (
        <Button asChild size="lg">
          <Link href="/logg-inn">Logg inn</Link>
        </Button>
      )}
    </main>
  );
}
