'use client'

import Link from 'next/link'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <h2>Begin Your Journey Today</h2>
        <p>
          The Quran is a light in the darkness. Every verse contains wisdom meant specifically for you, in this moment.
        </p>
        <p className={styles.hadith}>
          "The best of you are those who learn the Quran and teach it." — Prophet Muhammad (peace be upon him)
        </p>
        
        <div className={styles.buttons}>
          <Link href="/quran" className={styles.btn}>
            Start Reading Quran
          </Link>
          <Link href="/sunnah" className={styles.btn}>
            Explore Sunnah
          </Link>
          <Link href="/videos" className={styles.btn}>
            Watch Scholars
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.number}>114</div>
            <div className={styles.label}>Surahs</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>6,236</div>
            <div className={styles.label}>Verses</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>∞</div>
            <div className={styles.label}>Wisdom</div>
          </div>
        </div>
      </div>
    </section>
  )
}
