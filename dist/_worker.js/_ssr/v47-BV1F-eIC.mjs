import { n as __toESM } from "../_runtime.mjs";
import { a as trackLp2, n as captureUtms, t as appendUtmsToUrl } from "./utm-BVtrsPqn.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as pierry_rodrigues_default, n as Waves, r as antes_depois_default, t as SpotlightCard } from "./SpotlightCard-ICm5X5DF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/v47-BV1F-eIC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHECKOUT_URL = "https://pay.assiny.com.br/A6B-P6/node/ixRfFj";
var PRICE = "R$ 47,00";
function trackCheckout(e) {
	if (e) e.preventDefault();
	if (typeof window !== "undefined" && window.fbq) window.fbq("track", "InitiateCheckout", {
		content_name: "De Frente com a Homossexualidade",
		value: 47,
		currency: "BRL"
	});
	trackLp2({ data: { event: "checkout_click" } }).catch(() => {});
	window.open(appendUtmsToUrl(CHECKOUT_URL), "_blank");
}
function useReveal(threshold = .12) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				setVisible(true);
				obs.disconnect();
			}
		}, { threshold });
		obs.observe(el);
		return () => obs.disconnect();
	}, [threshold]);
	return [ref, visible];
}
function Reveal({ children, delay = 0, className = "", style = {} }) {
	const [ref, visible] = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			...style,
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : "translateY(28px)",
			filter: visible ? "blur(0)" : "blur(6px)",
			transition: `opacity 0.9s ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 0.9s ${delay}ms cubic-bezier(0.16,1,0.3,1), filter 0.9s ${delay}ms ease`
		},
		children
	});
}
function Kicker({ children, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "kicker",
		style: dark ? { color: "#9a7016" } : {},
		children
	});
}
function CTAButton({ children, fullWidth = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: CHECKOUT_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: trackCheckout,
		"data-cta": "main",
		className: "btn-gold",
		style: fullWidth ? {
			width: "100%",
			justifyContent: "center"
		} : {},
		children
	});
}
function LandingV47() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		captureUtms();
		trackLp2({ data: { event: "page_view" } }).catch(() => {});
		if (typeof window !== "undefined" && window.fbq) window.fbq("track", "ViewContent", {
			content_name: "De Frente com a Homossexualidade",
			value: 47,
			currency: "BRL"
		});
		const depthsFired = /* @__PURE__ */ new Set();
		const onScroll = () => {
			setScrolled(window.scrollY > 80);
			const pct = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
			[
				25,
				50,
				75
			].forEach((d) => {
				if (pct >= d && !depthsFired.has(d)) {
					depthsFired.add(d);
					if (window.fbq) window.fbq("trackCustom", "ScrollDepth", { depth: `${d}%` });
				}
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		const timers = [setTimeout(() => {
			if (window.fbq) window.fbq("trackCustom", "TimeOnPage", { seconds: 30 });
		}, 3e4), setTimeout(() => {
			if (window.fbq) window.fbq("trackCustom", "TimeOnPage", { seconds: 60 });
		}, 6e4)];
		return () => {
			window.removeEventListener("scroll", onScroll);
			timers.forEach(clearTimeout);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen pb-28 md:pb-0",
		style: {
			background: "var(--bg)",
			color: "var(--ink)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				style: {
					position: "sticky",
					top: 0,
					zIndex: 50,
					background: "rgba(8,17,11,0.85)",
					backdropFilter: "blur(12px)",
					borderBottom: "1px solid var(--line)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						maxWidth: 1180,
						margin: "0 auto",
						padding: "14px 26px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							fontFamily: "'Playfair Display', serif",
							fontWeight: 600,
							fontSize: "1rem",
							color: "var(--ink)"
						},
						children: "De Frente com a Homossexualidade"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							fontFamily: "'Jost', sans-serif",
							fontSize: ".72rem",
							letterSpacing: ".2em",
							textTransform: "uppercase",
							color: "var(--gold-l)",
							marginTop: 2
						},
						children: "Imersão Online — Pierry Rodrigues"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CHECKOUT_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: trackCheckout,
						"data-cta": "nav",
						className: "btn-gold",
						style: {
							padding: "10px 22px",
							fontSize: ".78rem"
						},
						children: "Garantir vaga"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				style: {
					position: "relative",
					minHeight: "100svh",
					display: "flex",
					alignItems: "center",
					padding: "80px 0 40px",
					overflow: "hidden",
					background: "radial-gradient(140% 120% at 68% 30%, #1a3c25 0%, #173621 16%, #142f1d 32%, #102818 48%, #0c2014 63%, #0a1810 78%, #07120b 90%, var(--bg-deep) 100%)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						inset: 0,
						zIndex: 1,
						pointerEvents: "none",
						background: "linear-gradient(180deg, transparent 60%, var(--bg-deep) 100%)"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							position: "absolute",
							inset: 0,
							zIndex: 0,
							opacity: .35
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, {
							lineColor: "rgba(224,182,79,0.5)",
							backgroundColor: "transparent",
							waveSpeedX: .006,
							waveSpeedY: .003,
							waveAmpX: 38,
							waveAmpY: 16,
							xGap: 18,
							yGap: 50
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						inset: 0,
						zIndex: 1,
						pointerEvents: "none",
						mixBlendMode: "screen",
						background: "radial-gradient(55% 55% at 68% 32%, rgba(245,217,148,.28) 0%, rgba(229,194,118,.18) 22%, rgba(210,169,90,.10) 44%, rgba(201,161,85,.04) 65%, transparent 85%)",
						animation: "bloom 8s ease-in-out infinite"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							position: "relative",
							zIndex: 3,
							maxWidth: 1180,
							margin: "0 auto",
							padding: "0 26px",
							width: "100%",
							display: "grid",
							gridTemplateColumns: "1.1fr 0.9fr",
							gap: 20,
							alignItems: "center"
						},
						className: "hero-grid-desktop",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { animation: "fadeUp 1s 0.1s both" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Imersão Online e ao Vivo" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									style: {
										fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
										marginTop: 18,
										marginBottom: 16,
										color: "#fff"
									},
									children: [
										"De Frente com a",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "hl",
											children: "Homossexualidade"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									style: {
										fontFamily: "'Cormorant Garamond', serif",
										fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
										color: "#e9e2d2",
										maxWidth: 500,
										marginBottom: 28,
										lineHeight: 1.5
									},
									children: [
										"Descubra o que está por trás dos conflitos de identidade e dos afastamentos familiares —",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											style: {
												color: "var(--gold-l)",
												fontStyle: "italic"
											},
											children: "e encontre um caminho real de restauração."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, { children: "Quero garantir minha vaga" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										gap: 10,
										flexWrap: "wrap",
										marginTop: 24
									},
									children: [
										"💻 Online ao vivo",
										"🎯 Identidade e fé",
										"👨‍👩‍👧 Para pais e filhos"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chip",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										gap: 32,
										marginTop: 36
									},
									children: [{
										v: "+240 mil",
										l: "seguidores"
									}, {
										v: "Milhares",
										l: "de famílias"
									}].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontFamily: "'Playfair Display', serif",
											fontSize: "1.6rem",
											fontWeight: 600,
											color: "#fff"
										},
										children: i.v
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontFamily: "'Jost', sans-serif",
											fontSize: ".7rem",
											letterSpacing: ".2em",
											textTransform: "uppercase",
											color: "var(--muted)"
										},
										children: i.l
									})] }, i.l))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								animation: "fadeUp 1.1s 0.2s both",
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-end"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								position: "absolute",
								inset: "-10%",
								borderRadius: "50%",
								background: "radial-gradient(closest-side, rgba(224,182,79,0.12), transparent)",
								filter: "blur(20px)"
							} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: antes_depois_default,
								alt: "De Frente com a Homossexualidade",
								style: {
									position: "relative",
									zIndex: 1,
									width: "100%",
									maxWidth: 520,
									borderRadius: 16,
									boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
									border: "1px solid var(--line)",
									maskImage: "linear-gradient(180deg, #000 70%, transparent 100%)",
									WebkitMaskImage: "linear-gradient(180deg, #000 70%, transparent 100%)"
								}
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-mobile-only",
						style: {
							display: "none",
							position: "relative",
							zIndex: 3,
							width: "100%",
							padding: "0 20px",
							textAlign: "center"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Imersão Online e ao Vivo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								style: {
									fontFamily: "'Playfair Display', serif",
									fontSize: "2rem",
									marginTop: 14,
									marginBottom: 14,
									color: "#fff"
								},
								children: [
									"De Frente com a",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "hl",
										children: "Homossexualidade"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: antes_depois_default,
								alt: "Imersão",
								style: {
									width: "100%",
									borderRadius: 12,
									marginBottom: 20,
									border: "1px solid var(--line)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: "1.2rem",
									color: "#e9e2d2",
									marginBottom: 24,
									lineHeight: 1.5
								},
								children: "Descubra o que está por trás dos conflitos de identidade e encontre um caminho real de restauração."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								fullWidth: true,
								children: "Quero garantir minha vaga"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									justifyContent: "center",
									gap: 8,
									flexWrap: "wrap",
									marginTop: 18
								},
								children: [
									"Online ao vivo",
									"Identidade e fé",
									"Pais e filhos"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip",
									style: { fontSize: ".78rem" },
									children: t
								}, t))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "parch-section",
				style: { padding: "96px 0" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						maxWidth: 1180,
						margin: "0 auto",
						padding: "0 26px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "text-center",
							style: { marginBottom: 56 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "deco",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontFamily: "'Jost', sans-serif",
										fontSize: ".72rem",
										letterSpacing: ".3em",
										textTransform: "uppercase",
										color: "var(--gold-ink)",
										display: "block",
										marginBottom: 12
									},
									children: "Para quem é"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									style: {
										fontFamily: "'Playfair Display', serif",
										fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
										color: "var(--ink-d)",
										maxWidth: 680,
										margin: "0 auto"
									},
									children: "Esta imersão é para vocês que se amam, mas já não sabem como conversar."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: 20
							},
							className: "para-quem-grid",
							children: [{
								num: "I",
								title: "Para filhos que vivem esse conflito",
								sub: "Você não é o seu rótulo.",
								items: [
									"Você sente que sua família só enxerga sua sexualidade.",
									"Você vive conflitos entre seus sentimentos, sua fé e o que acredita.",
									"Você tem medo de falar e ser rejeitado.",
									"Você quer ser ouvido sem humilhação ou acusação."
								],
								note: "Aqui, você não será reduzido a um rótulo. Será convidado a olhar para sua história com honestidade."
							}, {
								num: "II",
								title: "Para pais e mães",
								sub: "O amor que não sabe mais o que dizer.",
								items: [
									"Você ama seu filho, mas não sabe o que falar.",
									"Você tem medo de que qualquer posicionamento gere afastamento.",
									"Você sente culpa e se pergunta onde errou.",
									"Você deseja preservar suas convicções sem perder seu filho."
								],
								note: "Você aprenderá que conexão não significa concordância. Significa construir um relacionamento seguro o suficiente para que a verdade seja ouvida."
							}].map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
									className: "h-full",
									spotlightColor: "rgba(224,182,79,0.15)",
									style: {
										background: "linear-gradient(165deg, #183020, #0c1a11)",
										border: "1px solid rgba(224,182,79,0.30)",
										borderRadius: 16,
										padding: "40px 32px",
										height: "100%"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontFamily: "'Playfair Display', serif",
												fontStyle: "italic",
												fontSize: "4rem",
												color: "rgba(224,182,79,0.18)",
												lineHeight: 1,
												marginBottom: 8
											},
											children: card.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												fontFamily: "'Jost', sans-serif",
												fontSize: ".7rem",
												letterSpacing: ".25em",
												textTransform: "uppercase",
												color: "var(--gold)",
												marginBottom: 8
											},
											children: card.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											style: {
												fontFamily: "'Playfair Display', serif",
												fontSize: "1.4rem",
												color: "#fff",
												marginBottom: 20
											},
											children: card.sub
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											style: {
												listStyle: "none",
												margin: 0,
												padding: 0,
												marginBottom: 20
											},
											children: card.items.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												style: {
													display: "flex",
													gap: 12,
													marginBottom: 10,
													fontSize: ".94rem",
													color: "var(--muted)",
													lineHeight: 1.5
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
													marginTop: 6,
													width: 5,
													height: 5,
													borderRadius: "50%",
													background: "var(--gold)",
													flexShrink: 0,
													display: "block"
												} }), t]
											}, t))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												borderRadius: 10,
												padding: "14px 18px",
												background: "rgba(224,182,79,0.07)",
												border: "1px solid var(--line)",
												fontSize: ".88rem",
												lineHeight: 1.6,
												color: "#e9e2d2"
											},
											children: card.note
										})
									]
								})
							}, card.num))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							style: {
								textAlign: "center",
								marginTop: 48
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, { children: "Quero garantir minha vaga" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				style: {
					padding: "96px 0",
					background: `radial-gradient(80% 60% at 50% 50%, #10241680, var(--bg) 65%)`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						maxWidth: 1180,
						margin: "0 auto",
						padding: "0 26px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							style: {
								textAlign: "center",
								marginBottom: 56
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "deco",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "O que vamos trabalhar" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									style: {
										fontFamily: "'Playfair Display', serif",
										fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
										marginTop: 16
									},
									children: ["Conteúdo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "hl",
										children: " direto ao ponto"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(4,1fr)",
								gap: 18
							},
							className: "content-grid",
							children: [
								{
									n: "01",
									t: "Identidade além da sexualidade",
									d: "Como separar identidade, sentimentos, comportamentos e escolhas sem reduzir um homem a apenas uma parte da sua história."
								},
								{
									n: "02",
									t: "O que existe por trás do silêncio",
									d: "Dores, rejeições, medos, conflitos espirituais e necessidades de pertencimento que nunca foram verbalizados."
								},
								{
									n: "03",
									t: "Pais e filhos diante do conflito",
									d: "Como trocar acusação e controle por escuta, responsabilidade, presença e direção."
								},
								{
									n: "04",
									t: "Verdade e amor",
									d: "Como preservar convicções, falar sobre assuntos difíceis e buscar reconciliação sem usar a verdade como arma."
								}
							].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 70,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-dark",
									style: { height: "100%" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												position: "absolute",
												top: -10,
												right: 12,
												fontFamily: "'Playfair Display', serif",
												fontStyle: "italic",
												fontSize: "4.5rem",
												fontWeight: 600,
												color: "rgba(224,182,79,0.10)",
												lineHeight: 1,
												pointerEvents: "none"
											},
											children: c.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												width: 60,
												height: 60,
												margin: "0 auto 18px",
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												background: "radial-gradient(closest-side, rgba(224,182,79,0.18), transparent)",
												border: "1px solid var(--line-2)"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontFamily: "'Playfair Display', serif",
													fontWeight: 600,
													fontSize: "1.1rem",
													color: "var(--gold-l)"
												},
												children: c.n
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											style: {
												fontFamily: "'Playfair Display', serif",
												fontSize: "1.15rem",
												color: "#fff",
												marginBottom: 10
											},
											children: c.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												color: "var(--muted)",
												fontSize: ".9rem",
												lineHeight: 1.55
											},
											children: c.d
										})
									]
								})
							}, c.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 300,
							style: {
								textAlign: "center",
								marginTop: 56
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontStyle: "italic",
									fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
									color: "var(--gold-l)",
									maxWidth: 640,
									margin: "0 auto",
									lineHeight: 1.4
								},
								children: "\"O comportamento pode iniciar uma discussão. Mas é o coração que precisa ser alcançado.\""
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "inscricao",
				className: "parch-section",
				style: { padding: "96px 0" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						maxWidth: 860,
						margin: "0 auto",
						padding: "0 26px"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						style: { textAlign: "center" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "deco",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontFamily: "'Jost', sans-serif",
									fontSize: ".72rem",
									letterSpacing: ".3em",
									textTransform: "uppercase",
									color: "var(--gold-ink)",
									display: "block",
									marginBottom: 12
								},
								children: "Sua participação"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									fontFamily: "'Playfair Display', serif",
									fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
									color: "var(--ink-d)",
									maxWidth: 600,
									margin: "0 auto 40px"
								},
								children: "Uma conversa que sua família vem adiando há anos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "linear-gradient(165deg, #0c1a11, #08110b)",
									border: "1px solid rgba(224,182,79,0.35)",
									borderRadius: 20,
									overflow: "hidden",
									boxShadow: "0 40px 80px rgba(0,0,0,0.4)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										padding: "40px 40px 32px",
										borderBottom: "1px solid var(--line)"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Imersão Online e ao Vivo" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											style: {
												fontFamily: "'Playfair Display', serif",
												fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
												color: "#fff",
												marginTop: 14
											},
											children: "De Frente com a Homossexualidade"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												color: "var(--muted)",
												marginTop: 6,
												fontSize: ".9rem"
											},
											children: "2 Dias de Transformação, Identidade e Reconstrução Familiar"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												display: "flex",
												gap: 20,
												flexWrap: "wrap",
												marginTop: 16
											},
											children: [
												"💻 Online ao vivo",
												"🎯 Identidade e fé",
												"👨‍👩‍👧 Para pais e filhos"
											].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "chip",
												style: { fontSize: ".82rem" },
												children: t
											}, t))
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										padding: "40px",
										display: "grid",
										gridTemplateColumns: "1.1fr 0.9fr",
										gap: 32,
										alignItems: "center"
									},
									className: "oferta-grid",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										style: {
											listStyle: "none",
											margin: 0,
											padding: 0
										},
										children: [
											"2 Dias de conteúdo ao vivo",
											"Princípios sobre identidade e pertencimento",
											"Direcionamentos para pais, mães e filhos",
											"Ferramentas para comunicação familiar",
											"Reflexões bíblicas",
											"Exercícios de autoavaliação",
											"Orientações para iniciar um processo de reconexão"
										].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											style: {
												display: "flex",
												gap: 12,
												marginBottom: 12,
												fontSize: ".9rem",
												color: "#e9e2d2",
												lineHeight: 1.4
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
												marginTop: 5,
												width: 5,
												height: 5,
												borderRadius: "50%",
												background: "var(--gold)",
												flexShrink: 0,
												display: "block"
											} }), t]
										}, t))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											textAlign: "center",
											background: "rgba(224,182,79,0.06)",
											border: "1px solid var(--line)",
											borderRadius: 14,
											padding: "32px 24px"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: {
													fontFamily: "'Jost', sans-serif",
													fontSize: ".7rem",
													letterSpacing: ".25em",
													textTransform: "uppercase",
													color: "var(--muted)",
													marginBottom: 4
												},
												children: "Investimento"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													fontFamily: "'Playfair Display', serif",
													fontSize: "3.5rem",
													fontWeight: 600,
													color: "var(--gold-l)",
													lineHeight: 1.1
												},
												children: [PRICE.split(",")[0], /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: { fontSize: "1.8rem" },
													children: [",", PRICE.split(",")[1]]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
												fullWidth: true,
												children: "Garantir minha vaga"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: {
													fontSize: ".78rem",
													color: "var(--muted)",
													marginTop: 12
												},
												children: "Para pais, mães ou filhos que vivem esse conflito."
											})
										]
									})]
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				style: {
					padding: "96px 0",
					background: `radial-gradient(70% 55% at 25% 42%, rgba(22,51,32,0.5), transparent 70%), linear-gradient(180deg, var(--bg-deep), #091410 45%, var(--bg-deep))`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						maxWidth: 1180,
						margin: "0 auto",
						padding: "0 26px",
						display: "grid",
						gridTemplateColumns: ".85fr 1.15fr",
						gap: 60,
						alignItems: "center"
					},
					className: "pierry-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							position: "relative",
							display: "flex",
							justifyContent: "center"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							position: "absolute",
							inset: "-8%",
							background: "radial-gradient(closest-side, rgba(224,182,79,0.18), transparent)",
							filter: "blur(16px)",
							borderRadius: "50%"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: pierry_rodrigues_default,
							alt: "Pierry Rodrigues",
							style: {
								position: "relative",
								zIndex: 1,
								width: "100%",
								maxWidth: 400,
								borderRadius: 16,
								border: "1px solid var(--line)",
								boxShadow: "0 40px 70px rgba(0,0,0,0.55)",
								maskImage: "linear-gradient(180deg, #000 75%, transparent 100%)",
								WebkitMaskImage: "linear-gradient(180deg, #000 75%, transparent 100%)"
							}
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 100,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Quem conduz" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									fontFamily: "'Playfair Display', serif",
									fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
									marginTop: 16,
									marginBottom: 24
								},
								children: "Quem é Pierry Rodrigues?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontStyle: "italic",
									fontSize: "1.35rem",
									color: "var(--gold-l)",
									lineHeight: 1.4,
									marginBottom: 24
								},
								children: "\"Seu compromisso não é com julgamentos. Seu compromisso é com a verdade, a restauração e a esperança.\""
							}),
							[
								"Pierry Rodrigues dedica sua vida a ajudar pessoas e famílias a compreender questões profundas de identidade, pertencimento e restauração.",
								"Ao longo dos anos, acompanhou histórias de transformação familiar, reconexão entre pais e filhos e processos de restauração emocional e espiritual.",
								"Sua abordagem une princípios bíblicos, comportamento humano e relacionamentos familiares com experiências práticas."
							].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "var(--muted)",
									fontSize: ".98rem",
									lineHeight: 1.7,
									marginBottom: 14
								},
								children: p
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { marginTop: 32 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, { children: "Quero participar da imersão" })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				style: { padding: "96px 0" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						maxWidth: 740,
						margin: "0 auto",
						padding: "0 26px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						style: {
							textAlign: "center",
							marginBottom: 48
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "deco",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Dúvidas" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									fontFamily: "'Playfair Display', serif",
									fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
									marginTop: 16
								},
								children: "Perguntas frequentes"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 10
						},
						children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 30,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								style: {
									background: "linear-gradient(180deg, #132216aa, #0a140d66)",
									border: "1px solid var(--line)",
									borderRadius: 12,
									padding: "18px 22px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									style: {
										cursor: "pointer",
										listStyle: "none",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										gap: 16,
										fontFamily: "'Jost', sans-serif",
										fontWeight: 500,
										fontSize: ".95rem",
										color: "var(--ink)"
									},
									children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											color: "var(--gold)",
											fontSize: "1.4rem",
											flexShrink: 0,
											transition: "transform .2s"
										},
										children: "+"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										marginTop: 14,
										fontSize: ".9rem",
										lineHeight: 1.7,
										color: "var(--muted)"
									},
									children: f.a
								})]
							})
						}, f.q))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				style: {
					background: "var(--bg-deep)",
					padding: "40px 26px",
					textAlign: "center",
					borderTop: "1px solid var(--line)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: { marginBottom: 16 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CTAButton, { children: ["Quero garantir minha vaga — ", PRICE] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						fontSize: ".78rem",
						color: "var(--muted)"
					},
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" De Frente com a Homossexualidade — Imersão Online."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "fixed",
					inset: "auto 0 0 0",
					zIndex: 50,
					background: "rgba(8,17,11,0.95)",
					borderTop: "1px solid var(--line)",
					padding: "12px 16px",
					backdropFilter: "blur(12px)",
					transition: "transform .3s",
					transform: scrolled ? "translateY(0)" : "translateY(100%)"
				},
				className: "mobile-sticky",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CTAButton, {
					fullWidth: true,
					children: ["Quero garantir minha vaga — ", PRICE]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
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
      ` })
		]
	});
}
var faqs = [
	{
		q: "A imersão é somente para pais?",
		a: "Não. Ela foi preparada para pais e mães, mas também para filhos que vivem conflitos relacionados à homossexualidade, identidade, fé e relacionamento familiar."
	},
	{
		q: "Mulheres homossexuais podem participar?",
		a: "Sim, esse conteúdo foi desenvolvido para homens e para mulheres."
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
		q: `Qual é o valor?`,
		a: `O ingresso custa ${PRICE}.`
	}
];
//#endregion
export { LandingV47 as component };
