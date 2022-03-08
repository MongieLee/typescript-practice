// T extends U ? X : Y
// 如果类型T可以被赋值给类型U，那么就是X类型，否则就是Y类型
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends Function
  ? "Function"
  : "object";

type T1 = TypeName<string>; // T1:"string"

type T2 = TypeName<string | string[]>; // T:"string" | "object"
// (A | B) extends U ? X : Y
// A extends U ? X : y | B extends U ? X ? Y

type Diff<T, U> = T extends U ? never : T;

type T3 = Diff<"a" | "b" | "c", "a" | "c">; // T3:"b" , 过滤掉了T中可以赋值给类型U的
// Diff<"a", "a" | "c"> | Diff<"b", "a" | "c"> | Diff<"c", "a" | "c">
// never | "b" | "never"
// "b"

type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>;
// T5:string | number

// Ts官方实现的Diff 叫做 Exclude
// NotNull叫做 NonNullable
type T6 = Extract<"a" | "b", "a" | "d">; // T6:"a"
type T7 = ReturnType<() => string>; // T7:string
