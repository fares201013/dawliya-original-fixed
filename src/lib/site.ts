// Single source of truth for contact info — swap real numbers here.
export const SITE = {
  name: "Dawliya Group",
  tagline: "Premium Egyptian Produce — Exported to Africa",
  whatsapp: "201015994394", // international format, no +
  phone: "+20 10 15994394",
  email: "export@dawliyagroup.com",
  address: "Cairo, Egypt",
  domain: "dawliyagroup.com",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
