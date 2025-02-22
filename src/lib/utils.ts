import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCssVar({ varName, ref = document.documentElement }: { varName: string; ref?: HTMLElement }) {
  return getComputedStyle(ref).getPropertyValue(varName);
}
