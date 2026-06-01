import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
const appCss = "/assets/styles-1UMB4g-0.css";
const links = [
  { to: "/", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Practice" },
  { to: "/blog", label: "Blog" }
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[860px] mx-auto pointer-events-auto", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `glass-pill flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "py-2 pl-4 pr-2" : "py-2.5 pl-5 pr-2.5"}`,
        children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/",
              className: "font-serif text-xl md:text-[22px] tracking-tight leading-none shrink-0",
              "data-cursor": "hover",
              children: [
                "STOA",
                /* @__PURE__ */ jsx("span", { className: "text-accent", children: "." })
              ]
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-7 eyebrow", children: links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "hover:text-accent transition-colors duration-300",
              activeProps: { className: "text-accent" },
              activeOptions: { exact: l.to === "/" },
              "data-cursor": "hover",
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "hidden md:inline-flex items-center eyebrow px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-accent hover:text-foreground transition-colors",
              "data-cursor": "hover",
              children: "Contact"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpen((o) => !o),
              className: "md:hidden flex flex-col gap-[5px] p-2",
              "aria-label": "Toggle menu",
              "data-cursor": "hover",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `block w-5 h-px bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `block w-5 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `block w-5 h-px bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs("nav", { className: "md:hidden mt-3 glass-pill rounded-3xl px-6 py-6 flex flex-col gap-5 eyebrow animate-fade-in", children: [
      links.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          onClick: () => setOpen(false),
          className: "hover:text-accent",
          activeProps: { className: "text-accent" },
          activeOptions: { exact: l.to === "/" },
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "mt-2 eyebrow px-5 py-3 rounded-full bg-foreground text-background text-center",
          children: "Contact"
        }
      )
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "px-6 md:px-10 py-20 md:py-24 pb-44 md:pb-52 bg-background border-t border-foreground/5", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-3xl md:text-4xl font-serif leading-tight mb-8", children: [
          "Let's create",
          /* @__PURE__ */ jsx("br", {}),
          "something ",
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "enduring" }),
          "."
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:studio@stoa.design",
            className: "text-lg md:text-xl hover:text-accent transition-colors border-b border-foreground/15 pb-1",
            children: "studio@stoa.design"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-12 md:gap-20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-40 mb-5", children: "Studios" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-sm space-y-2.5 font-light", children: [
            /* @__PURE__ */ jsx("li", { children: "London" }),
            /* @__PURE__ */ jsx("li", { children: "Copenhagen" }),
            /* @__PURE__ */ jsx("li", { children: "Athens" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-40 mb-5", children: "Studio" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-sm space-y-2.5 font-light", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-accent transition-colors", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent transition-colors", children: "Blog" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/projects", className: "hover:text-accent transition-colors", children: "Projects" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto mt-20 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between gap-4 eyebrow opacity-40", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " STOA Architecture"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:opacity-80", children: "Practice" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:opacity-80", children: "Contact" })
      ] })
    ] })
  ] });
}
function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `fixed bottom-28 md:bottom-32 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`,
      children: [
        open && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-end", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://wa.me/00000000000",
              target: "_blank",
              rel: "noreferrer",
              className: "bg-background/95 backdrop-blur-md border border-foreground/10 px-4 py-3 text-xs tracking-widest uppercase shadow-lg hover:text-accent transition-colors",
              children: "WhatsApp"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+000000000",
              className: "bg-background/95 backdrop-blur-md border border-foreground/10 px-4 py-3 text-xs tracking-widest uppercase shadow-lg hover:text-accent transition-colors",
              children: "Call Studio"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "bg-foreground text-background px-4 py-3 text-xs tracking-widest uppercase shadow-lg hover:bg-accent transition-colors",
              children: "Book Consultation"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen((o) => !o),
            "aria-label": "Open contact menu",
            className: "size-14 rounded-full bg-foreground text-background shadow-xl hover:bg-accent hover:scale-105 transition-all duration-300 flex items-center justify-center",
            children: open ? /* @__PURE__ */ jsx("svg", { className: "size-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", d: "M6 6l12 12M18 6L6 18" }) }) : /* @__PURE__ */ jsx("span", { className: "font-serif text-[15px] tracking-wide", children: "Talk" })
          }
        )
      ]
    }
  );
}
function CustomCursor() {
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
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        style: { x: ringX, y: ringY, opacity: hidden ? 0 : 1 },
        className: "pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference",
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: {
              width: hover ? 56 : 32,
              height: hover ? 56 : 32,
              borderColor: hover ? "color-mix(in oklab, var(--accent) 90%, white)" : "rgba(255,255,255,0.85)"
            },
            transition: { type: "spring", stiffness: 260, damping: 24 },
            className: "rounded-full border"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        style: { x: dotX, y: dotY, opacity: hidden ? 0 : 1 },
        className: "pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference",
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { scale: hover ? 0 : 1 },
            transition: { type: "spring", stiffness: 400, damping: 25 },
            className: "size-[6px] rounded-full bg-white"
          }
        )
      }
    )
  ] });
}
function BottomBlur() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed inset-x-0 bottom-0 h-32 md:h-40 z-40",
      style: {
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        maskImage: "linear-gradient(to top, black 30%, rgba(0,0,0,0.7) 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 30%, rgba(0,0,0,0.7) 60%, transparent 100%)",
        background: "linear-gradient(to top, color-mix(in oklab, var(--background) 80%, transparent) 0%, transparent 100%)"
      }
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-[120px] leading-none text-accent/70", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-2xl font-serif", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground font-light", children: "The page you're looking for has been moved or never existed." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center px-7 py-3 bg-foreground text-background eyebrow hover:bg-accent transition-colors",
        children: "Return Home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-serif", children: "Something interrupted us" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground font-light", children: "Please try again or return to the home page." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "px-6 py-3 bg-foreground text-background eyebrow hover:bg-accent transition-colors",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "px-6 py-3 border border-foreground/15 eyebrow hover:border-foreground transition-colors",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "STOA — Architecture & Interior Design Studio" },
      {
        name: "description",
        content: "STOA is an architecture and interior design studio crafting residential, commercial, interior and landscape projects rooted in material honesty and quiet permanence."
      },
      { name: "author", content: "STOA Studio" },
      { property: "og:title", content: "STOA — Architecture & Interior Design Studio" },
      {
        property: "og:description",
        content: "Architecture and interior design rooted in material honesty and quiet permanence."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsx(BottomBlur, {}),
    /* @__PURE__ */ jsx(CustomCursor, {})
  ] });
}
function createSupabaseAdminClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_SERVICE_ROLE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Connect Supabase in Lovable Cloud.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      storage: void 0,
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
let _supabaseAdmin;
const supabaseAdmin = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  }
});
const cover1 = "/assets/project-3-ar1Uht1c.jpg";
const cover2 = "/assets/project-5-B1pnpEcT.jpg";
const studio = "/assets/studio-CC8mpIH5.jpg";
const project1 = "/assets/project-1-C_DHxm0t.jpg";
const blogPosts = [
  {
    slug: "on-patina",
    title: "On patina, and the architecture of waiting",
    category: "Essays",
    tags: ["materials", "brass", "oak"],
    author: "Eleni Vakirtzi",
    readTime: "6 min",
    date: "March 12, 2026",
    excerpt: "A short defence of brass that tarnishes, oak that darkens, and lime plaster that takes ten years to settle into a room.",
    cover: cover1,
    content: [
      "The first time a client asks us about brass, they almost always ask the same question: will it stay this colour?",
      "The honest answer is no. It will not. And that, we have come to believe, is the most important thing it will do.",
      "A building that refuses to age is a building that refuses to be lived in. The patina of a handrail, the soft darkening of an oak threshold, the bloom on a lime-washed wall — these are not flaws. They are the record of inhabitation.",
      "We design with this record in mind. We choose materials not for how they look on the day of handover, but for how they will look in twenty years, after a thousand mornings of light and a thousand evenings of touch."
    ]
  },
  {
    slug: "alpine-notebook",
    title: "Notebook from an alpine site",
    category: "Site Notes",
    tags: ["site", "process"],
    author: "Søren Aalborg",
    readTime: "4 min",
    date: "February 2, 2026",
    excerpt: "Fragments from three days spent at 1,800m, watching how snow moves through a valley before a single line was drawn.",
    cover: cover2,
    content: [
      "Day one. Arrived late. The sun was already behind the ridge, the meadow already in shadow. We did not draw.",
      "Day two. Wind from the north-west all morning, swinging south by three. The site is in a saddle. Any building here will have to learn this rhythm.",
      "Day three. Walked the property line three times. The neighbour, a farmer of forty years, told us where the spring runs in April. That single sentence will redraw the plan."
    ]
  },
  {
    slug: "lime-plaster",
    title: "Lime plaster, and why we still mix it on site",
    category: "Materials",
    tags: ["lime", "craft", "interiors"],
    author: "Mira Tanaka",
    readTime: "5 min",
    date: "January 14, 2026",
    excerpt: "A practical note on hydrated lime, regional sand, and the small craft economy that depends on us specifying it.",
    cover: studio,
    content: [
      "Lime plaster is older than cement by several thousand years and, in nearly every respect that matters to us, still better.",
      "It breathes. It absorbs and releases moisture in step with the room. It develops a soft, mineral surface that catches light differently in every hour.",
      "We mix it on site, with sand from within fifty kilometres of the project, and a master plasterer who has been doing this for thirty years. The result cannot be ordered from a catalogue, and that is exactly the point."
    ]
  },
  {
    slug: "kyoto-walks",
    title: "Five walks in Kyoto",
    category: "Travel",
    tags: ["kyoto", "thresholds", "travel"],
    author: "Lars Møller",
    readTime: "7 min",
    date: "November 20, 2025",
    excerpt: "What two of us learned in a week of looking at thresholds, gardens, and the precise depth of a temple eave.",
    cover: project1,
    content: [
      "We did not go to Kyoto to study temples. We went to study thresholds — the few centimetres of shadow where outside becomes inside.",
      "In every building we visited, the threshold was longer, deeper, and quieter than we expected. It was never a line. It was always a small room of its own.",
      "We brought this idea home. The next three projects on our boards have all gained a threshold."
    ]
  }
];
const BASE_URL = "";
const Route$8 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { data: projects } = await supabaseAdmin.from("projects").select("slug").eq("published", true);
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/projects", changefreq: "weekly", priority: "0.9" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...(projects ?? []).map((p) => ({
            path: `/projects/${p.slug}`,
            changefreq: "monthly",
            priority: "0.7"
          })),
          ...blogPosts.map((b) => ({
            path: `/blog/${b.slug}`,
            changefreq: "monthly",
            priority: "0.6"
          }))
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$7 = () => import("./services-CHgD8Pa4.js");
const Route$7 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — STOA Architecture"
    }, {
      name: "description",
      content: "Architectural design, interior design, landscaping, building permissions and urban design services from STOA."
    }, {
      property: "og:title",
      content: "Services — STOA Architecture"
    }, {
      property: "og:description",
      content: "Five disciplines, one studio. STOA's services from concept to completion."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
function createSupabaseClient() {
  const SUPABASE_URL = "https://iypkdgqbnqsdcemcarfd.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cGtkZ3FibnFzZGNlbWNhcmZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4Nzk3NjUsImV4cCI6MjA5NTQ1NTc2NX0.qSNPzBJbbMaMIdm7629xChKH_-8yAZ-aINul_Ay24S0";
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Landscape"
];
function mapRow(r, gallery) {
  return {
    slug: r.slug,
    title: r.title,
    category: r.category ?? "Residential",
    location: r.location ?? "",
    year: r.year ?? "",
    area: r.area ?? "",
    timeline: r.timeline ?? "",
    style: r.style ?? "",
    budget: r.budget ?? "",
    cover: r.cover_image_url ?? "",
    before: r.before_image_url ?? void 0,
    shortDesc: r.summary ?? "",
    featured: r.featured,
    caseStudy: {
      clientRequirement: r.cs_client_requirement ?? "",
      designApproach: r.cs_design_approach ?? "",
      materials: r.cs_materials ?? "",
      outcome: r.cs_outcome ?? ""
    },
    gallery: gallery.length > 0 ? gallery : r.cover_image_url ? [r.cover_image_url, r.cover_image_url, r.cover_image_url] : []
  };
}
async function fetchProjects() {
  const { data: rows, error } = await supabase.from("projects").select(
    "id, slug, title, category, location, year, area, timeline, style, budget, summary, cover_image_url, before_image_url, featured, cs_client_requirement, cs_design_approach, cs_materials, cs_outcome, sort_order, published"
  ).eq("published", true).order("sort_order", { ascending: true });
  if (error) throw error;
  if (!rows || rows.length === 0) return [];
  const ids = rows.map((r) => r.id);
  const { data: imgs, error: ierr } = await supabase.from("project_images").select("project_id, image_url, sort_order").in("project_id", ids).order("sort_order", { ascending: true });
  if (ierr) throw ierr;
  const byProject = /* @__PURE__ */ new Map();
  (imgs ?? []).forEach((i) => {
    const arr = byProject.get(i.project_id) ?? [];
    arr.push(i.image_url);
    byProject.set(i.project_id, arr);
  });
  return rows.map((r) => mapRow(r, byProject.get(r.id) ?? []));
}
async function fetchProject(slug) {
  const { data: row, error } = await supabase.from("projects").select(
    "id, slug, title, category, location, year, area, timeline, style, budget, summary, cover_image_url, before_image_url, featured, cs_client_requirement, cs_design_approach, cs_materials, cs_outcome"
  ).eq("slug", slug).eq("published", true).maybeSingle();
  if (error) throw error;
  if (!row) return null;
  const { data: imgs } = await supabase.from("project_images").select("image_url, sort_order").eq("project_id", row.id).order("sort_order", { ascending: true });
  return mapRow(row, (imgs ?? []).map((i) => i.image_url));
}
async function fetchRelated(slug, category) {
  const all = await fetchProjects();
  return all.filter((p) => p.slug !== slug && p.category === category).slice(0, 3);
}
const $$splitComponentImporter$6 = () => import("./projects-DV9qlLjV.js");
const Route$6 = createFileRoute("/projects")({
  loader: () => fetchProjects(),
  head: () => ({
    meta: [{
      title: "Projects — STOA Architecture"
    }, {
      name: "description",
      content: "Selected residential, commercial, interior and landscape projects by STOA — a multi-disciplinary architecture and interior design studio."
    }, {
      property: "og:title",
      content: "Projects — STOA Architecture"
    }, {
      property: "og:description",
      content: "Selected residential, commercial, interior and landscape projects by STOA."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-CNG4jl8v.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — STOA Architecture"
    }, {
      name: "description",
      content: "Begin a dialogue with STOA. Studio enquiries, consultation requests, and partnership opportunities."
    }, {
      property: "og:title",
      content: "Contact — STOA Architecture"
    }, {
      property: "og:description",
      content: "Begin a dialogue with STOA — architecture and interior design studio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./blog-GqoctDrt.js");
const Route$4 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Blog — STOA Architecture"
    }, {
      name: "description",
      content: "Essays, site notes, and material studies from the STOA architecture and interior design studio."
    }, {
      property: "og:title",
      content: "Blog — STOA Architecture"
    }, {
      property: "og:description",
      content: "Essays, site notes, and material studies from STOA."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-wOEWYJ3_.js");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Practice — STOA Architecture"
    }, {
      name: "description",
      content: "STOA is a multi-disciplinary architecture and interior design studio rooted in material honesty, light, and quiet permanence."
    }, {
      property: "og:title",
      content: "Practice — STOA Architecture"
    }, {
      property: "og:description",
      content: "STOA is a multi-disciplinary architecture and interior design studio rooted in material honesty, light, and quiet permanence."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BUDBPXVR.js");
const Route$2 = createFileRoute("/")({
  loader: () => fetchProjects(),
  head: () => ({
    meta: [{
      title: "STOA — Architecture & Interior Design"
    }, {
      name: "description",
      content: "Selected works from STOA — residential, commercial, interior and landscape projects across Europe and beyond."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./projects._slug-D8t44cqt.js");
const Route$1 = createFileRoute("/projects/$slug")({
  loader: async ({
    params
  }) => {
    const project = await fetchProject(params.slug);
    if (!project) throw notFound();
    const related = await fetchRelated(project.slug, project.category);
    return {
      project,
      related
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: []
    };
    const p = loaderData.project;
    return {
      meta: [{
        title: `${p.title} — STOA Architecture`
      }, {
        name: "description",
        content: p.shortDesc
      }, {
        property: "og:title",
        content: `${p.title} — STOA Architecture`
      }, {
        property: "og:description",
        content: p.shortDesc
      }, {
        property: "og:image",
        content: p.cover
      }, {
        name: "twitter:image",
        content: p.cover
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./blog._slug-xGxBjiyF.js");
const $$splitErrorComponentImporter = () => import("./blog._slug-fs8uWmaD.js");
const $$splitNotFoundComponentImporter = () => import("./blog._slug-CG35sy2E.js");
const Route = createFileRoute("/blog/$slug")({
  loader: ({
    params
  }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.post;
    if (!p) return {
      meta: [{
        title: "Blog — STOA"
      }]
    };
    return {
      meta: [
        {
          title: `${p.title} — STOA`
        },
        {
          name: "description",
          content: p.excerpt
        },
        {
          property: "og:title",
          content: p.title
        },
        {
          property: "og:description",
          content: p.excerpt
        },
        {
          property: "og:image",
          content: p.cover
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:image",
          content: p.cover
        },
        // Pinterest-optimised
        {
          property: "pinterest:image",
          content: p.cover
        },
        {
          property: "pinterest:description",
          content: p.excerpt
        }
      ]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$8.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$9
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$9
});
const ProjectsRoute = Route$6.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const BlogRoute = Route$4.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const ProjectsSlugRoute = Route$1.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProjectsRoute
});
const BlogSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogSlugRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const ProjectsRouteChildren = {
  ProjectsSlugRoute
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute: BlogRouteWithChildren,
  ContactRoute,
  ProjectsRoute: ProjectsRouteWithChildren,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$6 as R,
  Route$2 as a,
  Route$1 as b,
  Route as c,
  blogPosts as d,
  categories as e,
  project1 as p,
  router as r,
  studio as s
};
