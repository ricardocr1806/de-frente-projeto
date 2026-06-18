"use client";

import { motion } from "motion/react";
import { Check, CalendarDays, Lock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const benefits = [
  "Acesso ao encontro ao vivo nos dias 04 e 05 de julho",
  "Os 4 pilares da comunicação familiar sem confronto",
  "Método prático para abordar o assunto sem brigas",
  "Direção para se posicionar com firmeza e respeito",
  "Sessão de perguntas e respostas ao vivo",
  "Acesso pelo computador ou celular, de onde estiver",
];

export function Offer() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      {/* Aura premium */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[80%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(21,77,63,0.45), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
            <Sparkles className="h-4 w-4" />
            Sua vaga
          </span>
        </Reveal>
        <Reveal delay={0.05} className="mt-5 text-center">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-cloud sm:text-4xl lg:text-[2.9rem]">
            Quanto vale reconstruir a{" "}
            <span className="text-gradient-gold">comunicação dentro da sua família?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ring-gold-glow relative mt-12 overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-b from-pine-800/30 to-ink p-8 sm:p-12">
            <div
              aria-hidden
              className="animate-shimmer pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.9), transparent)",
              }}
            />

            <div className="flex flex-col items-center text-center">
              <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
                Oferta especial de lançamento
              </span>

              <div className="mt-7 flex items-end justify-center gap-3">
                <span className="text-lg text-mist line-through decoration-red-400/60">
                  De R$297
                </span>
              </div>
              <div className="mt-1 flex items-baseline justify-center gap-2">
                <span className="font-heading text-2xl text-mist">por apenas</span>
              </div>
              <div className="mt-2 flex items-start justify-center">
                <span className="mt-3 font-heading text-2xl font-semibold text-gold-soft">
                  R$
                </span>
                <span className="font-heading text-7xl font-bold leading-none text-gradient-gold sm:text-8xl">
                  19
                </span>
                <span className="mt-3 font-heading text-3xl font-semibold text-gold-soft">
                  ,90
                </span>
              </div>
              <span className="mt-3 text-sm uppercase tracking-[0.2em] text-mist">
                Pagamento único
              </span>
            </div>

            <div className="my-10 hairline" />

            <ul className="mx-auto grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-left text-sm text-cloud">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-5">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <CtaButton size="md" className="lg:px-10 lg:py-5 lg:text-base">
                  Quero garantir minha vaga
                </CtaButton>
              </motion.div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-mist">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-gold/70" />
                  04 e 05 de julho
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-gold/70" />
                  Pagamento 100% seguro
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
