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
  if (typeof upload === "object" && upload.url) {
    // Make sure we use the direct media path in production instead of /api/media/file/
    // because Vercel Serverless Functions have issues serving images from Payload API
    // routes (like /api/media/file/[filename]) to Next.js Image Optimization
    if (upload.url.startsWith('/api/media/file/')) {
      return upload.url.replace('/api/media/file/', '/media/');
    }
    return upload.url;
  }
  if (typeof upload === "object" && upload.filename) return `/media/${upload.filename}`
  return undefined
}
