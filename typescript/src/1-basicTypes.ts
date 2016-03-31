// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let age: number = 11;

// String
let myName: string = 'bob';

    // template strings
    // 使用反引号包裹模板字符串
    // 使用${}嵌入表达式
    let sentence: string = `Hello, my name is ${ myName }.
        I'll be ${ age + 1 } years old next month.`

    // 下面的与上面的属于异曲同工
    let sentence2: string = 'Hello,my name is '+ myName +
        'I\' be '+ (age + 1)+ 'years old next month.'

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];

    x = ['Hello', 1]; // ok
    // x = [1, 'Hello'] error

// Enum
enum Color {Red, Green, Blue};

let  c: Color = Color.Red;

alert(Color[2]);

// Any
let notSure: any = 4;

notSure = 'maybe a string instead';

notSure = 4;

let listAny: any[] = [1, true, 'free'];

listAny[1] = 100;

// Void
function warnUser(): void{
    alert('This is my warning message');
}
    // void通常用于无返回值的方法，定义变量没什么用
    // let unusable: void = undefined;

// Type assertions
// 当定义的变量类型为 Any 时，在程序运行时，告诉它我是什么类型的
// 方法1：
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
// 方法2：
let someValueTwo: any = 'this is a string';
let strLengthTwo: number = (someValueTwo as string).length;









