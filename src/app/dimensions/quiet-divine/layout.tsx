import type { ReactNode } from "react";

export default function QuietDivineLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
