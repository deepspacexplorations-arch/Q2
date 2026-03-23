'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Noor</h4>
          <p>A platform dedicated to spiritual growth through the Quran and Sunnah.</p>
        </div>

        <div className={styles.section}>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/quran">Quran</Link></li>
            <li><Link href="/sunnah">Sunnah</Link></li>
            <li><Link href="/videos">Scholars</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Resources</h4>
          <ul>
            <li><a href="https://www.quran.com" target="_blank" rel="noopener noreferrer">Quran.com</a></li>
            <li><a href="https://sunnah.com" target="_blank" rel="noopener noreferrer">Sunnah.com</a></li>
            <li><a href="https://www.islamicstudies.info" target="_blank" rel="noopener noreferrer">Islamic Studies</a></li>
            <li><a href="https://www.youtube.com/results?search_query=Islamic+scholars" target="_blank" rel="noopener noreferrer">Scholar Videos</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Connect</h4>
          <p>Questions or suggestions? We'd love to hear from you.</p>
          <p className={styles.dua}>
            May Allah accept from us all that we do, and grant us understanding of His religion.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 Noor. Dedicated to the path of Taqwa. May Allah guide us all.</p>
      </div>
    </footer>
  )
}
