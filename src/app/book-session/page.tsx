// app/book-session/page.tsx
"use client";

import React, { useState } from "react";

export default function BookSessionPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const calendlyBase = "https://calendly.com/tmcelrath26/30min";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!reason.trim()) return;

    setSubmitting(true);

    // Build Calendly URL with optional prefill + tracking
    const q = new URLSearchParams();
    if (name.trim()) q.set("name", name.trim());
    if (email.trim()) q.set("email", email.trim());
    // Push the reason into UTM so you can see it in Calendly analytics;
    // also sent as "a1" which some configurations map to first custom question.
    q.set("utm_source", "noesis_site");
    q.set("utm_medium", "book_session");
    q.set("utm_content", reason.slice(0, 300));
    q.set("a1", reason.slice(0, 500));

    const url = `${calendlyBase}?${q.toString()}`;
    window.location.href = url;
  }

  return (
    <main style={styles.page}>
      <section style={styles.card} aria-label="Schedule a 30-minute session">
        <h1 style={styles.h1}>Schedule a 30-minute session</h1>
        <p style={styles.p}>
          Before booking, tell me briefly why you’re seeking Noesis services.
          This helps me prepare and keep the first meeting focused.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name (optional)
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              autoComplete="name"
            />
          </label>

          <label style={styles.label}>
            Email (optional)
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              autoComplete="email"
            />
          </label>

          <label style={styles.label}>
            Why are you seeking Noesis services? <span aria-hidden>*</span>
            <textarea
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={styles.textarea}
              rows={6}
              placeholder="A few lines on your goals, challenges, or context…"
            />
          </label>

          <button
            type="submit"
            disabled={submitting || !reason.trim()}
            style={{
              ...styles.button,
              ...(submitting || !reason.trim() ? styles.buttonDisabled : null),
            }}
          >
            {submitting ? "Redirecting…" : "Continue to scheduling →"}
          </button>

          <p style={styles.disclaimer}>
            You’ll be redirected to Calendly to pick a time. Submitting this
            form doesn’t store data on this site; details are passed in the
            Calendly link for context.
          </p>
        </form>
      </section>
    </main>
  );
}

/* Inline styles to keep this file self-contained */
const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100svh",
    background: "#fff",
    display: "grid",
    placeItems: "center",
    padding: "40px 16px",
    color: "#0b0b0b",
  },
  card: {
    width: "min(820px, 100%)",
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 12,
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
    padding: "28px 22px",
  },
  h1: {
    margin: 0,
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: "-0.01em",
  },
  p: {
    margin: "10px 0 18px",
    fontSize: 16,
    lineHeight: 1.6,
  },
  form: {
    display: "grid",
    gap: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.01em",
    display: "grid",
    gap: 8,
  },
  input: {
    border: "1px solid #dcdcdc",
    borderRadius: 10,
    padding: "10px 12px",
    fontSize: 16,
    outline: "none",
  },
  textarea: {
    border: "1px solid #dcdcdc",
    borderRadius: 10,
    padding: "12px",
    fontSize: 16,
    resize: "vertical",
    outline: "none",
  },
  button: {
    alignSelf: "start",
    padding: "12px 18px",
    borderRadius: 10,
    background: "#0b0b0b",
    color: "#fff",
    border: "1px solid #0b0b0b",
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  disclaimer: {
    marginTop: 8,
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
  },
};
