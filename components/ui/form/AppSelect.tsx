"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/components/utils";
import { MaterialSymbol } from "../../utils/MaterialSymbol";

interface Option {
  label: string;
  value: string;
}

interface AppSelectProps {
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export function AppSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
}: AppSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {label && (
        <label className="mb-2 block text-xs font-bold tracking-widest text-secondary/50 uppercase">
          {label}
        </label>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full items-center justify-between rounded-md border px-4 py-4 text-sm transition-all",
          "bg-surface-container-low text-secondary",
          "border-secondary/10 hover:border-secondary/30",
          "focus:outline-none focus:ring-2 focus:ring-primary/20",
          open && "border-primary ring-2 ring-primary/20",
          error && "border-red-500",
        )}
      >
        <span className={cn(!selected && "text-secondary/50")}>
          {selected?.label || placeholder}
        </span>

        <MaterialSymbol
          name="expand_more"
          size={20}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      {/* Dropdown */}
      <div
        className={cn(
          "absolute z-50 mt-2 w-full rounded-md border border-secondary/10 bg-white shadow-xl transition-all",
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2",
        )}
      >
        <div className="max-h-60 overflow-auto py-2">
          {options.map((option) => {
            const isActive = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange?.(option.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-all",
                  "hover:bg-primary/10",
                  isActive && "bg-primary/10 text-primary font-semibold",
                )}
              >
                {option.label}

                {isActive && (
                  <MaterialSymbol
                    name="check"
                    size={16}
                    className="text-primary"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
