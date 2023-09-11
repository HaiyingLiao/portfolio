import "./globals.css";
import type { Metadata } from "next";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
