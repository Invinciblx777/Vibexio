import type { Metadata } from "next";
import Kubyn from "@/views/kubyn/Kubyn";

export const metadata: Metadata = {
  title: "Kubyn | AI Personal Finance & Risk Intelligence | Vibexio",
  description:
    "Kubyn is an AI-powered finance intelligence platform by Vibexio, helping individuals and SMEs plan smarter, manage risk, and gain actionable financial insights.",
  alternates: { canonical: "https://vibexio.ai/kubyn" },
};

export default function Page() {
  return <Kubyn />;
}
