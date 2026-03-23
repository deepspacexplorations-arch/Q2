'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './Quran.module.css'

export default function QuranPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [surah, setSurah] = useState(1)
  const [surahs, setSurahs] = useState([])
  const [verses, setVerses] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [fontSize, setFontSize] = useState(17)
  const [translation, setTranslation] = useState('en.sahih')

  // Load surah list
  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(r => r.json())
      .then(d => setSurahs(d.data || []))
      .catch(e => console.error('Error loading surahs:', e))
  }, [])

  // Load surah verses
  useEffect(() => {
    setLoading(true)
    
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surah}`).then(r => r.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surah}/${translation}`).then(r => r.json())
    ])
      .then(([ar, tr]) => {
        const arabicVerses = ar.data?.ayahs || []
        const translationVerses = tr.data?.ayahs || []
        
        // Merge Arabic and translation
        const merged = arabicVerses.map((v: any, idx: number) => ({
          ...v,
          translationText: translationVerses[idx]?.text || ''
        }))
        
        setVerses(merged)
        setLoading(false)
      })
      .catch(e => {
        console.error('Error loading verses:', e)
        setLoading(false)
      })
  }, [surah, translation])

  return (
    <>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main className={styles.container}>
        <div className={styles.controls}>
          <select value={surah} onChange={(e) => setSurah(Number(e.target.value))} className={styles.select}>
            {surahs.map((s: any) => (
              <option key={s.number} value={s.number}>
                {s.number}. {s.englishName} — {s.name}
              </option>
            ))}
          </select>

          <select value={translation} onChange={(e) => setTranslation(e.target.value)} className={styles.select}>
            <option value="en.sahih">Saheeh International</option>
            <option value="en.asad">Muhammad Asad</option>
            <option value="en.pickthall">Pickthall</option>
            <option value="en.yusufali">Yusuf Ali</option>
            <option value="en.shakir">Muhammad Shakir</option>
          </select>

          <div className={styles.fontSize}>
            <label>Font Size: {fontSize}px</label>
            <input 
              type="range" 
              min="8" 
              max="64" 
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className={styles.slider}
            />
          </div>
        </div>

        <div className={styles.content} style={{ '--base-font': `${fontSize}px` } as any}>
          {loading ? (
            <div className={styles.loading}>Loading verses...</div>
          ) : verses.length === 0 ? (
            <div className={styles.loading}>No verses found. Please check your connection.</div>
          ) : (
            verses.map((verse: any, idx: number) => (
              <div key={idx} className={styles.verse}>
                <div className={styles.verseHeader}>
                  <span className={styles.verseNumber}>{verse.numberInSurah}</span>
                </div>
                <div className={styles.verseArabic} dir="rtl" lang="ar" style={{ fontSize: `${fontSize + 11}px` }}>
                  {verse.text}
                </div>
                <div className={styles.verseTranslation} style={{ fontSize: `${fontSize}px` }}>
                  <strong>{verse.numberInSurah}.</strong> {verse.translationText || 'Translation not available'}
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
