import { n as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as stringType, i as recordType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CIDHU71z.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { m as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeadModal-DChNV1j1.js
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
var trackLp2 = createServerFn({ method: "POST" }).validator(objectType({ event: enumType(["page_view", "checkout_click"]) })).handler(createSsrRpc("0e2789d576a82367e1770dcc5436e6609fd531e34ab12104eddf185149172f6e"));
function captureUtms() {
	if (typeof window === "undefined") return {};
	const params = new URLSearchParams(window.location.search);
	const captured = {};
	params.forEach((v, k) => {
		if (v) captured[k] = v;
	});
	if (Object.keys(captured).length === 0) return getUtms();
	const merged = {
		...getUtms(),
		...captured
	};
	sessionStorage.setItem("utms", JSON.stringify(merged));
	return merged;
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
var sendLead = createServerFn({ method: "POST" }).validator(objectType({
	name: stringType(),
	email: stringType(),
	phone: stringType(),
	lp: stringType().optional(),
	source: stringType().optional(),
	tags: arrayType(stringType()).optional(),
	utms: recordType(stringType(), stringType()).optional()
})).handler(createSsrRpc("7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa"));
var DEFAULT_CHECKOUT = "https://pay.assiny.com.br/1d926e/node/3fZr7o";
function formatPhone(raw) {
	const d = raw.replace(/\D/g, "").slice(0, 11);
	if (d.length <= 2) return d.length ? `(${d}` : "";
	if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
	if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
	return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function isValidPhone(raw) {
	const d = raw.replace(/\D/g, "");
	return (d.length === 10 || d.length === 11) && parseInt(d.slice(0, 2)) >= 11;
}
function fbq(...args) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...args);
}
function LeadModal({ onClose, checkoutUrl = DEFAULT_CHECKOUT, checkoutValue = 19.9, leadSource, leadTags, lp }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const nameOk = name.trim().length > 1;
	const emailOk = /\S+@\S+\.\S+/.test(email.trim());
	const phoneOk = isValidPhone(phone);
	const valid = nameOk && emailOk && phoneOk;
	async function handleSubmit(e) {
		e.preventDefault();
		setTouched(true);
		if (!valid) return;
		setLoading(true);
		const cleanPhone = phone.replace(/\D/g, "");
		const utms = getUtms();
		sendLead({ data: {
			name: name.trim(),
			email: email.trim(),
			phone: cleanPhone,
			lp,
			...leadSource ? { source: leadSource } : {},
			...leadTags ? { tags: leadTags } : {},
			utms
		} }).catch(() => {});
		trackLp2({ data: { event: "checkout_click" } }).catch(() => {});
		fbq("track", "InitiateCheckout", {
			value: checkoutValue,
			currency: "BRL"
		});
		fbq("track", "Lead", { content_name: "Imersão para Pais" });
		const url = appendUtmsToUrl(`${checkoutUrl}?${new URLSearchParams({
			name: name.trim(),
			email: email.trim(),
			phone: cleanPhone
		}).toString()}`);
		window.open(url, "_blank");
		onClose();
		setLoading(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md bg-background border border-border/50 rounded-t-3xl sm:rounded-3xl px-6 pt-6 pb-8 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-muted-foreground hover:bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-gold font-bold mb-1",
						children: "Última etapa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl leading-tight",
						children: "Garanta sua vaga no De Frente com a Homossexualidade"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Seu primeiro nome",
							value: name,
							onChange: (e) => setName(e.target.value),
							maxLength: 60,
							className: "w-full rounded-xl border border-border/60 bg-white/5 px-4 py-3 text-base outline-none focus:border-gold/60 placeholder:text-muted-foreground/50"
						}), touched && !nameOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-red-400 mt-1",
							children: "Informe seu nome."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "Seu melhor e-mail",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							maxLength: 120,
							className: "w-full rounded-xl border border-border/60 bg-white/5 px-4 py-3 text-base outline-none focus:border-gold/60 placeholder:text-muted-foreground/50"
						}), touched && !emailOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-red-400 mt-1",
							children: "Informe um e-mail válido."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "tel",
							inputMode: "numeric",
							placeholder: "WhatsApp com DDD",
							value: phone,
							onChange: (e) => setPhone(formatPhone(e.target.value)),
							maxLength: 16,
							className: "w-full rounded-xl border border-border/60 bg-white/5 px-4 py-3 text-base outline-none focus:border-gold/60 placeholder:text-muted-foreground/50"
						}), touched && !phoneOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-red-400 mt-1",
							children: "Informe um WhatsApp válido com DDD."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: "w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gold text-ink font-bold text-base disabled:opacity-60 mt-2",
							children: [
								loading ? "Aguarde..." : "Ir para o pagamento",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted-foreground mt-3",
					children: "🔒 Seus dados estão seguros. Sem spam."
				})
			]
		})]
	});
}
//#endregion
export { captureUtms as n, trackLp2 as r, LeadModal as t };
