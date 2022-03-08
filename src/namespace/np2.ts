namespace Shape {
  const pi = Math.PI;
  // 这些变量只能在这个Shape命名空间下可见
  export function cricle(r: number) {
    return pi * r ** 2;
  }
}
// 命名空间是可以拆分的，同名的
