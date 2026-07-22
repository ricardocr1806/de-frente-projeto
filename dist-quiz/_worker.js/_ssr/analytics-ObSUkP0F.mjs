import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BQKdnIQR.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-ObSUkP0F.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var trackStep = createServerFn({ method: "POST" }).validator(objectType({ step: stringType() })).handler(createSsrRpc("6dbd5d3d6b8e8e89dbefa1beb8de51a8e91a2c4fd56862fb9249b956b460d332"));
var getStats = createServerFn({ method: "GET" }).handler(createSsrRpc("0062927749fb95026618658c9ed6369de549d2dee306297b4a91d4cca298c64d"));
//#endregion
export { getStats as n, trackStep as r, createSsrRpc as t };
