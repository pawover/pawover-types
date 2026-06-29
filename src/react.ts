import type { ReactNode, RefObject } from "react";

export type Props<P = unknown> = Readonly<P>;
export type PropsWithChildren<P = unknown> = Readonly<P> & { readonly children?: ReactNode | undefined };
export type PropsWithRef<P = unknown, R = unknown> = Readonly<P> & { readonly ref?: RefObject<R> | undefined };
