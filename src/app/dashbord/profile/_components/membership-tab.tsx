import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon } from "@hugeicons/core-free-icons";

type EtatData = {
  id: string;
  title: string;
  themeColor: string;
  contactEmail: string;
  contactPhone: string;
};

export function MembershipTab({ etater }: { etater: EtatData[] }) {
  if (etater.length === 0) {
    return (
      <Empty className="py-20">
        <EmptyMedia>
          <HugeiconsIcon
            icon={UserGroupIcon}
            size={36}
            className="text-muted-foreground"
          />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle className="text-base">
            Ingen medlemskap ennå
          </EmptyTitle>
          <EmptyDescription className="text-sm">
            Du er ikke tilknyttet noen etater. Kontakt en administrator for å
            bli lagt til.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {etater.map((etat) => (
        <Card key={etat.id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: etat.themeColor }}
                aria-hidden="true"
              />
              {etat.title}
            </CardTitle>
            <CardDescription className="text-sm">
              {etat.contactEmail}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            <p>Telefon: {etat.contactPhone}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
