import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react';
import { ChevronDown } from 'lucide-react';

import type { FaqItem } from '../../data/guaranteeFaq.data';

import styles from './Accordion.module.css';

interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  buttonRef: (element: HTMLButtonElement | null) => void;
  onToggle: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}

const AccordionItem = ({
  item,
  isOpen,
  buttonRef,
  onToggle,
  onKeyDown,
}: AccordionItemProps) => {
  const generatedId = useId();
  const shouldReduceMotion = useReducedMotion();

  const triggerId = `accordion-trigger-${item.id}-${generatedId}`;
  const panelId = `accordion-panel-${item.id}-${generatedId}`;

  return (
    <article
      className={styles.item}
      data-open={isOpen}
    >
      <h3 className={styles.heading}>
        <button
          ref={buttonRef}
          id={triggerId}
          className={styles.trigger}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={onKeyDown}
        >
          <span className={styles.question}>{item.question}</span>

          <motion.span
            className={styles.iconWrapper}
            aria-hidden="true"
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            <ChevronDown
              className={styles.icon}
              strokeWidth={1.8}
            />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            className={styles.panel}
            role="region"
            aria-labelledby={triggerId}
            initial={
              shouldReduceMotion
                ? false
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={
              shouldReduceMotion
                ? {
                    display: 'none',
                  }
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    height: {
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.2,
                      ease: 'easeOut',
                    },
                  }
            }
          >
            <div className={styles.panelContent}>
              <p>{item.answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
};

export const Accordion = ({
  items,
  allowMultiple = false,
}: AccordionProps) => {
  const [openItemIds, setOpenItemIds] = useState<Set<string>>(
    () => new Set(),
  );

  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleToggle = (itemId: string) => {
    setOpenItemIds((currentIds) => {
      const nextIds = new Set(currentIds);
      const isCurrentlyOpen = nextIds.has(itemId);

      if (!allowMultiple) {
        nextIds.clear();
      }

      if (!isCurrentlyOpen) {
        nextIds.add(itemId);
      }

      return nextIds;
    });
  };

  const focusButton = (index: number) => {
    buttonRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    const lastIndex = items.length - 1;

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        const nextIndex =
          currentIndex === lastIndex ? 0 : currentIndex + 1;

        focusButton(nextIndex);
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        const previousIndex =
          currentIndex === 0 ? lastIndex : currentIndex - 1;

        focusButton(previousIndex);
        break;
      }

      case 'Home': {
        event.preventDefault();
        focusButton(0);
        break;
      }

      case 'End': {
        event.preventDefault();
        focusButton(lastIndex);
        break;
      }

      default:
        break;
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItemIds.has(item.id)}
          buttonRef={(element) => {
            buttonRefs.current[index] = element;
          }}
          onToggle={() => handleToggle(item.id)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  );
};