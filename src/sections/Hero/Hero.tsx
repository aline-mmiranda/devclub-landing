import { useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';

import { useHeroLogoInteraction } from '../../hooks/useHeroLogoInteraction';
import { useHeroScrollSequence } from '../../hooks/useHeroScrollSequence';

import styles from './Hero.module.css';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const sequenceTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null);

  const logoAreaRef = useRef<HTMLDivElement>(null);
  const logoSurfaceRef = useRef<HTMLDivElement>(null);
  const logoGlowRef = useRef<HTMLDivElement>(null);
  const logoShineRef = useRef<HTMLDivElement>(null);

  const logoInteraction = useHeroLogoInteraction({
    areaRef: logoAreaRef,
    surfaceRef: logoSurfaceRef,
    glowRef: logoGlowRef,
    shineRef: logoShineRef,
  });

  useHeroScrollSequence({
    sectionRef,
    introRef,
    sequenceRef,
    textRef: sequenceTextRef,
    cursorRef,
    actionsRef,
    scrollIndicatorRef,
  });

  return (
    <section
      ref={sectionRef}
      id="top"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className={styles.background} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.greenLight} />
        <div className={styles.purpleLight} />
        <div className={styles.vignette} />
      </div>

      <Container>
        <div className={styles.content}>
          <div
            ref={logoAreaRef}
            className={styles.logoArea}
            aria-hidden="true"
            onPointerEnter={logoInteraction.onPointerEnter}
            onPointerMove={logoInteraction.onPointerMove}
            onPointerLeave={logoInteraction.onPointerLeave}
          >
            <div
              ref={logoGlowRef}
              className={styles.logoGlow}
            />

            <div
              ref={logoSurfaceRef}
              className={styles.logoSurface}
            >
              <div
                ref={logoShineRef}
                className={styles.logoShine}
              />

              <div className={styles.logoContent}>
                <Logo />
              </div>
            </div>
          </div>

          <div className={styles.copyStage}>
            <div
              ref={introRef}
              className={styles.intro}
            >
              <div className={styles.copy}>
                <p className={styles.eyebrow}>
                  Sua carreira em tecnologia começa aqui
                </p>

                <h1 id="hero-title" className={styles.title}>
                  Aprenda programação.
                  <span className={styles.titleHighlight}>
                    Construa o seu futuro.
                  </span>
                </h1>

                <p className={styles.description}>
                  Domine as tecnologias mais desejadas pelo mercado
                  e desenvolva projetos reais ao lado de uma
                  comunidade que transforma estudantes em
                  profissionais de tecnologia.
                </p>
              </div>
            </div>

            <div
              ref={sequenceRef}
              className={styles.sequence}
              aria-hidden="true"
            >
              <p className={styles.sequenceText}>
                <span ref={sequenceTextRef} />

                <span
                  ref={cursorRef}
                  className={styles.typingCursor}
                />
              </p>
            </div>
          </div>

          <span className={styles.srOnly}>
            Você não precisa aprender sozinho. Você precisa aprender
            do jeito certo. Aprenda IA. Aprenda Código. Construa sua
            carreira. Bem-vindo ao DevClub.
          </span>

          <div
            ref={actionsRef}
            className={styles.actions}
          >
            <a
              className={styles.primaryAction}
              href="#formacoes"
              aria-label="Conhecer as formações do DevClub"
            >
              Começar minha jornada
              <ArrowRight aria-hidden="true" />
            </a>

            <a
              className={styles.secondaryAction}
              href="#plataforma"
            >
              Conhecer a plataforma
            </a>
          </div>

          <a
            ref={scrollIndicatorRef}
            className={styles.scrollIndicator}
            href="#formacoes"
            aria-label="Ir para a próxima seção"
          >
            <span className={styles.scrollLabel}>Explore</span>

            <span className={styles.scrollIcon} aria-hidden="true">
              <ArrowDown />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
};