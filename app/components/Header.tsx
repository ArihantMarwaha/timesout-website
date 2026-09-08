'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    toggleBtnRef.current?.focus();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  // Handle auto-hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
        <nav className={styles.nav} aria-label="Main Navigation">
          <div className={styles.logo}>
            <Link href="/" aria-label="TimesOut Homepage" className={styles.logoLink}>
              <Image 
                src="/app-icon.png" 
                alt="" 
                width={30} 
                height={30} 
                className={styles.navAppIcon}
                priority
              />
              <span>TimesOut</span>
            </Link>
          </div>

          <div className={styles.desktopNav}>
            <Link href="/support" className={styles.link}>Support</Link>
            <Link href="/privacy" className={styles.link}>Privacy</Link>
            <Link href="/download" className={styles.downloadBtn}>Download App</Link>
          </div>

          <button 
            ref={toggleBtnRef}
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-dialog"
            aria-haspopup="dialog"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      </header>

      {/* Mobile Drawer & Backdrop */}
      <div 
        className={`${styles.backdrop} ${isMenuOpen ? styles.backdropVisible : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div 
        id="mobile-nav-dialog"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
        className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerLogoWrapper}>
            <Image 
              src="/app-icon.png" 
              alt="" 
              width={28} 
              height={28} 
              className={styles.drawerAppIcon}
            />
            <span className={styles.drawerLogo}>TimesOut</span>
          </div>
          <button 
            className={styles.drawerCloseBtn} 
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className={styles.mobileLinks} aria-label="Mobile menu links">
          <Link href="/" className={styles.mobileLink} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/support" className={styles.mobileLink} onClick={closeMenu}>
            Support
          </Link>
          <Link href="/privacy" className={styles.mobileLink} onClick={closeMenu}>
            Privacy Policy
          </Link>
          <Link href="/download" className={styles.mobileDownloadBtn} onClick={closeMenu}>
            Download App
          </Link>
        </nav>
      </div>
    </>
  );
}
