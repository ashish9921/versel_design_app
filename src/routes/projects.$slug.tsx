import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { fetchProject, fetchRelated, type Project } from "@/lib/projects-data";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { RevealImage } from "@/components/site/RevealImage";

export const Route = createFileRoute("/projects/$slug")({
  loader: async ({ params }) => {
    const project = await fetchProject(params.slug);
    if (!project) throw notFound();
    const related = await fetchRelated(project.slug, project.category);
    return { project, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — STOA Architecture` },
        { name: "description", content: p.shortDesc },
        { property: "og:title", content: `${p.title} — STOA Architecture` },
        { property: "og:description", content: p.shortDesc },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, related } = Route.useLoaderData() as { project: Project; related: Project[] };

  return (
    <>
      {/* Hero image */}
      <section className="pt-24 md:pt-28">
        <div className="w-full h-[70vh] md:h-[88vh] relative overflow-hidden">
          <RevealImage
            src={project.cover}
            alt={project.title}
            className="w-full h-full"
            loading="eager"
          />
        </div>
      </section>

      {/* Before / After */}
      {project.before && (
        <section className="px-6 md:px-10 py-20 md:py-28 border-t border-foreground/10 bg-secondary/30">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="eyebrow opacity-50 mb-3 text-accent">Transformation</div>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                  From inheritance, <span className="italic">to intention</span>.
                </h2>
              </div>
              <p className="text-sm font-light opacity-60 max-w-xs">
                Drag the slider to compare the original condition with the finished work.
              </p>
            </div>
            <BeforeAfter
              before={project.before}
              after={project.cover}
              alt={project.title}
              className="aspect-[16/10]"
            />
          </div>
        </section>
      )}

      {/* Title block */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow opacity-50 mb-5">
              {project.category} / {project.year}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-80">
              {project.shortDesc}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 grid grid-cols-2 gap-y-8 gap-x-6 md:mt-4">
            {[
              ["Location", project.location],
              ["Area", project.area],
              ["Timeline", project.timeline],
              ["Style", project.style],
              ["Budget", project.budget],
              ["Year", String(project.year)],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="eyebrow opacity-40 mb-2">{k}</div>
                <div className="text-sm md:text-base font-light">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-y-20 md:gap-x-12">
          {[
            { eyebrow: "01 — Client Requirement", title: "The brief", body: project.caseStudy.clientRequirement },
            { eyebrow: "02 — Design Approach", title: "The response", body: project.caseStudy.designApproach },
            { eyebrow: "03 — Materials", title: "The palette", body: project.caseStudy.materials },
            { eyebrow: "04 — Outcome", title: "The result", body: project.caseStudy.outcome },
          ].map((s) => (
            <div key={s.eyebrow} className="col-span-12 md:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-12">
                <div className="eyebrow opacity-50 mb-4 text-accent">{s.eyebrow}</div>
                <h3 className="font-serif text-3xl md:text-4xl mb-5 leading-tight">{s.title}</h3>
                <p className="text-base md:text-lg font-light leading-relaxed opacity-80">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="px-6 md:px-10 py-20 md:py-28 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="eyebrow opacity-50 mb-10">Gallery</div>
            <div className="grid grid-cols-12 gap-6 md:gap-8">
              {project.gallery[0] && (
                <div className="col-span-12 md:col-span-8 hover-zoom aspect-[3/2]">
                  <img src={project.gallery[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              )}
              {project.gallery[1] && (
                <div className="col-span-12 md:col-span-4 hover-zoom aspect-[3/4]">
                  <img src={project.gallery[1]} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              )}
              {project.gallery[2] && (
                <div className="col-span-12 md:col-span-6 md:col-start-4 hover-zoom aspect-[4/3]">
                  <img src={project.gallery[2]} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-3xl md:text-4xl">Related works</h2>
              <Link to="/projects" className="eyebrow border-b border-foreground/15 pb-1 hover:text-accent">
                All Projects →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/projects/$slug"
                  params={{ slug: r.slug }}
                  className="group"
                >
                  <div className="hover-zoom aspect-[4/5]">
                    <img src={r.cover} alt={r.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl group-hover:text-accent transition-colors">
                    {r.title}
                  </h3>
                  <p className="eyebrow opacity-50 mt-2">{r.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
