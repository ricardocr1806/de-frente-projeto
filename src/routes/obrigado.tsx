import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Parabéns! — De Frente com a Homossexualidade" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Obrigado,
});

const GROUP_LINK = "https://devzapp.com.br/api-engennier/campanha/api/redirect/v2/6a3b3896423426000180357d";

function Obrigado() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        content_name: "De Frente com a Homossexualidade",
        content_type: "product",
        value: 19.90,
        currency: "BRL",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-deep-gradient flex flex-col items-center justify-center px-5 text-center text-white">
      <div className="rainbow-bar-thick w-full fixed top-0 left-0" />

      <div className="max-w-lg w-full">

        {/* Ícone comemorativo */}
        <div className="text-6xl mb-6 animate-bounce">🎉</div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-3">
          Parabéns pela<br />
          <span className="rainbow-text">sua inscrição!</span>
        </h1>

        <p className="text-white/70 text-base mb-10">
          Sua vaga na imersão está garantida.
        </p>

        {/* Caixa de atenção */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 mb-8">
          <p className="text-white/60 uppercase tracking-widest text-xs font-bold mb-2">
            ⚠️ Agora atenção
          </p>
          <p className="text-white text-xl md:text-2xl font-bold mb-1">
            Entre no grupo exclusivo
          </p>
          <p className="text-white/70 text-sm mb-8">
            É lá que você vai receber o link da aula, lembretes e atualizações importantes.
          </p>

          {/* Botão animado */}
          <div className="relative">
            {/* Pulso de fundo */}
            <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-40 animate-ping" />
            <a
              href={GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 w-full py-5 px-6 rounded-2xl text-white font-extrabold text-xl md:text-2xl shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                boxShadow: "0 0 40px rgba(34,197,94,0.5), 0 8px 32px rgba(0,0,0,0.4)",
                animation: "wiggle 1.4s ease-in-out infinite",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Entrar no Grupo Agora
            </a>
          </div>

          <p className="text-white/40 text-xs mt-4">
            Clique no botão acima para entrar
          </p>
        </div>

      </div>

      <div className="rainbow-bar-thick w-full fixed bottom-0 left-0" />

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          15%       { transform: scale(1.04) rotate(-1.5deg); }
          30%       { transform: scale(1.04) rotate(1.5deg); }
          45%       { transform: scale(1.02) rotate(-1deg); }
          60%       { transform: scale(1.02) rotate(1deg); }
          75%       { transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
