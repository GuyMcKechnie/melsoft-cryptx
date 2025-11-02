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
                        <span className="flex h-2 w-2 rounded-full bg-success" />
                        Live sync enabled
                    </button>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-semibold">
                        A
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full md:max-w-sm">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 21L16.65 16.65M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <input
                        type="search"
                        placeholder="Search transactions, wallets, or tokens"
                        className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                </div>
                <div className="flex items-center gap-2">
                    {quickFilters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                filter === "1M"
                                    ? "bg-primary text-white shadow-subtle"
                                    : "bg-white/5 text-muted hover:bg-primary/10 hover:text-primary"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </header>
);

export default Header;
