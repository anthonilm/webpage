"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f8f7f4", // ivory background
      }}
    >
      {/* Top Left Text */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          fontSize: "1rem",
          lineHeight: 1.4,
          color: "#1a1a1a",
        }}
      >
    Cognitive Behavior Optimization & Mental Health Services<br />
      </div>

      {/* Center Logo Line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {/* Vertical Bars */}
        <div style={{ display: "flex", gap: "0.4rem" }}>
          <div style={{ width: "15px", height: "140px", backgroundColor: "#b8a77c" }} />
          <div style={{ width: "15px", height: "140px", backgroundColor: "#b8a77c" }} />
        </div>

        {/* Noesis Systems on one line */}
        <div
          style={{
            fontSize: "5rem",
            fontWeight: "600",
            letterSpacing: "0.1em",
            color: "#1a1a1a",
            whiteSpace: "nowrap",
          }}
        >
          NOESIS SYSTEMS
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "1.2rem",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          lineHeight: 1.6,
          color: "#1a1a1a",
        }}
      >
        Perform Better. Recover Faster. Rest Easy.
      </div>

      {/* Credentials */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1rem",
          letterSpacing: "0.5px",
          textAlign: "center",
          color: "#1a1a1a",
        }}
      >
        Anthoni LM, Ph.D. (c)<br />Founder & Performance Consultant
      </div>

      {/* Social Bar (bottom-left) */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          display: "flex",
          gap: "1.25rem",
          alignItems: "center",
          color: "#1a1a1a",
        }}
      >
        <span style={{ fontSize: 20 }}>𝕏</span>
        <span style={{ fontSize: 20 }}>f</span>
        <span style={{ fontSize: 20 }}>◎</span>
        <span style={{ fontSize: 20 }}>in</span>
        <span style={{ fontSize: 20 }}>▶</span>
        <span style={{ fontSize: 20 }}>P</span>
      </div>
    </section>
  );
}
