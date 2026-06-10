import type { Metadata } from "next";
import PrivacyPolicies from "@/views/privacypolicies/PrivacyPolicies";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | Vibexio",
  description:
    "Read Vibexio's privacy policy and terms and conditions. We are committed to safeguarding your personal and organizational data.",
  alternates: { canonical: "https://vibexio.ai/privacypolicies" },
};

export default function Page() {
  return <PrivacyPolicies />;
}
