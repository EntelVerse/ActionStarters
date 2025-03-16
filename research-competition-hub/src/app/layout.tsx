import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sciencecompete.com"),
  title: "ScienceCompete | Research & Scientific Competitions Hub",
  description: "Discover the latest scientific research competitions, grants, and funding opportunities for researchers, students, and institutions worldwide.",
  keywords: [
    "scientific research grants",
    "research funding opportunities",
    "science competitions",
    "science awards",
    "academic grants",
    "research funding",
    "grants database"
  ],
  authors: [{ name: "ScienceCompete", url: "https://sciencecompete.com" }],
  creator: "ScienceCompete",
  publisher: "ScienceCompete",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sciencecompete.com",
    title: "ScienceCompete | Research & Scientific Competitions Hub",
    description: "Find the latest grants, awards, and funding opportunities for scientists, researchers, and institutions worldwide.",
    siteName: "ScienceCompete",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScienceCompete - Research & Scientific Competitions Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScienceCompete | Research & Scientific Competitions Hub",
    description: "Find the latest grants, awards, and funding opportunities for scientists, researchers, and institutions worldwide.",
    images: ["/images/twitter-image.jpg"],
    creator: "@sciencecompete",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
