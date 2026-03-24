import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Platte Daken Driesen",
  description:
    "Lokale specialist in platte daken, EPDM, roofing, renovatie, herstellingen en dakisolatie in Dessel en de Kempen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-BE" className="scroll-smooth">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
