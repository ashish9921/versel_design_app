import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { d as blogPosts } from "./router-Bi_HEl3Z.js";
import "@tanstack/react-query";
import "framer-motion";
import "@supabase/supabase-js";
function BlogIndex() {
  const [featured, ...rest] = blogPosts;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-6", children: "Blog" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight max-w-5xl", children: [
        "Notes from",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "the studio" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 pb-20 md:pb-28 border-t border-foreground/10 pt-12 md:pt-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto", children: /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
      slug: featured.slug
    }, className: "group grid grid-cols-12 gap-8 md:gap-12 items-end", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-7 hover-zoom aspect-[4/3]", children: /* @__PURE__ */ jsx("img", { src: featured.cover, alt: featured.title, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "eyebrow opacity-50 mb-4 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-accent", children: featured.category }),
          /* @__PURE__ */ jsx("span", { children: featured.date }),
          /* @__PURE__ */ jsx("span", { children: featured.readTime })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight group-hover:text-accent transition-colors", children: featured.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg font-light opacity-75 leading-relaxed", children: featured.excerpt }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 eyebrow border-b border-foreground/20 pb-1 inline-block group-hover:border-accent group-hover:text-accent transition-colors", children: "Read article →" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 pb-24 border-t border-foreground/10 pt-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12", children: rest.map((post) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
      slug: post.slug
    }, className: "group", children: [
      /* @__PURE__ */ jsx("div", { className: "hover-zoom aspect-[4/5] mb-5", children: /* @__PURE__ */ jsx("img", { src: post.cover, alt: post.title, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { className: "eyebrow opacity-50 mb-3 flex gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: post.category }),
        /* @__PURE__ */ jsx("span", { children: post.readTime })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl leading-snug group-hover:text-accent transition-colors", children: post.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-light opacity-65 leading-relaxed", children: post.excerpt })
    ] }, post.slug)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-6", children: "Newsletter" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-tight mb-6", children: [
        "Slow letters,",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "four times a year" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg font-light opacity-75 leading-relaxed mb-10", children: "New essays, site notes, and completed projects — delivered quietly, roughly once a season." }),
      submitted ? /* @__PURE__ */ jsx("p", { className: "font-serif italic text-xl text-accent", children: "Thank you. You'll hear from us soon." }) : /* @__PURE__ */ jsxs("form", { onSubmit: onSubscribe, className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [
        /* @__PURE__ */ jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "your@email.com", className: "flex-1 bg-transparent border-b border-foreground/30 py-3 px-1 text-base focus:outline-none focus:border-accent transition-colors" }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "eyebrow border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-all", children: "Subscribe" })
      ] })
    ] }) })
  ] });
}
export {
  BlogIndex as component
};
