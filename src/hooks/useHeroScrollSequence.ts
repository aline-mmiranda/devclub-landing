import {
  type RefObject,
  useLayoutEffect,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_PHRASES = [
  'Você não precisa aprender sozinho.',
  'Você precisa aprender do jeito certo.',
  'Aprenda IA.',
  'Aprenda Código.',
  'Construa sua carreira.',
  'Bem-vindo ao DevClub.',
] as const;

interface UseHeroScrollSequenceParams {
  sectionRef: RefObject<HTMLElement | null>;
  introRef: RefObject<HTMLDivElement | null>;
  sequenceRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLSpanElement | null>;
  cursorRef: RefObject<HTMLSpanElement | null>;
  actionsRef: RefObject<HTMLDivElement | null>;
  scrollIndicatorRef: RefObject<HTMLAnchorElement | null>;
}

interface TypingState {
  characterCount: number;
}

interface SequenceConfig {
  scrub: number;
  scrollPerPhrase: number;
  typeDurationMultiplier: number;
  deleteDurationMultiplier: number;
  pauseDuration: number;
  initialTransitionDuration: number;
}

const DESKTOP_CONFIG: SequenceConfig = {
  scrub: 0.75,
  scrollPerPhrase: 72,
  typeDurationMultiplier: 0.032,
  deleteDurationMultiplier: 0.018,
  pauseDuration: 0.38,
  initialTransitionDuration: 0.45,
};

const MOBILE_CONFIG: SequenceConfig = {
  scrub: 0.3,
  scrollPerPhrase: 48,
  typeDurationMultiplier: 0.022,
  deleteDurationMultiplier: 0.012,
  pauseDuration: 0.2,
  initialTransitionDuration: 0.3,
};

const updateTypedText = (
  element: HTMLSpanElement,
  phrase: string,
  state: TypingState,
) => {
  const characterCount = Math.round(state.characterCount);

  element.textContent = phrase.slice(0, characterCount);
};

const addPhraseToTimeline = (
  timeline: gsap.core.Timeline,
  textElement: HTMLSpanElement,
  phrase: string,
  isLastPhrase: boolean,
  config: SequenceConfig,
) => {
  const typingState: TypingState = {
    characterCount: 0,
  };

  timeline.to(typingState, {
    characterCount: phrase.length,
    duration: Math.max(
      phrase.length * config.typeDurationMultiplier,
      0.25,
    ),
    ease: 'none',
    onUpdate: () => {
      updateTypedText(textElement, phrase, typingState);
    },
  });

  timeline.to({}, {
    duration: isLastPhrase
      ? config.pauseDuration * 1.8
      : config.pauseDuration,
  });

  if (isLastPhrase) {
    return;
  }

  timeline.to(typingState, {
    characterCount: 0,
    duration: Math.max(
      phrase.length * config.deleteDurationMultiplier,
      0.18,
    ),
    ease: 'none',
    onUpdate: () => {
      updateTypedText(textElement, phrase, typingState);
    },
  });

  timeline.to({}, {
    duration: config.pauseDuration * 0.35,
  });
};

export const useHeroScrollSequence = ({
  sectionRef,
  introRef,
  sequenceRef,
  textRef,
  cursorRef,
  actionsRef,
  scrollIndicatorRef,
}: UseHeroScrollSequenceParams) => {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const sequence = sequenceRef.current;
    const text = textRef.current;
    const cursor = cursorRef.current;
    const actions = actionsRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (
      !section
      || !intro
      || !sequence
      || !text
      || !cursor
      || !actions
      || !scrollIndicator
    ) {
      return undefined;
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      const createSequence = (config: SequenceConfig) => {
        text.textContent = '';

        gsap.set(sequence, {
          autoAlpha: 0,
        });

        gsap.set(cursor, {
          autoAlpha: 1,
        });

        const timeline = gsap.timeline({
          defaults: {
            overwrite: 'auto',
          },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => {
              const minimumDistance = window.innerHeight * 3.25;
              const phraseDistance =
                window.innerHeight
                * HERO_PHRASES.length
                * (config.scrollPerPhrase / 100);

              return `+=${Math.max(minimumDistance, phraseDistance)}`;
            },
            pin: true,
            pinSpacing: true,
            scrub: config.scrub,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        timeline
          .to(
            [intro, actions, scrollIndicator],
            {
              autoAlpha: 0,
              y: -16,
              duration: config.initialTransitionDuration,
              ease: 'power2.inOut',
              pointerEvents: 'none',
            },
          )
          .to(
            sequence,
            {
              autoAlpha: 1,
              duration: config.initialTransitionDuration,
              ease: 'power2.out',
            },
            `-=${config.initialTransitionDuration * 0.45}`,
          );

        HERO_PHRASES.forEach((phrase, index) => {
          addPhraseToTimeline(
            timeline,
            text,
            phrase,
            index === HERO_PHRASES.length - 1,
            config,
          );
        });

        timeline.to({}, {
          duration: config.pauseDuration * 1.5,
        });

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      };

      media.add(
        {
          desktop:
            '(min-width: 48rem) and (prefers-reduced-motion: no-preference)',
          mobile:
            '(max-width: 47.999rem) and (prefers-reduced-motion: no-preference)',
          reducedMotion: '(prefers-reduced-motion: reduce)',
        },
        (matchMediaContext) => {
          const conditions = matchMediaContext.conditions;

          if (conditions?.reducedMotion) {
            text.textContent =
              HERO_PHRASES[HERO_PHRASES.length - 1];

            gsap.set([intro, actions, scrollIndicator], {
              autoAlpha: 0,
              pointerEvents: 'none',
            });

            gsap.set(sequence, {
              autoAlpha: 1,
            });

            gsap.set(cursor, {
              autoAlpha: 0,
            });

            return undefined;
          }

          if (conditions?.mobile) {
            return createSequence(MOBILE_CONFIG);
          }

          return createSequence(DESKTOP_CONFIG);
        },
      );

      let refreshCall: gsap.core.Tween | null = null;

      const requestRefresh = () => {
        refreshCall?.kill();

        refreshCall = gsap.delayedCall(0.15, () => {
          ScrollTrigger.refresh();
        });
      };

      const resizeObserver = new ResizeObserver(requestRefresh);

      resizeObserver.observe(section);

      window.addEventListener('orientationchange', requestRefresh);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener(
          'orientationchange',
          requestRefresh,
        );

        refreshCall?.kill();
        media.revert();
      };
    }, section);

    return () => {
      context.revert();
    };
  }, [
    actionsRef,
    cursorRef,
    introRef,
    scrollIndicatorRef,
    sectionRef,
    sequenceRef,
    textRef,
  ]);
};