import React from 'react';

interface CTAButtonProps {
  className?: string;
  children: React.ReactNode;
  size?: "normal" | "large";
  onClick?: () => void;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className = "", children, size = "normal", onClick, href }) => {
  const baseClasses = "bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex items-center gap-2 justify-center border border-teal-500 hover:border-teal-400";
  const sizeClasses = size === "large"
    ? "px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl"
    : "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg";

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CTAButton;