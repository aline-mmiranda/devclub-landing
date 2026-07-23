import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import type { PlatformModule } from '../../../data/platformModules';

import styles from './PlatformCard.module.css';

interface PlatformCardProps {
  module: PlatformModule;
  index: number;
}

const cardSizeClasses: Record<PlatformModule['size'], string> = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
};

const cardAccentClasses: Record<PlatformModule['accent'], string> = {
  green: styles.green,
  purple: styles.purple,
  neutral: styles.neutral,
};

export const PlatformCard = ({
  module,
  index,
}: PlatformCardProps): React.JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const Icon = module.icon;

  const entranceDelay = prefersReducedMotion ? 0 : index * 0.08;

  return (
    <motion.article
      className={[
        styles.card,
        cardSizeClasses[module.size],
        cardAccentClasses[module.accent],
      ].join(' ')}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              transition: {
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: entranceDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <Icon size={22} strokeWidth={1.7} />
        </div>

        <motion.div
          className={styles.actionIcon}
          aria-hidden="true"
          whileHover={prefersReducedMotion ? undefined : { x: 2, y: -2 }}
        >
          <ArrowUpRight size={18} strokeWidth={1.7} />
        </motion.div>
      </header>

      <div className={styles.content}>
        <span className={styles.eyebrow}>{module.eyebrow}</span>

        <h3 className={styles.title}>{module.title}</h3>

        <p className={styles.description}>{module.description}</p>
      </div>

      {module.metric ? (
        <div className={styles.metric}>
          <span className={styles.metricLabel}>{module.metric.label}</span>
          <strong className={styles.metricValue}>{module.metric.value}</strong>

          {module.id === 'learning-platform' ? (
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-label="Progresso geral da plataforma"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={72}
            >
              <span className={styles.progressValue} />
            </div>
          ) : null}
        </div>
      ) : null}

      {module.tags ? (
        <ul className={styles.tags} aria-label={`Recursos de ${module.title}`}>
          {module.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
};