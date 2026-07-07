import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-BpTst3hR.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var CF_ACCOUNT = "8da9fa4b9b400831f74c8f9099550b7d";
var KV_NS = "6de0f9e30a4d4f548c16c5a01d03c08b";
var CF_TOKEN = process.env.CF_KV_TOKEN ?? "";
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
var trackLp01_createServerFn_handler = createServerRpc({
	id: "18a2a892d4ac6b4d28430fdb714b1588f793ecc60a8cdd92583d5879bdadc2ce",
	name: "trackLp01",
	filename: "src/lib/analytics.ts"
}, (opts) => trackLp01.__executeServer(opts));
var trackLp01 = createServerFn({ method: "POST" }).validator(objectType({ event: enumType(["page_view", "checkout_click"]) })).handler(trackLp01_createServerFn_handler, async ({ data }) => {
	await kvIncrement(`lp01_${data.event}`);
	return { ok: true };
});
//#endregion
export { trackLp01_createServerFn_handler };
