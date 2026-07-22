import { Menu, X } from 'lucide-react';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';
import { headerNavigation } from '../../data/headerNavigation';
import { useHeader } from '../../hooks/useHeader';

import styles from './Header.module.css';

const MOBILE_MENU_ID = 'main-navigation-mobile';

export const Header = () => {
  const {
    closeMenu,
    headerRef,
    isMenuOpen,
    isScrolled,
    menuButtonRef,
    mobileMenuRef,
    toggleMenu,
  } = useHeader();

  const headerClassName = [
    styles.header,
    isScrolled ? styles.headerScrolled : '',
    isMenuOpen ? styles.headerMenuOpen : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header ref={headerRef} className={headerClassName}>
      <Container>
        <div className={styles.headerContent}>
          <a
            className={styles.logoLink}
            href="#top"
            aria-label="DevClub — ir para o início"
            onClick={closeMenu}
          >
            <Logo />
          </a>

          <nav
            className={styles.desktopNavigation}
            aria-label="Navegação principal"
          >
            <ul className={styles.navigationList}>
              {headerNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    className={styles.navigationLink}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.desktopActions}>
            <Button
              type="button"
              variant="secondary"
              aria-label="Entrar na plataforma DevClub"
            >
              Entrar
            </Button>

            <Button
              type="button"
              variant="primary"
              aria-label="Quero entrar para o DevClub"
            >
              Quero fazer parte
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            className={styles.menuButton}
            type="button"
            aria-label={
              isMenuOpen
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'
            }
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className={styles.menuButtonIcon} aria-hidden="true">
              {isMenuOpen ? <X /> : <Menu />}
            </span>
          </button>
        </div>
      </Container>

      <div
        ref={mobileMenuRef}
        id={MOBILE_MENU_ID}
        className={styles.mobileMenu}
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        <Container>
          <nav
            className={styles.mobileNavigation}
            aria-label="Navegação principal mobile"
          >
            <ul className={styles.mobileNavigationList}>
              {headerNavigation.map((item, index) => (
                <li
                  key={item.href}
                  className={styles.mobileNavigationItem}
                >
                  <a
                    className={styles.mobileNavigationLink}
                    href={item.href}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={closeMenu}
                  >
                    <span
                      className={styles.mobileNavigationIndex}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.mobileActions}>
              <Button
                type="button"
                variant="secondary"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                Entrar
              </Button>

              <Button
                type="button"
                variant="primary"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                Quero fazer parte
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};