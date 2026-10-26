type RouteDiagramProps = {
  caption?: string;
  tone?: "light" | "dark";
};

const stations = [
  [188, 96],
  [268, 168],
  [348, 248],
  [428, 136],
  [492, 136],
  [268, 288],
  [428, 312],
] as const;

export function RouteDiagram({ caption, tone = "light" }: RouteDiagramProps) {
  const label =
    caption ??
    "Abstract route from a supply facility through retail locations";
  const dark = tone === "dark";
  const grid = dark ? "#2a333c" : "#d3d8de";
  const route = "#e85d04";
  const paper = dark ? "#eef1f4" : "#eef1f4";
  const ink = "#12171c";

  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 540 400"
        role="img"
        aria-label={label}
        className="h-auto w-full"
      >
        <g stroke={grid} strokeWidth="1">
          {Array.from({ length: 13 }, (_, index) => (
            <line
              key={`v-${index}`}
              x1={20 + index * 42}
              y1="16"
              x2={20 + index * 42}
              y2="384"
            />
          ))}
          {Array.from({ length: 9 }, (_, index) => (
            <line
              key={`h-${index}`}
              x1="16"
              y1={20 + index * 44}
              x2="524"
              y2={20 + index * 44}
            />
          ))}
        </g>
        <path
          d="M128 196 H188 V96 H268 V168 H348 V248 H428 V136 H492"
          fill="none"
          stroke={route}
          strokeWidth="2.5"
          strokeLinejoin="miter"
        />
        <path
          d="M268 168 V288"
          fill="none"
          stroke={route}
          strokeWidth="1.75"
          strokeDasharray="5 5"
        />
        <path
          d="M348 248 H428 V312"
          fill="none"
          stroke={route}
          strokeWidth="1.75"
          strokeDasharray="5 5"
        />
        <rect x="36" y="164" width="92" height="64" fill={dark ? route : ink} />
        <text
          x="82"
          y="200"
          textAnchor="middle"
          fill={dark ? ink : paper}
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1.2"
        >
          FACILITY
        </text>
        {stations.map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <rect
              x={cx - 7}
              y={cy - 7}
              width="14"
              height="14"
              fill={dark ? "#101418" : paper}
              stroke={route}
              strokeWidth="1.75"
            />
            <rect x={cx - 2.5} y={cy - 2.5} width="5" height="5" fill={route} />
          </g>
        ))}
      </svg>
      {caption ? (
        <figcaption
          className={`mt-4 max-w-sm font-mono text-xs leading-relaxed ${
            dark ? "text-paper/70" : "text-muted"
          }`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
