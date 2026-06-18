"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useLeadModal } from "@/components/lead/LeadModalProvider";

type CtaButtonProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const SIZES = {
  sm: "px-6 py-3 text-xs",
  md: "px-8 py-4 text-sm",
  lg: "px-10 py-5 text-base",
};

/**
 * Botão de conversão dourado. Abre o formulário de captura de lead
 * (nome, e-mail, WhatsApp) antes de seguir para o checkout.
 */
export function CtaButton({
  children,
  className = "",
  size = "md",
}: CtaButtonProps) {
  const { open } = useLeadModal();
  const pad = SIZES[size];
  return (
    <motion.button
      type="button"
      onClick={open}
      whileHover={{ y: -3 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-wide text-ink ${pad} ${className}`}
      style={{
        background:
          "linear-gradient(100deg, #ff5a5a, #ff9e3d 18%, #ffe24d 36%, #58d96a 54%, #54b3ff 72%, #9a6bff 88%, #ff5db8)",
        boxShadow:
          "0 18px 45px -12px rgba(120,80,220,0.5), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {/* brilho deslizante */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap uppercase">
        {children}
      </span>
    </motion.button>
  );
}
