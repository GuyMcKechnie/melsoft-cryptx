import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";
import { btcSummary, chartTimeline } from "../../data/chartStaticData";
import { transactionData } from "../../data/transactionData";

const metricSummary = [
    {
        title: "Total Portfolio Value",
        value: "R1,248,920.32",
        delta: 3.21,
        deltaLabel: "vs. last week",
        caption: "Across 12 connected custodial wallets.",
    },
    {
        title: "24H Profit / Loss",
        value: "+R28,432.17",
        delta: 1.87,
        deltaLabel: "Projected at current trend",
        caption:
            "Net realized + unrealized gains within the rolling 24 hour window.",
    },
    {
        title: "Stablecoin Liquidity",
        value: "$R82,190.45",
        delta: -0.86,
        deltaLabel: "Redeploy suggestion",
        caption:
            "Idle liquidity available for rebalancing within the treasury accounts.",
    },
    {
        title: "Risk Exposure Index",
        value: "32.5 RISK",
        delta: -4.13,
        deltaLabel: "Safer than target",
        caption:
            "Lower indicates a safer exposure relative to the benchmark composite.",
    },
];

const MainContent = () => (
    <main className="flex-1">
        <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 py-8 lg:px-10 lg:py-10">
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
                {metricSummary.map((metric) => (
                    <MetricCard key={metric.title} {...metric} />
                ))}
            </section>
            <ChartVisual summary={btcSummary} timeline={chartTimeline} />

            <TransactionTable rows={transactionData} />
        </div>
    </main>
);

export default MainContent;
