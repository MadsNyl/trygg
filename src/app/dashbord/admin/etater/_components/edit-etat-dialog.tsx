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
import { Label } from "~/components/ui/label";
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
        <Button variant="outline" className="h-10 px-5 text-sm">
          Rediger etat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Rediger etat</DialogTitle>
          <DialogDescription className="text-sm">
            Oppdater informasjon for denne etaten.
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-5"
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
          <div className="space-y-2">
            <Label htmlFor="edit-etat-title" className="text-sm">
              Tittel
            </Label>
            <Input
              id="edit-etat-title"
              value={form.title}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, title: event.target.value }));
              }}
              className="h-10 px-3 text-sm md:text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-etat-phone" className="text-sm">
              Kontakttelefon
            </Label>
            <Input
              id="edit-etat-phone"
              value={form.contactPhone}
              onChange={(event) => {
                setForm((prev) => ({
                  ...prev,
                  contactPhone: event.target.value,
                }));
              }}
              className="h-10 px-3 text-sm md:text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-etat-email" className="text-sm">
              Kontakt e-post
            </Label>
            <Input
              id="edit-etat-email"
              type="email"
              value={form.contactEmail}
              onChange={(event) => {
                setForm((prev) => ({
                  ...prev,
                  contactEmail: event.target.value,
                }));
              }}
              className="h-10 px-3 text-sm md:text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm">Temafarge</Label>
            <label className="flex h-10 cursor-pointer items-center gap-3">
              <span
                className="h-8 w-8 shrink-0 rounded-full border"
                style={{ backgroundColor: form.themeColor }}
              />
              <span className="text-sm hover:underline">Velg temafarge</span>
              <input
                type="color"
                value={form.themeColor}
                onChange={(event) => {
                  setForm((prev) => ({
                    ...prev,
                    themeColor: event.target.value,
                  }));
                }}
                className="sr-only"
                required
              />
            </label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="h-10 px-5 text-sm"
              >
                Avbryt
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={updateEtat.isPending}
              className="h-10 px-5 text-sm"
            >
              {updateEtat.isPending ? "Lagrer..." : "Lagre"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
