import { cn } from "@/components/utils";
import { ButtonProps } from "./button.types";

const base =
  "inline-flex items-center justify-center rounded-md font-bold uppercase tracking-widest transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-secondary shadow-md hover:brightness-110 active:scale-95",

  outline:
    "border border-white/40 bg-transparent text-white hover:bg-white hover:text-secondary",

  yellow:
    "border border-primary/40 bg-transparent text-primary hover:bg-white hover:text-primary",

  ghost: "bg-transparent text-primary hover:brightness-110",

  link: "bg-transparent text-primary p-0 h-auto hover:translate-x-2",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-8 py-3 text-xs",
  md: "px-10 py-5 text-sm",
  lg: "px-12 py-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
