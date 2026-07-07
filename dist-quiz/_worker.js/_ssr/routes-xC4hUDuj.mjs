import { r as __toESM } from "../__23tanstack-start-server-fn-resolver-zaRExVra.mjs";
import { r as trackStep } from "./analytics-xFRnpUg6.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as QuizProgress, c as flow2Questions, i as QuestionScreen, l as introQuestions, n as LoadingScreen, o as captureUtms, r as PostResultFlow, s as flow1Questions, t as LeadForm } from "./PostResultFlow-BVLEciUK.mjs";
import { t as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-xC4hUDuj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InsertScreen({ insert, onContinue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border-2 p-6 sm:p-8",
			style: {
				borderColor: "color-mix(in oklab, var(--rainbow-violet) 35%, white)",
				background: "linear-gradient(180deg, color-mix(in oklab, var(--rainbow-yellow) 10%, white), color-mix(in oklab, var(--rainbow-violet) 8%, white))"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest font-semibold text-center text-muted-foreground",
					children: insert.kicker ?? "Um respiro"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-2xl sm:text-3xl font-extrabold text-center text-balance leading-tight",
					children: insert.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-3 text-foreground text-sm sm:text-base text-balance leading-relaxed",
					children: insert.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: p.bold ? "font-bold text-center" : "text-center",
						children: p.text
					}, i))
				}),
				insert.bullets && insert.bullets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid grid-cols-2 gap-2 text-sm",
					children: insert.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl px-3 py-2 text-center font-medium",
						style: { background: "color-mix(in oklab, var(--rainbow-green) 18%, white)" },
						children: b
					}, i))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onContinue,
			className: "mt-8 w-full py-4 rounded-full font-bold text-white text-base sm:text-lg shadow-lg transition-transform hover:-translate-y-0.5",
			style: { background: "var(--gradient-rainbow-no-red)" },
			children: insert.cta ?? "Continuar"
		})]
	});
}
var FLOW1 = {
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
	],
	cta: "Quero restaurar a conexão com meu filho"
};
var FLOW2 = {
	title: "Probabilidade de Permanecer Preso em Conflitos de Identidade",
	level: "NÍVEL ALTO",
	intro: "De acordo com suas respostas, identificamos padrões emocionais e relacionais que ajudam a explicar o que você sente hoje.",
	factors: [
		{
			label: "Padrão identificado",
			value: "Necessidade de pertencimento"
		},
		{
			label: "Ferida emocional",
			value: "Rejeição não compreendida"
		},
		{
			label: "Conflito interno",
			value: "Quem eu sou x quem dizem que sou"
		},
		{
			label: "Ponto cego",
			value: "Identidade reduzida à orientação"
		}
	],
	stats: [
		{
			value: "84%",
			text: "relataram compreender melhor sua própria história"
		},
		{
			value: "91%",
			text: "relataram maior clareza emocional"
		},
		{
			value: "89%",
			text: "sentiram mais paz e direção interior"
		}
	],
	cta: "Quero compreender minha história"
};
function ResultScreen({ flow, onRestart, onContinue }) {
	const data = flow === "flow1" ? FLOW1 : FLOW2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl sm:text-3xl font-bold text-center text-balance",
				children: data.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-muted-foreground mb-2 text-center",
						children: "Probabilidade detectada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-3 rounded-full",
						style: { background: "var(--gradient-rainbow-no-red)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-1.5 w-6 h-6 rounded-full bg-white border-2 -translate-x-1/2",
							style: {
								left: "82%",
								borderColor: "var(--rainbow-violet)",
								boxShadow: "0 4px 12px -4px rgba(0,0,0,0.2)"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-5 mt-2 text-[10px] sm:text-xs text-muted-foreground",
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
								className: "text-right font-semibold text-foreground",
								children: "muito alto"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border-2 p-5",
				style: {
					borderColor: "color-mix(in oklab, var(--rainbow-violet) 30%, white)",
					backgroundColor: "color-mix(in oklab, var(--rainbow-violet) 8%, white)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold tracking-[0.18em]",
					style: { color: "var(--rainbow-violet)" },
					children: data.level
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm sm:text-base text-foreground",
					children: data.intro
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6",
				children: data.factors.map((f, i) => {
					const colors = [
						"var(--rainbow-orange)",
						"var(--rainbow-yellow)",
						"var(--rainbow-green)",
						"var(--rainbow-blue)",
						"var(--rainbow-indigo)",
						"var(--rainbow-violet)"
					];
					const c = colors[i % colors.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 p-5 bg-card text-center",
						style: { borderColor: `color-mix(in oklab, ${c} 35%, white)` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: f.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-semibold",
							style: { color: c },
							children: f.value
						})]
					}, f.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl bg-accent p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold text-foreground mb-4 text-center",
					children: "Resultados observados em quem compreendeu sua história"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
					children: data.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold",
							style: {
								backgroundImage: "var(--gradient-rainbow-no-red)",
								WebkitBackgroundClip: "text",
								backgroundClip: "text",
								color: "transparent"
							},
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-1",
							children: s.text
						})]
					}, s.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onContinue,
					className: "w-full py-4 rounded-full font-semibold text-white text-base sm:text-lg shadow-lg transition-transform hover:-translate-y-0.5",
					style: { background: "var(--gradient-rainbow-no-red)" },
					children: "Continuar"
				})
			})
		]
	});
}
function fbq(...args) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...args);
}
function IntroScreen({ onStart }) {
	(0, import_react.useEffect)(() => {
		fbq("track", "ViewContent", { content_name: "Quiz — Mapa da Identidade Homossexual" });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block w-2 h-2 rounded-full",
					style: { background: "var(--gradient-rainbow)" }
				}), "Diagnóstico gratuito"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-balance leading-tight",
				children: [
					"Mapa da",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							backgroundImage: "var(--gradient-rainbow)",
							WebkitBackgroundClip: "text",
							backgroundClip: "text",
							color: "transparent"
						},
						children: "Identidade Homossexual"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto text-balance",
				children: "Descubra o que pode estar por trás dos conflitos de identidade, da homossexualidade e dos afastamentos familiares."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left",
				children: [
					{
						c: "var(--rainbow-orange)",
						t: "Para pais e responsáveis"
					},
					{
						c: "var(--rainbow-blue)",
						t: "Para quem vive a questão"
					},
					{
						c: "var(--rainbow-violet)",
						t: "Resultado personalizado"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border-2 p-4 bg-card flex items-center gap-3",
					style: { borderColor: `color-mix(in oklab, ${item.c} 30%, white)` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-2.5 h-2.5 rounded-full shrink-0",
						style: { backgroundColor: item.c }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: item.t
					})]
				}, item.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onStart,
				className: "mt-10 inline-block w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-white text-base sm:text-lg shadow-xl transition-transform hover:-translate-y-0.5",
				style: { background: "var(--gradient-rainbow)" },
				children: "Começar diagnóstico"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted-foreground",
				children: "Leva menos de 3 minutos."
			})
		]
	});
}
function track(step) {
	trackStep({ data: { step } }).catch(() => {});
}
function Index() {
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
		if (!flow) return introQuestions;
		return [...introQuestions, ...flow === "flow1" ? flow1Questions : flow2Questions];
	}, [flow])[step];
	const total = (flow ? flow === "flow1" ? flow1Questions.length : flow2Questions.length : flow2Questions.length) + introQuestions.length;
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
				"Sou familiar ou responsável por alguém que vive essa questão": "familiar",
				"Sou homossexual": "homossexual",
				"Estou em dúvida sobre minha sexualidade": "em-duvida"
			}[opt.label] || opt.label;
			sessionStorage.setItem("_tr_segment", segment);
			const sid = sessionStorage.getItem("_tr_s") || Date.now().toString(36) + Math.random().toString(36).slice(2);
			fetch("https://fvsojwkkumjhmvyrvxiy.supabase.co/rest/v1/events", {
				method: "POST",
				keepalive: true,
				headers: {
					"Content-Type": "application/json",
					"apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2c29qd2trdW1qaG12eXJ2eGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2ODcwNzUsImV4cCI6MjA5ODI2MzA3NX0.vA14tt6WuoUYmunOSFjxdn8E3Yxm11dikePCz9BahgA",
					"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2c29qd2trdW1qaG12eXJ2eGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2ODcwNzUsImV4cCI6MjA5ODI2MzA3NX0.vA14tt6WuoUYmunOSFjxdn8E3Yxm11dikePCz9BahgA",
					"Prefer": "return=minimal"
				},
				body: JSON.stringify({
					site_id: "quiz",
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
		if (nextStep >= (flow ? introQuestions.length + (flow === "flow1" ? flow1Questions.length : flow2Questions.length) : introQuestions.length)) setPhase("loading");
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
		className: "min-h-screen bg-background text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-5 sm:px-6 py-6 sm:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleBack,
					disabled: phase === "intro",
					className: "grid place-items-center w-9 h-9 rounded-full border bg-card text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent transition-colors",
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
					phase === "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroScreen, { onStart: handleStart }),
					phase === "questions" && current && current.kind !== "insert" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionScreen, {
						question: current,
						onSelect: handleAnswer
					}, current.id),
					phase === "questions" && current && current.kind === "insert" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertScreen, {
						insert: current,
						onContinue: () => {
							const nextStep = step + 1;
							if (nextStep >= (flow ? introQuestions.length + (flow === "flow1" ? flow1Questions.length : flow2Questions.length) : introQuestions.length)) setPhase("loading");
							else setStep(nextStep);
						}
					}, current.id),
					phase === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { onDone: () => setPhase("lead") }),
					phase === "lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
						flow,
						onSubmit: (l) => {
							setLead(l);
							setPhase("result");
						}
					}),
					phase === "result" && flow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultScreen, {
						flow,
						onRestart: reset,
						onContinue: () => setPhase("post")
					}),
					phase === "post" && flow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostResultFlow, {
						flow,
						name: lead?.name ?? "",
						onRestart: reset
					})
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
