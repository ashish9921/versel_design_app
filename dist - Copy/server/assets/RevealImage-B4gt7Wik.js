import { jsx } from "react/jsx-runtime";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
  style
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return /* @__PURE__ */ jsx("div", { ref, className: `relative overflow-hidden ${className}`, style, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { clipPath: "inset(0 0 100% 0)" },
      animate: inView ? { clipPath: "inset(0 0 0% 0)" } : {},
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
      className: "h-full w-full",
      children: /* @__PURE__ */ jsx(
        motion.img,
        {
          src,
          alt,
          loading,
          initial: { scale: 1.18 },
          animate: inView ? { scale: 1 } : {},
          transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
          className: `h-full w-full object-cover ${imgClassName}`
        }
      )
    }
  ) });
}
export {
  RevealImage as R
};
