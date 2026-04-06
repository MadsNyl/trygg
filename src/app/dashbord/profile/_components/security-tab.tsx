"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Field, FieldError, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { authClient } from "~/server/better-auth/client";
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

type SessionData = {
  id: string;
  token: string;
  ipAddress: string | null;
  userAgent: string | null;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

function ChangeEmailCard({ currentEmail }: { currentEmail: string }) {
  const [newEmail, setNewEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await authClient.changeEmail({
      newEmail,
    });

    if (error) {
      setErrorMessage(error.message ?? "Noe gikk galt");
    } else {
      setSuccessMessage("E-postadressen din er oppdatert");
      setNewEmail("");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Endre e-post</CardTitle>
        <CardDescription className="text-sm">
          Nåværende e-post: {currentEmail}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="new-email">Ny e-postadresse</FieldLabel>
            <Input
              id="new-email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="ny@epost.no"
            />
            {errorMessage && <FieldError>{errorMessage}</FieldError>}
          </Field>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={!newEmail}>
              Oppdater e-post
            </Button>
            {successMessage && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function ChangePasswordCard() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const mismatch = confirmPassword !== "" && newPassword !== confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mismatch) return;
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await authClient.changePassword({
      currentPassword,
      newPassword,
    });

    if (error) {
      setErrorMessage(error.message ?? "Noe gikk galt");
    } else {
      setSuccessMessage("Passordet ditt er oppdatert");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Endre passord</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="current-password">
              Nåværende passord
            </FieldLabel>
            <Input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="new-password">Nytt passord</FieldLabel>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="confirm-password">
              Bekreft nytt passord
            </FieldLabel>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {mismatch && (
              <FieldError>Passordene stemmer ikke overens</FieldError>
            )}
          </Field>
          <div className="flex items-center gap-3">
            <Button
              type="submit"
              disabled={
                !currentPassword || !newPassword || !confirmPassword || mismatch
              }
            >
              Oppdater passord
            </Button>
            {successMessage && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-destructive text-sm">{errorMessage}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function parseUserAgent(ua: string | null): string {
  if (!ua) return "Ukjent enhet";

  const browserMatch = ua.match(
    /(Chrome|Firefox|Safari|Edge|Opera|Brave)[/\s](\d+)/i,
  );
  const osMatch = ua.match(
    /(Windows|Mac OS X|Linux|Android|iOS|iPhone OS)[/\s]?([\d._]*)/i,
  );

  const browser = browserMatch
    ? `${browserMatch[1]} ${browserMatch[2]}`
    : "Ukjent nettleser";
  const os = osMatch ? osMatch[1]?.replace(/_/g, ".") : "Ukjent OS";

  return `${browser} på ${os}`;
}

function SessionsCard({
  sessions,
  currentSessionToken,
}: {
  sessions: SessionData[];
  currentSessionToken: string;
}) {
  const [revokingId, setRevokingId] = useState<string | null>(null);

  const handleRevoke = async (sessionToken: string) => {
    setRevokingId(sessionToken);
    await authClient.revokeSession({ token: sessionToken });
    setRevokingId(null);
    window.location.reload();
  };

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("nb-NO", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Aktive økter</CardTitle>
        <CardDescription className="text-sm">
          Enheter som er logget inn på kontoen din
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {sessions.map((session) => {
          const isCurrent = session.token === currentSessionToken;
          return (
            <div
              key={session.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">
                    {parseUserAgent(session.userAgent)}
                  </p>
                  {isCurrent && (
                    <Badge variant="secondary">Denne enheten</Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-xs">
                  IP: {session.ipAddress ?? "Ukjent"}
                </p>
                <p className="text-muted-foreground text-xs">
                  Sist aktiv: {formatDate(session.updatedAt)}
                </p>
              </div>
              {!isCurrent && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRevoke(session.token)}
                  disabled={revokingId === session.token}
                >
                  {revokingId === session.token ? "Logger ut..." : "Logg ut"}
                </Button>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function DeleteAccountCard({ email }: { email: string }) {
  const [confirmEmail, setConfirmEmail] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const deleteAccount = api.users.deleteAccount.useMutation({
    onSuccess: () => {
      void authClient.signOut();
      router.push("/logg-inn");
    },
  });

  const handleDelete = () => {
    deleteAccount.mutate({ confirmEmail });
  };

  return (
    <Card className="border-destructive/50">
      <CardHeader>
        <CardTitle className="text-destructive text-base">
          Slett konto
        </CardTitle>
        <CardDescription className="text-sm">
          Denne handlingen er permanent og kan ikke angres. All data knyttet til
          kontoen din vil bli slettet.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive">Slett kontoen min</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Er du sikker på at du vil slette kontoen?
              </DialogTitle>
              <DialogDescription>
                Denne handlingen kan ikke angres. All data knyttet til kontoen
                din, inkludert innlegg og bidrag, vil bli permanent slettet.
              </DialogDescription>
            </DialogHeader>
            <Field>
              <FieldLabel htmlFor="confirm-email">
                Skriv inn e-postadressen din for å bekrefte
              </FieldLabel>
              <Input
                id="confirm-email"
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                placeholder={email}
              />
            </Field>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Avbryt
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={confirmEmail !== email || deleteAccount.isPending}
              >
                {deleteAccount.isPending ? "Sletter..." : "Slett konto"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export function SecurityTab({
  profile,
  sessions,
  currentSessionToken,
}: {
  profile: ProfileData;
  sessions: SessionData[];
  currentSessionToken: string;
}) {
  return (
    <div className="space-y-6">
      <ChangeEmailCard currentEmail={profile.email} />
      <ChangePasswordCard />
      <SessionsCard
        sessions={sessions}
        currentSessionToken={currentSessionToken}
      />
      <DeleteAccountCard email={profile.email} />
    </div>
  );
}
