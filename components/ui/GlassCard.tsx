import { cn } from "@/utils/cn"; // kalau belum ada utils cn, bisa pakai className langsung

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
