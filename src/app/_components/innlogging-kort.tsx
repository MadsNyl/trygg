"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { authClient } from "~/server/better-auth/client";

function hentFeilmelding(feil: unknown, standardmelding: string) {
  if (typeof feil === "object" && feil !== null && "message" in feil) {
    const message = (feil as { message?: unknown }).message;
    if (typeof message === "string" && message.length > 0) {
      return message;
    }
  }

  return standardmelding;
}

export function InnloggingKort() {
  const router = useRouter();
  const [lasterInn, setLasterInn] = useState(false);
  const [feilmelding, setFeilmelding] = useState<string | null>(null);

  const handleLoggInn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeilmelding(null);
    setLasterInn(true);

    const formData = new FormData(event.currentTarget);
    const epost = (formData.get("epost") as string | null) ?? "";
    const passord = (formData.get("passord") as string | null) ?? "";

    const result = await authClient.signIn.email({
      email: epost,
      password: passord,
      callbackURL: "/",
    });

    if (result.error) {
      setFeilmelding(
        hentFeilmelding(result.error, "Kunne ikke logge inn. Prøv igjen."),
      );
      setLasterInn(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  const handleRegistrer = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeilmelding(null);
    setLasterInn(true);

    const formData = new FormData(event.currentTarget);
    const navn = (formData.get("navn") as string | null) ?? "";
    const epost = (formData.get("epost") as string | null) ?? "";
    const passord = (formData.get("passord") as string | null) ?? "";

    const result = await authClient.signUp.email({
      name: navn,
      email: epost,
      password: passord,
      callbackURL: "/venter-verifisering",
    });

    if (result.error) {
      setFeilmelding(
        hentFeilmelding(
          result.error,
          "Kunne ikke registrere bruker. Prøv igjen.",
        ),
      );
      setLasterInn(false);
      return;
    }

    router.push("/venter-verifisering");
    router.refresh();
  };

  return (
    <div>
      <Tabs defaultValue="innlogging" className="w-full">
        <TabsList className="grid h-11 w-full grid-cols-2">
          <TabsTrigger value="innlogging" className="text-sm">
            Logg inn
          </TabsTrigger>
          <TabsTrigger value="registrering" className="text-sm">
            Registrer
          </TabsTrigger>
        </TabsList>

        <TabsContent value="innlogging" className="mt-6">
          <form className="space-y-5" onSubmit={handleLoggInn}>
            <div className="space-y-2">
              <Label htmlFor="innlogging-epost" className="text-sm">
                E-post
              </Label>
              <Input
                id="innlogging-epost"
                name="epost"
                type="email"
                autoComplete="email"
                className="h-11 px-3 text-base md:text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="innlogging-passord" className="text-sm">
                Passord
              </Label>
              <Input
                id="innlogging-passord"
                name="passord"
                type="password"
                autoComplete="current-password"
                className="h-11 px-3 text-base md:text-base"
                required
              />
            </div>

            <Button
              type="submit"
              className="h-11 w-full text-sm"
              disabled={lasterInn}
            >
              {lasterInn ? "Logger inn..." : "Logg inn"}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="registrering" className="mt-6">
          <form className="space-y-5" onSubmit={handleRegistrer}>
            <div className="space-y-2">
              <Label htmlFor="registrering-navn" className="text-sm">
                Navn
              </Label>
              <Input
                id="registrering-navn"
                name="navn"
                type="text"
                autoComplete="name"
                className="h-11 px-3 text-base md:text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrering-epost" className="text-sm">
                E-post
              </Label>
              <Input
                id="registrering-epost"
                name="epost"
                type="email"
                autoComplete="email"
                className="h-11 px-3 text-base md:text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrering-passord" className="text-sm">
                Passord
              </Label>
              <Input
                id="registrering-passord"
                name="passord"
                type="password"
                autoComplete="new-password"
                className="h-11 px-3 text-base md:text-base"
                required
              />
            </div>

            <Button
              type="submit"
              className="h-11 w-full text-sm"
              disabled={lasterInn}
            >
              {lasterInn ? "Oppretter konto..." : "Opprett konto"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      {feilmelding ? (
        <p role="alert" className="text-destructive mt-4 text-sm">
          {feilmelding}
        </p>
      ) : null}
    </div>
  );
}
