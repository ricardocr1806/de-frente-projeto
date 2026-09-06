#!/usr/bin/env bash
# CLI mínima para a API do Falume CRM.
#
# A chave vem de FALUME_API_KEY (ou CRM_API_KEY), lida do ambiente ou de
# .env.local na raiz do projeto. Nunca passe a chave por argumento: fica no
# histórico do shell.
#
#   ./scripts/falume.sh flows                   lista os fluxos
#   ./scripts/falume.sh blocks                  catálogo de blocos do construtor
#   ./scripts/falume.sh get <id>                lê o desenho de um fluxo
#   ./scripts/falume.sh create <arquivo.json>   cria um fluxo
#   ./scripts/falume.sh check  <arquivo.json>   valida sem criar (dry_run)
#   ./scripts/falume.sh patch  <id> <arq.json>  edita um fluxo
#   ./scripts/falume.sh activate <id>           põe no ar
#   ./scripts/falume.sh pause    <id>           volta para rascunho
#   ./scripts/falume.sh start <id> <fone> [nome]  dispara para um contato
set -euo pipefail

BASE="${FALUME_API_BASE:-https://falume.com.br/api/v1}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ -z "${FALUME_API_KEY:-}${CRM_API_KEY:-}" && -f "$ROOT/.env.local" ]]; then
  set -a; . "$ROOT/.env.local"; set +a
fi
KEY="${FALUME_API_KEY:-${CRM_API_KEY:-}}"
if [[ -z "$KEY" ]]; then
  echo "erro: defina FALUME_API_KEY (ou CRM_API_KEY) no ambiente ou em .env.local" >&2
  exit 1
fi

# Imprime o corpo e falha em status >= 400, para o script parar no primeiro erro.
request() {
  local method="$1" path="$2" body="${3:-}"
  local args=(-sS -X "$method" "$BASE$path"
              -H "Authorization: Bearer $KEY"
              -w '\n%{http_code}')
  if [[ -n "$body" ]]; then
    args+=(-H 'Content-Type: application/json' --data-binary "$body")
  fi

  local out code
  out="$(curl "${args[@]}")"
  code="${out##*$'\n'}"
  out="${out%$'\n'*}"

  if command -v jq >/dev/null 2>&1; then
    printf '%s' "$out" | jq . 2>/dev/null || printf '%s\n' "$out"
  else
    printf '%s\n' "$out"
  fi

  if [[ "$code" -ge 400 ]]; then
    echo "HTTP $code" >&2
    return 1
  fi
}

# Injeta "dry_run": true no JSON do arquivo.
with_dry_run() {
  if command -v jq >/dev/null 2>&1; then
    jq '. + {dry_run: true}' "$1"
  else
    echo "erro: 'check' precisa do jq instalado" >&2
    exit 1
  fi
}

cmd="${1:-}"; shift || true
case "$cmd" in
  flows)    request GET  "/flows" ;;
  blocks)   request GET  "/flows/blocks" ;;
  get)      request GET  "/flows/${1:?informe o id do fluxo}" ;;
  create)   request POST "/flows" "$(cat "${1:?informe o arquivo json}")" ;;
  check)    request POST "/flows" "$(with_dry_run "${1:?informe o arquivo json}")" ;;
  patch)    request PATCH "/flows/${1:?informe o id}" "$(cat "${2:?informe o arquivo json}")" ;;
  activate) request PATCH "/flows/${1:?informe o id}" '{"status":"active"}' ;;
  pause)    request PATCH "/flows/${1:?informe o id}" '{"status":"draft"}' ;;
  start)
    id="${1:?informe o id}"; phone="${2:?informe o telefone}"; name="${3:-}"
    if [[ -n "$name" ]]; then
      body="$(printf '{"phone":"%s","name":"%s"}' "$phone" "$name")"
    else
      body="$(printf '{"phone":"%s"}' "$phone")"
    fi
    request POST "/flows/$id/start" "$body"
    ;;
  *)
    sed -n '2,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
    exit 1
    ;;
esac
