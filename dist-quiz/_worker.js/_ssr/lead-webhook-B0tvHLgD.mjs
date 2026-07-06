import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-webhook-B0tvHLgD.js
var LeadSchema = objectType({
	name: stringType(),
	email: stringType().email(),
	phone: stringType(),
	flow: stringType(),
	utm_source: stringType().optional(),
	utm_medium: stringType().optional(),
	utm_campaign: stringType().optional(),
	utm_content: stringType().optional(),
	utm_term: stringType().optional(),
	fbclid: stringType().optional()
});
var WEBHOOK_URL = "https://falume.com.br/api/webhooks/lead/lf_5e20241321c0cb73f96cf402b8c3340eb78a";
var sendLead_createServerFn_handler = createServerRpc({
	id: "7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa",
	name: "sendLead",
	filename: "src/lib/lead-webhook.ts"
}, (opts) => sendLead.__executeServer(opts));
var sendLead = createServerFn({ method: "POST" }).validator(LeadSchema).handler(sendLead_createServerFn_handler, async ({ data }) => {
	const { name, email, phone, flow, ...utms } = data;
	const utmFields = {};
	Object.entries(utms).forEach(([k, v]) => {
		if (v) utmFields[k] = v;
	});
	return { ok: (await (await fetch(WEBHOOK_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			name,
			email,
			phone,
			tags: [flow === "flow1" ? "quiz-pais" : "quiz-filhos"],
			source: "quiz-mapa-identidade",
			...utmFields
		})
	})).json()).ok ?? false };
});
//#endregion
export { sendLead_createServerFn_handler };
