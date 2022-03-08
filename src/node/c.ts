const aaa = require("./a");
const b = require("./b");
const cf = require("../es6/a"); // 我们认为有默认导出，但其实没有，实际是个对象，相当于import * as cf
import test = require("../es6/d"); // 导入d.ts 就可以直接使用函数了
// 前提是    "esModuleInterop": true
// import test from "../es6/d" // 和上面等价的
console.log(aaa);
console.log(b);
// cf(); // 报错
cf.default(); // 可以

test();
