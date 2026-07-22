import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../../components/Container/Container';
import { ecosystemItems } from '../../data/ecosystem';
import { EcosystemCard } from './EcosystemCard/EcosystemCard';
import styles from './Ecosystem.module.css';

export const Ecosystem = (): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={styles.section}
      aria-labelledby="ecosystem-title"
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundGrid} aria-hidden="true" />

      <Container>
        <motion.header
          className={styles.header}
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.eyebrow}>
            Beyond Coding Ecosystem
          </span>

          <h2 id="ecosystem-title" className={styles.title}>
            Muito além de
            <span className={styles.highlight}> aprender código.</span>
          </h2>

          <p className={styles.description}>
            Um ecossistema completo para desenvolver suas habilidades,
            fortalecer sua confiança e transformar conhecimento em carreira.
          </p>
        </motion.header>

        <div className={styles.grid}>
          {ecosystemItems.map((item, index) => (
            <EcosystemCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};