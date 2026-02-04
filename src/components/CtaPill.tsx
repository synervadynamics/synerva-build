import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./CtaPill.module.css";

type CtaPillProps = {
  href: LinkProps["href"];
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
} & Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export default function CtaPill({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: CtaPillProps) {
  return (
    <Link
      href={href}
      className={cn(
        styles.pill,
        variant === "secondary" ? styles.secondary : styles.primary,
        className,
      )}
      data-cta-pill
      {...props}
    >
      {children}
    </Link>
  );
}
