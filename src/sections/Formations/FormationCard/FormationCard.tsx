import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  Layers3,
  ServerCog,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';

import type {
  Formation,
  FormationIcon,
} from '../../../types/formation';

import styles from './FormationCard.module.css';

interface FormationCardProps {
  formation: Formation;
  index: number;
}

const formationIcons: Record<FormationIcon, LucideIcon> = {
  code: Code2,
  server: ServerCog,
  layers: Layers3,
  smartphone: Smartphone,
  bot: Bot,
  chart: BarChart3,
};

const formatIndex = (index: number): string =>
  String(index + 1).padStart(2, '0');

export const FormationCard = ({
  formation,
  index,
}: FormationCardProps) => {
  const Icon = formationIcons[formation.icon];

  return (
    <motion.article
      className={styles.card}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      whileTap={{
        scale: 0.99,
      }}
    >
      <div className={styles.top}>
        <span className={styles.index} aria-hidden="true">
          {formatIndex(index)}
        </span>

        <div className={styles.iconWrapper} aria-hidden="true">
          <Icon className={styles.icon} strokeWidth={1.6} />
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{formation.name}</h3>

        <p className={styles.description}>
          {formation.description}
        </p>

        <ul
          className={styles.tags}
          aria-label={`Tecnologias da formação ${formation.name}`}
        >
          {formation.tags.map((tag) => (
            <li className={styles.tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <a
        className={styles.cta}
        href={formation.href}
        aria-label={`${formation.ctaLabel}: ${formation.name}`}
      >
        <span>{formation.ctaLabel}</span>

        <ArrowUpRight
          className={styles.ctaIcon}
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </a>

      <span className={styles.glow} aria-hidden="true" />
    </motion.article>
  );
};