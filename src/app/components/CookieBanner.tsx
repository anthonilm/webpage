"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ok = typeof window !== "undefined" && window.localStorage.getItem("cookie-ok");
    if (!ok) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="cookie">
      <div className="cookie-row">
        <div>We use cookies to improve site performance and analyze traffic.</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn secondary" onClick={() => setShow(false)}>Decline</button>
          <button
            className="btn"
            onClick={() => { localStorage.setItem("cookie-ok", "1"); setShow(false); }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
