"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const currentTab = pathname.includes("/etater") ? "etater" : "brukere";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <Tabs value={currentTab}>
        <TabsList>
          <TabsTrigger value="brukere" asChild>
            <Link href="/dashbord/admin/brukere">brukere</Link>
          </TabsTrigger>
          <TabsTrigger value="etater" asChild>
            <Link href="/dashbord/admin/etater">etater</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-6">{children}</div>
    </div>
  );
}
