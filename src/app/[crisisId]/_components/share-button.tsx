"use client";

import { useCallback, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Share01Icon,
  Link01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { useMediaQuery } from "~/hooks/use-media-query";

function ShareContent({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  }, [onClose]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center pt-2">
        <div className="bg-muted flex h-14 w-14 items-center justify-center rounded-full">
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Link01Icon}
            size={24}
            className={
              copied ? "text-green-600 transition-colors" : "text-foreground"
            }
          />
        </div>
      </div>
      <Button
        className="h-11 w-full text-sm"
        onClick={handleCopy}
        disabled={copied}
      >
        {copied ? "Kopiert!" : "Kopier lenke"}
      </Button>
    </div>
  );
}

export function ShareButton() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  const trigger = (
    <Button variant="ghost" size="icon" aria-label="Del denne siden">
      <HugeiconsIcon icon={Share01Icon} size={18} />
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Del krise</DialogTitle>
          </DialogHeader>
          <ShareContent onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md px-4 pt-2 pb-8">
          <DrawerHeader className="px-0 pb-4">
            <DrawerTitle className="text-base font-bold">Del krise</DrawerTitle>
          </DrawerHeader>
          <ShareContent onClose={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
