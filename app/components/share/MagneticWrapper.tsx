"use client";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
}

export default function MagneticWrapper({
  children,
  strength = 5,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 12, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 120, damping: 12, mass: 0.8 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const deltaX = (e.clientX - (left + width / 2)) / (width / 2);
    const deltaY = (e.clientY - (top + height / 2)) / (height / 2);
    x.set(deltaX * strength);
    y.set(deltaY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ padding: "10px", display: "inline-flex" }}
    >
      <motion.div style={{ x: springX, y: springY }}>{children}</motion.div>
    </div>
  );
}
