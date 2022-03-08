// 接口的声明合并

interface A {
  x: number;
  foo(bar: number): number; // 4
  foo(bar: "a"): number; // 2
}

interface A {
  y: number;
  foo(bar: string): string; // 3
  foo(bar: "b"): number; // 1
}

// 这俩接口会合并成一个接口
// 非函数成员要求保证唯一性，如果不一致，需要保证类型相同
// 顺序，在接口内部，按照书写顺序决定，接口之间是后面的接口排在前面
// 函数成员会被声明为函数重载,实现的时候需要编写更广泛的类型
//  函数参数是字面量时，会提升到最顶端
let ccc: A = {
  // 需要具备这个接口全部成员
  x: 2,
  y: 1,
  foo(bar: any) {
    return bar;
  },
};

// 命名空间的合并，导出是不可以重复的

// 命名空间和函数的合并
// 相当于给函数增加一个属性
function Lib() {}
namespace Lib {
  export let version = "1.0";
}
console.log(Lib.version);

// 类和命名空间的合并，相当于新增一个静态属性
class Lib2 {}
namespace Lib2 {
  export let version = "2.0";
}
console.log(Lib2.version);

// 命名空间和美剧
// 相当于给枚举成员添加了一个方法
enum Color {
  Red,
  Bule,
}
namespace Color {
  export function mix() {}
}
// 需要注意namespace需要放在class和function后面，enum没有关系
