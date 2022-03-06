// 函数定义
function add1(x: number, y: number) {
  return x + y;
}
let add2: (x: number, y: number) => number;

interface Add3 {
  (x: number, y: number): number;
}

type Add4 = (x: number, y: number) => number;
// 这四种都是等价的
// 后三者只是定义没有实现

// ts中对函数的参数是必须匹配的
// 可选参数必须放在必选参数后面
function add5(x: number, y?: number) {
  return y ? x + y : x;
}
add5(1);

function add6(x: number, y = 1, z: number, q = 1) {
  return x + y + z + q;
}
add6(1, undefined, 3);
// 如果不传第二个undefined，3就会被赋值给y

// 剩余参数，和es6一致
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur, 0);
}
add7(1, 2, 3, 4, 5, 76);

// 函数重载
// 函数的名字相同，入参个数或者入参类型不同，就实现了函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any): any {
  const first = rest[0];
  if (typeof first === "string") {
    return rest.join(",");
  }
  if (typeof first === "number") {
    return rest.reduce((pre: number, cur: number) => pre + cur);
  }
}
console.log(add8(1, 2, 3, 4));
console.log(add8("a", "b", "c"));
