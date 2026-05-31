import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/" as const, label: "Work" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "Practice" },
  { to: "/blog" as const, label: "Blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none">
      <div className="max-w-[860px] mx-auto pointer-events-auto">
        <div
          className={`glass-pill flex items-center justify-between gap-4 transition-all duration-500 ${
            scrolled ? "py-2 pl-4 pr-2" : "py-2.5 pl-5 pr-2.5"
          }`}
        >
          <Link
            to="/"
            className="font-serif text-xl md:text-[22px] tracking-tight leading-none shrink-0"
            data-cursor="hover"
          >
            STOA<span className="text-accent">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 eyebrow">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-accent transition-colors duration-300"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
                data-cursor="hover"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center eyebrow px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-accent hover:text-foreground transition-colors"
            data-cursor="hover"
          >
            Contact
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            <span
              className={`block w-5 h-px bg-foreground transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-3 glass-pill rounded-3xl px-6 py-6 flex flex-col gap-5 eyebrow animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="hover:text-accent"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 eyebrow px-5 py-3 rounded-full bg-foreground text-background text-center"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
