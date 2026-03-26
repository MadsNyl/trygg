import { redirect } from "next/navigation";

import { InnloggingKort } from "~/app/_components/innlogging-kort";
import { getSession } from "~/server/better-auth/server";

export default async function LoggInnSide() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <InnloggingKort />
    </main>
  );
}
