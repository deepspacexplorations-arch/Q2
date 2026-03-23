'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  )
}
