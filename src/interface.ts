let add: (x: number, y: number) => number;

interface Add {
  (x: number, y: number): number;
}

type Add2 = (x: number, y: number) => number;
// 这几种方式的定义是等价的
let add3: Add = (a, b) => a + b;

// 混合接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  // 这里需要用到类型断言
  lib.version = "1";
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
