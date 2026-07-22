import type { HTMLAttributes } from "react";

import styles from "./Container.module.css";

type ContainerElement = "div" | "section" | "main" | "header" | "footer" | "nav";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  narrow?: boolean;
}

const Container = ({
  as: Component = "div",
  narrow = false,
  className,
  children,
  ...props
}: ContainerProps) => {
  const classNames = [
    styles.container,
    narrow ? styles.narrow : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
};

export { Container };
export type { ContainerProps };