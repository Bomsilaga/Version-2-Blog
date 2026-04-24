import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnGroundPM — Construction PM & Estimating, Melbourne West",
  description:
    "Fixed-price construction estimates and project management for small builders, renovators and owner-builders across Melbourne's western suburbs. Civil engineer, MIEAust, 14+ years experience.",
  keywords: [
    "construction estimating Melbourne",
    "project management Melbourne West",
    "quantity surveyor Wyndham Vale",
    "building estimate Point Cook",
    "construction PM Tarneit",
    "owner builder support Melbourne",
  ],
  authors: [{ name: "OnGroundPM" }],
  creator: "OnGroundPM",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://ongroundpm.com.au",
    siteName: "OnGroundPM",
    title: "OnGroundPM — Construction PM & Estimating, Melbourne West",
    description:
      "Fixed-price construction estimates and project management for small builders, renovators and owner-builders in Melbourne's western suburbs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OnGroundPM — Construction PM & Estimating, Melbourne West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OnGroundPM — Construction PM & Estimating, Melbourne West",
    description:
      "Fixed-price construction estimates and project management for Melbourne's west.",
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
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
