import { motion, useReducedMotion } from 'motion/react';

import type { FooterNavigationGroup } from '../../data/footer.data';

import styles from './FooterColumn.module.css';

interface FooterColumnProps {
  group: FooterNavigationGroup;
}

const FooterColumn = ({ group }: FooterColumnProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      className={styles.column}
      aria-labelledby={`footer-${group.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <h3
        className={styles.title}
        id={`footer-${group.title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {group.title}
      </h3>

      <ul className={styles.list}>
        {group.links.map((link) => (
          <li key={`${group.title}-${link.label}`}>
            <motion.a
              className={styles.link}
              href={link.href}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: 4,
                    }
              }
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;