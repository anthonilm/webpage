"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const HEADER_HEIGHT = 80; // keep this in sync with sections that subtract header height

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fixed colors -> same on server and client (prevents hydration mismatch)
  const bg   = "#F8F6F2";
  const ink  = "#111111";
  const line = "rgba(0,0,0,0.08)";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: bg,
        borderBottom: `1px solid ${line}`,
        boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.06)" : "none",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          height: HEADER_HEIGHT,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 16px",
          columnGap: 8,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* left */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            aria-label="Search"
            style={{ appearance: "none", background: "transparent", border: 0, cursor: "pointer", padding: 6, color: ink }}
            onClick={() => (window.location.href = "/search")}
            title="Search"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <div style={{ width: 1, height: 24, background: line }} />
          <nav style={{ display: "flex", gap: 18, whiteSpace: "nowrap" }}>
            <Link href="/about" style={nav(ink)}>ABOUT</Link>
            <Link href="/newsletter" style={nav(ink)}>NEWSLETTER</Link>
            <Link href="/insights" style={nav(ink)}>THE NOESIS METHOD</Link>
          </nav>
        </div>

        {/* center brand */}
        <div style={{ textAlign: "center", fontWeight: 900, letterSpacing: "0.04em", color: ink, fontSize: 22 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>NOESIS</Link>
        </div>

        {/* right */}
        <nav style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 24, whiteSpace: "nowrap" }}>
          <Link href="/services" style={nav(ink)}>CONSULTING SERVICES</Link>
          <Link href="/for-students" style={nav(ink)}>10 TOOLS</Link>
          <Link href="/contact" style={nav(ink)}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

function nav(color: string): React.CSSProperties {
  return { color, textDecoration: "none", fontWeight: 800, letterSpacing: "0.02em", fontSize: 14, margin: 0, padding: 0 };
}
