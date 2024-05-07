import React from 'react';

declare const Page: React.FC;

type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => React.JSX.Element;

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => React.JSX.Element;

export { Button, Header, Page };
