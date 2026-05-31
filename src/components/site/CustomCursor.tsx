import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 700, damping: 40, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 700, damping: 40, mass: 0.3 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], [data-cursor="hover"], input, textarea, select, label'
      );
      setHover(Boolean(interactive));
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{
            width: hover ? 56 : 32,
            height: hover ? 56 : 32,
            borderColor: hover
              ? "color-mix(in oklab, var(--accent) 90%, white)"
              : "rgba(255,255,255,0.85)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="rounded-full border"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY, opacity: hidden ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hover ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="size-[6px] rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
