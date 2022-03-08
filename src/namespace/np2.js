var Shape;
(function (Shape) {
    var pi = Math.PI;
    // 这些变量只能在这个Shape命名空间下可见
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
// 命名空间是可以拆分的，同名的
