import React from "react";

type Props = { className?: string };

export default function SiteFooter({ className }: Props) {
  return (
    <footer className={["site-footer", className].filter(Boolean).join(" ")}>
      <div className="container">
        <p
          className="disclaimer"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: 16,
            color: "var(--graphite-600)"
          }}
          aria-label="Legal disclaimer"
        >
          <strong>Disclaimer:</strong> Services are coaching and education for
          cognitive-behavioral performance. The work delivers practical value: weekly operating rhythms,
          executive-function tools, skills training for focus, planning, and follow-through, and measurable
          habit systems that improve daily functioning and quality of life.They are non-clinical and outside
          clinical diagnosis or medical treatment. I maintain a documented referral protocol when clinical care
          is indicated. For urgent concerns, contact 988 (Suicide &amp; Crisis Lifeline), 911, or your nearest emergency department.
        </p>

        <div className="footer-bottom" style={{ marginTop: 18 }}>
          <small>© {new Date().getFullYear()} Noesis Systems LLC</small>
          <small>Built on Next.js</small>
        </div>
      </div>
    </footer>
  );
}
