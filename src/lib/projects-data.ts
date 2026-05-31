import { supabase } from "@/integrations/supabase/client";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Landscape";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  area: string;
  timeline: string;
  style: string;
  budget: string;
  cover: string;
  before?: string;
  shortDesc: string;
  featured: boolean;
  caseStudy: {
    clientRequirement: string;
    designApproach: string;
    materials: string;
    outcome: string;
  };
  gallery: string[];
}

export const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Landscape",
];

type Row = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  location: string | null;
  year: string | null;
  area: string | null;
  timeline: string | null;
  style: string | null;
  budget: string | null;
  summary: string | null;
  cover_image_url: string | null;
  before_image_url: string | null;
  featured: boolean;
  cs_client_requirement: string | null;
  cs_design_approach: string | null;
  cs_materials: string | null;
  cs_outcome: string | null;
};

function mapRow(r: Row, gallery: string[]): Project {
  return {
    slug: r.slug,
    title: r.title,
    category: (r.category ?? "Residential") as ProjectCategory,
    location: r.location ?? "",
    year: r.year ?? "",
    area: r.area ?? "",
    timeline: r.timeline ?? "",
    style: r.style ?? "",
    budget: r.budget ?? "",
    cover: r.cover_image_url ?? "",
    before: r.before_image_url ?? undefined,
    shortDesc: r.summary ?? "",
    featured: r.featured,
    caseStudy: {
      clientRequirement: r.cs_client_requirement ?? "",
      designApproach: r.cs_design_approach ?? "",
      materials: r.cs_materials ?? "",
      outcome: r.cs_outcome ?? "",
    },
    gallery: gallery.length > 0 ? gallery : r.cover_image_url ? [r.cover_image_url, r.cover_image_url, r.cover_image_url] : [],
  };
}

export async function fetchProjects(): Promise<Project[]> {
  const { data: rows, error } = await supabase
    .from("projects")
    .select(
      "id, slug, title, category, location, year, area, timeline, style, budget, summary, cover_image_url, before_image_url, featured, cs_client_requirement, cs_design_approach, cs_materials, cs_outcome, sort_order, published",
    )
    .eq("published", true)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  if (!rows || rows.length === 0) return [];

  const ids = rows.map((r) => r.id);
  const { data: imgs, error: ierr } = await supabase
    .from("project_images")
    .select("project_id, image_url, sort_order")
    .in("project_id", ids)
    .order("sort_order", { ascending: true });
  if (ierr) throw ierr;

  const byProject = new Map<string, string[]>();
  (imgs ?? []).forEach((i) => {
    const arr = byProject.get(i.project_id) ?? [];
    arr.push(i.image_url);
    byProject.set(i.project_id, arr);
  });

  return rows.map((r) => mapRow(r as Row, byProject.get(r.id) ?? []));
}

export async function fetchProject(slug: string): Promise<Project | null> {
  const { data: row, error } = await supabase
    .from("projects")
    .select(
      "id, slug, title, category, location, year, area, timeline, style, budget, summary, cover_image_url, before_image_url, featured, cs_client_requirement, cs_design_approach, cs_materials, cs_outcome",
    )
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw error;
  if (!row) return null;

  const { data: imgs } = await supabase
    .from("project_images")
    .select("image_url, sort_order")
    .eq("project_id", row.id)
    .order("sort_order", { ascending: true });

  return mapRow(row as Row, (imgs ?? []).map((i) => i.image_url));
}

export async function fetchRelated(slug: string, category: ProjectCategory): Promise<Project[]> {
  const all = await fetchProjects();
  return all.filter((p) => p.slug !== slug && p.category === category).slice(0, 3);
}
