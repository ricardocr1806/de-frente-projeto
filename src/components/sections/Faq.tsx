"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "Para quem é esse encontro?",
    a: "Para pais e filhos que vivem conflitos familiares relacionados à homossexualidade e desejam reconstruir o diálogo. Você pode participar sozinho ou convidar quem você ama para assistir junto.",
  },
  {
    q: "O encontro é a favor ou contra alguma posição?",
    a: "O foco não é polêmica nem debate ideológico. O foco é relacionamento, comunicação saudável e reconexão familiar. Aqui ninguém é julgado — o objetivo é restaurar vínculos.",
  },
  {
    q: "Como vou assistir?",
    a: "É 100% online e ao vivo, nos dias 04 e 05 de julho. Você recebe o acesso por e-mail e pode acompanhar pelo computador ou celular, de onde estiver.",
  },
  {
    q: "E se eu não puder assistir ao vivo?",
    a: "Recomendamos fortemente a participação ao vivo para aproveitar as interações. As orientações de acesso e eventuais materiais serão enviados aos inscritos por e-mail.",
  },
  {
    q: "O pagamento é único?",
    a: "Sim. São R$19,90 em pagamento único, sem mensalidade e sem cobranças recorrentes.",
  },
  {
    q: "É seguro fazer a inscrição?",
    a: "Totalmente. O pagamento é processado em ambiente seguro e seus dados são protegidos.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-mist/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-lg font-medium text-cloud">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
            open ? "border-gold/50 text-gold" : "border-mist/20 text-mist"
          }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-mist">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Ainda com uma pergunta?"
        />
        <Reveal delay={0.1} className="mt-14">
          <div>
            {faqs.map((f) => (
              <Item key={f.q} {...f} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
