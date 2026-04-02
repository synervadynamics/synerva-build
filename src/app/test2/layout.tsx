import type { ReactNode } from "react";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Test2Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
