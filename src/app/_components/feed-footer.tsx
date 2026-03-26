import Link from "next/link";

import { Button } from "~/components/ui/button";

export function FeedFooter() {
  return (
    <footer className="bg-white px-4 py-6 text-center shadow-sm">
      <Button asChild>
        <Link href="/logg-inn">Logg inn</Link>
      </Button>
    </footer>
  );
}
