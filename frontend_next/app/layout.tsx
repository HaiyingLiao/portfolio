import "./globals.css";
import type { Metadata } from "next";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/callToAction";

export const metadata: Metadata = {
  title: "Haiying Liao's portfolio",
  description: "Haiying Liao's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <main>
          {children}
          <CallToAction />
        </main>

        <Footer />
      </body>
    </html>
  );
}
