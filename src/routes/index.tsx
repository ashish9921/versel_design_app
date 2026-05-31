import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import { fetchProjects, type Project } from "@/lib/projects-data";
import { ParallaxHero } from "@/components/site/ParallaxHero";
import { RevealImage } from "@/components/site/RevealImage";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { SelectedWorks } from "@/components/site/SelectedWorks";

export const Route = createFileRoute("/")({
  loader: () => fetchProjects(),
  head: () => ({
    meta: [
      { title: "STOA — Architecture & Interior Design" },
      {
        name: "description",
        content:
          "Selected works from STOA — residential, commercial, interior and landscape projects across Europe and beyond.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { n: "01", title: "Architectural Design", desc: "Ground-up architecture for private residences, cultural institutions, and hospitality." },
  { n: "02", title: "Interior Design", desc: "Considered interiors built around material, light, and the rituals of daily life." },
  { n: "03", title: "Landscape", desc: "Drought-aware gardens and grounds that mature into the architecture they surround." },
  { n: "04", title: "Urban Studies", desc: "Master planning, mixed-use studies, and building permissions for emerging districts." },
];

const stats = [
  { value: 124, suffix: "", label: "Completed Works" },
  { value: 14, suffix: "", label: "International Awards" },
  { value: 12, suffix: "", label: "Years of Practice" },
  { value: 9, suffix: "", label: "Countries" },
];

const testimonials = [
  { quote: "STOA doesn't build structures; they curate atmosphere. Living in the residence has changed how we perceive the passing of seasons.", author: "Elias & Sarah Thorne", role: "Private Client, Athens" },
  { quote: "From the first sketch to the final walkthrough, the studio operated with a precision and quiet confidence that we rarely encounter.", author: "Marcus Halberg", role: "Hotel Group, Lisbon" },
  { quote: "The interior they made for us is not a fashion. It is a place. It will be relevant in twenty years.", author: "Naoko Yamada", role: "Collector, Kyoto" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

function HomePage() {
  const projects = Route.useLoaderData() as Project[];
  const transformations = projects.filter((p) => p.before).slice(0, 3);

  return (
    <>
      {/* Cinematic Parallax Hero */}
      <ParallaxHero
        image={hero}
        alt="Concrete atrium with dramatic skylight"
        eyebrow="Architecture · Interior · Landscape"
        titleTop="Architecting"
        titleItalic="silent"
        titleEnd="spaces."
        caption={`STOA / Selected Works 2012 — ${new Date().getFullYear()}`}
      />

      {/* Marquee divider */}
      <Marquee />

      {/* Selected Works (redesigned) */}
      <SelectedWorks projects={projects} />

      {/* Transformations — Before / After Reel */}
      <section className="px-6 md:px-10 py-28 md:py-40 border-t border-foreground/10 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-16 md:mb-20 max-w-3xl"
          >
            <div className="eyebrow opacity-50 mb-3 text-accent">Transformations</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.02]">
              Drag to reveal the <span className="italic text-accent">becoming</span>.
            </h2>
            <p className="mt-6 text-base md:text-lg font-light opacity-70 leading-relaxed">
              Every site arrives with its own silence. We listen, then rebuild.
              Move the slider to witness the conversation between the inherited and the imagined.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {transformations.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-6 md:gap-12 items-center"
              >
                <div className={`col-span-12 md:col-span-8 ${i % 2 ? "md:col-start-5 md:order-2" : ""}`}>
                  <BeforeAfter
                    before={p.before!}
                    after={p.cover}
                    alt={p.title}
                    className="aspect-[4/3] md:aspect-[16/10]"
                  />
                </div>
                <div className={`col-span-12 md:col-span-3 ${i % 2 ? "md:col-start-2 md:order-1" : "md:col-start-10"}`}>
                  <div className="eyebrow opacity-50 mb-3">
                    {String(i + 1).padStart(2, "0")} — {p.category}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4">
                    {p.title}
                  </h3>
                  <p className="text-sm font-light opacity-70 leading-relaxed mb-6">
                    {p.shortDesc}
                  </p>
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="eyebrow border-b border-foreground/15 pb-1 hover:text-accent hover:border-accent transition-colors">
                    Case Study →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser (dark) */}
      <section className="bg-foreground text-background py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="col-span-12 md:col-span-5"
          >
            <div className="eyebrow opacity-40 mb-6">The Practice</div>
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.05]">
              We believe architecture should be felt
              <span className="italic text-accent"> before </span>
              it is seen.
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="col-span-12 md:col-span-6 md:col-start-7 space-y-6 text-base md:text-lg font-light leading-relaxed opacity-80"
          >
            <p>
              STOA is a multi-disciplinary studio operating at the intersection of form,
              light, and material. Founded on the principle of reduction, we strip away
              the superfluous to find the essence of space.
            </p>
            <p>
              Our work spans private residential retreats, cultural landmarks, and
              considered interiors — each unified by a commitment to permanence and
              tactile honesty.
            </p>
            <div className="pt-6">
              <Link to="/about" className="eyebrow border-b border-background/30 pb-2 hover:border-background hover:text-accent transition-colors">
                Our Philosophy →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex justify-between items-end mb-16 md:mb-20"
          >
            <div>
              <div className="eyebrow opacity-50 mb-3">Practice</div>
              <h2 className="font-serif text-4xl md:text-5xl">Disciplines.</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 md:gap-y-16">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border-t border-foreground/10 pt-8 flex gap-6 md:gap-10"
              >
                <span className="font-serif italic text-accent text-xl md:text-2xl">{s.n}</span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed opacity-70 max-w-md">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 py-20 md:py-24 border-y border-foreground/10 bg-secondary/40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="col-span-12 md:col-span-4"
          >
            <div className="eyebrow opacity-50 mb-6">Voices</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              From those<br />who <span className="italic text-accent">live</span><br />in our spaces.
            </h2>
          </motion.div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-16">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-foreground/10 pt-8"
              >
                <blockquote className="font-serif text-2xl md:text-3xl leading-snug mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex justify-between items-end">
                  <div>
                    <div className="text-sm font-medium">{t.author}</div>
                    <div className="eyebrow opacity-50 mt-1">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1400px] mx-auto bg-foreground text-background py-24 md:py-32 px-8 md:px-16 text-center"
        >
          <div className="eyebrow opacity-40 mb-8">Begin a Dialogue</div>
          <h2 className="font-serif text-4xl md:text-7xl leading-[1.02] mb-12">
            Let us build your<br /><span className="italic text-accent">quiet place</span>.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="px-8 py-4 bg-background text-foreground eyebrow hover:bg-accent transition-colors">
              Start a Project
            </Link>
            <Link to="/projects" className="px-8 py-4 border border-background/20 eyebrow hover:border-background transition-colors">
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Studio image flourish */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-center">
          <RevealImage
            src={studio}
            alt="STOA studio drafting table with architectural model"
            className="col-span-12 md:col-span-7 aspect-[4/5]"
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="col-span-12 md:col-span-4 md:col-start-9"
          >
            <div className="eyebrow opacity-50 mb-4">Inside the Studio</div>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Drawings, models,<br /><span className="italic text-accent">conversations</span>.
            </h3>
            <p className="text-sm md:text-base font-light leading-relaxed opacity-70 mb-8">
              Every project begins with a long conversation and a longer drawing. We
              still build physical models for every commission.
            </p>
            <Link to="/about" className="eyebrow border-b border-foreground/15 pb-1 hover:text-accent">
              Meet the Studio →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Marquee() {
  const words = ["Material Honesty", "Quiet Permanence", "Light as Substance", "Crafted to Endure"];
  return (
    <div className="overflow-hidden border-y border-foreground/10 py-6 bg-canvas">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-16 will-change-transform"
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-serif text-3xl md:text-5xl italic opacity-80 flex items-center gap-16">
            {w}
            <span className="text-accent not-italic">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-serif text-5xl md:text-6xl leading-none">
        {n.toString().padStart(2, "0")}{suffix}
      </span>
      <span className="eyebrow opacity-50 mt-3">{label}</span>
    </div>
  );
}
