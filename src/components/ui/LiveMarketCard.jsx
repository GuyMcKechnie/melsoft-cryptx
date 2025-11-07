import { createElement } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const VIEWBOX_WIDTH = 120;
const VIEWBOX_HEIGHT = 44;
const TOP_PADDING = 4;
const BOTTOM_PADDING = 6;
const DEFAULT_SPARK_SIZE = {
    width: VIEWBOX_WIDTH,
    height: VIEWBOX_HEIGHT,
};

const buildSparklinePath = (values) => {
    if (!Array.isArray(values) || values.length < 2) {
        return { path: "" };
    }

    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue || 1;
    const points = values.map((value, index) => {
        const x = (index / (values.length - 1)) * VIEWBOX_WIDTH;
        const normalized = (value - minValue) / range;
        const y =
            TOP_PADDING +
            (1 - normalized) * (VIEWBOX_HEIGHT - TOP_PADDING - BOTTOM_PADDING);
        return { x, y };
    });

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let index = 0; index < points.length - 1; index += 1) {
        const current = points[index];
        const next = points[index + 1];
        const controlOffset = (next.x - current.x) / 2;
        const controlOneX = current.x + controlOffset;
        const controlTwoX = next.x - controlOffset;
        path += ` C ${controlOneX} ${current.y}, ${controlTwoX} ${next.y}, ${next.x} ${next.y}`;
    }

    return { path };
};

const renderSvgElement = (element, keyPrefix) => {
    if (!element || typeof element !== "object") {
        return null;
    }

    const { tag, props = {}, children } = element;
    const resolvedChildren = Array.isArray(children)
        ? children.map((child, index) =>
              renderSvgElement(child, `${keyPrefix}-${index}`)
          )
        : children;

    return createElement(tag, { key: keyPrefix, ...props }, resolvedChildren);
};

const LiveMarketCard = ({ markets }) => (
    <section className="rounded-[20px] bg-white p-6 shadow-card">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-lg font-semibold text-heading">
                    Live Market
                </h2>
                <p className="text-sm text-muted">
                    Performance across trending trading pairs.
                </p>
            </div>
        </div>
        <div className="mt-2 flex flex-col gap-3">
            {markets.map((market) => {
                const isUp = market.changeDirection === "up";
                const ChangeIcon = isUp ? ArrowUpRight : ArrowDownRight;
                const sparkSvg = market.sparkSvg;
                const computedSparkline = sparkSvg
                    ? null
                    : buildSparklinePath(market.sparkValues);
                const explicitPath =
                    sparkSvg && sparkSvg.path !== undefined
                        ? typeof sparkSvg.path === "string"
                            ? { d: sparkSvg.path }
                            : sparkSvg.path
                        : null;
                const fallbackPath =
                    !sparkSvg?.path && computedSparkline?.path
                        ? {
                              d: computedSparkline.path,
                              stroke: market.sparkColour,
                              strokeWidth: 2,
                              fill: "none",
                          }
                        : null;
                const pathProps = explicitPath ?? fallbackPath;
                const resolvedPathProps = pathProps
                    ? {
                          strokeLinecap: "round",
                          ...pathProps,
                      }
                    : null;
                const sparkElements = Array.isArray(sparkSvg?.elements)
                    ? sparkSvg.elements
                    : null;
                const sparkViewBox =
                    sparkSvg?.viewBox ??
                    `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`;
                const sparkSize = sparkSvg?.size ?? DEFAULT_SPARK_SIZE;

                return (
                    <div
                        key={market.id}
                        className="flex items-center gap-4 rounded-[16px] border border-border bg-background px-4 py-3 shadow-sm"
                        style={{
                            borderLeftColor: market.sparkColour,
                            borderLeftStyle: "solid",
                            borderLeftWidth: "4px",
                        }}
                    >
                        <div className="flex flex-1 items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                                    <img
                                        src={market.icon}
                                        alt={`${market.name} logo`}
                                        className="h-8 w-8 object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-heading">
                                        {market.name}
                                    </p>
                                    <p className="text-xs text-muted">
                                        {market.pair}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden min-w-[110px] flex-col text-right sm:flex">
                                <span className="text-sm font-semibold text-heading">
                                    {market.price}
                                </span>
                                <span
                                    className={`mt-1 flex items-center gap-1 text-xs font-medium ${
                                        isUp ? "text-positive" : "text-negative"
                                    }`}
                                >
                                    <ChangeIcon
                                        aria-hidden
                                        className="h-4 w-4"
                                    />
                                    {market.change}
                                </span>
                            </div>
                            <svg
                                viewBox={sparkViewBox}
                                className="flex-shrink-0"
                                preserveAspectRatio="none"
                                style={{
                                    width: `${sparkSize.width}px`,
                                    height: `${sparkSize.height}px`,
                                }}
                            >
                                {sparkElements ? (
                                    sparkElements.map((element, index) =>
                                        renderSvgElement(
                                            element,
                                            `spark-${market.id}-${index}`
                                        )
                                    )
                                ) : resolvedPathProps ? (
                                    <path {...resolvedPathProps} />
                                ) : null}
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
);

export default LiveMarketCard;
