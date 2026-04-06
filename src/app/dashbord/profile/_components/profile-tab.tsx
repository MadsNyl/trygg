"use client";

import { useState } from "react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Field, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";

type ProfileData = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  isVerified: boolean;
  isAdmin: boolean;
  createdAt: Date;
  etater: {
    id: string;
    title: string;
    themeColor: string;
    contactEmail: string;
    contactPhone: string;
  }[];
};

export function ProfileTab({ profile }: { profile: ProfileData }) {
  const [name, setName] = useState(profile.name);
  const [successMessage, setSuccessMessage] = useState("");

  const utils = api.useUtils();
  const updateName = api.users.updateName.useMutation({
    onSuccess: () => {
      setSuccessMessage("Endringene er lagret");
      void utils.users.getProfile.invalidate();
      setTimeout(() => setSuccessMessage(""), 3000);
    },
  });

  const hasChanges = name !== profile.name;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasChanges) return;
    updateName.mutate({ name });
  };

  const formattedDate = new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(profile.createdAt));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Personlig informasjon</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field>
              <FieldLabel htmlFor="name">Navn</FieldLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                disabled={!hasChanges || updateName.isPending}
              >
                {updateName.isPending ? "Lagrer..." : "Lagre endringer"}
              </Button>
              {successMessage && (
                <p className="text-sm text-green-600">{successMessage}</p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Kontoinformasjon</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium">E-post</p>
            <p className="text-muted-foreground text-sm">{profile.email}</p>
            <p className="text-muted-foreground mt-1 text-xs">
              Endre e-post under Sikkerhet-fanen
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Konto opprettet</p>
            <p className="text-muted-foreground text-sm">{formattedDate}</p>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Status</p>
            <div className="flex gap-2">
              {profile.isVerified ? (
                <Badge>Verifisert</Badge>
              ) : (
                <div>
                  <Badge variant="outline">Ikke verifisert</Badge>
                  <p className="text-muted-foreground mt-1 text-xs">
                    En administrator må verifisere kontoen din
                  </p>
                </div>
              )}
              {profile.isAdmin && <Badge>Administrator</Badge>}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
