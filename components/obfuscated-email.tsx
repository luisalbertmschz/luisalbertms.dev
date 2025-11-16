"use client"

import { useEffect, useState } from "react"
import { decodeEmail } from "@/lib/email-obfuscation"

interface ObfuscatedEmailProps {
  encodedLocal: string
  encodedDomain: string
  className?: string
  children?: React.ReactNode
  showEmail?: boolean
}

/**
 * Component that decodes and displays an email address client-side only
 * This prevents bots from easily scraping the email from the HTML source
 */
export function ObfuscatedEmail({ 
  encodedLocal, 
  encodedDomain, 
  className = "",
  children,
  showEmail = false
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("")
  const [mailtoLink, setMailtoLink] = useState<string>("#")

  useEffect(() => {
    try {
      const local = decodeEmail(encodedLocal)
      const domain = decodeEmail(encodedDomain)
      const fullEmail = `${local}@${domain}`
      setEmail(fullEmail)
      setMailtoLink(`mailto:${fullEmail}`)
    } catch (error) {
      console.error("Error decoding email:", error)
    }
  }, [encodedLocal, encodedDomain])

  if (!email) {
    return <span className={className}>Loading...</span>
  }

  if (showEmail) {
    return (
      <a href={mailtoLink} className={className}>
        {children || email}
      </a>
    )
  }

  return (
    <a href={mailtoLink} className={className}>
      {children || email}
    </a>
  )
}

interface ObfuscatedEmailButtonProps {
  encodedLocal: string
  encodedDomain: string
  className?: string
  children: React.ReactNode
}

/**
 * Button component with obfuscated email link
 * Wraps children in a mailto link that's decoded client-side
 */
export function ObfuscatedEmailButton({ 
  encodedLocal, 
  encodedDomain, 
  className = "",
  children
}: ObfuscatedEmailButtonProps) {
  const [mailtoLink, setMailtoLink] = useState<string>("#")

  useEffect(() => {
    try {
      const local = decodeEmail(encodedLocal)
      const domain = decodeEmail(encodedDomain)
      setMailtoLink(`mailto:${local}@${domain}`)
    } catch (error) {
      console.error("Error decoding email:", error)
    }
  }, [encodedLocal, encodedDomain])

  // Clone children and add href prop if it's a valid React element
  const childrenWithProps = typeof children === 'object' && children !== null && 'type' in children
    ? children
    : children

  return (
    <a href={mailtoLink} className={className} style={{ textDecoration: 'none', display: 'inline-block' }}>
      {children}
    </a>
  )
}

