import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as BeforeAfter } from "./BeforeAfter-D1oVFM3u.js";
import { R as RevealImage } from "./RevealImage-B4gt7Wik.js";
import { b as Route } from "./router-Bi_HEl3Z.js";
import "framer-motion";
import "react";
import "@tanstack/react-query";
import "@supabase/supabase-js";
function ProjectDetail() {
  const {
    project,
    related
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-24 md:pt-28", children: /* @__PURE__ */ jsx("div", { className: "w-full h-[70vh] md:h-[88vh] relative overflow-hidden", children: /* @__PURE__ */ jsx(RevealImage, { src: project.cover, alt: project.title, className: "w-full h-full", loading: "eager" }) }) }),
    project.before && /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-20 md:py-28 border-t border-foreground/10 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3 text-accent", children: "Transformation" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-tight", children: [
            "From inheritance, ",
            /* @__PURE__ */ jsx("span", { className: "italic", children: "to intention" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-light opacity-60 max-w-xs", children: "Drag the slider to compare the original condition with the finished work." })
      ] }),
      /* @__PURE__ */ jsx(BeforeAfter, { before: project.before, after: project.cover, alt: project.title, className: "aspect-[16/10]" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "eyebrow opacity-50 mb-5", children: [
          project.category,
          " / ",
          project.year
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight", children: project.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-80", children: project.shortDesc })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4 md:col-start-9 grid grid-cols-2 gap-y-8 gap-x-6 md:mt-4", children: [["Location", project.location], ["Area", project.area], ["Timeline", project.timeline], ["Style", project.style], ["Budget", project.budget], ["Year", String(project.year)]].map(([k, v]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-40 mb-2", children: k }),
        /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base font-light", children: v })
      ] }, k)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-20 md:py-28 border-t border-foreground/10", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-y-20 md:gap-x-12", children: [{
      eyebrow: "01 — Client Requirement",
      title: "The brief",
      body: project.caseStudy.clientRequirement
    }, {
      eyebrow: "02 — Design Approach",
      title: "The response",
      body: project.caseStudy.designApproach
    }, {
      eyebrow: "03 — Materials",
      title: "The palette",
      body: project.caseStudy.materials
    }, {
      eyebrow: "04 — Outcome",
      title: "The result",
      body: project.caseStudy.outcome
    }].map((s) => /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-4 text-accent", children: s.eyebrow }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl md:text-4xl mb-5 leading-tight", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg font-light leading-relaxed opacity-80", children: s.body })
    ] }) }, s.eyebrow)) }) }),
    project.gallery.length > 0 && /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-20 md:py-28 border-t border-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-10", children: "Gallery" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-6 md:gap-8", children: [
        project.gallery[0] && /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-8 hover-zoom aspect-[3/2]", children: /* @__PURE__ */ jsx("img", { src: project.gallery[0], alt: "", loading: "lazy", className: "w-full h-full object-cover" }) }),
        project.gallery[1] && /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4 hover-zoom aspect-[3/4]", children: /* @__PURE__ */ jsx("img", { src: project.gallery[1], alt: "", loading: "lazy", className: "w-full h-full object-cover" }) }),
        project.gallery[2] && /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6 md:col-start-4 hover-zoom aspect-[4/3]", children: /* @__PURE__ */ jsx("img", { src: project.gallery[2], alt: "", loading: "lazy", className: "w-full h-full object-cover" }) })
      ] })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Related works" }),
        /* @__PURE__ */ jsx(Link, { to: "/projects", className: "eyebrow border-b border-foreground/15 pb-1 hover:text-accent", children: "All Projects →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10", children: related.map((r) => /* @__PURE__ */ jsxs(Link, { to: "/projects/$slug", params: {
        slug: r.slug
      }, className: "group", children: [
        /* @__PURE__ */ jsx("div", { className: "hover-zoom aspect-[4/5]", children: /* @__PURE__ */ jsx("img", { src: r.cover, alt: r.title, loading: "lazy", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-serif text-xl group-hover:text-accent transition-colors", children: r.title }),
        /* @__PURE__ */ jsx("p", { className: "eyebrow opacity-50 mt-2", children: r.location })
      ] }, r.slug)) })
    ] }) })
  ] });
}
export {
  ProjectDetail as component
};
