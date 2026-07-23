import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from 'react';

interface UseHeaderReturn {
  closeMenu: () => void;
  headerRef: RefObject<HTMLElement | null>;
  isMenuOpen: boolean;
  isScrolled: boolean;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
  mobileMenuRef: RefObject<HTMLDivElement | null>;
  toggleMenu: () => void;
}

const SCROLL_THRESHOLD = 16;

const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  return Array.from(container.querySelectorAll<HTMLElement>(selector));
};

export const useHeader = (): UseHeaderReturn => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((): void => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback((): void => {
    setIsMenuOpen((currentState) => !currentState);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const menu = mobileMenuRef.current;
    const menuButton = menuButtonRef.current;

    if (!menu) {
      return;
    }

    const previousActiveElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const focusableElements = getFocusableElements(menu);
    const firstFocusableElement = focusableElements.at(0);

    firstFocusableElement?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const currentFocusableElements = getFocusableElements(menu);
      const firstElement = currentFocusableElements.at(0);
      const lastElement = currentFocusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.dataset.menuOpen = 'true';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      delete document.body.dataset.menuOpen;

      if (
        previousActiveElement &&
        previousActiveElement !== menuButton
      ) {
        previousActiveElement.focus();
      }
    };
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 64rem)');

    const handleDesktopBreakpoint = (
      event: MediaQueryListEvent,
    ): void => {
      if (event.matches) {
        closeMenu();
      }
    };

    desktopMediaQuery.addEventListener(
      'change',
      handleDesktopBreakpoint,
    );

    return () => {
      desktopMediaQuery.removeEventListener(
        'change',
        handleDesktopBreakpoint,
      );
    };
  }, [closeMenu]);

  return {
    closeMenu,
    headerRef,
    isMenuOpen,
    isScrolled,
    menuButtonRef,
    mobileMenuRef,
    toggleMenu,
  };
};