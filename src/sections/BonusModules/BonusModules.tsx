import { motion, useReducedMotion } from 'motion/react';

import { bonusExperts } from '../../data/bonusExperts';
import { Container } from '../../components/Container/Container';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';

import { ExpertCard } from './ExpertCard';

import styles from './BonusModules.module.css';

export const BonusModules = (): React.JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={styles.section}
      id="bonus-modules"
      aria-labelledby="bonus-modules-title"
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <Container>
        <motion.div
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.kicker}>Conteúdos exclusivos</span>

          <SectionTitle
            id="bonus-modules-title"
            title="Aprenda com quem está construindo o futuro."
            description="Módulos especiais com profissionais convidados que transformam experiência real em conhecimento aplicável."
          />
        </motion.div>

        <div
          className={styles.experts}
          role="list"
          aria-label="Especialistas convidados"
        >
          {bonusExperts.map((expert, index) => (
            <div className={styles.expertItem} role="listitem" key={expert.id}>
              <ExpertCard expert={expert} index={index} />
            </div>
          ))}
        </div>

        <p className={styles.mobileHint}>
          Deslize para conhecer os especialistas
          <span className={styles.mobileHintArrow} aria-hidden="true">
            →
          </span>
        </p>
      </Container>
    </section>
  );
};