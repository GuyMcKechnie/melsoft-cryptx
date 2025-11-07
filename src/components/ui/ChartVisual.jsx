import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const VIEWBOX_WIDTH = 430;
const VIEWBOX_HEIGHT = 108;
const GRID_TOP = 4;
const GRID_BOTTOM = VIEWBOX_HEIGHT - 4;

const createGridLines = (count) => {
    const minimumTicks = Math.max(count, 2);
    const span = GRID_BOTTOM - GRID_TOP;
    return Array.from({ length: minimumTicks }, (_, index) => {
        const ratio = index / (minimumTicks - 1);
        const y = GRID_TOP + ratio * span;
        const isBaseline = index === minimumTicks - 1;
        return { y, dashed: !isBaseline };
    });
};

const ChartVisual = ({ summary, timeline }) => {
    const isTrendingUp = summary.changeDirection === "up";
    const changeColor = isTrendingUp ? "text-positive" : "text-negative";
    const DirectionIcon = isTrendingUp ? ArrowUpRight : ArrowDownRight;
    const yAxisLabels = summary.yAxisLabels ?? [];
    const gridLines = createGridLines(yAxisLabels.length || 3);
    const gradientId = `chartGradient-${summary.title
        .replace(/[^a-z0-9]/gi, "")
        .toLowerCase()}`;
    const hasTimeline = Array.isArray(timeline) && timeline.length > 0;

    return (
        <section className="flex flex-col gap-6 rounded-[20px] bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[21px] font-semibold text-heading">
                        {summary.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-3">
                        <span className="text-[34px] font-semibold text-heading">
                            {summary.currentValue}
                        </span>
                        <span
                            className={`flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-[14px] font-medium ${changeColor}`}
                        >
                            <DirectionIcon aria-hidden className="h-4 w-4" />
                            {summary.changeLabel}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="flex w-16 flex-col justify-between text-[12px] text-muted">
                    {yAxisLabels.map((label) => (
                        <span key={label} className="leading-tight">
                            {label}
                        </span>
                    ))}
                </div>
                <div className="flex-1">
                    <svg
                        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
                        className="h-[180px] w-full"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient
                                id={gradientId}
                                x1="11.4263"
                                y1="64.5"
                                x2="428.997"
                                y2="60.6953"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stopColor="#B4AEFE" />
                                <stop offset="1" stopColor="#2618CA" />
                            </linearGradient>
                        </defs>
                        {gridLines.map((line) => (
                            <line
                                key={line.y}
                                x1="0"
                                x2={VIEWBOX_WIDTH}
                                y1={line.y}
                                y2={line.y}
                                stroke="#E4E4E4"
                                strokeDasharray={
                                    line.dashed ? "4 4" : undefined
                                }
                            />
                        ))}
                        <path
                            d="M1 65C36.9708 65 53.6529 11.5 88.0597 11.5C122.467 11.5 148.764 60 179 60C209.236 60 203.359 38.5 243.5 38.5C283.641 38.5 272.605 107 318.481 107C364.357 107 328.386 1 429 1"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </svg>
                    {hasTimeline ? (
                        <div className="mt-4 flex items-center justify-between text-[12px] text-muted">
                            {timeline.map((point) => (
                                <span key={point.label}>{point.label}</span>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default ChartVisual;
