// 单独导出
export let a = 1;

// 批量导出
let b = 2;
let c = 3;
export { b, c };

// 导出接口
export interface P {
  x: number;
  y: number;
}

// 导出函数
export function f() {}

// 导出时起别名
function g() {}
export { g as G };

// 默认导出，无需函数名，有也会被忽略
export default function test() {}

// 引入外部模块，重新导出
export { str as strr } from "./b";
// ./b.ts 中有 export let str = "str";
