import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const directionStyles = {
    in: {
        label: "Incoming",
        textClass: "text-positive",
        badgeClass: "bg-positive/10",
        Icon: ArrowDownLeft,
    },
    out: {
        label: "Outgoing",
        textClass: "text-negative",
        badgeClass: "bg-negative/10",
        Icon: ArrowUpRight,
    },
};

const TransactionTable = ({ rows }) => (
    <section className="rounded-[20px] bg-white p-6 shadow-card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 className="text-lg font-semibold text-heading">
                    Recent Transactions
                </h2>
                <p className="text-sm text-muted">
                    Synced from connected institutional accounts.
                </p>
            </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
            {rows.map((row) => {
                const direction =
                    directionStyles[row.direction] ?? directionStyles.out;
                const { Icon, textClass, badgeClass, label } = direction;

                return (
                    <div
                        key={row.id}
                        className="flex flex-col gap-4 rounded-[16px] border border-border px-4 py-3 transition hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="min-w-[140px]">
                            <p className="text-sm font-semibold text-heading">
                                {row.asset}
                            </p>
                            <p className="text-xs text-muted">{row.type}</p>
                        </div>
                        <div className="flex flex-1 items-center justify-between gap-4 sm:justify-end">
                            <span
                                className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${badgeClass} ${textClass}`}
                            >
                                <Icon aria-hidden className="h-4 w-4" />
                                {label}
                            </span>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-heading">
                                    {row.amount}
                                </p>
                                <p className="text-xs text-muted">
                                    {row.timestamp}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
);

export default TransactionTable;
