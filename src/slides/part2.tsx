import type { Presenter } from "../components/decor";
import { Bullet, Callout, IconBadge, Mark, Quote, Reveal, Seal, SlideShell } from "../components/decor";
import { GlobeLinks, HubWeb } from "../components/illustrations";
import {
  BankIcon,
  BuildingIcon,
  CapIcon,
  ChipIcon,
  FileIcon,
  FolderIcon,
  FactoryIcon,
  GlobeIcon,
  HelpIcon,
  HospitalIcon,
  MailIcon,
  MoneyIcon,
  SearchIcon,
  ShieldIcon,
  TargetIcon,
  UserIcon,
} from "../components/icons";

type Props = { n: number; presenter: Presenter };

/* ===================== SLIDE 5 — POR QUE É PERIGOSA ===================== */

const damages = [
  { t: "Roubo de segredos", d: "Segredos de empresas e de governos vão parar em outras mãos.", i: <FolderIcon className="h-[18px] w-[18px]" /> },
  { t: "Exposição de projetos", d: "Pesquisas, projetos e dados pessoais podem ser revelados.", i: <FileIcon className="h-[18px] w-[18px]" /> },
  { t: "Prejuízo financeiro", d: "Dinheiro perdido com fraude, multas e consertos.", i: <MoneyIcon className="h-[18px] w-[18px]" /> },
  { t: "Risco para o país", d: "A segurança de um país inteiro pode ficar ameaçada.", i: <ShieldIcon className="h-[18px] w-[18px]" /> },
  { t: "Vantagem injusta", d: "Quem roubou a informação sai na frente.", i: <TargetIcon className="h-[18px] w-[18px]" /> },
];

const areas = [
  { t: "Empresa", d: "Projetos, contratos, fórmulas e planos.", i: <FactoryIcon className="h-6 w-6" /> },
  { t: "Governo", d: "Documentos oficiais e planos de segurança.", i: <BuildingIcon className="h-6 w-6" /> },
  { t: "Pessoa", d: "Fotos, conversas, senhas e dados bancários.", i: <UserIcon className="h-6 w-6" /> },
];

export function Slide05({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="dark"
      number={n}
      presenter={presenter}
      kicker="Danos · por que isso é sério"
      title="Por que esse crime é tão grave?"
      lead="Porque informação também é riqueza: ela vale dinheiro, poder e segurança."
      stamp="Confidencial"
    >
      <div className="grid h-full grid-cols-[1.02fr_.98fr] gap-10 pb-6">
        <div className="flex flex-col justify-center gap-[15px]">
          {damages.map((d, i) => (
            <Bullet key={d.t} tone="dark" d={0.24 + i * 0.09} icon={d.i}>
              <span className="font-semibold text-white">{d.t}:</span> {d.d}
            </Bullet>
          ))}
          <Quote d={0.78} tone="dark" className="mt-1">
            Se uma empresa perde o projeto de um produto novo, outra pode copiar a ideia antes do lançamento.
          </Quote>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <Reveal d={0.4} v="right">
            <p className="stamp-text mb-2 text-[10.5px] text-beam">A mesma pasta, três vítimas diferentes</p>
          </Reveal>
          <div className="overflow-hidden rounded-[14px] border border-silver/25 bg-white/[.05]">
            <div className="flex items-center gap-3 border-b border-silver/20 bg-white/[.06] px-5 py-3">
              <FolderIcon className="h-5 w-5 text-beam" />
              <span className="font-display text-[16px] font-semibold text-white">Pasta confidencial</span>
              <span className="stamp-text ml-auto text-[9.5px] text-silver/60">o que há dentro dela?</span>
            </div>
            <div className="divide-y divide-white/10">
              {areas.map((a, i) => (
                <Reveal key={a.t} d={0.5 + i * 0.12} v="right">
                  <div className="group flex items-center gap-4 px-5 py-[13px] transition-colors duration-300 hover:bg-white/[.07]">
                    <IconBadge tone="dark">{a.i}</IconBadge>
                    <div>
                      <p className="font-display text-[18px] font-bold leading-tight text-white">{a.t}</p>
                      <p className="text-[14.5px] leading-snug text-silver/85">{a.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal d={0.9} v="pop" className="flex items-center justify-between gap-4">
            <Seal text="· INFORMAÇÃO TAMBÉM TEM VALOR · INFORMAÇÃO TAMBÉM TEM VALOR " center={<MoneyIcon />} className="text-beam" size={124} />
            <div className="flex-1 rounded-[12px] border border-beam/35 bg-navy-deep/50 px-5 py-4">
              <p className="font-display text-[19px] font-semibold leading-snug text-white">
                Quem tem a informação tem o poder.
              </p>
              <p className="mt-1 text-[14px] leading-snug text-silver/80">
                Por isso o alvo não é só o dinheiro: é o <Mark tone="steel">conhecimento</Mark> guardado nos arquivos.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}

/* ===================== SLIDE 6 — CASOS ATUAIS ===================== */

const timeline = [
  { y: "2024", d: "Grupos de espionagem digital continuam atacando governos, empresas e instituições no mundo todo." },
  { y: "2025", d: "Campanhas usam e-mails falsos e falhas em programas conhecidos para entrar em sistemas." },
  { y: "2026", d: "Novos ataques são relatados contra organizações de vários países, inclusive no Brasil." },
];

const targets = ["Tecnologia", "Defesa", "Bancos", "Governos", "Pesquisa"];

export function Slide06({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="light"
      number={n}
      presenter={presenter}
      kicker="Casos atuais · notícia, não ficção"
      title="A espionagem cibernética acontece de verdade"
      lead="Não é preciso saber inglês nem entender de código para acompanhar: basta olhar as manchetes."
      stamp="Monitoramento 2024 — 2026"
    >
      <div className="flex h-full flex-col gap-5 pb-4">
        <div className="grid flex-1 grid-cols-[1.15fr_.85fr] gap-9">
          {/* linha do tempo */}
          <div className="relative pl-9">
            <span className="absolute left-[13px] top-2 h-[calc(100%-24px)] w-[2px] bg-silver" />
            <span className="grow-y absolute left-[13px] top-2 h-[calc(100%-24px)] w-[2px] bg-sapphire" />
            <div className="flex h-full flex-col justify-between gap-3">
              {timeline.map((t, i) => (
                <Reveal key={t.y} d={0.24 + i * 0.16} v="left">
                  <div className="group relative">
                    <span className="absolute -left-[33px] top-[16px] flex h-[16px] w-[16px] items-center justify-center">
                      <span className="absolute h-4 w-4 rounded-full border-2 border-sapphire bg-white" />
                      <span className="absolute h-4 w-4 rounded-full border-2 border-beam ring-out" />
                    </span>
                    <div className="hover-lift rounded-[12px] border border-silver/80 bg-white px-5 py-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-[26px] font-bold leading-none text-sapphire">{t.y}</span>
                        <span className="stamp-text text-[9.5px] text-steel">relatos de ataques</span>
                      </div>
                      <p className="mt-1.5 text-[15.5px] leading-snug text-navy/85">{t.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* globo + alvos */}
          <div className="flex flex-col items-center justify-center gap-3">
            <Reveal d={0.4} v="pop" className="relative">
              <GlobeLinks className="h-[212px] w-[212px]" />
              <span className="stamp-text absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9.5px] text-steel">
                mundo conectado
              </span>
            </Reveal>
            <Reveal d={0.66} className="w-full">
              <div className="rounded-[12px] border border-sapphire/20 bg-sapphire/[.05] px-4 py-3">
                <p className="stamp-text mb-2 flex items-center gap-2 text-[10px] text-sapphire">
                  <GlobeIcon className="h-4 w-4" /> alvos mais procurados
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {targets.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-silver bg-white px-3 py-1 text-[13.5px] font-medium text-navy transition-colors duration-300 hover:border-sapphire hover:bg-sapphire hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Quote d={0.85} tone="light">
          Não é apenas coisa de filme: ataques digitais acontecem todos os dias — e quase sempre começam com uma
          mensagem simples.
        </Quote>

        {/* tarja deslizante */}
        <div className="relative overflow-hidden rounded-[8px] bg-navy py-2">
          <div className="ticker-track flex w-max gap-8">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-8">
                {["Confidencial", "Acesso restrito", "Dado protegido", "E-mail verificado", "Sistema monitorado", "Informação tem valor"].map(
                  (s) => (
                    <span key={s} className="stamp-text flex items-center gap-3 text-[10px] text-silver/70">
                      <span className="h-[5px] w-[5px] rounded-full bg-beam" />
                      {s}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ===================== SLIDE 7 — QUEM SÃO OS ALVOS ===================== */

const targetsList = [
  { t: "Governos", d: "Órgãos públicos e serviços do país.", i: <BuildingIcon className="h-[22px] w-[22px]" /> },
  { t: "Tecnologia", d: "Empresas que criam programas e aplicativos.", i: <ChipIcon className="h-[22px] w-[22px]" /> },
  { t: "Bancos", d: "Instituições financeiras e cartões.", i: <BankIcon className="h-[22px] w-[22px]" /> },
  { t: "Universidades", d: "Centros de pesquisa e estudos.", i: <CapIcon className="h-[22px] w-[22px]" /> },
  { t: "Saúde e energia", d: "Hospitais, usinas e serviços essenciais.", i: <HospitalIcon className="h-[22px] w-[22px]" /> },
  { t: "Pessoas", d: "Quem trabalha com dados importantes.", i: <UserIcon className="h-[22px] w-[22px]" /> },
];

function TargetCard({ item, i, side }: { item: (typeof targetsList)[number]; i: number; side: "left" | "right" }) {
  return (
    <Reveal d={0.3 + i * 0.09} v={side === "left" ? "left" : "right"}>
      <div className="group hover-lift flex items-start gap-3.5 rounded-[12px] border border-silver/80 bg-white px-4 py-3">
        <IconBadge className="!h-10 !w-10">{item.i}</IconBadge>
        <div>
          <p className="font-display text-[18.5px] font-bold leading-tight text-navy">{item.t}</p>
          <p className="mt-[3px] text-[14px] leading-snug text-steel">{item.d}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Slide07({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="light"
      number={n}
      presenter={presenter}
      kicker="Alvos · quem corre risco"
      title="Quem pode sofrer espionagem cibernética?"
      lead="Tudo que guarda informação valiosa vira alvo — inclusive você."
      stamp="Acesso restrito"
    >
      <div className="flex h-full flex-col gap-5 pb-6">
        <div className="grid flex-1 grid-cols-[1fr_240px_1fr] items-center gap-4">
          <div className="flex flex-col gap-3">
            {targetsList.slice(0, 3).map((item, i) => (
              <TargetCard key={item.t} item={item} i={i} side="left" />
            ))}
          </div>

          <div className="relative flex h-full items-center justify-center">
            <HubWeb className="absolute h-[272px] w-[272px] text-sapphire" />
            <Reveal d={0.2} v="pop">
              <div className="relative flex h-[154px] w-[154px] flex-col items-center justify-center rounded-full border-2 border-sapphire bg-[radial-gradient(circle_at_35%_30%,#0a3d62,#16324f)] text-white shadow-[0_24px_50px_-24px_rgba(10,61,98,1)]">
                <SearchIcon className="h-7 w-7 text-beam floaty" />
                <p className="font-display mt-1 text-[18px] font-bold leading-none">INFORMAÇÃO</p>
                <p className="stamp-text mt-1.5 text-[9px] text-silver/70">o grande alvo</p>
                <span className="absolute inset-0 rounded-full border border-beam/50 ring-out" />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {targetsList.slice(3).map((item, i) => (
              <TargetCard key={item.t} item={item} i={i + 3} side="right" />
            ))}
          </div>
        </div>

        <Reveal d={0.9}>
          <div className="flex items-center gap-4 rounded-[12px] bg-sapphire px-6 py-4 text-white">
            <HelpIcon className="h-7 w-7 shrink-0 text-beam" />
            <p className="font-display text-[20px] font-medium leading-snug">
              Se alguém tivesse acesso ao seu e-mail, às suas fotos e às suas senhas, o que essa pessoa descobriria
              sobre você?
            </p>
            <span className="stamp-text ml-auto hidden shrink-0 border border-white/30 px-2.5 py-1 text-[9.5px] text-silver md:block">
              pense nisso
            </span>
          </div>
        </Reveal>

        <Callout d={1} tone="light" icon={<MailIcon className="h-[18px] w-[18px]" />} label="Para explicar em uma frase">
          Quanto mais importante é a informação guardada, maior é o interesse do espião — e não importa se o dono é um
          país, uma empresa ou <Mark>uma pessoa comum</Mark>.
        </Callout>
      </div>
    </SlideShell>
  );
}


