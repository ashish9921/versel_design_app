import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  parallax?: boolean;
  loading?: "lazy" | "eager";
  style?: CSSProperties;
}

/**
 * Image revealed with a clip-path mask + subtle zoom on enter.
 * Cinematic, editorial — runs once when scrolled into view.
 */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
  style,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={inView ? { clipPath: "inset(0 0 0% 0)" } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        <motion.img
          src={src}
          alt={alt}
          loading={loading}
          initial={{ scale: 1.18 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}
