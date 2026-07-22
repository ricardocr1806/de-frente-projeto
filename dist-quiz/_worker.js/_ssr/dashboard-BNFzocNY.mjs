import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getStats } from "./analytics-CL8_KFbs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BNFzocNY.js
var $$splitComponentImporter = () => import("./dashboard-By_NfEw6.mjs");
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
