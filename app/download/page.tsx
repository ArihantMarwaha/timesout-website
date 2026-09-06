import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Coming Soon — TimesOut',
  description: 'TimesOut is coming soon to the Apple App Store. Stay tuned!',
};

export default function DownloadComingSoonPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span>🚀</span> App Store Release
        </div>

        <h1 className={styles.title}>
          Coming <span className={styles.highlightText}>Soon.</span>
        </h1>

        <p className={styles.subtitle}>
          We are putting the finishing touches on TimesOut for iPhone. Tasks, with time built in, is arriving shortly on the App Store.
        </p>

        {/* Themed TimesOut Task Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardCategory}>Daily &bull; Today</span>
            <span className={styles.cardStatus}>In Progress</span>
          </div>
          <div className={styles.taskItem}>
            <div className={styles.checkbox}>
              {/* unchecked indicator */}
            </div>
            <div className={styles.taskDetails}>
              <div className={styles.taskTitle}>Launch TimesOut on the App Store</div>
              <div className={styles.taskMeta}>
                <span>Due Soon</span>
                <span>&bull;</span>
                <span className={styles.timerTag}>⏱️ Final Polish</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            Back to Home
          </Link>
          <Link href="/support" className={styles.secondaryBtn}>
            Have Questions?
          </Link>
        </div>
      </div>
    </main>
  );
}
