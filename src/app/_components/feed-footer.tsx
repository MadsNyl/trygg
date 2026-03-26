import Link from "next/link";

import { Button } from "~/components/ui/button";

export function FeedFooter() {
  return (
    <footer className="border-t px-4 py-6 text-center">
      <Button variant="outline" size="sm" asChild>
        <Link href="/logg-inn">Logg inn</Link>
      </Button>
    </footer>
  );
}
