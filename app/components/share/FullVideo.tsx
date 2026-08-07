"use client";

import { motion } from "framer-motion";
import { useInViewVideo } from "./useInViewVideo";

interface FullVideoProps {
  videoMp4: string;
  posterUrl: string;
  liveUrl: string;
}

export default function FullVideo({
  videoMp4,
  posterUrl,
  liveUrl,
}: FullVideoProps) {
  const videoRef = useInViewVideo();

  return (
    <>
      <motion.a
        href={liveUrl}
        className="relative w-full aspect-video overflow-hidden rounded-xl"
        whileHover={{
          scale: 1.02,
          y: -2,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 160, damping: 12, mass: 0.5 }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={posterUrl}
          className="absolute rounded-xl border border-neutral-300 inset-0 w-full h-full object-cover transition-all duration-300 ease-premium group-hover:scale-105"
        >
          <source src={videoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.a>
    </>
  );
}
