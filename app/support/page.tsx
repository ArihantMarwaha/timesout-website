import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Support & FAQs — TimesOut',
  description:
    'Get help, explore frequently asked questions, and learn how to use TimesOut focus sessions, widgets, and iCloud sync.',
  alternates: {
    canonical: 'https://timesoutapp.vercel.app/support',
  },
};

export default function SupportPage() {
  const faqs = [
    {
      question: 'How do I create a new task?',
      answer: 'Tap the + button in the bottom right corner. Fill in the task name, set a repeat schedule, add a due date, create focus sessions, set priority, and add subtasks.',
    },
    {
      question: 'What are the task categories?',
      answer: 'TimesOut organizes your tasks into three categories: Daily for today\'s tasks, Tasks for anytime items, and Long Term for upcoming goals.',
    },
    {
      question: 'How do Focus Sessions work?',
      answer: 'Each task can have a dedicated focus session with a countdown timer. Start the timer from your task card to track focused time on that task.',
    },
    {
      question: 'What are Priority levels?',
      answer: 'Tasks can be assigned one of three priority levels to help you identify what needs attention first.',
    },
    {
      question: 'Can I set recurring tasks?',
      answer: 'Yes. When creating or editing a task, you can set it to repeat Daily, Weekly, or Monthly.',
    },
    {
      question: 'Does TimesOut have widgets?',
      answer: 'Yes. TimesOut includes Home Screen widgets and Lock Screen widgets, plus Live Activities and Dynamic Island support to keep your tasks and timers visible.',
    },
    {
      question: 'Can I add tasks with Siri?',
      answer: 'Yes, TimesOut supports App Intents and Siri. You can add tasks directly using voice commands.',
    },
    {
      question: 'Does TimesOut sync with iCloud?',
      answer: 'Yes, TimesOut syncs your tasks securely across your Apple devices using iCloud when you are signed in.',
    },
    {
      question: 'How do themes work?',
      answer: 'TimesOut supports multiple color themes. You can personalize the appearance of your app by selecting a theme that matches your style.',
    },
    {
      question: 'What is TimesOut Pro?',
      answer: 'TimesOut Pro unlocks unlimited active tasks, all premium themes, unlimited repetition tasks, and Live Activities support. It is available as a monthly, yearly, or one-time lifetime purchase.',
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className={styles.title}>Support</h1>
      <p className={styles.subtitle}>Find answers or get in touch.</p>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.details}>
              <summary className={styles.summary}>{faq.question}</summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.contactCard}>
        <h2>Still need help?</h2>
        <p>Reach out to us and we’ll get back to you as soon as possible.</p>
        <a 
          href="mailto:timesoutsupport@gmail.com" 
          className={styles.emailButton} 
          aria-label="Email TimesOut support at timesoutsupport@gmail.com"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          timesoutsupport@gmail.com
        </a>
      </section>
    </main>
  );
}
