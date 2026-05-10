import React from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "link" | "yellow";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
