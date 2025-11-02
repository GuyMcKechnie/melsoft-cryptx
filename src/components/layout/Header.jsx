import { Search, Wifi } from "lucide-react";

const quickFilters = ["1D", "1W", "1M", "3M", "1Y"];

const Header = () => (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-6 py-6 lg:px-10 lg:py-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-white lg:text-3xl">
                        Welcome back, Alex
                    </h1>
                    <p className="text-sm text-muted lg:text-base">
                        Monitor your digital asset portfolio in real-time.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-primary hover:text-primary lg:flex"
                    >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success/15 text-success">
                            <Wifi aria-hidden className="h-4 w-4" />
                        </span>
                        Live sync enabled
                    </button>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-semibold">
                        A
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
