import { n as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BvTfqKQj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8yGVPc8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var trackLp01 = createServerFn({ method: "POST" }).validator(objectType({ event: enumType(["page_view", "checkout_click"]) })).handler(createSsrRpc("18a2a892d4ac6b4d28430fdb714b1588f793ecc60a8cdd92583d5879bdadc2ce"));
var UTM_KEYS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"fbclid",
	"gclid"
];
function captureUtms() {
	if (typeof window === "undefined") return {};
	const params = new URLSearchParams(window.location.search);
	const utms = {};
	UTM_KEYS.forEach((k) => {
		const v = params.get(k);
		if (v) utms[k] = v;
	});
	if (Object.keys(utms).length > 0) sessionStorage.setItem("utms", JSON.stringify(utms));
	return utms;
}
function getUtms() {
	if (typeof window === "undefined") return {};
	try {
		return JSON.parse(sessionStorage.getItem("utms") ?? "{}");
	} catch {
		return {};
	}
}
function appendUtmsToUrl(baseUrl) {
	const utms = getUtms();
	if (!Object.keys(utms).length) return baseUrl;
	const params = new URLSearchParams(utms);
	return `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}${params.toString()}`;
}
var antes_depois_default = "/assets/antes-depois-bg4kA1h_.png";
var hero_mobile_default = "/assets/hero-mobile-BbMJxyvr.png";
var pierry_rodrigues_default = "/assets/pierry-rodrigues-D_MOeR7m.jpg";
var CHECKOUT_URL = "https://pay.assiny.com.br/1d926e/node/3fZr7o";
function trackCheckout(e) {
	if (e) e.preventDefault();
	if (typeof window !== "undefined" && window.fbq) window.fbq("track", "InitiateCheckout", {
		content_name: "De Frente com a Homossexualidade",
		value: 37,
		currency: "BRL"
	});
	trackLp01({ data: { event: "checkout_click" } }).catch(() => {});
	window.open(appendUtmsToUrl(CHECKOUT_URL), "_blank");
}
function CTA({ children, variant = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: CHECKOUT_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: trackCheckout,
		"data-cta": "main",
		className: `inline-flex h-14 items-center justify-center rounded-xl px-8 text-base font-semibold tracking-wide uppercase ${variant === "gold" ? "btn-gold" : "btn-primary"}`,
		children
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-deep)]/70",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rainbow-dot" }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rainbow-dot" })
		]
	});
}
function Landing() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		captureUtms();
		trackLp01({ data: { event: "page_view" } }).catch(() => {});
		const onScroll = () => setScrolled(window.scrollY > 80);
		window.addEventListener("scroll", onScroll, { passive: true });
		if (typeof window !== "undefined" && window.fbq) window.fbq("track", "ViewContent", {
			content_name: "De Frente com a Homossexualidade",
			content_category: "Imersão Online",
			value: 37,
			currency: "BRL"
		});
		const depthsFired = /* @__PURE__ */ new Set();
		const onScrollDepth = () => {
			const pct = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
			[
				25,
				50,
				75
			].forEach((depth) => {
				if (pct >= depth && !depthsFired.has(depth)) {
					depthsFired.add(depth);
					if (window.fbq) window.fbq("trackCustom", "ScrollDepth", { depth: `${depth}%` });
				}
			});
		};
		window.addEventListener("scroll", onScrollDepth, { passive: true });
		const timers = [
			setTimeout(() => {
				if (window.fbq) window.fbq("trackCustom", "TimeOnPage", { seconds: 30 });
			}, 3e4),
			setTimeout(() => {
				if (window.fbq) window.fbq("trackCustom", "TimeOnPage", { seconds: 60 });
			}, 6e4),
			setTimeout(() => {
				if (window.fbq) window.fbq("trackCustom", "TimeOnPage", { seconds: 120 });
			}, 12e4)
		];
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("scroll", onScrollDepth);
			timers.forEach(clearTimeout);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-28 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-deep-gradient text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rainbow-bar" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:hidden bg-black text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_mobile_default,
							alt: "Antes e Depois — Pierry Rodrigues",
							className: "w-full block"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 pt-4 pb-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-3xl leading-tight text-white mb-5",
								children: [
									"De Frente com a",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rainbow-text",
										children: "Homossexualidade"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 border-l-4 border-[color:var(--color-gold)] pl-4 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[color:var(--color-gold)] uppercase tracking-widest text-sm font-black mb-2",
									children: "2 dias de imersão"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-base text-white/90 leading-relaxed",
									children: [
										"Descubra",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[color:var(--color-gold)] font-semibold",
											children: "o que está por trás dos conflitos de identidade"
										}),
										", dos afastamentos familiares e encontre um caminho real de restauração para você e para quem você ama."
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-white/50 line-through",
										children: "De R$ 97,00"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-bold text-[color:var(--color-gold)]",
										children: "Por apenas R$ 37,00"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-white/70 mt-1",
										children: "Imersão Online · 13 a 16 de Julho · Das 13h às 19h"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CHECKOUT_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: trackCheckout,
								"data-cta": "main",
								className: "btn-rainbow inline-flex h-14 w-full items-center justify-center rounded-xl px-6 text-base font-semibold uppercase tracking-wide",
								children: "Quero garantir minha vaga"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rainbow-bar-thick" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "hidden md:block relative bg-deep-gradient text-primary-foreground overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/10 blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-12 px-4 py-12 grid-cols-[1.05fr_0.95fr] items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl leading-[1.05] lg:text-5xl text-primary-foreground mb-6",
								children: ["De Frente com a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rainbow-text",
									children: "Homossexualidade"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xl font-semibold text-primary-foreground leading-snug max-w-xl border-l-4 border-[color:var(--color-gold)] pl-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[color:var(--color-gold)] uppercase tracking-wider text-sm font-bold mb-1",
										children: "2 dias de imersão"
									}),
									"Descubra ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[color:var(--color-gold)]",
										children: "o que está por trás dos conflitos de identidade"
									}),
									", dos afastamentos familiares e encontre um caminho real de restauração para você e para quem você ama."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-primary-foreground/60 line-through",
										children: "De R$ 97,00"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-bold text-[color:var(--color-gold)]",
										children: "Por apenas R$ 37,00"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 text-sm text-primary-foreground/85",
										children: "Imersão Online · 13 a 16 de Julho · Das 13h às 19h"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CHECKOUT_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: trackCheckout,
									"data-cta": "main",
									className: "btn-rainbow inline-flex h-14 items-center justify-center rounded-xl px-8 text-base font-semibold uppercase tracking-wide",
									children: "Quero garantir minha vaga"
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto w-full max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-4 rounded-[2rem] bg-[color:var(--color-gold)]/15 blur-2xl",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rainbow-ring relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: antes_depois_default,
									alt: "Retrato do palestrante da imersão De Frente com a Homossexualidade",
									width: 695,
									height: 760,
									className: "object-cover"
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rainbow-bar-thick" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Identificação" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto max-w-3xl text-center text-3xl md:text-4xl",
						children: "Esta imersão é para vocês que se amam, mas já não sabem como conversar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-soft p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold)]",
									children: "Para filhos que vivem esse conflito"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl",
									children: "Você não é o seu rótulo."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3 text-[15px] text-foreground/85",
									children: [
										"Você sente que sua família só consegue enxergar sua sexualidade.",
										"Você vive conflitos entre seus sentimentos, sua fé e aquilo que acredita.",
										"Você tem medo de falar e ser rejeitado.",
										"Você deseja compreender melhor sua história emocional e espiritual.",
										"Você está cansado de ser tratado como um problema.",
										"Você quer ser ouvido sem humilhação ou acusação."
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-deep)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 rounded-lg bg-secondary p-4 text-sm leading-relaxed text-secondary-foreground",
									children: "Aqui, você não será reduzido a um rótulo. Você será convidado a olhar para sua história, sua identidade, seus relacionamentos, suas escolhas e sua vida espiritual com honestidade e responsabilidade."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-soft p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold)]",
									children: "Para pais e mães"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl",
									children: "O amor que não sabe mais o que dizer."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3 text-[15px] text-foreground/85",
									children: [
										"Você ama seu filho, mas não sabe o que falar.",
										"Você tem medo de que qualquer posicionamento produza afastamento.",
										"Você sente culpa e se pergunta onde errou.",
										"As conversas terminam em discussão, silêncio ou defesa.",
										"Você deseja preservar suas convicções sem perder seu filho.",
										"Você quer reconstruir a confiança dentro da família."
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-deep)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 rounded-lg bg-secondary p-4 text-sm leading-relaxed text-secondary-foreground",
									children: "Você aprenderá que conexão não significa concordância com tudo. Significa construir um relacionamento seguro o suficiente para que a verdade possa ser ouvida."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { children: "Quero garantir minha vaga" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/60 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Conteúdo da imersão" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto max-w-3xl text-center text-3xl md:text-4xl",
							children: "O que vamos trabalhar durante esses dois dias?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 md:grid-cols-2",
							children: [
								{
									n: "01",
									t: "Identidade além da sexualidade",
									d: "Como separar identidade, sentimentos, comportamentos e escolhas sem reduzir um homem a apenas uma parte da sua história."
								},
								{
									n: "02",
									t: "O que existe por trás do silêncio",
									d: "Dores, rejeições, medos, conflitos espirituais e necessidades de pertencimento que muitas vezes nunca foram verbalizados."
								},
								{
									n: "03",
									t: "Pais e filhos diante do conflito",
									d: "Como trocar acusação, controle e afastamento por escuta, responsabilidade, presença e direção."
								},
								{
									n: "04",
									t: "Verdade e amor",
									d: "Como preservar convicções, falar sobre assuntos difíceis e buscar reconciliação sem usar a verdade como arma."
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-soft p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl text-[color:var(--color-gold)]",
										children: c.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl",
										children: c.t
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[15px] leading-relaxed text-foreground/80",
									children: c.d
								})]
							}, c.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mx-auto mt-12 max-w-3xl text-center font-display text-2xl italic leading-snug text-[color:var(--color-deep)] md:text-3xl",
							children: "\"O comportamento pode iniciar uma discussão. Mas é o coração que precisa ser alcançado.\""
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "inscricao",
				className: "mx-auto max-w-4xl px-4 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Sua participação" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto max-w-3xl text-center text-3xl md:text-4xl",
						children: "Dois dias podem iniciar uma conversa que sua família vem adiando há anos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-soft overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rainbow-bar-thick" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-deep-gradient p-7 text-primary-foreground md:p-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-[0.25em] text-[color:var(--color-gold)]",
											children: "Imersão online e ao vivo"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-3xl text-primary-foreground md:text-4xl",
											children: "De Frente com a Homossexualidade"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-primary-foreground/80",
											children: "2 Dias de Transformação, Identidade e Reconstrução Familiar"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-primary-foreground/90",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "13 a 16 de Julho" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Das 13h às 19h" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Online e ao vivo" })
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-7 md:p-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold uppercase tracking-widest text-[color:var(--color-deep)]",
											children: "Durante a imersão você receberá:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 space-y-2 text-[15px] text-foreground/85",
											children: [
												"2 Dias de conteúdo ao vivo",
												"Princípios sobre identidade e pertencimento",
												"Direcionamentos para pais, mães e filhos",
												"Ferramentas para comunicação familiar",
												"Reflexões bíblicas",
												"Exercícios de autoavaliação",
												"Orientações para iniciar um processo de reconexão"
											].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
											}, t))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border bg-secondary/60 p-6 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs uppercase tracking-widest text-muted-foreground",
													children: "Investimento"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-muted-foreground line-through",
													children: "De R$ 97,00"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-5xl text-[color:var(--color-deep)]",
													children: "R$ 37,00"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs text-muted-foreground",
													children: "Para pais, mães ou filhos que vivem esse conflito."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: CHECKOUT_URL,
													target: "_blank",
													rel: "noopener noreferrer",
													onClick: trackCheckout,
													"data-cta": "main",
													className: "btn-rainbow mt-5 flex h-14 w-full items-center justify-center rounded-xl text-sm font-semibold uppercase tracking-wide",
													children: "Quero garantir minha vaga"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "rainbow-bar mt-4 opacity-80",
													"aria-hidden": true
												})
											]
										})]
									})
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/60 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto w-full max-w-sm md:max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-4 rounded-[2rem] bg-[color:var(--color-gold)]/15 blur-2xl",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rainbow-ring relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: pierry_rodrigues_default,
									alt: "Pierry Rodrigues — Imersão De Frente com a Homossexualidade",
									width: 695,
									height: 760,
									loading: "lazy",
									className: "object-cover"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-deep)]/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rainbow-dot inline-block mr-2" }), "Quem conduz"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl md:text-4xl",
								children: "Quem é Pierry Rodrigues?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pierry Rodrigues dedica sua vida a ajudar pessoas e famílias a compreender questões profundas de identidade, pertencimento e restauração." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ao longo dos últimos anos, tem acompanhado histórias de transformação familiar, reconexão entre pais e filhos e processos de restauração emocional e espiritual." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sua abordagem une princípios bíblicos, comportamento humano, relacionamentos familiares e experiências práticas vividas ao lado de centenas de pessoas que buscavam respostas para dores que pareciam impossíveis de resolver." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Seu compromisso não é com julgamentos."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-[color:var(--color-deep)]",
										children: "Seu compromisso é com a verdade, a restauração e a esperança."
									})
								]
							})
						] })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-3xl px-4 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Perguntas frequentes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-center text-3xl md:text-4xl",
						children: "Perguntas frequentes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-3",
						children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group card-soft px-5 py-4 transition-shadow open:shadow-[var(--shadow-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-[color:var(--color-deep)]",
								children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl text-[color:var(--color-gold)] transition-transform group-open:rotate-45",
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[15px] leading-relaxed text-foreground/80",
								children: f.a
							})]
						}, f.q))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[color:var(--color-ink)] px-4 py-10 text-sm text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" De Frente com a Homossexualidade — Imersão Online."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/privacidade",
							className: "underline-offset-4 hover:underline",
							children: "Política de Privacidade"
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden transition-transform duration-300 ${scrolled ? "translate-y-0" : "translate-y-full"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: CHECKOUT_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: trackCheckout,
					"data-cta": "main",
					className: "btn-gold flex h-12 items-center justify-center rounded-xl text-sm font-semibold uppercase tracking-wide",
					children: "Quero garantir minha vaga — R$ 37,00"
				})
			})
		]
	});
}
var faqs = [
	{
		q: "A imersão é somente para pais?",
		a: "Não. Ela foi preparada para pais e mães, mas também para filhos — meninos e meninas — que vivem conflitos relacionados à homossexualidade, identidade, fé e relacionamento familiar."
	},
	{
		q: "Mulheres homossexuais podem participar?",
		a: "Sim, esse conteúdo foi desenvolvido para homens e para mulheres.."
	},
	{
		q: "Preciso participar com meus pais ou com meu filho?",
		a: "Não. Cada pessoa pode participar individualmente. Caso pais e filho desejem participar juntos, também será possível."
	},
	{
		q: "A imersão promete mudar a orientação sexual?",
		a: "Não. A imersão não apresenta promessa de mudança de orientação sexual. O trabalho está concentrado em identidade, história pessoal, responsabilidade, espiritualidade, comunicação e restauração familiar."
	},
	{
		q: "A imersão substitui terapia?",
		a: "Não. A imersão tem caráter educacional e espiritual e não substitui acompanhamento médico ou psicológico."
	},
	{
		q: "Será um ambiente cristão?",
		a: "Sim. A imersão será fundamentada em princípios bíblicos, apresentados com verdade, responsabilidade, respeito e amor."
	},
	{
		q: "Qual é o valor?",
		a: "O ingresso custa R$ 37,00."
	},
	{
		q: "Quando acontecerá?",
		a: "Nos dias 13 a 16 de Julho, das 13h às 19h, em formato online e ao vivo."
	}
];
//#endregion
export { Landing as component };
