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
          My core service is working 1:1 with individuals to build and sustain personalized systems for cognitive performance,
          organizational flow, and mental well-being. If you’re ready to strengthen decision-making, sustain peak performance,
          and enhance day-to-day function, schedule your free, first session.
        </p>
        <Link href="/book-session" className={styles.button}>
          Schedule Now →
        </Link>
      </div>
    </section>
  );
}
