import { n as __toESM } from "../_runtime.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router--cKmZQ3l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DCpEqP8x.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "De Frente com a Homossexualidade — Imersão Online" },
			{
				name: "description",
				content: "Imersão online e ao vivo de 2 dias sobre identidade, fé e reconstrução familiar. Dias 4 e 5, às 20h. R$ 19,90."
			},
			{
				name: "author",
				content: "De Frente com a Homossexualidade"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:title",
				content: "De Frente com a Homossexualidade — Imersão Online"
			},
			{
				name: "twitter:title",
				content: "De Frente com a Homossexualidade — Imersão Online"
			},
			{
				name: "description",
				content: "Online immersion for men and parents navigating family conflicts related to homosexuality."
			},
			{
				property: "og:description",
				content: "Online immersion for men and parents navigating family conflicts related to homosexuality."
			},
			{
				name: "twitter:description",
				content: "Online immersion for men and parents navigating family conflicts related to homosexuality."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2e902a77-59cf-4239-9788-ac29f3a4bd39/id-preview-2cc8380c--aeefb403-2d2a-4c68-a496-93f164630107.lovable.app-1781708076919.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2e902a77-59cf-4239-9788-ac29f3a4bd39/id-preview-2cc8380c--aeefb403-2d2a-4c68-a496-93f164630107.lovable.app-1781708076919.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1563894625335592');
          fbq('track', 'PageView');
        ` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { dangerouslySetInnerHTML: { __html: `
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1563894625335592&ev=PageView&noscript=1"/>
        ` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
          (function(){
            var S='lp01',U='https://fvsojwkkumjhmvyrvxiy.supabase.co',K='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2c29qd2trdW1qaG12eXJ2eGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2ODcwNzUsImV4cCI6MjA5ODI2MzA3NX0.vA14tt6WuoUYmunOSFjxdn8E3Yxm11dikePCz9BahgA';
            function sid(){var k='_tr_s',v=sessionStorage.getItem(k);if(!v){v=Date.now().toString(36)+Math.random().toString(36).slice(2);sessionStorage.setItem(k,v);}return v;}
            function ev(t,x){fetch(U+'/rest/v1/events',{method:'POST',keepalive:true,headers:{'Content-Type':'application/json','apikey':K,'Authorization':'Bearer '+K,'Prefer':'return=minimal'},body:JSON.stringify(Object.assign({site_id:S,site_url:location.origin,event_type:t,session_id:sid(),page_url:location.pathname},x||{}))}).catch(function(){});}
            var t0=Date.now();
            ev('pageview');
            addEventListener('pagehide',function(){ev('time_on_page',{time_on_page:Math.round((Date.now()-t0)/1000)});});
            document.addEventListener('click',function(e){var el=e.target&&e.target.closest('[data-cta]');if(el)ev('click',{button_text:(el.innerText||'').trim().slice(0,100)});});
          })();
        ` } })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$2 = () => import("./privacidade-BVd1dLCS.mjs");
var Route$2 = createFileRoute("/privacidade")({
	head: () => ({ meta: [{ title: "Política de Privacidade — De Frente com a Homossexualidade" }, {
		name: "description",
		content: "Política de Privacidade da imersão online De Frente com a Homossexualidade."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./obrigado-Bbt8QQW2.mjs");
var Route$1 = createFileRoute("/obrigado")({
	head: () => ({ meta: [{ title: "Parabéns! — De Frente com a Homossexualidade" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-B8yGVPc8.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "De Frente com a Homossexualidade — Imersão Online | 13 a 16 de Julho" },
		{
			name: "description",
			content: "Imersão online e ao vivo de 2 dias sobre identidade, fé e reconstrução familiar. Para homens em conflito e para pais. Ingresso R$ 37,00."
		},
		{
			property: "og:title",
			content: "De Frente com a Homossexualidade — Imersão Online"
		},
		{
			property: "og:description",
			content: "2 dias de transformação, identidade e reconstrução familiar. 13 a 16 de Julho, das 13h às 19h. R$ 37,00."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PrivacidadeRoute = Route$2.update({
	id: "/privacidade",
	path: "/privacidade",
	getParentRoute: () => Route$3
});
var ObrigadoRoute = Route$1.update({
	id: "/obrigado",
	path: "/obrigado",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	ObrigadoRoute,
	PrivacidadeRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
