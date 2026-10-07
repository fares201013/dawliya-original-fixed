import { Link, useLocation } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { waLink } from "@/lib/site";

const navItems = [
  { to: "/", key: "home" },
  { to: "/produits", key: "products" },
  { to: "/services", key: "services" },
  { to: "/marches", key: "markets" },
  { to: "/a-propos", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="h-1 bg-gradient-to-r from-emerald-deep via-gold to-emerald-deep" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-deep text-cream font-display text-lg font-semibold">
            DG
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-emerald-deep">Dawliya Group</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Cairo · Africa</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  active ? "text-emerald-deep font-medium" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {t(`nav.${n.key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={waLink(t("cta_band.button"))}
            target="_blank" rel="noopener"
            className="rounded-md bg-emerald-deep px-4 py-2 text-sm font-medium text-cream transition hover:bg-primary"
          >
            {t("nav.quote")}
          </a>
        </div>

        <button
          className="lg:hidden rounded-md border border-border p-2"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-sm hover:bg-muted"
              >
                {t(`nav.${n.key}`)}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
