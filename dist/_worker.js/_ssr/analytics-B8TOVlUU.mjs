import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-B8TOVlUU.js
var CF_ACCOUNT = "8da9fa4b9b400831f74c8f9099550b7d";
var KV_NS = "6de0f9e30a4d4f548c16c5a01d03c08b";
var CF_TOKEN = processModule.env.CF_KV_TOKEN ?? "";
var KV_BASE = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/storage/kv/namespaces/${KV_NS}/values`;
async function kvIncrement(key) {
	const res = await fetch(`${KV_BASE}/${key}`, { headers: { Authorization: `Bearer ${CF_TOKEN}` } });
	const current = res.ok ? parseInt(await res.text(), 10) || 0 : 0;
	await fetch(`${KV_BASE}/${key}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${CF_TOKEN}`,
			"Content-Type": "text/plain"
		},
		body: String(current + 1)
	});
}
var trackLp2_createServerFn_handler = createServerRpc({
	id: "0e2789d576a82367e1770dcc5436e6609fd531e34ab12104eddf185149172f6e",
	name: "trackLp2",
	filename: "src/lib/analytics.ts"
}, (opts) => trackLp2.__executeServer(opts));
var trackLp2 = createServerFn({ method: "POST" }).validator(objectType({ event: enumType(["page_view", "checkout_click"]) })).handler(trackLp2_createServerFn_handler, async ({ data }) => {
	await kvIncrement(`lp2_${data.event}`);
	return { ok: true };
});
//#endregion
export { trackLp2_createServerFn_handler };
