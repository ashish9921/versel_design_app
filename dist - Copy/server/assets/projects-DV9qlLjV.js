import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { R as Route, e as categories } from "./router-Bi_HEl3Z.js";
import "@tanstack/react-query";
import "framer-motion";
import "@supabase/supabase-js";
function ProjectsPage() {
  const projects = Route.useLoaderData();
  const [filter, setFilter] = useState("All");
  const visible = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.category === filter), [filter, projects]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "eyebrow opacity-50 mb-6 reveal", children: [
        "Index 01 — ",
        projects.length
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight reveal reveal-delay-1 max-w-4xl", children: [
        "Selected",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "works" }),
        " across disciplines."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 border-y border-foreground/10 sticky top-[68px] md:top-[78px] bg-background/85 backdrop-blur-md z-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto flex gap-6 md:gap-10 py-5 overflow-x-auto", children: [
      categories.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(c), className: `eyebrow whitespace-nowrap transition-colors ${filter === c ? "text-accent" : "opacity-60 hover:opacity-100"}`, children: c }, c)),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto eyebrow opacity-40 hidden md:block", children: [
        visible.length,
        " ",
        visible.length === 1 ? "project" : "projects"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-x-8 gap-y-20 md:gap-y-28", children: visible.map((p, i) => {
        const layouts = ["col-span-12 md:col-span-7", "col-span-12 md:col-span-4 md:col-start-9 md:mt-24", "col-span-12 md:col-span-5 md:col-start-2", "col-span-12 md:col-span-6 md:col-start-7 md:mt-12", "col-span-12 md:col-span-5", "col-span-12 md:col-span-5 md:col-start-7"];
        return /* @__PURE__ */ jsxs(Link, { to: "/projects/$slug", params: {
          slug: p.slug
        }, className: `${layouts[i % layouts.length]} group cursor-pointer`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4 eyebrow opacity-50", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              String(i + 1).padStart(2, "0"),
              " / ",
              p.category
            ] }),
            /* @__PURE__ */ jsx("span", { children: p.year })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hover-zoom aspect-[4/5] w-full", children: /* @__PURE__ */ jsx("img", { src: p.cover, alt: p.title, loading: "lazy", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-between items-start border-b border-foreground/10 pb-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-serif group-hover:text-accent transition-colors", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-light opacity-60 mt-1", children: p.location })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xl font-serif group-hover:text-accent group-hover:translate-x-1 transition-all", children: "↗" })
          ] })
        ] }, p.slug);
      }) }),
      visible.length === 0 && /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto py-32 text-center", children: /* @__PURE__ */ jsx("p", { className: "font-serif text-2xl italic opacity-60", children: "No projects in this category yet." }) })
    ] })
  ] });
}
export {
  ProjectsPage as component
};
