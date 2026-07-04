import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { trackLp01 } from "@/lib/analytics";
import { captureUtms, appendUtmsToUrl } from "@/lib/utm";
import antesDepoisUrl from "@/assets/antes-depois.png";
import pierryUrl from "@/assets/pierry-rodrigues.jpg";
import Waves from "@/components/ui/Waves";
import SpotlightCard from "@/components/ui/SpotlightCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Frente com a Homossexualidade — Imersão Online | 04 e 05 de Julho" },
      { name: "description", content: "Imersão online e ao vivo de 2 dias sobre identidade, fé e reconstrução familiar. Para homens em conflito e para pais. Ingresso R$ 37,00." },
      { property: "og:title", content: "De Frente com a Homossexualidade" },
      { property: "og:description", content: "2 dias de transformação, identidade e reconstrução familiar. 04 e 05 de Julho. R$ 37,00." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Jost:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&display=swap" },
    ],
  }),
  component: Landing,
});

const CHECKOUT_URL = "https://pay.assiny.com.br/1d926e/node/3fZr7o";

function trackCheckout(e?: React.MouseEvent<HTMLAnchorElement>) {
  if (e) e.preventDefault();
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout", { content_name: "De Frente com a Homossexualidade", value: 37.00, currency: "BRL" });
  }
  trackLp01({ data: { event: "checkout_click" } }).catch(() => {});
  window.open(appendUtmsToUrl(CHECKOUT_URL), "_blank");
}

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      filter: visible ? "blur(0)" : "blur(6px)",
      transition: `opacity 0.9s ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 0.9s ${delay}ms cubic-bezier(0.16,1,0.3,1), filter 0.9s ${delay}ms ease`,
    }}>
      {children}
    </div>
  );
}

function Kicker({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className="kicker" style={dark ? { color: "#9a7016" } : {}}>
      {children}
    </div>
  );
}

function CTAButton({ children, fullWidth = false }: { children: string; fullWidth?: boolean }) {
  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
      className="btn-gold" style={fullWidth ? { width: "100%", justifyContent: "center" } : {}}>
      {children}
    </a>
  );
}

function Landing() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    captureUtms();
    trackLp01({ data: { event: "page_view" } }).catch(() => {});
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", { content_name: "De Frente com a Homossexualidade", value: 37.00, currency: "BRL" });
    }
    const depthsFired = new Set<number>();
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      [25, 50, 75].forEach(d => { if (pct >= d && !depthsFired.has(d)) { depthsFired.add(d); if ((window as any).fbq) (window as any).fbq("trackCustom", "ScrollDepth", { depth: `${d}%` }); } });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const timers = [
      setTimeout(() => { if ((window as any).fbq) (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 30 }); }, 30000),
      setTimeout(() => { if ((window as any).fbq) (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 60 }); }, 60000),
    ];
    return () => { window.removeEventListener("scroll", onScroll); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div className="min-h-screen pb-28 md:pb-0" style={{ background: "var(--bg)", color: "var(--ink)" }}>

      {/* TOPBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(8,17,11,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 26px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "var(--ink)" }}>
              De Frente com a Homossexualidade
            </div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold-l)", marginTop: 2 }}>
              Imersão Online — 04 e 05 de Julho
            </div>
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
            className="btn-gold" style={{ padding: "10px 22px", fontSize: ".78rem" }}>
            Garantir vaga
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "80px 0 40px",
        overflow: "hidden",
        background: "radial-gradient(140% 120% at 68% 30%, #1a3c25 0%, #173621 16%, #142f1d 32%, #102818 48%, #0c2014 63%, #0a1810 78%, #07120b 90%, var(--bg-deep) 100%)",
      }}>
        {/* Gradiente de fade bottom */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: "linear-gradient(180deg, transparent 60%, var(--bg-deep) 100%)" }} />

        {/* Ondas animadas — sutis, douradas */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.35 }}>
          <Waves lineColor="rgba(224,182,79,0.5)" backgroundColor="transparent" waveSpeedX={0.006} waveSpeedY={0.003} waveAmpX={38} waveAmpY={16} xGap={18} yGap={50} />
        </div>

        {/* Bloom — brilho de realeza atrás da imagem */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", mixBlendMode: "screen",
          background: "radial-gradient(55% 55% at 68% 32%, rgba(245,217,148,.28) 0%, rgba(229,194,118,.18) 22%, rgba(210,169,90,.10) 44%, rgba(201,161,85,.04) 65%, transparent 85%)",
          animation: "bloom 8s ease-in-out infinite",
        }} />

        <div style={{ position: "relative", zIndex: 3, maxWidth: 1180, margin: "0 auto", padding: "0 26px", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 20, alignItems: "center" }}
          className="hero-grid-desktop">

          {/* Copy */}
          <div style={{ animation: "fadeUp 1s 0.1s both" }}>
            <Kicker>Imersão Online e ao Vivo</Kicker>
            <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", marginTop: 18, marginBottom: 16, color: "#fff" }}>
              De Frente com a{" "}
              <em className="hl">Homossexualidade</em>
            </h1>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)", color: "#e9e2d2", maxWidth: 500, marginBottom: 28, lineHeight: 1.5 }}>
              Descubra o que está por trás dos conflitos de identidade e dos afastamentos familiares —{" "}
              <b style={{ color: "var(--gold-l)", fontStyle: "italic" }}>e encontre um caminho real de restauração.</b>
            </p>
            <CTAButton>Quero garantir minha vaga</CTAButton>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              {["📅 04 e 05 de Julho", "⏰ 13h às 19h", "💻 Online ao vivo"].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 36 }}>
              {[{ v: "+240 mil", l: "seguidores" }, { v: "Milhares", l: "de famílias" }].map(i => (
                <div key={i.l}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 600, color: "#fff" }}>{i.v}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)" }}>{i.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div style={{ animation: "fadeUp 1.1s 0.2s both", position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", inset: "-10%", borderRadius: "50%", background: "radial-gradient(closest-side, rgba(224,182,79,0.12), transparent)", filter: "blur(20px)" }} />
            <img src={antesDepoisUrl} alt="De Frente com a Homossexualidade"
              style={{
                position: "relative", zIndex: 1, width: "100%", maxWidth: 520,
                borderRadius: 16,
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                border: "1px solid var(--line)",
                maskImage: "linear-gradient(180deg, #000 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, #000 70%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* HERO MOBILE */}
        <div className="hero-mobile-only" style={{ display: "none", position: "relative", zIndex: 3, width: "100%", padding: "0 20px", textAlign: "center" }}>
          <Kicker>Imersão Online e ao Vivo</Kicker>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginTop: 14, marginBottom: 14, color: "#fff" }}>
            De Frente com a{" "}<em className="hl">Homossexualidade</em>
          </h1>
          <img src={antesDepoisUrl} alt="Imersão" style={{ width: "100%", borderRadius: 12, marginBottom: 20, border: "1px solid var(--line)" }} />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#e9e2d2", marginBottom: 24, lineHeight: 1.5 }}>
            Descubra o que está por trás dos conflitos de identidade e encontre um caminho real de restauração.
          </p>
          <CTAButton fullWidth>Quero garantir minha vaga</CTAButton>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
            {["04 e 05 Jul", "13h–19h", "Online"].map(t => (
              <span key={t} className="chip" style={{ fontSize: ".78rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* IDENTIFICAÇÃO — seção pergaminho */}
      <section className="parch-section" style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 26px" }}>
          <Reveal className="text-center" style={{ marginBottom: 56 }}>
            <div className="deco"><i /><i /></div>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: ".72rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--gold-ink)", display: "block", marginBottom: 12 }}>Para quem é</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "var(--ink-d)", maxWidth: 680, margin: "0 auto" }}>
              Esta imersão é para vocês que se amam, mas já não sabem como conversar.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="para-quem-grid">
            {[
              {
                num: "I",
                title: "Para filhos que vivem esse conflito",
                sub: "Você não é o seu rótulo.",
                items: ["Você sente que sua família só enxerga sua sexualidade.", "Você vive conflitos entre seus sentimentos, sua fé e o que acredita.", "Você tem medo de falar e ser rejeitado.", "Você quer ser ouvido sem humilhação ou acusação."],
                note: "Aqui, você não será reduzido a um rótulo. Será convidado a olhar para sua história com honestidade."
              },
              {
                num: "II",
                title: "Para pais e mães",
                sub: "O amor que não sabe mais o que dizer.",
                items: ["Você ama seu filho, mas não sabe o que falar.", "Você tem medo de que qualquer posicionamento gere afastamento.", "Você sente culpa e se pergunta onde errou.", "Você deseja preservar suas convicções sem perder seu filho."],
                note: "Você aprenderá que conexão não significa concordância. Significa construir um relacionamento seguro o suficiente para que a verdade seja ouvida."
              }
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 100}>
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(224,182,79,0.15)"
                  style={{ background: "linear-gradient(165deg, #183020, #0c1a11)", border: "1px solid rgba(224,182,79,0.30)", borderRadius: 16, padding: "40px 32px", height: "100%" }}
                >
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "4rem", color: "rgba(224,182,79,0.18)", lineHeight: 1, marginBottom: 8 }}>{card.num}</div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: ".7rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>{card.title}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#fff", marginBottom: 20 }}>{card.sub}</h3>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, marginBottom: 20 }}>
                    {card.items.map(t => (
                      <li key={t} style={{ display: "flex", gap: 12, marginBottom: 10, fontSize: ".94rem", color: "var(--muted)", lineHeight: 1.5 }}>
                        <span style={{ marginTop: 6, width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, display: "block" }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div style={{ borderRadius: 10, padding: "14px 18px", background: "rgba(224,182,79,0.07)", border: "1px solid var(--line)", fontSize: ".88rem", lineHeight: 1.6, color: "#e9e2d2" }}>
                    {card.note}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} style={{ textAlign: "center", marginTop: 48 }}>
            <CTAButton>Quero garantir minha vaga</CTAButton>
          </Reveal>
        </div>
      </section>

      {/* CONTEÚDO — escuro com cards */}
      <section style={{ padding: "96px 0", background: `radial-gradient(80% 60% at 50% 50%, #10241680, var(--bg) 65%)` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 26px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="deco"><i /><i /></div>
            <Kicker>O que vamos trabalhar</Kicker>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginTop: 16 }}>
              Dois dias de conteúdo<em className="hl"> direto ao ponto</em>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }} className="content-grid">
            {[
              { n: "01", t: "Identidade além da sexualidade", d: "Como separar identidade, sentimentos, comportamentos e escolhas sem reduzir um homem a apenas uma parte da sua história." },
              { n: "02", t: "O que existe por trás do silêncio", d: "Dores, rejeições, medos, conflitos espirituais e necessidades de pertencimento que nunca foram verbalizados." },
              { n: "03", t: "Pais e filhos diante do conflito", d: "Como trocar acusação e controle por escuta, responsabilidade, presença e direção." },
              { n: "04", t: "Verdade e amor", d: "Como preservar convicções, falar sobre assuntos difíceis e buscar reconciliação sem usar a verdade como arma." },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 70}>
                <div className="card-dark" style={{ height: "100%" }}>
                  <div style={{ position: "absolute", top: -10, right: 12, fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "4.5rem", fontWeight: 600, color: "rgba(224,182,79,0.10)", lineHeight: 1, pointerEvents: "none" }}>{c.n}</div>
                  <div style={{ width: 60, height: 60, margin: "0 auto 18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(closest-side, rgba(224,182,79,0.18), transparent)", border: "1px solid var(--line-2)" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.1rem", color: "var(--gold-l)" }}>{c.n}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#fff", marginBottom: 10 }}>{c.t}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.55 }}>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} style={{ textAlign: "center", marginTop: 56 }}>
            <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", color: "var(--gold-l)", maxWidth: 640, margin: "0 auto", lineHeight: 1.4 }}>
              "O comportamento pode iniciar uma discussão. Mas é o coração que precisa ser alcançado."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* OFERTA — pergaminho */}
      <section id="inscricao" className="parch-section" style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 26px" }}>
          <Reveal style={{ textAlign: "center" }}>
            <div className="deco"><i /><i /></div>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: ".72rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--gold-ink)", display: "block", marginBottom: 12 }}>Sua participação</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--ink-d)", maxWidth: 600, margin: "0 auto 40px" }}>
              Dois dias podem iniciar uma conversa que sua família vem adiando há anos.
            </h2>

            <div style={{ background: "linear-gradient(165deg, #0c1a11, #08110b)", border: "1px solid rgba(224,182,79,0.35)", borderRadius: 20, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
              <div style={{ padding: "40px 40px 32px", borderBottom: "1px solid var(--line)" }}>
                <Kicker>Imersão Online e ao Vivo</Kicker>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#fff", marginTop: 14 }}>De Frente com a Homossexualidade</h3>
                <p style={{ color: "var(--muted)", marginTop: 6, fontSize: ".9rem" }}>2 Dias de Transformação, Identidade e Reconstrução Familiar</p>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 16 }}>
                  {["📅 04 e 05 de Julho", "⏰ 13h às 19h", "💻 Online ao vivo"].map(t => (
                    <span key={t} className="chip" style={{ fontSize: ".82rem" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: "40px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32, alignItems: "center" }} className="oferta-grid">
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {["2 Dias de conteúdo ao vivo", "Princípios sobre identidade e pertencimento", "Direcionamentos para pais, mães e filhos", "Ferramentas para comunicação familiar", "Reflexões bíblicas", "Exercícios de autoavaliação", "Orientações para iniciar um processo de reconexão"].map(t => (
                    <li key={t} style={{ display: "flex", gap: 12, marginBottom: 12, fontSize: ".9rem", color: "#e9e2d2", lineHeight: 1.4 }}>
                      <span style={{ marginTop: 5, width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, display: "block" }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <div style={{ textAlign: "center", background: "rgba(224,182,79,0.06)", border: "1px solid var(--line)", borderRadius: 14, padding: "32px 24px" }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: ".7rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 4 }}>Investimento</p>
                  <p style={{ color: "var(--muted)", textDecoration: "line-through", fontSize: ".9rem" }}>De R$ 97,00</p>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 600, color: "var(--gold-l)", lineHeight: 1.1 }}>
                    R$ 37<span style={{ fontSize: "1.8rem" }}>,00</span>
                  </div>
                  <CTAButton fullWidth>Garantir minha vaga</CTAButton>
                  <p style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 12 }}>Para pais, mães ou filhos que vivem esse conflito.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PIERRY */}
      <section style={{ padding: "96px 0", background: `radial-gradient(70% 55% at 25% 42%, rgba(22,51,32,0.5), transparent 70%), linear-gradient(180deg, var(--bg-deep), #091410 45%, var(--bg-deep))` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 26px", display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 60, alignItems: "center" }} className="pierry-grid">
          <Reveal>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: "-8%", background: "radial-gradient(closest-side, rgba(224,182,79,0.18), transparent)", filter: "blur(16px)", borderRadius: "50%" }} />
              <img src={pierryUrl} alt="Pierry Rodrigues" style={{
                position: "relative", zIndex: 1, width: "100%", maxWidth: 400, borderRadius: 16,
                border: "1px solid var(--line)",
                boxShadow: "0 40px 70px rgba(0,0,0,0.55)",
                maskImage: "linear-gradient(180deg, #000 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, #000 75%, transparent 100%)",
              }} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Kicker>Quem conduz</Kicker>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", marginTop: 16, marginBottom: 24 }}>Quem é Pierry Rodrigues?</h2>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.35rem", color: "var(--gold-l)", lineHeight: 1.4, marginBottom: 24 }}>
              "Seu compromisso não é com julgamentos. Seu compromisso é com a verdade, a restauração e a esperança."
            </div>
            {[
              "Pierry Rodrigues dedica sua vida a ajudar pessoas e famílias a compreender questões profundas de identidade, pertencimento e restauração.",
              "Ao longo dos anos, acompanhou histórias de transformação familiar, reconexão entre pais e filhos e processos de restauração emocional e espiritual.",
              "Sua abordagem une princípios bíblicos, comportamento humano e relacionamentos familiares com experiências práticas.",
            ].map((p, i) => (
              <p key={i} style={{ color: "var(--muted)", fontSize: ".98rem", lineHeight: 1.7, marginBottom: 14 }}>{p}</p>
            ))}
            <div style={{ marginTop: 32 }}>
              <CTAButton>Quero participar da imersão</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 26px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="deco"><i /><i /></div>
            <Kicker>Dúvidas</Kicker>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginTop: 16 }}>Perguntas frequentes</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 30}>
                <details style={{ background: "linear-gradient(180deg, #132216aa, #0a140d66)", border: "1px solid var(--line)", borderRadius: 12, padding: "18px 22px" }}>
                  <summary style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: ".95rem", color: "var(--ink)" }}>
                    {f.q}
                    <span style={{ color: "var(--gold)", fontSize: "1.4rem", flexShrink: 0, transition: "transform .2s" }}>+</span>
                  </summary>
                  <p style={{ marginTop: 14, fontSize: ".9rem", lineHeight: 1.7, color: "var(--muted)" }}>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--bg-deep)", padding: "40px 26px", textAlign: "center", borderTop: "1px solid var(--line)" }}>
        <div style={{ marginBottom: 16 }}>
          <CTAButton>Quero garantir minha vaga — R$ 37,00</CTAButton>
        </div>
        <p style={{ fontSize: ".78rem", color: "var(--muted)" }}>© {new Date().getFullYear()} De Frente com a Homossexualidade — Imersão Online.</p>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div style={{
        position: "fixed", inset: "auto 0 0 0", zIndex: 50,
        background: "rgba(8,17,11,0.95)",
        borderTop: "1px solid var(--line)",
        padding: "12px 16px",
        backdropFilter: "blur(12px)",
        transition: "transform .3s",
        transform: scrolled ? "translateY(0)" : "translateY(100%)",
      }} className="mobile-sticky">
        <CTAButton fullWidth>Quero garantir minha vaga — R$ 37,00</CTAButton>
      </div>

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid-desktop { grid-template-columns: 1fr !important; }
          .hero-grid-desktop > div:first-child { display: none; }
          .hero-mobile-only { display: flex !important; flex-direction: column; align-items: center; }
          .para-quem-grid { grid-template-columns: 1fr !important; }
          .content-grid { grid-template-columns: 1fr 1fr !important; }
          .oferta-grid { grid-template-columns: 1fr !important; }
          .pierry-grid { grid-template-columns: 1fr !important; }
          .mobile-sticky { display: block; }
        }
        @media (min-width: 769px) {
          .hero-mobile-only { display: none !important; }
          .mobile-sticky { display: none; }
        }
        details[open] > summary span { transform: rotate(45deg); display: inline-block; }
      `}</style>
    </div>
  );
}

const faqs = [
  { q: "A imersão é somente para pais?", a: "Não. Ela foi preparada para pais e mães, mas também para filhos que vivem conflitos relacionados à homossexualidade, identidade, fé e relacionamento familiar." },
  { q: "Mulheres homossexuais podem participar?", a: "Sim, esse conteúdo foi desenvolvido para homens e para mulheres." },
  { q: "Preciso participar com meus pais ou com meu filho?", a: "Não. Cada pessoa pode participar individualmente. Caso pais e filho desejem participar juntos, também será possível." },
  { q: "A imersão promete mudar a orientação sexual?", a: "Não. A imersão não apresenta promessa de mudança de orientação sexual. O trabalho está concentrado em identidade, história pessoal, responsabilidade, espiritualidade, comunicação e restauração familiar." },
  { q: "A imersão substitui terapia?", a: "Não. A imersão tem caráter educacional e espiritual e não substitui acompanhamento médico ou psicológico." },
  { q: "Será um ambiente cristão?", a: "Sim. A imersão será fundamentada em princípios bíblicos, apresentados com verdade, responsabilidade, respeito e amor." },
  { q: "Qual é o valor?", a: "O ingresso custa R$ 37,00." },
  { q: "Quando acontecerá?", a: "Nos dias 04 e 05 de Julho, das 13h às 19h, em formato online e ao vivo." },
];
