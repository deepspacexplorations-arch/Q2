'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './Videos.module.css'

export default function VideosPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scholars = [
    {
      name: 'Nouman Ali Khan',
      specialty: 'Quranic Interpretation & Arabic',
      channel: 'https://www.youtube.com/@bayyinah',
    },
    {
      name: 'Yasir Qadhi',
      specialty: 'Quran Studies & Islamic History',
      channel: 'https://www.youtube.com/@yasirqadhi',
    },
    {
      name: 'Omar Suleiman',
      specialty: 'Spiritual Guidance & Quran',
      channel: 'https://www.youtube.com/@omarsuleiman',
    },
    {
      name: 'Abdulbary Yahya',
      specialty: 'Hadith & Sunnah Studies',
      channel: 'https://www.youtube.com/@AbdulbaryYahya',
    },
    {
      name: 'Mufti Menk',
      specialty: 'Islamic Jurisprudence & Taqwa',
      channel: 'https://www.youtube.com/@muftimenk',
    },
    {
      name: 'Taimiyyah Zubair',
      specialty: 'Quranic Tafsir & Women Islamic Studies',
      channel: 'https://www.youtube.com/@taimiyyahzubair',
    },
  ]

  return (
    <>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main className={styles.container}>
        <div className={styles.header}>
          <h1>Learn from Authentic Scholars</h1>
          <p>Deepen your understanding through the teachings of renowned Islamic scholars</p>
        </div>

        <section className={styles.intro}>
          <p>
            The Prophet Muhammad (peace be upon him) emphasized the importance of seeking knowledge. 
            These videos from authentic scholars will help you understand the Quran, Sunnah, and develop Taqwa.
          </p>
        </section>

        <section className={styles.scholars}>
          <h2>Renowned Scholars</h2>
          <div className={styles.grid}>
            {scholars.map((scholar, idx) => (
              <a 
                key={idx}
                href={scholar.channel}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3>{scholar.name}</h3>
                <p className={styles.specialty}>{scholar.specialty}</p>
                <p className={styles.cta}>Watch on YouTube →</p>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.tips}>
          <h2>How to Get the Most from Scholarly Content</h2>
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <h3>1. Listen Attentively</h3>
              <p>Give your full attention when listening to Islamic knowledge. Your sincere intention matters.</p>
            </div>
            <div className={styles.tip}>
              <h3>2. Take Notes</h3>
              <p>Write down key points and verses mentioned. This helps retention and deepens understanding.</p>
            </div>
            <div className={styles.tip}>
              <h3>3. Reflect & Apply</h3>
              <p>Think about how you can apply the knowledge to your daily life and strengthen your relationship with Allah.</p>
            </div>
            <div className={styles.tip}>
              <h3>4. Seek Authenticity</h3>
              <p>Follow scholars known for their authentic knowledge grounded in Quran and Sunnah.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
