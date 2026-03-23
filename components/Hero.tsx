'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.quranic}>
          <p className={`${styles.arabicText}`}>
            يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا
          </p>
          <p className={styles.translation}>
            "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you."
          </p>
          <p className={styles.reference}>— Quran 49:13 (Al-Hujurat)</p>
        </div>

        <h1 className={styles.title}>
          <span className={styles.noor}>نور</span>
          <br />
          <span className={styles.tagline}>A Path to Taqwa</span>
        </h1>

        <p className={styles.subtitle}>
          Embark on a transformative journey through the divine words of Allah and the noble teachings of His Prophet Muhammad (peace be upon him). Cultivate the consciousness of the divine—build the fortress of Taqwa within your heart.
        </p>

        <div className={styles.vision}>
          <h2>Why Noor?</h2>
          <p>
            <strong>Noor</strong> (Light) guides us from darkness into enlightenment. In a world of distractions, we offer a sacred space to reconnect with the Quran and Sunnah—to develop God-consciousness, strengthen our character, and live purposefully through Taqwa.
          </p>
          <p className={styles.taqwaDef}>
            <em>"Taqwa is not merely piety—it is the awareness of Allah's presence in every moment, the fear of displeasing Him, and the deep desire to draw closer to His mercy."</em>
          </p>
        </div>

        <div className={styles.cta}>
          <Link href="/quran" className={styles.btn}>
            Begin Reading Quran
          </Link>
          <Link href="/sunnah" className={`${styles.btn} ${styles.secondary}`}>
            Explore Sunnah
          </Link>
        </div>
      </div>
    </section>
  )
}
