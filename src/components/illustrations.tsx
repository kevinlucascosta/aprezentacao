/* Ilustrações em SVG usadas para explicar o assunto (não são decorativas:
   cada uma representa visualmente uma ideia do slide). */

export function EyeNetwork({ className }: { className?: string }) {
  const nodes = [
    { x: 62, y: 132 },
    { x: 418, y: 118 },
    { x: 44, y: 320 },
    { x: 436, y: 330 },
    { x: 240, y: 44 },
    { x: 240, y: 438 },
  ];
  return (
    <svg viewBox="0 0 480 480" className={className} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="iris" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#8fc4e8" />
          <stop offset="60%" stopColor="#4f9fd4" />
          <stop offset="100%" stopColor="#0a3d62" />
        </radialGradient>
        <linearGradient id="lens" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c7cdd3" stopOpacity=".22" />
          <stop offset="100%" stopColor="#4f9fd4" stopOpacity=".08" />
        </linearGradient>
      </defs>

      {/* anéis externos */}
      <circle cx="240" cy="240" r="216" stroke="#c7cdd3" strokeOpacity=".16" />
      <circle
        cx="240"
        cy="240"
        r="196"
        stroke="#4f9fd4"
        strokeOpacity=".45"
        strokeDasharray="3 12"
        className="spin-slow"
      />
      <circle cx="240" cy="240" r="152" stroke="#c7cdd3" strokeOpacity=".22" strokeDasharray="18 10" />
      <g stroke="#8fc4e8" strokeOpacity=".5" strokeWidth="2">
        <path d="M240 12v22M240 446v22M12 240h22M446 240h22" />
      </g>

      {/* rede de computadores ligada ao olho */}
      <g stroke="#4f9fd4" strokeOpacity=".55" strokeWidth="1.3">
        {nodes.map((n, i) => (
          <path key={i} className="flow-dash" d={`M${n.x} ${n.y} L240 240`} />
        ))}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="13" stroke="#c7cdd3" strokeOpacity=".55" />
          <circle cx={n.x} cy={n.y} r="5" fill="#8fc4e8" className="pulse-soft" style={{ animationDelay: `${i * 0.4}s` }} />
          {i % 2 === 0 && (
            <circle cx={n.x} cy={n.y} r="13" stroke="#4f9fd4" className="ring-out" style={{ animationDelay: `${i * 0.6}s` }} />
          )}
        </g>
      ))}

      {/* olho digital */}
      <g>
        <path
          d="M96 240c40-62 92-92 144-92s104 30 144 92c-40 62-92 92-144 92s-104-30-144-92Z"
          fill="url(#lens)"
          stroke="#c7cdd3"
          strokeOpacity=".75"
          strokeWidth="2"
        />
        <circle cx="240" cy="240" r="62" stroke="#8fc4e8" strokeOpacity=".7" strokeWidth="1.4" />
        <circle cx="240" cy="240" r="46" fill="url(#iris)" opacity=".92" />
        <circle cx="240" cy="240" r="46" stroke="#0e2136" strokeOpacity=".5" />
        <circle cx="240" cy="240" r="18" fill="#0e2136" />
        <circle cx="225" cy="224" r="7" fill="#eaf4fb" opacity=".85" />
        <circle cx="240" cy="240" r="70" stroke="#4f9fd4" className="ring-out" />
        <circle cx="240" cy="240" r="70" stroke="#8fc4e8" className="ring-out" style={{ animationDelay: "1.6s" }} />
        {/* varredura */}
        <g stroke="#8fc4e8" strokeOpacity=".6" strokeWidth="1.2">
          <path className="draw" style={{ ["--len" as string]: "200", ["--d" as string]: ".6s" }} d="M150 208h180" />
          <path className="draw" style={{ ["--len" as string]: "220", ["--d" as string]: ".9s" }} d="M138 272h204" />
        </g>
      </g>
    </svg>
  );
}

export function FolderWatched({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 330" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="beam" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4f9fd4" stopOpacity=".42" />
          <stop offset="100%" stopColor="#4f9fd4" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* olho observando */}
      <g transform="translate(200 52)">
        <circle r="34" stroke="#0a3d62" strokeOpacity=".25" strokeDasharray="4 8" className="spin-slow" />
        <path d="M-52 0C-30-26-14-34 0-34s30 8 52 34c-22 26-38 34-52 34S-30 26-52 0Z" fill="#fff" stroke="#0a3d62" strokeWidth="2.4" />
        <circle r="17" fill="#0a3d62" />
        <circle r="7" fill="#4f9fd4" />
        <circle cx="-6" cy="-6" r="3.4" fill="#fff" opacity=".9" />
      </g>
      {/* feixe de observação */}
      <path d="M200 62 118 246h164L200 62Z" fill="url(#beam)" className="pulse-soft" />

      {/* pasta confidencial */}
      <g transform="translate(200 232)">
        <path d="M-118-46h72l14 16h110a10 10 0 0 1 10 10v66a10 10 0 0 1-10 10h-196a10 10 0 0 1-10-10v-82a10 10 0 0 1 10-10Z" fill="#e7ebef" stroke="#6f7882" strokeWidth="2.2" />
        <g stroke="#c7cdd3" strokeWidth="2">
          <path d="M-96-58h56M-96-70h36" />
        </g>
        <rect x="-96" y="-64" width="70" height="10" fill="#fff" stroke="#c7cdd3" strokeWidth="1.6" />
        <path d="M-118-22h196v68a10 10 0 0 1-10 10h-176a10 10 0 0 1-10-10v-68Z" fill="#0a3d62" />
        <path d="M-118-22h196" stroke="#4f9fd4" strokeWidth="2.4" />
        <g transform="rotate(-8)" className="floaty">
          <rect x="-58" y="-2" width="116" height="26" fill="none" stroke="#c7cdd3" strokeWidth="1.8" strokeDasharray="5 4" />
          <text x="0" y="16" textAnchor="middle" fontSize="13" letterSpacing="3.4" fill="#c7cdd3" fontFamily="IBM Plex Mono, monospace">
            CONFIDENCIAL
          </text>
        </g>
      </g>

      {/* lupa */}
      <g transform="translate(326 250)" stroke="#16324f" strokeWidth="2.6" strokeLinecap="round">
        <circle r="20" fill="#fff" />
        <path d="m14 14 14 14" />
        <path d="M-8-4a9 9 0 0 1 8-8" stroke="#4f9fd4" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function GlobeLinks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" className={className} fill="none" aria-hidden="true">
      <circle cx="160" cy="160" r="126" stroke="#c7cdd3" strokeOpacity=".85" strokeWidth="1.6" />
      <circle cx="160" cy="160" r="126" fill="#0a3d62" fillOpacity=".05" />
      <g stroke="#6f7882" strokeOpacity=".45" strokeWidth="1.2">
        <ellipse cx="160" cy="160" rx="126" ry="46" />
        <ellipse cx="160" cy="160" rx="126" ry="92" />
        <ellipse cx="160" cy="160" rx="46" ry="126" />
        <ellipse cx="160" cy="160" rx="92" ry="126" />
        <path d="M34 160h252M160 34v252" />
      </g>
      <circle cx="160" cy="160" r="140" stroke="#0a3d62" strokeOpacity=".3" strokeDasharray="3 11" className="spin-slow" />
      <g stroke="#0a3d62" strokeWidth="2">
        <path className="flow-dash" d="M74 118q86-70 172 8" />
        <path className="flow-dash" d="M96 214q70 60 138-16" style={{ animationDelay: ".4s" }} />
        <path className="flow-dash" d="M120 82q40 96 106 132" style={{ animationDelay: ".8s" }} />
      </g>
      {[
        { x: 74, y: 118 },
        { x: 246, y: 126 },
        { x: 96, y: 214 },
        { x: 234, y: 198 },
        { x: 160, y: 74 },
        { x: 176, y: 250 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="5.4" fill="#0a3d62" />
          <circle cx={p.x} cy={p.y} r="11" stroke="#4f9fd4" strokeWidth="1.6" className="ring-out" style={{ animationDelay: `${i * 0.5}s` }} />
        </g>
      ))}
    </svg>
  );
}

export function ShieldBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 230" className={className} fill="none" aria-hidden="true">
      <path
        d="M100 10 22 40v72c0 52 33 92 78 108 45-16 78-56 78-108V40L100 10Z"
        fill="#0a3d62"
        fillOpacity=".08"
        stroke="#0a3d62"
        strokeWidth="3"
      />
      <path d="M100 22v196" stroke="#4f9fd4" strokeWidth="1.6" strokeDasharray="6 7" />
      <path
        d="M100 26 34 51v61c0 22 6 42 17 58 8-40 26-84 49-144Z"
        fill="#c7cdd3"
        fillOpacity=".22"
      />
      <g transform="translate(100 104)">
        <rect x="-24" y="-6" width="48" height="40" rx="7" fill="#0a3d62" />
        <path d="M-14-6v-12a14 14 0 0 1 28 0v12" stroke="#0a3d62" strokeWidth="6" />
        <circle cy="13" r="5.4" fill="#4f9fd4" />
        <path d="M0 17v9" stroke="#4f9fd4" strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="115" r="74" stroke="#4f9fd4" strokeOpacity=".45" className="ring-out" />
    </svg>
  );
}

export function FadingNet({ className }: { className?: string }) {
  const pts = [
    [40, 60],
    [130, 30],
    [220, 84],
    [310, 40],
    [86, 140],
    [190, 168],
    [280, 150],
    [360, 110],
    [40, 210],
    [150, 236],
    [250, 224],
    [340, 200],
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [2, 6],
    [4, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [5, 9],
    [6, 10],
    [1, 5],
  ];
  return (
    <svg viewBox="0 0 400 270" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="fadeNet" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fc4e8" stopOpacity=".05" />
          <stop offset="45%" stopColor="#8fc4e8" stopOpacity=".55" />
          <stop offset="100%" stopColor="#8fc4e8" stopOpacity=".05" />
        </linearGradient>
      </defs>
      <g stroke="url(#fadeNet)" strokeWidth="1.4">
        {edges.map(([a, b], i) => (
          <path key={i} className="flow-dash" style={{ animationDelay: `${i * 0.15}s` }} d={`M${pts[a][0]} ${pts[a][1]} L${pts[b][0]} ${pts[b][1]}`} />
        ))}
      </g>
      <g fill="#c7cdd3">
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4.4 : 2.8} opacity={i % 2 ? 0.5 : 0.85} className="pulse-soft" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </g>
    </svg>
  );
}

export function HubWeb({ className }: { className?: string }) {
  /* seis linhas saindo do centro — usadas atrás dos cartões de alvos */
  const angles = [-90, -30, 30, 90, 150, 210];
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden="true">
      <circle cx="200" cy="200" r="150" stroke="#0a3d62" strokeOpacity=".16" strokeDasharray="4 10" className="spin-slow" />
      <circle cx="200" cy="200" r="96" stroke="#0a3d62" strokeOpacity=".14" />
      <g stroke="#4f9fd4" strokeOpacity=".5" strokeWidth="1.6">
        {angles.map((a, i) => {
          const rad = (a * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 150;
          const y = 200 + Math.sin(rad) * 150;
          return <path key={i} className="flow-dash" style={{ animationDelay: `${i * 0.2}s` }} d={`M200 200 L${x} ${y}`} />;
        })}
      </g>
    </svg>
  );
}
