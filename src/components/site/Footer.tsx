import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-20 md:py-24 pb-44 md:pb-52 bg-background border-t border-foreground/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-md">
          <div className="text-3xl md:text-4xl font-serif leading-tight mb-8">
            Let&apos;s create
            <br />
            something <span className="italic text-accent">enduring</span>.
          </div>
          <a
            href="mailto:studio@stoa.design"
            className="text-lg md:text-xl hover:text-accent transition-colors border-b border-foreground/15 pb-1"
          >
            studio@stoa.design
          </a>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className="eyebrow opacity-40 mb-5">Studios</div>
            <ul className="text-sm space-y-2.5 font-light">
              <li>London</li>
              <li>Copenhagen</li>
              <li>Athens</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow opacity-40 mb-5">Studio</div>
            <ul className="text-sm space-y-2.5 font-light">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between gap-4 eyebrow opacity-40">
        <div>© {new Date().getFullYear()} STOA Architecture</div>
        <div className="flex gap-8">
          <Link to="/about" className="hover:opacity-80">
            Practice
          </Link>
          <Link to="/contact" className="hover:opacity-80">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
