import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter, Raleway } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

const ralewayHeading = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trygg",
  description: "Kriseinformasjon for innbyggere",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="no"
      className={cn(
        geist.variable,
        "font-sans",
        inter.variable,
        ralewayHeading.variable,
      )}
    >
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
