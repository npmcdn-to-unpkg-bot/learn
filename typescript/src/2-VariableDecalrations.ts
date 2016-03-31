// 总的来说就是 var 是有很多不好的东西的，比如闭包，作用域问题；

// let 为块级作用域
// let 不能重复定义
// let 不会声明提前

// const 用于常量

const IM_STILL = 'im still';


// Destructuring 解构赋值

// Array destructuring
let input = [1, 2];
let [first, sencod] = input;

console.log(first); // outputs 1
console.log(sencod); // outputs 2

function f([first, sencod]: [number, number]) {
    console.log(first);
    console.log(sencod);
}

let [firstValue, ...rest] = [1, 2, 3, 4];
console.log(firstValue) // 1
console.log(rest) // [2,3,4]

let [firstVlueTwo] = [1, 2, 3];
console.log(firstVlueTwo) // 1

let [, second, , fourth] = [1, 2, 3, 4];
console.log(second) // 2
console.log(fourth) // 4

// Object destructuring
let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
}

let {a, b} = o;

console.log(a) // foo
console.log(b) // 12

// 不想用之前对象里的名称，可以用下面的方法

let {a: newName1, b: newName2} = o;

console.log(newName1) // foo
console.log(newName2) // 12

// 如果想指定解构的类型
let {a: newName3, b: newName4}: {a:string, b:number} = o;

// 默认值
function keepWholeObject(wholeObject:{a:string, b?:number}) {
    let {a, b = 1001} = wholeObject;
}

// 函数声明与解构赋值
type C = {a:string, b?:number};

function fTwo({a, b}: C):void {

}

function fThree({a, b} = {a: '', b: 0}):void {

}

function fFour({a, b = 0} = {a: ''}):void {

}

fFour({a: 'yes'}) // ok
fFour() // ok




