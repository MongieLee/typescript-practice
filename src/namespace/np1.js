/// <reference path="np2.ts"/>
var Shape;
(function (Shape) {
  var pi = Math.PI;
  // 这些变量只能在这个Shape命名空间下可见
  function square(r) {
    return r * r;
  }
  Shape.square = square;
})(Shape || (Shape = {}));
// 命名空间是可以拆分的，同名的
Shape.cricle(1);
// 这里会报错，因为cricle实在另一个文件定义的，这里就形成了一种引用，需要添加三斜线指令
Shape.square(1);
 console.log(1)
// 命名空间正确的用法应该是先编译成js，再通过script标签进行引入
