"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { featuredTestimonials } from "@/lib/testimonials";

const AUTOPLAY_MS = 6000;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = featuredTestimonials.length;

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count],
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, count]);

  const t = featuredTestimonials[index];

  return (
    <section className="relative overflow-hidden bg-pine-radial py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Histórias reais"
          title={
            <>
              Famílias que voltaram a{" "}
              <span className="text-gradient-gold">se ouvir</span>
            </>
          }
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence custom={dir} mode="wait">
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="glass glass-gold relative mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12"
              >
                <Quote className="mx-auto mb-6 h-9 w-9 text-gold/50" />
                <blockquote className="font-heading text-xl leading-relaxed text-cloud sm:text-2xl">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex flex-col items-center gap-3">
                  <Stars count={t.rating} />
                  <div>
                    <div className="font-semibold text-cloud">{t.name}</div>
                    <div className="text-sm text-mist">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Navegação */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1)}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/15 text-mist transition-colors hover:border-gold/40 hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {featuredTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-gold" : "w-1.5 bg-mist/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(index + 1)}
              aria-label="Próximo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/15 text-mist transition-colors hover:border-gold/40 hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
