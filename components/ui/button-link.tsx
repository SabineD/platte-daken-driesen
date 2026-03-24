import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-accent)] text-stone-950 shadow-[0_14px_30px_rgba(243,189,39,0.25)] hover:-translate-y-0.5 hover:bg-[#f0c84f]",
  secondary:
    "border border-stone-300 bg-white text-stone-900 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-stone-50",
  ghost:
    "text-stone-900 hover:text-stone-700",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {icon}
    </a>
  );
}
