import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/projects-data";
import { RevealImage } from "@/components/site/RevealImage";

export function SelectedWorks({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const [active, setActive] = useState(0);

  if (featured.length === 0) return null;

  return (
    <section className="relative px-6 md:px-10 py-28 md:py-40 border-t border-foreground/10 overflow-hidden">
      {/* Atmospheric background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 20%, color-mix(in oklab, var(--accent) 18%, transparent) 0%, transparent 60%), radial-gradient(50% 50% at 10% 80%, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end mb-14 md:mb-20"
        >
          <div>
            <div className="eyebrow opacity-50 mb-3">Selected Works</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.02]">
              A measured <span className="italic text-accent">archive</span>.
            </h2>
          </div>
          <Link
            to="/projects"
            data-cursor="hover"
            className="hidden md:inline-block eyebrow border-b border-foreground/15 pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            View All →
          </Link>
        </motion.div>

        {/* Desktop: hover-list with floating preview */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-start">
          <ul
            className="col-span-7"
            onMouseLeave={() => setActive(0)}
          >
            {featured.map((p, i) => (
              <li
                key={p.slug}
                onMouseEnter={() => setActive(i)}
                className="group border-t border-foreground/10 last:border-b"
              >
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  data-cursor="hover"
                  className="flex items-center justify-between py-7 lg:py-9 transition-transform duration-500 will-change-transform group-hover:translate-x-3"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="eyebrow opacity-40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-serif text-3xl lg:text-5xl leading-none transition-colors duration-500 ${
                        active === i ? "text-accent italic" : ""
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="eyebrow opacity-50">
                      {p.location.split(",")[0]} · {p.year}
                    </span>
                    <span className="font-serif text-xl opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
                      ↗
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="col-span-5 sticky top-32">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={featured[active].slug}
                  src={featured[active].cover}
                  alt={featured[active].title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end eyebrow text-white/90">
                <span className="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {featured[active].category}
                </span>
                <span className="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {featured[active].location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden space-y-14">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="block"
            >
              <RevealImage
                src={p.cover}
                alt={p.title}
                className="aspect-[4/5] w-full"
              />
              <div className="mt-5 flex justify-between items-end border-b border-foreground/10 pb-4">
                <div>
                  <div className="eyebrow opacity-50 mb-2">
                    {String(i + 1).padStart(2, "0")} / {p.category}
                  </div>
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                </div>
                <span className="font-serif text-xl">↗</span>
              </div>
            </Link>
          ))}
          <div className="text-center pt-2">
            <Link
              to="/projects"
              className="eyebrow border-b border-foreground/15 pb-1 hover:text-accent"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
