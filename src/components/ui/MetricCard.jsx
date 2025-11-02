const MetricCard = ({ title, value, delta, deltaLabel, caption }) => {
    const isPositive = delta >= 0;
    const formattedDelta = `${isPositive ? "+" : ""}${delta.toFixed(2)}%`;

    return (
        <article className="flex h-full flex-col justify-between rounded-xl bg-surface-alt p-6 shadow-subtle transition-transform hover:-translate-y-1 hover:shadow-card">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-muted">{title}</h2>
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isPositive
                            ? "bg-success/10 text-success"
                            : "bg-danger/10 text-danger"
                    }`}
                >
                    {formattedDelta}
                </span>
            </div>
            <div className="mt-5 flex items-end justify-between">
                <p className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                    {value}
                </p>
                {deltaLabel ? (
                    <span className="text-xs text-muted">{deltaLabel}</span>
                ) : null}
            </div>
            {caption ? (
                <p className="mt-6 text-xs text-muted">{caption}</p>
            ) : null}
        </article>
    );
};

export default MetricCard;
