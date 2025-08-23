"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  const [showLong, setShowLong] = useState(false);
  const router = useRouter();

  const lead =
    `Anthoni McElrath is a founder and consultant delivering integrative, psychology-informed mental performance care. His work operationalizes clarity and momentum through engineered behaviors, nervous-system regulation, and practical structures that make high performance sustainable.`;

  const longVersion = [
    `There was a point in my life where I had read and studied everything I could find—philosophy, psychology, religion, history, and countless approaches to self-care and growth. I consumed knowledge obsessively, believing it would give me the path to a better life. But despite all that study, I couldn’t act. I carried the weight of depression, anxiety, and years of instability. Awareness alone was not enough to move me out of stagnation and into forward movement and growth.`,
    `Through that period, I came to see what the stories of history’s enlightened leaders were really teaching. Their wisdom was not only in what they knew, but in what they did. The path was carried through behavior—how they moved through space, how they acted under strain, and how they created conditions for their best capacities to emerge. We admire them for their ideas and for who they were able to be in practice.`,
    `That realization shifted everything for me. I understood that a quality life is built through the alignment of emotional intelligence with engineered behaviors—actions that sustain long-term growth, protect against what undermines us, and reinforce the conditions for our best function. Mental health is part of it, and it is also about the structures and actions that keep the mind clear, the emotions balanced, and the body capable of carrying us through time with purpose.`,
    `This practice is the translation of that understanding. My work is helping people find stabilty in an unstable political, social, and environmental conditions and building habits and structures that allow them to sustain it.`,
    `The mission is simple: to provide the knowledge, tools, and behaviors that enable people to achieve and sustain their optimum performance. This is performance care in service of life quality. It is also prosocial. When individuals function at their best, they contribute to healthier families, stronger organizations, and more resilient communities.`,
  ];

  const sections = [
    {
      title: "WHAT I DO",
      text: `I deliver integrative, psychology-informed mental performance care rooted in sympathetic nervous system regulation, COM-B modeling, behavior-identifying assessments, identity-structure tools, and applied habit engineering. Every client builds a custom Individual Engagement Plan (IEP) designed for everyday use, strengthening three domains that shape how people function across contexts—organizational skills (creating order, planning effectively, and following through), emotional regulation (maintaining composure and balance under pressure), and cognitive load management (sustaining focus and clarity in high-demand environments). The goal is to make action systematic so clients leave with practices and structures they can operate daily—practical, repeatable, and durable.`,
    },
    {
      title: "ANCHORS OF THE WORK",
      text: `This practice is anchored in two principles: clarity and momentum. Clarity is the ability to see and organize behavior with precision—understanding what drives action, what creates friction, and what conditions support best function. Momentum is the capacity to sustain forward movement through systematic behaviors and habits—carrying clarity into repeated action over time. Together, clarity and momentum form an integrative framework in which awareness sharpens and execution holds, producing stability in daily life and steady progress over time.`,
    },
    {
      title: "MY COMMITMENT",
      text: `In a world of information overload, fractured attention, and constant pressure, performance requires structure. My commitment is to provide that structure through knowledge, tools, and behavioral systems that make clarity and momentum sustainable. The aim is individual improvement with prosocial impact—when people function at their best, they strengthen the families, organizations, and communities they are part of. The outcome is consistent: perform better, recover faster, and live smoother.`,
    },
    {
      title: "OUTCOMES",
      text: `Clients gain sharper organization, steadier regulation, stronger follow-through, and a clearer sense of direction. The systems we build have everyday utility—easing task management, stress regulation, and consistency—and they scale to high-responsibility roles, where clear structure increases team efficiency and supports sound decision-making under pressure. Applied to daily routines or leadership environments, the result is greater function, resilience, and quality of life, sustained by tools that continue to work over time.`,
    },
  ];

  return (
    <main className={inter.className} style={styles.page}>
      {/* Exit button */}
      <button
        aria-label="Close About"
        onClick={() => router.back()}
        style={styles.exitBtn}
      >
        ✕
      </button>

      <div style={styles.container}>
        {/* Italicized opener */}
        <p style={{ ...styles.p, fontStyle: "italic" }}>{lead}</p>

        {/* Long Version button (centered) */}
        <div style={{ margin: "8px 0 12px", textAlign: "center" }}>
          <button
            onClick={() => setShowLong((v) => !v)}
            aria-expanded={showLong}
            style={styles.longBtn}
          >
            Long Version
          </button>
        </div>

        {/* Collapsible Long Version */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: showLong ? 4000 : 0,
            transition: "max-height 360ms ease",
            marginTop: showLong ? 12 : 0,
          }}
        >
          {longVersion.map((p, i) => (
            <p key={i} style={styles.p}>{p}</p>
          ))}
        </div>

        {/* Sections */}
        {sections.map((s, i) => (
          <section key={i} style={{ marginTop: 48 }}>
            <h2 style={styles.h2}>{s.title}</h2>
            <p style={styles.p}>{s.text}</p>
          </section>
        ))}

        <footer style={styles.footer}>© 2025 Anthoni McElrath</footer>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "#fff",
    color: "#000",
    padding: "60px 20px 80px",
    display: "flex",
    justifyContent: "center",
  },
  exitBtn: {
    position: "fixed",
    top: 16,
    left: 16,
    zIndex: 10,
    appearance: "none",
    border: "1px solid rgba(0,0,0,0.12)",
    background: "#fff",
    borderRadius: 8,
    width: 36,
    height: 36,
    fontSize: 20,
    lineHeight: 1,
    cursor: "pointer",
  },
  container: {
    maxWidth: 860,
    width: "100%",
  },
  h2: {
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 14,
  },
  p: {
    fontSize: 18,
    lineHeight: 1.75,
    marginBottom: 24,
  },
  longBtn: {
    appearance: "none",
    display: "inline-block",
    padding: "12px 22px",
    borderRadius: 12,
    background: "#9a9a9a",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.9)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontWeight: 800,
    fontSize: 16,
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.12)",
    cursor: "pointer",
  },
  footer: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
  },
};
