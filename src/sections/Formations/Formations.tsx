import { formations } from '../../data/formations';

import { FormationCard } from './FormationCard/FormationCard';

import styles from './Formations.module.css';

export const Formations = () => {
  return (
    <section
      className={styles.section}
      id="formacoes"
      aria-labelledby="formations-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowIndicator} aria-hidden="true" />
            <span>Formações DevClub</span>
          </div>

          <div className={styles.headingGroup}>
            <h2 className={styles.title} id="formations-title">
              Escolha sua direção.
              <span>Construa o seu futuro.</span>
            </h2>

            <p className={styles.description}>
              Trilhas desenvolvidas para transformar conhecimento em projetos,
              experiência prática e novas oportunidades na tecnologia.
            </p>
          </div>
        </header>

        <div className={styles.grid}>
          {formations.map((formation, index) => (
            <FormationCard
              key={formation.id}
              formation={formation}
              position={index + 1}
            />
          ))}
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerLabel}>06 formações</span>

          <p className={styles.footerText}>
            Do primeiro código à construção de soluções completas.
          </p>
        </footer>
      </div>
    </section>
  );
};