import type { Metadata } from "next";
import { Marcellus, Mulish } from "next/font/google";
import settings from "@/content/settings.json";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const mulish = Mulish({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: settings.metaTitle,
  description: settings.metaDescription,
  openGraph: {
    title: settings.siteName,
    description: settings.metaDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${mulish.variable}`}>
        {children}
      </body>
    </html>
  );
}
