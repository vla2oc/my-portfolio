"use client";
import { useEffect, useRef } from "react";

// Держит видео на паузе, пока оно вне вьюпорта.
// На iOS несколько одновременно декодирующихся видео выедают память вкладки,
// после чего Safari выгружает её и перезагружает страницу.
export function useInViewVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() отдаёт промис и реджектится, если вкладка ушла в фон —
          // это штатная ситуация, а не ошибка
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return ref;
}
