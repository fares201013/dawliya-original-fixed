import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n, { Lang, setLang } from "../i18n";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StickyContactBar } from "../components/layout/StickyContactBar";
import { WhatsAppFAB } from "../components/ui/WhatsAppFAB";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-emerald-deep">404</h1>
        <p className="mt-4 text-muted-foreground">Page introuvable / Page not found</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-emerald-deep px-4 py-2 text-sm text-cream">
          Accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-emerald-deep">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-emerald-deep px-4 py-2 text-sm text-cream"
        >Réessayer</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dawliya Group — Fournisseur Premium · Égypte vers Afrique" },
      { name: "description", content: "Fruits, légumes, épicerie et surgelés d'Égypte exportés en conteneurs reefer vers la Côte d'Ivoire, le Sénégal, le Cameroun, le Maroc, Maurice et plus." },
      { name: "theme-color", content: "#064e3b" },
      { property: "og:title", content: "Dawliya Group — Fournisseur Premium · Égypte vers Afrique" },
      { property: "og:description", content: "Fruits, légumes, épicerie et surgelés d'Égypte exportés en conteneurs reefer vers la Côte d'Ivoire, le Sénégal, le Cameroun, le Maroc, Maurice et plus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dawliya Group — Fournisseur Premium · Égypte vers Afrique" },
      { name: "twitter:description", content: "Fruits, légumes, épicerie et surgelés d'Égypte exportés en conteneurs reefer vers la Côte d'Ivoire, le Sénégal, le Cameroun, le Maroc, Maurice et plus." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1b72aa0e-238e-4e9b-87c2-aa35c5334335" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1b72aa0e-238e-4e9b-87c2-aa35c5334335" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function LayoutInner() {
  const { i18n: i18nInst } = useTranslation();
  useEffect(() => {
    // Apply persisted language attributes on mount
    const lang = (i18nInst.language as Lang) || "fr";
    setLang(lang);
  }, [i18nInst.language]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <StickyContactBar />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <LayoutInner />
      </I18nextProvider>
    </QueryClientProvider>
  );
}
