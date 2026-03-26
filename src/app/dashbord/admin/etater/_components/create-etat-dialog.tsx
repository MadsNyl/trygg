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
        <Button className="h-10 px-5 text-sm">Opprett ny etat</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Opprett etat</DialogTitle>
          <DialogDescription className="text-sm">
            Legg inn tittel, kontaktinfo og temafarge.
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-5"
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
          <div className="space-y-2">
            <Label htmlFor="create-etat-title" className="text-sm">
              Tittel
            </Label>
            <Input
              id="create-etat-title"
              value={form.title}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, title: event.target.value }));
              }}
              placeholder="f.eks. Politiet"
              className="h-10 px-3 text-sm md:text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="create-etat-phone" className="text-sm">
              Kontakttelefon
            </Label>
            <Input
              id="create-etat-phone"
              value={form.contactPhone}
              onChange={(event) => {
                setForm((prev) => ({
                  ...prev,
                  contactPhone: event.target.value,
                }));
              }}
              placeholder="f.eks. 22 66 90 50"
              className="h-10 px-3 text-sm md:text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="create-etat-email" className="text-sm">
              Kontakt e-post
            </Label>
            <Input
              id="create-etat-email"
              type="email"
              value={form.contactEmail}
              onChange={(event) => {
                setForm((prev) => ({
                  ...prev,
                  contactEmail: event.target.value,
                }));
              }}
              placeholder="post@etat.no"
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
              disabled={createEtat.isPending}
              className="h-10 px-5 text-sm"
            >
              {createEtat.isPending ? "Oppretter..." : "Opprett etat"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
