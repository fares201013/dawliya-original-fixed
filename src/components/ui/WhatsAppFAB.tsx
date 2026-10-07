import { useTranslation } from "react-i18next";
import { waLink } from "@/lib/site";

export function WhatsAppFAB() {
  const { t } = useTranslation();
  return (
    <a
      href={waLink(t("cta_band.button"))}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-24 end-4 z-40 hidden h-14 w-14 items-center justify-center rounded-full text-white shadow-luxe transition hover:scale-105 md:flex"
      style={{ background: "var(--whatsapp)" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.04 4C9.95 4 5 8.95 5 15.04c0 1.94.5 3.84 1.46 5.51L5 27l6.62-1.74a11 11 0 0 0 4.42.93h.01c6.09 0 11.04-4.95 11.04-11.04 0-2.95-1.15-5.72-3.23-7.81A10.96 10.96 0 0 0 16.04 4zm0 20.05h-.01a9.07 9.07 0 0 1-4.62-1.27l-.33-.2-3.93 1.03 1.05-3.83-.22-.34a9.04 9.04 0 1 1 8.06 4.61z" />
      </svg>
    </a>
  );
}
