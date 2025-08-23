// app/page.tsx
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection"; // <-- move import to the top
import EmailSignup from "./components/EmailSignup";
import NewsletterLock from "./components/NewsletterLock";
import SiteFooter from "./components/SiteFooter";
import CookieBanner from "./components/CookieBanner";
import OneOnOneCTA from "./components/OneOnOneCTA";
import WhoWeAreHorizontal from "./components/WhoWeAreHorizontal"; // <-- NEW

const NL_ITEMS = [
  {
    id: "a1",
    title: "On operating with a weekly rhythm",
    dateISO: "2025-07-01",
    summary: "A concrete cadence for planning, execution, and review that reduces friction.",
    href: "/insights/operating-rhythm",
  },
  {
    id: "a2",
    title: "Cognitive load vs. decision quality",
    dateISO: "2025-06-20",
    summary: "Why reducing concurrent commitments improves attention and error rates.",
    href: "/insights/cognitive-load",
  },
];

export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero (fills viewport under sticky header) */}
        <section className="section-vh">
          <Hero />
        </section>

        {/* ABOUT pane – full-height, no wrapper padding */}
        <AboutSection />

        <section className="section-vh">
          <NewsletterLock items={NL_ITEMS} sectionTitle="Newsletter" />
        </section>

        {/* 1-inch tall Stay Connected strip */}
        <section
          id="newsletter-1in"
          aria-label="Stay connected (1 inch tall)"
          style={{
            height: "1in",
            minHeight: "1in",
            maxHeight: "1in",
            width: "100%",
            boxSizing: "border-box",
            padding: "0 24px", // horizontal only
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontWeight: 800,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                fontSize: 28,
              }}
            >
            
            </h2>
            <div style={{ flex: 1, overflow: "hidden" }}>
              
            </div>
          </div>
        </section>

        {/* NEW: Who We Are horizontal section (above footer) */}
        <WhoWeAreHorizontal />
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  );
}
