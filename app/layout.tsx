import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Luis A. Morla S. - Systems Engineer",
  description: "Systems Engineer specializing in enterprise systems implementation, CRM solutions, and technical support with focus on data management and project delivery",
  generator: "Next.js",
  keywords: "systems engineer, software engineer, web developer, full stack developer, react, next.js, data management, CRM solutions",
  authors: [{ name: "Luis A. Morla S." }],
  creator: "Luis A. Morla S.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lamorlas.vercel.app",
    title: "Luis A. Morla S. - Systems Engineer",
    description: "Systems Engineer specializing in enterprise systems implementation, CRM solutions, and technical support with focus on data management and project delivery",
    siteName: "Luis A. Morla S. Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis A. Morla S. - Systems Engineer",
    description: "Systems Engineer specializing in enterprise systems implementation, CRM solutions, and technical support with focus on data management and project delivery",
    creator: "@luisalbertmschz",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
