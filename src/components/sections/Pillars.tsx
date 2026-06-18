"use client";

import { MessagesSquare, Compass, Users, Map } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const pillars = [
  {
    icon: MessagesSquare,
    title: "Comunicação sem confronto",
    text: "Como abordar o assunto mais difícil da sua família sem que vire briga — criando um espaço seguro para os dois lados.",
  },
  {
    icon: Compass,
    title: "Clareza emocional",
    text: "Identifique o que realmente está por trás da dor e separe o que é seu, do outro e da situação.",
  },
  {
    icon: Users,
    title: "Posicionamento familiar",
    text: "Encontre o equilíbrio entre acolher e se posicionar, sem se anular e sem afastar quem você ama.",
  },
  {
    icon: Map,
    title: "Direção prática",
    text: "Saia com um caminho concreto: o que dizer, o que evitar e os próximos passos para reconstruir a relação.",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="O que você vai aprender"
          title={
            <>
              Quatro pilares para{" "}
              <span className="text-gradient-gold">reconstruir a relação</span>
            </>
          }
          description="Conteúdo prático, aplicável já na primeira conversa depois do encontro."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <StaggerItem
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-mist/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 transition-all duration-500 hover:border-gold/30 lg:p-10"
            >
              <div className="flex items-start gap-5">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pine-800/40 text-gold ring-1 ring-inset ring-gold/20 transition-all duration-500 group-hover:bg-pine-700/50">
                  <p.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="font-heading text-sm font-medium text-gold-soft/70">
                    Pilar 0{i + 1}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-cloud">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {p.text}
                  </p>
                </div>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-pine-600/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
