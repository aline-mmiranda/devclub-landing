import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const Button = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  isLoading = false,
  loadingLabel = "Carregando",
  leadingIcon,
  trailingIcon,
  className,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || isLoading;

  return (
    <button
      className={classNames}
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      {...props}
    >
      <span
        className={[
          styles.content,
          isLoading ? styles.hiddenContent : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {leadingIcon ? (
          <span className={styles.icon} aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}

        <span className={styles.label}>{children}</span>

        {trailingIcon ? (
          <span className={styles.icon} aria-hidden="true">
            {trailingIcon}
          </span>
        ) : null}
      </span>

      {isLoading ? (
        <span className={styles.loader} role="status">
          <span className={styles.spinner} aria-hidden="true" />
          <span className={styles.visuallyHidden}>{loadingLabel}</span>
        </span>
      ) : null}
    </button>
  );
};

export { Button };
export type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
};