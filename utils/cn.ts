import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Helper untuk menggabungkan className Tailwind secara aman.
 * clsx -> handle kondisi (true/false/null/undefined)
 * twMerge -> resolve class Tailwind yang bentrok
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
