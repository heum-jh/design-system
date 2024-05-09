import { __rest } from "tslib";
import clsx from "clsx";
import React from "react";
export const Button = (_a) => {
    var { primary = false, size = "medium", backgroundColor, label } = _a, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
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
    return (React.createElement("button", Object.assign({ "data-placeholder": true, type: "button", className: clsx("border-0 rounded-[3rem] font-[700] cursor-pointer inline-block font-['Nunito_Sans','Helvetica_Neue',Helvetica,Arial,sans-serif]", buttonSize(), mode), style: { backgroundColor } }, props), label));
};
//# sourceMappingURL=Button.js.map