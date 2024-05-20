import QueryWrapper from "@/components/query-wrapper";
import CampaignCheckerWrapper from "@/components/campaign-checker-wrapper";
import "../globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import AuthGuardWrapper from "@/components/auth-guard-wrapper";

export const metadata: Metadata = {
  title: "MRR - CRM",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <QueryWrapper>
          <AuthGuardWrapper>
            <CampaignCheckerWrapper>
              {children}
            </CampaignCheckerWrapper>
          </AuthGuardWrapper>
        </QueryWrapper>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
