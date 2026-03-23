import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noor - Quran & Sunnah | Journey to Taqwa',
  description: 'Explore the Quran and Sunnah with a focus on spiritual growth and Taqwa. Beautiful, accessible Islamic learning platform.',
  keywords: 'Quran, Sunnah, Hadith, Islamic, Taqwa, Allah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
