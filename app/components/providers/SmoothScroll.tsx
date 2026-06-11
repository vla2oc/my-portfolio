"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const setupLenis = () => {
      if (lenis || mediaQuery.matches) return;
      lenis = new Lenis({
        lerp: 0.08,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.5,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
      });
      lenisRef.current = lenis;
    };

    const destroyLenis = () => {
      lenis?.destroy();
      lenis = null;
      lenisRef.current = null;
    };

    setupLenis();

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) destroyLenis();
      else setupLenis();
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => {
        lenis.resize();
        lenis.stop();
        lenis.scrollTo(0, { immediate: true, force: true });
        lenis.start();
      });
      return () => cancelAnimationFrame(id2);
    });

    return () => cancelAnimationFrame(id1);
  }, [pathname]);

  return <>{children}</>;
}
