import type React from "react";

declare global {
  type Props<P = unknown> = Readonly<P>;
  type PropsWithChildren<P = unknown> = Readonly<P> & { readonly children: React.ReactNode };
  type PropsWithRef<P = unknown, R = unknown> = Readonly<P> & { readonly ref: React.RefObject<R> };
}
