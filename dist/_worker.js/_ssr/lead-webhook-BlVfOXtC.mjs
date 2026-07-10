import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { a as stringType, i as recordType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-webhook-BlVfOXtC.js
var sendLead_createServerFn_handler = createServerRpc({
	id: "7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa",
	name: "sendLead",
	filename: "src/lib/lead-webhook.ts"
}, (opts) => sendLead.__executeServer(opts));
var sendLead = createServerFn({ method: "POST" }).validator(objectType({
	name: stringType(),
	email: stringType(),
	phone: stringType(),
	lp: stringType().optional(),
	source: stringType().optional(),
	tags: arrayType(stringType()).optional(),
	utms: recordType(stringType(), stringType()).optional()
})).handler(sendLead_createServerFn_handler, async ({ data }) => {
	const { name, email, phone, lp, source, tags, utms } = data;
	try {
		await fetch("https://falume.com.br/api/webhooks/lead/lf_759f17349cac0a2d62497ad244cf64a80afe", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				email,
				phone,
				lp: lp ?? "lp2",
				tags: tags ?? ["lp2-pais"],
				source: source ?? (lp ? `lp2-${lp}` : "lp2-imersao-pais"),
				...utms ?? {}
			})
		});
	} catch {}
	return { ok: true };
});
//#endregion
export { sendLead_createServerFn_handler };
