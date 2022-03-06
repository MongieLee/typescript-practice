//  交叉类型
interface DogInterface {
  run(): void;
}

interface CatInterface {
  jump(): void;
}

// 交叉类型用&符号进行链接
// 变量应该拥有两个的接口的方法
// 取所有类型的并集
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};

// 联合类型
// 声明的类型不确定，可能是多个中的一个
let a: number | string = "a";
// let b: "a" | "b" = "c"; // 报错，取值只能是"a","b "

class Dogg implements DogInterface {
  run() {}
  eat() {}
}

class Catt implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl,
}

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dogg() : new Catt();
  pet.eat(); // 共有属性，取交集
  return pet;
}

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  r: number;
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return "这是square";
    case "circle":
      return "这是circle";
    case "rectangle":
      return "这是rectangle";
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
