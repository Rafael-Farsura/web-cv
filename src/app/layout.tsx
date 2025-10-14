import "./globals.css";

import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";

import { cn } from "@/src/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "auto",
});

const fontHeading = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "Rafael Farsura",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
