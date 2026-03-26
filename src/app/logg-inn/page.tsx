import { redirect } from "next/navigation";

import { InnloggingKort } from "~/app/_components/innlogging-kort";
import { getSession } from "~/server/better-auth/server";

export default async function LoggInnSide() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-heading mb-2 text-3xl font-bold tracking-tight">
          trygg
        </h1>
        <p className="text-muted-foreground mb-8 text-sm">
          Logg inn eller opprett en ny konto for å fortsette.
        </p>
        <InnloggingKort />
      </div>
    </main>
  );
}
