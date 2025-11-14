/* eslint-disable ts/no-explicit-any */

declare global {
  /** 任意对象类型 */
  type AnyObject<K extends PropertyKey = PropertyKey, T = any> = Record<K, T>;
  /** 严格对象类型 */
  type UnknownObject<K extends PropertyKey = PropertyKey, T = unknown> = Record<K, T>;
  /** 描述树类型 */
  type TreeLike<T extends AnyObject, CK extends string = "children"> = T & Record<CK, TreeLike<T, CK>[]>;
  /** 描述函数类型 */
  type Func<P extends any[] = any[], R = any> = (...arg: P) => R;
  /** 描述异步函数类型 */
  type AsyncFunc<P extends any[] = any[], R = any> = (...arg: P) => Promise<R>;
}

export type * from "./api";
export type * from "./responsive";

