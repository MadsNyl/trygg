"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
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
    const epost = String(formData.get("epost") ?? "");
    const passord = String(formData.get("passord") ?? "");

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
    const navn = String(formData.get("navn") ?? "");
    const epost = String(formData.get("epost") ?? "");
    const passord = String(formData.get("passord") ?? "");

    const result = await authClient.signUp.email({
      name: navn,
      email: epost,
      password: passord,
      callbackURL: "/",
    });

    if (result.error) {
      setFeilmelding(
        hentFeilmelding(result.error, "Kunne ikke registrere bruker. Prøv igjen."),
      );
      setLasterInn(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <Card className="w-full max-w-md bg-white" size="default">
      <CardHeader>
        <CardTitle className="text-base">Velkommen</CardTitle>
        <CardDescription>
          Logg inn eller opprett en ny konto for å fortsette.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="innlogging" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="innlogging">Logg inn</TabsTrigger>
            <TabsTrigger value="registrering">Registrer</TabsTrigger>
          </TabsList>

          <TabsContent value="innlogging" className="mt-4">
            <form className="space-y-4" onSubmit={handleLoggInn}>
              <div className="space-y-1.5">
                <Label htmlFor="innlogging-epost">E-post</Label>
                <Input
                  id="innlogging-epost"
                  name="epost"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="innlogging-passord">Passord</Label>
                <Input
                  id="innlogging-passord"
                  name="passord"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={lasterInn}>
                {lasterInn ? "Logger inn..." : "Logg inn"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="registrering" className="mt-4">
            <form className="space-y-4" onSubmit={handleRegistrer}>
              <div className="space-y-1.5">
                <Label htmlFor="registrering-navn">Navn</Label>
                <Input
                  id="registrering-navn"
                  name="navn"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="registrering-epost">E-post</Label>
                <Input
                  id="registrering-epost"
                  name="epost"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="registrering-passord">Passord</Label>
                <Input
                  id="registrering-passord"
                  name="passord"
                  type="password"
                  autoComplete="new-password"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={lasterInn}>
                {lasterInn ? "Oppretter konto..." : "Opprett konto"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        {feilmelding ? (
          <p className="mt-4 text-xs text-red-600">{feilmelding}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}