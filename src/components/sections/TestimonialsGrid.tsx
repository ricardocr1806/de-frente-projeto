"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { gridTestimonials } from "@/lib/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function TestimonialsGrid() {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Mais histórias"
          title={
            <>
              Quando o diálogo volta,{" "}
              <span className="text-gradient-gold">a família respira</span>
            </>
          }
        />

        <StaggerGroup
          amount={0.1}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gridTestimonials.map((t) => (
            <StaggerItem
              key={t.name}
              className="group flex h-full flex-col rounded-2xl border border-mist/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30"
            >
              <Stars count={t.rating} />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-mist">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-mist/10 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-800/50 font-heading text-sm font-semibold text-gold-soft ring-1 ring-inset ring-gold/20">
                  {initials(t.name)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-cloud">
                    {t.name}
                  </div>
                  <div className="text-xs text-mist">{t.role}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
