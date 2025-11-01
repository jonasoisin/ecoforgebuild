import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoForge Build | Sustainable Construction & Renewables",
  description:
    "EcoForge Build delivers integrated construction, solar, and wind solutions led by CEO Daren Adrian Laine to create resilient, low-carbon infrastructure.",
  keywords: [
    "sustainable construction",
    "renewable energy",
    "solar solutions",
    "wind energy",
    "green building",
    "EcoForge Build",
    "low-carbon infrastructure",
  ],
  authors: [{ name: "Daren Adrian Laine" }],
  creator: "EcoForge Build",
  publisher: "EcoForge Build",
  icons: {
    icon: "/image/fav.png",
    shortcut: "/image/fav.png",
    apple: "/image/fav.png",
  },
  openGraph: {
    title: "EcoForge Build | Sustainable Construction & Renewables",
    description:
      "EcoForge Build delivers integrated construction, solar, and wind solutions led by CEO Daren Adrian Laine to create resilient, low-carbon infrastructure.",
    url: "https://ecoforgebuild.com",
    siteName: "EcoForge Build",
    images: [
      {
        url: "/image/fav.png",
        width: 512,
        height: 512,
        alt: "EcoForge Build Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoForge Build | Sustainable Construction & Renewables",
    description:
      "EcoForge Build delivers integrated construction, solar, and wind solutions led by CEO Daren Adrian Laine to create resilient, low-carbon infrastructure.",
    images: ["/image/fav.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
