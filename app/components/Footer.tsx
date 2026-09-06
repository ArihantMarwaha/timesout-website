import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <p className={styles.logo}>TimesOut</p>
          <p className={styles.tagline}>Tasks, with time built in.</p>
        </div>

        <div className={styles.middleRow}>
          <Link href="/support" className={styles.link}>Support</Link>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
        </div>

        <div className={styles.downloadSection}>
          <Link href="/download" className={styles.downloadBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.938 8.016c0.686-0.89 1.15-2.029 1.01-3.216-1.013 0.05-2.227 0.7-2.936 1.587-0.638 0.795-1.196 1.954-1.026 3.125 1.144 0.088 2.253-0.584 2.952-1.496zM15.112 8.44c-1.373-0.015-2.671 0.85-3.376 0.85-0.718 0-1.815-0.75-2.909-0.765-1.424-0.018-2.739 0.817-3.473 2.062-1.488 2.531-0.38 6.273 1.066 8.318 0.704 0.995 1.536 2.096 2.628 2.054 1.054-0.045 1.455-0.672 2.732-0.672 1.264 0 1.637 0.672 2.748 0.65 1.134-0.021 1.848-1.002 2.538-1.996 0.8-1.151 1.132-2.268 1.148-2.327-0.024-0.011-2.217-0.835-2.242-3.327-0.02-2.088 1.733-3.088 1.812-3.136-0.978-1.408-2.5-1.611-3.053-1.674h-0.619z" />
            </svg>
            Download on the App Store
          </Link>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>&copy; {new Date().getFullYear()} TimesOut. All rights reserved.</p>
        <p>Made with ❤️ for productivity</p>
      </div>
    </footer>
  );
}
