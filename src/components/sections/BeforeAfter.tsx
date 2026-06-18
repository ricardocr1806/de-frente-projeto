"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const before = [
  "Silêncio e tensão no ar",
  "Conversas que viram discussão",
  "Medo de tocar no assunto",
  "Distância crescendo a cada dia",
  "Sensação de impotência",
];

const after = [
  "Diálogo aberto e respeitoso",
  "Conversas que aproximam",
  "Coragem para se posicionar",
  "Reconexão verdadeira",
  "Clareza e direção para agir",
];

const sideVariants = {
  hidden: (dir: number) => ({ opacity: 0, x: dir * 60, filter: "blur(8px)" }),
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function BeforeAfter() {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Antes e depois"
          title={
            <>
              Duas casas. <span className="text-gradient-gold">Uma decisão</span> de
              distância.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-3xl border border-mist/10 lg:grid-cols-2">
          {/* ANTES */}
          <motion.div
            custom={-1}
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative p-9 lg:p-12"
            style={{
              background:
                "linear-gradient(160deg, rgba(60,12,12,0.55), rgba(20,6,6,0.4))",
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-red-300/70">
              Hoje
            </span>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-cloud sm:text-3xl">
              Evitando de frente
            </h3>
            <ul className="mt-8 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3 text-mist">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-300">
                    <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DEPOIS */}
          <motion.div
            custom={1}
            variants={sideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative p-9 lg:p-12"
            style={{
              background:
                "linear-gradient(160deg, rgba(21,77,63,0.6), rgba(7,42,34,0.45))",
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
              Depois do encontro
            </span>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-cloud sm:text-3xl">
              Encarando de frente
            </h3>
            <ul className="mt-8 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3 text-cloud">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-pine-600/30 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
