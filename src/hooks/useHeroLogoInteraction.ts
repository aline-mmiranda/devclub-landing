import {
  type PointerEvent as ReactPointerEvent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import gsap from 'gsap';

interface UseHeroLogoInteractionParams {
  areaRef: RefObject<HTMLDivElement | null>;
  surfaceRef: RefObject<HTMLDivElement | null>;
  glowRef: RefObject<HTMLDivElement | null>;
  shineRef: RefObject<HTMLDivElement | null>;
}

interface LogoInteractionHandlers {
  onPointerEnter: (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => void;
  onPointerMove: (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => void;
  onPointerLeave: () => void;
}

interface ElementBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface QuickSetters {
  rotateX: gsap.QuickToFunc;
  rotateY: gsap.QuickToFunc;
  surfaceX: gsap.QuickToFunc;
  surfaceY: gsap.QuickToFunc;
  surfaceZ: gsap.QuickToFunc;
  surfaceScale: gsap.QuickToFunc;
  glowX: gsap.QuickToFunc;
  glowY: gsap.QuickToFunc;
  glowScale: gsap.QuickToFunc;
  shineX: gsap.QuickToFunc;
  shineY: gsap.QuickToFunc;
  shineOpacity: gsap.QuickToFunc;
}

const MAX_ROTATION = 7;
const MAX_SURFACE_OFFSET = 3;
const MAX_GLOW_OFFSET = 12;
const MAX_SHINE_OFFSET = 42;

const clampNormalizedPosition = (value: number): number =>
  gsap.utils.clamp(-1, 1, value);

export const useHeroLogoInteraction = ({
  areaRef,
  surfaceRef,
  glowRef,
  shineRef,
}: UseHeroLogoInteractionParams): LogoInteractionHandlers => {
  const boundsRef = useRef<ElementBounds | null>(null);
  const settersRef = useRef<QuickSetters | null>(null);
  const interactionEnabledRef = useRef(false);

  const updateBounds = useCallback((): void => {
    const area = areaRef.current;

    if (!area) {
      boundsRef.current = null;
      return;
    }

    const bounds = area.getBoundingClientRect();

    boundsRef.current = {
      left: bounds.left,
      top: bounds.top,
      width: bounds.width,
      height: bounds.height,
    };
  }, [areaRef]);

  useEffect(() => {
    const area = areaRef.current;
    const surface = surfaceRef.current;
    const glow = glowRef.current;
    const shine = shineRef.current;

    if (!area || !surface || !glow || !shine) {
      return undefined;
    }

    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    const canAnimate =
      !coarsePointerQuery.matches && !reducedMotionQuery.matches;

    interactionEnabledRef.current = canAnimate;

    if (!canAnimate) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.set(area, {
        perspective: 900,
      });

      gsap.set(surface, {
        transformPerspective: 900,
        transformOrigin: '50% 50%',
        force3D: true,
      });

      gsap.set([glow, shine], {
        force3D: true,
      });

      settersRef.current = {
        rotateX: gsap.quickTo(surface, 'rotationX', {
          duration: 0.55,
          ease: 'power3.out',
        }),
        rotateY: gsap.quickTo(surface, 'rotationY', {
          duration: 0.55,
          ease: 'power3.out',
        }),
        surfaceX: gsap.quickTo(surface, 'x', {
          duration: 0.5,
          ease: 'power3.out',
        }),
        surfaceY: gsap.quickTo(surface, 'y', {
          duration: 0.5,
          ease: 'power3.out',
        }),
        surfaceZ: gsap.quickTo(surface, 'z', {
          duration: 0.5,
          ease: 'power3.out',
        }),
        surfaceScale: gsap.quickTo(surface, 'scale', {
          duration: 0.5,
          ease: 'power3.out',
        }),
        glowX: gsap.quickTo(glow, 'x', {
          duration: 0.7,
          ease: 'power3.out',
        }),
        glowY: gsap.quickTo(glow, 'y', {
          duration: 0.7,
          ease: 'power3.out',
        }),
        glowScale: gsap.quickTo(glow, 'scale', {
          duration: 0.7,
          ease: 'power3.out',
        }),
        shineX: gsap.quickTo(shine, 'x', {
          duration: 0.35,
          ease: 'power2.out',
        }),
        shineY: gsap.quickTo(shine, 'y', {
          duration: 0.35,
          ease: 'power2.out',
        }),
        shineOpacity: gsap.quickTo(shine, 'opacity', {
          duration: 0.3,
          ease: 'power2.out',
        }),
      };
    }, area);

    updateBounds();

    const resizeObserver = new ResizeObserver(updateBounds);

    resizeObserver.observe(area);
    window.addEventListener('resize', updateBounds, { passive: true });
    window.addEventListener('scroll', updateBounds, { passive: true });

    return () => {
      interactionEnabledRef.current = false;
      settersRef.current = null;
      boundsRef.current = null;

      resizeObserver.disconnect();
      window.removeEventListener('resize', updateBounds);
      window.removeEventListener('scroll', updateBounds);

      context.revert();
    };
  }, [areaRef, glowRef, shineRef, surfaceRef, updateBounds]);

  const handlePointerEnter = (
    event: ReactPointerEvent<HTMLDivElement>,
  ): void => {
    if (
      !interactionEnabledRef.current ||
      event.pointerType === 'touch'
    ) {
      return;
    }

    updateBounds();
    settersRef.current?.shineOpacity(0.85);
    settersRef.current?.glowScale(1.08);
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ): void => {
    const setters = settersRef.current;
    const bounds = boundsRef.current;

    if (
      !interactionEnabledRef.current ||
      event.pointerType === 'touch' ||
      !setters ||
      !bounds
    ) {
      return;
    }

    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;

    const normalizedX = clampNormalizedPosition(
      (localX / bounds.width - 0.5) * 2,
    );
    const normalizedY = clampNormalizedPosition(
      (localY / bounds.height - 0.5) * 2,
    );

    const distanceFromCenter = Math.min(
      1,
      Math.hypot(normalizedX, normalizedY) / Math.SQRT2,
    );

    const pressure = 1 - distanceFromCenter * 0.35;

    setters.rotateX(-normalizedY * MAX_ROTATION);
    setters.rotateY(normalizedX * MAX_ROTATION);

    setters.surfaceX(normalizedX * MAX_SURFACE_OFFSET);
    setters.surfaceY(normalizedY * MAX_SURFACE_OFFSET);
    setters.surfaceZ(-8 * pressure);
    setters.surfaceScale(1 - 0.012 * pressure);

    setters.glowX(normalizedX * MAX_GLOW_OFFSET);
    setters.glowY(normalizedY * MAX_GLOW_OFFSET);
    setters.glowScale(1.06 + pressure * 0.05);

    setters.shineX(normalizedX * MAX_SHINE_OFFSET);
    setters.shineY(normalizedY * MAX_SHINE_OFFSET);
    setters.shineOpacity(0.62 + pressure * 0.25);
  };

  const handlePointerLeave = (): void => {
    const setters = settersRef.current;

    if (!interactionEnabledRef.current || !setters) {
      return;
    }

    setters.rotateX(0);
    setters.rotateY(0);
    setters.surfaceX(0);
    setters.surfaceY(0);
    setters.surfaceZ(0);
    setters.surfaceScale(1);

    setters.glowX(0);
    setters.glowY(0);
    setters.glowScale(1);

    setters.shineX(0);
    setters.shineY(0);
    setters.shineOpacity(0);
  };

  return {
    onPointerEnter: handlePointerEnter,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  };
};