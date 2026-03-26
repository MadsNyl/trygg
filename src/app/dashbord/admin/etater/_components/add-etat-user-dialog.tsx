"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";

type AddEtatUserDialogProps = {
  etatId: string;
};

export function AddEtatUserDialog({ etatId }: AddEtatUserDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const usersQuery = api.etat.searchUsersByName.useQuery(
    { etatId, query },
    {
      enabled: open && query.trim().length >= 2,
    },
  );

  const addUser = api.etat.addUser.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setQuery("");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="h-10 px-5 text-sm">Legg til bruker</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Legg til bruker</DialogTitle>
          <DialogDescription className="text-sm">
            Søk etter navn og legg brukeren til i etaten.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            placeholder="Søk etter navn"
            className="h-10 px-3 text-sm md:text-sm"
          />

          {query.trim().length < 2 ? (
            <p className="text-muted-foreground text-sm">
              Skriv minst 2 tegn for å søke.
            </p>
          ) : usersQuery.isLoading ? (
            <p className="text-muted-foreground text-sm">Søker...</p>
          ) : usersQuery.data && usersQuery.data.length > 0 ? (
            <div className="max-h-72 space-y-2 overflow-y-auto">
              {usersQuery.data.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {user.email}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      addUser.mutate({ etatId, userId: user.id });
                    }}
                    disabled={addUser.isPending}
                    className="h-9 px-4 text-sm"
                  >
                    Legg til
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">
              Ingen brukere funnet.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
