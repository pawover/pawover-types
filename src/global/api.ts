import type { Split, TupleToUnion } from "type-fest";

/** 字母表 */
type ALPHABET = "abcdefghijklmnopqrstuvwxyz";
/** 单个字母 */
type Alphabet = TupleToUnion<Split<ALPHABET, "">>;
/** 定义 API 命名 - 键名检查 */
type ApiNameCheck<
  N extends string,
  P extends string = "",
> = N extends `${infer L extends Uppercase<Alphabet> | "_"}${infer R}`
  ? ApiNameCheck<R, `${P}${L}`>
  : P extends `${infer S}_`
    ? S
    : P;

export type { ApiNameCheck };
