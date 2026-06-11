import { phasesMain } from "@/app/data/approach";

type Phase = (typeof phasesMain)[0];

export default function PhaseContent({
  phase,
  align,
}: {
  phase: Phase;
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={`flex flex-col gap-2 ${
        isRight ? "items-end text-right" : "items-start text-left"
      }`}
    >
      <span
        className="text-[11px] font-mono uppercase tracking-widest"
        style={{ color: "var(--color-text-quaternary)" }}
      >
        {phase.phaseNumber}
      </span>

      <h3
        className="font-medium tracking-tight"
        style={{
          color: "var(--color-text-primary)",
          fontSize: "var(--text-main)",
        }}
      >
        {phase.title}
      </h3>

      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-text-tertiary)", maxWidth: "220px" }}
      >
        {phase.description}
      </p>

      <div
        className={`flex flex-wrap gap-1.5 mt-1 ${
          isRight ? "justify-end" : "justify-start"
        }`}
      >
        {phase.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded border"
            style={{
              borderColor: "var(--color-text-quaternary)",
              color: "var(--color-text-tertiary)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
