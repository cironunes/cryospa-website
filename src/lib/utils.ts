import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolve URL from a Payload upload field (e.g. featuredImage relationTo 'media'). */
export function getMediaUrl(
  upload: { url?: string; filename?: string } | string | number | null | undefined
): string | undefined {
  if (upload == null) return undefined
  if (typeof upload === "object" && upload.url) return upload.url
  if (typeof upload === "object" && upload.filename) return `/media/${upload.filename}`
  return undefined
}
