import { Bell, ChevronDown, HelpCircle, Search, User } from "lucide-react";

const Header = () => (
    <header className="border-b border-border px-10 py-4">
        <div className="flex items-center justify-between gap-2">
            <div className="relative w-full max-w-[355px]">
                <input
                    type="search"
                    placeholder="Search"
                    className="h-10 w-full rounded-[10px] border border-border pl-4 pr-12 text-[12px] text-subtle placeholder:text-subtle focus:border-primary focus:outline-none"
                />
                <Search
                    aria-hidden
                    className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle"
                />
            </div>
            <div className="flex items-center gap-6 text-subtle">
                <button type="button" className="transition hover:text-primary">
                    <Bell aria-hidden className="h-5 w-5" />
                </button>
                <button type="button" className="transition hover:text-primary">
                    <HelpCircle aria-hidden className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/20 text-muted">
                        <User aria-hidden className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col leading-tight">
                        <span className="text-[14px] font-semibold text-heading">
                            Laurice
                        </span>
                        <span className="text-[12px] text-subtle">
                            @laurice22
                        </span>
                    </div>
                    <ChevronDown aria-hidden className="h-4 w-4 text-subtle" />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
