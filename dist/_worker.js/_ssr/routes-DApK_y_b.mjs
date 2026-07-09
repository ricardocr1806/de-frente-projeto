import { a as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as speaker_opt_default } from "./speaker-opt-C3KrRL-K.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-aEu9R-CP.mjs";
import { a as Shield, c as MessageCircle, d as Clock, f as Check, h as ArrowRight, i as Star, l as Heart, m as BookOpen, n as Wifi, o as Plus, p as Calendar, r as Users, s as Minus, t as X, u as Compass } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DApK_y_b.js
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
var sendLead = createServerFn({ method: "POST" }).validator(objectType({
	name: stringType(),
	email: stringType(),
	phone: stringType(),
	utm_source: stringType().optional(),
	utm_medium: stringType().optional(),
	utm_campaign: stringType().optional(),
	utm_content: stringType().optional(),
	utm_term: stringType().optional(),
	fbclid: stringType().optional()
})).handler(createSsrRpc("7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa"));
var CHECKOUT_BASE = "https://pay.assiny.com.br/1d926e/node/3fZr7o";
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
function fbq$1(...args) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...args);
}
function LeadModal({ onClose }) {
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
			...utms
		} }).catch(() => {});
		trackLp2({ data: { event: "checkout_click" } }).catch(() => {});
		fbq$1("track", "InitiateCheckout", {
			value: 19.9,
			currency: "BRL"
		});
		fbq$1("track", "Lead", { content_name: "Imersão para Pais" });
		const checkoutUrl = appendUtmsToUrl(`${CHECKOUT_BASE}?${new URLSearchParams({
			name: name.trim(),
			email: email.trim(),
			phone: cleanPhone
		}).toString()}`);
		window.open(checkoutUrl, "_blank");
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
var pierry_lp2_default = "/assets/pierry-lp2-BjQjrymJ.jpg";
var Grad = class {
	x;
	y;
	z;
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	dot2(x, y) {
		return this.x * x + this.y * y;
	}
};
var Noise = class {
	grad3;
	p;
	perm;
	gradP;
	constructor(seed = 0) {
		this.grad3 = [
			new Grad(1, 1, 0),
			new Grad(-1, 1, 0),
			new Grad(1, -1, 0),
			new Grad(-1, -1, 0),
			new Grad(1, 0, 1),
			new Grad(-1, 0, 1),
			new Grad(1, 0, -1),
			new Grad(-1, 0, -1),
			new Grad(0, 1, 1),
			new Grad(0, -1, 1),
			new Grad(0, 1, -1),
			new Grad(0, -1, -1)
		];
		this.p = [
			151,
			160,
			137,
			91,
			90,
			15,
			131,
			13,
			201,
			95,
			96,
			53,
			194,
			233,
			7,
			225,
			140,
			36,
			103,
			30,
			69,
			142,
			8,
			99,
			37,
			240,
			21,
			10,
			23,
			190,
			6,
			148,
			247,
			120,
			234,
			75,
			0,
			26,
			197,
			62,
			94,
			252,
			219,
			203,
			117,
			35,
			11,
			32,
			57,
			177,
			33,
			88,
			237,
			149,
			56,
			87,
			174,
			20,
			125,
			136,
			171,
			168,
			68,
			175,
			74,
			165,
			71,
			134,
			139,
			48,
			27,
			166,
			77,
			146,
			158,
			231,
			83,
			111,
			229,
			122,
			60,
			211,
			133,
			230,
			220,
			105,
			92,
			41,
			55,
			46,
			245,
			40,
			244,
			102,
			143,
			54,
			65,
			25,
			63,
			161,
			1,
			216,
			80,
			73,
			209,
			76,
			132,
			187,
			208,
			89,
			18,
			169,
			200,
			196,
			135,
			130,
			116,
			188,
			159,
			86,
			164,
			100,
			109,
			198,
			173,
			186,
			3,
			64,
			52,
			217,
			226,
			250,
			124,
			123,
			5,
			202,
			38,
			147,
			118,
			126,
			255,
			82,
			85,
			212,
			207,
			206,
			59,
			227,
			47,
			16,
			58,
			17,
			182,
			189,
			28,
			42,
			223,
			183,
			170,
			213,
			119,
			248,
			152,
			2,
			44,
			154,
			163,
			70,
			221,
			153,
			101,
			155,
			167,
			43,
			172,
			9,
			129,
			22,
			39,
			253,
			19,
			98,
			108,
			110,
			79,
			113,
			224,
			232,
			178,
			185,
			112,
			104,
			218,
			246,
			97,
			228,
			251,
			34,
			242,
			193,
			238,
			210,
			144,
			12,
			191,
			179,
			162,
			241,
			81,
			51,
			145,
			235,
			249,
			14,
			239,
			107,
			49,
			192,
			214,
			31,
			181,
			199,
			106,
			157,
			184,
			84,
			204,
			176,
			115,
			121,
			50,
			45,
			127,
			4,
			150,
			254,
			138,
			236,
			205,
			93,
			222,
			114,
			67,
			29,
			24,
			72,
			243,
			141,
			128,
			195,
			78,
			66,
			215,
			61,
			156,
			180
		];
		this.perm = new Array(512);
		this.gradP = new Array(512);
		this.seed(seed);
	}
	seed(seed) {
		if (seed > 0 && seed < 1) seed *= 65536;
		seed = Math.floor(seed);
		if (seed < 256) seed |= seed << 8;
		for (let i = 0; i < 256; i++) {
			let v = i & 1 ? this.p[i] ^ seed & 255 : this.p[i] ^ seed >> 8 & 255;
			this.perm[i] = this.perm[i + 256] = v;
			this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12];
		}
	}
	fade(t) {
		return t * t * t * (t * (t * 6 - 15) + 10);
	}
	lerp(a, b, t) {
		return (1 - t) * a + t * b;
	}
	perlin2(x, y) {
		let X = Math.floor(x), Y = Math.floor(y);
		x -= X;
		y -= Y;
		X &= 255;
		Y &= 255;
		const n00 = this.gradP[X + this.perm[Y]].dot2(x, y);
		const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1);
		const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y);
		const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1);
		const u = this.fade(x);
		return this.lerp(this.lerp(n00, n10, u), this.lerp(n01, n11, u), this.fade(y));
	}
};
var Waves = ({ lineColor = "black", backgroundColor = "transparent", waveSpeedX = .0125, waveSpeedY = .005, waveAmpX = 32, waveAmpY = 16, xGap = 10, yGap = 32, friction = .925, tension = .005, maxCursorMove = 100, style = {}, className = "" }) => {
	const containerRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const ctxRef = (0, import_react.useRef)(null);
	const boundingRef = (0, import_react.useRef)({
		width: 0,
		height: 0,
		left: 0,
		top: 0
	});
	const noiseRef = (0, import_react.useRef)(new Noise(Math.random()));
	const linesRef = (0, import_react.useRef)([]);
	const mouseRef = (0, import_react.useRef)({
		x: -10,
		y: 0,
		lx: 0,
		ly: 0,
		sx: 0,
		sy: 0,
		v: 0,
		vs: 0,
		a: 0,
		set: false
	});
	const configRef = (0, import_react.useRef)({
		lineColor,
		waveSpeedX,
		waveSpeedY,
		waveAmpX,
		waveAmpY,
		friction,
		tension,
		maxCursorMove,
		xGap,
		yGap
	});
	const frameIdRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		configRef.current = {
			lineColor,
			waveSpeedX,
			waveSpeedY,
			waveAmpX,
			waveAmpY,
			friction,
			tension,
			maxCursorMove,
			xGap,
			yGap
		};
	}, [
		lineColor,
		waveSpeedX,
		waveSpeedY,
		waveAmpX,
		waveAmpY,
		friction,
		tension,
		maxCursorMove,
		xGap,
		yGap
	]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;
		ctxRef.current = canvas.getContext("2d");
		function setSize() {
			if (!container || !canvas) return;
			const rect = container.getBoundingClientRect();
			boundingRef.current = {
				width: rect.width,
				height: rect.height,
				left: rect.left,
				top: rect.top
			};
			canvas.width = rect.width;
			canvas.height = rect.height;
		}
		function setLines() {
			const { width, height } = boundingRef.current;
			linesRef.current = [];
			const oWidth = width + 200, oHeight = height + 30;
			const { xGap, yGap } = configRef.current;
			const totalLines = Math.ceil(oWidth / xGap);
			const totalPoints = Math.ceil(oHeight / yGap);
			const xStart = (width - xGap * totalLines) / 2;
			const yStart = (height - yGap * totalPoints) / 2;
			for (let i = 0; i <= totalLines; i++) {
				const pts = [];
				for (let j = 0; j <= totalPoints; j++) pts.push({
					x: xStart + xGap * i,
					y: yStart + yGap * j,
					wave: {
						x: 0,
						y: 0
					},
					cursor: {
						x: 0,
						y: 0,
						vx: 0,
						vy: 0
					}
				});
				linesRef.current.push(pts);
			}
		}
		function movePoints(time) {
			const lines = linesRef.current;
			const mouse = mouseRef.current;
			const noise = noiseRef.current;
			const { waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove } = configRef.current;
			lines.forEach((pts) => {
				pts.forEach((p) => {
					const move = noise.perlin2((p.x + time * waveSpeedX) * .002, (p.y + time * waveSpeedY) * .0015) * 12;
					p.wave.x = Math.cos(move) * waveAmpX;
					p.wave.y = Math.sin(move) * waveAmpY;
					const dx = p.x - mouse.sx, dy = p.y - mouse.sy;
					const dist = Math.hypot(dx, dy);
					const l = Math.max(175, mouse.vs);
					if (dist < l) {
						const s = 1 - dist / l;
						const f = Math.cos(dist * .001) * s;
						p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 65e-5;
						p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 65e-5;
					}
					p.cursor.vx += (0 - p.cursor.x) * tension;
					p.cursor.vy += (0 - p.cursor.y) * tension;
					p.cursor.vx *= friction;
					p.cursor.vy *= friction;
					p.cursor.x += p.cursor.vx * 2;
					p.cursor.y += p.cursor.vy * 2;
					p.cursor.x = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.cursor.x));
					p.cursor.y = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.cursor.y));
				});
			});
		}
		function moved(point, withCursor = true) {
			const x = point.x + point.wave.x + (withCursor ? point.cursor.x : 0);
			const y = point.y + point.wave.y + (withCursor ? point.cursor.y : 0);
			return {
				x: Math.round(x * 10) / 10,
				y: Math.round(y * 10) / 10
			};
		}
		function drawLines() {
			const { width, height } = boundingRef.current;
			const ctx = ctxRef.current;
			if (!ctx) return;
			ctx.clearRect(0, 0, width, height);
			ctx.beginPath();
			ctx.strokeStyle = configRef.current.lineColor;
			linesRef.current.forEach((points) => {
				let p1 = moved(points[0], false);
				ctx.moveTo(p1.x, p1.y);
				points.forEach((p, idx) => {
					const isLast = idx === points.length - 1;
					p1 = moved(p, !isLast);
					const p2 = moved(points[idx + 1] || points[points.length - 1], !isLast);
					ctx.lineTo(p1.x, p1.y);
					if (isLast) ctx.moveTo(p2.x, p2.y);
				});
			});
			ctx.stroke();
		}
		function tick(t) {
			if (!container) return;
			const mouse = mouseRef.current;
			mouse.sx += (mouse.x - mouse.sx) * .1;
			mouse.sy += (mouse.y - mouse.sy) * .1;
			const dx = mouse.x - mouse.lx, dy = mouse.y - mouse.ly;
			const d = Math.hypot(dx, dy);
			mouse.v = d;
			mouse.vs += (d - mouse.vs) * .1;
			mouse.vs = Math.min(100, mouse.vs);
			mouse.lx = mouse.x;
			mouse.ly = mouse.y;
			mouse.a = Math.atan2(dy, dx);
			container.style.setProperty("--x", `${mouse.sx}px`);
			container.style.setProperty("--y", `${mouse.sy}px`);
			movePoints(t);
			drawLines();
			frameIdRef.current = requestAnimationFrame(tick);
		}
		function onResize() {
			setSize();
			setLines();
		}
		function onMouseMove(e) {
			updateMouse(e.clientX, e.clientY);
		}
		function onTouchMove(e) {
			const touch = e.touches[0];
			updateMouse(touch.clientX, touch.clientY);
		}
		function updateMouse(x, y) {
			const mouse = mouseRef.current;
			const b = boundingRef.current;
			mouse.x = x - b.left;
			mouse.y = y - b.top;
			if (!mouse.set) {
				mouse.sx = mouse.x;
				mouse.sy = mouse.y;
				mouse.lx = mouse.x;
				mouse.ly = mouse.y;
				mouse.set = true;
			}
		}
		setSize();
		setLines();
		frameIdRef.current = requestAnimationFrame(tick);
		window.addEventListener("resize", onResize);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("touchmove", onTouchMove, { passive: false });
		return () => {
			window.removeEventListener("resize", onResize);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("touchmove", onTouchMove);
			if (frameIdRef.current !== null) cancelAnimationFrame(frameIdRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		style: {
			backgroundColor,
			...style
		},
		className: `absolute top-0 left-0 w-full h-full overflow-hidden ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-0 left-0 bg-[#160000] rounded-full w-[0.5rem] h-[0.5rem]",
			style: {
				transform: "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
				willChange: "transform"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "block w-full h-full"
		})]
	});
};
var SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
	const divRef = (0, import_react.useRef)(null);
	const [isFocused, setIsFocused] = (0, import_react.useState)(false);
	const [position, setPosition] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [opacity, setOpacity] = (0, import_react.useState)(0);
	const handleMouseMove = (e) => {
		if (!divRef.current || isFocused) return;
		const rect = divRef.current.getBoundingClientRect();
		setPosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		});
	};
	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(.6);
	};
	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};
	const handleMouseEnter = () => {
		setOpacity(.6);
	};
	const handleMouseLeave = () => {
		setOpacity(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: divRef,
		onMouseMove: handleMouseMove,
		onFocus: handleFocus,
		onBlur: handleBlur,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		className: `relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out",
			style: {
				opacity,
				background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
			}
		}), children]
	});
};
var buildKeyframes = (from, steps) => {
	const keys = /* @__PURE__ */ new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);
	const keyframes = {};
	keys.forEach((k) => {
		keyframes[k] = [from[k], ...steps.map((s) => s[k])];
	});
	return keyframes;
};
var BlurText = ({ text = "", delay = 200, className = "", animateBy = "words", direction = "top", threshold = .1, rootMargin = "0px", animationFrom, animationTo, easing = (t) => t, onAnimationComplete, stepDuration = .35 }) => {
	const elements = animateBy === "words" ? text.split(" ") : text.split("");
	const [inView, setInView] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setInView(true);
				observer.unobserve(ref.current);
			}
		}, {
			threshold,
			rootMargin
		});
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold, rootMargin]);
	const defaultFrom = (0, import_react.useMemo)(() => direction === "top" ? {
		filter: "blur(10px)",
		opacity: 0,
		y: -50
	} : {
		filter: "blur(10px)",
		opacity: 0,
		y: 50
	}, [direction]);
	const defaultTo = (0, import_react.useMemo)(() => [{
		filter: "blur(5px)",
		opacity: .5,
		y: direction === "top" ? 5 : -5
	}, {
		filter: "blur(0px)",
		opacity: 1,
		y: 0
	}], [direction]);
	const fromSnapshot = animationFrom ?? defaultFrom;
	const toSnapshots = animationTo ?? defaultTo;
	const stepCount = toSnapshots.length + 1;
	const totalDuration = stepDuration * (stepCount - 1);
	const times = Array.from({ length: stepCount }, (_, i) => stepCount === 1 ? 0 : i / (stepCount - 1));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		className: `blur-text ${className} flex flex-wrap`,
		children: elements.map((segment, index) => {
			const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
			const spanTransition = {
				duration: totalDuration,
				times,
				delay: index * delay / 1e3,
				ease: easing
			};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				initial: fromSnapshot,
				animate: inView ? animateKeyframes : fromSnapshot,
				transition: spanTransition,
				onAnimationComplete: index === elements.length - 1 ? onAnimationComplete : void 0,
				style: {
					display: "inline-block",
					willChange: "transform, filter, opacity"
				},
				children: [segment === " " ? "\xA0" : segment, animateBy === "words" && index < elements.length - 1 && "\xA0"]
			}, index);
		})
	});
};
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
function LandingPage() {
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
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			showModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadModal, { onClose: () => setShowModal(false) }),
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
		className: "sticky top-0 z-50 backdrop-blur-md border-b",
		style: {
			background: "rgba(8,17,11,0.88)",
			borderColor: "rgba(224,182,79,0.2)"
		},
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
		className: "relative overflow-hidden flex flex-col justify-center",
		style: {
			background: "#0c1a0f",
			minHeight: "92vh"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0 pointer-events-none",
				style: {
					background: "radial-gradient(45% 45% at 72% 30%, rgba(245,217,148,.07) 0%, transparent 70%)",
					mixBlendMode: "screen"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0 pointer-events-none",
				style: { background: "linear-gradient(180deg, transparent 60%, #050a07 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden relative z-10 flex flex-col min-h-screen",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 overflow-hidden max-h-[55vh]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pierry_lp2_default,
						alt: "Pierry Rodrigues",
						className: "w-full h-full object-cover object-top",
						loading: "eager"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(to top, #08110b, rgba(8,17,11,0.35), transparent)" }
					})]
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
							children: "Antes de tentar mudar o comportamento do seu filho, aprenda a alcançar o coração dele. Descubra como fortalecer a conexão familiar e reconstruir uma relação baseada em amor, verdade e confiança."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 text-sm text-navy/70 mb-6 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅 Dias 13 a 16" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏰ às 20h" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📱 Online" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://pay.assiny.com.br/1d926e/node/3fZr7o",
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
									children: "R$ 19,90"
								}),
								" · ingresso único"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden lg:grid relative z-10 max-w-7xl mx-auto px-8 py-14 lg:grid-cols-12 gap-16 items-center",
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
							className: "mt-8 text-xl max-w-xl leading-relaxed",
							style: {
								animation: "fadeUp 0.9s 0.5s both",
								color: "rgba(245,239,226,0.82)"
							},
							children: "Antes de tentar mudar o comportamento do seu filho, aprenda a alcançar o coração dele. Descubra como fortalecer a conexão familiar, compreender os conflitos de identidade e reconstruir uma relação baseada em amor, verdade e confiança."
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
								href: "https://pay.assiny.com.br/1d926e/node/3fZr7o",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: openModal,
								className: "btn-gold group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base",
								children: [CTA_PRIMARY, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-navy font-bold text-base",
									children: "R$ 19,90"
								}), " · ingresso único"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex gap-8 text-sm",
							style: { animation: "fadeUp 0.9s 0.85s both" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Calendar,
									label: "Dias 13 a 16"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
									icon: Clock,
									label: "às 20h"
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-0 left-0 right-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule opacity-60" })
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
		className: "py-5 overflow-hidden",
		style: {
			background: "#050a07",
			borderTop: "1px solid rgba(224,182,79,0.2)",
			borderBottom: "1px solid rgba(224,182,79,0.2)"
		},
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
		className: "py-28 lg:py-36",
		style: { background: "#091408" },
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
							style: { color: "rgba(245,239,226,0.5)" },
							children: "mas esteja perdendo o relacionamento."
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg max-w-3xl leading-relaxed text-muted-foreground",
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
								className: "mt-6 p-6 rounded-2xl border-l-4 border-gold",
								style: { background: "rgba(255,255,255,0.05)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xl font-display italic leading-relaxed text-balance text-navy",
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
		className: "section-dark py-28 lg:py-36",
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
		className: "py-28 lg:py-36",
		style: { background: "#050a07" },
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
		className: "py-28 lg:py-36",
		style: { background: "#0a1609" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" }), " A imersão"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl text-balance text-navy",
				children: "O que é essa imersão"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
								className: "flex items-start gap-3 text-navy/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-4 h-4 mt-0.5 text-destructive/70 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x })]
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
								className: "flex items-start gap-3 text-navy",
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
		className: "section-dark py-28 lg:py-36",
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
						className: "mt-14 relative p-10 lg:p-12 rounded-2xl text-white text-left",
						style: { background: "#111c14" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 left-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-4 py-1.5 text-gold text-xs font-bold uppercase tracking-[0.2em] border border-gold/30 rounded-full",
									style: { background: "#111c14" },
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
		className: "relative py-28 lg:py-36 overflow-hidden",
		style: { background: "#050a07" },
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
								value: "Dias 13 a 16"
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
						href: "https://pay.assiny.com.br/1d926e/node/3fZr7o",
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
		className: "p-4 rounded-xl border border-gold/20",
		style: { background: "rgba(255,255,255,0.06)" },
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
		className: "section-dark py-28 lg:py-36 border-t",
		style: { borderColor: "rgba(224,182,79,0.15)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-px bg-gold" }), " Perguntas frequentes"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12 text-balance text-navy",
				children: "O que você precisa saber antes de entrar."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y border-y",
				style: { borderColor: "rgba(224,182,79,0.12)" },
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
		className: "py-12",
		style: { background: "#050a07" },
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
export { LandingPage as component };
