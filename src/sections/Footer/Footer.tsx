import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import {
  footerNavigationGroups,
  footerSocialLinks,
  skillsLinks,
} from '../../data/footer.data';

import FooterColumn from './FooterColumn';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <section
          className={styles.skillsSection}
          aria-labelledby="footer-skills-title"
        >
          <div className={styles.skillsIntroduction}>
            <span className={styles.eyebrow}>Cursos Skills</span>

            <h2 className={styles.skillsTitle} id="footer-skills-title">
              Novas habilidades para construir o próximo nível.
            </h2>

            <p className={styles.skillsDescription}>
              Cursos objetivos para transformar conhecimento técnico em
              produtos digitais mais completos.
            </p>
          </div>

          <ul className={styles.skillsList}>
            {skillsLinks.map((skill) => (
              <li className={styles.skillsItem} key={skill.label}>
                <motion.a
                  className={styles.skillLink}
                  href={skill.href}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                        }
                  }
                  transition={{
                    duration: 0.24,
                    ease: 'easeOut',
                  }}
                >
                  <span>{skill.label}</span>

                  <ArrowUpRight
                    className={styles.skillIcon}
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.75}
                  />
                </motion.a>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.mainContent}>
          <div className={styles.brandColumn}>
            <a
              className={styles.brand}
              href="#inicio"
              aria-label="DevClub — voltar ao início"
            >
              <span className={styles.brandMark} aria-hidden="true">
                &lt;/&gt;
              </span>

              <span className={styles.brandName}>DevClub</span>
            </a>

            <p className={styles.brandDescription}>
              Tecnologia, comunidade e direção para quem quer construir uma
              carreira sem limites.
            </p>

            <div className={styles.socials} aria-label="Redes sociais">
              {footerSocialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    className={styles.socialLink}
                    href={social.href}
                    key={social.label}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Acessar o ${social.label} do DevClub`}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -3,
                            scale: 1.04,
                          }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 0.96,
                          }
                    }
                    transition={{
                      duration: 0.2,
                      ease: 'easeOut',
                    }}
                  >
                    <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className={styles.navigation}>
            {footerNavigationGroups.map((group) => (
              <FooterColumn group={group} key={group.title} />
            ))}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} DevClub. Todos os direitos reservados.
          </p>

          <p className={styles.signature}>
            Feito para quem decidiu não ficar parado.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;