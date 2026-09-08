'use client';

import { useState } from 'react';
import styles from './ExpandableText.module.css';

interface ExpandableTextProps {
  summary: string;
  details?: string;
  className?: string;
  align?: 'center' | 'left';
}

export default function ExpandableText({
  summary,
  details,
  className,
  align = 'center',
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!details) {
    return <p className={className}>{summary}</p>;
  }

  return (
    <div
      className={`${styles.container} ${align === 'left' ? styles.alignLeft : styles.alignCenter} ${className || ''}`}
    >
      <p className={styles.summaryText}>
        {summary}
        <span className={styles.desktopOnly}> {details}</span>
      </p>

      <div
        className={`${styles.accordion} ${isExpanded ? styles.expanded : ''}`}
        aria-hidden={!isExpanded}
      >
        <div className={styles.accordionInner}>
          <p className={styles.detailsText}>{details}</p>
        </div>
      </div>

      <button
        type="button"
        className={styles.toggleBtn}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Show less text' : 'Read more details'}
      >
        <span>{isExpanded ? 'Show less' : 'Read more'}</span>
        <svg
          className={`${styles.icon} ${isExpanded ? styles.iconOpen : ''}`}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}
