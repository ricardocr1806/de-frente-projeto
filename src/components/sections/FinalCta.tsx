"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CtaButton } from "@/components/ui/CtaButton";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden">
      {/* Fundo gradiente premium */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #030707 0%, #072a22 45%, #0d3d31 100%)",
        }}
      />
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute right-0 top-1/2 h-[80%] w-[60%] -translate-y-1/2"
        style={{
          background:
            "radial-gradient(50% 50% at 70% 50%, rgba(28,100,80,0.6), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10">
        {/* Texto */}
        <div className="order-2 max-w-xl lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-medium uppercase tracking-[0.28em] text-gold-soft"
          >
            A decisão é sua
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mt-5 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-cloud sm:text-5xl lg:text-6xl"
          >
            Você pode continuar evitando.{" "}
            <span className="text-gradient-gold">Ou pode começar hoje.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 text-base leading-relaxed text-mist sm:text-lg"
          >
            Dois dias podem mudar a forma como a sua família conversa pelo resto
            da vida. A reconexão começa com uma decisão — e ela cabe na sua mão
            agora.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <CtaButton size="md" className="lg:px-10 lg:py-5 lg:text-base">
              Quero garantir minha vaga
            </CtaButton>
            <span className="text-sm text-mist">
              04 e 05 de julho · Online e ao vivo
            </span>
          </motion.div>
        </div>

        {/* Imagem */}
        <div className="relative order-1 flex justify-center lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Image
              src="/pierry.png"
              alt="Pierry Rodrigues"
              width={603}
              height={730}
              sizes="(max-width: 1024px) 70vw, 40vw"
              className="h-auto w-auto max-w-[70%] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)] sm:max-w-[60%] lg:max-w-[80%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
