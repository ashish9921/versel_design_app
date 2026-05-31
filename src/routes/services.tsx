import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RevealImage } from "@/components/site/RevealImage";
import project2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — STOA Architecture" },
      {
        name: "description",
        content:
          "Architectural design, interior design, landscaping, building permissions and urban design services from STOA.",
      },
      { property: "og:title", content: "Services — STOA Architecture" },
      {
        property: "og:description",
        content:
          "Five disciplines, one studio. STOA's services from concept to completion.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    name: "Architectural Design",
    short: "New builds, additions, and considered renovations.",
    detail:
      "Feasibility studies, concept design, planning approvals, full construction documentation, and on-site supervision through to handover.",
  },
  {
    n: "02",
    name: "Interior Design",
    short: "Interior architecture grounded in light and material.",
    detail:
      "Spatial planning, material curation, custom joinery and furniture, art commissioning, and complete FF&E procurement.",
  },
  {
    n: "03",
    name: "Landscaping",
    short: "Gardens and courtyards that extend the architecture outward.",
    detail:
      "Site analysis, planting strategy, hardscape, water features, lighting design, and long-term stewardship plans.",
  },
  {
    n: "04",
    name: "Building Permissions",
    short: "Planning, permits, and regulatory approvals.",
    detail:
      "We manage the full approvals process — drawings, submissions, statutory consultations, and liaison with local authorities across three jurisdictions.",
  },
  {
    n: "05",
    name: "Urban Designing",
    short: "Long-horizon planning for campuses and estates.",
    detail:
      "Vision and programme, phasing, public realm strategy, sustainability framework, and design guidelines for multi-building sites.",
  },
];

const processSteps = [
  { n: "01", title: "Listen", text: "Conversations with the client and the brief in its rawest form." },
  { n: "02", title: "Observe", text: "Site visits across hours and seasons. Light, soil, neighbours." },
  { n: "03", title: "Draw", text: "Hand sketches and physical models. Materials chosen early." },
  { n: "04", title: "Refine", text: "Detail design and planning approvals, alongside craftspeople." },
  { n: "05", title: "Build", text: "Weekly site presence. Most details decided in actual light." },
  { n: "06", title: "Steward", text: "We return. Buildings settle. The conversation continues." },
];

const faqs = [
  {
    q: "How do you charge?",
    a: "We work on a percentage of construction cost for full architectural commissions, and on fixed fees for interiors and feasibility studies. Every engagement begins with a written proposal after the first site visit.",
  },
  {
    q: "What size of project do you take on?",
    a: "Residential commissions from 120 m² upward, and commercial or cultural projects without an upper limit. We are deliberately selective — usually six to eight new commissions per year.",
  },
  {
    q: "Where do you work?",
    a: "We are based in London, Copenhagen, and Athens, and we accept projects across Europe. International work is considered on a case-by-case basis.",
  },
  {
    q: "How long does a project take?",
    a: "From first meeting to completed building, most residential projects run 24 to 36 months. Interiors-only commissions are typically 8 to 14 months.",
  },
  {
    q: "Do you work with our existing builder or contractor?",
    a: "Yes. We frequently collaborate with builders already chosen by our clients, and we can also recommend trusted contractors from our network.",
  },
];

function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>("01");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow opacity-50 mb-6">What we do</div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight">
              Five disciplines,
              <br />
              one <span className="italic text-accent">studio</span>.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-base md:text-lg font-light opacity-75 leading-relaxed">
              Most commissions cross more than one of the practices below.
              They are drawn by one team, under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <RevealImage src={project2} alt="STOA work" className="aspect-[21/9] w-full" />
        </div>
      </section>

      {/* Services accordion */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <div className="eyebrow opacity-50 mb-12">Disciplines</div>
          <div>
            {services.map((s) => {
              const open = openService === s.n;
              return (
                <div key={s.n} className="border-t border-foreground/15 last:border-b">
                  <button
                    onClick={() => setOpenService(open ? null : s.n)}
                    className="w-full text-left py-8 md:py-10 flex gap-6 md:gap-10 items-baseline group"
                  >
                    <span className="font-serif text-xl md:text-2xl italic text-accent shrink-0 w-12">
                      {s.n}
                    </span>
                    <span className="font-serif text-3xl md:text-5xl flex-1 group-hover:text-accent transition-colors leading-tight">
                      {s.name}
                    </span>
                    <span className={`text-2xl md:text-3xl font-serif transition-transform duration-500 ${open ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${
                      open ? "max-h-96 opacity-100 pb-10" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-0 md:pl-[5.5rem] max-w-2xl space-y-4">
                      <p className="font-serif text-xl md:text-2xl italic opacity-85 leading-snug">
                        {s.short}
                      </p>
                      <p className="text-base md:text-lg font-light opacity-75 leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow opacity-50 mb-3">How we work</div>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                Six phases.
                <br />
                <span className="italic text-accent">Slow on purpose</span>.
              </h2>
            </div>
            <p className="max-w-sm text-base font-light opacity-75 leading-relaxed">
              Every commission moves through the same six phases. The first two
              are spent mostly without drawing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {processSteps.map((p) => (
              <div key={p.n} className="border-t border-foreground/15 pt-5">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-serif text-2xl italic text-accent">{p.n}</span>
                  <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
                </div>
                <p className="text-base font-light opacity-75 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow opacity-50 mb-3">Frequently asked</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Practical
              <br />
              <span className="italic text-accent">matters</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="border-t border-foreground/15 last:border-b">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full text-left py-6 flex justify-between items-center gap-6 group"
                  >
                    <span className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors">
                      {f.q}
                    </span>
                    <span className={`text-xl font-serif transition-transform duration-500 ${open ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      open ? "max-h-64 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-base font-light opacity-75 leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
