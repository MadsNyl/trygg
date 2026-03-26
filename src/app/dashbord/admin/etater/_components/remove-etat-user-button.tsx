"use client";

import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

type RemoveEtatUserButtonProps = {
  etatId: string;
  userId: string;
};

export function RemoveEtatUserButton({ etatId, userId }: RemoveEtatUserButtonProps) {
  const router = useRouter();

  const removeUser = api.etat.removeUser.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => {
        removeUser.mutate({ etatId, userId });
      }}
      disabled={removeUser.isPending}
    >
      Fjern
    </Button>
  );
}
