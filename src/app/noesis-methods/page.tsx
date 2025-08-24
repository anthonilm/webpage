"use client";

import Link from "next/link";
import styles from "./methods.module.css";

export default function NoesisMethodsPage() {
  return (
    <main className={styles.page} aria-labelledby="title">
      {/* HERO — left = 2 paras; right = white title only */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid}>
          <div className={`${styles.heroMedia} ${styles.heroCenter}`} aria-label="Noesis overview">
            <div className={styles.heroCopy}>
              <p className={styles.heroKicker}>
                Integrated mental healthcare focused on function: structured behavioral and cognitive work that improves
                clarity, regulation, and execution in real life.
              </p>
              <p className={styles.heroKicker}>
                Assessment informs care. We use short, reliable measures and week-by-week observations, then activate a
                plan that compounds progress and holds under pressure.
              </p>
            </div>
          </div>

          {/* Right column: title only (white), centered within its column */}
          <div className={`${styles.heroCopy} ${styles.heroCenter}`}>
            <h1 id="title" className={styles.heroTitle}>Working with Us</h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <p className={styles.introEyebrow}>OUR METHOD</p>
        <h2 className={styles.introTitle}>Behavioral clarity first, then a plan you can live in.</h2>
        <p className={styles.introBody}>
          We begin with a 50-item COM-B intake covering six cores—Executive Function &amp; Focus, Emotional Regulation,
          Identity Alignment, Environmental Scaffolding, Behavioral Momentum, and Interpersonal Support. Scores map to
          Capability, Opportunity, and Motivation and guide practical decisions about routines, context edits, and
          session cadence. Tools are chosen for empirical footing, clinical usefulness, clear norms, day-to-day
          practicality, and sensitivity to change.
        </p>
        <div className={styles.introRule} aria-hidden="true" />
      </section>

      {/* PHASES — right side shows ONLY the phase label; fully right-aligned */}
      <section className={styles.rail} aria-label="Method phases">
        <div className={styles.railTrack}>
          {/* Phase 1 */}
          <article className={styles.panel} aria-label="Phase 1 Diagnostic & Map">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 1</p>
                <h4 className={styles.panelKicker}>Diagnostic &amp; Map</h4>
                <p className={styles.panelBody}>
                  Short COM-B intake establishes a current-state map across capability, opportunity, and motivation.
                  We read domain bands to locate friction, stability, and near-term priorities—so the plan targets what
                  actually changes outcomes.
                </p>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 1</span>
              </div>
            </div>
          </article>

          {/* Phase 1.5 — Audit Week */}
          <article className={styles.panel} aria-label="Phase 1.5 Audit Week">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 1.5</p>
                <h4 className={styles.panelKicker}>Audit Week (7-Day Performance Audit)</h4>
                <p className={styles.panelBody}>
                  One week of real-life logs for sleep, energy, mood, actions, disruptions, and alignment. The end-of-week
                  review shows patterns, when you’re most effective, and where to focus next—fast to complete and decision-ready.
                </p>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 1.5</span>
              </div>
            </div>
          </article>

          {/* Phase 2 */}
          <article className={styles.panel} aria-label="Phase 2 IEP & Track">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 2</p>
                <h4 className={styles.panelKicker}>IEP &amp; Track</h4>
                <p className={styles.panelBody}>
                  Your Individualized Execution Plan selects the best track—Stabilization, Environmental Retrofit, Drive
                  Realignment, Cognitive Optimization, Collapse-Risk Containment, or Complex Integration—with clear routines,
                  context adjustments, and review cadence.
                </p>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 2</span>
              </div>
            </div>
          </article>

          {/* Phase 3 */}
          <article className={styles.panel} aria-label="Phase 3 Activation">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 3</p>
                <h4 className={styles.panelKicker}>Activation</h4>
                <p className={styles.panelBody}>
                  Weekly cycles apply small experiments and upgrades to environment, time use, and habits. We track a few
                  signals that prove reliability and keep momentum visible.
                </p>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 3</span>
              </div>
            </div>
          </article>

          {/* Phase 4 */}
          <article className={styles.panel} aria-label="Phase 4 Outcomes">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 4</p>
                <h4 className={styles.panelKicker}>Outcomes</h4>
                <p className={styles.panelBody}>
                  Reviews measure execution reliability, movement on key scores, and fit of routines over time.
                  The target is stable momentum and higher quality of life—performance gains that support better mental health.
                </p>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 4</span>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.progress} aria-hidden="true" />
      </section>

      {/* WAYS TO WORK TOGETHER — restored; we’ll refine layout next */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Ways to work together</h2>
        <p className={styles.body}>
          <strong>1:1 Weekly Session — $35</strong><br />
          Focused support for structure, strategy, and accountability.
        </p>
        <p className={styles.body}>
          <strong>IEP Care Plan — $350–$600 / month</strong><br />
          Diagnostic-driven track, weekly sessions, custom tools, and monthly reviews.
        </p>
        <p className={styles.body}>
          <strong>Diagnostic + Recommendations — $250</strong><br />
          One-time assessment with scoring, track match, and a written plan.
        </p>
      </section>
    </main>
  );
}
