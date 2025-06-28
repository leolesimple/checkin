import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@app/ui/navbar"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Special Event - September 10, 2025",
  description: "Join us for an exclusive event at the Steve Jobs Theater, Cupertino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} font-sans bg-stone-900 text-neutral-100 antialiased`}
      >
      <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
