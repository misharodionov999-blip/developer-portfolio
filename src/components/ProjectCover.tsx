import type { CoverId } from "../data/content.ts";

const ink = "#1c1916";
const moss = "#24352c";

function FormaCover() {
  const columns = [0, 1, 2, 3];
  const rows = [0, 1, 2, 3, 4, 5];

  return (
    <svg viewBox="0 0 960 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="960" height="720" fill="#e6ddd0" />
      <text
        x="72"
        y="92"
        fill={ink}
        opacity="0.55"
        fontFamily="Manrope, sans-serif"
        fontSize="13"
        letterSpacing="3"
      >
        01
      </text>
      <text x="72" y="158" fill={ink} fontFamily="Fraunces, Georgia, serif" fontSize="68">
        FORMA
      </text>
      <text
        x="72"
        y="190"
        fill={ink}
        opacity="0.62"
        fontFamily="Manrope, sans-serif"
        fontSize="13"
        letterSpacing="2.4"
      >
        КОНЦЕПТ СТУДИИ
      </text>
      <line x1="120" y1="630" x2="900" y2="630" stroke={ink} strokeWidth="1.75" />
      <rect x="170" y="430" width="170" height="200" fill="#f4efe6" stroke={ink} strokeWidth="1.75" />
      <line x1="170" y1="480" x2="340" y2="480" stroke={ink} strokeOpacity="0.35" />
      <line x1="170" y1="530" x2="340" y2="530" stroke={ink} strokeOpacity="0.35" />
      <line x1="170" y1="580" x2="340" y2="580" stroke={ink} strokeOpacity="0.35" />
      <rect x="390" y="268" width="180" height="362" fill={ink} />
      {rows.map((row) =>
        columns.map((column) => (
          <rect
            key={`${row}-${column}`}
            x={414 + column * 40}
            y={300 + row * 52}
            width="12"
            height="24"
            fill="#e6ddd0"
          />
        )),
      )}
      <rect x="620" y="478" width="260" height="152" fill="none" stroke={ink} strokeWidth="1.75" />
      <line x1="620" y1="554" x2="880" y2="554" stroke={ink} strokeOpacity="0.4" />
      <line x1="750" y1="478" x2="750" y2="630" stroke={ink} strokeOpacity="0.28" />
    </svg>
  );
}

function TaskFlowCover() {
  const rows = [
    { width: 300, filled: true },
    { width: 440, filled: true },
    { width: 240, filled: false },
    { width: 380, filled: false },
    { width: 200, filled: false },
  ];

  return (
    <svg viewBox="0 0 960 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="960" height="720" fill="#e3ece6" />
      <text
        x="72"
        y="92"
        fill={ink}
        opacity="0.55"
        fontFamily="Manrope, sans-serif"
        fontSize="13"
        letterSpacing="3"
      >
        02
      </text>
      <text x="72" y="158" fill={ink} fontFamily="Fraunces, Georgia, serif" fontSize="64">
        TaskFlow
      </text>
      <text
        x="72"
        y="190"
        fill={ink}
        opacity="0.62"
        fontFamily="Manrope, sans-serif"
        fontSize="13"
        letterSpacing="2.4"
      >
        ПРОЕКТЫ И ЗАДАЧИ
      </text>
      <line x1="72" y1="248" x2="72" y2="640" stroke={moss} strokeWidth="3" />
      {rows.map((row, index) => {
        const y = 280 + index * 70;
        return (
          <g key={y}>
            <rect
              x="104"
              y={y}
              width="18"
              height="18"
              fill={row.filled ? moss : "none"}
              stroke={ink}
              strokeWidth="1.6"
            />
            <rect x="148" y={y + 5} width={row.width} height="8" fill={ink} />
            <rect x="148" y={y + 24} width={row.width * 0.42} height="6" fill={ink} opacity="0.28" />
          </g>
        );
      })}
    </svg>
  );
}

function ClientFlowCover() {
  const pairs = [
    { y: 310, active: false },
    { y: 450, active: true },
    { y: 590, active: false },
  ];
  const paper = "#f3e7de";

  return (
    <svg viewBox="0 0 960 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="960" height="720" fill="#f0e4da" />
      <text
        x="72"
        y="92"
        fill={ink}
        opacity="0.55"
        fontFamily="Manrope, sans-serif"
        fontSize="13"
        letterSpacing="3"
      >
        03
      </text>
      <text x="72" y="158" fill={ink} fontFamily="Fraunces, Georgia, serif" fontSize="64">
        ClientFlow
      </text>
      <text
        x="72"
        y="190"
        fill={ink}
        opacity="0.62"
        fontFamily="Manrope, sans-serif"
        fontSize="13"
        letterSpacing="2.4"
      >
        КЛИЕНТЫ И СДЕЛКИ
      </text>
      {pairs.map((pair) => (
        <g key={pair.y}>
          <line
            x1="118"
            y1={pair.y}
            x2="196"
            y2={pair.y}
            stroke={ink}
            strokeWidth="1.6"
          />
          <circle
            cx="96"
            cy={pair.y}
            r="22"
            fill={pair.active ? moss : "none"}
            stroke={ink}
            strokeWidth="1.7"
          />
          <rect
            x="196"
            y={pair.y - 34}
            width="668"
            height="68"
            fill={pair.active ? moss : "none"}
            stroke={ink}
            strokeWidth="1.7"
          />
          <rect
            x="224"
            y={pair.y - 12}
            width="210"
            height="8"
            fill={pair.active ? paper : ink}
          />
          <rect
            x="224"
            y={pair.y + 8}
            width="112"
            height="8"
            fill={pair.active ? paper : ink}
            opacity={pair.active ? 0.72 : 0.32}
          />
        </g>
      ))}
    </svg>
  );
}

const covers = {
  forma: FormaCover,
  taskflow: TaskFlowCover,
  clientflow: ClientFlowCover,
};

export function ProjectCover({ cover }: { cover: CoverId }) {
  const Cover = covers[cover];
  return <Cover />;
}
