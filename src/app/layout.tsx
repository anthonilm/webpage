// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noesis Systems LLC",
  description: "Perform Better. Recover Faster. Rest Easy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Assuming you already register Geist / Geist Mono elsewhere in the project
  // (e.g., with next/font/local in _fonts.ts and set CSS vars --font-geist / --font-geist-mono)
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
