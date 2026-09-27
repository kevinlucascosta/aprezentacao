import type { CSSProperties, ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export type Presenter = { name: string; color: string; initials: string };

/* ------------------------------------------------------------------ */
/* Ambient backgrounds                                                 */
/* ------------------------------------------------------------------ */

const gridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(10,61,98,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,61,98,.07) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

const darkGridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(199,205,211,.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,205,211,.09) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
};

export function Circuit({ className, color = "#0A3D62" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path className="draw" style={{ ["--len" as string]: "520", ["--d" as string]: ".2s" }} d="M0 40h90l30 30h120l24-24h136" />
        <path className="draw" style={{ ["--len" as string]: "520", ["--d" as string]: ".45s" }} d="M0 96h54l26 26h86l28-28h64l26 26h116" />
        <path className="draw" style={{ ["--len" as string]: "420", ["--d" as string]: ".7s" }} d="M40 300V214l34-34h96l30 30h200" />
        <path className="draw" style={{ ["--len" as string]: "360", ["--d" as string]: ".9s" }} d="M120 300v-52l28-28h150l22 22h80" />
      </g>
      <g fill={color}>
        <circle cx="120" cy="70" r="3.4" />
        <circle cx="264" cy="46" r="3.4" />
        <circle cx="166" cy="122" r="3.4" />
        <circle cx="74" cy="180" r="3.4" />
        <circle cx="298" cy="244" r="3.4" />
      </g>
    </svg>
  );
}

export function DarkBG() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0e2136_0%,#16324f_46%,#0a3d62_100%)]" />
      <div className="grid-drift absolute inset-0 opacity-70" style={darkGridStyle} />
      <div className="absolute -right-40 -top-52 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(79,159,212,.34),transparent_66%)] pulse-soft" />
      <div className="absolute -bottom-56 -left-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(10,61,98,.9),transparent_70%)]" />
      <Circuit className="absolute -bottom-6 left-0 h-[300px] w-[420px] opacity-[.28]" color="#8fc4e8" />
      <Circuit className="absolute -top-4 right-0 h-[240px] w-[360px] rotate-180 opacity-[.2]" color="#C7CDD3" />
      <div
        className="spin-slow absolute right-[8%] top-[-18%] h-[560px] w-[560px] rounded-full opacity-25"
        style={{ background: "conic-gradient(from 0deg, rgba(79,159,212,.55), transparent 28%)" }}
      />
      <div className="scanline absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(143,196,232,.12),transparent)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(9,22,36,.75)]" />
    </div>
  );
}

export function LightBG() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#ffffff_0%,#f7f9fa_52%,#eef1f4_100%)]" />
      <div className="grid-drift absolute inset-0 opacity-60" style={gridStyle} />
      <div className="absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(10,61,98,.13),transparent_68%)] pulse-soft" />
      <div className="absolute -bottom-40 left-[-80px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(79,159,212,.16),transparent_70%)]" />
      <Circuit className="absolute -bottom-4 left-2 h-[240px] w-[360px] opacity-[.16]" />
      <Circuit className="absolute right-0 top-0 h-[190px] w-[300px] -rotate-6 opacity-[.12]" />
      <div className="absolute left-0 top-0 h-full w-[7px] bg-[linear-gradient(to_bottom,#0A3D62,#4f9fd4)]" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

export function Reveal({
  d = 0,
  v = "up",
  className,
  children,
  style,
}: {
  d?: number;
  v?: "up" | "left" | "right" | "pop";
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cx("rv", v === "left" && "rv-l", v === "right" && "rv-r", v === "pop" && "rv-p", className)}
      style={{ ["--d" as string]: `${d}s`, ...style }}
    >
      {children}
    </div>
  );
}

export function Tarja({
  children,
  tone = "solid",
  className,
}: {
  children: ReactNode;
  tone?: "solid" | "outline" | "light" | "alert";
  className?: string;
}) {
  const tones: Record<string, string> = {
    solid: "bg-navy text-white border-navy",
    outline: "bg-transparent text-sapphire border-sapphire/50",
    light: "bg-white/10 text-silver border-silver/40 backdrop-blur-[2px]",
    alert: "bg-sapphire text-white border-sapphire",
  };
  return (
    <span
      className={cx(
        "stamp-text inline-flex items-center gap-2 border px-3 py-[6px] text-[11px] font-medium",
        tones[tone],
        className,
      )}
    >
      <span className="h-[6px] w-[6px] shrink-0 rounded-[1px] bg-current pulse-soft" />
      {children}
    </span>
  );
}

export function Mark({ children, tone = "sapphire" }: { children: ReactNode; tone?: "sapphire" | "steel" }) {
  return (
    <strong
      className={cx(
        "relative z-[1] font-semibold whitespace-nowrap",
        tone === "sapphire" ? "text-sapphire" : "text-steel",
      )}
    >
      <span className="relative z-[2]">{children}</span>
      <span
        className={cx(
          "absolute inset-x-[-3px] bottom-[1px] z-[1] h-[9px] -skew-x-6",
          tone === "sapphire" ? "bg-beam/30" : "bg-silver/60",
        )}
      />
    </strong>
  );
}

export function IconBadge({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border transition-colors duration-300",
        tone === "light"
          ? "border-sapphire/20 bg-sapphire/[.07] text-sapphire group-hover:border-sapphire/45 group-hover:bg-sapphire/[.13]"
          : "border-silver/25 bg-white/10 text-beam group-hover:border-beam/60 group-hover:bg-white/[.16]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Bullet({
  icon,
  children,
  d = 0,
  tone = "light",
}: {
  icon: ReactNode;
  children: ReactNode;
  d?: number;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal d={d} v="left">
      <div className="group flex items-start gap-3.5">
        <IconBadge tone={tone} className="!h-9 !w-9 !rounded-[9px] [&>svg]:h-[18px] [&>svg]:w-[18px]">
          {icon}
        </IconBadge>
        <p
          className={cx(
            "pt-[5px] text-[19px] leading-[1.45]",
            tone === "light" ? "text-navy/85" : "text-silver",
          )}
        >
          {children}
        </p>
      </div>
    </Reveal>
  );
}

export function Callout({
  icon,
  label,
  children,
  tone = "light",
  className,
  d = 0,
}: {
  icon?: ReactNode;
  label?: string;
  children: ReactNode;
  tone?: "light" | "dark" | "solid";
  className?: string;
  d?: number;
}) {
  const tones: Record<string, string> = {
    light: "border-sapphire/25 bg-white text-navy shadow-[0_18px_40px_-32px_rgba(10,61,98,.9)]",
    dark: "border-silver/25 bg-white/[.06] text-silver backdrop-blur-[2px]",
    solid: "border-sapphire bg-sapphire text-white shadow-[0_22px_44px_-24px_rgba(10,61,98,.95)]",
  };
  return (
    <Reveal d={d} className={className}>
      <div className={cx("relative overflow-hidden border-l-4 rounded-r-[10px] px-5 py-4", tones[tone])}>
        {(label || icon) && (
          <div className="mb-1.5 flex items-center gap-2">
            {icon ? <span className="[&>svg]:h-[18px] [&>svg]:w-[18px]">{icon}</span> : null}
            {label ? <span className="stamp-text text-[11px] opacity-75">{label}</span> : null}
          </div>
        )}
        <div className="text-[17px] leading-[1.5]">{children}</div>
      </div>
    </Reveal>
  );
}

export function Quote({
  children,
  d = 0,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  d?: number;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal d={d} className={className}>
      <div
        className={cx(
          "relative rounded-[12px] border px-6 py-4 pl-8",
          tone === "dark"
            ? "border-silver/25 bg-navy-deep/45 text-white"
            : "border-sapphire/25 bg-white text-navy shadow-[0_18px_40px_-34px_rgba(10,61,98,1)]",
        )}
      >
        <span
          className={cx(
            "absolute left-0 top-0 h-full w-[4px] rounded-l-[12px]",
            tone === "dark" ? "bg-beam" : "bg-sapphire",
          )}
        />
        <p className="font-display text-[20px] font-medium leading-[1.4]">{children}</p>
      </div>
    </Reveal>
  );
}

/* rotating confidential seal */
export function Seal({
  text,
  center,
  className,
  size = 132,
}: {
  text: string;
  center: ReactNode;
  className?: string;
  size?: number;
}) {
  const id = `seal-${text.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={cx("relative shrink-0", className)} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="spin-seal absolute inset-0 h-full w-full">
        <defs>
          <path id={id} d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="1" />
        <circle cx="60" cy="60" r="37" fill="none" stroke="currentColor" strokeOpacity=".55" strokeWidth="1" strokeDasharray="3 5" />
        <text className="stamp-text" fontSize="9.4" fill="currentColor">
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-current [&>svg]:h-9 [&>svg]:w-9">{center}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Slide shell                                                         */
/* ------------------------------------------------------------------ */

export function SlideShell({
  tone = "light",
  kicker,
  title,
  lead,
  number,
  presenter,
  children,
  stamp,
}: {
  tone?: "light" | "dark";
  kicker?: string;
  title?: string;
  lead?: string;
  number: number;
  presenter: Presenter;
  children: ReactNode;
  stamp?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cx("relative h-full w-full overflow-hidden font-sans", dark ? "text-white" : "text-navy")}>
      {dark ? <DarkBG /> : <LightBG />}

      <div className="relative z-10 flex h-full flex-col">
        {title ? (
          <header className="flex items-end justify-between gap-8 px-12 pt-9">
            <div className="max-w-[820px]">
              {kicker ? (
                <Reveal d={0.02}>
                  <div className={cx("stamp-text mb-2.5 flex items-center gap-2.5 text-[11px]", dark ? "text-beam" : "text-sapphire")}>
                    <span className={cx("h-[2px] w-8", dark ? "bg-beam" : "bg-sapphire")} />
                    {kicker}
                  </div>
                </Reveal>
              ) : null}
              <Reveal d={0.08}>
                <h2
                  className={cx(
                    "font-display text-[38px] font-bold leading-[1.07] tracking-[-.02em]",
                    dark ? "text-white" : "text-navy",
                  )}
                >
                  {title}
                </h2>
              </Reveal>
              {lead ? (
                <Reveal d={0.16}>
                  <p className={cx("mt-2 max-w-[860px] text-[16.5px] leading-snug", dark ? "text-silver" : "text-steel")}>{lead}</p>
                </Reveal>
              ) : null}
            </div>
            {stamp ? (
              <Reveal d={0.2} v="right">
                <Tarja tone={dark ? "light" : "outline"}>{stamp}</Tarja>
              </Reveal>
            ) : null}
          </header>
        ) : null}

        <div className={cx("min-h-0 flex-1 px-12", title ? "pt-6" : "pt-0")}>{children}</div>

        <footer
          className={cx(
            "stamp-text flex h-12 shrink-0 items-center justify-between border-t px-12 text-[10.5px]",
            dark ? "border-white/12 text-silver/70" : "border-sapphire/15 text-steel",
          )}
        >
          <span>Seminário · Crimes Cibernéticos</span>
          <span className="flex items-center gap-2">
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: presenter.color }} />
            {presenter.name}
          </span>
          <span className={cx("tabular-nums", dark ? "text-beam" : "text-sapphire")}>
            {String(number).padStart(2, "0")} / 10
          </span>
        </footer>
      </div>
    </div>
  );
}
