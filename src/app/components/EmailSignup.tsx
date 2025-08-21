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
      body: formData
    });

    if (res.ok) router.push("/thank-you");
    else setStatus("error");
  };

  return (
    <form onSubmit={handleSubmit} className="form" style={{ width: "100%" }}>
      <label htmlFor="email" style={{ fontWeight: 700, marginBottom: 8 }}>
        Join our email list:
      </label>
      <div className="form-row">
        <input id="email" type="email" name="email" required placeholder="you@example.com" className="input" />
        <button type="submit" className="btn" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Sign Up"}
        </button>
      </div>
      {status === "error" && <p style={{ color: "tomato", marginTop: 8 }}>Something went wrong. Try again.</p>}
    </form>
  );
}
