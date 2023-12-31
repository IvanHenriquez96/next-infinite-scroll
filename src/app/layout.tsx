import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
// import localFont from "@next/font/local";

const inter = Press_Start_2P({ weight: "400", subsets: ["latin"] });

// const fontDigimon = localFont({ src: "/public/fonts/PixelDigivolve-mOm9.ttf" });

export const metadata: Metadata = {
  title: "IHenriquez - Digimon Infinite Scroll",
  description: "Aplicación hecha en NextJS 13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
