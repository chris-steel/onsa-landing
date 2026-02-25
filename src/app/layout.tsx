import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onsa — Interview scheduling, simplified",
  description:
    "Onsa coordinates availability for recruiters, enabling clients and candidates — no chasing, no confusion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
