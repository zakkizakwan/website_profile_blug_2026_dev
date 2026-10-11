import type { Metadata } from "next";
import { Inter, Montserrat, Hanken_Grotesk, Karantina } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const karantina = Karantina({ subsets: ["latin"], weight: "700", variable: "--font-karantina" });
const hanken_grotesk = Hanken_Grotesk({ subsets: ["latin"], weight: "400", variable: "--font-hanken" });
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "BLUG - Batam Linux User Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${montserrat.variable} ${hanken_grotesk.variable} ${karantina.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}