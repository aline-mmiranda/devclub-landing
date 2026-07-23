import { motion, useReducedMotion } from 'motion/react';

import type {
  CareerLevel,
  SalaryData,
  SalaryMarket,
} from '../../../data/marketInsights';

import styles from './SalaryChart.module.css';

interface SalaryChartProps {
  market: SalaryMarket;
  index: number;
}

interface SalaryBarProps {
  salary: SalaryData;
  maximumValue: number;
  marketId: SalaryMarket['id'];
  index: number;
}

const getBarSizeClass = (
  marketId: SalaryMarket['id'],
  level: SalaryData['level'],
): string => {
  const sizeClasses: Record<SalaryMarket['id'], Record<CareerLevel, string>> = {
    brazil: {
      Júnior: styles.brazilJunior,
      Pleno: styles.brazilMid,
      Sênior: styles.brazilSenior,
    },
    international: {
      Júnior: styles.internationalJunior,
      Pleno: styles.internationalMid,
      Sênior: styles.internationalSenior,
    },
  };

  return sizeClasses[marketId][level];
};

const SalaryBar = ({
  salary,
  maximumValue,
  marketId,
  index,
}: SalaryBarProps) => {
  const shouldReduceMotion = useReducedMotion();
  const percentage = Math.round((salary.value / maximumValue) * 100);
  const sizeClass = getBarSizeClass(marketId, salary.level);

  const tooltipId = `${marketId}-${salary.level
    .toLowerCase()
    .replace('ê', 'e')}-tooltip`;

  return (
    <li className={styles.salaryItem}>
      <div className={styles.salaryHeader}>
        <span className={styles.level}>{salary.level}</span>

        <span className={styles.mobileValue}>
          {salary.formattedValue}
        </span>
      </div>

      <div
        className={styles.track}
        aria-label={`${salary.level}: ${salary.formattedValue}`}
      >
        <motion.button
          type="button"
          className={`${styles.bar} ${sizeClass}`}
          aria-describedby={tooltipId}
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.7,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            delay: shouldReduceMotion ? 0 : index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scaleY: 1.08,
                }
          }
          whileTap={
            shouldReduceMotion
              ? undefined
              : {
                  scaleY: 0.96,
                }
          }
        >
          <span className={styles.barGlow} aria-hidden="true" />

          <span className={styles.desktopValue}>
            {salary.formattedValue}
          </span>

          <span
            id={tooltipId}
            className={styles.tooltip}
            role="tooltip"
          >
            <span className={styles.tooltipLevel}>
              Desenvolvedor {salary.level}
            </span>

            <strong className={styles.tooltipValue}>
              {salary.formattedValue}
            </strong>

            <span className={styles.tooltipPercentage}>
              {percentage}% da maior faixa
            </span>
          </span>
        </motion.button>
      </div>
    </li>
  );
};

export const SalaryChart = ({
  market,
  index,
}: SalaryChartProps) => {
  const shouldReduceMotion = useReducedMotion();

  const maximumValue = Math.max(
    ...market.salaries.map((salary: SalaryData) => salary.value),
  );

  return (
    <motion.article
      className={`${styles.chart} ${styles[market.id]}`}
      aria-labelledby={`${market.id}-chart-title`}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <header className={styles.chartHeader}>
        <div>
          <span className={styles.eyebrow}>
            Mercado {market.label}
          </span>

          <h3
            id={`${market.id}-chart-title`}
            className={styles.title}
          >
            {market.label}
          </h3>
        </div>

        <span className={styles.currency}>
          {market.currencyLabel}
        </span>
      </header>

      <p className={styles.description}>
        {market.description}
      </p>

      <ol className={styles.salaryList}>
        {market.salaries.map((salary: SalaryData, salaryIndex: number) => (
          <SalaryBar
            key={`${market.id}-${salary.level}`}
            salary={salary}
            maximumValue={maximumValue}
            marketId={market.id}
            index={salaryIndex}
          />
        ))}
      </ol>

      <footer className={styles.chartFooter}>
        <span>Faixa inicial</span>
        <span>Maior faixa</span>
      </footer>
    </motion.article>
  );
};