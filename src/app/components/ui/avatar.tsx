// components/ui/avatar.tsx
import React from "react";

interface AvatarProps {
    children: React.ReactNode;
    className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className = "" }) => {
    return (
        <div className={`w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}>
            {children}
        </div>
    );
};

interface AvatarImageProps {
    src: string;
    alt?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => {
    return <img src={src} alt={alt || "Avatar"} className="w-full h-full object-cover" />;
};

interface AvatarFallbackProps {
    children: React.ReactNode;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children }) => {
    return <span className="text-black text-sm">{children}</span>;
};
