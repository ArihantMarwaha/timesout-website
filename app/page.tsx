import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import RippleGrid from "@/components/RippleGrid/RippleGrid";
import ExpandableText from "@/app/components/ExpandableText";

export default function Home() {
  return (
    <>
      <RippleGrid gridSize={64} opacity={0.02} />
      <main className={styles.main}>
        {/* =============================================
            1. HERO
            ============================================= */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroAppIconWrapper} ${styles.fadeInSection}`}>
                <Image 
                  src="/app-icon.png" 
                  alt="TimesOut App Icon" 
                  width={96} 
                  height={96} 
                  className={styles.heroAppIcon}
                  priority
                />
              </div>
              <h1 className={`${styles.heroTitle} ${styles.fadeInSection}`}>
                <span className={styles.heroHighlight}>Tasks == TimesOut</span>
              </h1>
              <ExpandableText
                summary="The aesthetic daily planner and task manager for iPhone and iPad."
                details="Organize your day, crush distractions with countdown focus timers, and keep tasks alive on your Lock Screen."
                className={styles.fadeInSection}
                align="center"
              />
              <div className={styles.fadeInSection} style={{ animationDelay: '200ms', marginTop: '16px' }}>
                <Link href="/download" className={styles.ctaButton}>
                  Download on the App Store
                </Link>
              </div>
            </div>

            <div className={styles.heroImages}>
              <div className={styles.heroTriptych}>
                {/* Left Phone (Daily) - behind middle */}
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch} ${styles.heroLeftPhone} ${styles.fadeInSection}`} style={{ animationDelay: '150ms' }}>
                  <Image 
                    src="/screenshots/hero-daily.jpeg" 
                    alt="TimesOut daily task checklist interface" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 140px, 240px"
                    className={styles.phoneImage}
                  />
                </div>

                {/* Middle Primary Phone - in front */}
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch} ${styles.heroCenterPhone} ${styles.fadeInSection}`} style={{ animationDelay: '100ms' }}>
                  <Image 
                    src="/screenshots/cover-hero.jpeg" 
                    alt="TimesOut aesthetic daily planner and focus timer" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 180px, 270px"
                    className={styles.phoneImage}
                    priority
                  />
                </div>

                {/* Right Phone (Tasks) - behind middle */}
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch} ${styles.heroRightPhone} ${styles.fadeInSection}`} style={{ animationDelay: '200ms' }}>
                  <Image 
                    src="/screenshots/hero-tasks.jpeg" 
                    alt="TimesOut task management overview" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 140px, 240px"
                    className={styles.phoneImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            2. TASKS
            ============================================= */}
        <section className={`${styles.section} ${styles.sectionPink}`}>
          <div className={styles.container}>
            <div className={`${styles.storySection} ${styles.fadeInSection}`}>
              <div className={styles.storyContent}>
                <span className={styles.sectionLabel}>TASKS</span>
                <h2 className={styles.sectionHeading}>More than a checkbox.</h2>
                <ExpandableText
                  summary="Your tasks can contain more than just a title."
                  details="Set deadlines, assign priority levels, create recurring schedules, add subtasks, and attach dedicated focus sessions."
                  align="left"
                />
              </div>
              <div className={styles.storyImage}>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/ref-newtask-light.jpeg" 
                    alt="TimesOut task creation screen with priority levels, subtasks, and focus timers" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 245px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            3. ORGANIZATION
            ============================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.storySection} ${styles.storyReverse} ${styles.fadeInSection}`}>
              <div className={styles.storyContent}>
                <span className={styles.sectionLabel}>ORGANIZED</span>
                <h2 className={styles.sectionHeading}>Everything has a place.</h2>
                <ExpandableText
                  summary="TimesOut organizes your work into three intuitive spaces."
                  details="Keep your mind clear and your focus sharp with dedicated views for Daily tasks, anytime items, and Long Term goals."
                  align="left"
                />
                <div className={`${styles.spacesSegmented} ${styles.spacesDesktopOnly}`} role="group" aria-label="TimesOut Spaces">
                  <div className={`${styles.spacePill} ${styles.spacePillDaily}`}>
                    <span>☀️</span> Daily
                  </div>
                  <div className={`${styles.spacePill} ${styles.spacePillTasks}`}>
                    <span>⚡</span> Tasks
                  </div>
                  <div className={`${styles.spacePill} ${styles.spacePillLongTerm}`}>
                    <span>🗓️</span> Long Term
                  </div>
                </div>
              </div>
              <div className={styles.storyImage}>
                <div className={styles.spacesPhoneWrapper}>
                  <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                    <Image 
                      src="/screenshots/11.jpeg" 
                      alt="TimesOut task archive and focus session interface" 
                      width={390} 
                      height={844} 
                      sizes="(max-width: 768px) 245px, 390px"
                      className={styles.phoneImage} 
                    />
                  </div>
                  <div className={`${styles.spacesSegmented} ${styles.spacesMobileOnly}`} role="group" aria-label="TimesOut Spaces">
                    <div className={`${styles.spacePill} ${styles.spacePillDaily}`}>
                      <span>☀️</span> Daily
                    </div>
                    <div className={`${styles.spacePill} ${styles.spacePillTasks}`}>
                      <span>⚡</span> Tasks
                    </div>
                    <div className={`${styles.spacePill} ${styles.spacePillLongTerm}`}>
                      <span>🗓️</span> Long Term
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            4. FOCUS
            ============================================= */}
        <section className={`${styles.section} ${styles.sectionOrange}`}>
          <div className={styles.container}>
            <div className={`${styles.storySection} ${styles.fadeInSection}`}>
              <div className={styles.storyContent}>
                <span className={styles.sectionLabel}>FOCUS</span>
                <h2 className={styles.sectionHeading}>When it&apos;s time, focus.</h2>
                <ExpandableText
                  summary="Assign a dedicated amount of time to any task."
                  details="When you&apos;re ready to work, start the countdown timer and stay locked in until completion."
                  align="left"
                />
              </div>
              <div className={styles.storyImage}>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/focus-task.jpeg" 
                    alt="TimesOut active focus countdown timer with pause and complete controls" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 245px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            5. WIDGETS
            ============================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.featuresHeader} ${styles.fadeInSection}`}>
              <span className={styles.sectionLabel}>AT A GLANCE</span>
              <h2 className={styles.sectionHeading}>Put tasks on your Home Screen.</h2>
              <ExpandableText
                summary="Interactive widgets designed around your workflows."
                details="View Daily and Long Term tasks, add tasks quickly, or control an active focus session right from your Home Screen."
                align="center"
              />
              <div className={styles.swipeBadge}>✦ Swipe to explore ✦</div>
            </div>
            <div className={`${styles.bentoGrid} noScrollbar`}>
              <div className={`${styles.bentoCard} ${styles.bgPeach} ${styles.fadeInSection}`}>
                <div className={styles.bentoCardHeader}>
                  <h3 className={styles.bentoCardTitle}>Daily Tasks Widget</h3>
                  <span className={styles.bentoCardSubtitle}>Keep your day in view</span>
                </div>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/widget-daily.jpeg" 
                    alt="Interactive iOS Home Screen widget for TimesOut daily tasks" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 220px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
              <div className={`${styles.bentoCard} ${styles.bgSage} ${styles.fadeInSection}`} style={{ animationDelay: '100ms' }}>
                <div className={styles.bentoCardHeader}>
                  <h3 className={styles.bentoCardTitle}>Focus Session Widget</h3>
                  <span className={styles.bentoCardSubtitle}>Pause and complete live</span>
                </div>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/widget-focus.jpeg" 
                    alt="TimesOut focus session widget with live pause and completion controls" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 220px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            6. SYSTEM INTEGRATION / LIVE ACTIVITY
            ============================================= */}
        <section className={`${styles.section} ${styles.sectionPeach}`}>
          <div className={styles.container}>
            <div className={`${styles.storySection} ${styles.storyReverse} ${styles.fadeInSection}`}>
              <div className={styles.storyContent}>
                <span className={styles.sectionLabel}>STAYS WITH YOU</span>
                <h2 className={styles.sectionHeading}>Start once. Keep it with you.</h2>
                <ExpandableText
                  summary="Start your focus session once, and keep the timer with you wherever you go."
                  details="Your active countdown stays easily accessible outside the app via Live Activities and the Dynamic Island."
                  align="left"
                />
              </div>
              <div className={styles.storyImage}>
                <div className={styles.liveFrame}>
                  <Image 
                    src="/screenshots/live.png" 
                    alt="TimesOut Lock Screen Live Activity and Dynamic Island on iPhone" 
                    width={377} 
                    height={747} 
                    sizes="(max-width: 768px) 245px, 377px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            7. SIRI / APP INTENTS
            ============================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.storySection} ${styles.fadeInSection}`}>
              <div className={styles.storyContent}>
                <span className={styles.sectionLabel}>JUST ASK</span>
                <h2 className={styles.sectionHeading}>Capture a task without stopping.</h2>
                <ExpandableText
                  summary="Add tasks hands-free using just your voice."
                  details="With App Intents and Siri voice commands, capture thoughts instantly without breaking your focus or leaving your current task."
                  align="left"
                />
              </div>
              <div className={styles.storyImage}>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/siriscreenshot.png" 
                    alt="Hands-free Siri task capture voice command in TimesOut" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 245px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            8. SYNC / SIGN IN WITH APPLE / ICLOUD
            ============================================= */}
        <section className={`${styles.section} ${styles.sectionSky}`}>
          <div className={styles.container}>
            <div className={`${styles.storySection} ${styles.storyReverse} ${styles.fadeInSection}`}>
              <div className={styles.storyContent}>
                <span className={styles.sectionLabel}>SYNCED</span>
                <h2 className={styles.sectionHeading}>Your tasks follow you.</h2>
                <ExpandableText
                  summary="Keep everything synchronized across your Apple devices."
                  details="Sign in with Apple to sync seamlessly across iPhone and iPad using private, encrypted iCloud storage."
                  align="left"
                />
              </div>
              <div className={styles.storyImage}>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/icloud-sync.png" 
                    alt="Private iCloud sync across iPhone and iPad with TimesOut" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 245px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            9. PERSONALIZATION / THEMES
            ============================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.featuresHeader} ${styles.fadeInSection}`}>
              <span className={styles.sectionLabel}>MAKE IT YOURS</span>
              <h2 className={styles.sectionHeading}>Your tasks. Your colour.</h2>
              <ExpandableText
                summary="Personalize your daily workspace with curated color themes."
                details="Choose from light, dark, pastel, and high-contrast palettes designed to match your personal aesthetic."
                align="center"
              />
              <div className={styles.swipeBadge}>✦ Swipe to explore ✦</div>
            </div>
            <div className={`${styles.bentoGrid} noScrollbar`}>
              <div className={`${styles.bentoCard} ${styles.bgSky} ${styles.fadeInSection}`}>
                <div className={styles.bentoCardHeader}>
                  <h3 className={styles.bentoCardTitle}>Curated Palettes</h3>
                  <span className={styles.bentoCardSubtitle}>30+ vibrant themes</span>
                </div>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/color-themes.png" 
                    alt="TimesOut aesthetic color themes and personalized styling" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 220px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
              <div className={`${styles.bentoCard} ${styles.bgPeach} ${styles.fadeInSection}`} style={{ animationDelay: '100ms' }}>
                <div className={styles.bentoCardHeader}>
                  <h3 className={styles.bentoCardTitle}>Minimal Dark Theme</h3>
                  <span className={styles.bentoCardSubtitle}>Pure OLED contrast</span>
                </div>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/ref-overview-black.jpeg" 
                    alt="TimesOut aesthetic dark theme minimalist interface" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 220px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            10. TIMESOUT PRO
            ============================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.proCard} ${styles.fadeInSection}`}>
              <div className={styles.proTextContent}>
                <span className={styles.sectionLabel} style={{ marginBottom: '12px' }}>PRO</span>
                <h2 className={styles.proTitle}>More room to focus.</h2>
                <p className={styles.proSubtitle}>Unlock the ultimate productivity toolkit.</p>
                
                <ul className={styles.proFeatureList}>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Unlimited active tasks
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    30+ premium themes
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Unlimited repetition tasks
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Live Activities support
                  </li>
                </ul>

                <div className={styles.proPricing}>
                  <div className={styles.priceCard}>
                    <div>
                      <div className={styles.priceLabel}>Monthly</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, marginTop: '2px', opacity: 0.75 }}>1 week free trial</div>
                    </div>
                    <div className={styles.priceAmount}>$2.99</div>
                  </div>
                  <div className={styles.priceCard}>
                    <div>
                      <div className={styles.priceLabel}>Yearly</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, marginTop: '2px', opacity: 0.75 }}>$2.08 / mo &bull; 30% OFF</div>
                    </div>
                    <div className={styles.priceAmount}>$24.99</div>
                  </div>
                  <div className={styles.priceCard}>
                    <div>
                      <div className={styles.priceLabel}>Lifetime</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, marginTop: '2px', opacity: 0.75 }}>One-time &bull; Best Value</div>
                    </div>
                    <div className={styles.priceAmount}>$39.99</div>
                  </div>
                </div>
              </div>

              <div className={styles.proImageContent}>
                <div className={`${styles.phoneFrame} ${styles.phoneFrameNoNotch}`}>
                  <Image 
                    src="/screenshots/ref-pro-paywall.jpeg" 
                    alt="TimesOut Pro subscription and lifetime purchase options" 
                    width={390} 
                    height={844} 
                    sizes="(max-width: 768px) 220px, 390px"
                    className={styles.phoneImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            11. FINAL CTA
            ============================================= */}
        <section className={`${styles.section} ${styles.sectionSage}`} style={{ paddingBottom: '100px' }}>
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
