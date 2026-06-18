/** Link de pré-checkout da Greenn. */
export const CHECKOUT_URL =
  "https://payfast.greenn.com.br/pre-checkout/9ncjbja";

/**
 * Monta a URL do checkout com os dados do lead anexados como query params,
 * para rastreamento e pré-preenchimento.
 */
export function buildCheckoutUrl(lead: {
  nome: string;
  email: string;
  whatsapp: string;
}): string {
  const url = new URL(CHECKOUT_URL);
  const phone = lead.whatsapp.replace(/\D/g, "");
  // Nomes comuns aceitos por plataformas de checkout (pt e en)
  url.searchParams.set("name", lead.nome);
  url.searchParams.set("nome", lead.nome);
  url.searchParams.set("email", lead.email);
  url.searchParams.set("phone", phone);
  url.searchParams.set("telefone", phone);
  return url.toString();
}
