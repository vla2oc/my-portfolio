import PhaseRow from "./PhaseRow";

import { phasesMain } from "@/app/data/approach";

export default function ApproachSection() {
  const phases = phasesMain;

  return (
    <section className="w-full flex flex-col gap-10">
      {/* Заголовок секции */}
      <div className="flex flex-col gap-1.5">
        <h2
          className="font-mono font-medium tracking-tight"
          style={{
            color: "var(--color-text-primary)",
            fontSize: "var(--text-main)",
          }}
        >
          How I work
        </h2>
        <p className="text-sm" style={{ color: "var(--color-text-tertiary)" }}>
          Four phases. Every project, every time.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Вертикальная линия — absolute, по центру */}
        <div
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "var(--color-text-quaternary)",
            opacity: 0.2,
          }}
        />

        {/* Фазы */}
        <div className="flex flex-col gap-14">
          {phases.map((phase, index) => (
            <PhaseRow key={phase.phaseNumber} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
