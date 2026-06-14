import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Social Media Engagement Predictor',
  description: 'Predict post engagement before publishing. Analyze content and timing to forecast likes, shares, and engagement rates.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="37209c43-038f-4648-9139-bfb51091be8f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
