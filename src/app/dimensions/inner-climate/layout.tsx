import type { ReactNode } from "react";

export default function InnerClimateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
