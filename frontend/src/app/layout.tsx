import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import React from "react";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Bloom & Petal | Internet Florist",
  description: "Fresh flowers delivered daily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}