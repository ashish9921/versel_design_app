import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-28 md:bottom-32 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {open && (
        <div className="flex flex-col gap-2 items-end">
          <a
            href="https://wa.me/00000000000"
            target="_blank"
            rel="noreferrer"
            className="bg-background/95 backdrop-blur-md border border-foreground/10 px-4 py-3 text-xs tracking-widest uppercase shadow-lg hover:text-accent transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="tel:+000000000"
            className="bg-background/95 backdrop-blur-md border border-foreground/10 px-4 py-3 text-xs tracking-widest uppercase shadow-lg hover:text-accent transition-colors"
          >
            Call Studio
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-foreground text-background px-4 py-3 text-xs tracking-widest uppercase shadow-lg hover:bg-accent transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open contact menu"
        className="size-14 rounded-full bg-foreground text-background shadow-xl hover:bg-accent hover:scale-105 transition-all duration-300 flex items-center justify-center"
      >
        {open ? (
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <span className="font-serif text-[15px] tracking-wide">Talk</span>
        )}
      </button>
    </div>
  );
}
