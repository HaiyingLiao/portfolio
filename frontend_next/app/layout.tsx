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
      <body className="bg-white-800 dark:bg-black-300 px-[85px] pt-9">
        <NavBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
