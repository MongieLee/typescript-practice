import { a, b, c } from "./a"; // 批量导入
import { P } from "./a"; // 导入接口
import { f as F } from "./a"; // 导入时起别名
import * as All from "./a"; // 导入所有成员，包括default，绑定在all
import myFunction from "./a"; // 导入默认导入

let p: P = {
  x: 1,
  y: 1,
};

console.log(a, b, c);
console.log(F);
console.log(All);
console.log(All.default);
console.log(myFunction);
