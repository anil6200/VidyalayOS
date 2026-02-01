import React from "react";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "rounded-2xl font-medium transition duration-300 font-mono ease-in-out transform hover:scale-105 flex  items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-accent)] to-blue-700 text-white shadow-md hover:shadow-blue-500/30",
    outline:
      "border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white bg-transparent",
    secondary: "bg-white text-[var(--color-primary)] hover:bg-gray-100",
  };

  const sizeClasses = "py-1 px-4 text-[15px] lg:text-base";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizeClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
