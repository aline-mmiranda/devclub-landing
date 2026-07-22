import type { Formation } from '../../../types/formation';

import styles from './FormationCard.module.css';

interface FormationCardProps {
  formation: Formation;
  position: number;
}

const formatPosition = (position: number): string =>
  String(position).padStart(2, '0');

export const FormationCard = ({
  formation,
  position,
}: FormationCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.position} aria-hidden="true">
          {formatPosition(position)}
        </span>

        <span className={styles.status}>Formação</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{formation.title}</h3>

        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>

      <div className={styles.decoration} aria-hidden="true">
        <span className={styles.decorationLine} />
        <span className={styles.decorationDot} />
      </div>
    </article>
  );
};