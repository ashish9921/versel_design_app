import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl", children: "Something went quiet" }),
  /* @__PURE__ */ jsx("p", { className: "opacity-60", children: error.message }),
  /* @__PURE__ */ jsx(Link, { to: "/blog", className: "eyebrow text-accent border-b border-accent", children: "Back to Blog" })
] });
export {
  SplitErrorComponent as errorComponent
};
