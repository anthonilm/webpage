"use client";

import React from "react";
import Link from "next/link";
import styles from "./OneOnOneCTA.module.css";

export default function OneOnOneCTA() {
  return (
    <section className={styles.section} aria-label="Book a 1:1 Session">
      <div className={styles.container}>
        <h2 className={styles.headline}>Book a 1:1 Session</h2>

        <p className={styles.text}>
          My core service is working 1:1 with individuals to build and sustain personalized systems
          for cognitive performance, organizational flow, and mental well-being. If you’re ready to
          strengthen decision-making, sustain peak performance, and enhance day-to-day function,
          schedule your free, first session.
        </p>

        {/* Inline Calendly Embed */}
        <div className={styles.calendlyWrapper}>
          <iframe
            src="https://calendly.com/tmcelrath26/30min?hide_gdpr_banner=1&embed_domain=yourdomain.com&embed_type=Inline"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      {/* Remove header bar styling */}
      <style jsx>{`
        .calendlyWrapper iframe {
          border: none !important;
        }

        .calendlyWrapper iframe::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
