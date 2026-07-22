//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BQKdnIQR.js
var manifest = {
	"0062927749fb95026618658c9ed6369de549d2dee306297b4a91d4cca298c64d": {
		functionName: "getStats_createServerFn_handler",
		importer: () => import("./_ssr/analytics-CsdWYN9s.mjs")
	},
	"6dbd5d3d6b8e8e89dbefa1beb8de51a8e91a2c4fd56862fb9249b956b460d332": {
		functionName: "trackStep_createServerFn_handler",
		importer: () => import("./_ssr/analytics-CsdWYN9s.mjs")
	},
	"7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa": {
		functionName: "sendLead_createServerFn_handler",
		importer: () => import("./_ssr/lead-webhook-BfZWOhrc.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { __commonJSMin as n, __toESM as r, getServerFnById as t };
