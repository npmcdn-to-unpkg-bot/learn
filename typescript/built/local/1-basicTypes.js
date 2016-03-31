// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var age = 11;
// String
var myName = 'bob';
// template strings
// 使用反引号包裹模板字符串
// 使用${}嵌入表达式
var sentence = "Hello, my name is " + myName + ".\n        I'll be " + (age + 1) + " years old next month.";
// 下面的与上面的属于异曲同工
var sentence2 = 'Hello,my name is ' + myName +
    'I\' be ' + (age + 1) + 'years old next month.';
// Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple
var x;
x = ['Hello', 1]; // ok
// x = [1, 'Hello'] error
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
alert(Color[2]);
// Any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = 4;
var listAny = [1, true, 'free'];
listAny[1] = 100;
// Void
function warnUser() {
    alert('This is my warning message');
}
// void通常用于无返回值的方法，定义变量没什么用
// let unusable: void = undefined;
// Type assertions
// 当定义的变量类型为 Any 时，在程序运行时，告诉它我是什么类型的
// 方法1：
var someValue = 'this is a string';
var strLength = someValue.length;
// 方法2：
var someValueTwo = 'this is a string';
var strLengthTwo = someValueTwo.length;
//# sourceMappingURL=1-basicTypes.js.map