import { ArrowRight, Layers3, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { platformModules } from '../../data/platformModules';
import { PlatformCard } from './PlatformCard/PlatformCard';

import styles from './Platform.module.css';

export const Platform = (): React.JSX.Element => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="platform"
      className={styles.section}
      aria-labelledby="platform-title"
    >
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gridPattern} />
        <div className={styles.greenLight} />
        <div className={styles.purpleLight} />
      </div>

      <div className={styles.container}>
        <motion.header
          className={styles.heading}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.sectionLabel}>
            <Layers3 size={16} strokeWidth={1.8} aria-hidden="true" />
            <span>Uma plataforma completa</span>
          </div>

          <div className={styles.headingContent}>
            <h2 id="platform-title" className={styles.title}>
              Tudo o que você precisa para{' '}
              <span className={styles.titleAccent}>evoluir de verdade.</span>
            </h2>

            <p className={styles.subtitle}>
              Uma experiência de aprendizado que conecta conteúdo, prática,
              inteligência artificial e comunidade em um só lugar.
            </p>
          </div>
        </motion.header>

        <div className={styles.dashboard}>
          <div className={styles.dashboardHeader}>
            <div className={styles.windowControls} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className={styles.dashboardAddress}>
              <span className={styles.secureIndicator} aria-hidden="true" />
              app.devclub.com.br
            </div>

            <div className={styles.dashboardStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Online</span>
            </div>
          </div>

          <div className={styles.dashboardBody}>
            <aside
              className={styles.sidebar}
              aria-label="Navegação demonstrativa da plataforma"
            >
              <div className={styles.brand}>
                <span className={styles.brandSymbol} aria-hidden="true">
                  D
                </span>
                <span className={styles.brandName}>DevClub</span>
              </div>

              <nav className={styles.navigation}>
                {platformModules.slice(0, 4).map((module, index) => {
                  const Icon = module.icon;

                  return (
                    <div
                      key={module.id}
                      className={[
                        styles.navigationItem,
                        index === 0 ? styles.navigationItemActive : '',
                      ].join(' ')}
                    >
                      <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                      <span>{module.title}</span>
                    </div>
                  );
                })}
              </nav>

              <div className={styles.sidebarProfile}>
                <span className={styles.avatar} aria-hidden="true">
                  DC
                </span>

                <div>
                  <strong>Dev Member</strong>
                  <span>Nível 12</span>
                </div>
              </div>
            </aside>

            <div className={styles.workspace}>
              <div className={styles.workspaceHeader}>
                <div>
                  <span className={styles.workspaceEyebrow}>Visão geral</span>
                  <h3 className={styles.workspaceTitle}>Olá, Dev 👋</h3>
                </div>

                <div className={styles.streak}>
                  <Sparkles size={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>12 dias de sequência</span>
                </div>
              </div>

              <div className={styles.cardsGrid}>
                {platformModules.map((module, index) => (
                  <PlatformCard
                    key={module.id}
                    module={module}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.article
          className={styles.featureBanner}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  y: -4,
                  transition: {
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
          }
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.bannerGlow} aria-hidden="true" />

          <div className={styles.bannerVisual} aria-hidden="true">
            <span className={styles.bannerVisualLabel}>FS</span>

            <div className={styles.visualLayers}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={styles.bannerContent}>
            <span className={styles.bannerEyebrow}>Curso em destaque</span>

            <h3 className={styles.bannerTitle}>Framer Skills</h3>

            <p className={styles.bannerDescription}>
              Crie interfaces memoráveis, sites premium e experiências digitais
              que combinam design, interação e performance.
            </p>
          </div>

          <motion.a
            className={styles.bannerCta}
            href="#framer-skills"
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    x: 4,
                  }
            }
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          >
            <span>Conhecer curso</span>
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </motion.a>
        </motion.article>
      </div>
    </section>
  );
};