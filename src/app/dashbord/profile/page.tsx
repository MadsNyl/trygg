import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";
import { ProfileTabs } from "./_components/profile-tabs";

export default async function ProfilePage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/logg-inn");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      isVerified: true,
      isAdmin: true,
      createdAt: true,
      etater: {
        select: {
          id: true,
          title: true,
          themeColor: true,
          contactEmail: true,
          contactPhone: true,
        },
      },
    },
  });

  if (!user) {
    redirect("/logg-inn");
  }

  const sessions = await db.session.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      token: true,
      ipAddress: true,
      userAgent: true,
      expiresAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("better-auth.session_token");
  const currentSessionToken = sessionCookie?.value ?? "";

  return (
    <main className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          {user.name}
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">{user.email}</p>
      </div>

      <ProfileTabs
        profile={user}
        sessions={sessions}
        currentSessionToken={currentSessionToken}
      />
    </main>
  );
}
