import type { Presenter } from "../components/decor";
import { Bullet, Callout, DarkBG, IconBadge, Mark, Quote, Reveal, SlideShell, Tarja } from "../components/decor";
import { FadingNet, ShieldBadge } from "../components/illustrations";
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  ChipIcon,
  FactoryIcon,
  FileIcon,
  FolderIcon,
  KeyIcon,
  LaptopIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  RefreshIcon,
  SearchIcon,
  ServerIcon,
  ShieldIcon,
  UsersIcon,
} from "../components/icons";

type Props = { n: number; presenter: Presenter };

/* ===================== SLIDE 8 — ESTUDO DE CASO ===================== */

const chain = [
  { t: "Empresa de software", d: "Cria um programa usado por muita gente.", i: <FactoryIcon className="h-[22px] w-[22px]" /> },
  { t: "Atualização adulterada", d: "O pacote de atualização é invadido e modificado.", i: <RefreshIcon className="h-[22px] w-[22px]" /> },
  { t: "Clientes instalam", d: "Empresas e órgãos públicos confiam e atualizam.", i: <LaptopIcon className="h-[22px] w-[22px]" /> },
  { t: "Dados em risco", d: "O invasor entra junto, sem alarme nenhum.", i: <FolderIcon className="h-[22px] w-[22px]" /> },
];

export function Slide08({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="light"
      number={n}
      presenter={presenter}
      kicker="Estudo de caso · aconteceu de verdade"
      title="Caso real: o ataque à SolarWinds (2020)"
      lead="A porta de entrada foi algo que todo mundo faz sem pensar: aceitar uma atualização."
      stamp="Arquivo de caso"
    >
      <div className="flex h-full flex-col gap-4 pb-4">
        {/* cadeia do ataque */}
        <Reveal d={0.2}>
          <p className="stamp-text mb-2 text-[10px] text-steel">Como o ataque se espalhou — leia da esquerda para a direita</p>
        </Reveal>
        <div className="flex items-stretch">
          {chain.map((c, i) => (
            <Reveal key={c.t} d={0.26 + i * 0.12} v="pop" className="flex flex-1 items-stretch">
              <div className="group hover-lift relative flex w-full flex-col rounded-[12px] border border-silver/80 bg-white p-4">
                <span className="stamp-text absolute right-3 top-3 text-[9px] text-silver">etapa {i + 1}</span>
                <IconBadge className="!h-11 !w-11">{c.i}</IconBadge>
                <p className="mt-3 font-display text-[17px] font-bold leading-tight text-navy">{c.t}</p>
                <p className="mt-1 text-[13.5px] leading-snug text-steel">{c.d}</p>
                <span className="mt-3 h-[2px] w-full bg-mist">
                  <span className="block h-full w-0 bg-beam transition-all duration-700 group-hover:w-full" />
                </span>
              </div>
              {i < chain.length - 1 && (
                <span className="flex w-7 shrink-0 items-center justify-center text-sapphire/45">
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-[1fr_1fr] gap-6">
          <div className="flex flex-col justify-center gap-[13px]">
            <Bullet d={0.7} icon={<RefreshIcon className="h-[18px] w-[18px]" />}>
              Em 2020, criminosos <Mark>comprometeram</Mark> (mexeram em) as atualizações de um programa usado por muitas
              organizações.
            </Bullet>
            <Bullet d={0.78} icon={<CheckIcon className="h-[18px] w-[18px]" />}>
              As vítimas instalaram uma atualização que parecia <Mark>normal e confiável</Mark>.
            </Bullet>
            <Bullet d={0.86} icon={<SearchIcon className="h-[18px] w-[18px]" />}>
              Assim, os invasores conseguiram ler sistemas e informações importantes.
            </Bullet>
            <Bullet d={0.94} icon={<ChipIcon className="h-[18px] w-[18px]" />}>
              A lição: até um programa conhecido pode ser usado como caminho de ataque.
            </Bullet>
          </div>

          <div className="flex flex-col justify-center gap-3.5">
            <Quote d={1} tone="light">
              Uma empresa pode ser atacada por meio de um fornecedor — ou de um programa — em que ela confia.
            </Quote>
            <Reveal d={1.08}>
              <div className="flex items-start gap-3 rounded-[10px] border border-dashed border-steel/40 bg-mist/70 px-4 py-3">
                <span className="stamp-text mt-[3px] text-[10px] text-steel">Palavra difícil?</span>
                <p className="text-[15px] leading-snug text-steel">
                  <span className="font-semibold text-navy">Fornecedor</span> é quem vende ou mantém um serviço para
                  outra empresa — como quem faz o programa de atualização.
                </p>
              </div>
            </Reveal>
            <Reveal d={1.16}>
              <div className="flex items-center gap-3 rounded-[10px] bg-navy px-4 py-3 text-white">
                <AlertIcon className="h-5 w-5 shrink-0 text-beam" />
                <p className="stamp-text text-[11px] text-silver">Cuidado com a cadeia de fornecedores</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ===================== SLIDE 9 — COMO SE PROTEGER ===================== */

const forPeople = [
  { t: "Senhas fortes e diferentes", d: "Nada de usar a mesma senha em tudo.", i: <KeyIcon className="h-[19px] w-[19px]" /> },
  { t: "Confirmação em duas etapas", d: "Senha + um código extra no celular.", i: <PhoneIcon className="h-[19px] w-[19px]" /> },
  { t: "Desconfiar de links e anexos", d: "Se veio de repente, pergunte antes de clicar.", i: <MailIcon className="h-[19px] w-[19px]" /> },
  { t: "Atualizar celular e computador", d: "As atualizações fecham portas abertas.", i: <RefreshIcon className="h-[19px] w-[19px]" /> },
];

const forCompanies = [
  { t: "Treinar funcionários", d: "Pessoas bem informadas são a primeira defesa.", i: <UsersIcon className="h-[19px] w-[19px]" /> },
  { t: "Proteger redes e arquivos", d: "Separar o que é comum do que é sigiloso.", i: <LockIcon className="h-[19px] w-[19px]" /> },
  { t: "Atualizar sistemas sempre", d: "Programa velho é porta conhecida.", i: <ServerIcon className="h-[19px] w-[19px]" /> },
  { t: "Monitorar acessos suspeitos", d: "Ficar de olho em quem entra e sai.", i: <ShieldIcon className="h-[19px] w-[19px]" /> },
  { t: "Fazer cópias de segurança", d: "Ter uma cópia dos dados guardada em outro lugar.", i: <FileIcon className="h-[19px] w-[19px]" /> },
];

function Checklist({ items, i0, side }: { items: { t: string; d: string; i: React.ReactNode }[]; i0: number; side: "l" | "r" }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((it, i) => (
        <Reveal key={it.t} d={i0 + i * 0.08} v={side === "l" ? "left" : "right"}>
          <div className="group flex items-center gap-3 rounded-[11px] border border-silver/80 bg-white px-4 py-[9px] transition-all duration-300 hover:translate-x-[3px] hover:border-sapphire/45 hover:shadow-[0_14px_30px_-24px_rgba(10,61,98,1)]">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sapphire/[.08] text-sapphire transition-colors duration-300 group-hover:bg-sapphire group-hover:text-white">
              {it.i}
            </span>
            <span className="min-w-0">
              <span className="block text-[15.5px] font-semibold leading-tight text-navy">{it.t}</span>
              <span className="block text-[12.5px] leading-snug text-steel">{it.d}</span>
            </span>
            <CheckIcon className="ml-auto h-[18px] w-[18px] shrink-0 text-silver transition-colors duration-300 group-hover:text-sapphire" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Slide09({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="light"
      number={n}
      presenter={presenter}
      kicker="Proteção · o que cada um pode fazer"
      title="Como reduzir o risco de espionagem digital?"
      lead="Nenhuma trava é perfeita. Mas cada cuidado a mais deixa o invasor com menos chance."
      stamp="Dado protegido"
    >
      <div className="flex h-full flex-col gap-4 pb-6">
        <div className="grid flex-1 grid-cols-[1fr_132px_1fr] items-stretch gap-4">
          <div className="flex flex-col">
            <Reveal d={0.2}>
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="stamp-text rounded-[6px] bg-sapphire px-2.5 py-1 text-[10px] text-white">
                  Para qualquer pessoa
                </span>
                <span className="h-[1px] flex-1 bg-silver" />
              </div>
            </Reveal>
            <Checklist items={forPeople} i0={0.28} side="l" />
          </div>

          <div className="relative flex items-center justify-center">
            <Reveal d={0.34} v="pop" className="flex flex-col items-center">
              <ShieldBadge className="floaty h-[152px] w-[128px]" />
              <p className="stamp-text mt-2 text-center text-[9px] leading-relaxed text-steel">
                pessoas
                <span className="mx-1 text-beam">·</span>
                empresas
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col">
            <Reveal d={0.2}>
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="h-[1px] flex-1 bg-silver" />
                <span className="stamp-text rounded-[6px] bg-navy px-2.5 py-1 text-[10px] text-white">Para empresas</span>
              </div>
            </Reveal>
            <Checklist items={forCompanies} i0={0.28} side="r" />
          </div>
        </div>

        <div className="grid grid-cols-[1.15fr_.85fr] gap-4">
          <Callout d={0.85} tone="light" icon={<PhoneIcon className="h-[18px] w-[18px]" />} label="Palavra difícil?">
            <span className="font-semibold text-navy">Autenticação em duas etapas</span> significa que, além da senha, a
            conta pede uma segunda confirmação — como um código enviado ao celular.
          </Callout>
          <Reveal d={0.95}>
            <div className="flex h-full items-center gap-3 rounded-[10px] bg-sapphire px-5 py-3.5 text-white">
              <AlertIcon className="h-6 w-6 shrink-0 text-beam" />
              <p className="font-display text-[17.5px] font-semibold leading-snug">
                Pensar antes de clicar é uma forma de proteção.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}

/* ===================== SLIDE 10 — CONCLUSÃO ===================== */

const summary = [
  "Espionagem cibernética é o roubo secreto de informações digitais.",
  "Pode atingir pessoas, empresas e governos.",
  "Os ataques tentam ficar escondidos o maior tempo possível.",
  "A prevenção depende de atenção, conhecimento e segurança digital.",
  "Pequenos cuidados evitam grandes problemas.",
];

export function Slide10({ n, presenter }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden font-sans text-white">
      <DarkBG />
      <FadingNet className="absolute bottom-14 left-1/2 h-[240px] w-[900px] -translate-x-1/2 opacity-45" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="grid flex-1 grid-cols-[1.1fr_.9fr] gap-10 px-16 pt-11">
          <div className="flex flex-col">
            <Reveal d={0.05}>
              <Tarja tone="light">Informação protegida</Tarja>
            </Reveal>
            <Reveal d={0.12}>
              <h2 className="mt-4 font-display text-[52px] font-bold leading-none tracking-[-.03em]">Conclusão</h2>
            </Reveal>
            <Reveal d={0.2}>
              <p className="mt-2 max-w-[430px] text-[17px] leading-snug text-silver">
                Cinco ideias para levar embora — explicadas como se fosse uma conversa.
              </p>
            </Reveal>

            <div className="mt-5 flex flex-col gap-[9px]">
              {summary.map((s, i) => (
                <Reveal key={s} d={0.3 + i * 0.09} v="left">
                  <div className="group flex items-center gap-3 rounded-[9px] border border-white/10 bg-white/[.05] px-4 py-[8px] transition-colors duration-300 hover:border-beam/50 hover:bg-white/[.09]">
                    <span className="stamp-text flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-beam/20 text-[10px] text-beam">
                      {i + 1}
                    </span>
                    <p className="text-[15.5px] leading-snug text-silver group-hover:text-white">{s}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Quote d={0.85} tone="dark" className="mt-4">
              No mundo digital, proteger informações é tão importante quanto trancar uma porta.
            </Quote>
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <Reveal d={0.4} v="pop">
              <div className="relative rounded-[16px] border border-silver/25 bg-paper px-8 py-6 text-navy shadow-[0_30px_70px_-30px_rgba(0,0,0,.8)]">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="stamp-text bg-sapphire px-3 py-1 text-[9.5px] text-white">Dossiê encerrado</span>
                </span>
                <ShieldBadge className="mx-auto h-[190px] w-[170px]" />
                <p className="mt-2 text-center font-display text-[19px] font-bold text-sapphire">
                  Informação protegida
                </p>
                <p className="mt-1 text-center text-[14px] leading-snug text-steel">
                  Escudo + cadeado: o recado final é simples — <Mark>quem cuida, dificulta</Mark>.
                </p>
              </div>
            </Reveal>

            <Reveal d={0.7} className="w-full">
              <div className="rounded-[14px] border border-beam/35 bg-navy-deep/60 px-6 py-5 text-center backdrop-blur-[2px]">
                <p className="font-display text-[28px] font-bold leading-tight text-white">Obrigado pela atenção!</p>
                <p className="mt-1.5 text-[19px] text-beam">
                  Perguntas?<span className="caret ml-1 inline-block h-[18px] w-[3px] translate-y-[2px] bg-beam" />
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  {["Carlos Henrique", "João Caia", "Kevin"].map((p, i) => (
                    <span
                      key={p}
                      className="stamp-text border border-silver/25 px-2.5 py-1 text-[9.5px] text-silver/80"
                      style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="stamp-text flex h-12 shrink-0 items-center justify-between border-t border-white/12 px-16 text-[10.5px] text-silver/60">
          <span>Espionagem Cibernética · seminário de crimes cibernéticos</span>
          <span className="flex items-center gap-2">
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: presenter.color }} />
            {presenter.name}
          </span>
          <span className="text-beam tabular-nums">{String(n).padStart(2, "0")} / 10</span>
        </footer>
      </div>
    </div>
  );
}
