import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  communityTestimonials,
  featuredCommunityTestimonial,
} from '../../data/communityTestimonials';
import { Container } from '../../components/Container/Container';
import { TestimonialCard } from './TestimonialCard/TestimonialCard';
import styles from './Community.module.css';

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const reducedHeadingVariants: Variants = {
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

export const Community = () => {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  return (
    <section
      className={styles.section}
      id="community"
      aria-labelledby="community-title"
    >
      <div className={styles.background} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.greenGlow} />
        <div className={styles.purpleGlow} />
      </div>

      <Container>
        <motion.header
          className={styles.header}
          variants={
            reducedMotion ? reducedHeadingVariants : headingVariants
          }
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <span className={styles.eyebrow}>Comunidade DevClub</span>

          <h2 className={styles.title} id="community-title">
            Milhares de vidas
            <span> transformadas.</span>
          </h2>

          <p className={styles.description}>
            Histórias de pessoas que decidiram construir um novo caminho
            através da tecnologia.
          </p>
        </motion.header>

        <div className={styles.testimonials}>
          <TestimonialCard
            testimonial={featuredCommunityTestimonial}
            reducedMotion={reducedMotion}
          />

          <div
            className={styles.masonry}
            aria-label="Mais histórias da comunidade"
          >
            {communityTestimonials.map((testimonial, index) => (
              <div className={styles.masonryItem} key={testimonial.id}>
                <TestimonialCard
                  testimonial={testimonial}
                  index={index + 1}
                  reducedMotion={reducedMotion}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};