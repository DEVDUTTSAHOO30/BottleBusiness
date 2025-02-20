// components/ui/card.tsx
import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`rounded-2xl shadow-lg bg-white p-4 ${className || ""}`}>
            {children}
        </div>
    );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return <div className={`p-2 ${className || ""}`}>{children}</div>;
};
