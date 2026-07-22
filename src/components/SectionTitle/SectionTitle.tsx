import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import styles from "./SectionTitle.module.css";

type SectionTitleAlignment = "left" | "center";
type SectionTitleElement = "h1" | "h2" | "h3";

interface SectionTitleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  align?: SectionTitleAlignment;
  titleAs?: SectionTitleElement;
}

const SectionTitle = ({
  title,
  eyebrow,
  description,
  align = "left",
  titleAs: Title = "h2",
  className,
  ...props
}: SectionTitleProps) => {
  const classNames = [
    styles.sectionTitle,
    styles[align],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {eyebrow ? (
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowIndicator} aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}

      <Title className={styles.title}>{title}</Title>

      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
  );
};

export { SectionTitle };
export type {
  SectionTitleAlignment,
  SectionTitleProps,
};