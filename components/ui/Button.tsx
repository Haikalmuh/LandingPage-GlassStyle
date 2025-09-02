"use client";

import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles =
      "px-6 py-3 rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-lg hover:scale-105 hover:shadow-purple-500/50",
      secondary:
        "bg-slate-700/50 text-slate-200 hover:bg-slate-600/60 border border-slate-500/30",
      outline:
        "border border-white/20 text-slate-200 hover:bg-white/10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
