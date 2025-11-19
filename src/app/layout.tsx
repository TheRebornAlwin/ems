import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ElectroMain | Electrical Craftsmanship for Luxury Homes",
  description:
    "From discreet lighting design to EV chargers and full rewires, ElectroMain delivers immaculate electrical work for luxury homes. NICEIC certified, 5-year warranty, transparent pricing.",
  openGraph: {
    title: "ElectroMain | Electrical Craftsmanship for Luxury Homes",
    description:
      "Premium electrical services for discerning homeowners. NICEIC certified, fully insured, 5-year warranty.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
