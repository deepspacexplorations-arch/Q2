'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './Sunnah.module.css'

export default function SunnahPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const hadithCollections = [
    { name: 'Sahih al-Bukhari', count: 7563, link: 'https://sunnah.com/bukhari' },
    { name: 'Sahih Muslim', count: 5516, link: 'https://sunnah.com/muslim' },
    { name: 'Jami\` at-Tirmidhi', count: 3956, link: 'https://sunnah.com/tirmidhi' },
    { name: 'Sunan Abu Dawud', count: 4590, link: 'https://sunnah.com/abudawud' },
    { name: 'Sunan an-Nasa\'i', count: 5761, link: 'https://sunnah.com/nasai' },
    { name: 'Sunan Ibn Majah', count: 4341, link: 'https://sunnah.com/ibnmajah' },
  ]

  return (
    <>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main className={styles.container}>
        <div className={styles.header}>
          <h1>The Sunnah</h1>
          <p>The teachings and practices of Prophet Muhammad (peace be upon him)</p>
        </div>

        <section className={styles.intro}>
          <p>
            The Sunnah represents the authentic traditions, practices, and sayings of Prophet Muhammad (peace be upon him). 
            It is the second source of guidance in Islam after the Quran, providing practical examples of how to live a righteous life.
          </p>
        </section>

        <section className={styles.collections}>
          <h2>Major Hadith Collections</h2>
          <div className={styles.grid}>
            {hadithCollections.map((collection, idx) => (
              <a 
                key={idx}
                href={collection.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3>{collection.name}</h3>
                <p className={styles.count}>{collection.count} hadith</p>
                <p className={styles.link}>Explore on Sunnah.com →</p>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.importance}>
          <h2>Why Study the Sunnah?</h2>
          <ul>
            <li><strong>Practical Guidance:</strong> Learn how to apply Islamic teachings in daily life</li>
            <li><strong>Character Development:</strong> Follow the example of the best of mankind</li>
            <li><strong>Complete Understanding:</strong> The Sunnah explains and clarifies the Quran</li>
            <li><strong>Authentic Practices:</strong> Know which traditions are authentic and reliable</li>
            <li><strong>Spiritual Growth:</strong> Strengthen your connection with the Prophet's legacy</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  )
}
