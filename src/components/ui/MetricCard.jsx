import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const MetricCard = ({
    title,
    subtitle,
    value,
    changeLabel,
    changeDirection = "up",
    icon: Icon,
    iconBg,
}) => {
    const isPositive = changeDirection === "up";
    const DeltaIcon = isPositive ? ArrowUpRight : ArrowDownRight;

    return (
        <article className="relative flex h-full flex-col rounded-[20px] bg-white p-4 shadow-card">
            <div className="flex items-start justify-between">
                <span
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px]"
                    style={{ backgroundColor: iconBg }}
                >
                    {Icon ? (
                        <Icon aria-hidden className="h-6 w-6 text-white" />
                    ) : null}
                </span>
                <span
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-[14px] font-medium ${
                        isPositive ? "text-positive" : "text-negative"
                    }`}
                >
                    <DeltaIcon aria-hidden className="h-4 w-4" />
                    {changeLabel}
                </span>
            </div>
            <div className="mt-4 space-y-2">
                <p className="text-[22px] font-semibold text-heading">
                    {value}
                </p>
                <p className="text-sm font-medium text-muted">{title}</p>
                {subtitle ? (
                    <p className="text-sm text-muted">{subtitle}</p>
                ) : null}
            </div>
        </article>
    );
};

export default MetricCard;
