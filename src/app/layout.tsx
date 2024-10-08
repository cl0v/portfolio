import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics />
      </body>
      <GoogleTagManager gtmId="16600683276" />
    </html>
  )
}