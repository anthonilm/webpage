// Path: src/app/components/EmailSignup.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mdkdpner", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (res.ok) router.push("/thank-you");
    else setStatus("error");
  };

  return (
    <section id="email-band" aria-label="Email signup">
      <div className="inner">
        <h2 className="heading">Stay connected</h2>

        <form onSubmit={handleSubmit} className="form" aria-label="Join our email list">
          <label htmlFor="email" className="label">Join our email list:</label>
          <div className="row">
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input"
            />
            <button type="submit" className="btn" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Sign Up"}
            </button>
          </div>
          {status === "error" && <p className="error">Something went wrong. Try again.</p>}
        </form>
      </div>

      {/* HARD guarantees this block is exactly 1 inch tall */}
      <style jsx global>{`
        /* Clamp this section to 1 inch, regardless of parents */
        #email-band {
          height: 1in !important;
          min-height: 1in !important;
          max-height: 1in !important;
          width: 100%;
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          overflow: hidden !important;
          display: grid;
          align-items: center;     /* center contents within the 1in band */
          background: transparent;
          box-sizing: border-box;
        }

        /* Neutralize layout gaps that could show as space around this section */
        #email-band + section,
        section + #email-band {
          margin-top: 0 !important;
        }
        :global(main) { gap: 0 !important; }  /* if your layout uses main { gap: ... } */

        /* Remove default top/bottom margins inside the band */
        #email-band * {
          margin-block-start: 0;
          margin-block-end: 0;
          box-sizing: border-box;
        }

        /* Compact, centered layout that fits within 1 inch */
        #email-band .inner {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 6px;
          align-content: center;
          width: 100%;
          padding: 0 24px; /* slight horizontal breathing room */
        }

        #email-band .heading {
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.01em;
          font-weight: 700;
        }

        #email-band .form {
          display: grid;
          row-gap: 6px;
        }

        #email-band .label {
          font-weight: 700;
          font-size: 13px;
          line-height: 1;
        }

        #email-band .row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        /* Compact controls so everything stays within 1 inch */
        #email-band .input {
          height: 32px;
          padding: 0 12px;
          border-radius: 8px;
        }

        #email-band .btn {
          height: 32px;
          line-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.18);
          background: transparent;
          color: #151515;
          font-weight: 600;
        }

        #email-band .error {
          color: tomato;
          font-size: 12px;
          line-height: 1;
        }
      `}</style>
    </section>
  );
}
