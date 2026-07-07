import { r as __toESM } from "../__23tanstack-start-server-fn-resolver-zaRExVra.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { r as trackStep, t as createSsrRpc } from "./analytics-xFRnpUg6.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PostResultFlow-BVLEciUK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var introQuestions = [{
	id: "age",
	title: "Qual é a sua idade?",
	options: [
		{
			label: "19–29",
			emoji: "🌱"
		},
		{
			label: "30–39",
			emoji: "🌿"
		},
		{
			label: "40–49",
			emoji: "🌳"
		},
		{
			label: "50+",
			emoji: "🌲"
		}
	]
}, {
	id: "relation",
	title: "Qual é a sua relação com a homossexualidade?",
	subtitle: "Sua resposta vai personalizar todo o restante do diagnóstico.",
	options: [
		{
			label: "Estou em dúvida sobre minha sexualidade",
			emoji: "🤔",
			next: "flow2"
		},
		{
			label: "Sou homossexual",
			emoji: "🏳️‍🌈",
			next: "flow2"
		},
		{
			label: "Sou familiar ou responsável por alguém que vive essa questão",
			emoji: "👨‍👩‍👧",
			next: "flow1"
		},
		{
			label: "Sou mãe",
			emoji: "👩",
			next: "flow1"
		},
		{
			label: "Sou pai",
			emoji: "👨",
			next: "flow1"
		}
	]
}];
var flow1Questions = [
	{
		id: "f1_christian",
		title: "Você se considera cristão?",
		options: [
			{
				label: "Sim, sou cristão praticante",
				emoji: "🙏"
			},
			{
				label: "Sim, mas estou afastado",
				emoji: "😔"
			},
			{
				label: "Acredito em Deus, mas não frequento igreja",
				emoji: "✨"
			},
			{
				label: "Tenho dúvidas sobre fé",
				emoji: "🤔"
			},
			{
				label: "Não me considero cristão",
				emoji: "🙅"
			}
		]
	},
	{
		id: "f1_motivation",
		title: "O que mais fez você iniciar este diagnóstico hoje?",
		options: [
			{
				label: "Estou preocupado(a) com meu filho",
				emoji: "😟"
			},
			{
				label: "Quero saber como lidar com alguém da minha família",
				emoji: "👪"
			},
			{
				label: "Sinto que existe algo emocionalmente mal resolvido",
				emoji: "💔"
			},
			{
				label: "Não sei exatamente, mas este assunto me chamou atenção",
				emoji: "👀"
			}
		]
	},
	{
		id: "f1_age_notice",
		title: "Com que idade você começou a perceber comportamentos que chamaram sua atenção?",
		options: [
			{
				label: "Antes dos 5 anos",
				emoji: "🍼"
			},
			{
				label: "Entre 6 e 8 anos",
				emoji: "🎒"
			},
			{
				label: "Entre 9 e 12 anos",
				emoji: "📚"
			},
			{
				label: "Entre 13 e 15 anos",
				emoji: "🎧"
			},
			{
				label: "Depois dos 15 anos",
				emoji: "🚪"
			}
		]
	},
	{
		id: "f1_attention",
		title: "Seu filho costumava buscar mais a atenção do pai ou da mãe?",
		options: [
			{
				label: "Quase exclusivamente da mãe",
				emoji: "👩"
			},
			{
				label: "Dos dois igualmente",
				emoji: "👨‍👩‍👦"
			},
			{
				label: "Quase exclusivamente do pai",
				emoji: "👨"
			}
		]
	},
	{
		id: "f1_abuse",
		title: "Seu filho sofreu algum tipo de abuso, assédio ou exposição sexual precoce?",
		options: [
			{
				label: "Sim",
				emoji: "😢"
			},
			{
				label: "Tenho suspeitas",
				emoji: "😕"
			},
			{
				label: "Não sei responder",
				emoji: "🤷"
			},
			{
				label: "Não",
				emoji: "🙂"
			}
		]
	},
	{
		id: "f1_porn",
		title: "Seu filho foi exposto precocemente a pornografia ou conteúdo sexual?",
		options: [
			{
				label: "Sim, antes dos 10 anos",
				emoji: "⚠️"
			},
			{
				label: "Sim, entre 10 e 13 anos",
				emoji: "📱"
			},
			{
				label: "Tenho suspeitas",
				emoji: "🤨"
			},
			{
				label: "Não sei dizer",
				emoji: "🤷"
			},
			{
				label: "Não",
				emoji: "🙂"
			}
		]
	},
	{
		id: "f1_insert_observando",
		kind: "insert",
		kicker: "O que estamos observando",
		title: "A identidade não nasce em um único evento — ela é construída ao longo dos anos.",
		body: [
			{ text: "Ela se forma através de pertencimento, validação, segurança emocional, vínculos com pai e mãe, experiências familiares, amizades, rejeições e feridas." },
			{ text: "Muitas vezes, o comportamento é só a parte visível. As raízes costumam estar escondidas." },
			{
				text: "Por isso, compreender a história é tão importante quanto observar as escolhas atuais.",
				bold: true
			}
		],
		bullets: [
			"Pertencimento",
			"Validação",
			"Segurança",
			"Vínculos",
			"Feridas",
			"Rejeições"
		],
		cta: "Continuar diagnóstico"
	},
	{
		id: "f1_fragile",
		title: "Na sua percepção, qual destas áreas parece ter sido mais frágil durante o desenvolvimento dele?",
		options: [
			{
				label: "Relacionamento com o pai",
				emoji: "👨"
			},
			{
				label: "Relacionamento com a mãe",
				emoji: "👩"
			},
			{
				label: "Pertencimento social",
				emoji: "🫂"
			},
			{
				label: "Autoestima",
				emoji: "🪞"
			},
			{
				label: "Segurança emocional",
				emoji: "🛡️"
			},
			{
				label: "Não sei dizer",
				emoji: "🤷"
			}
		]
	},
	{
		id: "f1_changes",
		title: "Seu filho tem demonstrado mudanças de comportamento nos últimos tempos?",
		options: [
			{
				label: "Quase sempre",
				emoji: "😟"
			},
			{
				label: "Frequentemente",
				emoji: "😕"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Nunca",
				emoji: "😄"
			}
		]
	},
	{
		id: "f1_closed",
		title: "Você percebe que seu filho está mais fechado, distante ou difícil de acessar emocionalmente?",
		options: [
			{
				label: "Sim, muito fechado",
				emoji: "🔒"
			},
			{
				label: "Um pouco",
				emoji: "🚪"
			},
			{
				label: "Às vezes ele se abre",
				emoji: "🙂"
			},
			{
				label: "Sempre conversamos abertamente",
				emoji: "💬"
			}
		]
	},
	{
		id: "f1_avoid",
		title: "Seu filho evita conversar sobre sentimentos, identidade, sexualidade ou relacionamentos?",
		options: [
			{
				label: "Quase sempre",
				emoji: "🤐"
			},
			{
				label: "Frequentemente",
				emoji: "😶"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Nunca",
				emoji: "💬"
			}
		]
	},
	{
		id: "f1_shutdown",
		title: "Quando você tenta conversar, ele se fecha, se irrita ou muda de assunto?",
		options: [
			{
				label: "Sim",
				emoji: "😤"
			},
			{
				label: "Às vezes",
				emoji: "😕"
			},
			{
				label: "Nunca, temos boas conversas",
				emoji: "🌿"
			}
		]
	},
	{
		id: "f1_outside",
		title: "Seu filho parece buscar mais aceitação fora de casa do que dentro da família?",
		options: [
			{
				label: "Sim, sempre prefere os amigos",
				emoji: "🚪"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Não, nossa conexão é forte",
				emoji: "💞"
			}
		]
	},
	{
		id: "f1_friends",
		title: "Você percebe que amizades, grupos ou redes sociais influenciam muito a forma como ele se enxerga?",
		options: [
			{
				label: "Sim, demais",
				emoji: "📱"
			},
			{
				label: "Um pouco",
				emoji: "🤔"
			},
			{
				label: "Não, ele já sabe quem é",
				emoji: "🛡️"
			}
		]
	},
	{
		id: "f1_insert_distancia",
		kind: "insert",
		kicker: "Um respiro para você",
		title: "Um filho pode morar dentro de casa e, ainda assim, sentir-se distante emocionalmente.",
		body: [
			{ text: "Muitos pais tentam corrigir o que aparece. Mas nem sempre conseguem compreender o que está por trás." },
			{ text: "Antes de um filho falar sobre comportamento, escolhas ou sexualidade, muitas vezes ele já carrega perguntas silenciosas:" },
			{
				text: "“Eu sou visto?  Eu sou amado?  Eu pertenço?  Posso contar a verdade sem perder minha família?  Meus pais conseguem me enxergar além dessa questão?”",
				bold: true
			},
			{
				text: "O comportamento é a parte visível. A identidade é a raiz. A conexão é a ponte.",
				bold: true
			}
		]
	},
	{
		id: "f1_fear",
		title: "Você sente medo de falar algo errado e acabar afastando ainda mais seu filho?",
		options: [
			{
				label: "Quase sempre",
				emoji: "😰"
			},
			{
				label: "Frequentemente",
				emoji: "😟"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Nunca",
				emoji: "💪"
			}
		]
	},
	{
		id: "f1_misunderstood",
		title: "Seu filho demonstra sentir que não é compreendido dentro de casa?",
		options: [
			{
				label: "Quase sempre",
				emoji: "💔"
			},
			{
				label: "Frequentemente",
				emoji: "😔"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Nunca",
				emoji: "🌱"
			}
		]
	},
	{
		id: "f1_conflict",
		title: "Na sua casa, conversas difíceis costumam terminar em discussão, silêncio ou afastamento?",
		options: [
			{
				label: "Sim, sempre uma tensão",
				emoji: "⚡"
			},
			{
				label: "Às vezes",
				emoji: "😕"
			},
			{
				label: "Nunca",
				emoji: "🌿"
			}
		]
	},
	{
		id: "f1_correction",
		title: "Você costuma corrigir primeiro e tentar compreender depois?",
		options: [
			{
				label: "Primeiro a correção, sempre",
				emoji: "📏"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Nunca, minha prioridade é a conexão",
				emoji: "🤝"
			}
		]
	},
	{
		id: "f1_shame",
		title: "Quando o assunto é homossexualidade, você sente medo, vergonha, culpa ou sensação de fracasso?",
		options: [
			{
				label: "Sim",
				emoji: "😞"
			},
			{
				label: "Às vezes",
				emoji: "😕"
			},
			{
				label: "Não",
				emoji: "🌿"
			}
		]
	},
	{
		id: "f1_harsh",
		title: "Você já reagiu com palavras duras, ameaças ou comparações e depois percebeu que isso aumentou a distância?",
		options: [
			{
				label: "Quase sempre",
				emoji: "💥"
			},
			{
				label: "Frequentemente",
				emoji: "😔"
			},
			{
				label: "Às vezes",
				emoji: "😕"
			},
			{
				label: "Nunca",
				emoji: "🌿"
			}
		]
	},
	{
		id: "f1_clarity",
		title: "Hoje, qual é o seu nível de clareza sobre como agir com seu filho?",
		options: [
			{
				label: "Tenho muitas dúvidas",
				emoji: "🌫️"
			},
			{
				label: "Tenho alguma clareza, mas ainda tenho medo",
				emoji: "🌤️"
			},
			{
				label: "Sim, tenho clareza",
				emoji: "☀️"
			}
		]
	},
	{
		id: "f1_wish",
		title: "Hoje, o que você mais deseja em relação ao seu filho?",
		options: [
			{
				label: "Restaurar a conexão emocional",
				emoji: "💞"
			},
			{
				label: "Saber como conversar sem afastar",
				emoji: "💬"
			},
			{
				label: "Entender o que está por trás disso tudo",
				emoji: "🔎"
			},
			{
				label: "Todas as opções acima",
				emoji: "✨"
			}
		]
	}
];
var flow2Questions = [
	{
		id: "f2_christian",
		title: "Você se considera cristão?",
		options: [
			{
				label: "Sim, sou cristão praticante",
				emoji: "🙏"
			},
			{
				label: "Sim, mas estou afastado",
				emoji: "😔"
			},
			{
				label: "Acredito em Deus, mas não frequento igreja",
				emoji: "✨"
			},
			{
				label: "Tenho dúvidas sobre fé",
				emoji: "🤔"
			},
			{
				label: "Não me considero cristão",
				emoji: "🙅"
			}
		]
	},
	{
		id: "f2_phase",
		title: "Em que fase você começou a perceber conflitos relacionados à sua sexualidade ou identidade?",
		options: [
			{
				label: "Ainda estou tentando entender",
				emoji: "🌫️"
			},
			{
				label: "Na fase adulta",
				emoji: "🧑"
			},
			{
				label: "Na juventude",
				emoji: "🎓"
			},
			{
				label: "Na adolescência",
				emoji: "🎧"
			},
			{
				label: "Na infância",
				emoji: "🧸"
			}
		]
	},
	{
		id: "f2_father",
		title: "Como você descreveria sua relação com seu pai durante a infância?",
		options: [
			{
				label: "Ausente fisicamente",
				emoji: "🚪"
			},
			{
				label: "Presente, mas distante emocionalmente",
				emoji: "🪨"
			},
			{
				label: "Conflituosa",
				emoji: "⚡"
			},
			{
				label: "Afetuosa e próxima",
				emoji: "🤝"
			}
		]
	},
	{
		id: "f2_mother",
		title: "E sua relação com sua mãe durante a infância?",
		options: [
			{
				label: "Muito próxima, quase fusional",
				emoji: "🫂"
			},
			{
				label: "Próxima e equilibrada",
				emoji: "💞"
			},
			{
				label: "Distante",
				emoji: "🚪"
			},
			{
				label: "Conflituosa",
				emoji: "⚡"
			}
		]
	},
	{
		id: "f2_abuse",
		title: "Você sofreu algum tipo de abuso, assédio ou exposição sexual precoce?",
		options: [
			{
				label: "Sim",
				emoji: "😢"
			},
			{
				label: "Algo que hoje vejo como inapropriado",
				emoji: "😕"
			},
			{
				label: "Prefiro não responder",
				emoji: "🤐"
			},
			{
				label: "Não",
				emoji: "🙂"
			}
		]
	},
	{
		id: "f2_porn",
		title: "Você foi exposto à pornografia ou conteúdo sexual antes dos 13 anos?",
		options: [
			{
				label: "Sim, antes dos 10 anos",
				emoji: "⚠️"
			},
			{
				label: "Sim, entre 10 e 13 anos",
				emoji: "📱"
			},
			{
				label: "Não lembro",
				emoji: "🤷"
			},
			{
				label: "Não",
				emoji: "🙂"
			}
		]
	},
	{
		id: "f2_insert_raizes",
		kind: "insert",
		kicker: "Um respiro para você",
		title: "Sua identidade não foi construída em um único evento — ela foi sendo moldada ao longo da sua história.",
		body: [
			{ text: "Pertencimento, validação, segurança emocional, vínculos com pai e mãe, amizades, rejeições e feridas: tudo isso entrou na composição de quem você é hoje." },
			{ text: "Muitas vezes, o que você sente é só a parte visível. As raízes costumam estar escondidas." },
			{
				text: "Compreender sua história é tão importante quanto entender o que você sente.",
				bold: true
			}
		],
		bullets: [
			"Pertencimento",
			"Validação",
			"Segurança",
			"Vínculos",
			"Feridas",
			"Rejeições"
		],
		cta: "Continuar diagnóstico"
	},
	{
		id: "f2_belonging",
		title: "Na infância e adolescência, você se sentia pertencente ao grupo de meninos / meninas do seu sexo?",
		options: [
			{
				label: "Nunca me senti parte",
				emoji: "🪟"
			},
			{
				label: "Às vezes",
				emoji: "😕"
			},
			{
				label: "Sempre me senti incluído(a)",
				emoji: "🫂"
			}
		]
	},
	{
		id: "f2_rejection",
		title: "Você se lembra de momentos marcantes de rejeição, exclusão ou humilhação na infância?",
		options: [
			{
				label: "Sim, muitos",
				emoji: "💔"
			},
			{
				label: "Alguns",
				emoji: "😔"
			},
			{
				label: "Poucos",
				emoji: "🙂"
			},
			{
				label: "Nenhum",
				emoji: "🌿"
			}
		]
	},
	{
		id: "f2_seen",
		title: "Você sente que as pessoas te veem para além da sua orientação sexual?",
		options: [
			{
				label: "Sim",
				emoji: "👁️"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Nunca, me enxergam só por isso",
				emoji: "🏷️"
			}
		]
	},
	{
		id: "f2_beyond_label",
		title: "Você gostaria de ser visto para além da sua orientação sexual?",
		options: [
			{
				label: "Sim, profundamente",
				emoji: "💫"
			},
			{
				label: "Talvez",
				emoji: "🤔"
			},
			{
				label: "Não, isso me define",
				emoji: "🏳️‍🌈"
			}
		]
	},
	{
		id: "f2_insert_essencia",
		kind: "insert",
		kicker: "Pausa para sentir",
		title: "Você é muito mais do que qualquer rótulo que recebeu.",
		body: [
			{ text: "Você é mais do que seus desejos, mais do que seus conflitos, mais do que seus medos e mais do que a opinião de quem te cercou." },
			{ text: "Sua história é maior do que isso. E o que você sente importa — mas o que você viveu importa também." },
			{
				text: "Talvez o maior conflito não seja quem você é. Talvez seja nunca ter compreendido completamente como chegou até aqui.",
				bold: true
			}
		]
	},
	{
		id: "f2_inner_conflict",
		title: "Você sente conflitos internos entre o que sente, o que deseja e o que acredita?",
		options: [
			{
				label: "Sim, constantemente",
				emoji: "🌀"
			},
			{
				label: "De vez em quando",
				emoji: "😕"
			},
			{
				label: "Raramente",
				emoji: "🙂"
			},
			{
				label: "Não",
				emoji: "🌿"
			}
		]
	},
	{
		id: "f2_loneliness",
		title: "Mesmo cercado de pessoas, você se sente sozinho com frequência?",
		options: [
			{
				label: "Quase sempre",
				emoji: "🌧️"
			},
			{
				label: "Frequentemente",
				emoji: "🌫️"
			},
			{
				label: "Às vezes",
				emoji: "🙂"
			},
			{
				label: "Quase nunca",
				emoji: "☀️"
			}
		]
	},
	{
		id: "f2_family",
		title: "Como sua família reagiu (ou reagiria) à sua orientação sexual?",
		options: [
			{
				label: "Rejeição clara",
				emoji: "💔"
			},
			{
				label: "Aceitação superficial, mas com distância",
				emoji: "🪟"
			},
			{
				label: "Conflito e tensão",
				emoji: "⚡"
			},
			{
				label: "Acolhimento",
				emoji: "🫂"
			}
		]
	},
	{
		id: "f2_relationships",
		title: "Como tem sido sua experiência com relacionamentos afetivos?",
		options: [
			{
				label: "Curtos e instáveis",
				emoji: "🌪️"
			},
			{
				label: "Intensos, mas dolorosos",
				emoji: "💥"
			},
			{
				label: "Tenho dificuldade em me envolver",
				emoji: "🧊"
			},
			{
				label: "Estáveis e saudáveis",
				emoji: "🌿"
			}
		]
	},
	{
		id: "f2_who_am_i",
		title: "Você já se perguntou quem você seria para além dos desejos, relacionamentos e rótulos que recebeu?",
		options: [
			{
				label: "Frequentemente",
				emoji: "🔎"
			},
			{
				label: "Às vezes",
				emoji: "🤔"
			},
			{
				label: "Nunca pensei sobre isso",
				emoji: "🙃"
			}
		]
	},
	{
		id: "f2_wish",
		title: "O que você mais deseja hoje em relação à sua história?",
		options: [
			{
				label: "Compreender de onde vem o que sinto",
				emoji: "🧭"
			},
			{
				label: "Encontrar paz interior",
				emoji: "🕊️"
			},
			{
				label: "Ser visto integralmente",
				emoji: "💫"
			},
			{
				label: "Todas as opções acima",
				emoji: "✨"
			}
		]
	}
];
var loadingQuotes = [
	{
		quote: "Você é muito mais do que qualquer rótulo que recebeu.",
		author: "Mapa da Identidade"
	},
	{
		quote: "O comportamento é a parte visível. A identidade é a raiz. A conexão é a ponte.",
		author: "Mapa da Identidade"
	},
	{
		quote: "Compreender a história é tão importante quanto observar as escolhas atuais.",
		author: "Mapa da Identidade"
	}
];
function QuizProgress({ value, rainbow = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full h-1.5 rounded-full bg-accent overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full transition-[width] duration-500 ease-out",
			style: {
				width: `${Math.max(0, Math.min(100, value))}%`,
				background: rainbow ? "var(--gradient-rainbow)" : "var(--color-primary)"
			}
		})
	});
}
var RAINBOW_NO_RED = [
	"var(--rainbow-orange)",
	"var(--rainbow-yellow)",
	"var(--rainbow-green)",
	"var(--rainbow-blue)",
	"var(--rainbow-indigo)",
	"var(--rainbow-violet)"
];
function QuestionScreen({ question, onSelect }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	function handle(idx, opt) {
		setSelected(idx);
		setTimeout(() => onSelect(opt), 280);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl sm:text-3xl font-bold tracking-tight text-balance text-foreground",
				children: question.title
			}), question.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm sm:text-base text-muted-foreground text-balance",
				children: question.subtitle
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: question.options.map((opt, idx) => {
				const color = RAINBOW_NO_RED[idx % RAINBOW_NO_RED.length];
				const isSelected = selected === idx;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handle(idx, opt),
					className: "group w-full text-left px-5 py-4 rounded-2xl border-2 bg-card transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4",
					style: {
						borderColor: isSelected ? color : "var(--color-border)",
						backgroundColor: isSelected ? `color-mix(in oklab, ${color} 10%, var(--color-card))` : void 0,
						boxShadow: isSelected ? `0 8px 24px -12px ${color}` : "0 1px 2px rgba(15,23,42,0.04)",
						["--tw-ring-color"]: `color-mix(in oklab, ${color} 30%, transparent)`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [opt.emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid place-items-center w-9 h-9 rounded-full text-lg shrink-0",
							style: {
								backgroundColor: `color-mix(in oklab, ${color} 18%, white)`,
								border: `1px solid color-mix(in oklab, ${color} 35%, white)`
							},
							children: opt.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: opt.label
						})]
					})
				}, opt.label);
			})
		})]
	});
}
function LoadingScreen({ onDone, label = "Construindo seu Mapa da Identidade…", quotes: quotesOverride }) {
	const [pct, setPct] = (0, import_react.useState)(0);
	const [quoteIdx, setQuoteIdx] = (0, import_react.useState)(0);
	const quotes = quotesOverride ?? loadingQuotes;
	(0, import_react.useEffect)(() => {
		const start = Date.now();
		const duration = 4200;
		const id = setInterval(() => {
			const elapsed = Date.now() - start;
			const p = Math.min(100, Math.round(elapsed / duration * 100));
			setPct(p);
			setQuoteIdx(Math.min(quotes.length - 1, Math.floor(p / 100 * quotes.length)));
			if (p >= 100) {
				clearInterval(id);
				setTimeout(onDone, 400);
			}
		}, 80);
		return () => clearInterval(id);
	}, [onDone]);
	const q = quotes[quoteIdx];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full flex flex-col items-center justify-center min-h-[60vh] text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-24 h-24 rounded-full animate-spin",
					style: {
						background: "conic-gradient(var(--rainbow-red), var(--rainbow-orange), var(--rainbow-yellow), var(--rainbow-green), var(--rainbow-blue), var(--rainbow-indigo), var(--rainbow-violet), var(--rainbow-red))",
						mask: "radial-gradient(circle, transparent 52%, black 54%)",
						WebkitMask: "radial-gradient(circle, transparent 52%, black 54%)",
						animationDuration: "1.4s"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "max-w-xl text-lg sm:text-xl font-semibold italic text-foreground px-4",
				children: [
					"“",
					q.quote,
					"”"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground",
				children: q.author
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-xl mt-12 px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-sm font-medium text-foreground mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pct, "%"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full h-2 rounded-full overflow-hidden bg-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full transition-[width] duration-200",
						style: {
							width: `${pct}%`,
							background: "var(--gradient-rainbow)"
						}
					})
				})]
			})
		]
	});
}
var LeadSchema = objectType({
	name: stringType(),
	email: stringType().email(),
	phone: stringType(),
	flow: stringType(),
	utm_source: stringType().optional(),
	utm_medium: stringType().optional(),
	utm_campaign: stringType().optional(),
	utm_content: stringType().optional(),
	utm_term: stringType().optional(),
	fbclid: stringType().optional()
});
var sendLead = createServerFn({ method: "POST" }).validator(LeadSchema).handler(createSsrRpc("7de8aacdf31c96d188ac8c365e9f474d104b8c0651187c57ecedc3d90bb3fbaa"));
var UTM_KEYS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"fbclid",
	"gclid"
];
function captureUtms() {
	if (typeof window === "undefined") return {};
	const params = new URLSearchParams(window.location.search);
	const utms = {};
	UTM_KEYS.forEach((k) => {
		const v = params.get(k);
		if (v) utms[k] = v;
	});
	if (Object.keys(utms).length > 0) sessionStorage.setItem("utms", JSON.stringify(utms));
	return utms;
}
function getUtms() {
	if (typeof window === "undefined") return {};
	try {
		return JSON.parse(sessionStorage.getItem("utms") ?? "{}");
	} catch {
		return {};
	}
}
function appendUtmsToUrl(baseUrl) {
	const utms = getUtms();
	if (!Object.keys(utms).length) return baseUrl;
	const params = new URLSearchParams(utms);
	return `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}${params.toString()}`;
}
var COPY$1 = {
	flow1: {
		title: "Última etapa antes de receber o Mapa da Identidade do seu filho(a)…",
		subtitle: "Informe seu Nome, Email e WhatsApp onde você vai receber o diagnóstico personalizado da sua família:"
	},
	flow2: {
		title: "Última etapa antes de receber o seu Mapa da Identidade…",
		subtitle: "Informe seu Nome, Email e WhatsApp onde você vai receber o seu diagnóstico pessoal:"
	}
};
function formatBRPhone(raw) {
	const d = raw.replace(/\D/g, "").slice(0, 11);
	if (d.length <= 2) return d.length ? `(${d}` : "";
	if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
	if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
	return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function isValidBRPhone(raw) {
	const d = raw.replace(/\D/g, "");
	if (d.length !== 10 && d.length !== 11) return false;
	const ddd = parseInt(d.slice(0, 2), 10);
	if (ddd < 11 || ddd > 99) return false;
	if (d.length === 11 && d[2] !== "9") return false;
	return true;
}
function fbq$1(...args) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...args);
}
function LeadForm({ flow, onSubmit }) {
	const c = COPY$1[flow ?? "flow2"];
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [whatsapp, setWhatsapp] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const nameOk = name.trim().length > 1;
	const emailOk = /\S+@\S+\.\S+/.test(email.trim());
	const phoneOk = isValidBRPhone(whatsapp);
	const valid = nameOk && emailOk && phoneOk;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl sm:text-3xl font-bold text-balance",
				children: c.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base font-semibold text-foreground",
				children: c.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					setTouched(true);
					if (valid) {
						const lead = {
							name: name.trim(),
							email: email.trim(),
							whatsapp: whatsapp.trim()
						};
						sendLead({ data: {
							name: lead.name,
							email: lead.email,
							phone: lead.whatsapp,
							flow: flow ?? "flow2",
							...getUtms()
						} }).catch(() => {});
						trackStep({ data: { step: "6_lead_submit" } }).catch(() => {});
						fbq$1("track", "Lead", { content_name: "Quiz — Mapa da Identidade Homossexual" });
						onSubmit(lead);
					}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-foreground",
							children: "Primeiro nome"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Digite seu primeiro nome...",
							maxLength: 60,
							className: "mt-1 w-full rounded-2xl border-2 px-4 py-3 text-base outline-none focus:border-[var(--rainbow-violet)] bg-card",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-foreground",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Digite seu Email...",
							maxLength: 120,
							className: "mt-1 w-full rounded-2xl border-2 px-4 py-3 text-base outline-none focus:border-[var(--rainbow-violet)] bg-card",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-foreground",
								children: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								inputMode: "numeric",
								value: whatsapp,
								onChange: (e) => setWhatsapp(formatBRPhone(e.target.value)),
								placeholder: "(11) 91234-5678",
								maxLength: 16,
								className: "mt-1 w-full rounded-2xl border-2 px-4 py-3 text-base outline-none focus:border-[var(--rainbow-violet)] bg-card",
								required: true
							}),
							touched && !phoneOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block mt-1 text-xs font-medium",
								style: { color: "var(--rainbow-orange)" },
								children: "Informe um número de WhatsApp válido com DDD."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: !valid,
						className: "w-full py-4 rounded-full font-semibold text-white text-base sm:text-lg shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
						style: { background: "var(--gradient-rainbow-no-red)" },
						children: "Continuar"
					})
				]
			})
		]
	});
}
var person_sad_default = "/assets/person-sad-VdOVHVFO.jpg";
var person_happy_default = "/assets/person-happy-B0BUHc59.jpg";
var family_sad_default = "/assets/family-sad-VDPiMMOT.jpg";
var family_happy_default = "/assets/family-happy-Dlky4wKY.jpg";
var pierry_default = "/assets/pierry-WI_UCmAX.jpg";
function fbq(...args) {
	if (typeof window !== "undefined" && window.fbq) window.fbq(...args);
}
var RAINBOW = [
	"var(--rainbow-orange)",
	"var(--rainbow-yellow)",
	"var(--rainbow-green)",
	"var(--rainbow-blue)",
	"var(--rainbow-indigo)",
	"var(--rainbow-violet)"
];
var EVENT = {
	name: "De Frente com a Homossexualidade",
	dates: "15 e 16 de Julho",
	time: "às 20h",
	format: "Online e Ao Vivo"
};
var COPY = {
	flow1: {
		reflectionTitle: "Agora que você começou a enxergar alguns padrões — você está disposto(a) a quebrar esse ciclo?",
		reflectionOptions: [
			"Sim — não quero perder meu filho",
			"Sim — mesmo que seja difícil encarar",
			"Acho que sim — quero tentar",
			"Ainda tenho medo do que vou encontrar"
		],
		compareIntro: "Veja a diferença de quem vive em CICLO x quem decide RESTAURAR",
		leftTitle: "CICLO OCULTO",
		leftSubtitle: "O padrão diagnosticado nas suas respostas",
		rightTitle: "DECIDE RESTAURAR",
		rightSubtitle: "Quem passou pelo MAPA DA IDENTIDADE",
		sliders: [
			{
				label: "Padrão herdado da família",
				left: 78,
				right: 14
			},
			{
				label: "Culpa sobre a criação",
				left: 81,
				right: 17
			},
			{
				label: "Bloqueio de autoridade",
				left: 74,
				right: 19
			},
			{
				label: "Conexão emocional com o filho",
				left: 22,
				right: 92
			},
			{
				label: "Clareza para conversar",
				left: 18,
				right: 94
			}
		],
		quoteHeader: "E antes do Mapa da Identidade, a maioria dos pais contava a mesma história…",
		quote: "\"Eu rezo, eu tento conversar, eu me esforço… mas cada palavra parece empurrar meu filho pra mais longe.\"",
		quoteSub: "Pais e mães sentiam que algo invisível travava a relação — e não sabiam o que era.",
		transformTitle: "Depois de RESTAURAR A CONEXÃO no MAPA DA IDENTIDADE…",
		transformSubtitle: "Esses foram os resultados relatados",
		transformStats: [{
			value: "87%",
			text: "Quebraram padrões emocionais que afastavam o filho"
		}, {
			value: "78%",
			text: "Retomaram conversas que pareciam impossíveis"
		}],
		transformQuote: "Eles voltaram a conduzir o lar SEM medo, SEM ameaça e SEM perder o filho de vista.",
		pitchKicker: "Ei {nome}…",
		pitchTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Na imersão ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-rainbow",
				children: "De Frente com a Homossexualidade"
			}),
			" você vai destravar a história do seu filho e mudar o destino da sua família."
		] }),
		antesDepoisLabel: {
			antes: "Hoje na sua família",
			depois: "Depois da imersão"
		},
		antesDepoisCaption: ["Distância, silêncio e medo de errar", "Conexão restaurada, conversa sem culpa"],
		receivedTitle: "VOCÊ RECEBERÁ:",
		mainCardTitle: "2 DIAS DE IMERSÃO AO VIVO",
		mainCardSub: "ENTENDER A HISTÓRIA DO SEU FILHO E ROMPER OS CICLOS DA SUA GERAÇÃO",
		pillars: [{
			title: "CAMINHO PARA UMA PATERNIDADE/MATERNIDADE SAUDÁVEL COM BASE EM PRINCÍPIOS BÍBLICOS",
			icon: "📖"
		}, {
			title: "ENTENDER OS PADRÕES EMOCIONAIS QUE ESTÃO AFASTANDO SEU FILHO",
			icon: "🧠"
		}],
		bibleQuote: "\"Enquanto você não curar aquilo que te feriu, você vai sangrar em cima de pessoas que não te cortaram.\"",
		progressTitle: "SEU PROGRESSO ESPERADO NA IMERSÃO DE FRENTE COM A HOMOSSEXUALIDADE",
		bullets: [
			{
				hl: "Você vai finalmente entender por que age como age",
				body: "Não é falta de fé. É um padrão que foi instalado na sua história — e que só muda quando você entende de onde veio."
			},
			{
				hl: "Você vai parar de sangrar em cima de quem não te cortou",
				body: "Seus relacionamentos e sua relação com seu filho vão mudar quando você identificar de onde vêm seus gatilhos."
			},
			{
				hl: "Você vai se ver como Deus te vê, não como as vozes do passado te viram",
				body: "Sua identidade não está no que disseram de você. Está em quem Ele diz que você é."
			},
			{
				hl: "Você vai ter ferramentas práticas para mudar ainda naquela semana",
				body: "Não é só teoria. Você sai com algo concreto para aplicar — e sentir a diferença imediatamente."
			},
			{
				hl: "Você vai entender como sua história está impactando a vida do seu filho",
				body: "O que não foi resolvido em você está chegando nele. A mentoria mostra como encerrar esse ciclo agora."
			},
			{
				hl: "Você vai receber direção prática de quem estuda e acompanha esse caminho",
				body: "Não é teoria solta — é um método para você aplicar e ver a diferença na sua família."
			}
		]
	},
	flow2: {
		reflectionTitle: "Agora que você começou a enxergar alguns padrões — você está disposto(a) a olhar pra sua história de verdade?",
		reflectionOptions: [
			"Sim — eu mereço entender quem eu sou",
			"Sim — mesmo que seja doloroso",
			"Acho que sim — quero tentar",
			"Ainda tenho medo do que vou encontrar"
		],
		compareIntro: "Veja a diferença de quem vive em CONFLITO x quem decide se RECONECTAR consigo",
		leftTitle: "CONFLITO OCULTO",
		leftSubtitle: "O padrão emocional diagnosticado",
		rightTitle: "RECONECTADO",
		rightSubtitle: "Quem percorreu o MAPA DA IDENTIDADE",
		sliders: [
			{
				label: "Sensação de não pertencer",
				left: 82,
				right: 13
			},
			{
				label: "Necessidade de validação externa",
				left: 79,
				right: 18
			},
			{
				label: "Peso da história não compreendida",
				left: 76,
				right: 16
			},
			{
				label: "Clareza sobre quem eu sou",
				left: 16,
				right: 92
			},
			{
				label: "Paz interior",
				left: 21,
				right: 88
			}
		],
		quoteHeader: "E antes do Mapa da Identidade, quase todos contavam a mesma história…",
		quote: "\"Eu pareço inteiro por fora, mas por dentro existe um vazio que nenhum relacionamento preenche.\"",
		quoteSub: "Pessoas sentiam que algo invisível segurava a vida delas no lugar — e não sabiam o nome do que sentiam.",
		transformTitle: "Depois de RESTAURAR A IDENTIDADE no MAPA DA IDENTIDADE…",
		transformSubtitle: "Esses foram os resultados relatados",
		transformStats: [{
			value: "89%",
			text: "Compreenderam a raiz das feridas que carregavam há anos"
		}, {
			value: "84%",
			text: "Encontraram paz e clareza sobre quem realmente são"
		}],
		transformQuote: "Eles deixaram de ser definidos pelas feridas e voltaram a se enxergar para além de qualquer rótulo.",
		pitchKicker: "Ei {nome}…",
		pitchTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Na imersão ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-rainbow",
				children: "De Frente com a Homossexualidade"
			}),
			" você vai destravar sua história e voltar a se enxergar para além de qualquer rótulo."
		] }),
		antesDepoisLabel: {
			antes: "Como você se sente hoje",
			depois: "Depois da imersão"
		},
		antesDepoisCaption: ["Vazio, dúvida e busca por encaixe", "Clareza sobre quem você é de verdade"],
		receivedTitle: "VOCÊ RECEBERÁ:",
		mainCardTitle: "2 DIAS DE IMERSÃO AO VIVO",
		mainCardSub: "ENTENDER SUA HISTÓRIA E REENCONTRAR SUA ESSÊNCIA NO SEU PRÓPRIO RITMO",
		pillars: [{
			title: "CAMINHO PARA UMA IDENTIDADE SAUDÁVEL COM BASE EM PRINCÍPIOS BÍBLICOS",
			icon: "📖"
		}, {
			title: "ENTENDER AS FERIDAS EMOCIONAIS QUE AINDA DIRIGEM SUAS ESCOLHAS",
			icon: "🧠"
		}],
		bibleQuote: "\"Enquanto você não curar aquilo que te feriu, você vai sangrar em cima de pessoas que não te cortaram.\"",
		progressTitle: "SEU PROGRESSO ESPERADO NA IMERSÃO DE FRENTE COM A HOMOSSEXUALIDADE",
		bullets: [
			{
				hl: "Você vai finalmente entender por que sente o que sente",
				body: "Não é frescura. Não é falta de fé. É uma história que precisa ser olhada com verdade — e que só muda quando você entende de onde veio."
			},
			{
				hl: "Você vai parar de tentar se encaixar para ser aceito",
				body: "Suas relações mudam quando você identifica de onde vêm os gatilhos — e para de descarregar dor antiga em quem te ama."
			},
			{
				hl: "Você vai se ver como Deus te vê, não como as vozes do passado te viram",
				body: "Sua identidade não está no que disseram de você. Está em quem Ele diz que você é. E essa descoberta muda tudo."
			},
			{
				hl: "Você vai ter ferramentas práticas para mudar ainda naquela semana",
				body: "Não é só teoria, não é só emoção. Você sai com algo concreto para aplicar — e sentir a diferença imediatamente."
			},
			{
				hl: "Você vai entender como sua história está impactando seus relacionamentos",
				body: "O que não foi resolvido em você chega em quem está perto. A mentoria mostra como encerrar esse ciclo agora."
			},
			{
				hl: "Você vai receber direção prática para aplicar dentro da sua semana",
				body: "Não é teoria solta — é um método para você aplicar e sentir mudança real em quem você é."
			}
		]
	}
};
var ANTES = [
	"Repetir reações da sua história sem entender de onde vêm",
	"Sentir culpa por padrões que você nem escolheu ter",
	"Sangrar em cima de quem não te cortou — na família, no amor, nas amizades",
	"Aceitar menos do que merece por achar que essa é sua identidade",
	"Sentir que está vivendo no automático, sem entender por quê"
];
var DEPOIS = [
	"Dormir tranquilo sabendo de onde vêm seus padrões — e como mudar",
	"Romper com a culpa do passado e viver com mais leveza no presente",
	"Trazer paz pro seu lar e parar de repetir os mesmos conflitos",
	"Ver mudança real nos seus relacionamentos — sem se afastar da fé",
	"Romper o ciclo emocional que marcou sua família por gerações",
	"Construir uma referência diferente da que você recebeu — sem se destruir no caminho"
];
var RESULT_STATS = [
	{
		value: 83,
		text: "identificaram e começaram a romper padrões herdados já nas primeiras semanas."
	},
	{
		value: 88,
		text: "disseram que finalmente entenderam por que a vida estava travada."
	},
	{
		value: 95,
		text: "disseram que entenderam de onde vêm seus bloqueios — e sentiram clareza sobre o que fazer agora."
	},
	{
		value: 84,
		text: "com o mesmo perfil que o seu já vivem com mais paz, conexão e propósito após o treinamento."
	}
];
function PostResultFlow({ flow, name, onRestart }) {
	const [step, setStep] = (0, import_react.useState)("reflection");
	const c = COPY[flow];
	const displayName = name || "amigo(a)";
	const next = (s) => () => setStep(s);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [
			step === "reflection" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reflection, {
				title: c.reflectionTitle,
				options: c.reflectionOptions,
				onSelect: next("comparison")
			}),
			step === "comparison" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {
				intro: c.compareIntro,
				leftTitle: c.leftTitle,
				leftSubtitle: c.leftSubtitle,
				rightTitle: c.rightTitle,
				rightSubtitle: c.rightSubtitle,
				sliders: c.sliders.slice(),
				onNext: next("story")
			}),
			step === "story" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {
				header: c.quoteHeader,
				quote: c.quote,
				sub: c.quoteSub,
				onNext: next("transformation")
			}),
			step === "transformation" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformation, {
				title: c.transformTitle,
				subtitle: c.transformSubtitle,
				stats: c.transformStats.slice(),
				quote: c.transformQuote,
				onNext: next("pitch")
			}),
			step === "pitch" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalPitch, {
				flow,
				name: displayName,
				onRestart
			})
		]
	});
}
function Reflection({ title, options, onSelect }) {
	const emojis = [
		"😔",
		"😌",
		"🙂",
		"😟"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-xl sm:text-2xl font-bold text-balance text-center",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 space-y-3",
		children: options.map((opt, i) => {
			const col = RAINBOW[i % RAINBOW.length];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onSelect,
				className: "w-full flex items-center gap-3 rounded-2xl border-2 bg-card px-4 py-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md",
				style: { borderColor: `color-mix(in oklab, ${col} 35%, white)` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl",
					"aria-hidden": true,
					children: emojis[i]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: opt
				})]
			}, opt);
		})
	})] });
}
function Comparison({ intro, leftTitle, leftSubtitle, rightTitle, rightSubtitle, sliders, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl sm:text-2xl font-bold text-center text-balance",
			children: intro
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border-2 p-4 text-center",
				style: { borderColor: "color-mix(in oklab, var(--rainbow-orange) 40%, white)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold",
					style: { color: "var(--rainbow-orange)" },
					children: leftTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs mt-2 text-muted-foreground",
					children: leftSubtitle
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border-2 p-4 text-center",
				style: { borderColor: "color-mix(in oklab, var(--rainbow-green) 40%, white)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold",
					style: { color: "var(--rainbow-green)" },
					children: rightTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs mt-2 text-muted-foreground",
					children: rightSubtitle
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-5",
			children: sliders.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: s.label,
					value: s.left,
					color: "var(--rainbow-orange)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: s.label,
					value: s.right,
					color: "var(--rainbow-green)",
					align: "right"
				})]
			}, s.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onNext,
			className: "mt-10 w-full py-4 rounded-full font-semibold text-white text-base sm:text-lg shadow-lg transition-transform hover:-translate-y-0.5",
			style: { background: "var(--gradient-rainbow-no-red)" },
			children: "Continuar"
		})
	] });
}
function Bar({ label, value, color, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `text-muted-foreground ${align === "right" ? "order-2" : ""}`,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-semibold",
			style: { color },
			children: [value, "%"]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 h-2 rounded-full bg-accent overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full transition-all",
			style: {
				width: `${value}%`,
				background: color
			}
		})
	})] });
}
function Story({ header, quote, sub, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-muted-foreground text-balance",
			children: header
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-6 text-2xl sm:text-3xl font-bold text-center text-balance",
			children: quote
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-center text-sm text-foreground text-balance",
			children: sub
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-2xl border-2 p-5",
			style: {
				borderColor: "color-mix(in oklab, var(--rainbow-violet) 30%, white)",
				background: "linear-gradient(180deg, color-mix(in oklab, var(--rainbow-yellow) 12%, white), color-mix(in oklab, var(--rainbow-violet) 8%, white))"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center",
					children: "Situação relatada:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex items-end justify-around h-32 gap-2",
					children: [
						55,
						78,
						92,
						70,
						45,
						28,
						18
					].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 rounded-t-md transition-all",
						style: {
							height: `${h}%`,
							background: i < 3 ? "linear-gradient(180deg, var(--rainbow-orange), var(--rainbow-yellow))" : "linear-gradient(180deg, var(--rainbow-yellow), var(--rainbow-green))"
						}
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between text-[10px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Começo" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1 mês" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2 meses" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3 meses" })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-center font-bold text-foreground",
			children: "ERA MUITO ESFORÇO PARA POUCO RESULTADO"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onNext,
			className: "mt-8 w-full py-4 rounded-full font-semibold text-white text-base sm:text-lg shadow-lg transition-transform hover:-translate-y-0.5",
			style: { background: "var(--gradient-rainbow-no-red)" },
			children: "Continuar"
		})
	] });
}
function Transformation({ title, subtitle, stats, quote, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg sm:text-xl font-bold text-center text-balance",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-center text-sm text-muted-foreground",
			children: subtitle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6",
			children: stats.map((s, i) => {
				const col = i === 0 ? "var(--rainbow-green)" : "var(--rainbow-blue)";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border-2 p-5 text-center",
					style: { borderColor: `color-mix(in oklab, ${col} 35%, white)` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-28 h-28 rounded-full grid place-items-center",
						style: { background: `conic-gradient(${col} ${parseInt(s.value)}%, color-mix(in oklab, ${col} 12%, white) 0)` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-20 h-20 rounded-full bg-card grid place-items-center font-bold text-xl",
							style: { color: col },
							children: s.value
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-foreground text-balance",
						children: s.text
					})]
				}, s.value);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 rounded-2xl p-5 text-center font-semibold text-foreground",
			style: { background: "color-mix(in oklab, var(--rainbow-green) 15%, white)" },
			children: quote
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onNext,
			className: "mt-8 w-full py-4 rounded-full font-semibold text-white text-base sm:text-lg shadow-lg transition-transform hover:-translate-y-0.5",
			style: { background: "var(--gradient-rainbow-no-red)" },
			children: "Continuar"
		})
	] });
}
function FinalPitch({ flow, name, onRestart }) {
	const c = COPY[flow];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10 sm:space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center text-sm font-medium text-muted-foreground",
					children: c.pitchKicker.replace("{nome}", name)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl sm:text-3xl font-extrabold text-center text-balance leading-tight",
					children: c.pitchTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyCard, {
							flow,
							label: "ANTES",
							mood: "bad",
							caption: c.antesDepoisCaption[0],
							subLabel: c.antesDepoisLabel.antes
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-black text-muted-foreground",
							children: "›››"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyCard, {
							flow,
							label: "DEPOIS",
							mood: "good",
							caption: c.antesDepoisCaption[1],
							subLabel: c.antesDepoisLabel.depois
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-full mx-auto w-fit px-4 py-1 text-sm font-semibold text-muted-foreground bg-accent",
					children: [name, "…"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-center text-xl font-extrabold",
					children: c.receivedTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-2xl border-2 overflow-hidden",
					style: { borderColor: "color-mix(in oklab, var(--rainbow-violet) 40%, white)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[2/3] sm:aspect-[3/4] overflow-hidden",
						style: { background: "linear-gradient(135deg, #1a0033, #4a0066)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: pierry_default,
								alt: "Pierry — instrutor da imersão",
								loading: "lazy",
								className: "absolute inset-0 w-full h-full object-cover object-[center_15%]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0",
								style: { background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-4 text-white text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest opacity-80",
										children: "Imersão Online • Com Pierry"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-serif text-2xl italic",
										children: "De Frente com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-2xl italic text-rainbow",
										children: "a Homossexualidade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 text-[11px] opacity-90",
										children: [
											EVENT.dates,
											" • ",
											EVENT.time
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-card text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-block font-extrabold px-2 py-0.5",
							style: { background: "color-mix(in oklab, var(--rainbow-yellow) 70%, white)" },
							children: c.mainCardTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-bold text-foreground text-sm",
							children: c.mainCardSub
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3",
					children: c.pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 bg-card overflow-hidden",
						style: { borderColor: "color-mix(in oklab, var(--rainbow-blue) 30%, white)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-32 grid place-items-center text-5xl",
							style: { background: `linear-gradient(135deg, color-mix(in oklab, ${RAINBOW[i + 2]} 20%, white), color-mix(in oklab, ${RAINBOW[i + 3]} 20%, white))` },
							children: p.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 text-center font-bold text-sm",
							children: p.title
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 rounded-2xl p-5 text-center text-white font-bold italic text-base",
					style: { background: "var(--rainbow-violet)" },
					children: c.bibleQuote
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-center font-extrabold text-balance text-lg",
					children: c.progressTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-center text-xs text-muted-foreground",
					children: "(com base nas suas respostas)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressChart, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl p-4 text-center font-extrabold text-xl",
						style: { background: "color-mix(in oklab, var(--rainbow-indigo) 15%, white)" },
						children: "2 DIAS DE IMERSÃO AO VIVO"
					}),
					c.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl p-3 font-bold text-foreground text-sm",
						style: { background: "color-mix(in oklab, var(--rainbow-green) 22%, white)" },
						children: b.hl
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 rounded-2xl p-3 bg-card border text-sm text-foreground",
						children: b.body
					})] }, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-full mx-auto w-fit px-4 py-1 text-sm font-semibold text-muted-foreground bg-accent",
						children: [
							"É muita praticidade, ",
							name,
							"…"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkout, { name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground italic",
					children: "de acordo com as suas respostas…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-center font-extrabold text-balance",
					children: "Pessoas como você conseguiram excelentes resultados com a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-center text-2xl font-extrabold",
					style: { color: "var(--rainbow-green)" },
					children: "IMERSÃO DE FRENTE COM A HOMOSSEXUALIDADE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-4",
					children: RESULT_STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 bg-card p-5 flex flex-col items-center text-center",
						style: { borderColor: "color-mix(in oklab, var(--rainbow-green) 25%, white)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, { value: s.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-foreground text-balance",
							children: s.text
						})]
					}, s.value))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-center text-xl font-extrabold",
					style: { color: "var(--rainbow-orange)" },
					children: "A VIDA ANTES DA IMERSÃO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-2xl p-3 text-center text-sm font-semibold italic text-foreground bg-accent",
					children: "Durante a imersão você vai resolver esses pontos de uma vez por todas:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: ANTES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-3 text-sm font-medium",
						style: { background: "color-mix(in oklab, var(--rainbow-orange) 15%, white)" },
						children: ["❌ ", a]
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-8 text-center text-xl font-extrabold",
					style: { color: "var(--rainbow-green)" },
					children: "A VIDA DEPOIS DA IMERSÃO DE FRENTE COM A HOMOSSEXUALIDADE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-2xl p-3 text-center text-sm font-semibold italic text-foreground bg-accent",
					children: "Essa será sua realidade como participante da imersão. Você vai:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: DEPOIS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-3 text-sm font-medium",
						style: { background: "color-mix(in oklab, var(--rainbow-green) 18%, white)" },
						children: ["✅ ", d]
					}, d))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-center text-2xl font-extrabold",
				style: { color: "var(--rainbow-green)" },
				children: "COM OS 2 DIAS DE IMERSÃO SERÁ CAPAZ DE TRANSFORMAR SUA VIDA E A DE QUEM VOCÊ AMA:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-2",
				children: [
					"Entender de onde vêm os padrões que afetam sua família",
					"Ter conversas reais com seu filho(a) sem culpa ou distância",
					"Romper ciclos emocionais que se repetem há gerações",
					"Conduzir seu lar com amor, verdade e princípios bíblicos",
					"Voltar a dormir com paz sabendo que está no caminho certo"
				].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl p-3 text-sm font-medium",
					style: { background: "color-mix(in oklab, var(--rainbow-green) 18%, white)" },
					children: ["✅ ", d]
				}, d))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border-2 p-5 text-center",
				style: {
					borderColor: "color-mix(in oklab, var(--rainbow-green) 40%, white)",
					background: "color-mix(in oklab, var(--rainbow-green) 10%, white)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-12 h-12 rounded-full grid place-items-center text-2xl",
						style: { background: "var(--rainbow-green)" },
						children: "🛡️"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-lg font-extrabold",
						style: { color: "var(--rainbow-green)" },
						children: "GARANTIA DE 7 DIAS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-foreground text-balance",
						children: [
							"Você tem ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "7 dias de garantia incondicional"
							}),
							". Se não sentir que a imersão fez sentido para você, devolvemos ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "100% do seu investimento"
							}),
							" — sem burocracia e sem perguntas."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "text-center space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-extrabold text-rainbow",
						children: "NA IMERSÃO DE FRENTE COM A HOMOSSEXUALIDADE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-foreground",
						children: [
							"Vai ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "romper os padrões emocionais"
							}),
							" que estão impactando a sua história…"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-foreground text-balance",
						children: [
							"Você receberá ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "TUDO QUE PRECISA"
							}),
							" para ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "REPROGRAMAR"
							}),
							" sua mente e ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "VIVER COM VERDADE E AMOR"
							}),
							" — sem desvirtuar dos princípios bíblicos."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Use o botão fixo abaixo para garantir sua vaga."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "h-24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-0 inset-x-0 z-50 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 bg-gradient-to-t from-background via-background/95 to-background/0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: appendUtmsToUrl("https://pay.assiny.com.br/1d926e/node/3fZr7o"),
						target: "_blank",
						rel: "noopener noreferrer",
						"data-cta": flow === "flow1" ? "pais" : "filhos",
						onClick: () => {
							fbq("track", "InitiateCheckout", {
								value: 9.9,
								currency: "BRL",
								content_name: "De Frente com a Homossexualidade"
							});
							trackStep({ data: { step: "8_checkout_click" } }).catch(() => {});
						},
						className: "block w-full py-4 rounded-full font-bold text-white text-base sm:text-lg shadow-2xl transition-transform hover:-translate-y-0.5 text-center",
						style: { background: "var(--gradient-rainbow-no-red)" },
						children: "QUERO MINHA VAGA POR R$ 9,90 →"
					})
				})
			})
		]
	});
}
function Checkout({ name }) {
	const [secs, setSecs] = (0, import_react.useState)(600);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setSecs((s) => s > 0 ? s - 1 : 0), 1e3);
		return () => clearInterval(t);
	}, []);
	const mm = String(Math.floor(secs / 60)).padStart(2, "0");
	const ss = String(secs % 60).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border-2 p-5 text-center",
			style: {
				borderColor: "color-mix(in oklab, var(--rainbow-yellow) 50%, white)",
				background: "color-mix(in oklab, var(--rainbow-yellow) 18%, white)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-foreground",
					children: "Seu cupom de desconto foi aplicado!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 text-sm",
					children: [
						"✅ ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: name
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--rainbow-green)" },
							className: "font-bold",
							children: "81% OFF"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-xs text-muted-foreground",
					children: ["O desconto está reservado por: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold",
						style: { color: "var(--rainbow-green)" },
						children: [
							mm,
							":",
							ss,
							" minutos"
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-2xl overflow-hidden border-2",
			style: { borderColor: "var(--rainbow-violet)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-2 text-center text-white font-bold text-sm",
				style: { background: "var(--gradient-rainbow-no-red)" },
				children: "81% OFF"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 flex items-center gap-4 bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-lg",
						children: "2 DIAS DE IMERSÃO AO VIVO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground mt-1",
						children: [
							EVENT.name,
							" — ",
							EVENT.dates,
							" • ",
							EVENT.time
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							"De ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-through",
								children: "R$ 197,00"
							}),
							" por"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-extrabold",
						style: { color: "var(--rainbow-violet)" },
						children: "R$ 9,90"
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 text-center text-xs text-muted-foreground",
			children: "Pagamento via Cartão, Pix ou Boleto"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center justify-center gap-2 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { color: "var(--rainbow-yellow)" },
				children: "★★★★★"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "4.8 estrelas de 1912 avaliações"
			})]
		})
	] });
}
function FamilyCard({ flow, label, mood, caption, subLabel }) {
	const color = mood === "bad" ? "var(--rainbow-orange)" : "var(--rainbow-green)";
	const arrow = mood === "bad" ? "↘" : "↗";
	const img = flow === "flow1" ? mood === "bad" ? family_sad_default : family_happy_default : mood === "bad" ? person_sad_default : person_happy_default;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-extrabold",
				style: { color },
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 w-full aspect-[3/4] rounded-2xl border-2 bg-card relative overflow-hidden",
				style: {
					borderColor: `color-mix(in oklab, ${color} 35%, white)`,
					background: `linear-gradient(180deg, color-mix(in oklab, ${color} 8%, white), white)`
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-2 right-2 text-2xl font-black z-10",
						style: { color },
						children: arrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: subLabel,
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "absolute inset-0 w-full h-full object-contain p-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-1 left-0 right-0 text-center text-[10px] font-semibold text-muted-foreground px-2",
						children: subLabel
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[11px] text-muted-foreground text-center px-1",
				children: caption
			})
		]
	});
}
function ProgressChart() {
	const points = [
		{
			x: 8,
			y: 88,
			label: "Bloqueado",
			color: "var(--rainbow-orange)"
		},
		{
			x: 36,
			y: 60,
			label: "Clareza",
			color: "var(--rainbow-yellow)"
		},
		{
			x: 64,
			y: 28,
			label: "Primeiras vitórias",
			color: "var(--rainbow-green)"
		},
		{
			x: 92,
			y: 10,
			label: "Novo padrão mental",
			color: "var(--rainbow-green)"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 rounded-2xl border-2 bg-card p-4",
		style: { borderColor: "color-mix(in oklab, var(--rainbow-green) 30%, white)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-52 w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 100 100",
				preserveAspectRatio: "none",
				className: "absolute inset-0 w-full h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "line",
						x1: "0",
						x2: "1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "var(--rainbow-orange)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "50%",
								stopColor: "var(--rainbow-yellow)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "var(--rainbow-green)"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "fill",
						x1: "0",
						x2: "0",
						y1: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "color-mix(in oklab, var(--rainbow-green) 30%, white)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "white",
							stopOpacity: "0"
						})]
					})] }),
					[
						0,
						25,
						50,
						75,
						100
					].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "0",
						x2: "100",
						y1: y,
						y2: y,
						stroke: "color-mix(in oklab, var(--muted) 30%, white)",
						strokeDasharray: "1 1",
						strokeWidth: "0.3"
					}, y)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} L 92,100 L 8,100 Z`,
						fill: "url(#fill)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`,
						fill: "none",
						stroke: "url(#line)",
						strokeWidth: "1.5"
					}),
					points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: p.x,
						cy: p.y,
						r: "1.6",
						fill: p.color
					}, i))
				]
			}), points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -translate-x-1/2 -translate-y-full rounded-md px-2 py-0.5 text-[10px] font-bold text-white whitespace-nowrap",
				style: {
					left: `${p.x}%`,
					top: `${p.y}%`,
					background: p.color
				},
				children: p.label
			}, i))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex justify-between text-[10px] text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hoje" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Semana 1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Semana 2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Semana 3" })
			]
		})]
	});
}
function Donut({ value }) {
	const color = "var(--rainbow-green)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-28 h-28 rounded-full grid place-items-center",
		style: { background: `conic-gradient(${color} ${value}%, color-mix(in oklab, ${color} 10%, white) 0)` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-20 h-20 rounded-full bg-card grid place-items-center font-extrabold text-xl",
			children: [value, "%"]
		})
	});
}
//#endregion
export { QuizProgress as a, flow2Questions as c, QuestionScreen as i, introQuestions as l, LoadingScreen as n, captureUtms as o, PostResultFlow as r, flow1Questions as s, LeadForm as t };
