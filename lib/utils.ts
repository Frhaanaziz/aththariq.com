import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import ms from 'ms'
import { env } from '@/env.mjs'

export interface FetcherResponse {
  [key: string]: unknown
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function swrFetcher(...args: unknown[]) {
  // @ts-ignore
  const res = await fetch(...args)
  return res.json()
}

export function kebabCase(str: string): string {
  return (str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [])
    .map((x) => x.toLowerCase())
    .join('-')
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length)}...`
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
