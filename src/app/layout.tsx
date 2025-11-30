import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ElectroMain | Electrical Craftsmanship for Luxury Homes",
  description:
    "From discreet lighting design to EV chargers and full rewires, ElectroMain delivers immaculate electrical work for luxury homes. NICEIC certified, 5-year warranty, transparent pricing.",
  icons: {
    icon: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60FmTLuoPPqBu1Ck3sFtU0nNXgLi9Y7TbyjhxD",
    shortcut: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60FmTLuoPPqBu1Ck3sFtU0nNXgLi9Y7TbyjhxD",
    apple: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60FmTLuoPPqBu1Ck3sFtU0nNXgLi9Y7TbyjhxD",
  },
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
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen">
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
