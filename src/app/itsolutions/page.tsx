import type { Metadata } from "next";
import Itsolutions from "@/views/itsolutions/Itsolutions";

export const metadata: Metadata = {
  title: "Custom Software & IT Solutions | Vibexio",
  description:
    "From concept to code, Vibexio builds seamless digital experiences web, mobile, and software systems engineered for real world impact.",
  alternates: { canonical: "https://vibexio.ai/itsolutions" },
};

export default function Page() {
  return <Itsolutions />;
}
