"use client";

// app/components/BackgroundFX.tsx
// This renders a global background: subtle grid + animated gradient blobs.
// You place it once in layout.tsx so it appears on all pages.

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,15,20,0)_0%,rgba(11,15,20,0.65)_55%,rgba(11,15,20,0.9)_100%)]" />

      {/* Animated blobs */}
      <motion.div
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.55), rgba(99,102,241,0) 60%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-24 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(34,211,238,0.45), rgba(34,211,238,0) 60%)",
        }}
        animate={{ x: [0, -55, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-40 left-1/3 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(244,63,94,0.32), rgba(244,63,94,0) 60%)",
        }}
        animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
