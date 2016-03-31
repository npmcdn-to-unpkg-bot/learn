// 总的来说就是 var 是有很多不好的东西的，比如闭包，作用域问题；
// let 为块级作用域
// let 不能重复定义
// let 不会声明提前
// const 用于常量
var IM_STILL = 'im still';
// Destructuring 解构赋值
// Array destructuring
var input = [1, 2];
var first = input[0], sencod = input[1];
console.log(first); // outputs 1
console.log(sencod); // outputs 2
function f(_a) {
    var first = _a[0], sencod = _a[1];
    console.log(first);
    console.log(sencod);
}
var _a = [1, 2, 3, 4], firstValue = _a[0], rest = _a.slice(1);
console.log(firstValue); // 1
console.log(rest); // [2,3,4]
var firstVlueTwo = [1, 2, 3][0];
console.log(firstVlueTwo); // 1
var _b = [1, 2, 3, 4], second = _b[1], fourth = _b[3];
console.log(second); // 2
console.log(fourth); // 4
// Object destructuring
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, b = o.b;
console.log(a); // foo
console.log(b); // 12
// 不想用之前对象里的名称，可以用下面的方法
var newName1 = o.a, newName2 = o.b;
console.log(newName1); // foo
console.log(newName2); // 12
// 如果想指定解构的类型
var newName3 = o.a, newName4 = o.b;
// 默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function fTwo(_a) {
    var a = _a.a, b = _a.b;
}
function fThree(_a) {
    var _b = _a === void 0 ? { a: '', b: 0 } : _a, a = _b.a, b = _b.b;
}
function fFour(_a) {
    var _b = _a === void 0 ? { a: '' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
}
fFour({ a: 'yes' }); // ok
fFour(); // ok
//# sourceMappingURL=2-VariableDecalrations.js.map