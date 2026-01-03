import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: {
    default: "Collabify Growth Labs - Scaling Startups & Creators",
    template: "%s | Collabify Growth Labs",
  },
  description: "Collabify Growth Labs helps startups, creators, and brands move from visibility to real growth via strategy, collaborations, and community.",
  metadataBase: new URL('https://collabify.sbs'),
  openGraph: {
    title: "Collabify Growth Labs - Scaling Startups & Creators",
    description: "Collabify Growth Labs helps startups, creators, and brands move from visibility to real growth via strategy, collaborations, and community.",
    url: 'https://collabify.sbs',
    siteName: 'Collabify Growth Labs',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico', // Assuming you want to use the logo as favicon or have a specific favicon
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
