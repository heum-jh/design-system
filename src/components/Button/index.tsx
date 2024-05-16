import clsx from "clsx";
import React from "react";
import styles from './index.module.css'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {

  return (
    <button
      data-placeholder
      type="button"
      className={clsx(styles.btn, `${styles[size]}`, primary ? styles.primary : "")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;