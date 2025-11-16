/**
 * Email obfuscation utilities to protect against web scraping bots
 */

/**
 * Encodes an email address to make it harder for bots to scrape
 */
export function encodeEmail(email: string): string {
  // Simple encoding: convert to base64 and reverse
  const encoded = Buffer.from(email).toString('base64')
  return encoded.split('').reverse().join('')
}

/**
 * Decodes an obfuscated email address
 */
export function decodeEmail(encoded: string): string {
  const reversed = encoded.split('').reverse().join('')
  return Buffer.from(reversed, 'base64').toString('utf-8')
}

/**
 * Creates an obfuscated email string that can be decoded client-side
 */
export function obfuscateEmail(email: string): string {
  // Split email into parts
  const [local, domain] = email.split('@')
  // Return encoded parts separately
  return `${encodeEmail(local)}@${encodeEmail(domain)}`
}

/**
 * Client-side function to decode and create mailto link
 */
export function getEmailLink(encodedLocal: string, encodedDomain: string): string {
  if (typeof window === 'undefined') return '#'
  
  try {
    const local = decodeEmail(encodedLocal)
    const domain = decodeEmail(encodedDomain)
    return `mailto:${local}@${domain}`
  } catch {
    return '#'
  }
}

/**
 * Alternative: Simple character replacement obfuscation
 * This is harder for bots but still readable by humans with JS
 */
export function simpleObfuscate(email: string): { parts: string[], key: number } {
  const key = Math.floor(Math.random() * 10) + 1
  const obfuscated = email
    .split('')
    .map(char => {
      if (char === '@') return '@'
      if (char === '.') return '.'
      return String.fromCharCode(char.charCodeAt(0) + key)
    })
    .join('')
  
  return { parts: [obfuscated], key }
}

