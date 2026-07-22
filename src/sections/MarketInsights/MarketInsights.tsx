import { motion, useReducedMotion } from 'motion/react';

import { salaryMarkets } from '../../data/marketInsights';
import { Container } from '../../components/Container/Container';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';

import { SalaryChart } from './SalaryChart/SalaryChart';

import styles from './MarketInsights.module.css';

export const MarketInsights = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="market-insights"
      className={styles.section}
      aria-labelledby="market-insights-title"
    >
      <Container>
        <div className={styles.header}>
          <SectionTitle
            eyebrow="Market Insights"
            title="Sua carreira pode ir muito além."
            description="Compare as médias salariais anuais por nível de experiência no Brasil e no mercado internacional."
          />

          <motion.div
            className={styles.insight}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={styles.insightValue}>2 mercados</span>
            <span className={styles.insightLabel}>
              uma habilidade global
            </span>
          </motion.div>
        </div>

        <div
          className={styles.charts}
          aria-label="Comparação salarial por mercado"
        >
          {salaryMarkets.map((market, index) => (
            <SalaryChart
              key={market.id}
              market={market}
              index={index}
            />
          ))}
        </div>

        <motion.p
          className={styles.disclaimer}
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.25,
          }}
        >
          Valores anuais apresentados para fins comparativos. Cada gráfico
          utiliza sua maior faixa salarial como referência visual.
        </motion.p>
      </Container>

      <div className={styles.ambientGlow} aria-hidden="true" />
    </section>
  );
};