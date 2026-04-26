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
      <body
        className="antialiased"
        style={{ backgroundColor: "var(--color-background)", color: "var(--gray-12)" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
