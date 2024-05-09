import clsx from "clsx";
import React from "react";
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
export const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? "font-white bg-[#1ea7fd]" : "color-[#333] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]";
  const buttonSize = () => {
    switch (size) {
      case "large":
        return "py-[12px] px-[24px] text-[16px]";
      case "small":
        return "py-[11px] px-[20px] text-[12px]";
      default:
        return "py-[10px] px-[16px] text-[14px]";
    }
  };

  return (
    <button
      data-placeholder
      type="button"
      className={
        clsx("border-0 rounded-[3rem] font-[700] cursor-pointer inline-block font-['Nunito_Sans','Helvetica_Neue',Helvetica,Arial,sans-serif]", buttonSize(), mode)}
      style={{ backgroundColor }
      }
      {...props}
    >
      {label}
    </button>
  );
};
