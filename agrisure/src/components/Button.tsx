import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
  children: ReactNode;
}

function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`ui-button ui-button-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;