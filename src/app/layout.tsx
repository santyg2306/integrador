import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { TopMenu } from "@/components";
import { Footer } from "@/components/ui/footer_/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyMats",
  description: "tida para compra de materiales de construccion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title> EasyMats</title>
      <body className={inter.className}><TopMenu />{children}<Footer /></body>
    </html>
  );
}
