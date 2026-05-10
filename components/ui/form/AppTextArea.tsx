import { cn } from "@/components/utils";
import React from "react";

interface AppTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function AppTextarea({
  label,
  error,
  className,
  ...props
}: AppTextareaProps) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-xs font-bold tracking-widest text-secondary/50 uppercase">
          {label}
        </label>
      )}

      <textarea
        className={cn(
          "w-full rounded-sm border border-secondary/10 bg-surface-container-low p-4 text-sm transition-all focus:ring-2 focus:ring-primary/20 outline-none resize-none",
          error && "border-red-500 focus:ring-red-200",
          className,
        )}
        {...props}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
