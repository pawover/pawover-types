/* eslint-disable ts/no-explicit-any */

/** 任意对象类型 */
export type AnyObject<K extends PropertyKey = PropertyKey, T = any> = Record<K, T>;
/** 普通对象类型 */
export type PlainObject<K extends PropertyKey = PropertyKey, T = unknown> = Record<K, T>;
/** 描述树类型 */
export type TreeLike<T extends AnyObject, CK extends string = "children"> = T & Record<CK, TreeLike<T, CK>[]>;
/** 描述函数类型 */
export type AnyFunction<P extends any[] = any[], R = any> = (...arg: P) => R;
/** 描述异步函数类型 */
export type AnyAsyncFunction<P extends any[] = any[], R = any> = (...args: P) => Promise<R>;
export type AnyGeneratorFunction<P extends any[] = any[], T = any, R = any, N = any> = (...args: P) => Generator<T, R, N>;
export type AnyAsyncGeneratorFunction<P extends any[] = any[], T = any, R = any, N = any> = (...args: P) => AsyncGenerator<T, R, N>;

export type * from "./api";
export type * from "./advancedRecord";
