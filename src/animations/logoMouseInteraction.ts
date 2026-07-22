import gsap from "gsap";

interface LogoInteractionOptions {
  wrapper: HTMLDivElement;
  glow: HTMLDivElement;
}

const MAX_ROTATION = 10;
const PRESS_DEPTH = -10;

export const createLogoMouseInteraction = ({
  wrapper,
  glow,
}: LogoInteractionOptions) => {
  const mm = window.matchMedia("(pointer: coarse)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (mm.matches || reduced.matches) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    gsap.set(wrapper, {
      transformPerspective: 900,
      transformStyle: "preserve-3d",
    });

    const move = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const px = x / rect.width;
      const py = y / rect.height;

      const rotateY = (px - 0.5) * MAX_ROTATION * 2;
      const rotateX = -(py - 0.5) * MAX_ROTATION * 2;

      gsap.to(wrapper, {
        rotationX: rotateX,
        rotationY: rotateY,
        z: PRESS_DEPTH,
        duration: 0.22,
        ease: "power2.out",
        overwrite: true,
      });

      gsap.to(glow, {
        x,
        y,
        opacity: 1,
        duration: 0.18,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const leave = () => {
      gsap.to(wrapper, {
        rotationX: 0,
        rotationY: 0,
        z: 0,
        duration: 0.9,
        ease: "elastic.out(1, 0.45)",
      });

      gsap.to(glow, {
        opacity: 0,
        duration: 0.4,
      });
    };

    wrapper.addEventListener("pointermove", move);
    wrapper.addEventListener("pointerleave", leave);

    return () => {
      wrapper.removeEventListener("pointermove", move);
      wrapper.removeEventListener("pointerleave", leave);
    };
  }, wrapper);

  return () => ctx.revert();
};