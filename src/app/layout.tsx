import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { navRoutes } from "./_constants/navRoutes";
import { NavList } from "./_components/NavList";
import Link from "next/link";
import DashboardNav from "./_components/DashboardNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RexPay",
  description: "Payment meets convinience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children} 
      </body>
    </html>
  );
}
