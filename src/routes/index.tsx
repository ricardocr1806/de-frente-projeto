import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { trackLp01 } from "@/lib/analytics";
import { captureUtms, appendUtmsToUrl } from "@/lib/utm";
import antesDepoisUrl from "@/assets/antes-depois.png";
import heroMobileUrl from "@/assets/hero-mobile.png";
import pierryUrl from "@/assets/pierry-rodrigues.jpg";
import Waves from "@/components/ui/Waves";
import SpotlightCard from "@/components/ui/SpotlightCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Frente com a Homossexualidade — Imersão Online | 04 e 05 de Julho" },
      { name: "description", content: "Imersão online e ao vivo de 2 dias sobre identidade, fé e reconstrução familiar. Para homens em conflito e para pais. Ingresso R$ 37,00." },
      { property: "og:title", content: "De Frente com a Homossexualidade — Imersão Online" },
      { property: "og:description", content: "2 dias de transformação, identidade e reconstrução familiar. 04 e 05 de Julho, das 13h às 19h. R$ 37,00." },
      { property: "og:type", content: "website" },
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

/* Hook de scroll reveal */
function useReveal(threshold = 0.1) {
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
      transition: `opacity 0.8s ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 0.8s ${delay}ms cubic-bezier(0.16,1,0.3,1), filter 0.8s ${delay}ms ease`,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <div className="section-label">{children}</div>;
}

function CTA({ children, variant = "gold" }: { children: string; variant?: "primary" | "gold" }) {
  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
      className={`inline-flex h-14 items-center justify-center rounded-xl px-8 text-base font-bold tracking-wide ${variant === "primary" ? "btn-primary" : "btn-gold"}`}>
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
      setTimeout(() => { if ((window as any).fbq) (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 120 }); }, 120000),
    ];
    return () => { window.removeEventListener("scroll", onScroll); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div className="min-h-screen bg-background pb-28 md:pb-0">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/8 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div>
            <span className="font-display font-semibold text-[var(--deep)] text-base leading-tight block">De Frente com a Homossexualidade</span>
            <span className="text-xs text-[var(--muted-foreground)]">Imersão Online — 04 e 05 de Julho</span>
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
            className="btn-gold inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-bold">
            Garantir vaga
          </a>
        </div>
      </nav>

      {/* HERO — MOBILE */}
      <div className="md:hidden">
        <div className="relative bg-[var(--ink)] overflow-hidden">
          <Waves lineColor="rgba(166,123,20,0.15)" backgroundColor="transparent" waveSpeedX={0.007} waveSpeedY={0.004} waveAmpX={35} waveAmpY={18} xGap={16} yGap={38} />
          <div className="relative z-10">
            <div className="relative">
              <img src={heroMobileUrl} alt="Pierry Rodrigues" className="w-full block" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--ink)]" />
            </div>
            <div className="px-6 pt-2 pb-10 text-center">
              <div className="section-label justify-center" style={{color:'#C49B30',marginBottom:'0.75rem'}}>
                Imersão Online e ao Vivo
              </div>
              <h1 className="font-display text-[1.85rem] leading-tight text-white mb-4">
                De Frente com a <span style={{color:'#C49B30',fontStyle:'italic'}}>Homossexualidade</span>
              </h1>
              <div className="mb-5 border-l-[3px] border-[#A67B14] pl-4 text-left">
                <p className="text-sm text-white/85 leading-relaxed">
                  Descubra <span style={{color:'#C49B30',fontWeight:600}}>o que está por trás dos conflitos de identidade</span>, dos afastamentos familiares e encontre um caminho real de restauração para você e para quem você ama.
                </p>
              </div>
              <div className="flex flex-col items-center mb-6">
                <span className="text-sm text-white/45 line-through">De R$ 97,00</span>
                <span className="text-2xl font-bold" style={{color:'#C49B30'}}>Por apenas R$ 37,00</span>
                <span className="text-sm text-white/65 mt-1">Online · 04 e 05 de Julho · 13h às 19h</span>
              </div>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
                className="btn-gold inline-flex h-14 w-full items-center justify-center rounded-xl text-base font-bold uppercase tracking-wide">
                Quero garantir minha vaga
              </a>
            </div>
          </div>
        </div>
        <div className="gold-line" />
      </div>

      {/* HERO — DESKTOP */}
      <header className="hidden md:block relative overflow-hidden" style={{background:'var(--ink)',minHeight:'92vh'}}>
        <div className="absolute inset-0 z-0">
          <Waves lineColor="rgba(166,123,20,0.12)" backgroundColor="transparent" waveSpeedX={0.007} waveSpeedY={0.004} waveAmpX={45} waveAmpY={22} xGap={20} yGap={45} />
        </div>
        <div className="absolute inset-0 z-0" style={{background:'radial-gradient(60% 70% at 30% 50%, rgba(13,27,62,0.6), transparent 70%)'}} />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-8 py-16 grid-cols-[1.1fr_0.9fr] items-center min-h-[92vh]">
          <div style={{animation:'fadeUp 1s 0.1s both'}}>
            <div className="section-label" style={{color:'#C49B30',marginBottom:'1.5rem'}}>
              Imersão Online e ao Vivo — 04 e 05 de Julho
            </div>
            <h1 className="font-display text-5xl xl:text-6xl leading-[1.05] text-white mb-6" style={{textShadow:'0 2px 40px rgba(0,0,0,0.5)'}}>
              De Frente com a{" "}
              <em className="not-italic" style={{color:'#C49B30',fontStyle:'italic'}}>Homossexualidade</em>
            </h1>
            <div className="border-l-[3px] border-[#A67B14] pl-5 mb-8 max-w-lg">
              <p className="text-xl text-white/85 leading-relaxed">
                Descubra <span style={{color:'#C49B30',fontWeight:600}}>o que está por trás dos conflitos de identidade</span> e dos afastamentos familiares — e encontre um caminho real de restauração.
              </p>
            </div>
            <div className="flex flex-col mb-8">
              <span className="text-sm text-white/40 line-through">De R$ 97,00</span>
              <span className="font-display text-4xl font-semibold" style={{color:'#C49B30'}}>R$ 37,00</span>
              <span className="text-sm text-white/60 mt-1">Online · 04 e 05 de Julho · Das 13h às 19h</span>
            </div>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
              className="btn-gold inline-flex h-14 items-center gap-2 rounded-xl px-8 text-base font-bold uppercase tracking-wide">
              Quero garantir minha vaga →
            </a>
            <div className="mt-10 flex gap-10">
              {[{v:'+240 mil',l:'seguidores'},{v:'Milhares',l:'de famílias impactadas'}].map(i=>(
                <div key={i.l}>
                  <div className="font-display text-2xl font-semibold text-white">{i.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50">{i.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{animation:'fadeUp 1.1s 0.25s both'}}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-3xl blur-3xl" style={{background:'radial-gradient(circle, rgba(166,123,20,0.25), transparent 70%)'}} />
              <div className="relative rounded-2xl overflow-hidden border border-white/10" style={{boxShadow:'0 30px 80px rgba(0,0,0,0.5)'}}>
                <img src={antesDepoisUrl} alt="De Frente com a Homossexualidade" className="w-full block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        <div className="gold-line relative z-10" />
      </header>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Reveal className="text-center mb-12">
          <SectionLabel>Para quem é</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-3xl md:text-4xl">
            Esta imersão é para vocês que se amam, mas já não sabem como conversar.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Para filhos que vivem esse conflito',
              sub: 'Você não é o seu rótulo.',
              items: [
                'Você sente que sua família só consegue enxergar sua sexualidade.',
                'Você vive conflitos entre seus sentimentos, sua fé e aquilo que acredita.',
                'Você tem medo de falar e ser rejeitado.',
                'Você deseja compreender melhor sua história emocional e espiritual.',
                'Você está cansado de ser tratado como um problema.',
                'Você quer ser ouvido sem humilhação ou acusação.',
              ],
              note: 'Aqui, você não será reduzido a um rótulo. Você será convidado a olhar para sua história com honestidade e responsabilidade.'
            },
            {
              title: 'Para pais e mães',
              sub: 'O amor que não sabe mais o que dizer.',
              items: [
                'Você ama seu filho, mas não sabe o que falar.',
                'Você tem medo de que qualquer posicionamento produza afastamento.',
                'Você sente culpa e se pergunta onde errou.',
                'As conversas terminam em discussão, silêncio ou defesa.',
                'Você deseja preservar suas convicções sem perder seu filho.',
                'Você quer reconstruir a confiança dentro da família.',
              ],
              note: 'Você aprenderá que conexão não significa concordância com tudo. Significa construir um relacionamento seguro o suficiente para que a verdade possa ser ouvida.'
            }
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="card-soft p-8 h-full">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{color:'#A67B14'}}>{card.title}</p>
                <h3 className="text-2xl mb-5">{card.sub}</h3>
                <ul className="space-y-3 mb-6">
                  {card.items.map(t => (
                    <li key={t} className="flex gap-3 text-[15px] text-[var(--foreground)]/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--deep)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl p-4 text-sm leading-relaxed" style={{background:'var(--secondary)',color:'var(--secondary-foreground)'}}>{card.note}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <CTA>Quero garantir minha vaga</CTA>
        </Reveal>
      </section>

      {/* CONTEÚDO — SpotlightCard do React Bits */}
      <section style={{background:'var(--ink)'}} className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="text-center mb-14">
            <SectionLabel children="Conteúdo" />
            <h2 className="text-3xl md:text-4xl" style={{color:'white'}}>O que vamos trabalhar durante esses dois dias?</h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              { n:'01', t:'Identidade além da sexualidade', d:'Como separar identidade, sentimentos, comportamentos e escolhas sem reduzir um homem a apenas uma parte da sua história.' },
              { n:'02', t:'O que existe por trás do silêncio', d:'Dores, rejeições, medos, conflitos espirituais e necessidades de pertencimento que muitas vezes nunca foram verbalizados.' },
              { n:'03', t:'Pais e filhos diante do conflito', d:'Como trocar acusação, controle e afastamento por escuta, responsabilidade, presença e direção.' },
              { n:'04', t:'Verdade e amor', d:'Como preservar convicções, falar sobre assuntos difíceis e buscar reconciliação sem usar a verdade como arma.' },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 70}>
                <SpotlightCard className="h-full rounded-2xl border-white/10" spotlightColor="rgba(196,155,48,0.18)" style={{background:'rgba(255,255,255,0.05)'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-3xl font-semibold" style={{color:'#C49B30'}}>{c.n}</span>
                    <div className="h-px flex-1" style={{background:'rgba(255,255,255,0.1)'}} />
                  </div>
                  <h3 className="text-xl mb-3" style={{color:'white'}}>{c.t}</h3>
                  <p className="text-[15px] leading-relaxed" style={{color:'rgba(255,255,255,0.6)'}}>{c.d}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="text-center mt-14">
            <blockquote className="mx-auto max-w-2xl font-display text-2xl italic leading-snug" style={{color:'#C49B30'}}>
              "O comportamento pode iniciar uma discussão. Mas é o coração que precisa ser alcançado."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* OFERTA */}
      <section id="inscricao" className="mx-auto max-w-4xl px-4 py-24">
        <Reveal>
          <SectionLabel children="Sua participação" />
          <h2 className="mx-auto max-w-3xl text-center text-3xl md:text-4xl mb-12">
            Dois dias podem iniciar uma conversa que sua família vem adiando há anos.
          </h2>
          <div className="card-soft overflow-hidden border-[rgba(166,123,20,0.20)]">
            <div className="gold-line" />
            <div className="p-8 md:p-12" style={{background:'var(--ink)'}}>
              <p className="text-xs uppercase tracking-[0.25em] font-bold mb-1" style={{color:'#C49B30'}}>Imersão online e ao vivo</p>
              <h3 className="font-display text-3xl md:text-4xl text-white">De Frente com a Homossexualidade</h3>
              <p className="mt-1 text-sm" style={{color:'rgba(255,255,255,0.65)'}}>2 Dias de Transformação, Identidade e Reconstrução Familiar</p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm mt-3" style={{color:'rgba(255,255,255,0.8)'}}>
                <span>📅 04 e 05 de Julho</span><span>⏰ 13h às 19h</span><span>💻 Online ao vivo</span>
              </div>
            </div>
            <div className="gold-line" />
            <div className="p-8 md:p-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--deep)] mb-4">Durante a imersão você receberá:</p>
                <ul className="space-y-2.5 text-[15px]">
                  {['2 Dias de conteúdo ao vivo','Princípios sobre identidade e pertencimento','Direcionamentos para pais, mães e filhos','Ferramentas para comunicação familiar','Reflexões bíblicas','Exercícios de autoavaliação','Orientações para iniciar um processo de reconexão'].map(t => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{background:'#A67B14'}} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border p-8 text-center" style={{background:'var(--secondary)'}}>
                <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-1">Investimento</p>
                <p className="text-sm text-[var(--muted-foreground)] line-through">De R$ 97,00</p>
                <p className="font-display text-6xl font-semibold text-[var(--deep)]">R$ 37<span style={{fontSize:'2rem',color:'#A67B14'}}>,00</span></p>
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
                  className="btn-gold mt-6 flex h-14 w-full items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide">
                  Quero garantir minha vaga
                </a>
                <p className="text-xs text-[var(--muted-foreground)] mt-3">Para pais, mães ou filhos que vivem esse conflito.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PIERRY */}
      <section style={{background:'var(--secondary)'}} className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <Reveal>
              <div className="relative mx-auto w-full max-w-sm md:max-w-md">
                <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{background:'rgba(166,123,20,0.15)'}} />
                <div className="relative rounded-2xl overflow-hidden border" style={{borderColor:'rgba(166,123,20,0.25)',boxShadow:'0 30px 60px rgba(13,27,62,0.15)'}}>
                  <img src={pierryUrl} alt="Pierry Rodrigues" className="w-full block" />
                  <div className="absolute bottom-0 inset-x-0 p-5" style={{background:'linear-gradient(to top, rgba(13,27,62,0.9), transparent)'}}>
                    <div className="text-xs uppercase tracking-wider mb-1" style={{color:'#C49B30'}}>Mentor</div>
                    <div className="font-display text-lg text-white">Pierry Rodrigues</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SectionLabel children="Quem conduz" />
              <h2 className="text-3xl md:text-4xl">Quem é Pierry Rodrigues?</h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/80">
                <p>Pierry Rodrigues dedica sua vida a ajudar pessoas e famílias a compreender questões profundas de identidade, pertencimento e restauração.</p>
                <p>Ao longo dos últimos anos, tem acompanhado histórias de transformação familiar, reconexão entre pais e filhos e processos de restauração emocional e espiritual.</p>
                <p>Sua abordagem une princípios bíblicos, comportamento humano, relacionamentos familiares e experiências práticas vividas ao lado de centenas de pessoas.</p>
                <p className="font-bold text-[var(--foreground)]">Seu compromisso não é com julgamentos.</p>
                <p className="font-bold" style={{color:'var(--deep)'}}>Seu compromisso é com a verdade, a restauração e a esperança.</p>
              </div>
              <div className="mt-8">
                <CTA>Quero participar da imersão</CTA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-24">
        <Reveal className="text-center mb-12">
          <SectionLabel children="Dúvidas" />
          <h2 className="text-3xl md:text-4xl">Perguntas frequentes</h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 35}>
              <details className="group card-soft px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-[var(--deep)]">
                  {f.q}
                  <span className="text-2xl transition-transform group-open:rotate-45" style={{color:'#A67B14'}}>+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)]/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:'var(--ink)'}} className="px-4 py-10 text-sm text-white/55">
        <div className="gold-line mb-8 opacity-30" />
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} De Frente com a Homossexualidade — Imersão Online.</p>
          <a href="/privacidade" className="underline-offset-4 hover:underline">Política de Privacidade</a>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackCheckout} data-cta="main"
          className="btn-gold flex h-12 items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide">
          Quero garantir minha vaga — R$ 37,00
        </a>
      </div>
    </div>
  );
}

const faqs = [
  { q:'A imersão é somente para pais?', a:'Não. Ela foi preparada para pais e mães, mas também para filhos que vivem conflitos relacionados à homossexualidade, identidade, fé e relacionamento familiar.' },
  { q:'Mulheres homossexuais podem participar?', a:'Sim, esse conteúdo foi desenvolvido para homens e para mulheres.' },
  { q:'Preciso participar com meus pais ou com meu filho?', a:'Não. Cada pessoa pode participar individualmente. Caso pais e filho desejem participar juntos, também será possível.' },
  { q:'A imersão promete mudar a orientação sexual?', a:'Não. A imersão não apresenta promessa de mudança de orientação sexual. O trabalho está concentrado em identidade, história pessoal, responsabilidade, espiritualidade, comunicação e restauração familiar.' },
  { q:'A imersão substitui terapia?', a:'Não. A imersão tem caráter educacional e espiritual e não substitui acompanhamento médico ou psicológico.' },
  { q:'Será um ambiente cristão?', a:'Sim. A imersão será fundamentada em princípios bíblicos, apresentados com verdade, responsabilidade, respeito e amor.' },
  { q:'Qual é o valor?', a:'O ingresso custa R$ 37,00.' },
  { q:'Quando acontecerá?', a:'Nos dias 04 e 05 de Julho, das 13h às 19h, em formato online e ao vivo.' },
];
