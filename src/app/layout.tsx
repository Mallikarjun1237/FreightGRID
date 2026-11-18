import type { Metadata } from "next";
// @ts-ignore Next.js handles global CSS imports at build time.
import "./globals.css";
import LenisProvider from "@/components/smooth-scroll/LenisProvider";

export const metadata: Metadata = {
  title: "FREIGHTGRID | Rural Freight Intelligence & Optimization Network",
  description:
    "Turning fragmented rural freight into coordinated supply. A quantum-inspired freight command center for APMC mandis and FPOs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F6F3EA] text-[#18191B] selection:bg-[#E89228] selection:text-[#18191B]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
