import clsx from "clsx";
import React from "react";
type InputProps = {
    floating?: "filled" | "outlined" | "standard";
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    label: string | undefined;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input = ({ floating = "standard", type = "text", label, ...props }: InputProps) => {
    const { className, ...res } = props;

    const floatingInputClassName = () => {
        switch (floating) {
            case "filled":
                return "rounded-t-lg px-2.5 pb-2.5 pt-5 bg-gray-50 border-0 border-b-2 border-gray-300"
            case "outlined":
                return "px-2.5 pb-2.5 pt-4 bg-transparent rounded-lg border-1 border-gray-300 border"
            default:
                return "py-2.5 px-0 bg-transparent border-0 border-b-2 border-gray-300"
        }
    }
    const floatingLabelClassName = () => {
        switch (floating) {
            case "filled":
                return "-translate-y-6 top-1/2 z-10 start-2.5 peer-focus:-translate-y-6"
            case "outlined":
                return "z-10 -translate-y-4 px-2 top-1/2 bg-white peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:px-2 peer-placeholder-shown:top-1/2 start-1"
            default:
                return "top-1/2 -z-10 -translate-y-6 peer-focus:start-0 peer-focus:-translate-y-6"
        }
    }
    return (
        <label className="relative z-0">
            <input
                type={type}
                className={clsx(`block w-full text-sm text-gray-900 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer`, label ? "pt-5" : "pt-2.5", floatingInputClassName(), className)}
                placeholder={" "}
                {...res}
            />
            <span
                className={clsx("absolute text-sm text-gray-500 duration-300 transform scale-75 origin-[0] peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:-translate-y-1/2", floatingLabelClassName())}>
                {label}
            </span>
        </label>
    );
}