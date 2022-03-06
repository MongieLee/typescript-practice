enum Type {
  Strong,
  Week,
}

class Java {
  hiJava() {
    console.log("java");
  }
  java: any;
}

class JavaScript {
  hiJavascript() {
    console.log("javascript");
  }
  javascript: any;
}

function getLanguage(type: Type, x: number | string) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if ((lang as Java).hiJava) {
    (lang as Java).hiJava();
  } else {
    (lang as JavaScript).hiJavascript();
  }
  // 通过断言来判断，可读性很差

  // instanceof
  if (lang instanceof Java) {
    lang.hiJava();
  } else {
    lang.hiJavascript();
  }

  // in关键字
  if ("java" in lang) {
    lang.hiJava();
  } else {
    lang.hiJavascript();
  }

  // typeof 判断基本类型
  if (typeof x === "string") {
    x.length;
  } else {
    x.toFixed(2);
  }

  // 类型保护函数，需要自定义
  if (isJava(lang)) {
    lang.hiJava();
  } else {
    lang.hiJavascript();
  }

  return lang;
}

// 类型保护函数，需要自定义
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).hiJava !== undefined;
}

getLanguage(Type.Strong, 1);

// 什么是类型保护
// Typescript能够在特定的区块中保证变量属于某种确定的类型
// 可以在次区块中放心地引用此类型的属性，或者调用此类型的方法
