import { r as __toESM } from "../__23tanstack-start-server-fn-resolver-D8mLXoMc.mjs";
import { r as trackStep } from "./analytics-CL8_KFbs.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as PostResultFlow, c as ResultScreen, d as flow2Questions, f as introQuestions, i as LoadingScreen, l as captureUtms, n as IntroScreen, o as QuestionScreen, r as LeadForm, s as QuizProgress, t as InsertScreen, u as flow1Questions } from "./PostResultFlow-Cbsw8TCR.mjs";
import { t as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DHXit7pj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
