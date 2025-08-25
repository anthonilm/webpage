"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ServicesPage.module.css";

const areasIHelpWith = [
  "Burnout and occupational stress",
  "Indecision and cognitive overload",
  "Overwhelm and boundary setting",
  "Performance anxiety",
  "Attention and concentration support",
  "Procrastination and avoidance cycles",
  "Stress and coping skills",
  "Mental stamina and cognitive fatigue",
  "Sleep and circadian health",
  "Resilience and post-stress growth",
  "Fatigue and energy regulation",
  "Adjustment to change",
  "Role transitions and identity shifts",
  "Leadership stress and imposter feelings",
  "Communication under pressure",
  "Conflict resolution and repair",
  "Cognitive flexibility and problem-solving",
  "Motivation and task initiation",
  "Recovery after setbacks",
  "Overcommitment and people-pleasing patterns",
  "Public-performance anxiety",
  "Emotion regulation and distress tolerance",
  "Values-aligned decision making",
  "Executive functioning and planning",
  "Sustaining motivation",
  "Cognitive load management",
  "Work–life boundaries and balance",
  "Processing criticism and feedback",
  "Sustainable high performance",
  "Habit change and maintenance",
];

const sections = {
  Services: [
    {
      title: "1:1 Coaching",
      description:
        "Direct performance sessions focused on decision-making, recovery, and behavioral stability.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/R2K8FTNDEH928",
    },
    {
      title: "Behavioral Diagnostics",
      description:
        "Get mapped using our COM-B-based assessment to understand what’s helping and what’s blocking you.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/V65JZBVSQJ594",
    },
    {
      title: "6-Session Package – $400",
      description:
        "Includes COM-B assessment, Individualized Executive Plan (IEP), and access to physical movement facilities such as yoga.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/KMQK6HTCMY7CQ",
    },
    {
      title: "3-Session Package – $200",
      description:
        "Includes COM-B assessment, Individualized Executive Plan (IEP), and access to physical movement facilities such as yoga.",
      checkoutUrl: "https://www.paypal.com/ncp/payment/KN9RGNWTMTEWQ",
    },
  ],
};

export default function ServicesPage() {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  return (
    <main className={styles.wrapper}>
      {/* Headline */}
      <motion.h1
        className={styles.promoHeadline}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Reduce burnout, sharpen discipline, and expand generativity and creativity with a weekly performance system—choose your plan and get to work.
      </motion.h1>

      {/* Areas I Help With */}
      <section className={styles.areasSection}>
        <h2 className={styles.heading}>Areas I Help With</h2>
        <div className={styles.areasGrid}>
          {areasIHelpWith.map((area, idx) => (
            <div key={idx} className={styles.areaItem}>
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      {Object.entries(sections).map(([category, items]) => (
        <div key={category}>
          <h2 className={styles.heading}>{category}</h2>
          <div className={styles.scrollContainer}>
            {items.map((item, idx) => (
              <div className={styles.tile} key={idx}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button
                  onClick={() =>
                    setSelectedUrl(
                      `https://calendly.com/tmcelrath26/noesis-consulting-1-1?redirect_url=${encodeURIComponent(
                        item.checkoutUrl
                      )}`
                    )
                  }
                  className={styles.ctaButton}
                >
                  Lock it in.
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Calendly Embed */}
      {selectedUrl && (
        <section className={styles.calendlyWrapper}>
          <iframe
            src={selectedUrl}
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="no"
            style={{ border: "none" }}
          />
        </section>
      )}
    </main>
  );
}
