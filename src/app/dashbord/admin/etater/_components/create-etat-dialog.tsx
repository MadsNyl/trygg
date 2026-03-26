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
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";

type CreateEtatFormState = {
  title: string;
  contactPhone: string;
  contactEmail: string;
  themeColor: string;
};

const initialFormState: CreateEtatFormState = {
  title: "",
  contactPhone: "",
  contactEmail: "",
  themeColor: "#1D4ED8",
};

export function CreateEtatDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<CreateEtatFormState>(initialFormState);

  const createEtat = api.etat.create.useMutation({
    onSuccess: () => {
      setForm(initialFormState);
      setOpen(false);
      router.refresh();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Opprett ny etat</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Opprett etat</DialogTitle>
          <DialogDescription>
            Legg inn tittel, kontaktinfo og temafarge.
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-3"
          onSubmit={(event) => {
            event.preventDefault();

            createEtat.mutate({
              title: form.title,
              contactPhone: form.contactPhone,
              contactEmail: form.contactEmail,
              themeColor: form.themeColor,
            });
          }}
        >
          <div className="space-y-1">
            <label className="text-xs font-medium">Tittel</label>
            <Input
              value={form.title}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, title: event.target.value }));
              }}
              placeholder="f.eks. Politiet"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium">Kontakttelefon</label>
            <Input
              value={form.contactPhone}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, contactPhone: event.target.value }));
              }}
              placeholder="f.eks. 22 66 90 50"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium">Kontakt e-post</label>
            <Input
              type="email"
              value={form.contactEmail}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, contactEmail: event.target.value }));
              }}
              placeholder="post@etat.no"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium">Temafarge</label>
            <Input
              type="color"
              value={form.themeColor}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, themeColor: event.target.value }));
              }}
              required
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Avbryt
              </Button>
            </DialogClose>
            <Button type="submit" disabled={createEtat.isPending}>
              {createEtat.isPending ? "Oppretter..." : "Opprett etat"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
