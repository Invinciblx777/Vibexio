import type { Metadata } from "next";
import Inside from "@/views/inside/Inside";

export const metadata: Metadata = {
  title: "Inside Vibexio | Global AI & Automation Company",
  description:
    "Vibexio is a global AI company headquartered in Tamil Nadu, India, building intelligent automation and AI-driven solutions for modern businesses.",
  alternates: { canonical: "https://vibexio.ai/inside" },
};

export default function Page() {
  return <Inside />;
}
