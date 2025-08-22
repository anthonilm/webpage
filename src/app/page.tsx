// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection"; // <-- move import to the top
import EmailSignup from "./components/EmailSignup";
import NewsletterLock from "./components/NewsletterLock";
import SiteFooter from "./components/SiteFooter";
import CookieBanner from "./components/CookieBanner";
import OneOnOneCTA from "./components/OneOnOneCTA";
import SystemSnapshot from "./components/SystemSnapshot";

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
      <Header />
      <main>
        {/* Hero (fills viewport under sticky header) */}
        <section className="section-vh">
          <Hero />
        </section>

        {/* ABOUT pane – full-height, no wrapper padding */}
        <AboutSection />


        <section className="section-vh">
          <SystemSnapshot />
        </section>

        <section className="section-vh">
          <div className="container">
            <h2 style={{ marginBottom: 12 }}>Stay connected</h2>
            <EmailSignup />
          </div>
        </section>

        <section className="section-vh">
          <NewsletterLock items={NL_ITEMS} sectionTitle="Newsletter" />
        </section>
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  );
}
