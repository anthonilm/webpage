"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // theme-friendly helpers (fallbacks if your CSS vars aren’t defined)
  const ivory = getComputedStyleSafe("--ivory", "#ffffff");
  const ink = getComputedStyleSafe("--ink", "#111111");
  const line = getComputedStyleSafe("--line", "rgba(0,0,0,0.1)");

  const NAV = [
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/for-students", label: "FOR STUDENTS" },
    { href: "/insights", label: "INSIGHTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: ivory,
        borderBottom: `1px solid ${line}`,
        boxShadow: isScrolled ? "0 1px 6px rgba(0,0,0,0.06)" : "none",
      }}
      aria-label="Site header"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          minHeight: 68,
          padding: "0 16px",
          columnGap: 8,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Left: search icon + divider + (optional) quick links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            minWidth: 0,
          }}
        >
          <button
            aria-label="Search"
            style={{
              appearance: "none",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              padding: 6,
              lineHeight: 0,
              color: ink,
            }}
            onClick={() => {
              // wire to your search route/modal if you have one
              window.location.href = "/search";
            }}
            title="Search"
          >
            {/* simple magnifier svg (no external icon lib) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* vertical divider like the screenshot */}
          <div style={{ width: 1, height: 24, background: line }} />

          {/* Left inline links (optional). Keep minimal for cleanliness. */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            aria-label="Primary"
          >
            <Link href="/about" style={navStyle(ink)}>ABOUT</Link>
            <Link href="/insights" style={navStyle(ink)}>INSIGHTS</Link>
          </nav>
        </div>

        {/* Center: brand (bold, uppercase, centered) */}
        <div
          style={{
            textAlign: "center",
            fontWeight: 900,
            letterSpacing: "0.04em",
            color: ink,
            fontSize: 22,
          }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          
          </Link>
        </div>

        {/* Right: main links */}
        <nav
          aria-label="Secondary"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 24,
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} style={navStyle(ink)}>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ------- helpers ------- */
function getComputedStyleSafe(varName: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return v || fallback;
}

function navStyle(color: string): React.CSSProperties {
  return {
    color,
    textDecoration: "none",
    fontWeight: 800,
    letterSpacing: "0.02em",
    fontSize: 14,
  };
}
