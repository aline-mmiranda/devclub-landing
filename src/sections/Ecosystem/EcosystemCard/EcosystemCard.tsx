import type React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { EcosystemItem } from '../../../data/ecosystem';
import styles from './EcosystemCard.module.css';

interface EcosystemCardProps {
  item: EcosystemItem;
  index: number;
}

const layoutClasses: Record<EcosystemItem['layout'], string> = {
  featured: styles.featured,
  wide: styles.wide,
  standard: styles.standard,
  compact: styles.compact,
};

const toneClasses: Record<EcosystemItem['tone'], string> = {
  green: styles.green,
  purple: styles.purple,
  blue: styles.blue,
  orange: styles.orange,
  pink: styles.pink,
  cyan: styles.cyan,
  neutral: styles.neutral,
};

const gridClasses: Record<EcosystemItem['gridClass'], string> = {
  recruiter: styles.recruiter,
  therapist: styles.therapist,
  mentoring: styles.mentoring,
  aiAgents: styles.aiAgents,
  support: styles.support,
  community: styles.community,
  jobs: styles.jobs,
};

export const EcosystemCard = ({
  item,
  index,
}: EcosystemCardProps): React.JSX.Element => {
  const shouldReduceMotion = useReducedMotion();
  const Icon = item.icon;

  const cardClassName = [
    styles.card,
    layoutClasses[item.layout],
    toneClasses[item.tone],
    gridClasses[item.gridClass],
  ].join(' ');

  return (
    <motion.article
      className={cardClassName}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              scale: 0.98,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.01,
            }
      }
      viewport={{
        once: true,
        amount: 0.22,
      }}
      transition={{
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <header className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <Icon
            className={styles.icon}
            aria-hidden="true"
            strokeWidth={1.7}
          />
        </div>

        <span className={styles.eyebrow}>{item.eyebrow}</span>
      </header>

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>

      <div className={styles.decorativeLine} aria-hidden="true">
        <span className={styles.decorativeDot} />
      </div>
    </motion.article>
  );
};