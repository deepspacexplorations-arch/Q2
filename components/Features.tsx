'use client'

import styles from './Features.module.css'

export default function Features() {
  const features = [
    {
      icon: '📖',
      title: 'Complete Quran',
      description: 'The full Quran with multiple translations. Customize font sizes from 8 to 64pt for accessibility. Navigate seamlessly through all 114 surahs.',
    },
    {
      icon: '📜',
      title: 'Authentic Sunnah',
      description: 'Explore hadith collections organized by chapters and searchable by keywords. Learn from the traditions of Prophet Muhammad (peace be upon him).',
    },
    {
      icon: '🎓',
      title: 'Scholar Insights',
      description: 'Links to renowned Islamic scholars explaining Quranic verses and spiritual guidance. Deepen your understanding through authentic knowledge.',
    },
    {
      icon: '💾',
      title: 'Bookmarks & Notes',
      description: 'Save your favorite verses and create personal notes. Track your spiritual journey and progress in understanding the divine message.',
    },
    {
      icon: '🌙',
      title: 'Spiritual Focus',
      description: 'A clean, distraction-free interface designed to help you focus on your connection with Allah and inner reflection.',
    },
    {
      icon: '📱',
      title: 'All Devices',
      description: 'Optimized for desktop, tablet, and mobile. Read on the go and maintain your spiritual practice anywhere, anytime.',
    },
  ]

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Why Choose Noor?</h2>
        <p className={styles.intro}>
          Noor is built with a singular focus: helping you cultivate Taqwa through the Quran and Sunnah
        </p>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.commitment}>
          <h3>Our Commitment to You</h3>
          <ul>
            <li>✓ No advertisements or distractions</li>
            <li>✓ Free and open for all believers</li>
            <li>✓ Accurate, authenticated Islamic content</li>
            <li>✓ Privacy-first: Your notes and bookmarks are yours</li>
            <li>✓ Constantly improving with community feedback</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
