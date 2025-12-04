import type { ReactNode, RefObject } from "react";

declare global {
  type Props<P = unknown> = Readonly<P>;
  type PropsWithChildren<P = unknown> = Readonly<P> & { readonly children: ReactNode };
  type PropsWithRef<P = unknown, R = unknown> = Readonly<P> & { readonly ref: RefObject<R> };
}
