import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES, TOTAL_BUDGET } from "./slides/registry";
import { cx } from "./components/decor";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  ExpandIcon,
  EyeIcon,
  GridIcon,
  NotesIcon,
  PauseIcon,
  PlayIcon,
  ResetIcon,
} from "./components/icons";

const STAGE_W = 1280;
const STAGE_H = 720;

function fmt(total: number) {
  const sign = total < 0 ? "−" : "";
  const s = Math.abs(Math.floor(total));
  return `${sign}${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [showNotes, setShowNotes] = useState(true);
  const [showOverview, setShowOverview] = useState(false);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [slideElapsed, setSlideElapsed] = useState(0);
  const [scale, setScale] = useState(0.5);
  const [hint, setHint] = useState(true);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const touchX = useRef<number | null>(null);
  const slide = SLIDES[index];
  const Current = slide.Component;
  const remaining = TOTAL_BUDGET - elapsed;

  /* --------- escala do palco 16:9 --------- */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.max(0.18, Math.min(width / STAGE_W, height / STAGE_H)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [showNotes, showOverview]);

  /* --------- navegação --------- */
  const go = useCallback((next: number) => {
    setHint(false);
    setIndex((prev) => {
      const target = Math.min(SLIDES.length - 1, Math.max(0, next));
      setDir(target >= prev ? 1 : -1);
      return target;
    });
    setSlideElapsed(0);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setHint(false), 8000);
    return () => window.clearTimeout(id);
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  /* --------- cronômetro --------- */
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setElapsed((e) => e + 1);
      setSlideElapsed((e) => e + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  /* --------- teclado --------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "escape") {
        setShowOverview(false);
        return;
      }
      if (["arrowright", " ", "pagedown"].includes(k) || e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (["arrowleft", "pageup"].includes(k) || e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (k === "home") {
        go(0);
      } else if (k === "end") {
        go(SLIDES.length - 1);
      } else if (k === "n") {
        setShowNotes((v) => !v);
      } else if (k === "o") {
        setShowOverview((v) => !v);
      } else if (k === "p") {
        setRunning((v) => !v);
      } else if (k === "f") {
        toggleFullscreen();
      } else if (/^[1-9]$/.test(k)) {
        go(Number(k) - 1);
      } else if (k === "0") {
        go(9);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.();
  };

  /* --------- toque --------- */
  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const budgetTone = remaining <= 0 ? "text-[#e07a5f]" : remaining <= 120 ? "text-[#e0a24a]" : "text-beam";
  const slideOver = slideElapsed > slide.seconds;

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#081522] font-sans text-silver">
      {/* fundo do app */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_18%_0%,#12314c_0%,#0a1c2c_46%,#060f19_100%)]" />
        <div
          className="absolute inset-0 opacity-[.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(199,205,211,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,205,211,.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,rgba(6,15,25,.95),transparent)]" />
      </div>

      {/* ---------------- HUD superior ---------------- */}
      <header className="relative z-30 flex h-[58px] shrink-0 items-center gap-3 border-b border-white/10 bg-[#081522]/80 px-3 backdrop-blur-md sm:gap-5 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-beam/40 bg-navy text-beam">
            <EyeIcon className="h-5 w-5" />
            <span className="absolute inset-0 rounded-[9px] border border-beam/40 ring-out" />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="font-display truncate text-[15px] font-bold tracking-tight text-white">
              Espionagem Cibernética
            </p>
            <p className="stamp-text hidden truncate text-[9px] text-silver/55 sm:block">
              Seminário · crimes cibernéticos · set 2026
            </p>
          </div>
        </div>

        {/* progresso segmentado */}
        <div className="flex min-w-0 flex-1 items-center gap-[3px] px-1">
          {SLIDES.map((s, i) => (
            <button
              key={s.n}
              onClick={() => go(i)}
              title={`${String(s.n).padStart(2, "0")} · ${s.title} — ${s.presenter.name}`}
              className="group relative h-6 flex-1 cursor-pointer"
              aria-label={`Ir para o slide ${s.n}`}
            >
              <span
                className={cx(
                  "absolute inset-x-0 top-1/2 block h-[5px] -translate-y-1/2 rounded-full transition-all duration-500 group-hover:h-[9px]",
                  i < index && "bg-sapphire-soft/80",
                  i === index && "bg-beam shadow-[0_0_14px_rgba(79,159,212,.8)]",
                  i > index && "bg-white/12 group-hover:bg-white/25",
                )}
              />
              <span className="stamp-text absolute -bottom-[1px] left-1/2 hidden -translate-x-1/2 text-[8px] text-silver/40 lg:block">
                {s.n}
              </span>
            </button>
          ))}
        </div>

        {/* cronômetro */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 rounded-[9px] border border-white/10 bg-white/[.04] px-3 py-1.5 md:flex">
            <ClockIcon className={cx("h-4 w-4", budgetTone)} />
            <span className={cx("font-mono text-[15px] font-semibold tabular-nums", budgetTone)}>{fmt(remaining)}</span>
            <span className="stamp-text text-[9px] text-silver/45">restam</span>
          </div>
          <HudButton onClick={() => setRunning((v) => !v)} label={running ? "Pausar cronômetro (P)" : "Iniciar cronômetro (P)"}>
            {running ? <PauseIcon className="h-[18px] w-[18px]" /> : <PlayIcon className="h-[18px] w-[18px]" />}
          </HudButton>
          <HudButton
            onClick={() => {
              setElapsed(0);
              setSlideElapsed(0);
              setRunning(false);
            }}
            label="Zerar cronômetro"
          >
            <ResetIcon className="h-[18px] w-[18px]" />
          </HudButton>
          <HudButton onClick={() => setShowNotes((v) => !v)} active={showNotes} label="Notas do apresentador (N)">
            <NotesIcon className="h-[18px] w-[18px]" />
          </HudButton>
          <HudButton onClick={() => setShowOverview(true)} label="Visão geral dos slides (O)">
            <GridIcon className="h-[18px] w-[18px]" />
          </HudButton>
          <HudButton onClick={toggleFullscreen} label="Tela cheia (F)">
            <ExpandIcon className="h-[18px] w-[18px]" />
          </HudButton>
        </div>
      </header>

      {/* ---------------- palco ---------------- */}
      <main
        ref={stageRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-2 py-2 sm:px-5 sm:py-4"
      >
        {hint && (
          <div className="rv pointer-events-none absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/12 bg-[#0a1c2c]/90 px-4 py-2 shadow-[0_20px_50px_-25px_rgba(0,0,0,1)] backdrop-blur-md">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-beam pulse-soft" />
            <span className="stamp-text text-[9.5px] text-silver/75">
              ← → navegar · N notas · O visão geral · P cronômetro · F tela cheia
            </span>
          </div>
        )}
        <div className="relative" style={{ width: STAGE_W * scale, height: STAGE_H * scale }}>
          <div
            className="absolute left-1/2 top-1/2"
            style={{ width: STAGE_W, height: STAGE_H, transform: `translate(-50%,-50%) scale(${scale})` }}
          >
            <div
              key={index}
              className={cx(
                "absolute inset-0 overflow-hidden rounded-[10px] border border-white/12 bg-white shadow-[0_50px_120px_-40px_rgba(0,0,0,.9)]",
                dir === 1 ? "stage-next" : "stage-prev",
              )}
            >
              <Current n={slide.n} presenter={slide.presenter} />
            </div>
          </div>
        </div>
      </main>

      {/* ---------------- notas ---------------- */}
      {showNotes && (
        <section className="relative z-20 flex h-[212px] shrink-0 flex-col border-t border-white/10 bg-[#0a1c2c]/92 backdrop-blur-md">
          <div className="flex shrink-0 items-center gap-3 border-b border-white/8 px-4 py-2">
            <span className="stamp-text rounded-[5px] bg-beam/15 px-2 py-[3px] text-[9.5px] text-beam">
              Notas do apresentador
            </span>
            <span className="flex items-center gap-2 text-[12.5px] text-silver">
              <span className="h-[7px] w-[7px] rounded-full" style={{ background: slide.presenter.color }} />
              <span className="font-semibold text-white">{slide.presenter.name}</span>
              <span className="text-silver/45">· slide {String(slide.n).padStart(2, "0")}</span>
            </span>
            <span className="stamp-text hidden text-[9.5px] text-silver/45 sm:block">
              tempo alvo {fmt(slide.seconds)} · decorrido {fmt(slideElapsed)}
            </span>
            <p className="ml-auto hidden max-w-[46%] truncate font-display text-[13px] font-medium text-silver/80 md:block">
              Ideia principal: {slide.idea}
            </p>
            <button
              onClick={() => setShowNotes(false)}
              className="stamp-text cursor-pointer rounded-[5px] border border-white/12 px-2 py-[3px] text-[9px] text-silver/60 transition-colors hover:border-beam/60 hover:text-beam"
            >
              fechar (N)
            </button>
          </div>
          <div key={index} className="scroll-thin rv flex-1 overflow-y-auto px-5 py-3">
            <ol className="space-y-2">
              {slide.notes.map((note, i) => (
                <li key={i} className="flex gap-3 text-[14.5px] leading-[1.55] text-silver/90">
                  <span className="stamp-text mt-[3px] shrink-0 text-[9.5px] text-beam/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ---------------- HUD inferior ---------------- */}
      <footer className="relative z-30 flex h-[58px] shrink-0 items-center gap-3 border-t border-white/10 bg-[#081522]/85 px-3 backdrop-blur-md sm:px-5">
        <div className="flex shrink-0 items-center gap-1.5">
          <NavButton onClick={prev} disabled={index === 0} label="Slide anterior">
            <ChevronLeftIcon className="h-[18px] w-[18px]" />
          </NavButton>
          <NavButton onClick={next} disabled={index === SLIDES.length - 1} label="Próximo slide">
            <ChevronRightIcon className="h-[18px] w-[18px]" />
          </NavButton>
        </div>

        <div className="flex min-w-0 items-baseline gap-3">
          <span className="font-mono text-[19px] font-semibold tabular-nums text-white">
            {String(slide.n).padStart(2, "0")}
            <span className="text-silver/35">/10</span>
          </span>
          <div className="min-w-0 leading-tight">
            <p className="font-display truncate text-[14.5px] font-semibold text-white">{slide.short}</p>
            <p className="truncate text-[11.5px] text-silver/55">{slide.title}</p>
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            <span className="stamp-text text-[9px] text-silver/40">tempo do slide</span>
            <span className="relative block h-[6px] w-28 overflow-hidden rounded-full bg-white/10">
              <span
                className={cx("absolute inset-y-0 left-0 rounded-full transition-all duration-500", slideOver ? "bg-[#e0a24a]" : "bg-beam")}
                style={{ width: `${Math.min(100, (slideElapsed / slide.seconds) * 100)}%` }}
              />
            </span>
            <span className={cx("font-mono text-[12px] tabular-nums", slideOver ? "text-[#e0a24a]" : "text-silver/70")}>
              {fmt(slideElapsed)} / {fmt(slide.seconds)}
            </span>
          </div>

          <span
            className="flex items-center gap-2 rounded-[8px] border px-2.5 py-1.5 text-[12px]"
            style={{ borderColor: `${slide.presenter.color}55`, background: `${slide.presenter.color}14` }}
          >
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: slide.presenter.color }} />
            <span className="font-medium text-white">{slide.presenter.name}</span>
          </span>

          <span className="stamp-text hidden text-[9px] leading-relaxed text-silver/35 xl:block">
            ← → navegar · N notas · O visão geral · F tela cheia · P cronômetro
          </span>
        </div>
      </footer>

      {/* ---------------- visão geral ---------------- */}
      {showOverview && (
        <div className="absolute inset-0 z-50 flex flex-col bg-[#060f19]/96 backdrop-blur-md">
          <div className="flex shrink-0 items-center gap-4 border-b border-white/10 px-6 py-4">
            <div>
              <p className="stamp-text text-[10px] text-beam">Visão geral · 10 slides · até 15 minutos</p>
              <h2 className="font-display text-[26px] font-bold tracking-tight text-white">Roteiro da apresentação</h2>
            </div>
            <button
              onClick={() => setShowOverview(false)}
              className="stamp-text ml-auto cursor-pointer rounded-[8px] border border-white/15 px-3 py-2 text-[10px] text-silver transition-colors hover:border-beam hover:text-beam"
            >
              fechar (Esc)
            </button>
          </div>
          <div className="scroll-thin flex-1 overflow-y-auto px-6 py-5">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.n}
                  onClick={() => {
                    go(i);
                    setShowOverview(false);
                  }}
                  className={cx(
                    "group cursor-pointer overflow-hidden rounded-[12px] border p-4 text-left transition-all duration-300 hover:-translate-y-1",
                    i === index
                      ? "border-beam/70 bg-beam/[.09]"
                      : "border-white/10 bg-white/[.03] hover:border-beam/45 hover:bg-white/[.06]",
                  )}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[13px] font-semibold tabular-nums text-silver/50">
                      {String(s.n).padStart(2, "0")}
                    </span>
                    <span className="stamp-text rounded-[4px] border border-white/12 px-1.5 py-[2px] text-[8.5px] text-silver/50">
                      {fmt(s.seconds)}
                    </span>
                  </div>
                  <div
                    className={cx(
                      "mb-3 h-[54px] w-full rounded-[7px] border",
                      s.n === 1 || s.n === 5 || s.n === 10 ? "border-beam/25 bg-[linear-gradient(135deg,#0e2136,#0a3d62)]" : "border-sapphire/20 bg-[linear-gradient(135deg,#ffffff,#eef1f4)]",
                    )}
                  >
                    <div className="flex h-full items-end gap-1 p-2">
                      {[38, 62, 46, 74, 30].map((h, k) => (
                        <span
                          key={k}
                          className={cx(
                            "w-2 rounded-[2px] transition-all duration-500 group-hover:opacity-100",
                            s.n === 1 || s.n === 5 || s.n === 10 ? "bg-beam/60" : "bg-sapphire/35",
                          )}
                          style={{ height: `${h}%`, opacity: i === index ? 1 : 0.65 }}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-display text-[14.5px] font-bold leading-tight text-white">{s.short}</p>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-silver/60">{s.idea}</p>
                  <p className="mt-2.5 flex items-center gap-1.5 text-[11px] text-silver/70">
                    <span className="h-[6px] w-[6px] rounded-full" style={{ background: s.presenter.color }} />
                    {s.presenter.name}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { name: "Carlos Henrique", slides: "Slides 1 a 4", time: "≈ 4 min 50 s", c: SLIDES[0].presenter.color },
                { name: "João Caia", slides: "Slides 5 a 7", time: "≈ 4 min", c: SLIDES[4].presenter.color },
                { name: "Kevin", slides: "Slides 8 a 10", time: "≈ 4 min 10 s", c: SLIDES[7].presenter.color },
              ].map((p) => (
                <div key={p.name} className="rounded-[12px] border border-white/10 bg-white/[.03] px-4 py-3">
                  <p className="flex items-center gap-2 font-display text-[16px] font-bold text-white">
                    <span className="h-[8px] w-[8px] rounded-full" style={{ background: p.c }} />
                    {p.name}
                  </p>
                  <p className="mt-1 text-[12.5px] text-silver/60">
                    {p.slides} · {p.time}
                  </p>
                </div>
              ))}
            </div>
            <p className="stamp-text mt-5 text-center text-[9.5px] text-silver/35">
              + ≈ 2 min reservados para transições e perguntas · total da apresentação: até 15 minutos
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function HudButton({
  children,
  onClick,
  active,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className={cx(
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9px] border transition-all duration-300 hover:-translate-y-[1px]",
        active
          ? "border-beam/70 bg-beam/15 text-beam"
          : "border-white/12 bg-white/[.04] text-silver/70 hover:border-beam/50 hover:text-beam",
      )}
    >
      {children}
    </button>
  );
}

function NavButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className={cx(
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9px] border transition-all duration-300",
        disabled
          ? "cursor-not-allowed border-white/8 bg-white/[.02] text-silver/20"
          : "border-white/14 bg-white/[.05] text-white hover:-translate-y-[1px] hover:border-beam/60 hover:text-beam",
      )}
    >
      {children}
    </button>
  );
}
