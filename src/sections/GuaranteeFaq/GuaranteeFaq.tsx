import {
  ArrowUpRight,
  Check,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
} from 'motion/react';

import {
  faqItems,
  guaranteeSteps,
  type GuaranteeStep,
} from '../../data/guaranteeFaq';
import { Accordion } from './Accordion/Accordion';

import styles from './GuaranteeFaq.module.css';

interface GuaranteeTimelineItemProps {
  step: GuaranteeStep;
  index: number;
}

const GuaranteeTimelineItem = ({
  step,
  index,
}: GuaranteeTimelineItemProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isRefundStep = step.id === 'refund';

  return (
    <motion.li
      className={styles.timelineItem}
      data-featured={isRefundStep}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.55,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      <div className={styles.stepHeader}>
        <span className={styles.stepNumber}>{step.number}</span>

        <span
          className={styles.stepIcon}
          aria-hidden="true"
        >
          {isRefundStep ? (
            <RotateCcw strokeWidth={1.7} />
          ) : (
            <Check strokeWidth={1.9} />
          )}
        </span>
      </div>

      <div className={styles.stepContent}>
        <h3>{step.title}</h3>

        {step.description ? (
          <p>{step.description}</p>
        ) : null}
      </div>
    </motion.li>
  );
};

export const GuaranteeFaq = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="garantia"
      className={styles.section}
      aria-labelledby="guarantee-title"
    >
      <div
        className={styles.ambientGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.guaranteeArea}>
          <motion.header
            className={styles.guaranteeHeader}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            <span className={styles.eyebrow}>
              <ShieldCheck aria-hidden="true" />
              Garantia DevClub
            </span>

            <h2 id="guarantee-title">
              Risco Zero
              <span> para Você</span>
            </h2>

            <p>
              Explore a plataforma, conheça o método e tome sua
              decisão com tranquilidade.
            </p>
          </motion.header>

          <ol
            className={styles.timeline}
            aria-label="Etapas da garantia de 7 dias"
          >
            {guaranteeSteps.map((step, index) => (
              <GuaranteeTimelineItem
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </ol>
        </div>

        <div className={styles.divider} />

        <div
          id="faq"
          className={styles.faqArea}
          aria-labelledby="faq-title"
        >
          <motion.header
            className={styles.faqHeader}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            <span className={styles.eyebrow}>FAQ</span>

            <h2 id="faq-title">
              Dúvidas frequentes
            </h2>

            <p>
              As respostas essenciais antes de começar sua jornada.
            </p>
          </motion.header>

          <motion.div
            className={styles.faqContent}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            <Accordion items={faqItems} />

            <div className={styles.supportArea}>
              <div>
                <strong>Ainda ficou alguma dúvida?</strong>
                <span>
                  Nossa equipe pode ajudar você a tomar a melhor decisão.
                </span>
              </div>

              <motion.a
                className={styles.supportButton}
                href="#suporte"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
              >
                Falar com o suporte
                <ArrowUpRight aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};