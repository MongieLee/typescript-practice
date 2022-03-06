class Animal {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  age?: number;
  run() {
    this.ask();
    this.pro();
  }
  private ask() {}
  protected pro() {}
}

console.log(Animal.prototype);
let dog = new Animal("dog");
console.log(dog);
// 成员属性必须初始化

// 成员修饰符
// public private protected
// 默认就是public，写不写都可以
// private表示私有的，只有类自身可以调用
// protected表示只能在类或者子类中进行访问，而不能在类的实例中访问
class Dog extends Animal {
  private constructor(name: string, color: string) {
    super(name);
    this.color = color;
    // this需要在super后面再调用
    // this.ask() // 这里无法访问，因由只有Animal自己可以访问
    this.pro(); // 可以访问被protected修饰的方法
  }
  color: string;
}
// 当构造函数被赋予private后，表示类既不能被实例化，也不能被继承
// 下面的语句都会报错
// new Dog("a", "red");
// class Any extends Dog;

class Cat {
  protected constructor() {}
}
// 构造函数添加protected后，表示类只能被继承，不能实例化
// 相当于一个基类

// 只读属性only，构造参数修饰符，静态成员
// 不可被更改，一定要初始化
class Tigger {
  // 相当于省去了声明name:string;
  constructor(public name: string) {
    this.name = name;
  }
  // name: string;

  static readonly why: string = "why";
  static edit: string = "edit";
  readonly food: string = "clicken";
}

// Tigger.why = "123"; // 这里会报错，因为是只读的
Tigger.edit = "123";

class SmallTigger extends Tigger {}

SmallTigger.why;
// 类的静态成员可以被继承

// 抽象类，只能被继承而不能被实例化的类
// 可以定义实现方法和抽象方法，抽象方法子类必须实现
abstract class Person {
  // 实现方法
  eat() {
    console.log("eat");
  }

  abstract sleep(): void;
}
// new Person(); // 无法实例化

class Man extends Person {
  sleep(): void {
    console.log("man sleep");
  }

  constructor() {
    super();
  }
}

// 抽象类实现多态
class Woman extends Person {
  constructor() {
    super();
  }

  sleep(): void {
    console.log("woman sleep");
  }
}

const persons: Array<Person> = [new Man(), new Woman()];
persons.forEach((item) => {
  console.log(item);
  item.sleep();
});

// 实现链式调用
class WorkFlow {
  step1() {
    return this;
  }

  step2() {
    return this;
  }
}

new WorkFlow().step1().step2;

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow().step1().next().step2();

// 类和接口之间的关系
interface Human {
  name: string;
  eat(): void;
  // new (name: string): void;
}

class Asian implements Human {
  constructor(public name: string) {
    this.name = name;
  }
  eat() {}
}
// 实现接口时需要必须实现接口中声明的所有属性
// 接口只能约束类的共有成员
// 接口不能约束构造函数

// 接口的继承
// 一个接口可以继承多个接口
interface GrandFather {
  name: string;
}

interface Father {
  age: number;
}

interface Son extends GrandFather, Father {
  cry(): void;
}

let boy: Son = {
  cry() {},
  age: 1,
  name: "son",
};

// 接口可以继承接口以外还能继承类
class Auto {
  state = 1;
  // private state2 = 2;
  // protected state3 = 3;
}

// 会将成员抽象
interface AutoInterface extends Auto {
  // 隐藏了state属性
}

// 当Auto添加了非共有属性后，B不是Auto，不能包含其非共有成员
class B implements AutoInterface {
  state = 1;
}

// 这里不用写state的原因是，Bus就是Auto
class Bus extends Auto implements AutoInterface {}

// 接口可以互相继承
// 类也可以互相继承
// 类可以实现接口
// 接口只能约束类的共有成员
