import { motion, useReducedMotion } from 'motion/react';

import type { BonusExpert } from '../../data/bonusExperts';

import styles from './ExpertCard.module.css';

interface ExpertCardProps {
  expert: BonusExpert;
  index: number;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const ExpertCard = ({
  expert,
  index,
}: ExpertCardProps): React.JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={styles.card}
      variants={shouldReduceMotion ? undefined : cardVariants}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.09, 0.36),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
              scale: 1.015,
            }
      }
      whileFocus={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.01,
            }
      }
      tabIndex={0}
      aria-labelledby={`${expert.id}-name`}
      aria-describedby={`${expert.id}-specialty`}
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.media}>
        <img
          className={styles.image}
          src={expert.image}
          alt={`Foto de ${expert.name}`}
          width="640"
          height="800"
          loading="lazy"
          decoding="async"
        />

        <div className={styles.imageOverlay} aria-hidden="true" />
        <div className={styles.imageHighlight} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Especialista convidado</span>

        <h3 className={styles.name} id={`${expert.id}-name`}>
          {expert.name}
        </h3>

        <p className={styles.specialty} id={`${expert.id}-specialty`}>
          {expert.specialty}
        </p>
      </div>
    </motion.article>
  );
};