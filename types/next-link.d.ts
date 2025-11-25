import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import type { UrlObject } from "url";
import type { LinkProps as NextLinkProps } from "next/dist/client/link";

declare module "next/link" {
  export type FlexibleLinkProps<RouteType = string> = Omit<
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    keyof NextLinkProps<RouteType>
  > &
    Omit<NextLinkProps<RouteType>, "href"> & {
      href: NextLinkProps<RouteType>["href"] | string | UrlObject;
      children?: ReactNode;
    };

  export default function Link<RouteType = string>(props: FlexibleLinkProps<RouteType>): JSX.Element;
}
