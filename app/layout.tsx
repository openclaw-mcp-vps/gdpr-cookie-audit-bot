import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Audit Bot – Scan Websites for Cookie Violations",
  description: "Crawl websites to detect undeclared cookies, missing consent banners, and GDPR compliance gaps with actionable fix recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="632938c7-10c4-4d88-9fc6-25a0e7a77ea0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
