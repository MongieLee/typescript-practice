interface Obj {
  q: string;
  w: number;
  e: string;
}

// 类型别名
type ReadonlyObj = Readonly<Obj>;
// ReadOnly是内置的泛型接口
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };
// 可快速映射出只读类型

type PartialObj = Partial<Obj>;
// 全部都是可选的

type PickObj = Pick<Obj, "a" | "b">;

type RecordObj = Record<"a" | "b", Obj>;
