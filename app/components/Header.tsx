'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close menu when hiding header
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">TimesOut</Link>
        </div>

        <div className={styles.desktopNav}>
          <Link href="/support" className={styles.link}>Support</Link>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/download" className={styles.downloadBtn}>Download App</Link>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.overlayVisible : ''}`}>
        <div className={styles.mobileLinks}>
          <Link href="/support" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Support</Link>
          <Link href="/privacy" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Privacy</Link>
          <Link href="/download" className={styles.mobileDownloadBtn} onClick={() => setIsMenuOpen(false)}>Download App</Link>
        </div>
      </div>
    </header>
  );
}
