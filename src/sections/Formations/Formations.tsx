import { useRef } from 'react';

import { formations } from '../../data/formations';
import { FormationCard } from './FormationCard/FormationCard';
import { useFormationsHorizontalScroll } from '../../hooks/useFormationsHorizontalScroll';

import styles from './Formations.module.css';

export const Formations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useFormationsHorizontalScroll({
    sectionRef,
    viewportRef,
    trackRef,
  });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="formacoes"
      aria-labelledby="formations-title"
    >
      <div className={styles.background} aria-hidden="true">
        <span className={styles.backgroundGlow} />
        <span className={styles.backgroundGrid} />
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>Formações DevClub</span>
          </div>

          <div className={styles.heading}>
            <h2 className={styles.title} id="formations-title">
              Não escolha apenas um curso.
              <span>Escolha onde quer chegar.</span>
            </h2>

            <p className={styles.description}>
              Formações completas para você desenvolver habilidades
              práticas, construir projetos reais e acelerar sua entrada
              no mercado de tecnologia.
            </p>
          </div>
        </header>

        <div ref={viewportRef} className={styles.viewport}>
          <div ref={trackRef} className={styles.track}>
            {formations.map((formation, index) => (
              <FormationCard
                key={formation.id}
                formation={formation}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollHintLabel}>
            Explore as formações
          </span>

          <span className={styles.scrollHintLine}>
            <span className={styles.scrollHintProgress} />
          </span>

          <span className={styles.scrollHintCount}>
            01 — {String(formations.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};