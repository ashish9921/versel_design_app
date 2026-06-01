import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
const projectTypes = ["Residential", "Commercial", "Interior", "Landscape", "Other"];
const budgets = ["Under €250k", "€250k — €750k", "€750k — €2M", "€2M+", "Prefer not to say"];
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    budget: budgets[0],
    message: ""
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Lead:", form);
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-36 md:pt-44 pb-12 md:pb-20 px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-6 reveal", children: "Begin a Dialogue" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight reveal reveal-delay-1 max-w-4xl", children: [
        "Tell us about",
        /* @__PURE__ */ jsx("br", {}),
        "your ",
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "place" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 pb-24 md:pb-32 border-t border-foreground/10 pt-16 md:pt-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-12 md:gap-20", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-7", children: submitted ? /* @__PURE__ */ jsxs("div", { className: "border border-accent/40 bg-accent/5 p-10 md:p-14", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-4 text-accent", children: "Received" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-3xl md:text-4xl mb-4 leading-tight", children: [
          "Thank you, ",
          form.name.split(" ")[0] || "friend",
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg font-light leading-relaxed opacity-80", children: "We'll respond personally within two working days. Most projects begin with a long conversation before any drawings." })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
        /* @__PURE__ */ jsx(Field, { label: "Name", required: true, value: form.name, onChange: (v) => setForm({
          ...form,
          name: v
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(Field, { label: "Email", type: "email", required: true, value: form.email, onChange: (v) => setForm({
            ...form,
            email: v
          }) }),
          /* @__PURE__ */ jsx(Field, { label: "Phone", type: "tel", value: form.phone, onChange: (v) => setForm({
            ...form,
            phone: v
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(Select, { label: "Project Type", value: form.projectType, options: projectTypes, onChange: (v) => setForm({
            ...form,
            projectType: v
          }) }),
          /* @__PURE__ */ jsx(Select, { label: "Budget Range", value: form.budget, options: budgets, onChange: (v) => setForm({
            ...form,
            budget: v
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "eyebrow opacity-50 block mb-3", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { required: true, rows: 6, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), placeholder: "Tell us about the site, the brief, the dream…", className: "w-full bg-transparent border-b border-foreground/15 pb-3 focus:border-accent focus:outline-none font-light text-base resize-none transition-colors" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "px-8 py-4 bg-foreground text-background eyebrow hover:bg-accent transition-colors", children: "Send Enquiry →" })
      ] }) }),
      /* @__PURE__ */ jsxs("aside", { className: "col-span-12 md:col-span-4 md:col-start-9 space-y-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-4", children: "London" }),
          /* @__PURE__ */ jsxs("p", { className: "font-light text-base leading-relaxed", children: [
            "14 Vyner Street",
            /* @__PURE__ */ jsx("br", {}),
            "London E2 9DG",
            /* @__PURE__ */ jsx("br", {}),
            "United Kingdom"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-4", children: "Copenhagen" }),
          /* @__PURE__ */ jsxs("p", { className: "font-light text-base leading-relaxed", children: [
            "Refshalevej 153",
            /* @__PURE__ */ jsx("br", {}),
            "1432 København K",
            /* @__PURE__ */ jsx("br", {}),
            "Denmark"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-3", children: "Direct" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:studio@stoa.design", className: "block hover:text-accent transition-colors", children: "studio@stoa.design" }),
          /* @__PURE__ */ jsx("a", { href: "tel:+4500000000", className: "block hover:text-accent transition-colors", children: "+45 00 00 00 00" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/00000000000", target: "_blank", rel: "noreferrer", className: "block hover:text-accent transition-colors", children: "WhatsApp →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-50 mb-4", children: "Hours" }),
          /* @__PURE__ */ jsxs("p", { className: "font-light text-base leading-relaxed opacity-80", children: [
            "Monday — Friday",
            /* @__PURE__ */ jsx("br", {}),
            "09:00 — 18:00 CET"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-10 pb-24 md:pb-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[21/9] w-full bg-secondary border border-foreground/10 grid place-items-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-50", style: {
        backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-60 mb-2", children: "Studio Locations" }),
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-2xl", children: "London · Copenhagen · Athens" })
      ] })
    ] }) }) })
  ] });
}
function Field({
  label,
  type = "text",
  required,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "eyebrow opacity-50 block mb-3", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("input", { type, required, value, onChange: (e) => onChange(e.target.value), className: "w-full bg-transparent border-b border-foreground/15 pb-3 focus:border-accent focus:outline-none font-light text-base transition-colors" })
  ] });
}
function Select({
  label,
  value,
  options,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "eyebrow opacity-50 block mb-3", children: label }),
    /* @__PURE__ */ jsx("select", { value, onChange: (e) => onChange(e.target.value), className: "w-full bg-transparent border-b border-foreground/15 pb-3 focus:border-accent focus:outline-none font-light text-base appearance-none cursor-pointer transition-colors", children: options.map((o) => /* @__PURE__ */ jsx("option", { value: o, className: "bg-background", children: o }, o)) })
  ] });
}
export {
  ContactPage as component
};
