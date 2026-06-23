# Pierry LP — Imersão "De Frente com a Homossexualidade"

## Status atual
- **URL ao vivo:** https://lp01.pierryrodrigues.com.br
- **Cloudflare Pages projeto:** `de-frente-projeto`
- **Repositório:** https://github.com/ricardocr1806/de-frente-projeto

---

## O que foi feito nessa sessão

### Site
- Extraído do ZIP `LP-Pierry.zip` e configurado em `/Users/ricardocastro/Documents/LP-Pierry-Site/`
- Framework: **Vite + TanStack Start + Tailwind v4**
- Build com preset `cloudflare-pages` (Nitro)

### Imagens
- **Hero desktop:** imagem antes/depois (`antes-depois.png`) na coluna direita com moldura rainbow
- **Hero mobile:** foto lado a lado dos dois (`hero-mobile.png`) — rostos visíveis, sem corte
- **Seção Pierry:** foto profissional no terno azul (`pierry-rodrigues.jpg`)

### Layout mobile (hero)
- Imagem ocupa largura total, rostos visíveis
- Gradiente escurecido na borda inferior
- Texto abaixo da imagem em fundo preto (sem cobrir rostos)
- Botão fixo aparece só após scroll de 80px

### Textos alterados
- "Para homens que vivem esse conflito" → **"Para filhos que vivem esse conflito"**
- FAQ: inclui "filhos — meninos e meninas"
- Preço na oferta: "Para pais, mães ou filhos que vivem esse conflito"

### Botões de compra
- Link: `https://pay.assiny.com.br/1d926e/node/3fZr7o`
- Abrem em nova aba

---

## Meta Pixel — ID: 1574746134050851

### Eventos ativos

| Evento | Quando |
|---|---|
| `PageView` | Carregamento da página (automático) |
| `ViewContent` | Ao carregar — produto visto, valor R$37 |
| `InitiateCheckout` | Clique em qualquer botão de compra |
| `ScrollDepth 25%` | Rolou 25% da página |
| `ScrollDepth 50%` | Rolou 50% |
| `ScrollDepth 75%` | Rolou 75% — alto interesse |
| `TimeOnPage 30s` | 30 segundos na página |
| `TimeOnPage 60s` | 1 minuto |
| `TimeOnPage 120s` | 2 minutos — alta intenção |
| `Purchase` | Página `/obrigado` — após pagamento confirmado |

### Página de obrigado
- URL: `https://lp01.pierryrodrigues.com.br/obrigado`
- Configura no **Assiny**: Produto → Redirect pós-compra → colar a URL acima
- **Botão "Entrar no Grupo":** ⚠️ link ainda pendente — Ricardo vai definir (WhatsApp ou Telegram)

---

## Pendências

- [ ] Link do grupo (WhatsApp/Telegram) para botão na página `/obrigado`
- [ ] Configurar redirect pós-compra no Assiny → `https://lp01.pierryrodrigues.com.br/obrigado`

---

## Deploy

```bash
# Na pasta do projeto
cd /Users/ricardocastro/Documents/LP-Pierry-Site

# Build
npm run build

# Deploy (token pode expirar — criar novo em dash.cloudflare.com se der 401)
CLOUDFLARE_API_TOKEN=SEU_TOKEN_AQUI \
CLOUDFLARE_ACCOUNT_ID=8da9fa4b9b400831f74c8f9099550b7d \
npx wrangler pages deploy dist --project-name de-frente-projeto
```

---

## Credenciais (salvas também na memória do Claude)

- **Cloudflare Account ID:** `8da9fa4b9b400831f74c8f9099550b7d`
- **Cloudflare email:** ricardo.castro1806@gmail.com
- **Zone ID:** `f9df634009ef1d560b200b09db25d5d1`
- **GitHub usuário:** `ricardocr1806`
- **Repositório GitHub:** https://github.com/ricardocr1806/de-frente-projeto
- **Tokens e chaves secretas:** guardadas na memória do Claude (não ficam no GitHub por segurança)
