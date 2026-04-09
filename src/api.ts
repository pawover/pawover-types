import type { Split, TupleToUnion } from "type-fest";

/** 字母表 */
type ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/** 单个字母 */
type Letter = TupleToUnion<Split<ALPHABET, "">>;
/** 有效字符 */
type ValidChar = Letter | "_";
/** 定义 API 命名 - 键名检查 */
type ApiNameCheck<N extends string, P extends string = ""> = N extends `${infer L extends ValidChar}${infer R}`
  ? ApiNameCheck<R, `${P}${L}`>
  : P extends `${infer S}_`
    ? S
    : P;

export type { ApiNameCheck };
