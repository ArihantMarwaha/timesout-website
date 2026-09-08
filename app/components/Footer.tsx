import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Decorative top accent strip */}
      <div className={styles.accentStrip} aria-hidden="true">
        <span className={styles.stripLemon} />
        <span className={styles.stripPeach} />
        <span className={styles.stripLavender} />
        <span className={styles.stripSky} />
        <span className={styles.stripSage} />
      </div>

      <div className={styles.container}>
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Col 1: Brand & Philosophy */}
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <Image 
                src="/app-icon.png" 
                alt="" 
                width={34} 
                height={34} 
                className={styles.footerBrandIcon}
              />
              <span>TimesOut</span>
              <span className={styles.logoDot}>.</span>
            </div>
            <p className={styles.tagline}>Tasks, with time built in.</p>
            <p className={styles.bio}>
              The intentional daily planner and focus timer crafted natively for Apple devices. Organize your day, crush distractions, and keep tasks alive on your Lock Screen.
            </p>
            <div className={styles.trustBadges}>
              <span className={styles.trustBadge}>🔒 Zero Tracking</span>
              <span className={styles.trustBadge}>☁️ Private iCloud</span>
              <span className={styles.trustBadge}>⚡ SwiftData</span>
            </div>
            <div className={styles.platformTags}>
              <span className={styles.platformTag}>iPhone</span>
              <span className={styles.platformTag}>iPad</span>
            </div>
          </div>

          {/* Col 2: Navigation & Pages */}
          <div className={styles.navCol}>
            <p className={styles.colHeading}>Explore</p>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="/support" className={styles.footerLink}>Support &amp; FAQs</Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/download" className={styles.footerLink}>App Store Release</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Features */}
          <div className={styles.navCol}>
            <p className={styles.colHeading}>Features</p>
            <ul className={styles.linkList}>
              <li>
                <span className={styles.featureItem}>Focus Countdown Timers</span>
              </li>
              <li>
                <span className={styles.featureItem}>Live Activities &amp; Island</span>
              </li>
              <li>
                <span className={styles.featureItem}>Interactive Widgets</span>
              </li>
              <li>
                <span className={styles.featureItem}>Siri &amp; Apple Shortcuts</span>
              </li>
              <li>
                <span className={styles.featureItem}>30+ Aesthetic Themes</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Download Card */}
          <div className={styles.downloadCol}>
            <div className={styles.appCard}>
              <div className={styles.appCardHeader}>
                <div className={styles.appIconBadge}>
                  <Image 
                    src="/app-icon.png" 
                    alt="TimesOut App Icon" 
                    width={48} 
                    height={48} 
                    className={styles.footerAppCardIcon}
                  />
                </div>
                <div>
                  <p className={styles.appCardTitle}>TimesOut</p>
                  <p className={styles.appCardSubtitle}>Aesthetic Task Manager</p>
                </div>
              </div>
              <p className={styles.appCardDesc}>
                Plan with clarity, focus with intent, and never lose track of time.
              </p>
              <Link href="/download" className={styles.downloadBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14.938 8.016c0.686-0.89 1.15-2.029 1.01-3.216-1.013 0.05-2.227 0.7-2.936 1.587-0.638 0.795-1.196 1.954-1.026 3.125 1.144 0.088 2.253-0.584 2.952-1.496zM15.112 8.44c-1.373-0.015-2.671 0.85-3.376 0.85-0.718 0-1.815-0.75-2.909-0.765-1.424-0.018-2.739 0.817-3.473 2.062-1.488 2.531-0.38 6.273 1.066 8.318 0.704 0.995 1.536 2.096 2.628 2.054 1.054-0.045 1.455-0.672 2.732-0.672 1.264 0 1.637 0.672 2.748 0.65 1.134-0.021 1.848-1.002 2.538-1.996 0.8-1.151 1.132-2.268 1.148-2.327-0.024-0.011-2.217-0.835-2.242-3.327-0.02-2.088 1.733-3.088 1.812-3.136-0.978-1.408-2.5-1.611-3.053-1.674h-0.619z" />
                </svg>
                <span>Get on App Store</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} TimesOut. Developed by{' '}
            <strong className={styles.authorName}>Arihant Marwaha</strong> &amp;{' '}
            <strong className={styles.authorName}>Arima Jain</strong>.
          </p>
          <div className={styles.bottomMeta}>
            <span className={styles.appleTag}>Crafted for iOS &amp; iPadOS </span>
            <span className={styles.metaDivider}>•</span>
            <a href="mailto:timesoutsupport@gmail.com" className={styles.contactEmail}>
              timesoutsupport@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
