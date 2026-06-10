import type { Metadata } from "next";
import Home from "@/views/home/Home";

export const metadata: Metadata = {
  title: "Enterprise Grade AI & Custom Software Development | Vibexio",
  description:
    "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide.",
  alternates: { canonical: "https://vibexio.ai/" },
};

export default function Page() {
  return <Home />;
}
