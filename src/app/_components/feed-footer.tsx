import Link from "next/link";

import { Button } from "~/components/ui/button";

export function FeedFooter() {
  return (
    <footer className="bg-background border-t px-6 py-6 text-center">
      <Button asChild variant="outline" className="h-10 px-5 text-sm">
        <Link href="/logg-inn">Logg inn</Link>
      </Button>
    </footer>
  );
}
