import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingMenu from "@/components/FloatingMenu";

export const metadata: Metadata = {
  metadataBase: new URL("https://vibexio.ai"),
  title: {
    default: "Vibexio | Enterprise Grade AI, OCR, and Custom Software Development",
    template: "%s | Vibexio",
  },
  description:
    "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide.",
  authors: [{ name: "Vibexio" }],
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.webp" },
  alternates: { canonical: "https://vibexio.ai/" },
  openGraph: {
    type: "website",
    url: "https://vibexio.ai/",
    siteName: "Vibexio",
    title: "Vibexio | Enterprise Grade AI, OCR, and Custom Software Development",
    description:
      "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide.",
    images: ["https://vibexio.ai/og-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vibexio",
    title: "Vibexio | Enterprise Grade AI, OCR, and Custom Software Development",
    description:
      "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide.",
    images: ["https://vibexio.ai/og-image.webp"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu, India",
    "geo.position": "13.0827;80.2707",
    ICBM: "13.0827, 80.2707",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  themeColor: "#BECCDD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">{children}</main>
          <FloatingMenu />
          <Footer />
        </div>
      </body>
    </html>
  );
}
