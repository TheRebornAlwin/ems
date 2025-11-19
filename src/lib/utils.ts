import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const luxurySpring = { type: "spring" as const, stiffness: 120, damping: 24 };
export const quickEase = { duration: 0.2, ease: "easeOut" as const };
