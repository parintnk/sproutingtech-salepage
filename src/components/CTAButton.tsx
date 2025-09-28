import React from 'react';

interface CTAButtonProps {
  className?: string;
  children: React.ReactNode;
  size?: "normal" | "large";
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className = "", children, size = "normal", onClick }) => {
  const baseClasses = "bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex items-center gap-2 justify-center border border-teal-500";
  const sizeClasses = size === "large"
    ? "px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl"
    : "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg";

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CTAButton;