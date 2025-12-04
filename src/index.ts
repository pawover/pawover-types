/* eslint-disable ts/no-explicit-any */

declare global {
  /** 任意对象类型 */
  type AnyObject<K extends PropertyKey = PropertyKey, T = any> = Record<K, T>;
  /** 严格对象类型 */
  type UnknownObject<K extends PropertyKey = PropertyKey, T = unknown> = Record<K, T>;
  /** 描述树类型 */
  type TreeLike<T extends AnyObject, CK extends string = "children"> = T & Record<CK, TreeLike<T, CK>[]>;
  /** 描述函数类型 */
  type AnyFunction<P extends any[] = any[], R = any> = (...arg: P) => R;
  /** 描述异步函数类型 */
  type AnyAsyncFunction<P extends any[] = any[], R = any> = (...args: P) => Promise<R>;
  type AnyGeneratorFunction<P extends any[] = any[], T = any, R = any, N = any> = (...args: P) => Generator<T, R, N>;
  type AnyAsyncGeneratorFunction<P extends any[] = any[], T = any, R = any, N = any> = (...args: P) => AsyncGenerator<T, R, N>;
}

export type * from "./global/api";
export type * from "./global/responsive";

