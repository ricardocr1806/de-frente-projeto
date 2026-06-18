type MarkProps = { className?: string };

/**
 * Símbolo da marca: dois arcos frente a frente (o "de frente") com um elo
 * dourado no centro, simbolizando o diálogo e a reconexão. Usa currentColor.
 * Mantido para uso pontual, mas o logo padrão é apenas o wordmark.
 */
export function LogoMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label="De Frente"
    >
      <circle
        cx="24"
        cy="24"
        r="22.5"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      {/* arco esquerdo "(", concavidade voltada ao centro */}
      <path
        d="M20 11 A 16 16 0 0 0 20 37"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* arco direito ")", espelhado */}
      <path
        d="M28 11 A 16 16 0 0 1 28 37"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* elo central */}
      <circle cx="24" cy="24" r="2.7" fill="currentColor" />
    </svg>
  );
}

/** Distribui as letras de `text` ao longo de toda a largura da linha. */
function spread(text: string) {
  return text.split("").map((ch, i) =>
    ch === " " ? (
      <span key={i} aria-hidden className="inline-block w-[0.3em]" />
    ) : (
      <span key={i}>{ch}</span>
    ),
  );
}

type LogoProps = {
  className?: string;
};

/**
 * Logo apenas texto (wordmark), em caixa-alta. As duas linhas são esticadas
 * com `justify-between` para terminarem exatamente na mesma largura.
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="flex justify-between whitespace-nowrap font-heading text-lg font-semibold uppercase tracking-tight text-cloud">
        {spread("DE FRENTE")}
      </span>
      <span className="mt-1.5 flex justify-between whitespace-nowrap text-[0.6rem] font-medium uppercase text-gold-soft">
        {spread("PRA HOMOSSEXUALIDADE")}
      </span>
    </span>
  );
}
