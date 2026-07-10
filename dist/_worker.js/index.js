globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_BIi6sH = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_BIi6sH
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/LeadModal-zFOE7STo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3008-ky4B5Vl98pZLwtNYgXVTDzi6dxc\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 12296,
		"path": "../assets/LeadModal-zFOE7STo.js"
	},
	"/assets/obrigado-myGJxV3C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f28-zIXxPmcsGG6NBCU9o0zEDOQj5w8\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 3880,
		"path": "../assets/obrigado-myGJxV3C.js"
	},
	"/assets/new-C-GJXnVX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69d0-1YqyfBzBpxNkMqFcunoHVkJEXQo\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 27088,
		"path": "../assets/new-C-GJXnVX.js"
	},
	"/assets/pierry-lp2-CGzkszRy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-RHdbauj6WDXdP1QqMx9VNJ4Zgq0\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 55,
		"path": "../assets/pierry-lp2-CGzkszRy.js"
	},
	"/assets/pierry-lp2-BjQjrymJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1991a-EAZdB5LKcn6/qDIqv7Ojw9WNHRE\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 104730,
		"path": "../assets/pierry-lp2-BjQjrymJ.jpg"
	},
	"/assets/routes-D0p6NNmY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"592e-PsfhMyNVMm0fap8R55Sd3UYfkJ4\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 22830,
		"path": "../assets/routes-D0p6NNmY.js"
	},
	"/assets/index-UFfZOqDz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"553b5-npsLtxZ6y3XevX4/P37UED7dyNU\"",
		"mtime": "2026-07-10T15:54:05.484Z",
		"size": 349109,
		"path": "../assets/index-UFfZOqDz.js"
	},
	"/assets/v27-BppShZRK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5941-spr8Kv8FQZP+3BrW4IBdRv4RKg0\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 22849,
		"path": "../assets/v27-BppShZRK.js"
	},
	"/assets/speaker-opt-BuJb6J0V.jpg": {
		"type": "image/jpeg",
		"etag": "\"1520a-SMwDrEGiu08wjIyC20gs8zRG37Y\"",
		"mtime": "2026-07-10T15:54:05.486Z",
		"size": 86538,
		"path": "../assets/speaker-opt-BuJb6J0V.jpg"
	},
	"/assets/styles-3npEh7yZ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16399-+7wG7R5y6KSUZSQ2B4UgjFSwoV0\"",
		"mtime": "2026-07-10T15:54:05.486Z",
		"size": 91033,
		"path": "../assets/styles-3npEh7yZ.css"
	},
	"/assets/v47-BMQjxPbW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5941-5e58oLJIsS5ifz/ZA6O2TIVWJo0\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 22849,
		"path": "../assets/v47-BMQjxPbW.js"
	},
	"/assets/pierry-new-WI_UCmAX.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cc29-XbwsjWl5c/hi3Jv6V6dSuL1io/g\"",
		"mtime": "2026-07-10T15:54:05.485Z",
		"size": 183337,
		"path": "../assets/pierry-new-WI_UCmAX.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-pages.mjs
var nitroApp = useNitroApp();
var cloudflare_pages_default = {
	async fetch(cfReq, env, context) {
		augmentReq(cfReq, {
			env,
			context
		});
		const url = new URL(cfReq.url);
		if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfReq);
		return nitroApp.fetch(cfReq);
	},
	scheduled(event, env, context) {}
};
//#endregion
export { cloudflare_pages_default as default };
