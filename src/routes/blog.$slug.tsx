import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Blog — STOA" }] };
    return {
      meta: [
        { title: `${p.title} — STOA` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.cover },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.cover },
        // Pinterest-optimised
        { property: "pinterest:image", content: p.cover },
        { property: "pinterest:description", content: p.excerpt },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <h1 className="font-serif text-4xl">Article not found</h1>
      <Link to="/blog" className="eyebrow text-accent border-b border-accent">
        Back to Blog
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-serif text-4xl">Something went quiet</h1>
      <p className="opacity-60">{error.message}</p>
      <Link to="/blog" className="eyebrow text-accent border-b border-accent">
        Back to Blog
      </Link>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow opacity-50 mb-6 flex justify-center flex-wrap gap-4">
              <span className="text-accent">{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-serif text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight">
              {post.title}
            </h1>
            <p className="mt-6 eyebrow opacity-60">By {post.author}</p>
          </div>
        </section>

        <section className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-[1200px] mx-auto aspect-[16/9] overflow-hidden">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="px-6 md:px-10 pb-16 md:pb-20">
          <div className="max-w-2xl mx-auto space-y-7 text-lg md:text-xl font-light leading-relaxed opacity-85">
            {post.content.map((p: string, i: number) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-serif text-2xl md:text-3xl italic text-foreground leading-snug"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section className="px-6 md:px-10 pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto flex flex-wrap gap-3 border-t border-foreground/10 pt-8">
            {post.tags.map((t: string) => (
              <span
                key={t}
                className="eyebrow border border-foreground/20 px-3 py-1.5 opacity-70"
              >
                #{t}
              </span>
            ))}
          </div>
        </section>
      </article>

      {/* Related */}
      <section className="px-6 md:px-10 py-20 md:py-24 border-t border-foreground/10 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Related reading</h2>
            <Link to="/blog" className="eyebrow opacity-60 hover:opacity-100 hover:text-accent">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group"
              >
                <div className="hover-zoom aspect-[4/3] mb-5">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="eyebrow opacity-50 mb-2 text-accent">{p.category}</div>
                <h3 className="font-serif text-xl md:text-2xl leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
