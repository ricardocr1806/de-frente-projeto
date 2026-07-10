import { a as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as stringType, i as recordType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-C9Y2XLcW.mjs";
import { h as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BlurText-DjPYfMwF.js
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
function LeadModal({ onClose, checkoutUrl = DEFAULT_CHECKOUT, checkoutValue = 19.9, lp }) {
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
var pierry_lp2_default = "/assets/pierry-lp2-WI_UCmAX.jpg";
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
//#endregion
export { captureUtms as a, Waves as i, LeadModal as n, pierry_lp2_default as o, SpotlightCard as r, trackLp2 as s, BlurText as t };
