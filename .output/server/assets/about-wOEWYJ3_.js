import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { s as studio, p as project1 } from "./router-Bi_HEl3Z.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "framer-motion";
import "@supabase/supabase-js";
const milestones = [{
  year: "2012",
  text: "Studio founded in Copenhagen by two architects sharing an attic."
}, {
  year: "2015",
  text: "First international award — Forest Residence, Norway."
}, {
  year: "2018",
  text: "Athens studio opens; Mediterranean residential portfolio begins."
}, {
  year: "2020",
  text: "Landscape practice formally established."
}, {
  year: "2022",
  text: "London studio opens. Team grows to 18."
}, {
  year: "2024",
  text: "Hundredth completed commission."
}];
const team = [{
  name: "Eleni Vakirtzi",
  role: "Founding Partner",
  bio: "Architectural training at the Royal Danish Academy. Twenty years in residential and cultural work."
}, {
  name: "Søren Aalborg",
  role: "Founding Partner",
  bio: "Background in landscape and urbanism. Leads the studio's master planning commissions."
}, {
  name: "Mira Tanaka",
  role: "Head of Interiors",
  bio: "Previously with Vincent Van Duysen; joined STOA in 2019 to lead interior commissions."
}, {
  name: "Lars Møller",
  role: "Senior Architect",
  bio: "Material specialist. Curates the studio's growing library of regional craft samples."
}];
const awards = [["2024", "AR House Award — Alpine Concrete Retreat"], ["2023", "Wallpaper* Design Awards — Best Interior, Gilded Pavilion"], ["2022", "Dezeen Awards — Landscape Project of the Year"], ["2021", "RIBA International Award — Warm Oak Headquarters"], ["2019", "Mies van der Rohe Emerging Architect Nomination"]];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-6 reveal", children: "The Practice" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight reveal reveal-delay-1 max-w-5xl", children: [
        "A studio of ",
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "reduction" }),
        ",",
        /* @__PURE__ */ jsx("br", {}),
        "of material, of light."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-16 md:py-24 border-t border-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-5", children: /* @__PURE__ */ jsx("div", { className: "hover-zoom aspect-[4/5]", children: /* @__PURE__ */ jsx("img", { src: studio, alt: "STOA studio", loading: "lazy", className: "w-full h-full object-cover" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-6 md:col-start-7 space-y-7 text-base md:text-lg font-light leading-relaxed opacity-85", children: [
        /* @__PURE__ */ jsx("p", { className: "font-serif text-2xl md:text-3xl italic text-foreground leading-snug", children: "We do not chase style. We chase permanence." }),
        /* @__PURE__ */ jsx("p", { children: "STOA was founded in 2012 on a single belief: that architecture, at its best, is a quiet act. We design buildings, interiors, and landscapes that ask less attention from their inhabitants than they give back over years of use." }),
        /* @__PURE__ */ jsx("p", { children: "Our method is slow on purpose. Every project begins with months of site observation — how light enters, how the wind arrives, how people move through. Only then do we begin to draw." }),
        /* @__PURE__ */ jsx("p", { children: "We work in oak, limestone, concrete, brass, lime plaster, and wool. We avoid the cosmetic. We trust the patina of time." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-end mb-16", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3", children: "Milestones" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: "Twelve years." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-y-10 md:gap-x-12", children: milestones.map((m, i) => /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-6 flex gap-6 md:gap-10 border-t border-foreground/10 pt-6", children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif text-3xl md:text-4xl italic text-accent shrink-0 w-24", children: m.year }),
        /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg font-light leading-relaxed opacity-80 pt-2", children: m.text })
      ] }, m.year)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3", children: "The Studio" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl mb-16", children: "People." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12", children: team.map((p) => /* @__PURE__ */ jsxs("div", { className: "group", children: [
        /* @__PURE__ */ jsx("div", { className: "hover-zoom aspect-[3/4] bg-muted mb-5 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: project1, alt: p.name, loading: "lazy", className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "eyebrow opacity-50 mt-1.5 text-accent", children: p.role }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-light leading-relaxed opacity-70 mt-4", children: p.bio })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-4", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3", children: "Recognition" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-5xl leading-tight", children: [
          "Selected",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "awards" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-7 md:col-start-6", children: /* @__PURE__ */ jsx("ul", { children: awards.map(([year, title]) => /* @__PURE__ */ jsxs("li", { className: "flex gap-8 md:gap-16 py-6 border-t border-foreground/10 first:border-t-0", children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif text-xl md:text-2xl italic text-accent shrink-0 w-16", children: year }),
        /* @__PURE__ */ jsx("span", { className: "text-base md:text-lg font-light leading-snug", children: title })
      ] }, title)) }) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
