import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibexio.ai"),
  title: {
    default: "Vibexio | Enterprise Grade AI, OCR, and Custom Software Development",
    template: "%s | Vibexio",
  },
  description:
    "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide.",
  keywords: [
    "AI solutions",
    "OCR",
    "custom software",
    "enterprise automation",
    "SaaS",
    "machine learning",
    "document intelligence",
    "Vibexio",
  ],
  authors: [{ name: "Vibexio" }],
  creator: "Vibexio",
  publisher: "Vibexio",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibexio.ai",
    siteName: "Vibexio",
    title: "Vibexio | Enterprise Grade AI, OCR, and Custom Software Development",
    description:
      "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vibexio - Enterprise Grade AI & Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vibexio",
    creator: "@vibexio",
    title: "Vibexio | Enterprise Grade AI, OCR, and Custom Software Development",
    description:
      "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu, India",
    "geo.position": "13.0827;80.2707",
    ICBM: "13.0827, 80.2707",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} data-scroll-behavior="smooth">
      <body className="font-[family-name:var(--font-inter)] antialiased bg-bg-primary text-text-primary">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <FloatingContact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
