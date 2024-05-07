import React from "react";
interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
export declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => React.JSX.Element;
export {};
