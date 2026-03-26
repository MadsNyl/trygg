"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "~/components/ui/button";
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
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/dashbord") return pathname === "/dashbord";
    return pathname.startsWith(href);
  };

  return (
    <Sidebar>
      <SidebarHeader className="h-14 items-start justify-center border-b px-5">
        <Link
          href="/dashbord"
          className="font-heading text-xl font-bold tracking-tight"
        >
          trygg
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-1 pt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs tracking-wider uppercase">
            Oversikt
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                    className="h-10 gap-3 px-4 text-sm"
                  >
                    <Link href={item.href}>
                      <HugeiconsIcon icon={item.icon} size={20} />
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
            <SidebarGroupLabel className="px-4 text-xs tracking-wider uppercase">
              Admin
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNav.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.href)}
                      className="h-10 gap-3 px-4 text-sm"
                    >
                      <Link href={item.href}>
                        <HugeiconsIcon icon={item.icon} size={20} />
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

      <SidebarFooter className="border-t p-5">
        <Link href="/dashbord/profile" className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="text-sm">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="text-muted-foreground text-xs">Profil</p>
          </div>
        </Link>
        <Button
          variant="ghost"
          onClick={() => {
            void authClient.signOut().then(() => {
              router.push("/logg-inn");
            });
          }}
          className="text-muted-foreground hover:text-foreground mt-2 h-9 w-full justify-start px-3 text-sm"
        >
          Logg ut
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
