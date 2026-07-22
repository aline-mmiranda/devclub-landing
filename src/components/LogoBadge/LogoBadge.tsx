import { motion, useReducedMotion } from "motion/react";
import type { SocialProofLogo } from "../../data/socialProofLogos";
import styles from "./LogoBadge.module.css";

interface LogoBadgeProps {
  logo: SocialProofLogo;
}

export const LogoBadge = ({ logo }: LogoBadgeProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${styles.badge} ${styles[logo.colorClass]}`}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.03,
            }
      }
      transition={{
        duration: 0.25,
      }}
      tabIndex={0}
      aria-label={logo.name}
    >
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        {logo.icon}
      </span>

      <span className={styles.label}>{logo.name}</span>
    </motion.div>
  );
};