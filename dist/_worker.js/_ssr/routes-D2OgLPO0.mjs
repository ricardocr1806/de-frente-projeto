import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as pierry_new_default } from "./pierry-new-CTsoqGs2.mjs";
import { a as Shield, c as MessageCircle, d as Clock, f as Check, h as ArrowRight, l as Heart, m as BookOpen, n as Wifi, o as Plus, p as Calendar, r as Users, s as Minus, u as Compass } from "../_libs/lucide-react.mjs";
import { n as captureUtms, r as trackLp2, t as LeadModal } from "./LeadModal-BgT66VJC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2OgLPO0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CTA_PRIMARY = "Quero participar da imersão";
var CTA_SECONDARY = "Garantir meu ingresso";
function fbq(...args) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...args);
}
function LandingPage() {
	const [showModal, setShowModal] = (0, import_react.useState)(false);
	function openModal(e) {
		e.preventDefault();
		setShowModal(true);
	}
	(0, import_react.useEffect)(() => {
		captureUtms();
		trackLp2({ data: { event: "page_view" } }).catch(() => {});
		fbq("track", "ViewContent", {
			content_name: "De Frente com a Homossexualidade — Imersão para Pais",
			content_category: "Imersão Online",
			value: 19.9,
			currency: "BRL"
		});
		const depthsFired = /* @__PURE__ */ new Set();
		const onScroll = () => {
			const pct = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
			[
				25,
				50,
				75
			].forEach((depth) => {
				if (pct >= depth && !depthsFired.has(depth)) {
					depthsFired.add(depth);
					fbq("trackCustom", "ScrollDepth", { depth: `${depth}%` });
				}
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		const timers = [
			setTimeout(() => fbq("trackCustom", "TimeOnPage", { seconds: 30 }), 3e4),
			setTimeout(() => fbq("trackCustom", "TimeOnPage", { seconds: 60 }), 6e4),
			setTimeout(() => fbq("trackCustom", "TimeOnPage", { seconds: 120 }), 12e4)
		];
		return () => {
			window.removeEventListener("scroll", onScroll);
			timers.forEach(clearTimeout);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			showModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadModal, { onClose: () => setShowModal(false) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { openModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { openModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForYou, { openModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modules, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promise$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, { openModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Header({ openModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-5 py-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold font-display text-base leading-tight tracking-tight",
					children: "De Frente com a Homossexualidade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Imersão para Pais"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#",
				onClick: openModal,
				className: "inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-gold text-ink hover:opacity-90 transition",
				children: ["Garantir vaga ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
			})]
		})
	});
}
function Hero({ openModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-40 pointer-events-none",
				style: { background: "radial-gradient(ellipse at 80% 30%, oklch(0.78 0.13 70 / 0.25), transparent 60%), radial-gradient(ellipse at 10% 80%, oklch(0.45 0.08 240 / 0.4), transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden relative h-[82vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pierry_new_default,
						alt: "Pierry Rodrigues",
						className: "absolute inset-0 w-full h-full object-cover object-top",
						loading: "eager",
						decoding: "async"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-0 left-0 right-0 px-5 pb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-wider mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-gold animate-pulse" }), "Imersão exclusiva para pais"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-[1.9rem] leading-[1.1] text-white mb-2",
								children: [
									"Seu filho se declarou",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "homossexual"
									}),
									". E agora?"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 text-xs text-white/70 mb-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅 13 a 16 de julho" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏰ às 20h" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📱 Online ao vivo" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://pay.assiny.com.br/1d926e/node/3fZr7o",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: openModal,
								className: "flex items-center justify-center gap-2 w-full py-4 rounded-full bg-gold text-ink font-bold text-base",
								children: [
									CTA_PRIMARY,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-center text-xs text-white/50 mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white/80",
									children: "R$ 19,90"
								}), " · ingresso único"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden lg:grid relative max-w-7xl mx-auto px-6 pt-20 pb-32 lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs uppercase tracking-[0.2em] mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-gold animate-pulse" }), "Imersão exclusiva para pais de filhos homossexuais"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl xl:text-6xl leading-[1.05] text-balance",
							children: [
								"Seu filho se declarou",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "homossexual"
								}),
								".",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"E agora?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed",
							children: "Uma imersão de 2 dias para pais que querem entender o que está acontecendo, reconstruir a comunicação e se aproximar sem perder o filho."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-base text-foreground/80 max-w-2xl leading-relaxed border-l-2 border-gold/50 pl-5",
							children: [
								"Existe um caminho entre a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "rejeição" }),
								" e a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "permissividade" }),
								". Um caminho de verdade, presença, responsabilidade e amor."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-row gap-4 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://pay.assiny.com.br/1d926e/node/3fZr7o",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: openModal,
								className: "group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-semibold shadow-gold hover:scale-[1.02] transition-transform",
								children: [CTA_PRIMARY, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "R$ 19,90"
								}), " · ingresso único"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid grid-cols-3 gap-6 max-w-lg text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Calendar,
									label: "13 a 16 de julho"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Clock,
									label: "às 20h"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Wifi,
									label: "Online · ao vivo"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/30 via-transparent to-transparent blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant border border-border/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: pierry_new_default,
									alt: "Pierry Rodrigues — Imersão para Pais",
									className: "w-full h-full object-cover",
									loading: "eager",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 left-6 right-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-gold mb-2",
										children: "Mentor"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl text-cream",
										children: "Uma conversa franca, madura e necessária."
									})]
								})
							]
						})]
					})
				})]
			})
		]
	});
}
function InfoItem({ icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground/90 font-medium",
			children: label
		})]
	});
}
function Bridge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 lg:py-32 border-t border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.25em] text-gold mb-6",
					children: "O momento"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance max-w-3xl",
					children: ["Talvez você esteja tentando salvar seu filho,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: " mas esteja perdendo o relacionamento."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed",
					children: "Muitos pais chegam a esse momento com as mesmas perguntas em silêncio:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid sm:grid-cols-2 gap-4",
					children: [
						"Onde foi que eu errei?",
						"Será que fui ausente?",
						"Como posso amar sem concordar?",
						"Como falar a verdade sem afastá-lo?",
						"O que faço quando ele não quer me ouvir?",
						"Ainda existe um caminho de volta para nós?"
					].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-start gap-3 p-5 rounded-lg bg-card border border-border/60 hover:border-gold/40 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold font-display text-xl leading-none mt-0.5",
							children: "\""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/90 leading-snug",
							children: q
						})]
					}, q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-foreground/85",
							children: "Alguns pais escolhem o confronto. Outros, o silêncio. Alguns tentam controlar. Outros fingem que nada está acontecendo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-foreground/85",
							children: "Mas nenhum desses extremos, sozinho, produz restauração."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xl font-display italic text-gold-soft leading-relaxed text-balance",
							children: "Seu filho pode não estar rejeitando apenas o que você fala. Ele pode estar reagindo à forma como se sente quando você fala."
						})
					]
				})
			]
		})
	});
}
function ForYou({ openModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 lg:py-32 bg-secondary/30 border-y border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.25em] text-gold mb-6",
						children: "Para quem é"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance",
						children: "Esta imersão é para você que…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground leading-relaxed",
						children: "Talvez seu filho não precise de um pai ou de uma mãe com todas as respostas. Talvez ele precise de pais presentes, maduros, conscientes e dispostos a reconstruir a ponte."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lg:col-span-7 space-y-3",
				children: [
					"Ama seu filho, mas sente que está perdendo a conexão",
					"Não sabe como se posicionar sem parecer agressivo",
					"Sente culpa, medo, vergonha ou sensação de fracasso",
					"Não consegue conversar sem que tudo vire discussão",
					"Percebe que o filho se fechou emocionalmente",
					"Deseja preservar suas convicções",
					"Não quer usar a Bíblia como arma",
					"Quer escutar sem abrir mão da responsabilidade",
					"Deseja entender o coração do filho",
					"Quer reconstruir a confiança e a paz dentro de casa"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-4 p-4 rounded-md hover:bg-card/60 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-gold" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground/90 leading-relaxed",
						children: item
					})]
				}, item))
			})]
		})
	});
}
function Modules() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.25em] text-gold mb-6",
					children: "O conteúdo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance",
					children: [
						"O que vamos trabalhar nesses",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: " dois dias"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid md:grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50",
				children: [
					{
						icon: Heart,
						title: "O coração antes do comportamento",
						body: "Comportamento é só a parte visível. Por trás existem medos, carências, vergonha, conflitos de fé e feridas não verbalizadas. Você não conseguirá alcançar aquilo que insiste em atacar."
					},
					{
						icon: Compass,
						title: "Como a identidade de um filho é formada",
						body: "Antes de saber o que faz, ele precisa responder: quem eu sou? Sou amado? Tenho valor? Pertenço? A qualidade do vínculo familiar molda profundamente essa resposta."
					},
					{
						icon: Users,
						title: "Pais feridos também reagem a partir das próprias dores",
						body: "O comportamento do filho ativa feridas antigas dentro de você. Antes de perguntar 'o que há de errado com meu filho?', pergunte: o que essa situação está revelando em mim?"
					},
					{
						icon: Shield,
						title: "Como corrigir sem perder o filho",
						body: "A acusação ataca a identidade. A verdade protege a identidade enquanto chama à responsabilidade. A correção precisa nascer da conexão, não da raiva."
					},
					{
						icon: MessageCircle,
						title: "Amor não é aprovação de tudo",
						body: "Validar não é concordar. É comunicar: eu vejo você, você importa, você continua pertencendo. O amor não ignora o erro — mas também não transforma o erro na identidade da pessoa."
					},
					{
						icon: BookOpen,
						title: "Reconstruindo a comunicação dentro de casa",
						body: "Trocar acusação por conversa, reação por escuta, controle por presença, silêncio por diálogo, distância por reconexão."
					}
				].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative bg-background p-8 lg:p-10 hover:bg-card transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-4 mb-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs text-gold tracking-widest",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border/60" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "w-5 h-5 text-gold/70" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl mb-4 leading-snug text-balance",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed text-pretty",
							children: m.body
						})
					]
				}, m.title))
			})]
		})
	});
}
function NotFor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 lg:py-32 bg-secondary/30 border-y border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl text-balance",
				children: ["Honestidade sobre o que esta imersão é", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: " — e o que não é."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 rounded-xl border border-border/60 bg-card/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.25em] text-destructive/80 mb-5",
						children: "O que esta imersão não é"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							"Culpar os pais",
							"Humilhar os filhos",
							"Prometer mudança de orientação sexual",
							"Oferecer uma causa única para a homossexualidade",
							"Promover discussões ideológicas",
							"Substituir acompanhamento psicológico"
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-foreground/85",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-4 h-4 mt-1 text-destructive/70 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x })]
						}, x))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 rounded-xl border border-gold/30 bg-gold/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.25em] text-gold mb-5",
						children: "O que ela foi criada para fazer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							"Restaurar o diálogo",
							"Fortalecer os vínculos",
							"Trabalhar presença parental",
							"Ensinar comunicação madura",
							"Proteger a dignidade do filho",
							"Iniciar reconstrução familiar"
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-foreground/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4 mt-1 text-gold flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x })]
						}, x))
					})]
				})]
			})]
		})
	});
}
function Promise$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.25em] text-gold mb-6",
					children: "A promessa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-balance",
					children: [
						"Seu filho é ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "maior"
						}),
						" do que o momento que está vivendo."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-4 text-lg text-foreground/85 leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maior do que uma escolha. Maior do que uma discussão." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maior do que o pior dia da vida dele." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maior do que o nome que outras pessoas colocaram sobre ele." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-16 relative p-10 rounded-2xl border border-gold/30 bg-card/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-4 left-10 px-3 py-1 bg-background text-gold text-xs uppercase tracking-[0.2em]",
							children: "Malaquias 4:6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl lg:text-3xl italic leading-snug text-balance",
							children: "\"Ele fará voltar o coração dos pais aos filhos e o coração dos filhos aos pais.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground",
							children: "O texto começa pelos pais. A restauração começa quando o coração dos pais volta primeiro."
						})
					]
				})
			]
		})
	});
}
function FinalCTA({ openModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inscricao",
		className: "relative py-24 lg:py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 pointer-events-none",
			style: { background: "radial-gradient(ellipse at center, oklch(0.78 0.13 70 / 0.18), transparent 65%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative max-w-4xl mx-auto px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-gold/30 bg-card/60 backdrop-blur p-10 lg:p-16 text-center shadow-elegant",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-gold mb-6",
						children: "De Frente com a Homossexualidade"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance",
						children: [
							"Dois dias para iniciar uma",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "nova conversa"
							}),
							" dentro da sua família."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailCard, {
								icon: Calendar,
								label: "Quando",
								value: "13 a 16 de julho"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailCard, {
								icon: Clock,
								label: "Horário",
								value: "às 20h"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailCard, {
								icon: Wifi,
								label: "Formato",
								value: "Online · ao vivo"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground mb-2",
							children: "Ingresso"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl lg:text-6xl text-gold",
							children: "R$ 19,90"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://pay.assiny.com.br/1d926e/node/3fZr7o",
						target: "_blank",
						rel: "noopener noreferrer",
						"data-cta": "main",
						onClick: openModal,
						className: "mt-10 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gold text-ink font-semibold text-lg shadow-gold hover:scale-[1.02] transition-transform",
						children: [CTA_SECONDARY, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm text-muted-foreground max-w-md mx-auto italic",
						children: "Você não precisa ter todas as respostas para começar a reconstruir a relação."
					})
				]
			})
		})]
	});
}
function DetailCard({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-5 rounded-xl border border-border/60 bg-background/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-gold mx-auto mb-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-wider text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 font-medium text-foreground",
				children: value
			})
		]
	});
}
function FAQ() {
	const faqs = [
		{
			q: "A imersão é apenas para pais?",
			a: "A página foi preparada especialmente para pais e mães de filhos homens que vivem conflitos relacionados à homossexualidade, fé, identidade e família."
		},
		{
			q: "Meu filho precisa participar comigo?",
			a: "Não. Você pode participar sozinho. O conteúdo foi desenvolvido para ajudá-lo a rever sua postura, compreender a dinâmica familiar e iniciar mudanças na forma de se comunicar."
		},
		{
			q: "A imersão vai ensinar como mudar meu filho?",
			a: "Não. A proposta não é controlar ou produzir mudança forçada. O foco está em identidade, comunicação, responsabilidade, posicionamento e restauração familiar."
		},
		{
			q: "Promete mudança de orientação sexual?",
			a: "Não. Não existe promessa de mudança de orientação sexual."
		},
		{
			q: "Vou ser culpado pelo que meu filho vive?",
			a: "Não. O objetivo não é encontrar culpados. É ajudar os pais a reconhecerem aquilo que podem transformar na própria postura e no relacionamento."
		},
		{
			q: "Preciso abandonar minhas convicções?",
			a: "Não. Amor e verdade caminham juntos. É possível preservar convicções sem usar a verdade para humilhar, ameaçar ou romper o relacionamento."
		},
		{
			q: "O conteúdo será cristão?",
			a: "Sim. Será fundamentado em princípios bíblicos, comunicação familiar, comportamento humano e reflexão emocional."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 lg:py-32 border-t border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.25em] text-gold mb-6",
					children: "Perguntas frequentes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12 text-balance",
					children: "O que você precisa saber antes de entrar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border/60 border-y border-border/60",
					children: faqs.map((f, i) => {
						const isOpen = open === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : i),
							className: "w-full flex items-center justify-between gap-6 py-6 text-left group",
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg lg:text-xl text-foreground group-hover:text-gold transition-colors text-balance",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-transform ${isOpen ? "rotate-45 bg-gold border-gold" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: `w-4 h-4 ${isOpen ? "text-ink" : "text-gold"}` })
							})]
						}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-6 pr-12 text-muted-foreground leading-relaxed",
							children: f.a
						})] }, f.q);
					})
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/40 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold font-display",
				children: "De Frente"
			}), " · Imersão para Pais"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" — Todos os direitos reservados."
				]
			})]
		})
	});
}
//#endregion
export { LandingPage as component };
