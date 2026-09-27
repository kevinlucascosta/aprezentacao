import type { Presenter } from "../components/decor";
import { Bullet, Callout, IconBadge, DarkBG, Mark, Quote, Reveal, SlideShell, Tarja } from "../components/decor";
import { EyeNetwork, FolderWatched } from "../components/illustrations";
import {
  AlertIcon,
  ArrowRightIcon,
  BulbIcon,
  ClockIcon,
  EyeScanIcon,
  FileIcon,
  FolderIcon,
  LaptopIcon,
  LockIcon,
  MailIcon,
  RadarIcon,
  SearchIcon,
  TargetIcon,
  UserIcon,
} from "../components/icons";

type Props = { n: number; presenter: Presenter };

/* ============================ SLIDE 1 — CAPA ============================ */

const team = [
  { name: "Carlos Henrique", role: "Abre o tema e explica o conceito", i: "CH" },
  { name: "João Caia", role: "Perigos, casos reais e alvos", i: "JC" },
  { name: "Kevin", role: "Caso real, proteção e conclusão", i: "K" },
];

export function Slide01({ n, presenter }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden font-sans text-white">
      <DarkBG />
      <div className="relative z-10 flex h-full flex-col">
        <div className="grid flex-1 grid-cols-[1.06fr_.94fr] items-center gap-6 px-16 pt-8">
          {/* coluna do texto */}
          <div>
            <Reveal d={0.05}>
              <div className="flex items-center gap-3">
                <Tarja tone="light">Acesso restrito</Tarja>
                <span className="stamp-text text-[10.5px] text-silver/60">Dossiê nº 01 · investigação digital</span>
              </div>
            </Reveal>

            <h1 className="mt-7 font-display font-bold leading-[.92] tracking-[-.035em]">
              <Reveal d={0.14}>
                <span className="block text-[78px] text-white">Espionagem</span>
              </Reveal>
              <Reveal d={0.24}>
                <span className="block text-[78px] text-beam">
                  Cibernética<span className="caret ml-2 inline-block h-[52px] w-[6px] translate-y-[2px] bg-silver/70" />
                </span>
              </Reveal>
            </h1>

            <Reveal d={0.36}>
              <div className="mt-6 flex items-start gap-4">
                <span className="mt-2 h-[2px] w-14 shrink-0 bg-beam" />
                <p className="max-w-[440px] text-[22px] leading-snug text-silver">
                  O roubo <span className="font-semibold text-white">silencioso</span> de informações no mundo digital.
                </p>
              </div>
            </Reveal>

            <Reveal d={0.46}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-silver/80">
                <span className="stamp-text border border-silver/25 px-2.5 py-1 text-[10.5px]">
                  Seminário sobre Crimes Cibernéticos
                </span>
                <span className="stamp-text text-[10.5px] text-beam">Setembro · 2026</span>
              </div>
            </Reveal>

            <Reveal d={0.56}>
              <div className="mt-8">
                <p className="stamp-text mb-3 text-[10px] text-silver/55">Quem apresenta</p>
                <div className="flex flex-wrap gap-2.5">
                  {team.map((p) => (
                    <div
                      key={p.name}
                      className="group flex items-center gap-3 rounded-[10px] border border-silver/20 bg-white/[.05] px-3.5 py-2.5 transition-colors duration-300 hover:border-beam/60 hover:bg-white/[.1]"
                    >
                      <span className="stamp-text flex h-8 w-8 items-center justify-center rounded-full border border-beam/50 bg-navy-deep text-[11px] text-beam">
                        {p.i}
                      </span>
                      <span className="leading-tight">
                        <span className="block text-[14.5px] font-semibold text-white">{p.name}</span>
                        <span className="block text-[11.5px] text-silver/70">{p.role}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* coluna da ilustração */}
          <Reveal d={0.3} v="pop" className="relative flex flex-col items-center">
            <EyeNetwork className="h-[430px] w-[430px] drop-shadow-[0_20px_60px_rgba(79,159,212,.35)]" />
            <p className="stamp-text mt-1 text-center text-[10px] leading-relaxed text-silver/55">
              Fig. 1 — um “olho digital” observando
              <br />
              uma rede de computadores
            </p>
          </Reveal>
        </div>

        <footer className="stamp-text flex h-12 shrink-0 items-center justify-between border-t border-white/12 px-16 text-[10.5px] text-silver/60">
          <span>Espionagem Cibernética · o roubo silencioso de informações</span>
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

/* ===================== SLIDE 2 — O QUE É ===================== */

export function Slide02({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="light"
      number={n}
      presenter={presenter}
      kicker="Conceito · a ideia principal em palavras simples"
      title="O que significa espionagem cibernética?"
      lead="Pense em uma só ideia: alguém entra escondido no computador para olhar e copiar o que é importante."
      stamp="Dado protegido"
    >
      <div className="grid h-full grid-cols-[1.08fr_.92fr] gap-10 pb-8">
        <div className="flex flex-col justify-center gap-[18px]">
          <Bullet d={0.24} icon={<EyeScanIcon className="h-[18px] w-[18px]" />}>
            É o roubo <Mark>secreto</Mark> de <Mark>informações</Mark> pela internet ou por computadores.
          </Bullet>
          <Bullet d={0.32} icon={<LockIcon className="h-[18px] w-[18px]" />}>
            O invasor entra em sistemas <Mark>sem autorização</Mark>.
          </Bullet>
          <Bullet d={0.4} icon={<FolderIcon className="h-[18px] w-[18px]" />}>
            Ele procura dados importantes: documentos, mensagens e senhas.
          </Bullet>
          <Bullet d={0.48} icon={<TargetIcon className="h-[18px] w-[18px]" />}>
            O objetivo é levar vantagem política, militar ou econômica.
          </Bullet>

          <Callout d={0.6} tone="light" icon={<BulbIcon className="h-[18px] w-[18px]" />} label="Exemplo do dia a dia">
            É como alguém entrar escondido em uma sala, copiar documentos secretos e sair sem ninguém perceber — só que
            isso acontece dentro do computador.
          </Callout>

          <Reveal d={0.7}>
            <div className="flex items-start gap-3 rounded-[10px] border border-dashed border-steel/40 bg-mist/70 px-4 py-3">
              <span className="stamp-text mt-[3px] text-[10px] text-steel">Palavra difícil?</span>
              <p className="text-[15px] leading-snug text-steel">
                <span className="font-semibold text-navy">Sistema</span> é só o nome para computador, celular, rede ou
                programa que guarda informações.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <Reveal d={0.3} v="right">
            <FolderWatched className="h-[300px] w-[380px]" />
          </Reveal>
          <Reveal d={0.55} v="pop" className="w-full">
            <div className="relative overflow-hidden rounded-[12px] bg-sapphire px-6 py-5 text-white shadow-[0_26px_50px_-28px_rgba(10,61,98,1)]">
              <span className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-beam/25 blur-xl" />
              <p className="stamp-text mb-1.5 text-[10px] text-beam">Resumo do slide</p>
              <p className="font-display text-[26px] font-bold leading-tight">
                Roubar informações sem ser percebido.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}

/* ===================== SLIDE 3 — COMO ACONTECE ===================== */

const steps = [
  { t: "Escolhem o alvo", d: "Uma pessoa, empresa ou governo.", i: <UserIcon className="h-[20px] w-[20px]" /> },
  { t: "Procuram a brecha", d: "Uma falha de segurança ou alguém fácil de enganar.", i: <SearchIcon className="h-[20px] w-[20px]" /> },
  { t: "Enviam a isca", d: "E-mail falso ou programa malicioso (que faz mal ao computador).", i: <MailIcon className="h-[20px] w-[20px]" /> },
  { t: "Entram e procuram", d: "Vasculham arquivos e mensagens.", i: <LaptopIcon className="h-[20px] w-[20px]" /> },
  { t: "Copiam e somem", d: "Enviam os dados para outro lugar, em silêncio.", i: <FileIcon className="h-[20px] w-[20px]" /> },
];

export function Slide03({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="light"
      number={n}
      presenter={presenter}
      kicker="Passo a passo · como o crime acontece"
      title="Como os invasores conseguem entrar?"
      lead="São cinco etapas. Nenhuma delas precisa de força: quase sempre usa engano e distração."
      stamp="Cuidado com links suspeitos"
    >
      <div className="flex h-full flex-col justify-center gap-6 pb-6">
        <div className="flex items-stretch gap-1">
          {steps.map((s, i) => (
            <Reveal key={s.t} d={0.2 + i * 0.11} className="flex flex-1 items-stretch">
              <div className="group hover-lift relative flex w-full flex-col rounded-[12px] border border-silver/80 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <IconBadge>{s.i}</IconBadge>
                  <span className="font-display text-[30px] font-bold leading-none text-silver">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-display text-[17px] font-bold leading-tight text-navy">{s.t}</p>
                <p className="mt-1.5 text-[13.5px] leading-snug text-steel">{s.d}</p>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-sapphire transition-all duration-500 group-hover:w-full" />
              </div>
              {i < steps.length - 1 && (
                <span className="flex w-6 shrink-0 items-center justify-center text-sapphire/45">
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-[1.05fr_.95fr] gap-5">
          <Reveal d={0.8}>
            <div className="flex h-full items-start gap-4 rounded-[12px] border-2 border-sapphire/25 bg-sapphire/[.05] px-5 py-4">
              <IconBadge className="!h-12 !w-12 !bg-sapphire !text-white [&>svg]:h-6 [&>svg]:w-6">
                <MailIcon />
              </IconBadge>
              <div>
                <p className="stamp-text mb-1 text-[10.5px] text-sapphire">Palavra nova · phishing (fí-xing)</p>
                <p className="text-[17px] leading-snug text-navy">
                  É uma <Mark>mensagem falsa</Mark> criada para enganar a vítima e fazer com que ela clique em algo
                  perigoso.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            <Quote d={0.9} tone="light">
              Você recebe um e-mail “do seu banco” pedindo para atualizar a senha. Você clicaria?
            </Quote>
            <Reveal d={1}>
              <div className="flex items-center gap-3 rounded-[10px] bg-navy px-4 py-3 text-white">
                <AlertIcon className="h-5 w-5 shrink-0 text-beam" />
                <p className="text-[15px] leading-snug text-silver">
                  Ao clicar, a pessoa pode <span className="font-semibold text-white">entregar os próprios dados</span>{" "}
                  ao criminoso — sem perceber nada de estranho.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ===================== SLIDE 4 — CARACTERÍSTICAS ===================== */

const traits = [
  { t: "Silenciosa", d: "O ataque tenta passar despercebido: não estraga nada, só observa.", i: <EyeScanIcon className="h-6 w-6" />, big: true },
  { t: "Planejada", d: "O alvo é escolhido com cuidado, depois de muita pesquisa.", i: <TargetIcon className="h-[22px] w-[22px]" /> },
  { t: "Persistente", d: "O invasor pode ficar escondido por meses, voltando sempre.", i: <ClockIcon className="h-[22px] w-[22px]" /> },
  { t: "Direcionada", d: "Busca informações específicas, não qualquer coisa.", i: <RadarIcon className="h-[22px] w-[22px]" /> },
  { t: "Digital", d: "Acontece em computadores, celulares, redes e programas.", i: <LaptopIcon className="h-[22px] w-[22px]" /> },
];

export function Slide04({ n, presenter }: Props) {
  return (
    <SlideShell
      tone="light"
      number={n}
      presenter={presenter}
      kicker="Características · o que esse crime tem de diferente"
      title="Por que a espionagem digital não parece um ataque comum?"
      lead="Um roubo comum faz barulho. Este aqui tenta não deixar nenhuma marca."
    >
      <div className="flex h-full flex-col gap-5 pb-7">
        <div className="grid flex-1 grid-cols-6 gap-4">
          {traits.map((t, i) =>
            t.big ? (
              <Reveal key={t.t} d={0.22} v="pop" className="col-span-2 row-span-2">
                <div className="group hover-lift relative flex h-full flex-col justify-between overflow-hidden rounded-[14px] bg-[linear-gradient(150deg,#0a3d62,#16324f)] p-5 text-white">
                  <span className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-beam/20 blur-2xl transition-transform duration-700 group-hover:scale-125" />
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-[11px] border border-beam/40 bg-white/10 text-beam">
                      {t.i}
                    </span>
                    <span className="stamp-text text-[10px] text-silver/60">marca nº 1</span>
                  </div>
                  <div className="relative">
                    <p className="font-display text-[30px] font-bold leading-none">{t.t}</p>
                    <p className="mt-2 text-[15px] leading-snug text-silver">{t.d}</p>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal key={t.t} d={0.22 + i * 0.09} v="pop" className="col-span-2">
                <div className="group hover-lift relative flex h-full flex-col justify-between overflow-hidden rounded-[14px] border border-silver/80 bg-white p-4">
                  <div className="flex items-start justify-between">
                    <IconBadge>{t.i}</IconBadge>
                    <span className="stamp-text text-[9px] text-silver">marca nº {i + 1}</span>
                  </div>
                  <div>
                    <p className="font-display text-[21px] font-bold leading-tight text-navy">{t.t}</p>
                    <p className="mt-1 text-[14.5px] leading-snug text-steel">{t.d}</p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-sapphire transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ),
          )}
        </div>

        <Reveal d={0.75}>
          <div className="flex items-center gap-4 rounded-[12px] border-l-4 border-beam bg-navy px-6 py-4 text-white">
            <AlertIcon className="h-6 w-6 shrink-0 text-beam" />
            <p className="font-display text-[21px] font-medium leading-snug">
              Muitas vezes, a vítima só descobre o ataque depois que os dados já foram copiados.
            </p>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
