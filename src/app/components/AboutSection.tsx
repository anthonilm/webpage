"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  const bg = "#F1ECE6";      // warm ivory
  const HEADER_H = 80;       // header height (px)
  const IMAGE_W = "55vw";    // keep the same image width
  const LINE_PCT = "78%";    // <— target where your drawn line sits across the section
  const SOFTTAIL = "96%";    // subtle continuation so there's no hard edge

  return (
    <section
      aria-label="About"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        minHeight: `calc(100vh - ${HEADER_H}px)`,
        width: "100%",
        overflow: "hidden",
        background: bg,
        margin: 0,
        padding: 0,
      }}
    >
      {/* LEFT: photo container */}
      <div
        style={{
          position: "relative",
          width: IMAGE_W,
          height: `calc(100vh - ${HEADER_H}px)`,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src="/new-photo.jpg"
          alt="About headshot"
          fill
          priority
          sizes="(min-width: 1200px) 55vw, 100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "saturate(92%) contrast(105%) brightness(98%)",
          }}
        />

        {/* Soft edge inside the image (non-linear look) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "22%",
            height: "100%",
            background: `linear-gradient(to right, rgba(241,236,230,0) 0%, ${bg} 100%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* RIGHT: solid background */}
      <div style={{ flex: 1 }} />

      {/* SECTION-LEVEL FADE that runs from image edge to the target line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(
            to right,
            rgba(241,236,230,0) calc(${IMAGE_W}),
            rgba(241,236,230,0.88) ${LINE_PCT},
            rgba(241,236,230,0.96) ${SOFTTAIL},
            ${bg} 100%
          )`,
        }}
      />

      {/* Abstract perturbation (very subtle) so edge isn’t perfectly straight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(18rem 28rem at ${LINE_PCT} 22%, rgba(241,236,230,0.35) 0%, rgba(241,236,230,0) 70%),
            radial-gradient(22rem 32rem at calc(${LINE_PCT} - 3%) 55%, rgba(241,236,230,0.25) 0%, rgba(241,236,230,0) 72%),
            radial-gradient(16rem 26rem at calc(${LINE_PCT} + 2%) 78%, rgba(241,236,230,0.22) 0%, rgba(241,236,230,0) 68%)
          `,
        }}
      />

      {/* Name and Title block */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
          textAlign: "center",
          color: "#000",
          fontFamily: "serif",
          lineHeight: 1.4,
        }}
      >
        <div style={{ fontSize: "6rem", fontWeight: 700 }}>Anthoni McElrath</div>
        <div style={{ fontSize: "3.6rem", marginTop: "1.2rem" }}>MA, LMHC</div>
        <div style={{ fontSize: "3rem", marginTop: "1.2rem" }}>Founder & Consultant</div>
      </div>

      {/* Bottom-center ABOUT button */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 28,
          transform: "translateX(-50%)",
        }}
      >
        <Link
          href="/about"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 24px",
            borderRadius: 6,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.9)",
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "saturate(120%) blur(2px)",
          }}
        >
            About
        </Link>
      </div>
    </section>
  );
}
