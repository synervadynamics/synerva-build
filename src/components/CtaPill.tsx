import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./CtaPill.module.css";

type CtaPillProps = {
  href?: LinkProps["href"];
  variant?:
    | "primary"
    | "secondary"
    | "homepagePrimary"
    | "directional"
    | "ghost"
    | "disabled"
    | "neutralFilled";
  className?: string;
  children: ReactNode;
  disabled?: boolean;
} & Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> &
  Omit<HTMLAttributes<HTMLSpanElement>, "className" | "children">;

export default function CtaPill({
  href,
  variant = "primary",
  className,
  children,
  disabled = false,
  ...props
}: CtaPillProps) {
  const isDisabled = disabled || variant === "disabled";
  const pillClassName = cn(
    styles.pill,
    styles[variant],
    className,
  );

  if (isDisabled) {
    return (
      <span
        className={pillClassName}
        data-cta-pill
        aria-disabled="true"
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      className={pillClassName}
      data-cta-pill
      {...props}
    >
      {children}
    </Link>
  );
}
