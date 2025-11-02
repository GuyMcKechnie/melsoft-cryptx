import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const ChartVisual = ({ summary, timeline, path }) => {
    const isTrendingUp = summary.changeDirection === "up";
    const changeColor = isTrendingUp ? "text-success" : "text-danger";
    const DirectionIcon = isTrendingUp ? ArrowUpRight : ArrowDownRight;

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
                <svg viewBox="0 0 320 120" className="relative h-56 w-full">
                    <defs>
                        <linearGradient
                            id="chartGradient"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
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
                    <path
                        d="M0 120H320V0H0Z"
                        fill="url(#chartGradient)"
                        opacity="0.35"
                        transform="translate(0,24)"
                    />
                    <path
                        d={path}
                        stroke="#6366F1"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        transform="translate(0,24)"
                    />
                    <g stroke="rgba(148,163,184,0.35)" strokeWidth="1">
                        <line x1="0" x2="320" y1="116" y2="116" />
                        <line
                            x1="0"
                            x2="320"
                            y1="72"
                            y2="72"
                            strokeDasharray="4 4"
                        />
                        <line
                            x1="0"
                            x2="320"
                            y1="28"
                            y2="28"
                            strokeDasharray="4 4"
                        />
                    </g>
                    {timeline.map((point, index) => (
                        <text
                            key={point.label}
                            x={(index / (timeline.length - 1)) * 320}
                            y="112"
                            textAnchor={
                                index === timeline.length - 1
                                    ? "end"
                                    : index === 0
                                    ? "start"
                                    : "middle"
                            }
                            className="fill-muted text-[10px]"
                        >
                            {point.label}
                        </text>
                    ))}
                </svg>
            </div>
        </section>
    );
};

export default ChartVisual;
