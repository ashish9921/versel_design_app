import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — STOA Architecture" },
      {
        name: "description",
        content:
          "Begin a dialogue with STOA. Studio enquiries, consultation requests, and partnership opportunities.",
      },
      { property: "og:title", content: "Contact — STOA Architecture" },
      {
        property: "og:description",
        content: "Begin a dialogue with STOA — architecture and interior design studio.",
      },
    ],
  }),
  component: ContactPage,
});

const projectTypes = ["Residential", "Commercial", "Interior", "Landscape", "Other"];
const budgets = ["Under €250k", "€250k — €750k", "€750k — €2M", "€2M+", "Prefer not to say"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    budget: budgets[0],
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only for now — wire to Cloud DB in next pass
    console.log("Lead:", form);
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-36 md:pt-44 pb-12 md:pb-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="eyebrow opacity-50 mb-6 reveal">Begin a Dialogue</div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.95] tracking-tight reveal reveal-delay-1 max-w-4xl">
            Tell us about
            <br />
            your <span className="italic text-accent">place</span>.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32 border-t border-foreground/10 pt-16 md:pt-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12 md:gap-20">
          {/* Form */}
          <div className="col-span-12 md:col-span-7">
            {submitted ? (
              <div className="border border-accent/40 bg-accent/5 p-10 md:p-14">
                <div className="eyebrow opacity-50 mb-4 text-accent">Received</div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed opacity-80">
                  We&apos;ll respond personally within two working days. Most projects begin
                  with a long conversation before any drawings.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <Field
                  label="Name"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Select
                    label="Project Type"
                    value={form.projectType}
                    options={projectTypes}
                    onChange={(v) => setForm({ ...form, projectType: v })}
                  />
                  <Select
                    label="Budget Range"
                    value={form.budget}
                    options={budgets}
                    onChange={(v) => setForm({ ...form, budget: v })}
                  />
                </div>
                <div>
                  <label className="eyebrow opacity-50 block mb-3">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about the site, the brief, the dream…"
                    className="w-full bg-transparent border-b border-foreground/15 pb-3 focus:border-accent focus:outline-none font-light text-base resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-foreground text-background eyebrow hover:bg-accent transition-colors"
                >
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>

          {/* Studio info */}
          <aside className="col-span-12 md:col-span-4 md:col-start-9 space-y-12">
            <div>
              <div className="eyebrow opacity-50 mb-4">London</div>
              <p className="font-light text-base leading-relaxed">
                14 Vyner Street
                <br />
                London E2 9DG
                <br />
                United Kingdom
              </p>
            </div>
            <div>
              <div className="eyebrow opacity-50 mb-4">Copenhagen</div>
              <p className="font-light text-base leading-relaxed">
                Refshalevej 153
                <br />
                1432 København K
                <br />
                Denmark
              </p>
            </div>
            <div className="space-y-3">
              <div className="eyebrow opacity-50 mb-3">Direct</div>
              <a
                href="mailto:studio@stoa.design"
                className="block hover:text-accent transition-colors"
              >
                studio@stoa.design
              </a>
              <a
                href="tel:+4500000000"
                className="block hover:text-accent transition-colors"
              >
                +45 00 00 00 00
              </a>
              <a
                href="https://wa.me/00000000000"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-accent transition-colors"
              >
                WhatsApp →
              </a>
            </div>
            <div>
              <div className="eyebrow opacity-50 mb-4">Hours</div>
              <p className="font-light text-base leading-relaxed opacity-80">
                Monday — Friday
                <br />
                09:00 — 18:00 CET
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] w-full bg-secondary border border-foreground/10 grid place-items-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative text-center">
              <div className="eyebrow opacity-60 mb-2">Studio Locations</div>
              <p className="font-serif italic text-2xl">London · Copenhagen · Athens</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="eyebrow opacity-50 block mb-3">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-foreground/15 pb-3 focus:border-accent focus:outline-none font-light text-base transition-colors"
      />
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="eyebrow opacity-50 block mb-3">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-foreground/15 pb-3 focus:border-accent focus:outline-none font-light text-base appearance-none cursor-pointer transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
