import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const VIEWBOX_WIDTH = 320;
const VIEWBOX_HEIGHT = 120;
const TOP_PADDING = 16;
const BOTTOM_PADDING = 28;

const buildChartGeometry = (timeline) => {
    const baseline = VIEWBOX_HEIGHT - BOTTOM_PADDING;
    const chartHeight = baseline - TOP_PADDING;
    const gridLines = [
        { y: baseline, dashed: false },
        { y: baseline - chartHeight / 2, dashed: true },
        { y: TOP_PADDING, dashed: true },
    ];

    if (!Array.isArray(timeline) || timeline.length < 2) {
        return {
            linePath: "",
            areaPath: "",
            baseline,
            gridLines,
            points: [],
        };
    }

    const values = timeline.map((point) => point.value);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue || 1;

    const points = timeline.map((point, index) => {
        const x = (index / (timeline.length - 1)) * VIEWBOX_WIDTH;
        const normalized = (point.value - minValue) / range;
        const y = TOP_PADDING + (1 - normalized) * chartHeight;
        return { x, y };
    });

    let linePath = `M ${points[0].x} ${points[0].y}`;
    let areaPath = `M ${points[0].x} ${baseline} L ${points[0].x} ${points[0].y}`;

    for (let index = 0; index < points.length - 1; index += 1) {
        const current = points[index];
        const next = points[index + 1];
        const segmentWidth = next.x - current.x;
        const controlOffset = segmentWidth / 2.2;
        const controlOneX = current.x + controlOffset;
        const controlTwoX = next.x - controlOffset;
        const segment = ` C ${controlOneX} ${current.y}, ${controlTwoX} ${next.y}, ${next.x} ${next.y}`;
        linePath += segment;
        areaPath += segment;
    }

    areaPath += ` L ${points[points.length - 1].x} ${baseline} Z`;

    return {
        linePath,
        areaPath,
        baseline,
        gridLines,
        points,
    };
};

const ChartVisual = ({ summary, timeline }) => {
    const isTrendingUp = summary.changeDirection === "up";
    const changeColor = isTrendingUp ? "text-success" : "text-danger";
    const DirectionIcon = isTrendingUp ? ArrowUpRight : ArrowDownRight;
    const geometry = buildChartGeometry(timeline);
    const gradientId = `chartGradient-${summary.pair
        .replace(/[^a-z0-9]/gi, "")
        .toLowerCase()}`;

    return (
        <section className="flex flex-col gap-6 rounded-2xl bg-surface-alt p-6 shadow-card lg:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-muted">
                        {summary.pair}
                    </p>
                    <div className="mt-3 flex items-end gap-4">
                        <span className="text-3xl font-semibold text-white lg:text-4xl">
                            {summary.price}
                        </span>
                        <span
                            className={`flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold ${changeColor}`}
                        >
                            <DirectionIcon aria-hidden className="h-4 w-4" />
                            {summary.changeLabel}
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-muted sm:text-sm">
                    <div className="flex flex-col gap-1">
                        <span className="text-white/70">24H High</span>
                        <span className="font-medium text-white">
                            {summary.high}
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-white/70">24H Low</span>
                        <span className="font-medium text-white">
                            {summary.low}
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-white/70">Volume</span>
                        <span className="font-medium text-white">
                            {summary.volume}
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-white/70">Market Cap</span>
                        <span className="font-medium text-white">
                            {summary.marketCap}
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"
                    aria-hidden="true"
                />
                <svg
                    viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
                    className="relative h-56 w-full"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id={gradientId}
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                            gradientUnits="objectBoundingBox"
                        >
                            <stop
                                offset="0%"
                                stopColor="rgba(99,102,241,0.35)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(99,102,241,0)"
                            />
                        </linearGradient>
                    </defs>
                    {geometry.areaPath ? (
                        <path
                            d={geometry.areaPath}
                            fill={`url(#${gradientId})`}
                            opacity="0.55"
                        />
                    ) : null}
                    {geometry.linePath ? (
                        <path
                            d={geometry.linePath}
                            stroke="#6366F1"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />
                    ) : null}
                    <g stroke="rgba(148,163,184,0.35)" strokeWidth="1">
                        {geometry.gridLines.map((line) => (
                            <line
                                key={line.y}
                                x1="0"
                                x2={VIEWBOX_WIDTH}
                                y1={line.y}
                                y2={line.y}
                                strokeDasharray={
                                    line.dashed ? "4 4" : undefined
                                }
                            />
                        ))}
                    </g>
                    {timeline.map((point, index) => {
                        const coordinate = geometry.points[index];
                        const xPosition = coordinate
                            ? coordinate.x
                            : (index / Math.max(timeline.length - 1, 1)) *
                              VIEWBOX_WIDTH;
                        const anchor =
                            index === 0
                                ? "start"
                                : index === timeline.length - 1
                                ? "end"
                                : "middle";

                        return (
                            <text
                                key={point.label}
                                x={xPosition}
                                y={geometry.baseline + 12}
                                textAnchor={anchor}
                                className="fill-muted text-[10px]"
                            >
                                {point.label}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </section>
    );
};

export default ChartVisual;
