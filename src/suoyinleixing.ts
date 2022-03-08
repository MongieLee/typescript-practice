let obj = {
  a: 1,
  b: 2,
  c: 3,
};

function getValues(obj: any, keys: string[]) {
  return keys.map((key) => obj[key]);
}

getValues(obj, ["e", "d"]);
// 此时并不会报错，即使对象没有这些key

// typeof T
interface Obj {
  a: number;
  b: string;
}

let key: keyof Obj;
// key: "a"|"b"

// T[K] 索引访问
let value: Obj["a"];

// 通过泛型约束配合索引来达到效果
function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}
// getValues2(obj, ["e", "d"]); // 此时Ts会报错，因为找不到对应的索引
getValues2(obj, ["a", "b"]); // "a"和"b"是存在的
