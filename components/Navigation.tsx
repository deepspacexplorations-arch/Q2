'use client'

import Link from 'next/link'
import styles from './Navigation.module.css'

interface NavigationProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export default function Navigation({ menuOpen, setMenuOpen }: NavigationProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>نور</span>
          <span className={styles.logoEn}>Noor</span>
        </Link>

        <button 
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          <Link href="/quran" className={styles.menuItem}>
            Quran
          </Link>
          <Link href="/sunnah" className={styles.menuItem}>
            Sunnah
          </Link>
          <Link href="/videos" className={styles.menuItem}>
            Scholars
          </Link>
        </div>
      </div>
    </nav>
  )
}
