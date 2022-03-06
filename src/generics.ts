function log(value: string): void {
  console.log(value);
}

// 使用函数重载或者any
// 泛型就是广泛的，不预先确定的数据类型，具体的类型在使用的时候才能确定
function log2<T>(value: T): T {
  console.log(value);
  return value;
}
// 不需要预先指定类型，相当于any类型
// 可以保证输入和返回是一致的
log2("1"); // 利用类型推断
log2<string>("1"); // 显式声明

// 泛型定义函数类型
// 去掉函数名称
type Log = <T>(value: T) => T;
let myLog: Log = log2;

// 泛型接口
// 去掉函数名称
// 与上面等价
interface LogInterface {
  <T>(value: T): T;
}
let myLog2: LogInterface = log2;

// 上面的泛型只约束了函数
// 泛型声明在接口名后面，整个接口都可以受到约束
// 泛型默认类型
interface LogInterface2<T = string> {
  (value: T): T;
}

let myLog3: LogInterface2<number> = log2;

interface Test<T = string> {
  (value: T): T;
  age: T;
}

let test: Test<number> = ((value) => value) as Test<number>;
test.age = 123;

// 泛型类
// 泛型不能约束静态成员
class React<S, P> {
  constructor(public state: S, public props: P) {
    this.state = state;
    this.props = props;
  }

  run(value: S) {
    console.log(value);
    return value;
  }
}

let instance = new React<number, string>(2, "1");
// instance.run("1"); // 会报错，实例方法受到泛型约束
instance.run(11); // 会报错

console.log(instance);

class Tools<T> {
  do(value: T) {
    console.log(value);
    return value;
  }
}

const tools1 = new Tools<number>();
tools1.do(1);

const tools2 = new Tools();
tools2.do("jfklajfkl");

interface length {
  length: number;
}
function Tools2<T extends length>(value: T): T {
  console.log(value);
  console.log(value.length);
  return value;
}
// 传入的值必须有length属性
Tools2({ length: 1 });
Tools2([]);
Tools2("sdjfklsdj");

// 泛型的好处
// 1. 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束
