"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { CtaButton } from "@/components/ui/CtaButton";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
          scrolled
            ? "my-3 rounded-full border border-mist/10 bg-ink/70 py-3 backdrop-blur-xl"
            : "py-6"
        }`}
      >
        <a href="#top" aria-label="De Frente Pra Homossexualidade">
          <Logo />
        </a>

        <div className="hidden sm:block">
          <CtaButton>Garantir vaga</CtaButton>
        </div>
      </div>
    </motion.header>
  );
}
