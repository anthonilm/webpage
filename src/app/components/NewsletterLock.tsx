// Path: src/app/components/NewsletterLock.tsx
"use client";

import React from "react";

type NewsletterItem = {
  id: string;
  title: string;
  dateISO: string;
  summary: string;
  href?: string;
};

type Props = {
  items: NewsletterItem[];
  sectionTitle?: string;
};

export default function NewsletterLock(_: Props) {
  return (
    <section id="insights" className="insights-wrap" aria-label="Book a 1:1 Session">
      <div className="container hero">
        <h2 className="title">Book a 1:1 Session</h2>

        <p className="lead">
          My core service is working 1:1 with individuals to build and sustain personalized systems for cognitive performance,
          organizational flow, and mental well-being. If you’re ready to strengthen decision-making, sustain peak performance,
          and enhance day-to-day function, schedule your free, first session.
        </p>

        <div>
          <a className="btn ghost" href="/book-session" aria-label="Schedule a 1:1 session">
            Schedule Now →
          </a>
        </div>
      </div>

      <style jsx>{`
        .insights-wrap {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          width: 100%;
          display: grid;
          place-items: center;
          background: linear-gradient(
            180deg,
            var(--bone, #f3f1ec) 0%,
            #f7eadf 38%,
            #f3d5bd 100%
          );
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .hero {
          text-align: center;
          display: grid;
          gap: 16px;
          justify-items: center;
        }

        .title {
          margin: 0;
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-size: clamp(48px, 9vw, 120px);
        }

        .lead {
          margin: 0;
          max-width: 860px;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* Make button text black */
        .btn.ghost,
        .btn.ghost:visited,
        .btn.ghost:hover,
        .btn.ghost:active,
        .btn.ghost:focus {
          color: var(--ink, #151515) !important;
        }
        .btn.ghost {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.18);
          background: transparent;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
