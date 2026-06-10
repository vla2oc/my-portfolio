"use client";
import React from "react";
import { TimeLineItem } from "../share/TimeLineItem";

export default function TimelineSection() {
  const phases = [
    {
      phaseNumber: "Phase 01",
      title: "Ask Why",
      description:
        "What's costing this business money or trust right now? Real problems before solutions — always.",
      tags: ["Discovery", "Strategy"],
    },
    {
      phaseNumber: "Phase 02",
      title: "Design the Answer",
      description:
        "Features are solutions, not requirements. Every screen mapped to a real user need before any code.",
      tags: ["IA", "Wireframes"],
    },
    {
      phaseNumber: "Phase 03",
      title: "Build & Own",
      description:
        "New stack, new domain — I find the answer and own it by the next delivery.",
      tags: ["React", "Next.js", "TypeScript"],
    },
  ];

  return (
    <section
      className="w-full flex items-center justify-center overflow-x-auto"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ограничиваем общую ширину, чтобы шаги красиво растянулись по экрану */}
      <div className="max-w-2xl w-full">
        {/* Жесткая сетка из 3 колонок гарантирует, что центры элементов никогда не сдвинутся */}
        <div className="grid grid-cols-3 w-full">
          {phases.map((phase, index) => (
            <TimeLineItem
              key={index}
              phaseNumber={phase.phaseNumber}
              title={phase.title}
              description={phase.description}
              tags={phase.tags}
              isFirst={index === 0}
              isLast={index === phases.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
