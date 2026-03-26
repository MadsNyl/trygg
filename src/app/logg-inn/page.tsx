import { redirect } from "next/navigation";

import { InnloggingKort } from "~/app/_components/innlogging-kort";
import { getSession } from "~/server/better-auth/server";

export default async function LoggInnSide() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="font-heading text-primary mb-6 text-2xl font-bold">
        Trygg
      </h1>
      <InnloggingKort />
    </main>
  );
}
