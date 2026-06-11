"use client";

import React, { useEffect, useRef } from "react";
import { SpringState, RippleState } from "./type";

export default function ButtonBadge() {
  const email = "kurochka265@gmail.com";
  const subject = "Open to work — let's talk";
  const body = `Hi Vladyslav,\n\nI saw your portfolio and would love to connect about a project / role.\n\n— `;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Ссылки на DOM-элементы для прямого управления стилями (минуя VDOM)
  const badgeRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const ripple1Ref = useRef<HTMLSpanElement>(null);
  const ripple2Ref = useRef<HTMLSpanElement>(null);

  // Физические константы (жёсткость k и демпфирование d)
  const K = 270;
  const D = 17;
  const rippleDuration = 1.4; // Длительность жизни волны в секундах
  const rippleDelay = 0.25;

  // Инициализация независимых пружин
  const scaleSpring = useRef<SpringState>({ x: 1, v: 0, target: 1 });
  const glowSpring = useRef<SpringState>({ x: 0, v: 0, target: 0 });
  const btnGlowSpring = useRef<SpringState>({ x: 0, v: 0, target: 0 });

  // Состояние световых волн (отрицательное время у второй создает задержку)
  const ripple1 = useRef<RippleState>({ active: false, time: 0 });
  const ripple2 = useRef<RippleState>({ active: false, time: 0 });

  useEffect(() => {
    let lastTime = performance.now();
    let animationFrameId: number;

    // Вычисление одного шага физики пружины (Интегрирование Эйлера)
    const updateSpring = (spring: SpringState, dt: number) => {
      const a = -K * (spring.x - spring.target) - D * spring.v;
      spring.v += a * dt;
      spring.x += spring.v * dt;
    };

    // Главный анимационный цикл (60 FPS)
    const tick = (now: number) => {
      // Вычисляем дельту времени (dt) в секундах
      let dt = (now - lastTime) / 1000;
      if (dt > 0.1) dt = 0.1; // Защита от скачков при потере фокуса вкладки
      lastTime = now;

      // 1. Обновляем физику всех трех пружин
      updateSpring(scaleSpring.current, dt);
      updateSpring(glowSpring.current, dt);
      updateSpring(btnGlowSpring.current, dt);

      // 2. Применяем результаты к бейджу (масштаб и свечение)
      if (badgeRef.current) {
        const s = scaleSpring.current.x;
        const g = Math.max(0, glowSpring.current.x); // исключаем отрицательные значения
        badgeRef.current.style.transform = `scale(${s})`;
        // Зеленая тень вокруг светодиода
        badgeRef.current.style.boxShadow = `0 0 ${12 + g * 25}px rgba(34, 197, 94, ${0.5 + g * 0.5})`;
      }

      // 3. Применяем результаты к самой кнопке (мягкий glow под ней)
      if (buttonRef.current) {
        const bg = Math.max(0, btnGlowSpring.current.x);
        buttonRef.current.style.boxShadow = `0 4px 20px rgba(0, 0, 0, 0.2), 0 0 ${15 + bg * 30}px rgba(34, 197, 94, ${bg * 0.3})`;
      }

      // 4. Просчитываем поведение волн рассеивания света
      // Задержка запуска второго кольца

      // Волна 1
      if (ripple1.current.active) {
        ripple1.current.time += dt;
        const progress = ripple1.current.time / rippleDuration;

        if (progress >= 1) {
          ripple1.current.active = false;
        } else if (ripple1Ref.current) {
          const rScale = 1 + progress * 3.5; // Расширение до 3.5х
          const rAlpha = Math.pow(1 - progress, 3); // Степенная функция затухания (резко тухнет в конце)
          ripple1Ref.current.style.transform = `scale(${rScale})`;
          ripple1Ref.current.style.opacity = `${rAlpha}`;
        }
      }

      // Волна 2
      if (ripple2.current.active) {
        ripple2.current.time += dt;
        // Начинаем обрабатывать только после прохождения задержки
        if (ripple2.current.time >= 0) {
          const progress = ripple2.current.time / rippleDuration;

          if (progress >= 1) {
            ripple2.current.active = false;
          } else if (ripple2Ref.current) {
            const rScale = 1 + progress * 3.5;
            const rAlpha = Math.pow(1 - progress, 3);
            ripple2Ref.current.style.transform = `scale(${rScale})`;
            ripple2Ref.current.style.opacity = `${rAlpha}`;
          }
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    // Интервал импульсов (каждые 2.5 секунды)
    const intervalId = setInterval(() => {
      // Даем пинок скорости (импульс) пружинам
      scaleSpring.current.v += 9;
      glowSpring.current.v += 14;
      btnGlowSpring.current.v += 5;

      // Активируем волны
      ripple1.current = { active: true, time: 0 };
      ripple2.current = { active: true, time: -rippleDelay }; // Отрицательное время создает задержку старта
    }, 2500);

    // Запуск цикла
    animationFrameId = requestAnimationFrame(tick);

    // Очистка при размонтировании
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative inline-block md:m-8">
      {/* Контейнер бейджа (позиционирован абсолютно над кнопкой) */}
      <div className="absolute -top-1.5 -right-1.5 z-20 flex items-center justify-center w-4 h-4">
        {/* Волна 1 */}
        <span
          ref={ripple1Ref}
          className="absolute w-3 h-3 rounded-full bg-green-500 will-change-transform opacity-0 pointer-events-none"
        />
        {/* Волна 2 */}
        <span
          ref={ripple2Ref}
          className="absolute w-3 h-3 rounded-full bg-green-500 will-change-transform opacity-0 pointer-events-none"
        />
        {/* Сам физический светодиод */}
        <span
          ref={badgeRef}
          className="w-3 h-3 rounded-full bg-green-400 border border-green-200 shadow-md will-change-transform"
        />
      </div>

      {/* Кнопка Open to Work */}
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={mailtoUrl}
        className="px-2 py-1.5 bg-background-secondary  text-white text-sm tracking-wide lowercase rounded-xl border border-neutral-500 hover:border-green-500/50 hover:text-white  duration-300"
      >
        open to work
      </a>
    </div>
  );
}
