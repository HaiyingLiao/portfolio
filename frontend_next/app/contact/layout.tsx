import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

import "../globals.css";
import { NavBar, Footer } from "@/components/index";

export const metadata: Metadata = {
  title: "contact",
  description: "Haiying Liao's contact detail",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <main>{children}</main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
