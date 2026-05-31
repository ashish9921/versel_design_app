import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { c as Route, d as blogPosts } from "./router-Bi_HEl3Z.js";
import "@tanstack/react-query";
import "react";
import "framer-motion";
import "@supabase/supabase-js";
function BlogPostPage() {
  const {
    post
  } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsx("section", { className: "pt-36 md:pt-44 pb-12 md:pb-16 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "eyebrow opacity-50 mb-6 flex justify-center flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-accent", children: post.category }),
          /* @__PURE__ */ jsx("span", { children: post.date }),
          /* @__PURE__ */ jsx("span", { children: post.readTime })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight", children: post.title }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 eyebrow opacity-60", children: [
          "By ",
          post.author
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 mb-16 md:mb-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: post.cover, alt: post.title, className: "w-full h-full object-cover" }) }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 pb-16 md:pb-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto space-y-7 text-lg md:text-xl font-light leading-relaxed opacity-85", children: post.content.map((p, i) => /* @__PURE__ */ jsx("p", { className: i === 0 ? "font-serif text-2xl md:text-3xl italic text-foreground leading-snug" : "", children: p }, i)) }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 pb-24 md:pb-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto flex flex-wrap gap-3 border-t border-foreground/10 pt-8", children: post.tags.map((t) => /* @__PURE__ */ jsxs("span", { className: "eyebrow border border-foreground/20 px-3 py-1.5 opacity-70", children: [
        "#",
        t
      ] }, t)) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-20 md:py-24 border-t border-foreground/10 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Related reading" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "eyebrow opacity-60 hover:opacity-100 hover:text-accent", children: "All articles →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10", children: related.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: p.slug
      }, className: "group", children: [
        /* @__PURE__ */ jsx("div", { className: "hover-zoom aspect-[4/3] mb-5", children: /* @__PURE__ */ jsx("img", { src: p.cover, alt: p.title, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-2 text-accent", children: p.category }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl md:text-2xl leading-snug group-hover:text-accent transition-colors", children: p.title })
      ] }, p.slug)) })
    ] }) })
  ] });
}
export {
  BlogPostPage as component
};
