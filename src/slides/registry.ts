import type { ComponentType } from "react";
import type { Presenter } from "../components/decor";
import { Slide01, Slide02, Slide03, Slide04 } from "./part1";
import { Slide05, Slide06, Slide07 } from "./part2";
import { Slide08, Slide09, Slide10 } from "./part3";

export const PRESENTERS = {
  carlos: { name: "Carlos Henrique", color: "#4f9fd4", initials: "CH" } satisfies Presenter,
  joao: { name: "João Caia", color: "#c7cdd3", initials: "JC" } satisfies Presenter,
  kevin: { name: "Kevin", color: "#2e6e9e", initials: "K" } satisfies Presenter,
};

export type SlideDef = {
  n: number;
  title: string;
  short: string;
  idea: string;
  presenter: Presenter;
  seconds: number;
  notes: string[];
  Component: ComponentType<{ n: number; presenter: Presenter }>;
};

export const SLIDES: SlideDef[] = [
  {
    n: 1,
    title: "Capa — Espionagem Cibernética",
    short: "Capa",
    idea: "Apresentar o tema e o grupo em uma frase.",
    presenter: PRESENTERS.carlos,
    seconds: 35,
    notes: [
      "Boa tarde a todos. Nosso grupo vai falar sobre espionagem cibernética, um crime digital que quase ninguém percebe enquanto está acontecendo.",
      "O nome parece difícil, mas a ideia é simples: alguém entra escondido em computadores para observar e copiar informações importantes.",
      "A imagem da tela mostra exatamente isso — um “olho digital” vigiando uma rede de computadores.",
      "Vamos dividir a apresentação em três partes: eu começo com o conceito e as características; o João Caia fala dos perigos, dos casos atuais e dos alvos; e o Kevin encerra com um caso real e com as formas de proteção.",
      "Dica: fale devagar, olhe para a turma e não leia o slide. Ele é só o apoio visual.",
    ],
    Component: Slide01,
  },
  {
    n: 2,
    title: "O que significa espionagem cibernética?",
    short: "Conceito",
    idea: "Uma ideia só: roubar informações em segredo, usando computadores.",
    presenter: PRESENTERS.carlos,
    seconds: 80,
    notes: [
      "Vamos separar a palavra em duas partes. Espionagem é observar escondido. Cibernética é tudo que envolve computadores e internet.",
      "Juntando: espionagem cibernética é roubar informações de forma secreta, usando computadores ou a internet.",
      "O invasor entra em um sistema sem autorização. Sistema é só o nome para computador, celular, rede ou programa que guarda dados.",
      "Ele não quer aparecer: ele quer documentos, mensagens e senhas.",
      "O motivo quase sempre é levar vantagem — política, militar ou econômica.",
      "Use a comparação da sala: é como alguém entrar escondido, copiar papéis secretos e sair sem ninguém ver. No computador é igual, só que sem barulho e sem porta arrombada.",
      "Pergunta para a turma: “o que aconteceria se alguém lesse todas as suas mensagens durante um mês sem você saber?”",
    ],
    Component: Slide02,
  },
  {
    n: 3,
    title: "Como os invasores conseguem entrar?",
    short: "Passo a passo",
    idea: "Cinco etapas: alvo, brecha, isca, invasão e cópia.",
    presenter: PRESENTERS.carlos,
    seconds: 90,
    notes: [
      "Aponte cada etapa na tela enquanto explica. São cinco passos, e nenhum deles usa força: quase tudo é engano e distração.",
      "1) Escolhem o alvo: uma pessoa, uma empresa ou um governo.",
      "2) Procuram a brecha: uma falha de segurança ou alguém fácil de enganar.",
      "3) Enviam a isca: um e-mail falso ou um programa malicioso — programa malicioso é um aplicativo feito para causar dano ao computador.",
      "4) Entram e procuram: vasculham arquivos e mensagens.",
      "5) Copiam e somem: enviam os dados para outro lugar, em silêncio.",
      "Explique phishing (fí-xing): é uma mensagem falsa criada para enganar a vítima e fazer com que ela clique em algo perigoso.",
      "Exemplo do cotidiano: você recebe um e-mail dizendo que é do seu banco e pedindo para atualizar a senha. Ao clicar, pode entregar seus dados ao criminoso.",
      "Importante deixar claro: estamos explicando para reconhecer o golpe, não para ensinar ninguém a invadir.",
    ],
    Component: Slide03,
  },
  {
    n: 4,
    title: "O que torna esse crime diferente?",
    short: "Características",
    idea: "Silenciosa, planejada, persistente, direcionada e digital.",
    presenter: PRESENTERS.carlos,
    seconds: 80,
    notes: [
      "Um roubo comum faz barulho: quebra a porta, leva o objeto, alguém percebe. A espionagem digital tenta não deixar marca nenhuma.",
      "Silenciosa: o ataque tenta passar despercebido, não estraga nada, apenas observa.",
      "Planejada: o alvo é escolhido com cuidado, depois de muita pesquisa sobre a vítima.",
      "Persistente: o invasor pode ficar escondido por meses, voltando sempre que quiser.",
      "Direcionada: ele busca informações específicas, não qualquer coisa.",
      "Digital: acontece em computadores, celulares, redes e programas.",
      "Feche com a frase de impacto: muitas vezes a vítima só descobre o ataque depois que os dados já foram copiados.",
    ],
    Component: Slide04,
  },
  {
    n: 5,
    title: "Por que esse crime é tão grave?",
    short: "Perigos",
    idea: "Informação tem valor: dinheiro, poder e segurança.",
    presenter: PRESENTERS.joao,
    seconds: 80,
    notes: [
      "Agora eu continuo com a parte dos prejuízos. A pergunta é: por que roubar informação é tão grave?",
      "Porque informação também é riqueza. Ela vale dinheiro, poder e segurança.",
      "Pode roubar segredos de empresas e de governos, que vão parar nas mãos erradas.",
      "Pode expor pesquisas, projetos e dados pessoais de milhares de pessoas.",
      "Pode causar prejuízo financeiro: fraude, multas e custo para consertar tudo.",
      "Pode prejudicar a segurança de um país inteiro.",
      "E pode dar vantagem para quem roubou: se uma empresa perde o projeto de um produto novo, outra pode copiar a ideia antes do lançamento.",
      "Mostre a pasta confidencial dividida em três: empresa, governo e pessoa. Os três podem ser vítimas.",
    ],
    Component: Slide05,
  },
  {
    n: 6,
    title: "A espionagem cibernética acontece de verdade",
    short: "Casos atuais",
    idea: "Não é filme: acontece todos os dias, em vários países.",
    presenter: PRESENTERS.joao,
    seconds: 80,
    notes: [
      "Muita gente acha que isso é coisa de filme. Não é. Existem grupos especializados só nisso.",
      "Na linha do tempo: em 2024, governos e empresas continuaram sendo atacados no mundo todo.",
      "Em 2025, as campanhas usaram principalmente e-mails falsos e falhas em programas conhecidos.",
      "Em 2026, novos ataques foram relatados contra organizações de vários países, inclusive aqui no Brasil.",
      "Os alvos mais procurados são tecnologia, defesa, bancos, governos e centros de pesquisa.",
      "Reforce: quase sempre o ataque começa com uma mensagem simples, não com um supercomputador.",
      "Não é preciso citar nomes difíceis de grupos nem números: o importante é que a turma entenda que isso é real e frequente.",
    ],
    Component: Slide06,
  },
  {
    n: 7,
    title: "Quem pode sofrer espionagem cibernética?",
    short: "Alvos",
    idea: "Tudo que guarda informação valiosa vira alvo — inclusive você.",
    presenter: PRESENTERS.joao,
    seconds: 80,
    notes: [
      "No centro da tela está o verdadeiro alvo: a informação. Em volta, estão os seis grupos mais atacados.",
      "Governos e órgãos públicos; empresas de tecnologia; bancos e instituições financeiras; universidades e centros de pesquisa; saúde, energia e defesa; e pessoas que trabalham com dados importantes.",
      "Explique que quanto mais valiosa é a informação, maior é o interesse do espião.",
      "Faça a pergunta para a turma e espere alguém responder: “se alguém tivesse acesso ao seu e-mail, às suas fotos e às suas senhas, o que essa pessoa descobriria sobre você?”",
      "Complete: descobriria onde você mora, com quem fala, onde estuda, o que compra e até o que pensa.",
      "Feche a sua parte dizendo que qualquer pessoa pode ser alvo, mas qualquer pessoa também pode se proteger — e é disso que o Kevin vai falar.",
    ],
    Component: Slide07,
  },
  {
    n: 8,
    title: "Caso real: o ataque à SolarWinds (2020)",
    short: "Estudo de caso",
    idea: "Confiar demais em um fornecedor pode abrir a porta do sistema.",
    presenter: PRESENTERS.kevin,
    seconds: 90,
    notes: [
      "Eu vou contar um caso real, famoso e fácil de entender.",
      "Em 2020, uma empresa chamada SolarWinds fazia um programa de gerenciamento usado por muitas organizações.",
      "Os criminosos não atacaram as vítimas diretamente: atacaram a empresa que fazia o programa.",
      "Eles mexeram nas atualizações. As vítimas baixaram uma atualização que parecia normal e confiável.",
      "Com isso, os invasores entraram junto, sem disparar nenhum alarme, e conseguiram ler sistemas e informações importantes.",
      "Explique a palavra fornecedor: é quem vende ou mantém um serviço para outra empresa.",
      "Lição final: uma empresa pode ser atacada por meio de alguém em quem ela confia. Por isso existe a expressão “cadeia de fornecedores”.",
      "Comparação simples para a turma: é como o ladrão pegar a chave do prédio com o funcionário da limpeza, em vez de arrombar a porta.",
    ],
    Component: Slide08,
  },
  {
    n: 9,
    title: "Como reduzir o risco de espionagem digital?",
    short: "Proteção",
    idea: "Cuidados simples atrapalham muito o invasor.",
    presenter: PRESENTERS.kevin,
    seconds: 90,
    notes: [
      "Agora a parte mais útil da apresentação: o que fazer. O escudo no centro está dividido em dois lados — pessoas e empresas.",
      "Para qualquer pessoa: criar senhas fortes e diferentes para cada conta.",
      "Ativar a confirmação em duas etapas. Explique com calma: além da senha, a conta pede uma segunda confirmação, como um código que chega no celular.",
      "Desconfiar de links, mensagens e anexos estranhos — se veio de repente, pergunte antes de clicar.",
      "Manter celular, computador e aplicativos atualizados, porque as atualizações fecham portas abertas.",
      "Para empresas: treinar funcionários, proteger redes e arquivos sigilosos, atualizar sistemas, monitorar acessos estranhos e fazer cópias de segurança dos dados.",
      "Reforce que nenhuma trava é perfeita, mas cada cuidado a mais diminui a chance de sucesso do invasor.",
      "Frase final do slide: pensar antes de clicar também é uma forma de proteção.",
    ],
    Component: Slide09,
  },
  {
    n: 10,
    title: "Conclusão e perguntas",
    short: "Conclusão",
    idea: "Proteger informação é como trancar a porta de casa.",
    presenter: PRESENTERS.kevin,
    seconds: 70,
    notes: [
      "Vamos resumir em cinco frases: espionagem cibernética é o roubo secreto de informações digitais.",
      "Ela pode atingir pessoas, empresas e governos.",
      "Os ataques tentam ficar escondidos o maior tempo possível.",
      "A prevenção depende de atenção, conhecimento e segurança digital.",
      "E pequenos cuidados evitam grandes problemas.",
      "Feche com a frase final: no mundo digital, proteger informações é tão importante quanto trancar uma porta.",
      "Agradeça: “obrigado pela atenção!” e abra para perguntas.",
      "Se ninguém perguntar nada, faça você uma pergunta para a turma: “alguém aqui já recebeu uma mensagem estranha se passando por banco?”",
    ],
    Component: Slide10,
  },
];

export const TOTAL_BUDGET = 900; // 15 minutos
export const TOTAL_SLIDE_TIME = SLIDES.reduce((acc, s) => acc + s.seconds, 0);
