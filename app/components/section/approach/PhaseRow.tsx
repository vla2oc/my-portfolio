"use client";
import { phasesMain } from "@/app/data/approach";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import PhaseContent from "./PhaseContent";

type Phase = (typeof phasesMain)[0];

export default function PhaseRow({
  phase,
  index,
}: {
  phase: Phase;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const isLeft = index % 2 === 0;

  const contentVariants = {
    hover: { opacity: 1, x: isLeft ? -2 : 2 },
    hidden: { opacity: 0, x: isLeft ? -12 : 12 },
    show: {
      opacity: 0.8,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
    },
  } as const;

  const contentSprings = {
    type: "spring",
    stiffness: 150,
    damping: 5,
    mass: 0.5,
  } as const;
  const dotVariants = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 20, delay: 0.05 },
    },
  } as const;

  return (
    // grid: [left 1fr] [dot 20px] [right 1fr]
    <div
      ref={ref}
      className="grid items-start"
      style={{ gridTemplateColumns: "1fr 20px 1fr", gap: "0 24px" }}
    >
      {/* Левый слот */}
      <div className="flex justify-end">
        {isLeft && (
          <motion.div
            whileHover="hover"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            transition={contentSprings}
          >
            <PhaseContent phase={phase} align="right" />
          </motion.div>
        )}
      </div>

      {/* Центр — точка поверх линии */}
      <div className="flex justify-center pt-[5px]">
        <motion.div
          variants={dotVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-2 h-2 rounded-full relative z-10"
          style={{ backgroundColor: "var(--color-text-primary)" }}
        />
      </div>

      {/* Правый слот */}
      <div className="flex justify-start">
        {!isLeft && (
          <motion.div
            transition={contentSprings}
            whileHover="hover"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <PhaseContent phase={phase} align="left" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ── Главная секция ────────────────────────────────────────────────────
