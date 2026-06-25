/**
 * Stub de reporte de erros. O arquivo original não estava versionado no repo;
 * mantemos a mesma assinatura para não quebrar os imports existentes.
 */
export function reportLovableError(
  error: unknown,
  context?: Record<string, unknown>,
): void {
  if (typeof console !== "undefined") {
    console.error("[error]", error, context);
  }
}
