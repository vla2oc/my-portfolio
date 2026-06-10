"use client";

import { motion } from "framer-motion";

interface FullVideoProps {
  videoWebm: string;
  videoMp4: string;
}

export default function FullVideo({ videoMp4, videoWebm }: FullVideoProps) {
  return (
    <>
      <motion.div
        className="relative w-full aspect-video overflow-hidden rounded-xl"
        whileHover={{
          scale: 1.02,
          y: -2,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 160, damping: 12, mass: 0.5 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute rounded-xl border border-neutral-300 inset-0 w-full h-full object-cover transition-all duration-300 ease-premium group-hover:scale-105"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </>
  );
}
