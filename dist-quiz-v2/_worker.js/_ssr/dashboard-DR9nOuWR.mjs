import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getStats } from "./analytics-xFRnpUg6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DR9nOuWR.js
var $$splitComponentImporter = () => import("./dashboard-C2E1s-C9.mjs");
var Route = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — Quiz Analytics" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: async () => getStats(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
