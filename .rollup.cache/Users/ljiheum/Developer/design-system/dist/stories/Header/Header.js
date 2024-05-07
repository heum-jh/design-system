import React from "react";
import { Button } from "../Button/Button";
export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (React.createElement("header", null,
    React.createElement("div", { className: "font-['Nunito_Sans','Helvetica_Neue',Helvetica,Arial,sans-serif] px-[20px] py-[15px] flex items-center justify-between border-b-[rgba(0,0,0,0.1)] border-b" },
        React.createElement("div", null,
            React.createElement("svg", { className: "inline-block align-top", width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("g", { fill: "none", fillRule: "evenodd" },
                    React.createElement("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }),
                    React.createElement("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }),
                    React.createElement("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" }))),
            React.createElement("h1", { className: "font-[700] text-20 m-[6px_0_6px_10px] inline-block, align-top" }, "Acme")),
        React.createElement("div", { className: "space-x-[10px]" }, user ? (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "text-[14px] text-[#333] mr-10" },
                "Welcome, ",
                React.createElement("b", null, user.name),
                "!"),
            React.createElement(Button, { size: "small", onClick: onLogout, label: "Log out" }))) : (React.createElement(React.Fragment, null,
            React.createElement(Button, { size: "small", onClick: onLogin, label: "Log in" }),
            React.createElement(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })))))));
//# sourceMappingURL=Header.js.map