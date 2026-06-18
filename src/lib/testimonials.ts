export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

/** Depoimentos em destaque (carrossel). */
export const featuredTestimonials: Testimonial[] = [
  {
    name: "Marta Linhares",
    role: "Mãe de dois filhos",
    quote:
      "Eu vivia evitando o assunto com medo de magoar meu filho. Aprendi a conversar sem brigar e, pela primeira vez em anos, nós nos ouvimos de verdade.",
    rating: 5,
  },
  {
    name: "Rafael e Dona Cleide",
    role: "Filho e mãe",
    quote:
      "Não era sobre concordar com tudo. Era sobre voltar a nos aproximar. Hoje almoçamos juntos todo domingo de novo.",
    rating: 5,
  },
  {
    name: "Juliana Prado",
    role: "Mãe",
    quote:
      "Saí do encontro com clareza e direção. Entendi que o silêncio estava destruindo o que eu mais amava. Recomendo de olhos fechados.",
    rating: 5,
  },
];

/** Depoimentos do grid (seção 8). */
export const gridTestimonials: Testimonial[] = [
  {
    name: "André Mancini",
    role: "Pai",
    quote:
      "Eu achava que o problema era o assunto. O encontro me mostrou que o problema era a forma como eu reagia. Mudou tudo.",
    rating: 5,
  },
  {
    name: "Beatriz Couto",
    role: "Mãe",
    quote:
      "Chorei, ri e finalmente respirei. Voltei pra casa com ferramentas reais para reconstruir a relação com a minha filha.",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "Filho",
    quote:
      "Convidei minha mãe pra assistir comigo. Foi a conversa mais honesta que já tivemos. Valeu cada minuto.",
    rating: 5,
  },
  {
    name: "Sônia Arantes",
    role: "Mãe",
    quote:
      "A leveza com que o assunto é tratado me desarmou. Sem julgamento, sem polêmica. Só amor e direção.",
    rating: 5,
  },
  {
    name: "Pedro Henrique",
    role: "Filho",
    quote:
      "Eu tinha desistido de tentar me explicar em casa. Aprendi a me posicionar com firmeza e respeito ao mesmo tempo.",
    rating: 5,
  },
  {
    name: "Cláudia e Marcos",
    role: "Casal de pais",
    quote:
      "Nós dois assistimos e paramos de discutir sobre como lidar. Agora estamos do mesmo lado, juntos pelo nosso filho.",
    rating: 5,
  },
];
