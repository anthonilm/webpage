"use client";

import React from "react";

const steps = [
  { title: "Performance Readiness", blurb: "Be mentally prepared for demanding situations, from daily challenges to high-stakes moments." },
  { title: "Targeted Performance Assessment", blurb: "Identify the precise mental and emotional factors holding back your execution and output." },
  { title: "Evidence-Based Cognitive and Behavioral Skills", blurb: "Train mental strategies and behavioral tools that hold under real-world demands." },
  { title: "Personalized Optimization Plan", blurb: "Aligns coping strategies and focus techniques to your individual needs." },
  { title: "Ongoing Support & Adjustment", blurb: "Real-time feedback and refinements to keep your mental and behavioral performance compounding." },
  { title: "Habit Fortification", blurb: "Prevent burnout and safeguard mental well-being when demands are highest." },
];

export default function SystemSnapshot() {
  return (
    <section aria-label="The Noesis Approach">
      <div className="container" id="system-snapshot">
        <h2 style={{ fontSize: "var(--h2)", marginBottom: "1.5rem", letterSpacing: "-0.015em" }}>
          The Noesis Approach
        </h2>

        <div className="grid">
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.title} className="step">
                <div className="badge">{i + 1}</div>
                <div className="copy">
                  <h4>{s.title}</h4>
                  <p>{s.blurb}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="panel" aria-label="Who we work with and outcomes">
            <p>
              I specialize in helping people achieve and sustain optimal mental performance. The approach combines
              cognitive psychology, behavioral science, executive consulting, and operational insight to improve output,
              sharpen decisions, and strengthen well-being—while reducing lapses in focus, engagement, and reliability.
            </p>
            <p>
              Performance states are adjustable through targeted tools, diagnostics, and protocols addressing behavior,
              cognition, relationships, strategies for managing anxiety and depression, and movement efficiency.
            </p>
            <p>Our work focuses on three domains essential to daily performance:</p>
            <ul>
              <li><strong>Organizational skills</strong> – clear, repeatable systems for work and life.</li>
              <li><strong>Emotional regulation</strong> – composure and focus under pressure.</li>
              <li><strong>Cognitive load management</strong> – preventing overwhelm and maintaining clarity.</li>
            </ul>
            <p>
              Clients leave with systems and habits that sustain motivation, improve function, and raise quality of life.
            </p>
            <p>
              Two principles anchor the work: <strong>clarity</strong> (seeing and organizing behavior) and <strong>momentum</strong> (consistent progress toward meaningful goals).
            </p>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(32px, 5vw, 64px) 20px;
          background: var(--bone);
          color: var(--ink, #151515);
        }
        .grid {
          display: grid;
          grid-template-columns: minmax(280px, 420px) 1fr;
          gap: 2rem;
          align-items: start;
        }
        .steps {
          display: grid;
          gap: 12px;
        }
        .step {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 0.75rem;
          align-items: start;
          background: var(--paper, #ffffff);
          border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: var(--shadow-1, 0 2px 8px rgba(0, 0, 0, 0.05));
        }
        .badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          font-weight: 800;
          background: #eef1f6;
          color: var(--ink, #151515);
        }
        .copy h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
        }
        .copy p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.45;
          color: var(--slate, #4a4a4a);
        }
        .panel {
          background: linear-gradient(180deg, #ffffff, #fafafd);
          color: var(--ink, #151515);
          border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          box-shadow: var(--shadow-1, 0 2px 8px rgba(0, 0, 0, 0.05));
          line-height: 1.6;
          font-size: 1.05rem;
        }
        .panel ul {
          padding-left: 1.25rem;
        }
        @media (max-width: 960px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
