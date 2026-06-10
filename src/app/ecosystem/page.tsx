import type { Metadata } from "next";
import Ecosystem from "@/views/ecosystem/Ecosystem";

export const metadata: Metadata = {
  title: "AI Products for Finance, Healthcare & Business | Vibexio",
  description:
    "Explore Vibexio’s AI-powered products for healthcare, education, finance, and analytics—built in India, trusted globally.",
  alternates: { canonical: "https://vibexio.ai/ecosystem" },
};

export default function Page() {
  return <Ecosystem />;
}
