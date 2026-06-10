import type { Metadata } from "next";
import Pathways from "@/views/pathways/Pathways";

export const metadata: Metadata = {
  title: "Pathways to AI-Driven Transformation | Vibexio",
  description:
    "Explore Vibexio’s pathways to AI-driven transformation—from strategy and automation to scalable digital systems tailored for business growth.",
  alternates: { canonical: "https://vibexio.ai/pathways" },
};

export default function Page() {
  return <Pathways />;
}
