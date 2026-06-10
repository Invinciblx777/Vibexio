import type { Metadata } from "next";
import Collaborate from "@/views/collaborate/Collaborate";

export const metadata: Metadata = {
  title: "Contact Us | Talk to AI & Automation Experts | Vibexio",
  description:
    "Get in touch with Vibexio to discuss AI automation, OCR, and custom software solutions for your business.",
  alternates: { canonical: "https://vibexio.ai/collaborate" },
};

export default function Page() {
  return <Collaborate />;
}
