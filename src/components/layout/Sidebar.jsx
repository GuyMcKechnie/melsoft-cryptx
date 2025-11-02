import logoMark from "../../assets/cryptx-logo.svg";

const primaryNav = [
    { label: "Dashboard", active: true },
    { label: "Portfolio" },
    { label: "Market Overview" },
    { label: "Analytics" },
    { label: "Alerts" },
];

const secondaryNav = [
    { label: "Settings" },
    { label: "Support" },
    { label: "Logout" },
];

const Sidebar = () => (
    <aside className="bg-surface text-white shadow-card lg:shadow-none lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 w-full flex flex-col lg:justify-between z-40">
        <div className="flex flex-col gap-10 px-6 py-6 lg:py-10">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <img src={logoMark} alt="CryptX" className="h-10 w-10" />
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold tracking-tight">
                            CryptX
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-muted">
                            Control Panel
                        </span>
                    </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary lg:hidden">
                    Menu
                </span>
            </div>

            <nav className="lg:hidden">
                <ul className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                    {primaryNav.map((item) => (
                        <li key={item.label}>
                            <button
                                type="button"
                                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors hover:bg-primary/10 hover:text-primary ${
                                    item.active
                                        ? "bg-primary text-white shadow-subtle"
                                        : "bg-white/5 text-muted"
                                }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className="hidden lg:block">
                <ul className="flex flex-col gap-2">
                    {primaryNav.map((item) => (
                        <li key={item.label}>
                            <button
                                type="button"
                                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                                    item.active
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted"
                                }`}
                            >
                                <span>{item.label}</span>
                                {item.active && (
                                    <span
                                        className="h-2 w-2 rounded-full bg-primary"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

        <div className="hidden lg:flex flex-col gap-4 border-t border-white/5 px-6 py-6">
            <div className="flex items-center justify-between text-sm text-muted">
                <span className="font-medium text-white">Portfolio Health</span>
                <span>82%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-accent" />
            </div>
            <nav>
                <ul className="flex flex-col gap-2 pt-2">
                    {secondaryNav.map((item) => (
                        <li key={item.label}>
                            <button
                                type="button"
                                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
                            >
                                <span>{item.label}</span>
                                <span
                                    className="h-2 w-2 rounded-full bg-white/10"
                                    aria-hidden="true"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </aside>
);

export default Sidebar;
