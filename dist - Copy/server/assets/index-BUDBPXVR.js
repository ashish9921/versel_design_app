import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { a as Route, s as studio } from "./router-Bi_HEl3Z.js";
import { R as RevealImage } from "./RevealImage-B4gt7Wik.js";
import { B as BeforeAfter } from "./BeforeAfter-D1oVFM3u.js";
import "@tanstack/react-query";
import "@supabase/supabase-js";
const hero = "/assets/hero-L4lM7Ue2.jpg";
function ParallaxHero({
  image,
  alt,
  eyebrow,
  titleTop,
  titleItalic,
  titleEnd,
  caption
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.15, 0.55]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "relative h-[100svh] w-full overflow-hidden bg-foreground",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { y, scale },
            className: "absolute inset-0 will-change-transform",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                alt,
                width: 1920,
                height: 1280,
                className: "h-full w-full object-cover"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { opacity: overlay },
            className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { y: titleY, opacity: titleOpacity },
            className: "absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10",
            children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto w-full", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                  className: "eyebrow text-white/70 mb-6",
                  children: eyebrow
                }
              ),
              /* @__PURE__ */ jsxs("h1", { className: "text-[clamp(2.75rem,9vw,7.5rem)] font-serif leading-[0.92] tracking-tight text-white", children: [
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, y: 60 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                    className: "block",
                    children: titleTop
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.span,
                  {
                    initial: { opacity: 0, y: 60 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] },
                    className: "block pl-6 md:pl-24",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: titleItalic }),
                      " ",
                      titleEnd
                    ]
                  }
                )
              ] }),
              caption && /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 1, delay: 1 },
                  className: "mt-8 flex justify-between items-end text-xs md:text-sm font-light text-white/70",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: caption }),
                    /* @__PURE__ */ jsxs("span", { className: "hidden md:flex items-center gap-3 italic", children: [
                      "Scroll",
                      /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          animate: { y: [0, 8, 0] },
                          transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                          className: "inline-block w-px h-8 bg-white/40"
                        }
                      )
                    ] })
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function SelectedWorks({ projects }) {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const [active, setActive] = useState(0);
  if (featured.length === 0) return null;
  return /* @__PURE__ */ jsxs("section", { className: "relative px-6 md:px-10 py-28 md:py-40 border-t border-foreground/10 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 -z-10",
        style: {
          background: "radial-gradient(60% 60% at 80% 20%, color-mix(in oklab, var(--accent) 18%, transparent) 0%, transparent 60%), radial-gradient(50% 50% at 10% 80%, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 60%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          className: "flex justify-between items-end mb-14 md:mb-20",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3", children: "Selected Works" }),
              /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-6xl leading-[1.02]", children: [
                "A measured ",
                /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "archive" }),
                "."
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/projects",
                "data-cursor": "hover",
                className: "hidden md:inline-block eyebrow border-b border-foreground/15 pb-1 hover:text-accent hover:border-accent transition-colors",
                children: "View All →"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-12 gap-10 items-start", children: [
        /* @__PURE__ */ jsx(
          "ul",
          {
            className: "col-span-7",
            onMouseLeave: () => setActive(0),
            children: featured.map((p, i) => /* @__PURE__ */ jsx(
              "li",
              {
                onMouseEnter: () => setActive(i),
                className: "group border-t border-foreground/10 last:border-b",
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/projects/$slug",
                    params: { slug: p.slug },
                    "data-cursor": "hover",
                    className: "flex items-center justify-between py-7 lg:py-9 transition-transform duration-500 will-change-transform group-hover:translate-x-3",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-6", children: [
                        /* @__PURE__ */ jsx("span", { className: "eyebrow opacity-40 tabular-nums", children: String(i + 1).padStart(2, "0") }),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: `font-serif text-3xl lg:text-5xl leading-none transition-colors duration-500 ${active === i ? "text-accent italic" : ""}`,
                            children: p.title
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
                        /* @__PURE__ */ jsxs("span", { className: "eyebrow opacity-50", children: [
                          p.location.split(",")[0],
                          " · ",
                          p.year
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "font-serif text-xl opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all", children: "↗" })
                      ] })
                    ]
                  }
                )
              },
              p.slug
            ))
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "col-span-5 sticky top-32", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[3/4] w-full overflow-hidden rounded-sm", children: [
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
            motion.img,
            {
              src: featured[active].cover,
              alt: featured[active].title,
              initial: { opacity: 0, scale: 1.06 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 1.02 },
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              className: "absolute inset-0 w-full h-full object-cover"
            },
            featured[active].slug
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between items-end eyebrow text-white/90", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full", children: featured[active].category }),
            /* @__PURE__ */ jsx("span", { className: "bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full", children: featured[active].location })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:hidden space-y-14", children: [
        featured.map((p, i) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/projects/$slug",
            params: { slug: p.slug },
            className: "block",
            children: [
              /* @__PURE__ */ jsx(
                RevealImage,
                {
                  src: p.cover,
                  alt: p.title,
                  className: "aspect-[4/5] w-full"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-5 flex justify-between items-end border-b border-foreground/10 pb-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "eyebrow opacity-50 mb-2", children: [
                    String(i + 1).padStart(2, "0"),
                    " / ",
                    p.category
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl", children: p.title })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-serif text-xl", children: "↗" })
              ] })
            ]
          },
          p.slug
        )),
        /* @__PURE__ */ jsx("div", { className: "text-center pt-2", children: /* @__PURE__ */ jsx(
          Link,
          {
            to: "/projects",
            className: "eyebrow border-b border-foreground/15 pb-1 hover:text-accent",
            children: "View All Projects →"
          }
        ) })
      ] })
    ] })
  ] });
}
const services = [{
  n: "01",
  title: "Architectural Design",
  desc: "Ground-up architecture for private residences, cultural institutions, and hospitality."
}, {
  n: "02",
  title: "Interior Design",
  desc: "Considered interiors built around material, light, and the rituals of daily life."
}, {
  n: "03",
  title: "Landscape",
  desc: "Drought-aware gardens and grounds that mature into the architecture they surround."
}, {
  n: "04",
  title: "Urban Studies",
  desc: "Master planning, mixed-use studies, and building permissions for emerging districts."
}];
const stats = [{
  value: 124,
  suffix: "",
  label: "Completed Works"
}, {
  value: 14,
  suffix: "",
  label: "International Awards"
}, {
  value: 12,
  suffix: "",
  label: "Years of Practice"
}, {
  value: 9,
  suffix: "",
  label: "Countries"
}];
const testimonials = [{
  quote: "STOA doesn't build structures; they curate atmosphere. Living in the residence has changed how we perceive the passing of seasons.",
  author: "Elias & Sarah Thorne",
  role: "Private Client, Athens"
}, {
  quote: "From the first sketch to the final walkthrough, the studio operated with a precision and quiet confidence that we rarely encounter.",
  author: "Marcus Halberg",
  role: "Hotel Group, Lisbon"
}, {
  quote: "The interior they made for us is not a fashion. It is a place. It will be relevant in twenty years.",
  author: "Naoko Yamada",
  role: "Collector, Kyoto"
}];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
function HomePage() {
  const projects = Route.useLoaderData();
  const transformations = projects.filter((p) => p.before).slice(0, 3);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ParallaxHero, { image: hero, alt: "Concrete atrium with dramatic skylight", eyebrow: "Architecture · Interior · Landscape", titleTop: "Architecting", titleItalic: "silent", titleEnd: "spaces.", caption: `STOA / Selected Works 2012 — ${(/* @__PURE__ */ new Date()).getFullYear()}` }),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsx(SelectedWorks, { projects }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-28 md:py-40 border-t border-foreground/10 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: fadeUp, className: "mb-16 md:mb-20 max-w-3xl", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3 text-accent", children: "Transformations" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-6xl leading-[1.02]", children: [
          "Drag to reveal the ",
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "becoming" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg font-light opacity-70 leading-relaxed", children: "Every site arrives with its own silence. We listen, then rebuild. Move the slider to witness the conversation between the inherited and the imagined." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-24 md:space-y-32", children: transformations.map((p, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 60
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }, className: "grid grid-cols-12 gap-6 md:gap-12 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: `col-span-12 md:col-span-8 ${i % 2 ? "md:col-start-5 md:order-2" : ""}`, children: /* @__PURE__ */ jsx(BeforeAfter, { before: p.before, after: p.cover, alt: p.title, className: "aspect-[4/3] md:aspect-[16/10]" }) }),
        /* @__PURE__ */ jsxs("div", { className: `col-span-12 md:col-span-3 ${i % 2 ? "md:col-start-2 md:order-1" : "md:col-start-10"}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "eyebrow opacity-50 mb-3", children: [
            String(i + 1).padStart(2, "0"),
            " — ",
            p.category
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl leading-tight mb-4", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-light opacity-70 leading-relaxed mb-6", children: p.shortDesc }),
          /* @__PURE__ */ jsx(Link, { to: "/projects/$slug", params: {
            slug: p.slug
          }, className: "eyebrow border-b border-foreground/15 pb-1 hover:text-accent hover:border-accent transition-colors", children: "Case Study →" })
        ] })
      ] }, p.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-foreground text-background py-28 md:py-40 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: fadeUp, className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-40 mb-6", children: "The Practice" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif leading-[1.05]", children: [
          "We believe architecture should be felt",
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: " before " }),
          "it is seen."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: fadeUp, transition: {
        delay: 0.15
      }, className: "col-span-12 md:col-span-6 md:col-start-7 space-y-6 text-base md:text-lg font-light leading-relaxed opacity-80", children: [
        /* @__PURE__ */ jsx("p", { children: "STOA is a multi-disciplinary studio operating at the intersection of form, light, and material. Founded on the principle of reduction, we strip away the superfluous to find the essence of space." }),
        /* @__PURE__ */ jsx("p", { children: "Our work spans private residential retreats, cultural landmarks, and considered interiors — each unified by a commitment to permanence and tactile honesty." }),
        /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "eyebrow border-b border-background/30 pb-2 hover:border-background hover:text-accent transition-colors", children: "Our Philosophy →" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: fadeUp, className: "flex justify-between items-end mb-16 md:mb-20", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3", children: "Practice" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: "Disciplines." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 md:gap-y-16", children: services.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }, className: "group border-t border-foreground/10 pt-8 flex gap-6 md:gap-10", children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif italic text-accent text-xl md:text-2xl", children: s.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-light leading-relaxed opacity-70 max-w-md", children: s.desc })
        ] })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-20 md:py-24 border-y border-foreground/10 bg-secondary/40", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6", children: stats.map((s) => /* @__PURE__ */ jsx(StatItem, { ...s }, s.label)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: fadeUp, className: "col-span-12 md:col-span-4", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-6", children: "Voices" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-5xl leading-tight", children: [
          "From those",
          /* @__PURE__ */ jsx("br", {}),
          "who ",
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "live" }),
          /* @__PURE__ */ jsx("br", {}),
          "in our spaces."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-7 md:col-start-6 space-y-16", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs(motion.figure, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.9,
        delay: i * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }, className: "border-t border-foreground/10 pt-8", children: [
        /* @__PURE__ */ jsxs("blockquote", { className: "font-serif text-2xl md:text-3xl leading-snug mb-6 italic", children: [
          "“",
          t.quote,
          "”"
        ] }),
        /* @__PURE__ */ jsx("figcaption", { className: "flex justify-between items-end", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: t.author }),
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mt-1", children: t.role })
        ] }) })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 pb-6", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }, className: "max-w-[1400px] mx-auto bg-foreground text-background py-24 md:py-32 px-8 md:px-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-40 mb-8", children: "Begin a Dialogue" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-7xl leading-[1.02] mb-12", children: [
        "Let us build your",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "quiet place" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "px-8 py-4 bg-background text-foreground eyebrow hover:bg-accent transition-colors", children: "Start a Project" }),
        /* @__PURE__ */ jsx(Link, { to: "/projects", className: "px-8 py-4 border border-background/20 eyebrow hover:border-background transition-colors", children: "View Portfolio" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-center", children: [
      /* @__PURE__ */ jsx(RevealImage, { src: studio, alt: "STOA studio drafting table with architectural model", className: "col-span-12 md:col-span-7 aspect-[4/5]" }),
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: fadeUp, className: "col-span-12 md:col-span-4 md:col-start-9", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-4", children: "Inside the Studio" }),
        /* @__PURE__ */ jsxs("h3", { className: "font-serif text-3xl md:text-4xl leading-tight mb-6", children: [
          "Drawings, models,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "conversations" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-light leading-relaxed opacity-70 mb-8", children: "Every project begins with a long conversation and a longer drawing. We still build physical models for every commission." }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "eyebrow border-b border-foreground/15 pb-1 hover:text-accent", children: "Meet the Studio →" })
      ] })
    ] }) })
  ] });
}
function Marquee() {
  const words = ["Material Honesty", "Quiet Permanence", "Light as Substance", "Crafted to Endure"];
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden border-y border-foreground/10 py-6 bg-canvas", children: /* @__PURE__ */ jsx(motion.div, { animate: {
    x: ["0%", "-50%"]
  }, transition: {
    duration: 38,
    repeat: Infinity,
    ease: "linear"
  }, className: "flex whitespace-nowrap gap-16 will-change-transform", children: [...words, ...words, ...words, ...words].map((w, i) => /* @__PURE__ */ jsxs("span", { className: "font-serif text-3xl md:text-5xl italic opacity-80 flex items-center gap-16", children: [
    w,
    /* @__PURE__ */ jsx("span", { className: "text-accent not-italic", children: "✦" })
  ] }, i)) }) });
}
function StatItem({
  value,
  suffix,
  label
}) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: 0.4
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return /* @__PURE__ */ jsxs("div", { ref, className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("span", { className: "font-serif text-5xl md:text-6xl leading-none", children: [
      n.toString().padStart(2, "0"),
      suffix
    ] }),
    /* @__PURE__ */ jsx("span", { className: "eyebrow opacity-50 mt-3", children: label })
  ] });
}
export {
  HomePage as component
};
