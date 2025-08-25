"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./methods.module.css";
import SiteFooter from "../components/SiteFooter"; 

export default function NoesisMethodsPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.page}>
      {/* HERO — identical to homepage hero */}
      <section
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "100vh",
          padding: "2rem",
          background:
            "linear-gradient(180deg, rgba(35,50,70,0.92), rgba(35,50,70,0.85) 45%, rgba(35,50,70,0.70))", // navy gradient
          fontFamily: "inherit",
        }}
      >
        {/* Center Logo Line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Vertical Bars */}
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <div
              style={{
                width: "15px",
                height: "140px",
                backgroundColor: "#b8a77c",
              }}
            />
            <div
              style={{
                width: "15px",
                height: "140px",
                backgroundColor: "#b8a77c",
              }}
            />
          </div>

          {/* Noesis Systems on one line */}
          <div
            style={{
              fontSize: "5rem",
              fontWeight: "600",
              letterSpacing: "0.1em",
              color: "#ffffff", // white text
              whiteSpace: "nowrap",
            }}
          >
            THE NOESIS APPROACH
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "1.2rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            lineHeight: 1.6,
            color: "#ffffff", // white
          }}
        >
          We help you access and sustain your creative and generative energies.
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem 2rem",
          background: "linear-gradient(to bottom, #F8F6EE, #FFFFFF)", // ivory fade to white
          color: "#0F1C2E", // ink/black
          fontSize: "20pt",
          lineHeight: 1.65,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gap: "2rem",
            textAlign: "left",
          }}
        >
          <p>
            Mental health is deeply affected by today’s shifting political,
            social, and environmental realities. I provide structured behavioral
            and cognitive support that helps people strengthen clarity,
            regulation, and execution even when external conditions feel
            unstable. My work acknowledges the real weight of these pressures
            and focuses on giving you practical tools to ground yourself and
            sustain steady function.
          </p>
          <p>
            Care begins with understanding. Through short, reliable measures and
            ongoing weekly observations, we track how instability shows up in
            your life and how it impacts anxiety, depression, or diminished
            support. From there, I guide you in building personalized strategies
            that transform emotional strain into creative and generative
            energy—cultivating habits and systems that stabilize your mind,
            expand your resilience, and allow clarity and purpose to take root
            even under pressure.
          </p>
        </div>
      </section>

            {/* METHODS SECTION */}
      <section
        style={{
          minHeight: "80vh", // was 100vh
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 2rem", // less vertical padding
          background: "linear-gradient(to bottom, #F2E7C9, #FFFFFF)", // saffron yellow fade to white
          color: "#0F1C2E", // ink/black
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem", // reduced gap
            maxWidth: "1100px", // slightly narrower
            width: "100%",
          }}
        >
          {/* Left side tiles */}
          <div style={{ display: "grid", gap: "1.25rem" }}>
            <h2
              style={{
                fontSize: "1.8rem", // smaller than before
                fontWeight: "600",
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Our Method
            </h2>
            {[
              {
                num: 1,
                title: "Performance Readiness",
                desc: "Build confidence and resilience to handle high-pressure and daily challenges.",
              },
              {
                num: 2,
                title: "Targeted Assessment",
                desc: "Identify the emotional and mental factors affecting clarity, focus, and execution.",
              },
              {
                num: 3,
                title: "Evidence-Based Skills",
                desc: "Learn strategies that strengthen stability under real-world demands.",
              },
              {
                num: 4,
                title: "Personalized Plan",
                desc: "Create coping systems tailored to your unique needs.",
              },
              {
                num: 5,
                title: "Ongoing Support",
                desc: "Weekly guidance and refinements to keep progress steady.",
              },
              {
                num: 6,
                title: "Habit Fortification",
                desc: "Protect mental well-being and prevent burnout.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#fff",
                  padding: "1rem", // tighter
                  borderRadius: "6px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "flex-start",
                  fontSize: "1rem", // reduced
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    background: "#b8a77c",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "600",
                      marginBottom: "0.2rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side narrative */}
          <div
            style={{
              fontSize: "20px", // increased size
              lineHeight: 1.7,
              textAlign: "left", // uncentered paragraphs
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p>
              The Noesis approach integrates psychology, behavioral science, and
              executive coaching to sustain <strong>mental health and performance</strong>.
              Our tools help sharpen decision-making, improve resilience, and
              strengthen well-being — while reducing lapses in focus, confidence,
              and energy.
            </p>
            <p>
              With structured assessments and weekly feedback, we target stress,
              motivation, and performance patterns. This enables practical
              improvements in clarity, regulation, and execution across work and
              life.
            </p>
            <p>
              We focus on three essentials:
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
                <li>
                  <strong>Organizational systems</strong> – practical routines that
                  lighten mental load.
                </li>
                <li>
                  <strong>Emotional regulation</strong> – composure and focus under
                  pressure.
                </li>
                <li>
                  <strong>Cognitive load management</strong> – preventing overwhelm
                  and sustaining clarity.
                </li>
              </ul>
            </p>
            <p>
              Clients leave with reliable systems and habits that improve
              performance, protect health, and raise quality of life. Two
              principles anchor our process: <strong>clarity</strong> and{" "}
              <strong>momentum</strong>.
            </p>
          </div>
        </div>

      </section>


      {/* INTRO — condensed */}
<section
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "4rem 2rem",
    background: "linear-gradient(to bottom, #F8F6EE, #FFFFFF)", // ivory fade
    color: "#0F1C2E",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "left",
    }}
  >
    <h2
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontWeight: 500,
        fontSize: "3.5rem",
        marginBottom: "1.5rem",
      }}
    >
      Create the conditions where your challenges become energy for growth.
    </h2>
    <p
      style={{
        fontSize: "25px",
        lineHeight: 1.7,
        
      }}
    >
      We clarify the patterns shaping your thoughts, emotions, and daily behaviors, then build a plan that
      strengthens stability, resilience, and growth. Using a 50-item COM-B intake, we assess executive function,
      emotional regulation, identity alignment, environmental scaffolding, behavioral momentum, and interpersonal
      support. Your results highlight how abilities, supports, and motivations interact—giving us a clear map for
      practical steps. Together, we shape coping routines, strengthen regulation, adjust environments, and set a
      sustainable pace. Every strategy we introduce is evidence-based, clinically relevant, and designed for
      everyday use—helping you build confidence and sustain well-being where it matters most.
    </p>
  </div>
</section>


      {/* PHASES — unchanged */}
      <section className={styles.rail} aria-label="Method phases">
        <div className={styles.railTrack}>
          {/* Phase 1 */}
          <article className={styles.panel} id="phase-1">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 1</p>
                <h4 className={styles.panelKicker}>Diagnostic &amp; Map</h4>
                <p className={styles.panelBody}>
                  Short COM-B intake establishes a current-state map across
                  capability, opportunity, and motivation. We read domain bands
                  to locate friction, stability, and near-term
                  priorities—so the plan targets what actually changes outcomes.
                </p>
                <p className={styles.getTitle}>What you’ll get</p>
                <ul className={styles.getList}>
                  <li>A clear picture of what’s helping and what’s draining you</li>
                  <li>Priority areas to lighten the mental load</li>
                  <li>A calm, structured starting point</li>
                </ul>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 1</span>
              </div>
            </div>
          </article>

          {/* Phase 1.5 */}
          <article className={styles.panel} id="phase-1-5">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 1.5</p>
                <h4 className={styles.panelKicker}>Audit Week</h4>
                <p className={styles.panelBody}>
                  One week of real-life logs for sleep, energy, mood, actions,
                  disruptions, and alignment. The end-of-week review shows
                  patterns, when you’re most effective, and where to focus
                  next—fast to complete and decision-ready.
                </p>
                <p className={styles.getTitle}>What you’ll get</p>
                <ul className={styles.getList}>
                  <li>A snapshot of your current rhythms</li>
                  <li>Clarity on what’s fueling fatigue or calm</li>
                  <li>Simple cues for where to focus first</li>
                </ul>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 1.5</span>
              </div>
            </div>
          </article>

          {/* Phase 2 */}
          <article className={styles.panel} id="phase-2">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 2</p>
                <h4 className={styles.panelKicker}>IEP &amp; Track</h4>
                <p className={styles.panelBody}>
                  Your Individualized Execution Plan selects the best track with
                  clear routines, context adjustments, and review cadence.
                </p>
                <p className={styles.getTitle}>What you’ll get</p>
                <ul className={styles.getList}>
                  <li>A tailored, low-friction plan that feels doable</li>
                  <li>Environmental tweaks that make life feel lighter</li>
                  <li>A realistic pace to rebuild confidence and control</li>
                </ul>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 2</span>
              </div>
            </div>
          </article>

          {/* Phase 3 */}
          <article className={styles.panel} id="phase-3">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 3</p>
                <h4 className={styles.panelKicker}>Activation</h4>
                <p className={styles.panelBody}>
                  Weekly cycles apply small experiments and upgrades to
                  environment, time use, and habits. We track a few signals that
                  prove reliability and keep momentum visible.
                </p>
                <p className={styles.getTitle}>What you’ll get</p>
                <ul className={styles.getList}>
                  <li>Gentle weekly steps that fit your capacity</li>
                  <li>Quick wins to boost confidence and stability</li>
                  <li>Tracking that shows progress, even on hard days</li>
                </ul>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 3</span>
              </div>
            </div>
          </article>

          {/* Phase 4 */}
          <article className={styles.panel} id="phase-4">
            <div className={styles.panelCols}>
              <div className={styles.panelLeft}>
                <p className={styles.phaseTag}>PHASE 4</p>
                <h4 className={styles.panelKicker}>Outcomes</h4>
                <p className={styles.panelBody}>
                  Reviews measure execution reliability, movement on key scores,
                  and fit of routines over time. The target is stable momentum
                  and higher quality of life—performance gains that support
                  better mental health.
                </p>
                <p className={styles.getTitle}>What you’ll get</p>
                <ul className={styles.getList}>
                  <li>A clear sense of what’s working and why</li>
                  <li>A forward plan that feels safe and achievable</li>
                  <li>Systems that protect your mental and emotional energy</li>
                </ul>
              </div>
              <div className={styles.panelRight} aria-hidden="true">
                <span className={styles.phaseBig}>PHASE 4</span>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.progress} aria-hidden="true" />
      </section>
      <SiteFooter />
    </main>
  );
}
