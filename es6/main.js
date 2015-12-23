'use strict';
{
    let a = 10;
    var b = 8;
}


var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[8](); // 8