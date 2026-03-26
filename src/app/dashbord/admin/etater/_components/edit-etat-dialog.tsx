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

type EditEtatDialogProps = {
  etat: {
    id: string;
    title: string;
    contactPhone: string;
    contactEmail: string;
    themeColor: string;
  };
};

export function EditEtatDialog({ etat }: EditEtatDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: etat.title,
    contactPhone: etat.contactPhone,
    contactEmail: etat.contactEmail,
    themeColor: etat.themeColor,
  });

  const updateEtat = api.etat.update.useMutation({
    onSuccess: () => {
      setOpen(false);
      router.refresh();
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (isOpen) {
          setForm({
            title: etat.title,
            contactPhone: etat.contactPhone,
            contactEmail: etat.contactEmail,
            themeColor: etat.themeColor,
          });
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Rediger etat</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rediger etat</DialogTitle>
          <DialogDescription>
            Oppdater informasjon for denne etaten.
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            updateEtat.mutate({
              etatId: etat.id,
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
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium">Kontakttelefon</label>
            <Input
              value={form.contactPhone}
              onChange={(event) => {
                setForm((prev) => ({
                  ...prev,
                  contactPhone: event.target.value,
                }));
              }}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium">Kontakt e-post</label>
            <Input
              type="email"
              value={form.contactEmail}
              onChange={(event) => {
                setForm((prev) => ({
                  ...prev,
                  contactEmail: event.target.value,
                }));
              }}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium">Temafarge</label>
            <Input
              type="color"
              value={form.themeColor}
              onChange={(event) => {
                setForm((prev) => ({
                  ...prev,
                  themeColor: event.target.value,
                }));
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
            <Button type="submit" disabled={updateEtat.isPending}>
              {updateEtat.isPending ? "Lagrer..." : "Lagre"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
