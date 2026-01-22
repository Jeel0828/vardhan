import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vardhan Project | Premium Real Estate & Properties",
  description:
    "Discover Vardhan Project - Premium residential properties with world-class amenities, expert consultation, and prime location. Get your dream home today!",
  keywords: [
    "Vardhan Project",
    "real estate",
    "properties",
    "residential",
    "apartments",
    "premium homes",
    "property investment",
    "floor plans",
    "amenities",
  ],
  authors: [{ name: "Vardhan" }],
  creator: "Vardhan",
  publisher: "Vardhan",
  robots: "index, follow",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vardhanproject.com",
    siteName: "Vardhan Project",
    title: "Vardhan Project | Premium Real Estate & Properties",
    description:
      "Discover Vardhan Project - Premium residential properties with world-class amenities, expert consultation, and prime location.",
    images: [
      {
        url: "https://vardhanproject.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vardhan Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardhan Project | Premium Real Estate & Properties",
    description:
      "Discover Vardhan Project - Premium residential properties with world-class amenities.",
    images: ["https://vardhanproject.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://vardhanproject.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
