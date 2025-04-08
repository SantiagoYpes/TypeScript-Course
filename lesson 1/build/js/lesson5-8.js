"use strict";
let a = 'hello';
let b = a;
let c = a;
let d = 'World';
let e = 'nice';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myOp = addOrConcat(2, 2, 'concat');
let myOp1 = addOrConcat(2, 2, 'add');
//Error
//10 as string
// nice
10;
const img = document.querySelector('img');
const myImg = document.getElementById('#id');
const nextImg = document.getElementById('#id');
myImg.src;
