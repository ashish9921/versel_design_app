import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center gap-4", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl", children: "Article not found" }),
  /* @__PURE__ */ jsx(Link, { to: "/blog", className: "eyebrow text-accent border-b border-accent", children: "Back to Blog" })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
