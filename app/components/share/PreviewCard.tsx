"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../data/project";
import Link from "next/link";
import { useInViewVideo } from "./useInViewVideo";

interface PreviewCardProps {
  project: Project;
}
const MotionLink = motion(Link);
export default function PreviewCard({ project }: PreviewCardProps) {
  const { posterUrl, videoMp4 } = project;
  const videoRef = useInViewVideo();

  return (
    <MotionLink
      href={`/work/${project.slug}`}
      className="relative rounded-xl flex flex-col items-center overflow-hidden cursor-pointer select-none group-hover:blur-[1px] group-hover:opacity-60 
             hover:!blur-none hover:!opacity-100 duration-200 ease-premium"
      whileHover={{
        scale: 1.02,
        y: -2,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 12, mass: 0.5 }}
    >
      <div className="relative w-full aspect-video overflow-hidden">
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
      </div>
    </MotionLink>
  );
}
