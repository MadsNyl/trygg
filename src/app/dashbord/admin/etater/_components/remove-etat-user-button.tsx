"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
import { api } from "~/trpc/react";

type RemoveEtatUserButtonProps = {
  etatId: string;
  userId: string;
};

export function RemoveEtatUserButton({
  etatId,
  userId,
}: RemoveEtatUserButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const removeUser = api.etat.removeUser.useMutation({
    onSuccess: () => {
      setOpen(false);
      router.refresh();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-9 px-4 text-sm">
          Fjern
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">Fjerne medlem?</DialogTitle>
          <DialogDescription className="text-sm">
            Er du sikker på at du vil fjerne dette medlemmet fra etaten?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="h-10 px-5 text-sm">
              Avbryt
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={removeUser.isPending}
            className="h-10 px-5 text-sm"
            onClick={() => {
              removeUser.mutate({ etatId, userId });
            }}
          >
            {removeUser.isPending ? "Fjerner..." : "Fjern"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
