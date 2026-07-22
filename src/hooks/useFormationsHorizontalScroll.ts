import { type RefObject, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseFormationsHorizontalScrollParams {
  sectionRef: RefObject<HTMLElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
}

gsap.registerPlugin(ScrollTrigger);

export const useFormationsHorizontalScroll = ({
  sectionRef,
  viewportRef,
  trackRef,
}: UseFormationsHorizontalScrollParams): void => {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return undefined;
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop:
            '(min-width: 64rem) and (prefers-reduced-motion: no-preference)',
        },
        ({ conditions }) => {
          if (!conditions?.desktop) {
            return undefined;
          }

          const getHorizontalDistance = (): number =>
            Math.max(0, track.scrollWidth - viewport.clientWidth);

          const horizontalTween = gsap.to(track, {
            x: () => -getHorizontalDistance(),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => {
                const distance = getHorizontalDistance();

                return `+=${Math.max(distance, window.innerHeight * 0.8)}`;
              },
              scrub: 0.8,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => {
            horizontalTween.scrollTrigger?.kill();
            horizontalTween.kill();

            gsap.set(track, {
              clearProps: 'transform',
            });
          };
        },
      );

      return () => {
        media.revert();
      };
    }, section);

    const handleLoad = (): void => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      context.revert();
    };
  }, [sectionRef, trackRef, viewportRef]);
};