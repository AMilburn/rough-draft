import type { Metadata } from "next";
import { Permanent_Marker, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  variable: "--font-marker",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rough Draft — Design System",
  description: "A handmade design system with character",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${permanentMarker.variable} ${spaceMono.variable} ${inter.variable} antialiased bg-[#f9f6f1] dark:bg-[#0a0a0a]`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="flex">
          <SideNav />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
