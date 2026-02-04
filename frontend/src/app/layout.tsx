import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import React from "react";
import Navbar from "@/components/Navbar"; // Ensure Navbar is imported if used here, or keep it in pages

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
      <body className={`${montserrat.className} bg-[#FAFAFA] relative overflow-x-hidden text-gray-900`}>
        <CartProvider>
          {/* --- GLOBAL APPLE PRO BACKGROUND --- */}
          {/* 1. Large Pink Glow (Top Left) */}
          <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#F72585] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08] animate-blob -z-10 pointer-events-none"></div>
          
          {/* 2. Large Purple Glow (Bottom Right) */}
          <div className="fixed bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.1] animate-blob animation-delay-2000 -z-10 pointer-events-none"></div>

          {/* 3. Subtle Blue Glow (Middle - optional depth) */}
          <div className="fixed top-[40%] left-[30%] w-[600px] h-[600px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-blob animation-delay-4000 -z-10 pointer-events-none"></div>

          {/* The Page Content */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}