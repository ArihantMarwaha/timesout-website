import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import RippleGrid from "@/components/RippleGrid/RippleGrid";

export default function Home() {
  return (
    <>
      <RippleGrid gridSize={64} opacity={0.02} />
      <main className={styles.main}>
      {/* =============================================
          2. HERO
          ============================================= */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} ${styles.fadeInSection}`}>Tasks, with time built in.</h1>
            <p className={`${styles.heroSubtitle} ${styles.fadeInSection}`} style={{ animationDelay: '100ms' }}>
              The aesthetic daily planner and task manager for iPhone. Organize your day, crush distractions with countdown focus timers, and keep tasks alive on your Lock Screen.
            </p>
            <div className={styles.fadeInSection} style={{ animationDelay: '200ms' }}>
              <Link href="/download" className={styles.ctaButton}>
                Download on the App Store
              </Link>
            </div>
          </div>

          <div className={styles.heroImages}>
            <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch} ${styles.heroPrimaryImg} ${styles.fadeInSection}`} style={{ animationDelay: '200ms' }}>
              <Image 
                src="/screenshots/cover-hero.jpeg" 
                alt="TimesOut aesthetic daily planner and focus timer app interface" 
                width={390} 
                height={844} 
                className={styles.phoneImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          3. TASKS
          ============================================= */}
      <section className={`${styles.section} ${styles.sectionLemon}`}>
        <div className={styles.container}>
          <div className={`${styles.storySection} ${styles.fadeInSection}`}>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>TASKS</span>
              <h2 className={styles.sectionHeading}>More than a checkbox.</h2>
              <p className={styles.sectionBody}>
                Your tasks can contain more than just a title. Set deadlines, assign priority levels, create recurring schedules, add subtasks, and attach dedicated focus sessions.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.phoneFrame}>
                <Image src="/screenshots/ref-newtask-light.jpeg" alt="TimesOut task creation screen with priority levels, subtasks, and focus timers" width={390} height={844} className={styles.phoneImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          4. ORGANIZATION
          ============================================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.storySection} ${styles.storyReverse} ${styles.fadeInSection}`}>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>ORGANIZED</span>
              <h2 className={styles.sectionHeading}>Everything has a place.</h2>
              <p className={styles.sectionBody}>
                TimesOut organizes your work into three intuitive spaces designed to keep your mind clear and your focus sharp:
              </p>
              <div className={styles.orgChips}>
                <div className={styles.orgChip}>
                  <span className={`${styles.orgChipLabel} ${styles.orgChipDaily}`}>Daily</span>
                  <span className={styles.orgChipDesc}>Tasks relevant to today.</span>
                </div>
                <div className={styles.orgChip}>
                  <span className={`${styles.orgChipLabel} ${styles.orgChipTasks}`}>Tasks</span>
                  <span className={styles.orgChipDesc}>Anytime tasks without deadlines.</span>
                </div>
                <div className={styles.orgChip}>
                  <span className={`${styles.orgChipLabel} ${styles.orgChipLongTerm}`}>Long Term</span>
                  <span className={styles.orgChipDesc}>Upcoming goals &amp; future milestones.</span>
                </div>
              </div>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.phoneFrame}>
                <Image 
                  src="/screenshots/ref-overview-blue.jpeg" 
                  alt="TimesOut organized spaces: Daily tasks, Anytime tasks, and Long Term goals" 
                  width={390} 
                  height={844} 
                  sizes="(max-width: 768px) 85vw, 390px"
                  className={styles.phoneImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          5. FOCUS
          ============================================= */}
      <section className={`${styles.section} ${styles.sectionLavender}`}>
        <div className={styles.container}>
          <div className={`${styles.storySection} ${styles.fadeInSection}`}>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>FOCUS</span>
              <h2 className={styles.sectionHeading}>When it&apos;s time, focus.</h2>
              <p className={styles.sectionBody}>
                Assign a dedicated amount of time to a task. When you&apos;re ready to work, start the timer and focus until completion.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                <Image 
                  src="/screenshots/focus-task.jpeg" 
                  alt="TimesOut active focus countdown timer with pause and complete controls" 
                  width={390} 
                  height={844} 
                  className={styles.phoneImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          6. WIDGETS
          ============================================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.featuresHeader} ${styles.fadeInSection}`}>
            <span className={styles.sectionLabel}>AT A GLANCE</span>
            <h2 className={styles.sectionHeading}>Put tasks on your Home Screen.</h2>
            <p className={styles.sectionBody} style={{ margin: '0 auto', textAlign: 'center' }}>
              Interactive widgets designed around your workflows. View Daily and Long Term tasks, add tasks quickly, or even control an active focus session right from your Home Screen.
            </p>
          </div>
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.bgPeach} ${styles.fadeInSection}`}>
              <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`} style={{ margin: '0 auto' }}>
                <Image 
                  src="/screenshots/widget-daily.jpeg" 
                  alt="Interactive iOS Home Screen widget for TimesOut daily tasks" 
                  width={390} 
                  height={844} 
                  className={styles.phoneImage} 
                />
              </div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bgSage} ${styles.fadeInSection}`} style={{ animationDelay: '100ms' }}>
              <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`} style={{ margin: '0 auto' }}>
                <Image 
                  src="/screenshots/widget-focus.jpeg" 
                  alt="TimesOut focus session widget with live pause and completion controls" 
                  width={390} 
                  height={844} 
                  className={styles.phoneImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          7. SYSTEM INTEGRATION / LIVE ACTIVITY
          ============================================= */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className={styles.container}>
          <div className={`${styles.storySection} ${styles.storyReverse} ${styles.fadeInSection}`}>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>STAYS WITH YOU</span>
              <h2 className={styles.sectionHeading}>Start once. Keep it with you.</h2>
              <p className={styles.sectionBody}>
                Start your focus session once, and keep the timer with you wherever you go. It continues to be accessible outside the main app via Live Activities and the Dynamic Island, so you never lose track of your time.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.liveFrame}>
                <Image 
                  src="/screenshots/live.png" 
                  alt="TimesOut Lock Screen Live Activity and Dynamic Island on iPhone" 
                  width={377} 
                  height={747} 
                  className={styles.phoneImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          8. SIRI / APP INTENTS
          ============================================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.storySection} ${styles.fadeInSection}`}>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>JUST ASK</span>
              <h2 className={styles.sectionHeading}>Capture a task without stopping.</h2>
              <p className={styles.sectionBody}>
                With App Intents and Siri support, you can instantly add a task using just your voice.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`} style={{ margin: '0 auto' }}>
                <Image 
                  src="/screenshots/siriscreenshot.png" 
                  alt="Hands-free Siri task capture voice command in TimesOut" 
                  width={390} 
                  height={844} 
                  className={styles.phoneImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          9. SYNC / SIGN IN WITH APPLE / ICLOUD
          ============================================= */}
      <section className={`${styles.section} ${styles.sectionSky}`}>
        <div className={styles.container}>
          <div className={`${styles.storySection} ${styles.storyReverse} ${styles.fadeInSection}`}>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>SYNCED</span>
              <h2 className={styles.sectionHeading}>Your tasks follow you.</h2>
              <p className={styles.sectionBody}>
                Sign in with Apple and keep everything synchronized across your Apple devices using iCloud.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`} style={{ margin: '0 auto' }}>
                <Image 
                  src="/screenshots/icloud-sync.png" 
                  alt="Private iCloud sync across iPhone, iPad, and Mac with TimesOut" 
                  width={390} 
                  height={844} 
                  className={styles.phoneImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          10. PERSONALIZATION / THEMES
          ============================================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.featuresHeader} ${styles.fadeInSection}`}>
            <span className={styles.sectionLabel}>MAKE IT YOURS</span>
            <h2 className={styles.sectionHeading}>Your tasks. Your colour.</h2>
            <p className={styles.sectionBody} style={{ margin: '0 auto', textAlign: 'center' }}>
              TimesOut supports multiple color themes, allowing you to personalize the appearance of your app.
            </p>
          </div>
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.bgSky} ${styles.fadeInSection}`}>
              <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`} style={{ margin: '0 auto' }}>
                <Image 
                  src="/screenshots/color-themes.png" 
                  alt="TimesOut aesthetic color themes and personalized styling" 
                  width={390} 
                  height={844} 
                  className={styles.phoneImage} 
                />
              </div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bgPeach} ${styles.fadeInSection}`} style={{ animationDelay: '100ms' }}>
              <div className={styles.phoneFrame} style={{ margin: '0 auto' }}>
                <Image src="/screenshots/ref-overview-black.jpeg" alt="TimesOut aesthetic dark theme minimalist interface" width={390} height={844} className={styles.phoneImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          11. TIMESOUT PRO
          ============================================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.proCard} ${styles.fadeInSection}`}>
            <div className={styles.proTextContent}>
              <span className={styles.sectionLabel} style={{ marginBottom: '16px' }}>PRO</span>
              <h2 className={styles.proTitle} style={{ fontSize: '3rem' }}>More room to focus.</h2>
              
              <ul className={styles.proFeatureList}>
                <li>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Unlimited active tasks
                </li>
                <li>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  30+ premium themes
                </li>
                <li>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Unlimited repetition tasks
                </li>
                <li>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Live Activities support
                </li>
              </ul>

              <div className={styles.proPricing}>
                <div className={styles.priceCard}>
                  <div>
                    <div className={styles.priceLabel}>Monthly</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '4px', opacity: 0.7 }}>1 week free trial</div>
                  </div>
                  <div className={styles.priceAmount}>$2.99</div>
                </div>
                <div className={styles.priceCard}>
                  <div>
                    <div className={styles.priceLabel}>Yearly</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '4px', opacity: 0.7 }}>$2.08 / mo &bull; 30% OFF</div>
                  </div>
                  <div className={styles.priceAmount}>$24.99</div>
                </div>
                <div className={styles.priceCard}>
                  <div>
                    <div className={styles.priceLabel}>Lifetime</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '4px', opacity: 0.7 }}>One-time &bull; Best Value</div>
                  </div>
                  <div className={styles.priceAmount}>$39.99</div>
                </div>
              </div>
            </div>

            <div className={styles.proImageContent}>
              <div className={styles.phoneFrame}>
                <Image 
                  src="/screenshots/ref-pro-paywall.jpeg" 
                  alt="TimesOut Pro subscription and lifetime purchase options" 
                  width={390} 
                  height={844} 
                  sizes="(max-width: 768px) 85vw, 390px"
                  className={styles.phoneImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          12. FINAL CTA
          ============================================= */}
      <section className={`${styles.section} ${styles.sectionSage}`} style={{ paddingBottom: '160px' }}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>Ready to focus?</h2>
            <p className={styles.heroSubtitle}>Available on iPhone.</p>
            <div className={styles.fadeInSection}>
              <Link href="/download" className={styles.ctaButton}>
                Download TimesOut
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
