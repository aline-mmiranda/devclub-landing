import { RefObject, useLayoutEffect } from "react";
import { createLogoMouseInteraction } from "../animations/logoMouseInteraction";

interface UseHeroLogoInteractionParams {
  wrapperRef: RefObject<HTMLDivElement>;
  glowRef: RefObject<HTMLDivElement>;
}

export const useHeroLogoInteraction = ({
  wrapperRef,
  glowRef,
}: UseHeroLogoInteractionParams) => {
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const glow = glowRef.current;

    if (!wrapper || !glow) return;

    return createLogoMouseInteraction({
      wrapper,
      glow,
    });
  }, [wrapperRef, glowRef]);
};