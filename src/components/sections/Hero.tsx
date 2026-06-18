"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CtaButton } from "@/components/ui/CtaButton";
import { fadeUp, stagger } from "@/lib/motion";

const indicators = [
  { value: "+240 mil", label: "seguidores" },
  { value: "Milhares", label: "de famílias impactadas" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-ink">
      {/* Iluminação ambiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 28%, rgba(21,77,63,0.5), transparent 62%), radial-gradient(60% 50% at 80% 30%, rgba(13,61,49,0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto h-full max-w-7xl lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-4 lg:px-10">
        {/* FOTO — grande cobrindo o mobile (texto por cima); coluna direita no desktop */}
        <div className="absolute inset-0 flex items-start justify-center pt-14 lg:static lg:order-2 lg:inset-auto lg:h-[100svh] lg:items-center lg:pt-0">
          {/* Glow verde cinematográfico */}
          <motion.div
            aria-hidden
            style={{ y: yGlow }}
            className="animate-glow absolute left-1/2 top-[8%] h-[70%] w-[95%] -translate-x-1/2 rounded-full lg:top-auto lg:bottom-[6%] lg:h-[80%] lg:w-[90%]"
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(50% 55% at 50% 50%, rgba(28,100,80,0.9), rgba(13,61,49,0.5) 45%, transparent 72%)",
                filter: "blur(55px)",
              }}
            />
          </motion.div>

          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 1.06, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative z-10 flex h-full w-full items-start justify-center lg:items-center"
          >
            <Image
              src="/pierry.png"
              alt="Pierry Rodrigues, especialista e palestrante"
              width={603}
              height={730}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto max-h-[82%] w-auto max-w-[100%] object-contain object-top drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:max-h-[84vh] lg:max-w-[80%] lg:object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-screen"
              style={{
                background:
                  "linear-gradient(255deg, rgba(212,175,55,0.10), transparent 45%)",
              }}
            />
          </motion.div>
        </div>

        {/* Gradiente de legibilidade — apenas mobile (texto sobre a foto) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] lg:hidden"
          style={{
            background:
              "linear-gradient(to top, #030707 18%, rgba(3,7,7,0.92) 38%, rgba(3,7,7,0.65) 60%, transparent 100%)",
          }}
        />

        {/* COPY + CTA — sobre a foto no mobile; coluna esquerda no desktop */}
        <motion.div
          style={{ y: yText, opacity }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="absolute inset-x-0 bottom-0 z-20 px-6 pb-7 lg:static lg:order-1 lg:max-w-xl lg:px-0 lg:pb-0"
        >
          <motion.div
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold-soft backdrop-blur-sm lg:mb-7 lg:bg-gold/5 lg:px-4 lg:py-1.5 lg:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow" />
            Imersão online e ao vivo
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-[1.18rem] font-semibold leading-snug tracking-tight text-cloud [text-shadow:0_2px_24px_rgba(3,7,7,0.85)] sm:text-2xl lg:text-[2.05rem] lg:leading-[1.3] lg:[text-shadow:none]"
          >
            Se hoje você vive essa realidade onde qualquer conversa vira
            conflito, distância ou briga… essa imersão vai te mostrar como{" "}
            <span className="text-gradient-gold">reconstruir o diálogo</span>,
            entender o que está por trás dos conflitos e{" "}
            <span className="text-gradient-gold">
              reconstruir a comunicação dentro da sua casa
            </span>
            .
          </motion.h1>

          {/* Data */}
          <motion.div
            variants={fadeUp}
            className="mt-3 flex items-center gap-2.5 text-cloud lg:mt-8 lg:gap-3"
          >
            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-mist lg:text-sm">
              Dias
            </span>
            <span className="font-heading text-lg font-semibold text-gold-soft lg:text-2xl">
              04 e 05 de Julho
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-4 lg:mt-9">
            <CtaButton size="sm" className="lg:px-10 lg:py-5 lg:text-base">
              Quero garantir minha vaga
            </CtaButton>
          </motion.div>

          {/* Indicadores */}
          <motion.div variants={fadeUp} className="mt-4 lg:mt-12">
            <div className="flex items-center gap-2 text-[0.72rem] text-mist sm:hidden">
              <span className="font-semibold text-cloud">+240 mil seguidores</span>
              <span className="text-gold/50">•</span>
              <span>milhares de famílias</span>
            </div>
            <div className="hidden flex-wrap items-center gap-x-10 gap-y-4 sm:flex">
              {indicators.map((it) => (
                <div key={it.label} className="flex flex-col">
                  <span className="font-heading text-2xl font-semibold text-cloud">
                    {it.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-mist">
                    {it.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll (desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-mist/30 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
