import type { Metadata } from "next";
import AIsolutions from "@/views/aisolutions/AIsolutions";

export const metadata: Metadata = {
  title: "AI Solutions & Intelligent Automation | Vibexio",
  description:
    "From predictive analytics to generative AI, Vibexio helps businesses harness artificial intelligence to automate, optimize, and accelerate growth.",
  alternates: { canonical: "https://vibexio.ai/aisolutions" },
};

export default function Page() {
  return <AIsolutions />;
}
