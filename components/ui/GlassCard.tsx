import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
