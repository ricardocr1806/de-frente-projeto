import { r as __toESM } from "../__23tanstack-start-server-fn-resolver-zaRExVra.mjs";
import { r as trackStep } from "./analytics-xFRnpUg6.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as QuizProgress, i as QuestionScreen, l as introQuestions, n as LoadingScreen, o as captureUtms, r as PostResultFlow, s as flow1Questions, t as LeadForm } from "./PostResultFlow-DKdNJBAv.mjs";
import { t as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/v2-CJ6VDXZ-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var V2_THEME = {
	"--background": "#faf7f2",
	"--foreground": "#1c2e1f",
	"--card": "#f5efe2",
	"--card-foreground": "#1c2e1f",
	"--popover": "#f5efe2",
	"--popover-foreground": "#1c2e1f",
	"--muted": "#ede8df",
	"--muted-foreground": "#5a6b5c",
	"--accent": "#ede8df",
	"--accent-foreground": "#1c2e1f",
	"--border": "#ddd6c8",
	"--input": "#ddd6c8",
	"--ring": "#b8892e",
	"--primary": "#b8892e",
	"--primary-foreground": "#faf7f2",
	"--rainbow-red": "#b8892e",
	"--rainbow-orange": "#c9983a",
	"--rainbow-yellow": "#e0b64f",
	"--rainbow-green": "#3a6b45",
	"--rainbow-blue": "#3a6b45",
	"--rainbow-indigo": "#b8892e",
	"--rainbow-violet": "#c9983a",
	"--gradient-rainbow": "linear-gradient(135deg, #e0b64f 0%, #c9983a 50%, #b8892e 100%)",
	"--gradient-rainbow-no-red": "linear-gradient(135deg, #e0b64f 0%, #c9983a 50%, #b8892e 100%)",
	background: "#faf7f2",
	color: "#1c2e1f",
	minHeight: "100dvh"
};
var GOLD = "#c9983a";
var TEXT = "#1c2e1f";
var TEXT_MUTED = "#5a6b5c";
var CARD_BG = "#f5efe2";
var GREEN_DARK = "#1c3a22";
var GOLD_GRADIENT = "linear-gradient(135deg, #e0b64f 0%, #c9983a 50%, #b8892e 100%)";
var GOLD_BORDER = "rgba(185,137,46,0.3)";
var CREAM = "#faf7f2";
var familyIntroQuestions = introQuestions.map((q) => q.id === "relation" ? {
	...q,
	options: q.options.filter((o) => o.next === "flow1")
} : q);
var familyLoadingQuotes = [
	{
		quote: "A distância que você sente do seu filho não é definitiva.",
		author: "Pierry Rodrigues"
	},
	{
		quote: "Antes de mudar o comportamento, é preciso alcançar o coração.",
		author: "Pierry Rodrigues"
	},
	{
		quote: "Conexão antes de correção. Sempre.",
		author: "Pierry Rodrigues"
	}
];
function FamilyIntroScreen({ onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-6",
				style: { color: GOLD },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block w-2 h-2 rounded-full",
					style: { background: GOLD }
				}), "Diagnóstico Gratuito para Pais"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-balance leading-tight",
				style: { color: TEXT },
				children: [
					"O que está acontecendo",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: GOLD },
						children: "entre você e seu filho?"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base sm:text-lg max-w-xl mx-auto text-balance",
				style: { color: TEXT_MUTED },
				children: "Em menos de 3 minutos, identifique os padrões emocionais que estão afastando sua família — e o que fazer a partir de agora."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left",
				children: [
					"Para pais",
					"Para mães",
					"Para responsáveis"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl p-4 flex items-center gap-3",
					style: {
						border: `2px solid ${GOLD_BORDER}`,
						background: CARD_BG
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-2.5 h-2.5 rounded-full shrink-0",
						style: { backgroundColor: GOLD }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						style: { color: TEXT },
						children: t
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onStart,
				className: "mt-10 inline-block w-full sm:w-auto px-10 py-4 rounded-full text-base sm:text-lg shadow-md transition-transform hover:-translate-y-0.5",
				style: {
					background: GREEN_DARK,
					color: "#faf7f2",
					fontWeight: 700
				},
				children: "Iniciar diagnóstico"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs",
				style: { color: TEXT_MUTED },
				children: "100% gratuito · Menos de 3 minutos"
			})
		]
	});
}
function V2InsertScreen({ insert, onContinue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl p-6 sm:p-8",
			style: {
				border: `2px solid ${GOLD_BORDER}`,
				background: CARD_BG
			},
			children: [
				insert.kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest font-semibold text-center mb-3",
					style: { color: GOLD },
					children: insert.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl sm:text-3xl font-extrabold text-center text-balance leading-tight",
					style: { color: TEXT },
					children: insert.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-3 text-sm sm:text-base text-balance leading-relaxed",
					children: insert.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: p.bold ? "font-bold text-center" : "text-center",
						style: { color: p.bold ? TEXT : TEXT_MUTED },
						children: p.text
					}, i))
				}),
				insert.bullets && insert.bullets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid grid-cols-2 gap-2 text-sm",
					children: insert.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl px-3 py-2 text-center font-medium",
						style: {
							background: CREAM,
							color: TEXT,
							border: `1px solid ${GOLD_BORDER}`
						},
						children: b
					}, i))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onContinue,
			className: "mt-8 w-full py-4 rounded-full font-bold text-base sm:text-lg shadow-md transition-transform hover:-translate-y-0.5",
			style: {
				background: GREEN_DARK,
				color: "#faf7f2"
			},
			children: insert.cta ?? "Continuar"
		})]
	});
}
var RESULT_DATA = {
	title: "Probabilidade de Agravamento do Distanciamento Familiar",
	level: "NÍVEL ALTO",
	intro: "De acordo com suas respostas, identificamos 4 fatores que estão aumentando a distância emocional entre você e seu filho.",
	factors: [
		{
			label: "Padrão identificado",
			value: "Correção antes da conexão"
		},
		{
			label: "Sintoma emocional",
			value: "Medo de falar e afastar"
		},
		{
			label: "Bloqueio principal",
			value: "Vergonha não resolvida"
		},
		{
			label: "Ponto cego",
			value: "Identidade vista só pelo comportamento"
		}
	],
	stats: [
		{
			value: "78%",
			text: "dos pais relataram melhora significativa no diálogo"
		},
		{
			value: "94%",
			text: "relataram mais clareza para lidar com a situação"
		},
		{
			value: "87%",
			text: "sentiram mais conexão emocional com seus filhos"
		}
	]
};
function V2ResultScreen({ onRestart, onContinue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl sm:text-3xl font-bold text-center text-balance",
				style: { color: TEXT },
				children: RESULT_DATA.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium mb-2 text-center",
						style: { color: TEXT_MUTED },
						children: "Probabilidade detectada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-3 rounded-full",
						style: { background: GOLD_GRADIENT },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-1.5 w-6 h-6 rounded-full -translate-x-1/2",
							style: {
								left: "82%",
								background: "#fff",
								border: `2px solid ${GOLD}`,
								boxShadow: "0 4px 12px -4px rgba(0,0,0,0.2)"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-5 mt-2 text-[10px] sm:text-xs",
						style: { color: TEXT_MUTED },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-left",
								children: "baixo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-center",
								children: "leve"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-center",
								children: "médio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-center",
								children: "alto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right font-semibold",
								style: { color: GOLD },
								children: "muito alto"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl p-5",
				style: {
					border: `2px solid ${GOLD_BORDER}`,
					background: CARD_BG
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold tracking-[0.18em]",
					style: { color: GOLD },
					children: RESULT_DATA.level
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm sm:text-base",
					style: { color: TEXT_MUTED },
					children: RESULT_DATA.intro
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6",
				children: RESULT_DATA.factors.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl p-5 text-center",
					style: {
						border: `2px solid ${GOLD_BORDER}`,
						background: CARD_BG
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider",
						style: { color: TEXT_MUTED },
						children: f.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-semibold",
						style: { color: GOLD },
						children: f.value
					})]
				}, f.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl p-6",
				style: {
					background: CARD_BG,
					border: `1px solid ${GOLD_BORDER}`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold text-center mb-4",
					style: { color: TEXT },
					children: "Resultados observados em pais que compreenderam a história do filho"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
					children: RESULT_DATA.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold",
							style: { color: GOLD },
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs mt-1",
							style: { color: TEXT_MUTED },
							children: s.text
						})]
					}, s.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onContinue,
					className: "w-full py-4 rounded-full font-semibold text-base sm:text-lg shadow-md transition-transform hover:-translate-y-0.5",
					style: {
						background: GREEN_DARK,
						color: "#faf7f2",
						fontWeight: 700
					},
					children: "Continuar"
				})
			})
		]
	});
}
function track(step) {
	trackStep({ data: { step } }).catch(() => {});
}
function IndexV2() {
	const [phase, setPhase] = (0, import_react.useState)("intro");
	const [flow, setFlow] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [lead, setLead] = (0, import_react.useState)(null);
	const halfwayTracked = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		captureUtms();
		track("1_page_view");
	}, []);
	const current = (0, import_react.useMemo)(() => {
		if (!flow) return familyIntroQuestions;
		return [...familyIntroQuestions, ...flow1Questions];
	}, [flow])[step];
	const total = familyIntroQuestions.length + flow1Questions.length;
	const progress = phase === "questions" ? Math.round(step / total * 100) : 0;
	(0, import_react.useEffect)(() => {
		if (phase === "questions" && progress >= 50 && !halfwayTracked.current) {
			halfwayTracked.current = true;
			track("3_halfway");
		}
	}, [phase, progress]);
	(0, import_react.useEffect)(() => {
		if (phase === "loading") track("4_questions_done");
		if (phase === "lead") track("5_lead_view");
		if (phase === "result") track("7_result_view");
	}, [phase]);
	function reset() {
		setPhase("intro");
		setFlow(null);
		setStep(0);
		setAnswers({});
		setLead(null);
		halfwayTracked.current = false;
	}
	function handleStart() {
		track("2_quiz_started");
		setPhase("questions");
		setStep(0);
	}
	function handleAnswer(opt) {
		if (!current) return;
		setAnswers((a) => ({
			...a,
			[current.id]: opt.label
		}));
		if (current.id === "relation" && opt.next) {
			const segment = {
				"Sou pai": "pai",
				"Sou mãe": "mae",
				"Sou familiar ou responsável por alguém que vive essa questão": "familiar"
			}[opt.label] || opt.label;
			sessionStorage.setItem("_tr_segment", segment);
			const sid = sessionStorage.getItem("_tr_s") || Date.now().toString(36) + Math.random().toString(36).slice(2);
			fetch("https://fvsojwkkumjhmvyrvxiy.supabase.co/rest/v1/events", {
				method: "POST",
				keepalive: true,
				headers: {
					"Content-Type": "application/json",
					apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2c29qd2trdW1qaG12eXJ2eGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2ODcwNzUsImV4cCI6MjA5ODI2MzA3NX0.vA14tt6WuoUYmunOSFjxdn8E3Yxm11dikePCz9BahgA",
					Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2c29qd2trdW1qaG12eXJ2eGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2ODcwNzUsImV4cCI6MjA5ODI2MzA3NX0.vA14tt6WuoUYmunOSFjxdn8E3Yxm11dikePCz9BahgA",
					Prefer: "return=minimal"
				},
				body: JSON.stringify({
					site_id: "quiz-v2",
					site_url: window.location.origin,
					event_type: "relation_select",
					session_id: sid,
					page_url: window.location.pathname,
					cta_type: segment
				})
			}).catch(() => {});
			setFlow(opt.next);
			setStep((s) => s + 1);
			return;
		}
		const nextStep = step + 1;
		if (nextStep >= (flow ? familyIntroQuestions.length + flow1Questions.length : familyIntroQuestions.length)) setPhase("loading");
		else setStep(nextStep);
	}
	function handleBack() {
		if (phase === "intro") return;
		if (phase === "post") {
			setPhase("result");
			return;
		}
		if (phase === "lead") {
			setPhase("questions");
			return;
		}
		if (phase === "result" || phase === "loading") {
			setPhase("questions");
			return;
		}
		if (step === 0) {
			setPhase("intro");
			return;
		}
		setStep((s) => Math.max(0, s - 1));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: V2_THEME,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-5 sm:px-6 py-6 sm:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleBack,
					disabled: phase === "intro",
					className: "grid place-items-center w-9 h-9 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
					style: {
						border: "1px solid #ddd6c8",
						background: "#ede8df",
						color: TEXT
					},
					"aria-label": "Voltar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: phase !== "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizProgress, {
						value: phase === "questions" ? progress : 100,
						rainbow: true
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pt-2 pb-16",
				children: [
					phase === "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyIntroScreen, { onStart: handleStart }),
					phase === "questions" && current && current.kind !== "insert" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionScreen, {
						question: current,
						onSelect: handleAnswer
					}, current.id),
					phase === "questions" && current && current.kind === "insert" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V2InsertScreen, {
						insert: current,
						onContinue: () => {
							const nextStep = step + 1;
							if (nextStep >= (flow ? familyIntroQuestions.length + flow1Questions.length : familyIntroQuestions.length)) setPhase("loading");
							else setStep(nextStep);
						}
					}, current.id),
					phase === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {
						onDone: () => setPhase("lead"),
						label: "Montando seu diagnóstico familiar…",
						quotes: familyLoadingQuotes
					}),
					phase === "lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
						flow: "flow1",
						onSubmit: (l) => {
							setLead(l);
							setPhase("result");
						}
					}),
					phase === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V2ResultScreen, {
						onRestart: reset,
						onContinue: () => setPhase("post")
					}),
					phase === "post" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostResultFlow, {
						flow: "flow1",
						name: lead?.name ?? "",
						onRestart: reset
					})
				]
			})]
		})
	});
}
//#endregion
export { IndexV2 as component };
