import { notFound } from "next/navigation";

import { getPublicCrisisById } from "~/services/crisis";

import { CrisisView } from "./_components/crisis-view";

type Params = Promise<{ crisisId: string }>;

export default async function CrisisPage({ params }: { params: Params }) {
  const { crisisId } = await params;
  const crisis = await getPublicCrisisById(crisisId);

  if (!crisis) {
    notFound();
  }

  return <CrisisView crisis={crisis} />;
}
