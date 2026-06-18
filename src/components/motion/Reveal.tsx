"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode, ElementType } from "react";
import { fadeUp, stagger } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Variant a aplicar. Padrão: fadeUp */
  variants?: Variants;
  /** Atraso adicional em segundos */
  delay?: number;
  /** Tag a renderizar (div, section, h2, etc) */
  as?: ElementType;
  once?: boolean;
};

/** Revela um único elemento ao entrar na viewport. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const MotionTag = motion(as as ElementType);
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: ElementType;
  once?: boolean;
  amount?: number;
};

/** Container que orquestra a entrada escalonada dos filhos diretos. */
export function StaggerGroup({
  children,
  className,
  variants = stagger,
  as = "div",
  once = true,
  amount = 0.2,
}: StaggerGroupProps) {
  const MotionTag = motion(as as ElementType);
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

/** Item filho de StaggerGroup (usa o variant herdado do container). */
export function StaggerItem({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: ElementType;
}) {
  const MotionTag = motion(as as ElementType);
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
