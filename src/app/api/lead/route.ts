/**
 * Recebe os dados do lead capturados antes do checkout.
 *
 * Por padrão apenas registra no log do servidor. Para encaminhar a um CRM,
 * planilha ou ao n8n, defina a variável de ambiente LEAD_WEBHOOK_URL — os
 * dados serão enviados via POST (JSON) para essa URL.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nome = String(body?.nome ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const whatsapp = String(body?.whatsapp ?? "").trim();

    if (!nome || !email || !whatsapp) {
      return Response.json(
        { ok: false, error: "Dados incompletos." },
        { status: 400 },
      );
    }

    const lead = {
      nome,
      email,
      whatsapp,
      whatsappDigits: whatsapp.replace(/\D/g, ""),
      criadoEm: new Date().toISOString(),
    };

    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      }).catch((err) => console.error("[LEAD] falha no webhook:", err));
    } else {
      console.log("[LEAD]", lead);
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Erro interno." }, { status: 500 });
  }
}
