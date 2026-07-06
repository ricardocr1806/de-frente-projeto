import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-CsdWYN9s.js
var STEPS = [
	{
		key: "1_page_view",
		label: "Página carregada"
	},
	{
		key: "2_quiz_started",
		label: "Quiz iniciado"
	},
	{
		key: "3_halfway",
		label: "50% das perguntas"
	},
	{
		key: "4_questions_done",
		label: "Perguntas concluídas"
	},
	{
		key: "5_lead_view",
		label: "Formulário visualizado"
	},
	{
		key: "6_lead_submit",
		label: "Lead enviado"
	},
	{
		key: "7_result_view",
		label: "Resultado visualizado"
	},
	{
		key: "8_checkout_click",
		label: "Checkout clicado"
	}
];
var CF_ACCOUNT = "8da9fa4b9b400831f74c8f9099550b7d";
var KV_NS = "6de0f9e30a4d4f548c16c5a01d03c08b";
var CF_TOKEN = process.env.CF_KV_TOKEN ?? "";
var KV_BASE = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/storage/kv/namespaces/${KV_NS}/values`;
async function kvGet(key) {
	const res = await fetch(`${KV_BASE}/${key}`, { headers: { Authorization: `Bearer ${CF_TOKEN}` } });
	if (!res.ok) return 0;
	const text = await res.text();
	return parseInt(text, 10) || 0;
}
async function kvIncrement(key) {
	const current = await kvGet(key);
	await fetch(`${KV_BASE}/${key}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${CF_TOKEN}`,
			"Content-Type": "text/plain"
		},
		body: String(current + 1)
	});
}
var trackStep_createServerFn_handler = createServerRpc({
	id: "6dbd5d3d6b8e8e89dbefa1beb8de51a8e91a2c4fd56862fb9249b956b460d332",
	name: "trackStep",
	filename: "src/lib/analytics.ts"
}, (opts) => trackStep.__executeServer(opts));
var trackStep = createServerFn({ method: "POST" }).validator(objectType({ step: stringType() })).handler(trackStep_createServerFn_handler, async ({ data }) => {
	await kvIncrement(data.step);
	return { ok: true };
});
var getStats_createServerFn_handler = createServerRpc({
	id: "0062927749fb95026618658c9ed6369de549d2dee306297b4a91d4cca298c64d",
	name: "getStats",
	filename: "src/lib/analytics.ts"
}, (opts) => getStats.__executeServer(opts));
var getStats = createServerFn({ method: "GET" }).handler(getStats_createServerFn_handler, async () => {
	const counts = await Promise.all(STEPS.map((s) => kvGet(s.key)));
	const total = counts[0] ?? 1;
	const steps = STEPS.map((s, i) => ({
		key: s.key,
		label: s.label,
		count: counts[i],
		pct: total > 0 ? Math.round(counts[i] / total * 100) : 0
	}));
	const [lp01Views, lp01Clicks, lp2Views, lp2Clicks] = await Promise.all([
		kvGet("lp01_page_view"),
		kvGet("lp01_checkout_click"),
		kvGet("lp2_page_view"),
		kvGet("lp2_checkout_click")
	]);
	const quizViews = counts[0];
	const quizClicks = counts[7];
	return {
		steps,
		total,
		sites: [
			{
				id: "lp01",
				name: "LP 01 — Imersão",
				url: "lp01.pierryrodrigues.com.br",
				views: lp01Views,
				clicks: lp01Clicks
			},
			{
				id: "lp2",
				name: "LP 2 — Pais",
				url: "lp2.pierryrodrigues.com.br",
				views: lp2Views,
				clicks: lp2Clicks
			},
			{
				id: "quiz",
				name: "Quiz",
				url: "quiz.pierryrodrigues.com.br",
				views: quizViews,
				clicks: quizClicks
			}
		].map((s) => ({
			...s,
			ctr: s.views > 0 ? Math.round(s.clicks / s.views * 100) : 0
		}))
	};
});
//#endregion
export { getStats_createServerFn_handler, trackStep_createServerFn_handler };
