"use strict";
// Define a variable
let username = 'Santi';
console.log(username);
// Variable basic types
let myName;
let maningOfLife;
let isLoading;
let album;
myName = 'Santi';
maningOfLife = 42;
isLoading = true;
let postId;
let isActive;
let re = /\w+/g;
//Arrays and objects
let stringArray = ['one', 'hey', 'dave'];
let pianos = ['Yamaha', 'Casio', 3000];
let mixedData = ['EVH', 1984, true];
stringArray.push(myName);
pianos.unshift('Hello');
// Tuples are mor extrict than arrays
let myTuple = ['David', 42, true];
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = pianos;
myObj = {};
const examObj = {
    prop1: 'Dave',
    prop2: true
};
examObj.prop1 = 'Santi';
let santi = {
    name: 'Santi',
    age: 21,
    competitions: ['Guitar', 'Ukelele', 3000]
};
let samu = {
    name: 'Sami',
    competitions: ['Guitar', 'Ukelele', 3000]
};
const greetPianist = (pianist) => {
    return `Hello ${pianist.name}!`;
};
const agePianist = (pianist) => {
    if (pianist.age) {
        return `Pianist age ${pianist.age / 2}!`;
    }
    return 'Pianist dont have age';
};
console.log(greetPianist(santi));
console.log(agePianist(samu));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["G"] = 5] = "G";
})(Grade || (Grade = {}));
//Literal types
let name1;
let user;
user = 'Mariana';
const sum = (a, b) => {
    return `Result: ${a + b}`;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!!');
logMsg(sum(1, 2));
const add = (a, b) => {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
let multiply = function (a, b) {
    return a * b;
};
let divide = (a, b) => {
    return a / b;
};
console.log(add(21, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c != 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + c + b;
};
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2));
console.log(sumAll(1, 2, 3));
console.log(sumAll(1, 2));
console.log(sumAll(undefined, 2));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
const total2 = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4, 5));
console.log(total2(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// Use of never type
const stringOrNumber = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
