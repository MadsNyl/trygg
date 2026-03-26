"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleShare}>
      {copied ? "Kopiert!" : "Del"}
    </Button>
  );
}
