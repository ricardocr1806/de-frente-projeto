import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getStats } from "./analytics-ObSUkP0F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BSblTfSC.js
var $$splitComponentImporter = () => import("./dashboard-DgNKk9TJ.mjs");
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
