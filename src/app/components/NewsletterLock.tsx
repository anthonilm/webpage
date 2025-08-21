"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type NewsletterItem = { id: string; title: string; dateISO: string; summary: string; href: string; };
type Props = { items: NewsletterItem[]; sectionTitle?: string; lockScroll?: boolean; };

export default function NewsletterLock({ items, sectionTitle = "Newsletter", lockScroll = true }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeLock, setActiveLock] = useState(false);

  const isAtBottom = () => {
    const el = containerRef.current;
    if (!el) return false;
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
  };
  const isAtTop = () => {
    const el = containerRef.current;
    if (!el) return true;
    return el.scrollTop <= 1;
  };

  useEffect(() => {
    if (!lockScroll) return;
    const el = containerRef.current;
    if (!el) return;

    const body = document.body;
    const root = document.documentElement;

    const enableBodyScroll = () => { body.style.overflow = ""; root.style.overscrollBehavior = ""; };
    const disableBodyScroll = () => { body.style.overflow = "hidden"; root.style.overscrollBehavior = "contain"; };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const shouldLock = entry.isIntersecting && entry.intersectionRatio >= 0.6;
        setActiveLock(shouldLock);
      },
      { threshold: [0.0, 0.6, 1.0] }
    );

    io.observe(el);
    return () => { io.disconnect(); enableBodyScroll(); };
  }, [lockScroll]);

  useEffect(() => {
    if (!lockScroll) return;
    const body = document.body;
    const root = document.documentElement;
    const enableBodyScroll = () => { body.style.overflow = ""; root.style.overscrollBehavior = ""; };
    const disableBodyScroll = () => { body.style.overflow = "hidden"; root.style.overscrollBehavior = "contain"; };
    if (activeLock) disableBodyScroll(); else enableBodyScroll();
    return () => enableBodyScroll();
  }, [activeLock, lockScroll]);

  useEffect(() => {
    if (!lockScroll) return;
    const onWheel = (e: WheelEvent) => {
      const el = containerRef.current; if (!el) return;
      if (activeLock) {
        const d = e.deltaY;
        if ((isAtTop() && d < 0) || (isAtBottom() && d > 0)) setActiveLock(false);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeLock, lockScroll]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const el = containerRef.current; if (!el || !activeLock) return;
      const PAGE = el.clientHeight;
      if (e.key === "PageDown" || e.key === " ") { e.preventDefault(); el.scrollBy({ top: PAGE, behavior: "smooth" }); if (isAtBottom()) setActiveLock(false); }
      else if (e.key === "PageUp") { e.preventDefault(); el.scrollBy({ top: -PAGE, behavior: "smooth" }); if (isAtTop()) setActiveLock(false); }
      else if (e.key === "Escape") { setActiveLock(false); }
      else if (e.key === "ArrowDown") { el.scrollBy({ top: Math.round(PAGE * 0.9), behavior: "smooth" }); }
      else if (e.key === "ArrowUp") { el.scrollBy({ top: Math.round(-PAGE * 0.9), behavior: "smooth" }); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeLock]);

  const sorted = useMemo(() => [...items].sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()), [items]);
  const formatted = useMemo(
    () => sorted.map(n => ({
      ...n,
      dateLabel: new Date(n.dateISO).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
    })), [sorted]
  );

  return (
    <section className="section" aria-label={sectionTitle} id="newsletter-lock" style={{ padding: 0, marginTop: 32 }}>
      <header className="container" style={{ paddingTop: 48, paddingBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <h2>{sectionTitle}</h2>
          <p className="muted">Recent issues</p>
        </div>
      </header>

      <div
        ref={containerRef}
        className="rail-surface"
        role="region"
        aria-roledescription="Locked vertical scroll list"
        aria-label="Newsletter issues"
        tabIndex={0}
        style={{ position: "relative", height: "100vh", overflowY: "auto", scrollSnapType: "y mandatory" }}
      >
        {formatted.map((n, i) => (
          <article
            key={n.id}
            className={i < formatted.length - 1 ? "issue-divider" : undefined}
            style={{ scrollSnapAlign: "start", minHeight: "100vh", display: "grid", alignItems: "center" }}
            aria-labelledby={`nl-${n.id}-title`}
          >
            <div className="container" style={{ display: "grid", gap: 14 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }} className="muted">
                <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 700 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <time dateTime={n.dateISO}>{n.dateLabel}</time>
              </div>

              <h3 id={`nl-${n.id}-title`} style={{ marginBottom: 6 }}>{n.title}</h3>
              <p style={{ color: "var(--graphite-600)", maxWidth: 860 }}>{n.summary}</p>

              <div style={{ marginTop: 6 }}>
                <a className="btn secondary" href={n.href} aria-label={`Open newsletter issue: ${n.title}`}>Read issue</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="container" style={{ paddingTop: 16, paddingBottom: 48 }}>
        <button className="btn secondary" type="button" onClick={() => setActiveLock(false)} aria-label="Exit locked scroll">
          Exit
        </button>
      </footer>
    </section>
  );
}
