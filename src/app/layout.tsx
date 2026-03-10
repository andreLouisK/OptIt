import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

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
    default: "OptIT | Spesialist på CAD, PLM og Industriell Automatisering",
    template: "%s | OptIT"
  },
  description: "OptIT er basert i Norge og hjelper industribedrifter med optimalisering av produktflyt, CAD/PLM-integrasjoner og smarte automatiseringsløsninger.",
  keywords: ["CAD", "PLM", "Industri 4.0", "Automatisering", "API-integrasjon", "Norge", "Optimalisering", "Konstruksjon"],
  authors: [{ name: "André Louis Kristensen" }],
  metadataBase: new URL('https://optit.no'),
  
  openGraph: {
    title: "OptIT - Din partner for teknisk utvikling",
    description: "Spesialistløsninger for en sømløs produktflyt i industrien.",
    url: "https://optit.no",
    siteName: "OptIT",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OptIT - Industriell Automatisering og CAD/PLM spesialist",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "OptIT - Din partner for teknisk utvikling",
    description: "Spesialistløsninger for en sømløs produktflyt i industrien.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}