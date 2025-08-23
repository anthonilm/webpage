import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header"; // ← adjust this import to your Header.tsx location

export const metadata: Metadata = {
  title: "NOESIS",
  description: "Noesis Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
