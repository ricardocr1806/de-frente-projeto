import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import antesDepoisUrl from "@/assets/antes-depois.webp";
import heroMobileUrl from "@/assets/hero-mobile.webp";
import pierryUrl from "@/assets/pierry-rodrigues.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Frente com a Homossexualidade — Imersão Online | 04 e 05 de Julho" },
      {
        name: "description",
        content:
          "Imersão online e ao vivo de 2 dias sobre identidade, fé e reconstrução familiar. Para homens em conflito e para pais. Ingresso R$ 19,90.",
      },
      { property: "og:title", content: "De Frente com a Homossexualidade — Imersão Online" },
      {
        property: "og:description",
        content:
          "2 dias de transformação, identidade e reconstrução familiar. 04 e 05 de Julho, das 13h às 19h. R$ 19,90.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      // Preload da imagem do hero mobile (elemento LCP) p/ pintar o quanto antes
      { rel: "preload", as: "image", href: heroMobileUrl, fetchPriority: "high" },
    ],
  }),
  component: Landing,
});

const CHECKOUT_URL = "https://pay.assiny.com.br/1d926e/node/3fZr7o";

/** Parâmetros extras (não-utm) que também devem ser repassados ao checkout. */
const PRESERVED_PARAMS = ["fbclid", "gclid", "ttclid", "gad_source", "msclkid"];

/**
 * Monta o link do checkout preservando as UTMs (e cliques de anúncio) que vieram
 * na URL da landing. Sem isso, a origem da venda se perde no checkout.
 * Inicia com o link puro (SSR) e completa com os parâmetros após montar no client.
 */
function useCheckoutUrl() {
  const [url, setUrl] = useState(CHECKOUT_URL);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const incoming = new URLSearchParams(window.location.search);
    const dest = new URL(CHECKOUT_URL);
    incoming.forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm_") || PRESERVED_PARAMS.includes(key.toLowerCase())) {
        dest.searchParams.set(key, value);
      }
    });
    setUrl(dest.toString());
  }, []);
  return url;
}

/**
 * Parâmetros do produto compartilhados por todos os eventos de conversão
 * (ViewContent, InitiateCheckout, Purchase). Manter idêntico em todos os
 * eventos garante o match correto no Gerenciador de Eventos da Meta.
 */
export const PIXEL_PRODUCT = {
  content_ids: ["de-frente-imersao"],
  content_name: "De Frente com a Homossexualidade",
  content_type: "product",
  content_category: "Imersão Online",
  value: 19.9,
  currency: "BRL",
} as const;

/** Dispara um evento padrão do Pixel da Meta com segurança (no-op no SSR). */
export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", event, params);
  }
}

function trackCheckout() {
  trackPixel("InitiateCheckout", PIXEL_PRODUCT);
}

function CTA({ children, variant = "primary" }: { children: string; variant?: "primary" | "gold" }) {
  const checkoutUrl = useCheckoutUrl();
  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackCheckout}
      className={`inline-flex h-14 items-center justify-center rounded-xl px-8 text-base font-semibold tracking-wide uppercase ${
        variant === "gold" ? "btn-gold" : "btn-primary"
      }`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-deep)]/70">
      <span className="rainbow-dot" />
      {children}
      <span className="rainbow-dot" />
    </div>
  );
}

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const checkoutUrl = useCheckoutUrl();

  useEffect(() => {
    // Botão fixo
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    // ViewContent — produto visualizado
    trackPixel("ViewContent", PIXEL_PRODUCT);

    // Scroll depth — 25%, 50%, 75%
    const depthsFired = new Set<number>();
    const onScrollDepth = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      [25, 50, 75].forEach((depth) => {
        if (pct >= depth && !depthsFired.has(depth)) {
          depthsFired.add(depth);
          if ((window as any).fbq) {
            (window as any).fbq("trackCustom", "ScrollDepth", { depth: `${depth}%` });
          }
        }
      });
    };
    window.addEventListener("scroll", onScrollDepth, { passive: true });

    // Tempo na página — 30s, 60s, 2min
    const timers = [
      setTimeout(() => { if ((window as any).fbq) (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 30 }); }, 30000),
      setTimeout(() => { if ((window as any).fbq) (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 60 }); }, 60000),
      setTimeout(() => { if ((window as any).fbq) (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 120 }); }, 120000),
    ];

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollDepth);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pb-28 md:pb-0">

      {/* TOP BAR */}
      <div className="bg-deep-gradient text-primary-foreground">
        <div className="rainbow-bar" />
      </div>

      {/* HERO — MOBILE */}
      <div className="md:hidden bg-black text-white">
        {/* Imagem completa — rostos visíveis, degradê só na borda inferior */}
        <div className="relative">
          <img
            src={heroMobileUrl}
            alt="Antes e Depois — Pierry Rodrigues"
            className="w-full block"
            width={1280}
            height={853}
            fetchPriority="high"
            decoding="async"
          />
          {/* Degradê suave só na parte de baixo da imagem, transicionando para o fundo preto */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
        </div>

        {/* Texto abaixo da imagem, sem cobrir nenhum rosto */}
        <div className="px-6 pt-4 pb-10 text-center">
          <h1 className="font-display text-3xl leading-tight text-white mb-5">
            De Frente com a{" "}
            <span className="rainbow-text">Homossexualidade</span>
          </h1>

          {/* Destaque principal */}
          <div className="mb-5 border-l-4 border-[color:var(--color-gold)] pl-4 text-left">
            <p className="text-[color:var(--color-gold)] uppercase tracking-widest text-sm font-black mb-2">
              2 dias de imersão
            </p>
            <p className="text-base text-white/90 leading-relaxed">
              Descubra{" "}
              <span className="text-[color:var(--color-gold)] font-semibold">
                o que está por trás dos conflitos de identidade
              </span>
              , dos afastamentos familiares e encontre um caminho real de restauração para você e para quem você ama.
            </p>
          </div>

          {/* Preço */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-sm text-white/50 line-through">De R$ 97,00</span>
            <span className="text-2xl font-bold text-[color:var(--color-gold)]">Por apenas R$ 19,90</span>
            <span className="text-sm text-white/70 mt-1">Imersão Online · 04 e 05 de Julho · Das 13h às 19h</span>
          </div>

          {/* Botão */}
          <a
            href={checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
            className="btn-rainbow inline-flex h-14 w-full items-center justify-center rounded-xl px-6 text-base font-semibold uppercase tracking-wide"
          >
            Quero garantir minha vaga
          </a>
        </div>
        <div className="rainbow-bar-thick" />
      </div>

      {/* HERO — DESKTOP */}
      <header className="hidden md:block relative bg-deep-gradient text-primary-foreground overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/10 blur-3xl" aria-hidden />

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <h1 className="font-display text-4xl leading-[1.05] lg:text-5xl text-primary-foreground mb-6">
              De Frente com a <span className="rainbow-text">Homossexualidade</span>
            </h1>
            <p className="text-xl font-semibold text-primary-foreground leading-snug max-w-xl border-l-4 border-[color:var(--color-gold)] pl-4">
              <span className="block text-[color:var(--color-gold)] uppercase tracking-wider text-sm font-bold mb-1">2 dias de imersão</span>
              Descubra <span className="text-[color:var(--color-gold)]">o que está por trás dos conflitos de identidade</span>, dos afastamentos familiares e encontre um caminho real de restauração para você e para quem você ama.
            </p>
            <div className="mt-5 flex flex-col">
              <span className="text-sm text-primary-foreground/60 line-through">De R$ 97,00</span>
              <span className="text-2xl font-bold text-[color:var(--color-gold)]">Por apenas R$ 19,90</span>
              <span className="mt-1 text-sm text-primary-foreground/85">Imersão Online · 04 e 05 de Julho · Das 13h às 19h</span>
            </div>
            <div className="mt-5">
              <a
                href={checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
                className="btn-rainbow inline-flex h-14 items-center justify-center rounded-xl px-8 text-base font-semibold uppercase tracking-wide"
              >
                Quero garantir minha vaga
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--color-gold)]/15 blur-2xl" aria-hidden />
            <div className="rainbow-ring relative">
              <img
                src={antesDepoisUrl}
                alt="Retrato do palestrante da imersão De Frente com a Homossexualidade"
                width={695}
                height={760}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="rainbow-bar-thick" />
      </header>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionLabel>Identificação</SectionLabel>
        <h2 className="mx-auto max-w-3xl text-center text-3xl md:text-4xl">
          Esta imersão é para vocês que se amam, mas já não sabem como conversar.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold)]">
              Para filhos que vivem esse conflito
            </p>
            <h3 className="mt-3 text-2xl">Você não é o seu rótulo.</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-foreground/85">
              {[
                "Você sente que sua família só consegue enxergar sua sexualidade.",
                "Você vive conflitos entre seus sentimentos, sua fé e aquilo que acredita.",
                "Você tem medo de falar e ser rejeitado.",
                "Você deseja compreender melhor sua história emocional e espiritual.",
                "Você está cansado de ser tratado como um problema.",
                "Você quer ser ouvido sem humilhação ou acusação.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-deep)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-secondary p-4 text-sm leading-relaxed text-secondary-foreground">
              Aqui, você não será reduzido a um rótulo. Você será convidado a olhar para sua história, sua identidade, seus relacionamentos, suas escolhas e sua vida espiritual com honestidade e responsabilidade.
            </p>
          </div>

          <div className="card-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold)]">
              Para pais e mães
            </p>
            <h3 className="mt-3 text-2xl">O amor que não sabe mais o que dizer.</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-foreground/85">
              {[
                "Você ama seu filho, mas não sabe o que falar.",
                "Você tem medo de que qualquer posicionamento produza afastamento.",
                "Você sente culpa e se pergunta onde errou.",
                "As conversas terminam em discussão, silêncio ou defesa.",
                "Você deseja preservar suas convicções sem perder seu filho.",
                "Você quer reconstruir a confiança dentro da família.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-deep)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-secondary p-4 text-sm leading-relaxed text-secondary-foreground">
              Você aprenderá que conexão não significa concordância com tudo. Significa construir um relacionamento seguro o suficiente para que a verdade possa ser ouvida.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <CTA>Quero garantir minha vaga</CTA>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionLabel>Conteúdo da imersão</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-center text-3xl md:text-4xl">
            O que vamos trabalhar durante esses dois dias?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                n: "01",
                t: "Identidade além da sexualidade",
                d: "Como separar identidade, sentimentos, comportamentos e escolhas sem reduzir um homem a apenas uma parte da sua história.",
              },
              {
                n: "02",
                t: "O que existe por trás do silêncio",
                d: "Dores, rejeições, medos, conflitos espirituais e necessidades de pertencimento que muitas vezes nunca foram verbalizados.",
              },
              {
                n: "03",
                t: "Pais e filhos diante do conflito",
                d: "Como trocar acusação, controle e afastamento por escuta, responsabilidade, presença e direção.",
              },
              {
                n: "04",
                t: "Verdade e amor",
                d: "Como preservar convicções, falar sobre assuntos difíceis e buscar reconciliação sem usar a verdade como arma.",
              },
            ].map((c) => (
              <div key={c.n} className="card-soft p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl text-[color:var(--color-gold)]">{c.n}</span>
                  <h3 className="text-xl">{c.t}</h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{c.d}</p>
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-12 max-w-3xl text-center font-display text-2xl italic leading-snug text-[color:var(--color-deep)] md:text-3xl">
            "O comportamento pode iniciar uma discussão. Mas é o coração que precisa ser alcançado."
          </blockquote>
        </div>
      </section>

      {/* OFERTA */}
      <section id="inscricao" className="mx-auto max-w-4xl px-4 py-20">
        <SectionLabel>Sua participação</SectionLabel>
        <h2 className="mx-auto max-w-3xl text-center text-3xl md:text-4xl">
          Dois dias podem iniciar uma conversa que sua família vem adiando há anos.
        </h2>

        <div className="mt-12">
          <div className="card-soft overflow-hidden">
            <div className="rainbow-bar-thick" />
            <div className="bg-deep-gradient p-7 text-primary-foreground md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-gold)]">
                Imersão online e ao vivo
              </p>
              <h3 className="mt-2 font-display text-3xl text-primary-foreground md:text-4xl">
                De Frente com a Homossexualidade
              </h3>
              <p className="mt-1 text-sm text-primary-foreground/80">
                2 Dias de Transformação, Identidade e Reconstrução Familiar
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-primary-foreground/90">
                <span>04 e 05 de Julho</span>
                <span>Das 13h às 19h</span>
                <span>Online e ao vivo</span>
              </div>
            </div>
            <div className="p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-deep)]">
                    Durante a imersão você receberá:
                  </p>
                  <ul className="mt-4 space-y-2 text-[15px] text-foreground/85">
                    {[
                      "2 Dias de conteúdo ao vivo",
                      "Princípios sobre identidade e pertencimento",
                      "Direcionamentos para pais, mães e filhos",
                      "Ferramentas para comunicação familiar",
                      "Reflexões bíblicas",
                      "Exercícios de autoavaliação",
                      "Orientações para iniciar um processo de reconexão",
                    ].map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-gold)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/60 p-6 text-center">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Investimento</p>
                  <p className="text-sm text-muted-foreground line-through">De R$ 97,00</p>
                  <p className="font-display text-5xl text-[color:var(--color-deep)]">R$ 19,90</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Para pais, mães ou filhos que vivem esse conflito.
                  </p>
                  <a
                    href={checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
                    className="btn-rainbow mt-5 flex h-14 w-full items-center justify-center rounded-xl text-sm font-semibold uppercase tracking-wide"
                  >
                    Quero garantir minha vaga
                  </a>
                  <div className="rainbow-bar mt-4 opacity-80" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM É PIERRY RODRIGUES */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative mx-auto w-full max-w-sm md:max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--color-gold)]/15 blur-2xl" aria-hidden />
              <div className="rainbow-ring relative">
                <img
                  src={pierryUrl}
                  alt="Pierry Rodrigues — Imersão De Frente com a Homossexualidade"
                  width={695}
                  height={760}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-deep)]/70">
                <span className="rainbow-dot inline-block mr-2" />
                Quem conduz
              </p>
              <h2 className="text-3xl md:text-4xl">Quem é Pierry Rodrigues?</h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Pierry Rodrigues dedica sua vida a ajudar pessoas e famílias a compreender questões profundas de identidade, pertencimento e restauração.
                </p>
                <p>
                  Ao longo dos últimos anos, tem acompanhado histórias de transformação familiar, reconexão entre pais e filhos e processos de restauração emocional e espiritual.
                </p>
                <p>
                  Sua abordagem une princípios bíblicos, comportamento humano, relacionamentos familiares e experiências práticas vividas ao lado de centenas de pessoas que buscavam respostas para dores que pareciam impossíveis de resolver.
                </p>
                <p className="font-semibold text-foreground">
                  Seu compromisso não é com julgamentos.
                </p>
                <p className="font-semibold text-[color:var(--color-deep)]">
                  Seu compromisso é com a verdade, a restauração e a esperança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <SectionLabel>Perguntas frequentes</SectionLabel>
        <h2 className="text-center text-3xl md:text-4xl">Perguntas frequentes</h2>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group card-soft px-5 py-4 transition-shadow open:shadow-[var(--shadow-soft)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-[color:var(--color-deep)]">
                {f.q}
                <span className="text-2xl text-[color:var(--color-gold)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-[color:var(--color-ink)] px-4 py-10 text-sm text-white/70">
        <div className="mx-auto max-w-6xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs">
            <p>© {new Date().getFullYear()} De Frente com a Homossexualidade — Imersão Online.</p>
            <a href="/privacidade" className="underline-offset-4 hover:underline">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden transition-transform duration-300 ${scrolled ? "translate-y-0" : "translate-y-full"}`}>
        <a
          href={checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
          className="btn-gold flex h-12 items-center justify-center rounded-xl text-sm font-semibold uppercase tracking-wide"
        >
          Quero garantir minha vaga — R$ 19,90
        </a>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "A imersão é somente para pais?",
    a: "Não. Ela foi preparada para pais e mães, mas também para filhos — meninos e meninas — que vivem conflitos relacionados à homossexualidade, identidade, fé e relacionamento familiar.",
  },
  {
    q: "Mulheres homossexuais podem participar?",
    a: "Sim, esse conteúdo foi desenvolvido para homens e para mulheres..",
  },
  {
    q: "Preciso participar com meus pais ou com meu filho?",
    a: "Não. Cada pessoa pode participar individualmente. Caso pais e filho desejem participar juntos, também será possível.",
  },
  {
    q: "A imersão promete mudar a orientação sexual?",
    a: "Não. A imersão não apresenta promessa de mudança de orientação sexual. O trabalho está concentrado em identidade, história pessoal, responsabilidade, espiritualidade, comunicação e restauração familiar.",
  },
  {
    q: "A imersão substitui terapia?",
    a: "Não. A imersão tem caráter educacional e espiritual e não substitui acompanhamento médico ou psicológico.",
  },
  {
    q: "Será um ambiente cristão?",
    a: "Sim. A imersão será fundamentada em princípios bíblicos, apresentados com verdade, responsabilidade, respeito e amor.",
  },
  { q: "Qual é o valor?", a: "O ingresso custa R$ 19,90." },
  { q: "Quando acontecerá?", a: "Nos dias 04 e 05 de Julho, das 13h às 19h, em formato online e ao vivo." },
];
