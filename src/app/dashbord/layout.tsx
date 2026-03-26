import Link from "next/link";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { getSession } from "~/server/better-auth/server";

export default async function DashbordLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();
  const isAdmin = session?.user?.isAdmin === true;

  return (
    <div className="bg-background min-h-screen">
      <header className="border-b">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/dashbord"
            className="text-lg font-semibold tracking-tight"
          >
            trygg
          </Link>

          <div className="flex items-center gap-4">
            {isAdmin ? (
              <Link
                href="/dashbord/admin"
                className="text-muted-foreground hover:text-foreground text-sm font-medium"
              >
                admin
              </Link>
            ) : null}

            <Link href="/dashbord/profile" aria-label="Go to profile page">
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}
