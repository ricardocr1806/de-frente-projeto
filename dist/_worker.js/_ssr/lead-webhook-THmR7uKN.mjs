import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { i as stringType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-webhook-THmR7uKN.js
var sendLead_createServerFn_handler = createServerRpc({
	id: "7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa",
	name: "sendLead",
	filename: "src/lib/lead-webhook.ts"
}, (opts) => sendLead.__executeServer(opts));
var sendLead = createServerFn({ method: "POST" }).validator(objectType({
	name: stringType(),
	email: stringType(),
	phone: stringType(),
	source: stringType().optional(),
	tags: arrayType(stringType()).optional(),
	utm_source: stringType().optional(),
	utm_medium: stringType().optional(),
	utm_campaign: stringType().optional(),
	utm_content: stringType().optional(),
	utm_term: stringType().optional(),
	fbclid: stringType().optional()
})).handler(sendLead_createServerFn_handler, async ({ data }) => {
	const { name, email, phone, source, tags, ...utms } = data;
	const utmFields = {};
	Object.entries(utms).forEach(([k, v]) => {
		if (v) utmFields[k] = v;
	});
	try {
		await fetch("https://falume.com.br/api/webhooks/lead/lf_759f17349cac0a2d62497ad244cf64a80afe", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				email,
				phone,
				tags: tags ?? ["lp2-pais"],
				source: source ?? "lp2-imersao-pais",
				...utmFields
			})
		});
	} catch {}
	return { ok: true };
});
//#endregion
export { sendLead_createServerFn_handler };
