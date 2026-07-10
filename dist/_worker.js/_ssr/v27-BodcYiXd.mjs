import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as speaker_opt_default } from "./speaker-opt-C3KrRL-K.mjs";
import { a as Shield, c as MessageCircle, d as Clock, f as Check, h as ArrowRight, i as Star, l as Heart, m as BookOpen, n as Wifi, o as Plus, p as Calendar, r as Users, s as Minus, u as Compass } from "../_libs/lucide-react.mjs";
import { a as captureUtms, i as Waves, n as LeadModal, o as pierry_lp2_default, r as SpotlightCard, s as trackLp2, t as BlurText } from "./BlurText-DjPYfMwF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/v27-BodcYiXd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CTA_PRIMARY = "Quero participar da imersão";
var CTA_SECONDARY = "Garantir meu ingresso agora";
function fbq(...args) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...args);
}
function useReveal(threshold = .12) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, { threshold });
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);
	return [ref, visible];
}
function Reveal({ children, delay = 0, className = "" }) {
	const [ref, visible] = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : "translateY(32px)",
			filter: visible ? "blur(0)" : "blur(6px)",
			transition: `opacity 0.8s ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 0.8s ${delay}ms cubic-bezier(0.16,1,0.3,1), filter 0.8s ${delay}ms ease`
		},
		children
	});
}
function LandingPageV27() {
	const [showModal, setShowModal] = (0, import_react.useState)(false);
	const openModal = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		setShowModal(true);
	}, []);
	(0, import_react.useEffect)(() => {
		captureUtms();
		trackLp2({ data: { event: "page_view" } }).catch(() => {});
		fbq("track", "ViewContent", {
			content_name: "De Frente com a Homossexualidade — Imersão para Pais",
			content_category: "Imersão Online",
			value: 27,
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
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			showModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadModal, {
				checkoutUrl: "https://pay.assiny.com.br/sflEGK/node/w-jH0u",
				checkoutValue: 27,
				lp: "v27",
				onClose: () => setShowModal(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { openModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { openModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
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
		className: "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/8 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-navy font-display text-base leading-tight tracking-tight font-semibold",
					children: "De Frente com a Homossexualidade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Imersão Exclusiva para Pais"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#",
				onClick: openModal,
				className: "btn-gold inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full",
				children: ["Garantir vaga ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
			})]
		})
	});
}
function Hero({ openModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[#F8F6F0] min-h-screen flex flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, {
					lineColor: "rgba(166, 123, 26, 0.12)",
					backgroundColor: "transparent",
					waveSpeedX: .008,
					waveSpeedY: .004,
					waveAmpX: 40,
					waveAmpY: 20,
					xGap: 18,
					yGap: 40
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-gradient-to-br from-[#F8F6F0]/80 via-transparent to-[#F0ECE3]/60 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden relative z-10 flex flex-col min-h-screen",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 overflow-hidden max-h-[55vh]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pierry_lp2_default,
						alt: "Pierry Rodrigues",
						className: "w-full h-full object-cover object-top",
						loading: "eager"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#F8F6F0] via-[#F8F6F0]/30 to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 px-5 pt-6 pb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "badge-gold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-gold animate-pulse" }), "Imersão exclusiva para pais"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-[2rem] leading-[1.08] text-navy mb-3",
							children: [
								"Seu filho se declarou",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-gold",
									children: "homossexual"
								}),
								". E agora?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base leading-relaxed mb-6",
							children: "Uma imersão de 2 dias para reconstruir a comunicação e se aproximar sem perder o filho."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 text-sm text-navy/70 mb-6 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅 Dias 4 e 5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏰ 13h às 19h" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📱 Online" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://pay.assiny.com.br/sflEGK/node/w-jH0u",
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: openModal,
							className: "btn-gold flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-base",
							children: [
								CTA_PRIMARY,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-sm text-muted-foreground mt-3",
							children: [
								"Apenas ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-navy",
									children: "R$ 27,00"
								}),
								" · ingresso único"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden lg:grid relative z-10 max-w-7xl mx-auto px-8 py-28 lg:grid-cols-12 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "badge-gold inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-10",
							style: { animation: "fadeUp 0.7s 0.1s both" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-gold animate-pulse" }), "Imersão exclusiva para pais de filhos homossexuais"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { animation: "fadeUp 0.9s 0.2s both" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: "Seu filho se declarou",
								className: "font-display text-5xl xl:text-6xl leading-[1.05] text-navy block",
								animateBy: "words",
								delay: 80
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: "homossexual. E agora?",
								className: "font-display text-5xl xl:text-6xl leading-[1.05] italic text-gold block mt-1",
								animateBy: "words",
								delay: 80
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed",
							style: { animation: "fadeUp 0.9s 0.5s both" },
							children: "Uma imersão de 2 dias para pais que querem entender o que está acontecendo, reconstruir a comunicação e se aproximar sem perder o filho."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 pl-5 border-l-[3px] border-gold/50 max-w-xl",
							style: { animation: "fadeUp 0.9s 0.65s both" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base text-foreground/80 leading-relaxed italic",
								children: "\"Existe um caminho entre a rejeição e a permissividade — um caminho de verdade, presença e amor.\""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-row gap-5 items-center",
							style: { animation: "fadeUp 0.9s 0.75s both" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://pay.assiny.com.br/sflEGK/node/w-jH0u",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: openModal,
								className: "btn-gold group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base",
								children: [CTA_PRIMARY, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-navy font-bold text-base",
									children: "R$ 27,00"
								}), " · ingresso único"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex gap-8 text-sm",
							style: { animation: "fadeUp 0.9s 0.85s both" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Calendar,
									label: "Dias 4 e 5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Clock,
									label: "13h às 19h"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Wifi,
									label: "Online ao vivo"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					style: { animation: "fadeUp 1s 0.35s both" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl overflow-hidden shadow-elegant border border-gold/15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: speaker_opt_default,
									alt: "Pierry Rodrigues",
									className: "w-full aspect-[3/4] object-cover",
									loading: "eager"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-0 left-0 right-0 p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mb-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase tracking-[0.25em] text-gold/80 mb-1",
											children: "Mentor"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl text-white leading-snug",
											children: "Uma conversa franca, madura e necessária."
										})
									]
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule relative z-10" })
		]
	});
}
function InfoItem({ icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-9 h-9 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 text-gold" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-navy/80 font-medium",
			children: label
		})]
	});
}
function Trust() {
	const items = [
		"Fundamentado na Bíblia",
		"Comunicação familiar",
		"Sem julgamentos",
		"Metodologia testada",
		"Pais reais, resultados reais"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy py-5 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-12 items-center whitespace-nowrap",
			children: [...items, ...items].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-white/70 text-sm font-medium inline-flex items-center gap-3 flex-shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3 h-3 text-gold fill-gold" }), item]
			}, i))
		})
	});
}
function Bridge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" }), " O momento"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance max-w-3xl text-navy",
					children: [
						"Talvez você esteja tentando salvar seu filho,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "mas esteja perdendo o relacionamento."
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed",
						children: "Muitos pais chegam a esse momento com as mesmas perguntas em silêncio:"
					})
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
					].map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-authority flex items-start gap-3 p-5 rounded-xl h-full cursor-default",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-display text-3xl leading-none mt-[-4px] flex-shrink-0 opacity-60",
								children: "\""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-navy/85 leading-snug font-medium",
								children: q
							})]
						})
					}, q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 max-w-3xl space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-foreground/80",
							children: "Alguns pais escolhem o confronto. Outros, o silêncio. Alguns tentam controlar. Outros fingem que nada está acontecendo."
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-relaxed text-foreground/80",
								children: "Mas nenhum desses extremos, sozinho, produz restauração."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 p-6 bg-[#F8F6F0] rounded-2xl border-l-4 border-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xl font-display italic text-navy leading-relaxed text-balance",
									children: [
										"Seu filho pode não estar rejeitando o que você fala. Ele pode estar reagindo à ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "forma" }),
										" como se sente quando você fala."
									]
								})
							})
						})
					]
				})
			]
		})
	});
}
function ForYou({ openModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-[#F8F6F0]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" }), " Para quem é"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance text-navy",
						children: "Esta imersão é para você que…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground leading-relaxed",
							children: "Talvez seu filho não precise de pais com todas as respostas. Talvez ele precise de pais presentes, maduros e dispostos a reconstruir a ponte."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#inscricao",
							onClick: openModal,
							className: "btn-gold mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm",
							children: ["Quero participar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lg:col-span-7 grid sm:grid-cols-2 gap-3",
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
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 45,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card-authority flex items-start gap-3 p-4 rounded-xl h-full cursor-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gold/12 border border-gold/30 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-gold" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-navy/85 leading-snug text-sm",
							children: item
						})]
					})
				}, item))
			})]
		})
	});
}
function Modules() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-navy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" }), " O conteúdo"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance text-white",
				children: [
					"O que vamos trabalhar nesses",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "dois dias"
					}),
					"."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: [
					{
						icon: Heart,
						title: "O coração antes do comportamento",
						body: "Comportamento é só a parte visível. Por trás existem medos, carências, vergonha e feridas não verbalizadas. Você não conseguirá alcançar aquilo que insiste em atacar."
					},
					{
						icon: Compass,
						title: "Como a identidade de um filho é formada",
						body: "Antes de saber o que faz, ele precisa responder: quem eu sou? Sou amado? Tenho valor? Pertenço? O vínculo familiar molda profundamente essa resposta."
					},
					{
						icon: Users,
						title: "Pais feridos reagem a partir das próprias dores",
						body: "O comportamento do filho ativa feridas suas. Antes de perguntar 'o que há de errado com ele?', pergunte: o que essa situação está revelando em mim?"
					},
					{
						icon: Shield,
						title: "Como corrigir sem perder o filho",
						body: "A acusação ataca a identidade. A verdade protege enquanto chama à responsabilidade. A correção precisa nascer da conexão, não da raiva."
					},
					{
						icon: MessageCircle,
						title: "Amor não é aprovação de tudo",
						body: "Validar não é concordar. É comunicar: eu vejo você, você importa, você continua pertencendo. O amor não transforma o erro na identidade da pessoa."
					},
					{
						icon: BookOpen,
						title: "Reconstruindo a comunicação dentro de casa",
						body: "Trocar acusação por conversa, reação por escuta, controle por presença, silêncio por diálogo, distância por reconexão."
					}
				].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
						className: "h-full bg-white/5 border-white/10 rounded-2xl",
						spotlightColor: "rgba(196, 155, 48, 0.15)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "w-5 h-5 text-gold" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs text-gold tracking-widest",
									children: String(i + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-white mb-3 leading-snug",
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 leading-relaxed text-sm",
								children: m.body
							})
						]
					})
				}, m.title))
			})]
		})
	});
}
function NotFor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl text-balance text-navy",
				children: ["Honestidade sobre o que esta imersão é", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: " — e o que não é."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 rounded-2xl border border-destructive/15 bg-destructive/3 h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-destructive/80 font-bold mb-6",
							children: "O que esta imersão não é"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3.5",
							children: [
								"Culpar os pais",
								"Humilhar os filhos",
								"Prometer mudança de orientação sexual",
								"Oferecer uma causa única",
								"Promover discussões ideológicas",
								"Substituir acompanhamento psicológico"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-navy/75",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-4 h-4 mt-0.5 text-destructive/60 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x })]
							}, x))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 rounded-2xl border border-gold/25 bg-gold/5 h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-gold font-bold mb-6",
							children: "O que ela foi criada para fazer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3.5",
							children: [
								"Restaurar o diálogo",
								"Fortalecer os vínculos",
								"Trabalhar presença parental",
								"Ensinar comunicação madura",
								"Proteger a dignidade do filho",
								"Iniciar reconstrução familiar"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-navy/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 mt-0.5 text-gold flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: x
								})]
							}, x))
						})]
					})
				})]
			})]
		})
	});
}
function Promise$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-[#F8F6F0]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" }),
						" A promessa ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl sm:text-4xl lg:text-6xl leading-[1.1] text-balance text-navy",
					children: [
						"Seu filho é ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "maior"
						}),
						" do que o momento que está vivendo."
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-3 text-lg text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maior do que uma escolha. Maior do que uma discussão." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maior do que o pior dia da vida dele." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maior do que o nome que outras pessoas colocaram sobre ele." })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 240,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-14 relative p-10 lg:p-12 rounded-2xl bg-navy text-white text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 left-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-4 py-1.5 bg-navy text-gold text-xs font-bold uppercase tracking-[0.2em] border border-gold/30 rounded-full",
									children: "Malaquias 4:6"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl lg:text-3xl italic leading-snug text-balance text-white",
								children: "\"Ele fará voltar o coração dos pais aos filhos e o coração dos filhos aos pais.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule my-6 opacity-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/65 leading-relaxed",
								children: "O texto começa pelos pais. A restauração começa quando o coração dos pais volta primeiro."
							})
						]
					})
				})
			]
		})
	});
}
function FinalCTA({ openModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inscricao",
		className: "relative py-28 lg:py-36 bg-white overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-40 pointer-events-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, {
				lineColor: "rgba(166, 123, 26, 0.08)",
				backgroundColor: "transparent",
				waveSpeedX: .006,
				waveSpeedY: .003,
				waveAmpX: 25,
				waveAmpY: 12,
				xGap: 22,
				yGap: 50
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative max-w-3xl mx-auto px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-authority rounded-3xl p-10 lg:p-14 text-center border-gold/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mb-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4",
						children: "De Frente com a Homossexualidade"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance text-navy",
						children: [
							"Dois dias para iniciar uma",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "nova conversa"
							}),
							" ",
							"dentro da sua família."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid sm:grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailCard, {
								icon: Calendar,
								label: "Quando",
								value: "Dias 4 e 5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailCard, {
								icon: Clock,
								label: "Horário",
								value: "13h às 19h"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailCard, {
								icon: Wifi,
								label: "Formato",
								value: "Online · ao vivo"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground mb-1 uppercase tracking-wider font-medium",
							children: "Ingresso"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-6xl lg:text-7xl text-navy font-bold",
							children: ["R$ 19", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl text-gold",
								children: ",90"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://pay.assiny.com.br/sflEGK/node/w-jH0u",
						target: "_blank",
						rel: "noopener noreferrer",
						"data-cta": "main",
						onClick: openModal,
						className: "btn-gold mt-10 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg",
						children: [CTA_SECONDARY, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground italic",
						children: "Você não precisa ter todas as respostas para começar a reconstruir a relação."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-10" })
				]
			}) })
		})]
	});
}
function DetailCard({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 rounded-xl border border-border bg-[#F8F6F0]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-gold mx-auto mb-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-wider text-muted-foreground font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 font-bold text-navy",
				children: value
			})
		]
	});
}
function FAQ() {
	const faqs = [
		{
			q: "A imersão é apenas para pais?",
			a: "Foi preparada especialmente para pais e mães de filhos que vivem conflitos relacionados à homossexualidade, fé, identidade e família."
		},
		{
			q: "Meu filho precisa participar comigo?",
			a: "Não. Você pode participar sozinho. O conteúdo foi desenvolvido para ajudá-lo a rever sua postura e iniciar mudanças na forma de se comunicar."
		},
		{
			q: "A imersão vai ensinar como mudar meu filho?",
			a: "Não. A proposta não é controlar ou produzir mudança forçada. O foco está em identidade, comunicação, responsabilidade e restauração familiar."
		},
		{
			q: "Promete mudança de orientação sexual?",
			a: "Não. Não existe promessa de mudança de orientação sexual."
		},
		{
			q: "Vou ser culpado pelo que meu filho vive?",
			a: "Não. O objetivo não é encontrar culpados, mas ajudar a reconhecer o que pode ser transformado na própria postura e no relacionamento."
		},
		{
			q: "Preciso abandonar minhas convicções?",
			a: "Não. Amor e verdade caminham juntos. É possível preservar convicções sem usar a verdade para humilhar ou romper o relacionamento."
		},
		{
			q: "O conteúdo será cristão?",
			a: "Sim. Fundamentado em princípios bíblicos, comunicação familiar, comportamento humano e reflexão emocional."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 lg:py-36 bg-[#F8F6F0] border-t border-black/6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" }), " Perguntas frequentes"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12 text-balance text-navy",
				children: "O que você precisa saber antes de entrar."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-black/6 border-y border-black/6",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 35,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : i),
							className: "w-full flex items-center justify-between gap-6 py-6 text-left group",
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg lg:text-xl text-navy group-hover:text-gold transition-colors text-balance",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45 bg-gold border-gold" : "border-black/20 hover:border-gold/50"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: `w-4 h-4 ${isOpen ? "text-white" : "text-gold"}` })
							})]
						}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-6 pr-12 text-muted-foreground leading-relaxed",
							children: f.a
						})] })
					}, f.q);
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mb-10 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold font-display font-semibold",
				children: "De Frente"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-white/40",
				children: " · Imersão para Pais"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" — Todos os direitos reservados."
				]
			})]
		})]
	});
}
//#endregion
export { LandingPageV27 as component };
