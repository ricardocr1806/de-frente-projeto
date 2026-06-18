"use client";

import Image from "next/image";
import { BookOpen, Globe2, Users, Heart } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const credentials = [
  { icon: BookOpen, label: "Autor de livros", value: "Obras publicadas" },
  { icon: Globe2, label: "Eventos internacionais", value: "Palcos pelo mundo" },
  { icon: Users, label: "Comunidade", value: "+240 mil seguidores" },
  { icon: Heart, label: "Impacto", value: "Milhares de famílias" },
];

export function Authority() {
  return (
    <section id="autoridade" className="relative overflow-hidden bg-ink lg:py-0">
      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-end gap-12 lg:min-h-[100svh] lg:grid-cols-2 lg:items-center lg:gap-6 lg:px-10">
        {/* Imagem — cobre o mobile (texto por cima); coluna esquerda no desktop */}
        <div className="absolute inset-0 flex items-start justify-center pt-10 lg:static lg:order-1 lg:h-[100svh] lg:items-end lg:pt-0">
          <div
            aria-hidden
            className="animate-glow absolute left-1/2 top-[10%] h-[64%] w-[88%] -translate-x-1/2 rounded-full lg:top-auto lg:bottom-[6%] lg:h-[60%] lg:w-[75%]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(21,77,63,0.8), transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <Reveal variants={{ hidden: { opacity: 0, scale: 1.05 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }} className="relative z-10 flex h-full w-full items-start justify-center lg:h-auto lg:w-auto lg:items-end">
            <Image
              src="/pierry-glow.png"
              alt="Pierry Rodrigues"
              width={603}
              height={730}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-auto w-auto max-h-[88%] max-w-[118%] object-contain object-top drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)] lg:max-h-none lg:max-w-[88%] lg:object-bottom"
            />
          </Reveal>
        </div>

        {/* Gradiente de legibilidade — apenas mobile (texto sobre a foto) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-[72%] lg:hidden"
          style={{
            background:
              "linear-gradient(to top, #030707 16%, rgba(3,7,7,0.94) 40%, rgba(3,7,7,0.6) 64%, transparent 100%)",
          }}
        />

        {/* Texto editorial — sobre a foto no mobile; coluna direita no desktop */}
        <div className="relative z-20 order-2 max-w-xl px-6 pb-10 lg:order-2 lg:px-0 lg:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
              <span className="h-px w-6 bg-gold/60" />
              Quem conduz
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight text-cloud [text-shadow:0_2px_24px_rgba(3,7,7,0.85)] sm:text-5xl lg:mt-5 lg:[text-shadow:none]">
              Pierry Rodrigues
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-mist [text-shadow:0_1px_16px_rgba(3,7,7,0.9)] sm:text-lg lg:mt-6 lg:[text-shadow:none]">
              Especialista em relacionamentos e comunicação familiar, Pierry já
              levou clareza e direção a milhares de famílias dentro e fora do
              Brasil. Sua abordagem une sensibilidade e método — sem polêmica,
              sem julgamento, com foco na reconexão.
            </p>
          </Reveal>

          <StaggerGroup className="mt-7 grid grid-cols-2 gap-3 lg:mt-10 lg:gap-4">
            {credentials.map((c) => (
              <StaggerItem
                key={c.label}
                className="rounded-2xl border border-mist/15 bg-white/[0.06] p-4 backdrop-blur-sm transition-colors duration-500 hover:border-gold/30 lg:border-mist/10 lg:bg-white/[0.03] lg:p-5 lg:backdrop-blur-none"
              >
                <c.icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <div className="mt-3 font-heading text-base font-semibold text-cloud lg:text-lg">
                  {c.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-mist">
                  {c.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
