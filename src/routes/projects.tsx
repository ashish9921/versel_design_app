import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, fetchProjects, type Project, type ProjectCategory } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  loader: () => fetchProjects(),
  head: () => ({
    meta: [
      { title: "Projects — STOA Architecture" },
      {
        name: "description",
        content:
          "Selected residential, commercial, interior and landscape projects by STOA — a multi-disciplinary architecture and interior design studio.",
      },
      { property: "og:title", content: "Projects — STOA Architecture" },
      {
        property: "og:description",
        content:
          "Selected residential, commercial, interior and landscape projects by STOA.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const projects = Route.useLoaderData() as Project[];
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  return (
    <>
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="eyebrow opacity-50 mb-6 reveal">Index 01 — {projects.length}</div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight reveal reveal-delay-1 max-w-4xl">
            Selected
            <br />
            <span className="italic text-accent">works</span> across disciplines.
          </h1>
        </div>
      </section>

      {/* Filter bar */}
      <section className="px-6 md:px-10 border-y border-foreground/10 sticky top-[68px] md:top-[78px] bg-background/85 backdrop-blur-md z-20">
        <div className="max-w-[1400px] mx-auto flex gap-6 md:gap-10 py-5 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`eyebrow whitespace-nowrap transition-colors ${
                filter === c ? "text-accent" : "opacity-60 hover:opacity-100"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto eyebrow opacity-40 hidden md:block">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-x-8 gap-y-20 md:gap-y-28">
          {visible.map((p, i) => {
            const layouts = [
              "col-span-12 md:col-span-7",
              "col-span-12 md:col-span-4 md:col-start-9 md:mt-24",
              "col-span-12 md:col-span-5 md:col-start-2",
              "col-span-12 md:col-span-6 md:col-start-7 md:mt-12",
              "col-span-12 md:col-span-5",
              "col-span-12 md:col-span-5 md:col-start-7",
            ];
            return (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className={`${layouts[i % layouts.length]} group cursor-pointer`}
              >
                <div className="flex justify-between items-start mb-4 eyebrow opacity-50">
                  <span>{String(i + 1).padStart(2, "0")} / {p.category}</span>
                  <span>{p.year}</span>
                </div>
                <div className="hover-zoom aspect-[4/5] w-full">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start border-b border-foreground/10 pb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm font-light opacity-60 mt-1">{p.location}</p>
                  </div>
                  <span className="text-xl font-serif group-hover:text-accent group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {visible.length === 0 && (
          <div className="max-w-[1400px] mx-auto py-32 text-center">
            <p className="font-serif text-2xl italic opacity-60">
              No projects in this category yet.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
