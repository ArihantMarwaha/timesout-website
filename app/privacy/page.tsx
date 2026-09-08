import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — TimesOut',
  description: 'Privacy Policy for the TimesOut mobile application.',
  alternates: {
    canonical: 'https://timesoutapp.vercel.app/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <header className={styles.headerSection}>
        <div className={styles.badge}>
          <span>🔒</span> Privacy First
        </div>
        <h1 className={styles.title}>Privacy Policy for TimesOut</h1>
        <div className={styles.metaInfo}>
          <span>Effective Date: August 26, 2026</span>
          <span>•</span>
          <span>Last Updated: August 26, 2026</span>
        </div>
      </header>

      <div className={styles.leadCard}>
        <p>
          TimesOut (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), developed by <strong>Arihant Marwaha</strong> and <strong>Arima Jain</strong>, is committed to protecting your privacy. This Privacy Policy explains how your information is handled when you use the TimesOut mobile application (the &ldquo;App&rdquo;).
        </p>
        <div className={styles.privacyHighlight}>
          <span className={styles.highlightIcon}>✨</span>
          <div>
            <strong>Privacy-First Approach:</strong> Your data belongs to you, and we do not track, sell, or monetize your personal information.
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>1</div>
          <h2 className={styles.sectionTitle}>Information We Collect and How We Use It</h2>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>A. Your Tasks, Reminders, and Personal Content</h3>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              <strong>Local Storage:</strong> All tasks, recurrence rules, priority levels, focus timers, notes, and preferences you create in TimesOut are stored locally on your device using Apple&rsquo;s SwiftData and local storage frameworks.
            </li>
            <li className={styles.bulletItem}>
              <strong>iCloud Sync (CloudKit):</strong> If you enable iCloud sync, your task data is securely synchronized across your personal Apple devices via Apple&rsquo;s CloudKit. This data is stored in your personal private iCloud database. We (the developers) do not have access to, cannot read, and cannot view your tasks or notes.
            </li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>B. Sign in with Apple</h3>
          <p className={styles.paragraph}>
            If you choose to use Sign in with Apple, Apple provides a private, secure credential token to authenticate your device with your private iCloud container. We do not receive or store your real email address if you select Apple&rsquo;s &ldquo;Hide My Email&rdquo; feature, and we do not use your Apple ID for advertising or tracking.
          </p>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>C. In-App Purchases and Subscriptions (RevenueCat)</h3>
          <p className={styles.paragraph}>
            TimesOut offers optional auto-renewable subscriptions and in-app purchases (&ldquo;TimesOut Pro&rdquo;).
          </p>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              Payments and billing are processed directly by Apple via the App Store. We never collect or have access to your credit card, payment details, or billing address.
            </li>
            <li className={styles.bulletItem}>
              We use <strong>RevenueCat</strong> to manage subscription entitlements, restore purchases, and validate receipts. RevenueCat processes anonymous device/app user identifiers and purchase receipt tokens solely to verify whether you have an active Pro membership. For more details, please review{' '}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className={styles.externalLink}
              >
                RevenueCat&rsquo;s Privacy Policy
              </a>.
            </li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>D. Notifications and Dynamic Briefings</h3>
          <p className={styles.paragraph}>
            TimesOut uses local, on-device notifications to send you daily briefings, reminders, and focus timer alerts. These notifications are generated entirely on your device without transmitting your task details to external notification servers.
          </p>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>E. Widgets and Live Activities</h3>
          <p className={styles.paragraph}>
            TimesOut widgets and Live Activities (Dynamic Island / Lock Screen) read data directly from the on-device local app group storage to display countdowns and active focus tasks. No data is transmitted externally.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>2</div>
          <h2 className={styles.sectionTitle}>Third-Party Services and Tracking</h2>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🚫</div>
            <div className={styles.pillarTitle}>No Ads</div>
            <div className={styles.pillarText}>TimesOut contains no third-party advertisements of any kind.</div>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🛡️</div>
            <div className={styles.pillarTitle}>No Cross-App Tracking</div>
            <div className={styles.pillarText}>We do not track you across apps or websites, nor do we participate in data broker networks.</div>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🔒</div>
            <div className={styles.pillarTitle}>No Analytics SDKs</div>
            <div className={styles.pillarText}>We do not track your granular in-app behavior, actions, or keystrokes.</div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>3</div>
          <h2 className={styles.sectionTitle}>Data Retention and Deletion</h2>
        </div>
        <ul className={styles.bulletList}>
          <li className={styles.bulletItem}>
            <strong>On-Device Data:</strong> You can delete any task, archive items, or clear your data at any time directly within the app. Uninstalling the app permanently removes all local data from that device.
          </li>
          <li className={styles.bulletItem}>
            <strong>iCloud Data:</strong> You can manage or delete your iCloud data at any time via your device&rsquo;s <strong>iOS Settings &gt; [Your Apple ID] &gt; iCloud &gt; Manage Storage</strong>.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>4</div>
          <h2 className={styles.sectionTitle}>Children&rsquo;s Privacy</h2>
        </div>
        <p className={styles.paragraph}>
          TimesOut does not knowingly collect, store, or solicit personal information from children under the age of 13. All app features function locally without requiring personal data registration.
        </p>
      </section>

      {/* Section 5 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>5</div>
          <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
        </div>
        <p className={styles.paragraph}>
          We may update this Privacy Policy from time to time to reflect changes in app functionality or legal requirements. Any updates will be posted on this page with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      {/* Section 6 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>6</div>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
        </div>
        <p className={styles.paragraph}>
          If you have any questions, suggestions, or concerns regarding this Privacy Policy or your data in TimesOut, please contact us at:
        </p>
        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Developers</span>
            <span className={styles.contactValue}>Arihant Marwaha &amp; Arima Jain</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactValue}>
              <a href="mailto:timesoutsupport@gmail.com">timesoutsupport@gmail.com</a>
            </span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Website</span>
            <span className={styles.contactValue}>
              <Link href="/">timesoutapp.com</Link>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
