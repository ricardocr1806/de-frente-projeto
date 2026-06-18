"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const steps = [
  {
    step: "01",
    title: "Não é só sobre o assunto",
    text: "O conflito raramente está no tema em si. Ele mora na forma como nos comunicamos quando o assunto aparece.",
  },
  {
    step: "02",
    title: "São feridas emocionais",
    text: "Mágoas antigas, expectativas frustradas e medos não ditos contaminam cada conversa antes mesmo dela começar.",
  },
  {
    step: "03",
    title: "Falta compreensão",
    text: "Quando os dois lados só querem ter razão, ninguém se sente ouvido — e a distância cresce em silêncio.",
  },
  {
    step: "04",
    title: "A virada começa em você",
    text: "Mudar a comunicação muda a relação. E essa mudança pode começar nesta semana, com a direção certa.",
  },
];

export function Turnaround() {
  return (
    <section id="virada" className="relative bg-pine-radial py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="left"
          eyebrow="A grande virada"
          title={
            <>
              O problema pode não ser{" "}
              <span className="text-gradient-gold">o que você imagina</span>
            </>
          }
          description="Muitas vezes o conflito não está apenas no assunto — está na comunicação, nas feridas emocionais e na falta de compreensão. Entender isso muda tudo."
        />

        {/* Timeline animada */}
        <div className="relative mt-20">
          {/* Linha vertical/horizontal luminosa */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-7 hidden h-px w-full origin-left bg-gradient-to-r from-gold/60 via-gold/30 to-transparent lg:block"
          />

          <StaggerGroup className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.step} className="relative">
                <div className="mb-6 flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-ink font-heading text-lg font-semibold text-gold-soft">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-cloud">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {s.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="hairline" />
        </Reveal>
      </div>
    </section>
  );
}
