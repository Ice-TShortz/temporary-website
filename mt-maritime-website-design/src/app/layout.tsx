import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "MT Maritime | Global Offshore Support Vessel Operator",
  description:
    "MT Maritime operates a fleet of over 137 offshore support vessels — AHTS, PSV, MPSV, ROV support, crew transfer and standby safety vessels — serving energy operators across 34 countries.",
  keywords: [
    "offshore support vessels",
    "AHTS",
    "PSV",
    "maritime chartering",
    "offshore fleet operator",
    "MT Maritime",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-[var(--font-body)] text-slate-900 antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
