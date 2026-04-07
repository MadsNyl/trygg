"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { authClient } from "~/server/better-auth/client";

type HeaderUserMenuProps = {
  name: string;
  isVerified: boolean;
};

export function HeaderUserMenu({ name, isVerified }: HeaderUserMenuProps) {
  const router = useRouter();
  const [loggerUt, setLoggerUt] = useState(false);

  const handleLoggUt = async () => {
    setLoggerUt(true);
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  if (isVerified) {
    return (
      <Link
        href="/dashbord"
        className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
      >
        <Avatar>
          <AvatarFallback className="text-sm">
            {name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span>{name}</span>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">{name}</span>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-9 px-3 text-sm"
        onClick={handleLoggUt}
        disabled={loggerUt}
      >
        {loggerUt ? "Logger ut..." : "Logg ut"}
      </Button>
    </div>
  );
}
