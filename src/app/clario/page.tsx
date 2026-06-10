import type { Metadata } from "next";
import Clario from "@/views/clario/Clario";

export const metadata: Metadata = {
  title: "Clario | AI-Powered OCR & Analytics | Vibexio",
  description:
    "Clario is an AI-powered OCR and analytics platform by Vibexio that converts documents into structured, actionable data.",
  alternates: { canonical: "https://vibexio.ai/clario" },
};

export default function Page() {
  return <Clario />;
}
