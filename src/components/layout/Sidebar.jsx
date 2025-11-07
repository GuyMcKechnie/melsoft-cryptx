import {
    LayoutGrid,
    LineChart,
    Receipt,
    Wallet2,
    Mail,
    Settings,
    LogOut,
} from "lucide-react";
import logoMark from "../../assets/cryptx-logo.png";

const navItems = [
    { label: "Overview", icon: LayoutGrid, active: true },
    { label: "Chart", icon: LineChart },
    { label: "Transactions", icon: Receipt },
    { label: "Wallet", icon: Wallet2 },
    { label: "Mail Box", icon: Mail },
    { label: "Setting", icon: Settings },
];

const Sidebar = () => (
    <aside className="hidden h-full w-[263px] flex-shrink-0 flex-col rounded-l-[20px] bg-background-muted px-10 py-10 lg:flex">
        <div className="flex items-center gap-3">
            <img src={logoMark} alt="CryptX" className="h-10" />
            <span className="text-[21px] font-semibold text-heading">
                CryptX
            </span>
        </div>

        <nav className="mt-16 flex flex-1 flex-col gap-8">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.active;
                return (
                    <button
                        type="button"
                        key={item.label}
                        className={`flex items-center justify-between text-[14px] transition-colors ${
                            isActive
                                ? "font-semibold text-primary"
                                : "font-medium text-muted hover:text-primary"
                        }`}
                    >
                        <span className="flex items-center gap-4">
                            <span
                                className={`flex h-12 w-12 items-center justify-center rounded-[12px] ${
                                    isActive
                                        ? "bg-primary text-white"
                                        : "text-muted"
                                }`}
                            >
                                <Icon aria-hidden className="h-5 w-5" />
                            </span>
                            {item.label}
                        </span>
                        {isActive ? (
                            <span
                                className="h-2 w-2 rounded-full bg-primary"
                                aria-hidden
                            />
                        ) : null}
                    </button>
                );
            })}
        </nav>

        <button
            type="button"
            className="mt-auto flex items-center justify-between text-[14px] font-medium text-muted transition-colors hover:text-primary"
        >
            <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-[12px] text-muted">
                    <LogOut aria-hidden className="h-5 w-5" />
                </span>
                Logout
            </span>
        </button>
    </aside>
);

export default Sidebar;
