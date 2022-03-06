function initByRole(role: number) {
  if (role === 1 || role === 2) {
    // todo
  } else if (role === 3 || role === 4) {
    // todo
  } else {
    // todo
  }
}
// 这种代码可读性极差，很难记住数字的含义
// 可维护性很差

// 枚举：一组有名字的常量集合
// 使用enum关键字进行声明

// 数字枚举
enum Role {
  Teacher,
  Student,
}
// console.log(Role.Teacher); // 这是0，Student是1，会接着递增

enum Role2 {
  Teacher = 10,
  Student,
}
// console.log(Role2.Teacher); // 这是10，因为定义了初始值，Student就会是11
// 看起来很像对象，实际上被编译成js后就是对象类型，反向映射
let T;
(function (T: any) {
  T[(T["Teacher"] = 0)] = "Teacher";
  T[(T["Student"] = 1)] = "Student";
})(T || (T = {}));

({
  0: "Teacher",
  1: "Student",
  Teacther: 0,
  Student: 1,
});

// 字母串枚举，不可以反向映射
enum Message {
  Success = "成功了",
  Failure = "失败了",
}

// 异构枚举，容易引起混淆，不建议使用
enum Answer {
  N,
  Y = "yes",
}
// 枚举成员是只读类型，不允许修改
enum Char {
  // const,会在编译时计算出结果，以常量的形式出现在运行时环境
  a,
  b = Char.a,
  c = 1 + 3,

  // computed
  // 只有运行时才会被计算
  d = Math.random(),
  e = "123".length,
  // f，在computed后面的枚举成员必须赋初始值
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
}
// 会在编译后移除
// 在不需要对象而需要对象的值的时候就可以使用常量枚举
let moth = [Month.Jan, Month.Feb, Month.Mar];

// 编译后就是以常量值的方式出现
let moth2 = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];

// 枚举类型，枚举和枚举成员都可以作为一种单独的类型存在
enum E {
  a,
  b,
}

enum F {
  a = 0,
  b = 0,
}
enum G {
  a = "apple",
  b = "banana",
}

let e: E = 3;
let f: F = 3;
// 这里可以把任意number赋值给变量，可以超出枚举成员的定义
// e === f;
// 不同类型的枚举不可以进行比较，编译器会报错

let g1: G = G.b;
// 枚举类型的取值只能是枚举成员
let g2: G.b = G.b;
// 这样只能是G.b自身
