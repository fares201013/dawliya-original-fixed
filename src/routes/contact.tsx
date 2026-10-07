import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dawliya Group" },
      { name: "description", content: "WhatsApp, téléphone, email. Réponse sous 2 heures en jour ouvré." },
      { property: "og:title", content: "Contact — Dawliya Group" },
      { property: "og:description", content: "Reach our export team in 3 languages." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", company: "", country: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `${t("nav.quote")}\n\n${form.name} (${form.company})\n${form.country}\n\n${form.message}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <div>
      <section className="border-b border-border bg-cream/50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.contact")}</div>
          <h1 className="mt-2 font-display text-4xl text-emerald-deep lg:text-6xl">{t("contact.title")}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2 space-y-4">
          <a href={waLink(t("cta_band.button"))} target="_blank" rel="noopener"
            className="block rounded-lg p-6 text-cream shadow-luxe" style={{ background: "var(--whatsapp)" }}>
            <div className="text-xs uppercase tracking-wider opacity-80">{t("common.whatsapp")}</div>
            <div className="mt-1 font-display text-2xl">+{SITE.whatsapp}</div>
            <div className="mt-2 text-sm opacity-90">{t("cta_band.subtitle")}</div>
          </a>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="block rounded-lg border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("common.call")}</div>
            <div className="mt-1 font-display text-2xl text-emerald-deep">{SITE.phone}</div>
          </a>
          <a href={`mailto:${SITE.email}`}
            className="block rounded-lg border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
            <div className="mt-1 font-display text-xl text-emerald-deep break-all">{SITE.email}</div>
          </a>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
            <div className="mt-1 font-display text-xl text-emerald-deep">{SITE.address}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 rounded-lg border border-border bg-card p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t("contact.form_name")} value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label={t("contact.form_company")} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
          </div>
          <Field label={t("contact.form_country")} value={form.country} onChange={(v) => setForm({ ...form, country: v })} required />
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{t("contact.form_message")}</label>
            <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-emerald-deep focus:outline-none" />
          </div>
          <button type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-deep px-6 py-3.5 text-sm font-semibold text-cream shadow-luxe hover:bg-primary">
            {t("contact.form_submit")} →
          </button>
          <p className="text-center text-xs text-muted-foreground">
            {t("contact.or")} <a href={waLink("Hello")} target="_blank" rel="noopener" className="text-emerald-deep underline">{t("common.whatsapp")}</a>
          </p>
        </form>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-emerald-deep focus:outline-none" />
    </div>
  );
}
