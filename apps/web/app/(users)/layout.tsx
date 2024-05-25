import QueryWrapper from "@/components/query-wrapper";
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
            {children}
          </AuthGuardWrapper>
        </QueryWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
