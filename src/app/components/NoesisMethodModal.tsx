"use client";

import React, { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function NoesisMethodModal({ open, onClose }: Props) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="nm-backdrop" onClick={onClose} />

      {/* FULL-SCREEN Dialog */}
      <div
        className="nm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nm-title"
      >
        {/* Close */}
        <button className="nm-x" aria-label="Close" onClick={onClose}>
          ×
        </button>

        <div className="nm-wrap">
          <h2 id="nm-title" className="nm-h">The Noesis Approach</h2>

          <div className="nm-cols">
            {/* Left: Steps (tiles) */}
            <div className="nm-list">
              {[
                {
                  n: 1,
                  t: "Performance Readiness",
                  b: "Be mentally prepared for demanding situations, from daily challenges to high-stakes moments.",
                },
                {
                  n: 2,
                  t: "Targeted Performance Assessment",
                  b: "Identify the precise mental and emotional factors holding back your execution and output.",
                },
                {
                  n: 3,
                  t: "Evidence-Based Cognitive and Behavioral Skills",
                  b: "Train mental strategies and behavioral tools that hold under real-world demands.",
                },
                {
                  n: 4,
                  t: "Personalized Optimization Plan",
                  b: "Align coping strategies and focus techniques to your individual needs.",
                },
                {
                  n: 5,
                  t: "Ongoing Support & Adjustment",
                  b: "Real-time feedback and refinements to keep your mental and behavioral performance compounding.",
                },
                {
                  n: 6,
                  t: "Habit Fortification",
                  b: "Prevent burnout and safeguard mental well-being when demands are highest.",
                },
              ].map(({ n, t, b }) => (
                <article key={n} className="nm-card">
                  <div className="nm-badge">{n}</div>
                  <div className="nm-cardbody">
                    <h3 className="nm-ctitle">{t}</h3>
                    <p className="nm-cbody">{b}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Right: Text panel */}
            <div className="nm-panel">
              <p>
                I specialize in helping people achieve and sustain optimal mental performance. The approach combines
                cognitive psychology, behavioral science, executive consulting, and operational insight to improve
                output, sharpen decisions, and strengthen well-being—while reducing lapses in focus, engagement, and
                reliability.
              </p>
              <p>
                Performance states are adjustable through targeted tools, diagnostics, and protocols addressing behavior,
                cognition, relationships, strategies for managing anxiety and depression, and movement efficiency.
              </p>
              <p><strong>Our work focuses on three domains essential to daily performance:</strong></p>
              <ul>
                <li><strong>Organizational skills</strong> – clear, repeatable systems for work and life.</li>
                <li><strong>Emotional regulation</strong> – composure and focus under pressure.</li>
                <li><strong>Cognitive load management</strong> – preventing overwhelm and maintaining clarity.</li>
              </ul>
              <p>
                Clients leave with systems and habits that sustain motivation, improve function, and enhace quality of
                life. 
                </p>
              <p>
              There are two principles at the center of our work: <strong>clarity</strong> –– seeing and organizing behavior –– and <strong>momentum</strong> –– consistent, self-directed progress toward meaningful goals. This is structure, measurable, execution-focused mental health support.

              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Backdrop */
        .nm-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(2px);
          z-index: 1000;
        }

        /* FULL-SCREEN dialog */
        .nm-dialog {
          position: fixed;
          inset: 0;                  /* fill the screen */
          width: 100vw;
          height: 100vh;
          background: #e9e3da;       /* warm neutral like screenshot */
          border-radius: 0;           /* full-bleed */
          box-shadow: none;           /* no outer shadow when full-screen */
          z-index: 1001;
          overflow: auto;             /* scroll content if needed */
        }

        /* Close button fixed to top-right inside dialog */
        .nm-x {
          position: fixed;
          top: max(12px, env(safe-area-inset-top, 12px));
          right: max(16px, env(safe-area-inset-right, 16px));
          z-index: 1002;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          font-size: 24px;
          line-height: 1;
          border: none;
          border-radius: 8px;
          background: rgba(0,0,0,0.10);
          cursor: pointer;
        }

        .nm-wrap {
          padding: clamp(16px, 2.5vw, 28px);
          padding-top: clamp(28px, 4vw, 36px);
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header stays centered */
        .nm-h {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          margin: 6px 8px 16px 8px;
          font-weight: 800;
          letter-spacing: -0.01em;
          text-align: center;
        }

        .nm-cols {
          display: grid;
          gap: 18px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
          .nm-cols {
            grid-template-columns: 1.1fr 1fr; /* left list | right prose */
            gap: 26px;
          }
        }

        .nm-list {
          display: grid;
          gap: 14px;
        }

        .nm-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 14px;
          align-items: start;
          padding: 14px 16px;
          border-radius: 14px;
          background: #f7f5f1;
          box-shadow:
            0 1px 0 rgba(0,0,0,0.04),
            0 8px 22px rgba(0,0,0,0.10);
        }

        .nm-badge {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          font-weight: 800;
          border-radius: 10px;
          background: #fff;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
        }

        .nm-ctitle {
          margin: 0 0 4px 0;
          font-size: 1.06rem;
          font-weight: 800;
        }

        .nm-cbody {
          margin: 0;
          line-height: 1.55;
          color: rgba(0,0,0,0.8);
        }

        .nm-panel {
          background: #ffffff;
          border-radius: 14px;
          padding: 16px 18px;
          box-shadow:
            0 1px 0 rgba(0,0,0,0.04),
            0 8px 22px rgba(0,0,0,0.10);
        }
        .nm-panel p { margin: 0 0 12px 0; }
        .nm-panel ul { margin: 0 0 12px 20px; list-style: disc; }
        .nm-panel li { margin: 4px 0; }

        /* Force left alignment for everything except the header */
        .nm-cols,
        .nm-list,
        .nm-card,
        .nm-cardbody,
        .nm-ctitle,
        .nm-cbody,
        .nm-panel,
        .nm-panel p,
        .nm-panel ul,
        .nm-panel li {
          text-align: left !important;
        }
      `}</style>
    </>
  );
}
