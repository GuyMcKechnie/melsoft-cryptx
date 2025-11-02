import { Download, AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";
import { statusStyles } from "../../data/transactionData";

const headers = [
    "Reference",
    "Asset",
    "Type",
    "Amount",
    "Value",
    "Status",
    "Counterparty",
    "Timestamp",
];

const statusIcons = {
    Completed: CheckCircle2,
    Pending: Clock3,
    Failed: AlertTriangle,
};

const TransactionTable = ({ rows }) => (
    <section className="rounded-2xl bg-surface-alt p-6 shadow-subtle lg:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h2 className="text-lg font-semibold text-white">
                    Recent Transactions
                </h2>
                <p className="text-sm text-muted">
                    All activity is synced from connected institutional
                    accounts.
                </p>
            </div>
        </div>

        <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm text-white">
                <thead className="text-xs uppercase tracking-widest text-muted">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="px-4 py-2 font-medium">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => {
                        const Icon = statusIcons[row.status];
                        return (
                            <tr
                                key={row.id}
                                className="rounded-xl bg-surface transition hover:bg-white/5"
                            >
                                <td className="rounded-l-xl px-4 py-4 text-xs font-semibold text-muted-soft">
                                    {row.id}
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                                            {row.symbol}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-white">
                                                {row.asset}
                                            </span>
                                            <span className="text-xs text-muted">
                                                {row.symbol}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-muted">
                                    {row.type}
                                </td>
                                <td className="px-4 py-4 text-sm text-white">
                                    {row.amount}
                                </td>
                                <td className="px-4 py-4 text-sm text-white">
                                    {row.value}
                                </td>
                                <td className="px-4 py-4">
                                    <span
                                        className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                                            statusStyles[row.status] ??
                                            "bg-white/10 text-white"
                                        }`}
                                    >
                                        {Icon ? (
                                            <Icon
                                                aria-hidden
                                                className="h-4 w-4"
                                            />
                                        ) : null}
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4 text-sm text-muted">
                                    {row.counterparty}
                                </td>
                                <td className="rounded-r-xl px-4 py-4 text-sm text-muted">
                                    {row.timestamp}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </section>
);

export default TransactionTable;
