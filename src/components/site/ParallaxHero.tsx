import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxHeroProps {
  image: string;
  alt: string;
  eyebrow: string;
  titleTop: string;
  titleItalic: string;
  titleEnd: string;
  caption?: string;
}

export function ParallaxHero({
  image,
  alt,
  eyebrow,
  titleTop,
  titleItalic,
  titleEnd,
  caption,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image moves slower than scroll (parallax) and scales subtly
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.15, 0.55]);

  // Title moves slightly up (foreground parallax)
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-foreground"
    >
      {/* Parallax image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={image}
          alt={alt}
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 pointer-events-none"
      />

      {/* Content */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow text-white/70 mb-6"
          >
            {eyebrow}
          </motion.div>
          <h1 className="text-[clamp(2.75rem,9vw,7.5rem)] font-serif leading-[0.92] tracking-tight text-white">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {titleTop}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="block pl-6 md:pl-24"
            >
              <span className="italic text-accent">{titleItalic}</span> {titleEnd}
            </motion.span>
          </h1>
          {caption && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 flex justify-between items-end text-xs md:text-sm font-light text-white/70"
            >
              <span>{caption}</span>
              <span className="hidden md:flex items-center gap-3 italic">
                Scroll
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block w-px h-8 bg-white/40"
                />
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
