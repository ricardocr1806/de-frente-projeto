export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const nome = String(body?.nome ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const whatsapp = String(body?.whatsapp ?? "").trim();

    if (!nome || !email || !whatsapp) {
      return Response.json({ ok: false, error: "Dados incompletos." }, { status: 400 });
    }

    const lead = {
      nome,
      email,
      whatsapp,
      whatsappDigits: whatsapp.replace(/\D/g, ""),
      criadoEm: new Date().toISOString(),
    };

    const webhook = context.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      }).catch((err) => console.error("[LEAD] falha no webhook:", err));
    } else {
      console.log("[LEAD]", JSON.stringify(lead));
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Erro interno." }, { status: 500 });
  }
}
