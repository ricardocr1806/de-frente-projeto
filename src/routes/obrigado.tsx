import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Compra confirmada — De Frente com a Homossexualidade" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        content_ids: ["de-frente-imersao"],
        content_name: "De Frente com a Homossexualidade",
        content_type: "product",
        content_category: "Imersão Online",
        value: 37.0,
        currency: "BRL",
        num_items: 1,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-deep-gradient flex flex-col items-center justify-center px-4 text-center text-white">
      <div className="rainbow-bar w-full fixed top-0 left-0" />

      <div className="max-w-lg">
        <div className="mb-6 text-5xl">🎉</div>
        <h1 className="font-display text-3xl md:text-4xl text-white mb-4 leading-tight">
          Compra confirmada!
        </h1>
        <p className="text-white/80 text-lg mb-2">
          Bem-vindo à imersão{" "}
          <span className="text-[color:var(--color-gold)] font-semibold">
            De Frente com a Homossexualidade
          </span>
          .
        </p>
        <p className="text-white/70 text-base mb-8">
          Verifique seu e-mail — você receberá as instruções de acesso em instantes.
        </p>
        <a
          href="/"
          className="btn-rainbow inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-semibold uppercase tracking-wide"
        >
          Voltar ao início
        </a>
      </div>

      <div className="rainbow-bar w-full fixed bottom-0 left-0" />
    </div>
  );
}
