// 相当于commonjs的顶级导出，这个模块不能有其他导出了
export = function () {
  console.log("123");
};

// export let a = 1; 写了就会报错
