import { motion, useReducedMotion } from "motion/react";
import { LogoBadge } from "../../components/LogoBadge/LogoBadge";
import { socialProofLogos } from "../../data/socialProofLogos";
import styles from "./SocialProof.module.css";

const marqueeItems = [...socialProofLogos, ...socialProofLogos];

export const SocialProof = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={styles.section}
      aria-labelledby="social-proof-title"
    >
      <motion.div
        className={styles.content}
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.eyebrow}>Comunidade que gera resultados</p>

        <h2
          id="social-proof-title"
          className={styles.title}
        >
          +30 mil alunos já passaram por aqui
        </h2>

        <p className={styles.subtitle}>
          Pessoas que estudam, evoluem e conquistam espaço nas maiores empresas
          e instituições do país.
        </p>
      </motion.div>

      <div
        className={styles.marquee}
        aria-label="Empresas e instituições"
      >
        <div
          className={`${styles.track} ${
            reduceMotion ? styles.trackStatic : ""
          }`}
        >
          {marqueeItems.map((logo, index) => (
            <LogoBadge
              key={`${logo.id}-${index}`}
              logo={logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;