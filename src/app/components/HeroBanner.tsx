"use client";

import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.banner} aria-label="Creative energy banner">
      <h2 className={styles.text}>
        We help you access and sustain your creative and generative energies
      </h2>
    </section>
  );
}
