import { n as __toESM } from "../_runtime.mjs";
import { t as pierry_new_default } from "./pierry-new-CTsoqGs2.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Plus, c as Heart, d as Check, f as Calendar, i as Shield, l as Compass, m as ArrowRight, n as Wifi, o as Minus, p as BookOpen, r as Users, s as MessageCircle, u as Clock } from "../_libs/lucide-react.mjs";
import { n as captureUtms, r as trackLp2, t as LeadModal } from "./LeadModal-DChNV1j1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-DCwUabNp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHECKOUT_URL = "https://pay.assiny.com.br/1d926e/node/3fZr7o";
var CHECKOUT_VAL = 19.9;
var PRICE_LABEL = "R$ 19,90";
function fbq(...a) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...a);
}
var C = {
	bg: "#F7F6F2",
	white: "#FFFFFF",
	navy: "#0D1B3E",
	navy70: "#0D1B3Eb3",
	navy50: "#0D1B3E80",
	gold: "#8B6318",
	goldSoft: "#A67B1A",
	border: "rgba(13,27,62,0.10)",
	muted: "#5A6380"
};
function LandingPageNew() {
	const [modal, setModal] = (0, import_react.useState)(false);
	const open = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		setModal(true);
	}, []);
	(0, import_react.useEffect)(() => {
		captureUtms();
		trackLp2({ data: { event: "page_view" } }).catch(() => {});
		fbq("track", "ViewContent", {
			content_name: "De Frente /new",
			value: CHECKOUT_VAL,
			currency: "BRL"
		});
		const fired = /* @__PURE__ */ new Set();
		const onScroll = () => {
			const p = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
			[
				25,
				50,
				75
			].forEach((d) => {
				if (p >= d && !fired.has(d)) {
					fired.add(d);
					fbq("trackCustom", "ScrollDepth", { depth: `${d}%` });
				}
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		const t = [
			setTimeout(() => fbq("trackCustom", "TimeOnPage", { seconds: 30 }), 3e4),
			setTimeout(() => fbq("trackCustom", "TimeOnPage", { seconds: 60 }), 6e4),
			setTimeout(() => fbq("trackCustom", "TimeOnPage", { seconds: 120 }), 12e4)
		];
		return () => {
			window.removeEventListener("scroll", onScroll);
			t.forEach(clearTimeout);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			fontFamily: "'Inter', system-ui, sans-serif",
			color: C.navy,
			background: C.bg,
			overflowX: "hidden"
		},
		children: [
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadModal, {
				onClose: () => setModal(false),
				checkoutUrl: CHECKOUT_URL,
				checkoutValue: CHECKOUT_VAL
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBar, { open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, { open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForWhom, { open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modules, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripture, { open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, { open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function NavBar({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		style: {
			position: "sticky",
			top: 0,
			zIndex: 50,
			background: "rgba(247,246,242,0.95)",
			backdropFilter: "blur(12px)",
			borderBottom: `1px solid ${C.border}`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				padding: "14px 24px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: 10
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "36",
					height: "36",
					viewBox: "0 0 36 36",
					fill: "none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "12",
							cy: "10",
							r: "4",
							fill: C.navy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "24",
							cy: "10",
							r: "4",
							fill: C.navy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M4 26c0-4.4 3.6-8 8-8h12c4.4 0 8 3.6 8 8",
							stroke: C.navy,
							strokeWidth: "2.5",
							strokeLinecap: "round",
							fill: "none"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						fontSize: 13,
						fontWeight: 700,
						letterSpacing: "0.01em",
						lineHeight: 1.2,
						color: C.navy
					},
					children: [
						"De Frente com a",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 14,
								letterSpacing: "0.06em"
							},
							children: "HOMOSSEXUALIDADE"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						fontSize: 9,
						letterSpacing: "0.2em",
						color: C.muted,
						textTransform: "uppercase",
						marginTop: 1
					},
					children: "Imersão para Pais"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#",
				onClick: open,
				style: {
					display: "inline-flex",
					alignItems: "center",
					gap: 8,
					border: `1.5px solid ${C.navy}`,
					borderRadius: 999,
					padding: "10px 22px",
					fontSize: 12,
					fontWeight: 700,
					letterSpacing: "0.1em",
					textTransform: "uppercase",
					textDecoration: "none",
					color: C.navy,
					transition: "background 0.2s, color 0.2s"
				},
				onMouseEnter: (e) => {
					e.currentTarget.style.background = C.navy;
					e.currentTarget.style.color = "#fff";
				},
				onMouseLeave: (e) => {
					e.currentTarget.style.background = "transparent";
					e.currentTarget.style.color = C.navy;
				},
				children: ["Garantir minha vaga ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
			})]
		})
	});
}
function Hero({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		style: {
			minHeight: "calc(100vh - 65px)",
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			alignItems: "stretch"
		},
		className: "hero-grid",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					padding: "72px 60px 72px 60px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					maxWidth: 680
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							border: `1px solid ${C.border}`,
							borderRadius: 999,
							padding: "6px 16px",
							fontSize: 10,
							fontWeight: 700,
							letterSpacing: "0.22em",
							textTransform: "uppercase",
							color: C.navy,
							marginBottom: 36,
							width: "fit-content"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: C.gold },
							children: "✦"
						}), " Imersão exclusiva para pais"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						style: {
							fontFamily: "'Fraunces', Georgia, serif",
							fontSize: "clamp(2.8rem, 5vw, 4rem)",
							lineHeight: 1.08,
							fontWeight: 700,
							letterSpacing: "-0.02em",
							margin: 0
						},
						children: [
							"Seu filho se declarou",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: C.goldSoft,
									fontStyle: "italic"
								},
								children: "homossexual."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"E agora?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: 48,
						height: 3,
						background: C.goldSoft,
						margin: "28px 0",
						borderRadius: 2
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 17,
							lineHeight: 1.7,
							color: C.muted,
							maxWidth: 520,
							margin: "0 0 28px"
						},
						children: "Uma imersão de 4 dias para pais que querem entender o que está acontecendo, reconstruir a comunicação e se aproximar sem perder o filho."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "flex-start",
							gap: 14,
							background: C.white,
							border: `1px solid ${C.border}`,
							borderRadius: 12,
							padding: "16px 20px",
							marginBottom: 36,
							maxWidth: 520
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							size: 18,
							style: {
								color: C.goldSoft,
								marginTop: 2,
								flexShrink: 0
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								margin: 0,
								fontSize: 14,
								lineHeight: 1.6,
								color: C.navy
							},
							children: [
								"Existe um caminho entre a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: C.goldSoft,
										fontWeight: 600
									},
									children: "rejeição"
								}),
								" e a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: C.goldSoft,
										fontWeight: 600
									},
									children: "permissividade"
								}),
								".",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Um caminho de verdade, presença, responsabilidade e amor."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 20,
							flexWrap: "wrap",
							marginBottom: 36
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							onClick: open,
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: 10,
								background: C.navy,
								color: "#fff",
								borderRadius: 8,
								padding: "16px 28px",
								fontSize: 13,
								fontWeight: 700,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								textDecoration: "none",
								transition: "opacity 0.2s"
							},
							onMouseEnter: (e) => e.currentTarget.style.opacity = "0.85",
							onMouseLeave: (e) => e.currentTarget.style.opacity = "1",
							children: ["Quero participar da imersão ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 18,
								fontWeight: 700,
								color: C.navy
							},
							children: PRICE_LABEL
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 12,
								color: C.muted
							},
							children: "ingresso único"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: 28,
							flexWrap: "wrap"
						},
						children: [
							{
								Icon: Calendar,
								label: "13 a 16 de julho"
							},
							{
								Icon: Clock,
								label: "às 20h"
							},
							{
								Icon: Wifi,
								label: "Online e ao vivo"
							}
						].map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 7,
								fontSize: 13,
								color: C.muted
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 15,
									style: { color: C.navy }
								}),
								" ",
								label
							]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 14,
							marginTop: 44,
							paddingTop: 32,
							borderTop: `1px solid ${C.border}`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: pierry_new_default,
							alt: "Pierry Rodrigues",
							style: {
								width: 52,
								height: 52,
								borderRadius: "50%",
								objectFit: "cover",
								objectPosition: "top",
								border: `2px solid ${C.border}`
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 10,
									fontWeight: 700,
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									color: C.goldSoft,
									marginBottom: 3
								},
								children: "Mentor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontFamily: "'Fraunces', Georgia, serif",
									fontSize: 18,
									fontWeight: 600,
									color: C.navy
								},
								children: "Pierry Rodrigues"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 12,
									color: C.muted,
									marginTop: 2
								},
								children: "Pastor, conferencista e mentor de pais que enfrentam os desafios da homossexualidade de seus filhos."
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "relative",
					overflow: "hidden",
					minHeight: 600
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: pierry_new_default,
					alt: "Pierry Rodrigues",
					style: {
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center top"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					inset: 0,
					background: "linear-gradient(to right, rgba(247,246,242,0.35) 0%, transparent 30%)"
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { min-height: 55vw !important; }
          .hero-grid > div:first-child { padding: 48px 24px !important; }
        }
      ` })
		]
	});
}
function TrustStrip() {
	const items = [
		"Fundamentado na Bíblia",
		"Comunicação familiar",
		"Sem julgamentos",
		"Metodologia testada",
		"Pais reais, resultados reais"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			background: C.navy,
			padding: "14px 0",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				display: "flex",
				gap: 48,
				whiteSpace: "nowrap"
			},
			children: [...items, ...items].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				style: {
					color: "rgba(255,255,255,0.65)",
					fontSize: 12,
					fontWeight: 500,
					display: "inline-flex",
					alignItems: "center",
					gap: 10,
					flexShrink: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							color: C.goldSoft,
							fontSize: 10
						},
						children: "✦"
					}),
					" ",
					item
				]
			}, i))
		})
	});
}
function Problem({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: {
			background: C.white,
			padding: "100px 24px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 960,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { text: "O momento" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: "clamp(2rem, 4vw, 3rem)",
						lineHeight: 1.15,
						fontWeight: 700,
						color: C.navy,
						maxWidth: 720,
						margin: "16px 0 48px"
					},
					children: [
						"Talvez você esteja tentando salvar seu filho,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								color: C.muted,
								fontStyle: "italic"
							},
							children: "mas esteja perdendo o relacionamento."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						fontSize: 16,
						color: C.muted,
						marginBottom: 32
					},
					children: "Muitos pais chegam a esse momento com as mesmas perguntas em silêncio:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
						gap: 16,
						marginBottom: 48
					},
					children: [
						"Onde foi que eu errei?",
						"Será que fui ausente?",
						"Como posso amar sem concordar?",
						"Como falar a verdade sem afastá-lo?",
						"O que faço quando ele não quer me ouvir?",
						"Ainda existe um caminho de volta para nós?"
					].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							background: C.bg,
							border: `1px solid ${C.border}`,
							borderRadius: 12,
							padding: "20px 22px",
							display: "flex",
							gap: 12,
							alignItems: "flex-start"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontFamily: "'Fraunces', Georgia, serif",
								fontSize: 28,
								color: C.goldSoft,
								lineHeight: 1,
								marginTop: -4,
								flexShrink: 0,
								opacity: .6
							},
							children: "\""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								margin: 0,
								fontSize: 14,
								lineHeight: 1.6,
								color: C.navy,
								fontWeight: 500
							},
							children: q
						})]
					}, q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						maxWidth: 680,
						margin: "0 auto 40px",
						padding: "28px 32px",
						background: C.bg,
						borderLeft: `4px solid ${C.goldSoft}`,
						borderRadius: "0 12px 12px 0"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							margin: 0,
							fontFamily: "'Fraunces', Georgia, serif",
							fontSize: 20,
							fontStyle: "italic",
							color: C.navy,
							lineHeight: 1.5
						},
						children: [
							"Seu filho pode não estar rejeitando o que você fala. Ele pode estar reagendo à ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "forma" }),
							" como se sente quando você fala."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: { textAlign: "center" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						onClick: open,
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							background: C.navy,
							color: "#fff",
							borderRadius: 8,
							padding: "14px 32px",
							fontSize: 13,
							fontWeight: 700,
							letterSpacing: "0.1em",
							textTransform: "uppercase",
							textDecoration: "none"
						},
						children: ["Quero participar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
					})
				})
			]
		})
	});
}
function ForWhom({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: {
			background: C.bg,
			padding: "100px 24px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 1100,
				margin: "0 auto",
				display: "grid",
				gridTemplateColumns: "350px 1fr",
				gap: 64,
				alignItems: "start"
			},
			className: "for-whom-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { text: "Para quem é" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: {
							fontFamily: "'Fraunces', Georgia, serif",
							fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
							fontWeight: 700,
							color: C.navy,
							lineHeight: 1.2,
							margin: "16px 0 20px"
						},
						children: "Esta imersão é para você que…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 15,
							color: C.muted,
							lineHeight: 1.7,
							marginBottom: 32
						},
						children: "Talvez seu filho não precise de pais com todas as respostas. Talvez ele precise de pais presentes, maduros e dispostos a reconstruir a ponte."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						onClick: open,
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							background: C.navy,
							color: "#fff",
							borderRadius: 8,
							padding: "13px 26px",
							fontSize: 12,
							fontWeight: 700,
							letterSpacing: "0.1em",
							textTransform: "uppercase",
							textDecoration: "none"
						},
						children: ["Quero participar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					style: {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 12,
						margin: 0,
						padding: 0,
						listStyle: "none"
					},
					children: [
						"Ama seu filho, mas sente que está perdendo a conexão",
						"Não sabe como se posicionar sem parecer agressivo",
						"Sente culpa, medo, vergonha ou sensação de fracasso",
						"Não consegue conversar sem que tudo vire discussão",
						"Percebe que o filho se fechou emocionalmente",
						"Deseja preservar suas convicções sem usar a Bíblia como arma",
						"Quer escutar sem abrir mão da responsabilidade",
						"Deseja entender o coração do filho e reconstruir a confiança"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						style: {
							background: C.white,
							border: `1px solid ${C.border}`,
							borderRadius: 10,
							padding: "16px 18px",
							display: "flex",
							gap: 12,
							alignItems: "flex-start"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								width: 22,
								height: 22,
								borderRadius: "50%",
								background: `rgba(139,99,24,0.10)`,
								border: `1px solid rgba(139,99,24,0.25)`,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0,
								marginTop: 1
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 12,
								style: { color: C.gold }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 13,
								lineHeight: 1.55,
								color: C.navy
							},
							children: item
						})]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `.for-whom-grid { @media (max-width: 860px) { grid-template-columns: 1fr !important; } }` })
			]
		})
	});
}
function Modules() {
	const mods = [
		{
			Icon: Heart,
			title: "O coração antes do comportamento",
			body: "Comportamento é só a parte visível. Por trás existem medos, carências, vergonha e feridas não verbalizadas."
		},
		{
			Icon: Compass,
			title: "Como a identidade de um filho é formada",
			body: "Antes de saber o que faz, ele precisa responder: quem eu sou? Sou amado? Tenho valor? O vínculo familiar molda essa resposta."
		},
		{
			Icon: Users,
			title: "Pais feridos reagem a partir das próprias dores",
			body: "O comportamento do filho ativa feridas suas. Antes de perguntar 'o que há de errado com ele?', pergunte: o que isso revela em mim?"
		},
		{
			Icon: Shield,
			title: "Como corrigir sem perder o filho",
			body: "A acusação ataca a identidade. A verdade protege enquanto chama à responsabilidade. A correção precisa nascer da conexão."
		},
		{
			Icon: MessageCircle,
			title: "Amor não é aprovação de tudo",
			body: "Validar não é concordar. É comunicar: eu vejo você, você importa, você continua pertencendo."
		},
		{
			Icon: BookOpen,
			title: "Reconstruindo a comunicação dentro de casa",
			body: "Trocar acusação por conversa, reação por escuta, controle por presença, distância por reconexão."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: {
			background: C.navy,
			padding: "100px 24px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 1100,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					text: "O conteúdo",
					light: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: "clamp(2rem, 4vw, 3rem)",
						fontWeight: 700,
						color: "#fff",
						lineHeight: 1.15,
						margin: "16px 0 56px",
						maxWidth: 600
					},
					children: [
						"O que vamos trabalhar nesses ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: C.goldSoft },
							children: "quatro dias"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
						gap: 20
					},
					children: mods.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							background: "rgba(255,255,255,0.05)",
							border: "1px solid rgba(255,255,255,0.10)",
							borderRadius: 14,
							padding: "28px 26px"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 12,
									marginBottom: 18
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										width: 40,
										height: 40,
										borderRadius: "50%",
										background: "rgba(166,123,26,0.15)",
										border: "1px solid rgba(166,123,26,0.30)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexShrink: 0
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.Icon, {
										size: 18,
										style: { color: C.goldSoft }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontFamily: "'Fraunces', Georgia, serif",
										fontSize: 11,
										color: C.goldSoft,
										letterSpacing: "0.2em"
									},
									children: String(i + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									fontFamily: "'Fraunces', Georgia, serif",
									fontSize: 18,
									color: "#fff",
									margin: "0 0 10px",
									lineHeight: 1.3
								},
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									margin: 0,
									fontSize: 13,
									color: "rgba(255,255,255,0.55)",
									lineHeight: 1.65
								},
								children: m.body
							})
						]
					}, m.title))
				})
			]
		})
	});
}
function NotFor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: {
			background: C.white,
			padding: "100px 24px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 960,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
						fontWeight: 700,
						color: C.navy,
						lineHeight: 1.15,
						margin: "0 0 56px",
						maxWidth: 640
					},
					children: ["Honestidade sobre o que esta imersão é", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: C.muted },
						children: " — e o que não é."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 24
					},
					className: "not-for-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "32px",
							borderRadius: 14,
							border: "1px solid rgba(192,57,43,0.15)",
							background: "rgba(192,57,43,0.03)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 10,
								fontWeight: 700,
								letterSpacing: "0.25em",
								textTransform: "uppercase",
								color: "rgba(192,57,43,0.7)",
								marginBottom: 24
							},
							children: "O que esta imersão não é"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							style: {
								margin: 0,
								padding: 0,
								listStyle: "none",
								display: "flex",
								flexDirection: "column",
								gap: 12
							},
							children: [
								"Culpar os pais",
								"Humilhar os filhos",
								"Prometer mudança de orientação sexual",
								"Oferecer uma causa única",
								"Promover discussões ideológicas",
								"Substituir acompanhamento psicológico"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								style: {
									display: "flex",
									gap: 10,
									alignItems: "flex-start",
									fontSize: 14,
									color: C.navy
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									size: 14,
									style: {
										color: "rgba(192,57,43,0.55)",
										marginTop: 2,
										flexShrink: 0
									}
								}), x]
							}, x))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "32px",
							borderRadius: 14,
							border: `1px solid rgba(139,99,24,0.25)`,
							background: `rgba(139,99,24,0.04)`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 10,
								fontWeight: 700,
								letterSpacing: "0.25em",
								textTransform: "uppercase",
								color: C.gold,
								marginBottom: 24
							},
							children: "O que ela foi criada para fazer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							style: {
								margin: 0,
								padding: 0,
								listStyle: "none",
								display: "flex",
								flexDirection: "column",
								gap: 12
							},
							children: [
								"Restaurar o diálogo",
								"Fortalecer os vínculos",
								"Trabalhar presença parental",
								"Ensinar comunicação madura",
								"Proteger a dignidade do filho",
								"Iniciar reconstrução familiar"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								style: {
									display: "flex",
									gap: 10,
									alignItems: "flex-start",
									fontSize: 14,
									color: C.navy,
									fontWeight: 500
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 14,
									style: {
										color: C.gold,
										marginTop: 2,
										flexShrink: 0
									}
								}), x]
							}, x))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `.not-for-grid { @media (max-width: 680px) { grid-template-columns: 1fr !important; } }` })
			]
		})
	});
}
function Scripture({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: {
			background: C.bg,
			padding: "100px 24px",
			textAlign: "center"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 720,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					text: "A promessa",
					center: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: "clamp(2rem, 4vw, 3.2rem)",
						fontWeight: 700,
						color: C.navy,
						lineHeight: 1.15,
						margin: "16px 0 32px"
					},
					children: [
						"Seu filho é ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontStyle: "italic",
								color: C.goldSoft
							},
							children: "maior"
						}),
						" do que o momento que está vivendo."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: { marginBottom: 40 },
					children: [
						"Maior do que uma escolha.",
						"Maior do que uma discussão.",
						"Maior do que o pior dia da vida dele."
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 17,
							color: C.muted,
							margin: "8px 0"
						},
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					style: {
						background: C.navy,
						color: "#fff",
						borderRadius: 16,
						padding: "44px 48px",
						textAlign: "left",
						position: "relative",
						margin: "0 0 48px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								position: "absolute",
								top: -16,
								left: 32,
								background: C.navy,
								color: C.goldSoft,
								fontSize: 10,
								fontWeight: 700,
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								border: `1px solid rgba(139,99,24,0.4)`,
								borderRadius: 999,
								padding: "5px 14px"
							},
							children: "Malaquias 4:6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontFamily: "'Fraunces', Georgia, serif",
								fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
								fontStyle: "italic",
								lineHeight: 1.5,
								margin: "0 0 20px",
								color: "#fff"
							},
							children: "\"Ele fará voltar o coração dos pais aos filhos e o coração dos filhos aos pais.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							height: 2,
							background: `linear-gradient(90deg, transparent, ${C.goldSoft}, transparent)`,
							margin: "20px 0",
							opacity: .5
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								margin: 0,
								color: "rgba(255,255,255,0.65)",
								fontSize: 14,
								lineHeight: 1.7
							},
							children: "O texto começa pelos pais. A restauração começa quando o coração dos pais volta primeiro."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					onClick: open,
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: 8,
						background: C.navy,
						color: "#fff",
						borderRadius: 8,
						padding: "14px 32px",
						fontSize: 13,
						fontWeight: 700,
						letterSpacing: "0.1em",
						textTransform: "uppercase",
						textDecoration: "none"
					},
					children: ["Garantir minha vaga ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
				})
			]
		})
	});
}
function FinalCTA({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inscricao",
		style: {
			background: C.white,
			padding: "100px 24px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 680,
				margin: "0 auto",
				background: C.bg,
				border: `1px solid ${C.border}`,
				borderRadius: 20,
				padding: "60px 56px",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					height: 2,
					background: `linear-gradient(90deg, transparent, ${C.goldSoft}, transparent)`,
					marginBottom: 40
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						fontSize: 10,
						fontWeight: 700,
						letterSpacing: "0.3em",
						textTransform: "uppercase",
						color: C.gold,
						marginBottom: 16
					},
					children: "De Frente com a Homossexualidade"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
						fontWeight: 700,
						color: C.navy,
						lineHeight: 1.2,
						margin: "0 0 36px"
					},
					children: [
						"Quatro dias para iniciar uma ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontStyle: "italic",
								color: C.goldSoft
							},
							children: "nova conversa"
						}),
						" dentro da sua família."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: 12,
						marginBottom: 36
					},
					children: [
						{
							Icon: Calendar,
							label: "Quando",
							val: "13 a 16 de julho"
						},
						{
							Icon: Clock,
							label: "Horário",
							val: "às 20h"
						},
						{
							Icon: Wifi,
							label: "Formato",
							val: "Online · ao vivo"
						}
					].map(({ Icon, label, val }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							background: C.white,
							border: `1px solid ${C.border}`,
							borderRadius: 10,
							padding: "14px 10px",
							textAlign: "center"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 18,
								style: {
									color: C.goldSoft,
									margin: "0 auto 6px"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 10,
									textTransform: "uppercase",
									letterSpacing: "0.12em",
									color: C.muted,
									fontWeight: 600
								},
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 13,
									fontWeight: 700,
									color: C.navy,
									marginTop: 4
								},
								children: val
							})
						]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: 28 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							fontSize: 11,
							textTransform: "uppercase",
							letterSpacing: "0.15em",
							color: C.muted,
							marginBottom: 6
						},
						children: "Ingresso"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							fontFamily: "'Fraunces', Georgia, serif",
							fontSize: "clamp(3rem, 8vw, 5rem)",
							fontWeight: 700,
							color: C.navy,
							lineHeight: 1
						},
						children: ["R$ 19", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: "0.5em",
								color: C.goldSoft
							},
							children: ",90"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					onClick: open,
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: 10,
						background: C.navy,
						color: "#fff",
						borderRadius: 8,
						padding: "18px 36px",
						fontSize: 14,
						fontWeight: 700,
						letterSpacing: "0.08em",
						textTransform: "uppercase",
						textDecoration: "none"
					},
					children: ["Garantir meu ingresso agora ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						marginTop: 20,
						fontSize: 13,
						color: C.muted,
						fontStyle: "italic"
					},
					children: "Você não precisa ter todas as respostas para começar a reconstruir a relação."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					height: 2,
					background: `linear-gradient(90deg, transparent, ${C.goldSoft}, transparent)`,
					marginTop: 40
				} })
			]
		})
	});
}
function FaqSection() {
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
			q: "O conteúdo será cristão?",
			a: "Sim. Fundamentado em princípios bíblicos, comunicação familiar, comportamento humano e reflexão emocional."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: {
			background: C.bg,
			padding: "100px 24px",
			borderTop: `1px solid ${C.border}`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 720,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { text: "Perguntas frequentes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
						fontWeight: 700,
						color: C.navy,
						lineHeight: 1.2,
						margin: "16px 0 48px"
					},
					children: "O que você precisa saber antes de entrar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						borderTop: `1px solid ${C.border}`,
						borderBottom: `1px solid ${C.border}`
					},
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { borderBottom: i < faqs.length - 1 ? `1px solid ${C.border}` : "none" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(open === i ? null : i),
							style: {
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								gap: 24,
								padding: "22px 0",
								background: "none",
								border: "none",
								cursor: "pointer",
								textAlign: "left"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontFamily: "'Fraunces', Georgia, serif",
									fontSize: 17,
									color: C.navy,
									fontWeight: 600
								},
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									width: 30,
									height: 30,
									borderRadius: "50%",
									border: `1px solid ${open === i ? C.navy : C.border}`,
									background: open === i ? C.navy : "transparent",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0,
									transition: "all 0.2s"
								},
								children: open === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									size: 13,
									style: { color: "#fff" }
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									size: 13,
									style: { color: C.gold }
								})
							})]
						}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								margin: "0 0 24px",
								fontSize: 14,
								lineHeight: 1.75,
								color: C.muted,
								paddingRight: 48
							},
							children: f.a
						})]
					}, f.q))
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		style: {
			background: C.navy,
			padding: "40px 24px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				maxWidth: 1100,
				margin: "0 auto",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 16,
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					height: 2,
					width: "100%",
					background: `linear-gradient(90deg, transparent, ${C.goldSoft}40, transparent)`,
					marginBottom: 8
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						fontSize: 14,
						color: "rgba(255,255,255,0.5)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontFamily: "'Fraunces', Georgia, serif",
							color: C.goldSoft,
							fontWeight: 600
						},
						children: "De Frente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "rgba(255,255,255,0.35)" },
						children: " · Imersão para Pais"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						fontSize: 11,
						color: "rgba(255,255,255,0.3)"
					},
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" — Todos os direitos reservados."
					]
				})
			]
		})
	});
}
function Label({ text, light, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "inline-flex",
			alignItems: "center",
			gap: 8,
			fontSize: 10,
			fontWeight: 700,
			letterSpacing: "0.28em",
			textTransform: "uppercase",
			color: light ? C.goldSoft : C.gold,
			...center ? {
				width: "100%",
				justifyContent: "center"
			} : {}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: 20,
				height: 1.5,
				background: "currentColor"
			} }),
			" ",
			text,
			" ",
			center && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: 20,
				height: 1.5,
				background: "currentColor"
			} })
		]
	});
}
//#endregion
export { LandingPageNew as component };
