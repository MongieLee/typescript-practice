import "./function";
import "./enum";
import "./class";
import "./generics";
import "./es6/c";
const hello: string = "hi typescript";

document.querySelector(".app")!.textContent = hello;

// 原始类型
let bool: boolean = true;
let num: string = "abc";
let str: number = 123;

// 数组
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [4, 5, 6];
let arr3: Array<number | string> = [4, 5, 6, "7"];

// 元组
let tuple: [number, string] = [0, "1"];
// 可以通过push为数组添加新元素，但是不允许访问
// tuple.push(3);
//  tuple[2]; // 会报错

// 函数
let add = (x: number, y: number): number => x + y;
// 返回值类型一般可以省略
let compute: (x: number, y: number) => number;
compute = (q, w) => q + w;

// 对象
let obj: object = { x: 1, y: 2 };
// obj.x = 3; // 会报错，只定义了是object，没有定义有哪些属性
let obj2: { x: number; y: number } = { x: 1, y: 2 };
obj2.x = 3; // 这样就不报错了

// symbol
let s1: Symbol = Symbol();
let s2 = Symbol();
// console.log(s1 === s2); // false

// undefined and null
// 默认只能赋值为undefined本身
// 根据官方文档，undefined和nulll是任何类型的子类型
// 通过修改配置允许赋值,    "strictNullChecks": false
// 不开启的话就需要联合类型，设置为let num:number|null|undefined
let un: undefined = undefined;
let nu: null = null;

// num = null;
// num = undefined;

// void,表示没有返回值
// undefined不是保留字，可以被自定义的覆盖
/**
 * (function(){
 *  var undefined = 0;
 * console.log(undefined);
 * })()
 */
let noRetrun = () => {};

// any,不声明类型默认就是any，可以被赋值任何值
let x;
x = 1;
x = "1";
x = {};
x = [];
x = () => {};

// never，永远没有返回值的类型，报错和死循环
let eroor = () => {
  throw new Error("error");
};
let endless = () => {
  while (true) {}
};
