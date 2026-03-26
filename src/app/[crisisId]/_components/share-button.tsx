"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleShare}
      aria-label={copied ? "Lenke kopiert" : "Del denne siden"}
    >
      <HugeiconsIcon icon={copied ? Tick02Icon : Share01Icon} size={18} />
    </Button>
  );
}
