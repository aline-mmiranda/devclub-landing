import { motion, type Variants } from 'motion/react';
import type { CommunityTestimonial } from '../../data/communityTestimonials';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  testimonial: CommunityTestimonial;
  index?: number;
  reducedMotion: boolean;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      delay: Math.min(index * 0.08, 0.48),
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const reducedMotionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const TestimonialCard = ({
  testimonial,
  index = 0,
  reducedMotion,
}: TestimonialCardProps) => {
  const isFeatured = testimonial.size === 'featured';

  const cardClassName = [
    styles.card,
    styles[testimonial.size],
    isFeatured ? styles.featuredCard : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.article
      className={cardClassName}
      variants={reducedMotion ? reducedMotionVariants : cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: isFeatured ? 0.25 : 0.15,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: isFeatured ? -6 : -8,
              scale: isFeatured ? 1.004 : 1.012,
              transition: {
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      tabIndex={0}
      aria-label={`Depoimento de ${testimonial.name}`}
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.cardContent}>
        <div className={styles.quoteSymbol} aria-hidden="true">
          “
        </div>

        {testimonial.highlight ? (
          <p className={styles.highlight}>{testimonial.highlight}</p>
        ) : null}

        <blockquote className={styles.quote}>
          <p>{testimonial.quote}</p>
        </blockquote>

        <footer className={styles.author}>
          <div className={styles.avatar} aria-hidden="true">
            <span>{testimonial.initials}</span>
          </div>

          <div className={styles.authorInformation}>
            <cite className={styles.name}>{testimonial.name}</cite>

            {testimonial.role ? (
              <span className={styles.role}>{testimonial.role}</span>
            ) : null}
          </div>
        </footer>
      </div>
    </motion.article>
  );
};