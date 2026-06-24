# Pierry LP — Imersão "De Frente com a Homossexualidade"

## Sites no ar

| Site | URL | Cloudflare Pages |
|---|---|---|
| Landing Page | https://lp01.pierryrodrigues.com.br | `de-frente-projeto` |
| Quiz | https://quiz.pierryrodrigues.com.br | `quiz-pierry` |

---

## Projeto 1 — Landing Page

- **Local:** `/Users/ricardocastro/Documents/LP-Pierry-Site/`
- **GitHub:** https://github.com/ricardocr1806/de-frente-projeto
- **Framework:** Vite + TanStack Start + Tailwind v4
- **Link de compra:** `https://pay.assiny.com.br/1d926e/node/3fZr7o`
- **Meta Pixel ID:** `1574746134050851`

### Funcionalidades implementadas

- Hero mobile: foto antes/depois, rostos visíveis, texto abaixo em fundo preto
- Hero desktop: duas colunas com foto do Pierry (terno azul)
- Botão fixo aparece após 80px de scroll
- Todos os botões de compra com `onClick → InitiateCheckout` no pixel
- Textos corrigidos: "Para filhos que vivem esse conflito" (meninos e meninas)

### Meta Pixel — eventos ativos

| Evento | Quando |
|---|---|
| `PageView` | Carregamento (automático) |
| `ViewContent` | Ao carregar — R$37 |
| `InitiateCheckout` | Clique em qualquer botão de compra |
| `ScrollDepth 25/50/75%` | Profundidade de leitura |
| `TimeOnPage 30s/60s/120s` | Tempo de engajamento |
| `Purchase` | Página `/obrigado` |

### Página de obrigado — `/obrigado`

- URL: `https://lp01.pierryrodrigues.com.br/obrigado`
- Headline: "Parabéns pela sua inscrição!"
- Botão verde animado (wiggle + pulso) para entrar no grupo
- **Link do grupo:** `https://devzapp.com.br/api-engennier/campanha/api/redirect/v2/6a3b3896423426000180357d`
- ⚠️ **Configurar no Assiny:** Produto → Redirect pós-compra → `https://lp01.pierryrodrigues.com.br/obrigado`

---

## Projeto 2 — Quiz

- **Local:** `/Users/ricardocastro/Documents/Quiz-Pierry-Site/`
- **Framework:** Vite + TanStack Start + Tailwind v4
- **Meta Pixel ID:** `1574746134050851` (PageView instalado)
- **Link de compra no resultado:** `https://pay.assiny.com.br/1d926e/node/3fZr7o`

---

## Deploy (ambos os projetos)

```bash
# LP
cd /Users/ricardocastro/Documents/LP-Pierry-Site
npm run build
CLOUDFLARE_API_TOKEN=SEU_TOKEN \
CLOUDFLARE_ACCOUNT_ID=8da9fa4b9b400831f74c8f9099550b7d \
npx wrangler pages deploy dist --project-name de-frente-projeto

# Quiz
cd /Users/ricardocastro/Documents/Quiz-Pierry-Site
npm run build
CLOUDFLARE_API_TOKEN=SEU_TOKEN \
CLOUDFLARE_ACCOUNT_ID=8da9fa4b9b400831f74c8f9099550b7d \
npx wrangler pages deploy dist --project-name quiz-pierry
```

> Token Cloudflare expira. Criar novo em: dash.cloudflare.com → Meu Perfil → API Tokens

---

## Credenciais (tokens e chaves guardados na memória do Claude)

- Cloudflare Account ID: `8da9fa4b9b400831f74c8f9099550b7d`
- Zone ID: `f9df634009ef1d560b200b09db25d5d1`
- GitHub usuário: `ricardocr1806`

---

## Pendências

- [ ] Configurar redirect pós-compra no Assiny → `https://lp01.pierryrodrigues.com.br/obrigado`
- [ ] Eventos completos do Pixel no Quiz (Lead, InitiateCheckout)
