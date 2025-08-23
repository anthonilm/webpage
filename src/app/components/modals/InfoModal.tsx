"use client";
import React from "react";

type Props = { isOpen: boolean; onClose: () => void; title: string; body: string };

export default function InfoModal({ isOpen, onClose, title, body }: Props) {
  if (!isOpen) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="info-modal-title"
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "grid", placeItems: "center", zIndex: 1000 }}>
      <div onClick={(e) => e.stopPropagation()}
        style={{ width: "min(680px,92vw)", background: "#F8F6F2", color: "#111", borderRadius: 12, boxShadow: "0 12px 40px rgba(0,0,0,0.25)", padding: "20px 22px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <h3 id="info-modal-title" style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{title}</h3>
          <button onClick={onClose} aria-label="Close" style={{ background: "transparent", border: 0, fontSize: 22, cursor: "pointer" }}>×</button>
        </div>
        <div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, whiteSpace: "pre-line" }}>{body}</div>
        <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onClose}
            style={{ background: "#e4d3aa", color: "#0f3832", border: 0, borderRadius: 10, padding: "10px 14px", fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
