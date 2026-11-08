import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProfileConfig } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Click tracking using browser local storage
 */
export function trackLinkClick(linkId: string): number {
  if (typeof window === "undefined") return 0;
  const key = `link_click_${linkId}`;
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  const next = current + 1;
  localStorage.setItem(key, next.toString());
  return next;
}

export function getLinkClicks(linkId: string): number {
  if (typeof window === "undefined") return 0;
  const key = `link_click_${linkId}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

/**
 * Download vCard (.vcf) directly into phone contacts
 */
export function downloadVCard(vcard: NonNullable<ProfileConfig["vcard"]>) {
  const vcardData = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${vcard.fullName}`,
    vcard.organization ? `ORG:${vcard.organization}` : "",
    vcard.title ? `TITLE:${vcard.title}` : "",
    vcard.phone ? `TEL;TYPE=CELL:${vcard.phone}` : "",
    vcard.email ? `EMAIL;TYPE=INTERNET:${vcard.email}` : "",
    vcard.website ? `URL:${vcard.website}` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${vcard.fullName.replace(/\s+/g, "_")}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
