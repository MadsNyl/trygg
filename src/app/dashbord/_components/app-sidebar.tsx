"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Alert02Icon,
  Add01Icon,
  UserMultipleIcon,
  Building01Icon,
} from "@hugeicons/core-free-icons";
import { authClient } from "~/server/better-auth/client";

type AppSidebarProps = {
  user: {
    name: string;
    isAdmin: boolean;
  };
};

const mainNav = [
  { label: "Kriser", href: "/dashbord", icon: Alert02Icon },
  { label: "Ny krise", href: "/dashbord/krise/ny", icon: Add01Icon },
];

const adminNav = [
  { label: "Brukere", href: "/dashbord/admin/brukere", icon: UserMultipleIcon },
  {
    label: "Etater",
    href: "/dashbord/admin/etater",
    icon: Building01Icon,
  },
];

export function AppSidebar({ user }: AppSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashbord") return pathname === "/dashbord";
    return pathname.startsWith(href);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-4">
        <Link
          href="/dashbord"
          className="font-heading text-lg font-bold tracking-tight"
        >
          Trygg
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Oversikt</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive(item.href)}>
                    <Link href={item.href}>
                      <HugeiconsIcon icon={item.icon} size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {user.isAdmin ? (
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNav.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                      <Link href={item.href}>
                        <HugeiconsIcon icon={item.icon} size={18} />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : null}
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <button
              onClick={() => void authClient.signOut()}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              Logg ut
            </button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
