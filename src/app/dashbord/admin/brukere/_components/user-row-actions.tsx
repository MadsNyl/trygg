"use client";

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

type UserRowActionsProps = {
  user: {
    id: string;
    name: string;
    isVerified: boolean;
    isAdmin: boolean;
  };
};

export function UserRowActions({ user }: UserRowActionsProps) {
  const router = useRouter();

  const toggleIsVerified = api.users.toggleIsVerified.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const toggleIsAdmin = api.users.toggleIsAdmin.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <div className="flex items-center gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            {user.isVerified ? "Fjern verifisering" : "Verifiser"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {user.isVerified ? "Fjerne verifisering?" : "Verifisere bruker?"}
            </DialogTitle>
            <DialogDescription>
              {user.isVerified
                ? `Dette vil markere ${user.name} som ikke verifisert.`
                : `Dette vil markere ${user.name} som verifisert.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Avbryt</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={() => {
                  toggleIsVerified.mutate({ userId: user.id });
                }}
                disabled={toggleIsVerified.isPending}
              >
                Bekreft
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            {user.isAdmin ? "Fjern admin" : "Gjør admin"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {user.isAdmin ? "Fjerne admin-rettighet?" : "Gi admin-rettighet?"}
            </DialogTitle>
            <DialogDescription>
              {user.isAdmin
                ? `Dette vil fjerne admin-rettighet for ${user.name}.`
                : `Dette vil gi admin-rettighet til ${user.name}.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Avbryt</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={() => {
                  toggleIsAdmin.mutate({ userId: user.id });
                }}
                disabled={toggleIsAdmin.isPending}
              >
                Bekreft
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
