import type { AnchorHTMLAttributes } from "react";

import styles from "./Logo.module.css";

type LogoSize = "small" | "medium" | "large";

interface LogoProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  size?: LogoSize;
  showWordmark?: boolean;
}

const Logo = ({
  size = "medium",
  showWordmark = true,
  className,
  href = "/",
  "aria-label": ariaLabel = "DevClub — página inicial",
  ...props
}: LogoProps) => {
  const classNames = [
    styles.logo,
    styles[size],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classNames}
      href={href}
      aria-label={ariaLabel}
      {...props}
    >
      <span className={styles.mark} aria-hidden="true">
        <svg
          className={styles.symbol}
          viewBox="0 0 48 48"
          focusable="false"
        >
          <path
            className={styles.symbolFrame}
            d="M12.5 5.5h15.75C36.12 5.5 42.5 11.88 42.5 19.75v8.5c0 7.87-6.38 14.25-14.25 14.25H12.5c-3.87 0-7-3.13-7-7v-23c0-3.87 3.13-7 7-7Z"
          />

          <path
            className={styles.symbolLetter}
            d="M16 15.5h10.25a8.5 8.5 0 0 1 0 17H16v-17Zm6 5.5v6h4.25a3 3 0 0 0 0-6H22Z"
          />

          <path
            className={styles.symbolAccent}
            d="M35.5 11.5 39 8"
          />
        </svg>
      </span>

      {showWordmark ? (
        <span className={styles.wordmark} aria-hidden="true">
          Dev<span>Club</span>
        </span>
      ) : null}
    </a>
  );
};

export { Logo };
export type {
  LogoProps,
  LogoSize,
};