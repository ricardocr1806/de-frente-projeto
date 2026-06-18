"use client";

import {
  VolumeX,
  Flame,
  HeartCrack,
  MessageSquareOff,
  UserMinus,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const pains = [
  {
    icon: VolumeX,
    title: "Silêncio dentro de casa",
    text: "Aquele assunto que ninguém toca, mas que pesa em cada refeição em família.",
  },
  {
    icon: Flame,
    title: "Discussões constantes",
    text: "Conversas que começam simples e terminam em mágoa, repetindo o mesmo ciclo.",
  },
  {
    icon: HeartCrack,
    title: "Distanciamento emocional",
    text: "A sensação de morar na mesma casa, mas viver em mundos cada vez mais distantes.",
  },
  {
    icon: MessageSquareOff,
    title: "Medo de conversar",
    text: "O receio de dizer a coisa errada e afastar de vez quem você ama.",
  },
  {
    icon: UserMinus,
    title: "Sensação de perder alguém",
    text: "A angústia silenciosa de sentir que está perdendo um filho — ou um pai — aos poucos.",
  },
];

export function Pain() {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
              <span className="h-px w-6 bg-gold/60" />
              Talvez seja a sua casa
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-2xl font-medium leading-snug tracking-tight text-cloud sm:text-3xl lg:text-[2.15rem] lg:leading-[1.32]">
              Se hoje você vive essa realidade onde qualquer conversa vira
              conflito, distância ou briga… essa imersão vai te mostrar como{" "}
              <span className="text-gradient-gold">reconstruir o diálogo</span>,
              entender o que está por trás dos conflitos e{" "}
              <span className="text-gradient-gold">
                reconstruir a comunicação dentro da sua casa
              </span>
              .
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <StaggerItem
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-mist/10 bg-gradient-to-b from-white/[0.03] to-transparent p-7 transition-all duration-500 hover:border-gold/30 hover:from-pine-800/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-mist/10 bg-pine-900/40 text-gold transition-colors duration-500 group-hover:border-gold/40">
                <p.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-cloud">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{p.text}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
            </StaggerItem>
          ))}

          {/* Card de fechamento emocional */}
          <StaggerItem className="relative flex flex-col justify-center rounded-2xl border border-gold/20 bg-gradient-to-br from-pine-800/30 to-pine-900/10 p-7">
            <p className="font-heading text-lg leading-relaxed text-cloud">
              “Se você se reconheceu em alguma dessas linhas, este encontro foi
              feito para a sua família.”
            </p>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
