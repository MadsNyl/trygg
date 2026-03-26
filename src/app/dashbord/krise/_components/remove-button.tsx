"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

type RemoveButtonProps = {
  title?: string;
  description?: string;
  isPending: boolean;
  onConfirm: () => void;
};

export function RemoveButton({
  title = "Fjerne element?",
  description = "Er du sikker på at du vil fjerne dette elementet? Handlingen kan ikke angres.",
  isPending,
  onConfirm,
}: RemoveButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="sm" disabled={isPending}>
          Fjern
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Avbryt</Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={isPending}
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
          >
            {isPending ? "Fjerner..." : "Fjern"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
