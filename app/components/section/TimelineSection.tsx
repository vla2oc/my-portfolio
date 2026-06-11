"use client";
import { TimeLineItem } from "../share/TimeLineItem";
import { phasesPreview } from "../../data/approach";
import Link from "next/link";

export default function TimelineSection() {
  const phases = phasesPreview;
  return (
    <section
      className="w-full flex items-center justify-center overflow-x-auto"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-2xl w-full">
        <Link href="/approach">
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
        </Link>
      </div>
    </section>
  );
}
