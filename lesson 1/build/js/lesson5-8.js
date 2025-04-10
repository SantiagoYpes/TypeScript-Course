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
//myImg.src
//Classes
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name,
            this.music = music,
            this.age = age,
            this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Santi', 'Electronic', 21, 'JavaSript');
console.log(Dave.getAge);
//Extends
class WebDev extends Coder {
    constructor(computer, name, music, age, lang = 'Typescript') {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I wirte ${this.lang}`;
    }
}
const Mari = new WebDev('HP', 'Mari', 'POP', 23, 'Python');
class Percusionist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `You are ${action} ${this.instrument}`;
    }
}
const Page = new Percusionist('Ana', 'Tambor');
console.log(Page.play('Beating'));
// Static variables and methods
class Peep {
    static getCount() {
        return Peep.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peep.count;
    }
}
Peep.count = 0;
const John = new Peep('John');
const Steve = new Peep('Steve');
const Amy = new Peep('Amy');
console.log(Steve.id);
// Setters and getters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Rock', 'Pop', 'Jazz'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Metal'];
console.log(MyBands.data);
const todaysTransactions = {
    Pizza: -10,
    Books: 20,
    Job: 1000
};
console.log(todaysTransactions.Pizza);
const todayNetTransactions = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: 'John',
    GPA: 3.5,
    classes: [1, 2, 3, 4, 5]
};
//console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const stundentLog = (student, key) => {
    console.log(`Studen: ${key}: ${student[key]}`);
};
const monthlyIncomes = {
    salary: 1000,
    bonus: 500,
    sidehustle: '1000'
};
for (const stream in monthlyIncomes) {
    console.log(`${stream}: ${monthlyIncomes[stream]}`);
}
// Generics
// Is used when we dont know what type of arguments we are gonna receive when a function is called
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const boolCheck = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const processUser = (user) => {
    // Logic to process
    return user;
};
// Here we dont have problems because there is a property id
console.log(processUser({ user: 'Santi', id: 123 }));
//Now we have problems because id property is missing
//console.log(processUser({user:'Daniel'}))
const getUsersProperties = (users, key) => {
    return users.map(user => user[key]);
};
//Example with class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get value() {
        return this.data;
    }
    set value(v) {
        this.data = v;
    }
}
const store = new StateObject("Santi");
console.log(store.value);
store.value = "Samu";
// We can specify the type that are we going to pass to the object
const myState = new StateObject("");
