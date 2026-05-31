import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { blogPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — STOA Architecture" },
      {
        name: "description",
        content:
          "Essays, site notes, and material studies from the STOA architecture and interior design studio.",
      },
      { property: "og:title", content: "Blog — STOA Architecture" },
      {
        property: "og:description",
        content:
          "Essays, site notes, and material studies from STOA.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = blogPosts;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to Lovable Cloud newsletter_subscribers table
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="eyebrow opacity-50 mb-6">Blog</div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight max-w-5xl">
            Notes from
            <br />
            <span className="italic text-accent">the studio</span>.
          </h1>
        </div>
      </section>

      {/* Featured banner */}
      <section className="px-6 md:px-10 pb-20 md:pb-28 border-t border-foreground/10 pt-12 md:pt-16">
        <div className="max-w-[1400px] mx-auto">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid grid-cols-12 gap-8 md:gap-12 items-end"
          >
            <div className="col-span-12 md:col-span-7 hover-zoom aspect-[4/3]">
              <img
                src={featured.cover}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="eyebrow opacity-50 mb-4 flex flex-wrap gap-4">
                <span className="text-accent">{featured.category}</span>
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="mt-6 text-base md:text-lg font-light opacity-75 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-8 eyebrow border-b border-foreground/20 pb-1 inline-block group-hover:border-accent group-hover:text-accent transition-colors">
                Read article →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3-column grid */}
      <section className="px-6 md:px-10 pb-24 border-t border-foreground/10 pt-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group"
            >
              <div className="hover-zoom aspect-[4/5] mb-5">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="eyebrow opacity-50 mb-3 flex gap-4">
                <span className="text-accent">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-sm font-light opacity-65 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <div className="eyebrow opacity-50 mb-6">Newsletter</div>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
            Slow letters,
            <br />
            <span className="italic text-accent">four times a year</span>.
          </h2>
          <p className="text-base md:text-lg font-light opacity-75 leading-relaxed mb-10">
            New essays, site notes, and completed projects — delivered quietly,
            roughly once a season.
          </p>
          {submitted ? (
            <p className="font-serif italic text-xl text-accent">
              Thank you. You'll hear from us soon.
            </p>
          ) : (
            <form
              onSubmit={onSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-foreground/30 py-3 px-1 text-base focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="eyebrow border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-all"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
