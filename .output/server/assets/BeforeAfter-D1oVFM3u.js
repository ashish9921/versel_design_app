import { jsxs, jsx } from "react/jsx-runtime";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
  alt = "Project transformation"
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setWidth(w);
        x.set(w * 0.5);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [x]);
  const clipRight = useTransform(x, (v) => `inset(0 0 0 ${v}px)`);
  const lineLeft = useTransform(x, (v) => `${v}px`);
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const next = Math.max(0, Math.min(rect.width, clientX - rect.left));
    x.set(next);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: `relative w-full overflow-hidden select-none cursor-ew-resize group ${className}`,
      onMouseMove: (e) => dragging && handleMove(e.clientX),
      onMouseDown: (e) => {
        setDragging(true);
        handleMove(e.clientX);
      },
      onMouseUp: () => setDragging(false),
      onMouseLeave: () => setDragging(false),
      onTouchStart: (e) => {
        setDragging(true);
        handleMove(e.touches[0].clientX);
      },
      onTouchMove: (e) => handleMove(e.touches[0].clientX),
      onTouchEnd: () => setDragging(false),
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: after,
            alt: `${alt} — after`,
            loading: "lazy",
            className: "block w-full h-full object-cover pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.img,
          {
            src: before,
            alt: `${alt} — before`,
            loading: "lazy",
            style: { clipPath: clipRight },
            className: "absolute inset-0 w-full h-full object-cover pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-5 left-5 eyebrow text-foreground glass-pill px-3 py-1.5", children: beforeLabel }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-5 right-5 eyebrow text-foreground glass-pill px-3 py-1.5", children: afterLabel }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { left: lineLeft },
            className: "absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_24px_rgba(0,0,0,0.5)] pointer-events-none",
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-14 rounded-full flex items-center justify-center text-white",
                style: {
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(14px) saturate(160%)",
                  WebkitBackdropFilter: "blur(14px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.45)",
                  boxShadow: "0 10px 30px -8px rgba(0,0,0,0.45)"
                },
                children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "size-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", d: "M9 6l-5 6 5 6M15 6l5 6-5 6" }) })
              }
            )
          }
        ),
        width === 0 && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-muted animate-pulse" })
      ]
    }
  );
}
export {
  BeforeAfter as B
};
