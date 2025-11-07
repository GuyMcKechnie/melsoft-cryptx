import { Coins, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";
import LiveMarketCard from "../ui/LiveMarketCard";
import { btcSummary, chartTimeline } from "../../data/chartStaticData";
import { liveMarketData, transactionData } from "../../data/transactionData";

const metricSummary = [
    {
        title: "Total Portfolio Value",
        subtitle: "Across 12 connected custodial wallets.",
        value: "R1,248,920.32",
        changeLabel: "+3.21%",
        changeDirection: "up",
        icon: Wallet,
        iconBg: "#6154F0",
    },
    {
        title: "24H Profit / Loss",
        subtitle: "Projected at current trend.",
        value: "+R28,432.17",
        changeLabel: "+1.87%",
        changeDirection: "up",
        icon: TrendingUp,
        iconBg: "#1ECB4F",
    },
    {
        title: "Stablecoin Liquidity",
        subtitle: "Idle liquidity available for redeployment.",
        value: "R82,190.45",
        changeLabel: "-0.86%",
        changeDirection: "down",
        icon: Coins,
        iconBg: "#FABC1E",
    },
    {
        title: "Risk Exposure Index",
        subtitle: "Lower indicates safer exposure.",
        value: "32.5 RISK",
        changeLabel: "-4.13%",
        changeDirection: "down",
        icon: ShieldCheck,
        iconBg: "#6154F0",
    },
];

const MainContent = () => (
    <main className="flex-1">
        <div className="mx-auto flex w-full max-w-content flex-col gap-8 p-6">
            <div className="grid gap-3 xl:grid-cols-[2fr,1fr]">
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {metricSummary.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>
                    <TransactionTable rows={transactionData} />
                </div>

                <div className="flex flex-col gap-3">
                    <ChartVisual
                        summary={btcSummary}
                        timeline={chartTimeline}
                    />
                    <LiveMarketCard markets={liveMarketData} />
                </div>
            </div>
        </div>
    </main>
);

export default MainContent;
