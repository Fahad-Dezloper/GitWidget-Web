import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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

// SEO-optimized metadata for GitWidget
export const metadata: Metadata = {
  title: "GitWidget | Track Your GitHub Contributions on Desktop",
  description:
    "GitWidget is a free, lightweight desktop widget for Windows and macOS that lets developers track their GitHub contributions and top languages at a glance. Built with Electron, React, and TypeScript.",
  keywords: [
    "GitWidget",
    "GitHub contribution tracker",
    "desktop widget for GitHub",
    "Electron GitHub app",
    "open-source developer tool",
    "Windows macOS GitHub widget",
  ],
  authors: [{ name: "Fahad Dezloper", url: "https://github.com/Fahad-Dezloper" }],
  robots: "index, follow",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  alternates: {
    canonical: "https://gitwidget.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Fahad Dezloper" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data*/}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GitWidget",
              operatingSystem: "Windows, macOS",
              applicationCategory: "DeveloperTool",
              description:
                "GitWidget is a free, lightweight Electron-based desktop widget that displays your GitHub contributions and top languages for developers.",
              url: "https://gitwidget.vercel.app",
              author: {
                "@type": "Person",
                name: "Fahad Dezloper",
                url: "https://github.com/Fahad-Dezloper",
              },
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
