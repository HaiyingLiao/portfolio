import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from "next/font/google";

import "../globals.css";
import { NavBar, Footer } from "@/components/index";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "contact",
  description: "Haiying Liao's contact detail",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />

        <main className="fadeIn">{children}</main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
