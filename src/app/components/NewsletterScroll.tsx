"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type NewsletterItem = {
  id: string;
  title: string;   // cleaned title
  dateISO: string; // for sorting only
  summary: string;
  href: string;    // pdf link
};

export default function NewsletterScroll({ items }: { items: NewsletterItem[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeLock, setActiveLock] = useState(true);

  // Lock body scroll when inside section
  useEffect(() => {
    if (!activeLock) return;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "contain";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
    };
  }, [activeLock]);

  const sorted = useMemo(
    () => [...items].sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()),
    [items]
  );

  // Height of the sticky page heading in px (adjust if you change the header size)
  const HEADER_H = 96;

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(to bottom, #F8F6F2, #FFFFFF)",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        color: "#111",
        fontFamily: "var(--font-geist-sans)",
      }}
    >
      {/* Sticky heading */}
      <header
        style={{
          position: "sticky",
          top: 0,
          height: HEADER_H,
          display: "grid",
          placeItems: "center",
          padding: "0 1.5rem",
          background: "#F8F6F2cc",
          backdropFilter: "blur(8px)",
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          zIndex: 10,
        }}
      >
        Noesis Insights
      </header>

      {/* Scroll area */}
      <div
        ref={containerRef}
        style={{
          overflowY: "auto",
          scrollSnapType: "y mandatory",
          // make snap positions respect the sticky heading height
          scrollPaddingTop: HEADER_H,
          height: "100%",
        }}
      >
        {sorted.map((n, i) => {
          const motionProps =
            i === 0
              ? {
                  initial: false,
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0 },
                }
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.3 },
                  transition: { duration: 0.6 },
                };

        return (
          <motion.article
            key={n.id}
            {...motionProps}
            style={{
              scrollSnapAlign: "start",
              // full viewport minus sticky heading so content is visible immediately
              minHeight: `calc(100vh - ${HEADER_H}px)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              borderBottom: i < sorted.length - 1 ? "1px solid #e5e5e5" : "none",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontFamily: "var(--font-cormorant)",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              {n.title}
            </h2>

            <p
              style={{
                maxWidth: "700px",
                textAlign: "center",
                marginBottom: "1.5rem",
                color: "#444",
              }}
            >
              {n.summary}
            </p>

            <a
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                background: "#111",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Read Issue
            </a>
          </motion.article>
        );})}
      </div>

      <footer style={{ padding: "1rem", textAlign: "center" }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setActiveLock(false)}
        >
          Exit Scroll Lock
        </button>
      </footer>
    </section>
  );
}
