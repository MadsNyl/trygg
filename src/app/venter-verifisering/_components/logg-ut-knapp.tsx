"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { authClient } from "~/server/better-auth/client";

export function LoggUtKnapp() {
  const router = useRouter();
  const [loggerUt, setLoggerUt] = useState(false);

  const handleLoggUt = async () => {
    setLoggerUt(true);
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="h-10 px-5 text-sm"
      onClick={handleLoggUt}
      disabled={loggerUt}
    >
      {loggerUt ? "Logger ut..." : "Logg ut"}
    </Button>
  );
}
