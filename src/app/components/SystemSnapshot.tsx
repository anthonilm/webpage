"use client";

import React from "react";

const steps = [
  { title: "Performance Readiness", blurb: "Be mentally prepared for demanding situations, from daily challenges to high-stakes moments." },
  { title: "Targeted Performance Assessment", blurb: "Identify the precise mental and emotional factors holding back your execution and output." },
  { title: "Evidence-Based Cognitive and Behavioral Skills", blurb: "Train mental strategies and behavioral tools that hold under real-world demands." },
  { title: "Personalized Optimization Plan", blurb: "Aligns coping strategies and focus techniques to your individual needs." },
  { title: "Ongoing Support & Adjustment", blurb: "Real-time feedback and refinements to keep your mental and behavorial performance compounding." },
  { title: "Habit Fortification", blurb: "Prevent burnout and safeguard mental well-being when demands are highest." },
];

export default function SystemSnapshot(){
  return (
    <section aria-label="The Noesis Approach">
      <div className="container">
        <h2 style={{ fontSize: "var(--h2)", marginBottom: "1.5rem", letterSpacing: "-0.015em" }}>
          The Noesis Approach
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 420px) 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Left: stacked step tiles */}
          <div style={{ display: "grid", gap: "12px" }}>
            {steps.map((s, i) => (
              <div
                key={s.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: "0.75rem",
                  alignItems: "start",
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  boxShadow: "var(--shadow-1)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    background: "#EEF1F6",
                    color: "var(--ink)",
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ display: "grid", gap: "0.2rem" }}>
                  <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>{s.title}</h4>
                  <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.45, color: "var(--slate)" }}>
                    {s.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: high-visibility paragraph panel */}
          <aside
            aria-label="Who we work with and outcomes"
            style={{
              background: "linear-gradient(180deg, #FFFFFF, #FAFAFD)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 14,
              padding: "1.25rem 1.5rem",
              boxShadow: "var(--shadow-1)",
              lineHeight: 1.6,
              fontSize: "1.05rem",
            }}
          >
            <p>
              I specilize in helping people achieve and sustain optimal mental performance. My approach combines
              cognitive psychology, behavioral science, executive consulting, and operational insight to improve output,
              sharpen decisions, and strengthen well-being—while reducing lapses in focus, engagement, and reliability.
            </p>
            <p>
              I view performance states as adjustable through targeted tools, diagnostics, and protocols addressing behavior,
              cognition, relationships, strategies for managing anxiety and depression, and movement efficiency.
            </p>
            <p>Our work will focus on three domains essential to daily performance:</p>
            <ul style={{ paddingLeft: "1.25rem" }}>
              <li><strong>Organizational skills</strong> – clear, repeatable systems for work and life.</li>
              <li><strong>Emotional regulation</strong> – composure and focus under pressure.</li>
              <li><strong>Cognitive load management</strong> – preventing overwhelm and maintaining clarity.</li>
            </ul>
            <p>
              These skills directly impact follow-through and long-term momentum. Clients leave with systems and habits,
              leading to sustained motivation, improved function, and a higher quality of life.
            </p>
            <p>
              There are two principles at the center of our work: <strong>clarity</strong> –– seeing and organizing behavior –– and
              <strong> momentum</strong> –– consistent, self-directed progress toward meaningful goals. This is structure, measurable,
              execution-focused mental health support.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
