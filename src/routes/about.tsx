import { createFileRoute } from "@tanstack/react-router";
import studio from "@/assets/studio.jpg";
import project1 from "@/assets/project-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Practice — STOA Architecture" },
      {
        name: "description",
        content:
          "STOA is a multi-disciplinary architecture and interior design studio rooted in material honesty, light, and quiet permanence.",
      },
      { property: "og:title", content: "Practice — STOA Architecture" },
      {
        property: "og:description",
        content:
          "STOA is a multi-disciplinary architecture and interior design studio rooted in material honesty, light, and quiet permanence.",
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2012", text: "Studio founded in Copenhagen by two architects sharing an attic." },
  { year: "2015", text: "First international award — Forest Residence, Norway." },
  { year: "2018", text: "Athens studio opens; Mediterranean residential portfolio begins." },
  { year: "2020", text: "Landscape practice formally established." },
  { year: "2022", text: "London studio opens. Team grows to 18." },
  { year: "2024", text: "Hundredth completed commission." },
];

const team = [
  {
    name: "Eleni Vakirtzi",
    role: "Founding Partner",
    bio: "Architectural training at the Royal Danish Academy. Twenty years in residential and cultural work.",
  },
  {
    name: "Søren Aalborg",
    role: "Founding Partner",
    bio: "Background in landscape and urbanism. Leads the studio's master planning commissions.",
  },
  {
    name: "Mira Tanaka",
    role: "Head of Interiors",
    bio: "Previously with Vincent Van Duysen; joined STOA in 2019 to lead interior commissions.",
  },
  {
    name: "Lars Møller",
    role: "Senior Architect",
    bio: "Material specialist. Curates the studio's growing library of regional craft samples.",
  },
];

const awards = [
  ["2024", "AR House Award — Alpine Concrete Retreat"],
  ["2023", "Wallpaper* Design Awards — Best Interior, Gilded Pavilion"],
  ["2022", "Dezeen Awards — Landscape Project of the Year"],
  ["2021", "RIBA International Award — Warm Oak Headquarters"],
  ["2019", "Mies van der Rohe Emerging Architect Nomination"],
];

function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="eyebrow opacity-50 mb-6 reveal">The Practice</div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight reveal reveal-delay-1 max-w-5xl">
            A studio of <span className="italic text-accent">reduction</span>,
            <br />
            of material, of light.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 md:px-10 py-16 md:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="hover-zoom aspect-[4/5]">
              <img
                src={studio}
                alt="STOA studio"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-7 text-base md:text-lg font-light leading-relaxed opacity-85">
            <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug">
              We do not chase style. We chase permanence.
            </p>
            <p>
              STOA was founded in 2012 on a single belief: that architecture, at its best,
              is a quiet act. We design buildings, interiors, and landscapes that ask less
              attention from their inhabitants than they give back over years of use.
            </p>
            <p>
              Our method is slow on purpose. Every project begins with months of site
              observation — how light enters, how the wind arrives, how people move
              through. Only then do we begin to draw.
            </p>
            <p>
              We work in oak, limestone, concrete, brass, lime plaster, and wool. We avoid
              the cosmetic. We trust the patina of time.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="eyebrow opacity-50 mb-3">Milestones</div>
              <h2 className="font-serif text-4xl md:text-5xl">Twelve years.</h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12">
            {milestones.map((m, i) => (
              <div key={m.year} className="col-span-12 md:col-span-6 flex gap-6 md:gap-10 border-t border-foreground/10 pt-6">
                <span className="font-serif text-3xl md:text-4xl italic text-accent shrink-0 w-24">
                  {m.year}
                </span>
                <p className="text-base md:text-lg font-light leading-relaxed opacity-80 pt-2">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="eyebrow opacity-50 mb-3">The Studio</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">People.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {team.map((p) => (
              <div key={p.name} className="group">
                <div className="hover-zoom aspect-[3/4] bg-muted mb-5 overflow-hidden">
                  <img
                    src={project1}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="font-serif text-xl">{p.name}</h3>
                <p className="eyebrow opacity-50 mt-1.5 text-accent">{p.role}</p>
                <p className="text-sm font-light leading-relaxed opacity-70 mt-4">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow opacity-50 mb-3">Recognition</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Selected
              <br />
              <span className="italic text-accent">awards</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ul>
              {awards.map(([year, title]) => (
                <li
                  key={title}
                  className="flex gap-8 md:gap-16 py-6 border-t border-foreground/10 first:border-t-0"
                >
                  <span className="font-serif text-xl md:text-2xl italic text-accent shrink-0 w-16">
                    {year}
                  </span>
                  <span className="text-base md:text-lg font-light leading-snug">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
