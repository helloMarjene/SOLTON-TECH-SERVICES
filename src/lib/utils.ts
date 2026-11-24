export function phoneHref(phone: string) {
  return "tel:" + phone.replace(/[^\d+]/g, "");
}
export function whatsappHref(phone: string, message: string) {
  return "https://wa.me/" + phone.replace(/[^\d]/g, "") + "?text=" + encodeURIComponent(message);
}
export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
