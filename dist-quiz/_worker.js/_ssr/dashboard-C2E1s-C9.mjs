import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./dashboard-DR9nOuWR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-C2E1s-C9.js
var import_jsx_runtime = require_jsx_runtime();
function Bar({ pct }) {
	const color = pct >= 70 ? "#22c55e" : pct >= 40 ? "#eab308" : "#ef4444";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full bg-gray-100 rounded-full h-4 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-4 rounded-full transition-all duration-700",
			style: {
				width: `${pct}%`,
				background: color
			}
		})
	});
}
function Dashboard() {
	const data = Route.useLoaderData();
	const steps = data.steps ?? [];
	const total = data.total ?? 0;
	const sites = data.sites ?? [];
	const checkoutStep = steps.find((s) => s.key === "8_checkout_click");
	const leadStep = steps.find((s) => s.key === "6_lead_submit");
	const SITE_COLORS = {
		lp01: "#6366f1",
		lp2: "#f59e0b",
		quiz: "#22c55e"
	};
	const best = sites.length > 0 ? sites.reduce((a, b) => b.ctr > a.ctr ? b : a, sites[0]) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-gray-50 py-10 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl mx-auto space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold text-gray-900",
						children: "Dashboard Analytics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-gray-500 mt-1",
						children: "Pierry Rodrigues"
					})]
				}),
				sites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl shadow-sm border overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-4 border-b flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-gray-700",
							children: "Taxa de clique no checkout (CTR)"
						}), best && sites.some((s) => s.views > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full",
							children: ["Melhor: ", best.name]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y",
						children: sites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-6 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-2.5 h-2.5 rounded-full",
											style: { background: SITE_COLORS[s.id] ?? "#888" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-gray-800",
											children: s.name
										}),
										best && s.id === best.id && s.views > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs bg-green-100 text-green-600 font-bold px-1.5 py-0.5 rounded",
											children: "Melhor"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-gray-400 ml-4",
									children: s.url
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-2xl font-bold",
										style: { color: SITE_COLORS[s.id] ?? "#888" },
										children: [s.ctr, "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-gray-400",
										children: [
											s.clicks,
											" cliques / ",
											s.views,
											" visitas"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { pct: s.ctr })]
						}, s.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl p-5 shadow-sm border text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-3xl font-bold text-green-500",
								children: [leadStep?.pct ?? 0, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-gray-500 mt-1",
								children: "Enviaram lead"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-gray-400",
								children: [leadStep?.count?.toLocaleString("pt-BR") ?? 0, " pessoas"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl p-5 shadow-sm border text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-3xl font-bold text-violet-500",
								children: [checkoutStep?.pct ?? 0, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-gray-500 mt-1",
								children: "Clicaram no checkout"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-gray-400",
								children: [checkoutStep?.count?.toLocaleString("pt-BR") ?? 0, " pessoas"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl shadow-sm border overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-4 border-b flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-gray-700",
							children: "Funil do Quiz"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-gray-400",
							children: [total.toLocaleString("pt-BR"), " sessões"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-6 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-500 flex items-center justify-center",
											children: i + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium text-gray-800",
											children: s.label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-bold text-gray-900",
											children: [s.pct, "%"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-gray-400 ml-2",
											children: [
												"(",
												s.count?.toLocaleString("pt-BR"),
												")"
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { pct: s.pct }),
								i > 0 && steps[i - 1]?.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-gray-400 mt-1",
									children: [
										"↓ ",
										Math.round(s.count / steps[i - 1].count * 100),
										"% da etapa anterior"
									]
								})
							]
						}, s.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-gray-400 mt-6",
					children: "Atualizado em tempo real · quiz.pierryrodrigues.com.br/dashboard"
				})
			]
		})
	});
}
//#endregion
export { Dashboard as component };
