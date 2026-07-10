//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-C9Y2XLcW.js
var manifest = {
	"0e2789d576a82367e1770dcc5436e6609fd531e34ab12104eddf185149172f6e": {
		functionName: "trackLp2_createServerFn_handler",
		importer: () => import("./_ssr/analytics-B8TOVlUU.mjs")
	},
	"7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa": {
		functionName: "sendLead_createServerFn_handler",
		importer: () => import("./_ssr/lead-webhook-BlVfOXtC.mjs")
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
export { getServerFnById as t };
