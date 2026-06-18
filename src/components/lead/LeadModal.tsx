"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Loader2, Lock } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { buildCheckoutUrl } from "@/lib/config";

type Errors = Partial<Record<"nome" | "email" | "whatsapp", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Aplica a máscara (99) 99999-9999 ao telefone. */
function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, "($1");
  if (d.length <= 7) return d.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export function LeadModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  // Fecha com ESC e trava o scroll do fundo
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  function validate(): boolean {
    const e: Errors = {};
    if (nome.trim().length < 2) e.nome = "Informe seu nome completo.";
    if (!emailRe.test(email.trim())) e.email = "Informe um e-mail válido.";
    if (whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "Informe um WhatsApp válido com DDD.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (loading) return;
    if (!validate()) return;

    setLoading(true);
    const lead = { nome: nome.trim(), email: email.trim(), whatsapp: whatsapp.trim() };

    // Registra o lead (não bloqueia o redirecionamento em caso de falha)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      // segue para o checkout mesmo assim
    }

    window.location.href = buildCheckoutUrl(lead);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
            onClick={() => !loading && onClose()}
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Garantir minha vaga"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-gold relative w-full max-w-md overflow-hidden rounded-3xl p-7 sm:p-9"
          >
            <button
              onClick={() => !loading && onClose()}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-mist/15 text-mist transition-colors hover:border-gold/40 hover:text-gold"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <Logo />
              <h3 className="mt-4 font-heading text-2xl font-semibold text-cloud">
                Falta um passo
              </h3>
              <p className="mt-2 text-sm text-mist">
                Preencha seus dados para garantir sua vaga na imersão.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4" noValidate>
              <Field
                label="Nome completo"
                value={nome}
                onChange={setNome}
                placeholder="Seu nome"
                error={errors.nome}
                autoFocus
              />
              <Field
                label="E-mail"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="voce@email.com"
                error={errors.email}
              />
              <Field
                label="WhatsApp"
                type="tel"
                value={whatsapp}
                onChange={(v) => setWhatsapp(maskPhone(v))}
                placeholder="(11) 99999-9999"
                error={errors.whatsapp}
              />

              <button
                type="submit"
                disabled={loading}
                className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity disabled:opacity-80"
                style={{
                  background:
                    "linear-gradient(100deg, #ff5a5a, #ff9e3d 18%, #ffe24d 36%, #58d96a 54%, #54b3ff 72%, #9a6bff 88%, #ff5db8)",
                  boxShadow: "0 18px 45px -12px rgba(120,80,220,0.5)",
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Redirecionando…
                  </>
                ) : (
                  "Ir para o checkout"
                )}
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-mist">
                <Lock className="h-3.5 w-3.5 text-gold/70" />
                Seus dados estão seguros. Pagamento processado pela Greenn.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  autoFocus,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-xs font-medium uppercase tracking-wider text-mist">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`w-full rounded-xl border bg-ink/40 px-4 py-3 text-sm text-cloud outline-none transition-colors placeholder:text-mist/40 focus:border-gold/60 ${
          error ? "border-red-400/60" : "border-mist/15"
        }`}
      />
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}
