import { Reveal } from "@/components/motion/Reveal";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Cabeçalho editorial padrão das seções. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
            <span className="h-px w-6 bg-gold/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-cloud sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-mist sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
