## ts 代码无法通过 node 执行，可以安装 ts-node 省去编译成 js 后再用 node 执行的步骤

## tsconfig.json

"target":"es5 选项指定编译的目标语言是什么版本，默认是 es5，可以选择比如 es2015 也就是 es6
在命令行中 tsc 命令是 es3

"mode":"commonjs" 选项指定要编译成什么样的模块系统，默认都是 commonjs，还可以选择 amd，umd，es2015

如果在 tsc 命令后接上了输入文件，就会忽略 tsconfig.json 的配置
-t 是 target 的缩写

如果-t 是 es3 或者 es5 那么"mode"就是 es2015
通常使用默认配置即可

es6 和 commonjs 在处理顶级导出的方式不一样，es6 允许模块有一个顶级导出，也允许有自己的导出，commonjs 只允许有一个顶级导出，顶级导出存在时，其他导出无效

在程序中都使用 es6 是不会有问题的，因为ts加上的default属性是无感知的，调用的时候也会加上default，如果一个模块用es6模块做导出，另外一个模块用非es6做导入，就会产生问题
