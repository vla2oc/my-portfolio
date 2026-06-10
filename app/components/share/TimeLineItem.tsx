"use client";
import React from "react";
import { motion } from "framer-motion"; // или "framer-motion"

interface TimelineItemProps {
  phaseNumber: string;
  title: string;
  description: string;
  tags: string[];
  isFirst?: boolean;
  isLast?: boolean;
}

const bulletSprings = {
  type: "spring",
  stiffness: 120,
  damping: 12,
  mass: 0.5,
};

const contentSprings = {
  type: "spring",
  stiffness: 180,
  damping: 21,
  mass: 0.5,
};

// Анимация для текстового блока (смещаем вверх, а не скейлим, чтобы не двигать соседей)
const contentVariants = {
  rest: { opacity: 0.75, y: 0 },
  hover: { opacity: 1, y: -3 },
};

const bulletVariants = {
  rest: { scale: 1, backgroundColor: "oklch(0.6901 0 0)" }, // --color-text-quaternary
  hover: { scale: 1.3, backgroundColor: "oklch(0.22213 0 0)" }, // --color-text-primary
};

export const TimeLineItem: React.FC<TimelineItemProps> = ({
  phaseNumber,
  title,
  description,
  tags,
  isFirst = false,
  isLast = false,
}) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative flex flex-col flex-1 cursor-pointer select-none group"
    >
      {/* ВЕРХНЯЯ ЧАСТЬ: Конструктор намертво закрепленной линии */}
      <div className="relative w-full h-8 flex items-center justify-center mb-8">
        {/* Левый хвостик линии (скрыт у самого первого элемента) */}
        {!isFirst && (
          <div
            className="absolute left-0 right-1/2 h-px opacity-20 pointer-events-none"
            style={{ backgroundColor: "var(--color-background-secondary)" }}
          />
        )}

        {/* Правый хвостик линии (скрыт у самого последнего элемента) */}
        {!isLast && (
          <div
            className="absolute left-1/2 right-0 h-px opacity-20 pointer-events-none"
            style={{ backgroundColor: "var(--color-background-secondary)" }}
          />
        )}

        {/* Булет — сидит ровно по центру (left-1/2), растет из своей оси */}
        <motion.div
          variants={bulletVariants}
          transition={bulletSprings}
          className="w-3 h-3 rounded-full border-2 z-10 relative box-border"
          style={{
            borderColor: "var(--color-background)",
            outline: "1px solid var(--color-text-quaternary)",
          }}
        />
      </div>

      {/* НИЖНЯЯ ЧАСТЬ: Контентная карточка */}
      <motion.div
        variants={contentVariants}
        transition={contentSprings}
        className="flex   flex-col gap-2 px-3 text-center items-center"
      >
        <span
          className="text-[12px] font-mono font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          {phaseNumber}
        </span>

        <h3
          className="font-bold tracking-tight transition-colors duration-300"
          style={{
            color: "var(--color-text-primary)",
            fontSize: "var(--text-main)",
          }}
        >
          {title}
        </h3>

        <p
          className="text-xs  leading-relaxed opacity-90"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          {description}
        </p>

        {/* Теги фазы */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
          {tags.map((tag) => (
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
      </motion.div>
    </motion.div>
  );
};
