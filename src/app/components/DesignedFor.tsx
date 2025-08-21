"use client";
import { motion } from "framer-motion";
import React from "react";

const profiles = [
  { title: "Executives operating at peak capacity",
    description: "Sustain clarity and decision quality under constant demand." },
  { title: "Entrepreneurs and business owners",
    description: "Avoid burnout while managing complex, high-stakes responsibilities." },
  { title: "Young professionals building stability",
    description: "Translate high potential into consistent, long-term performance." },
  { title: "Students pushing for academic excellence",
    description: "Stay sharp, focused, and resilient through changing demands." }
];

export default function DesignedFor() {
  return (
    <section className="section" aria-label="Designed for">
      <div className="container">
        <h2 style={{ marginBottom: 16 }}>Designed for…</h2>
        <div className="designed-lane">
          {profiles.map((p, i) => (
            <motion.article
              key={p.title}
              className="designed-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 style={{ marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: "var(--graphite-600)" }}>{p.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
