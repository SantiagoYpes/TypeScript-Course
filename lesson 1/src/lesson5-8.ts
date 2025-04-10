type One = string
type Two = string|number
type Three = 'hello'

let a: One = 'hello'
let b = a as Two
let c = a as Three

let d = <One> 'World'
let e = <string|number>'nice'

const addOrConcat = (a: number, b:number, c:'add' | 'concat'): string |number =>{
    if (c === 'add') return a+b
    return ''+a+b
}

let myOp:string = addOrConcat(2,2,'concat') as string

let myOp1:number = addOrConcat(2,2,'add') as number

//Error
//10 as string

// nice
(10 as unknown)as string

const img = document.querySelector('img')!
const myImg = document.getElementById('#id') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#id')

//myImg.src



//Classes

class Coder {
    secondLang!:string
    constructor(
        public name:string,
        readonly music: string, 
        private age: number, 
        protected lang: string = 'Typescript'){
        this.name = name,
        this.music = music,
        this.age = age,
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
    
}

const Dave = new Coder('Santi', 'Electronic', 21, 'JavaSript')
console.log(Dave.getAge)
//Extends
class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music:string,
        age:number,
        lang:string = 'Typescript'
    ){
        super(name, music, age,lang)
        this.computer = computer
    }
    public getLang(){
        return `I wirte ${this.lang}`
    }
}

const Mari = new WebDev('HP','Mari','POP',23,'Python')
//Interface
interface Musician{
    name:string
    instrument:string
    play(action:string):string
}

class Percusionist implements Musician{
    constructor(public name:string, public instrument:string) {
        this.name = name
        this. instrument = instrument
    }
    public play(action:string):string{
        return `You are ${action} ${this.instrument}`
    }
}

const Page = new Percusionist('Ana','Tambor')
console.log(Page.play('Beating'))

// Static variables and methods
class Peep {
    static count:number = 0

    static getCount(): number{
        return Peep.count
    }
    public id:number

    constructor(public name:string) {
        this.name= name
        this.id = ++Peep.count
    }
}

const John = new Peep('John')
const Steve = new Peep('Steve')
const Amy = new Peep ('Amy')

console.log(Steve.id)

// Setters and getters
class Bands {
    private dataState:string[]
    constructor (){
        this.dataState = []
    }
    public get data():string[]{
        return this.dataState
    }
    public set data(value: string[]){
        if(Array.isArray(value)&& value.every(el =>typeof el === 'string')){
            this.dataState = value
            return
        }else throw new Error ('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Rock', 'Pop', 'Jazz']
console.log(MyBands.data)
MyBands.data = [...MyBands.data,'Metal']
console.log(MyBands.data)
//MyBands.data = ['Van Halen',2134]

// Index Signatures

interface TransacionObj {
    readonly [index:string] : number
    Pizza : number,
    Books: number,
    Job: number
}

const todaysTransactions : TransacionObj ={
    Pizza: -10,
    Books: 20,
    Job: 1000
}
console.log(todaysTransactions.Pizza)

const todayNetTransactions = (transactions : TransacionObj):number =>{
    let total = 0
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return total
}

interface Student {
    //[key:string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?:number[]
}

const student : Student ={
    
    name: 'John',
    GPA: 3.5,
    classes: [1,2,3,4,5]
}

//console.log(student.test)

for (const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const stundentLog = (student:Student, key: keyof Student) =>{
    console.log(`Studen: ${key}: ${student[key]}`)
}

// Another way to create interface and use index signatures
type Streams = 'salary' |'bonus'|'sidehustle'
type Incomes = Record<Streams, number |string >

const monthlyIncomes : Incomes ={
    salary: 1000,
    bonus: 500,
    sidehustle: '1000'
}
for (const stream in monthlyIncomes){
    console.log(`${stream}: ${monthlyIncomes[stream as keyof Incomes]}`)
}


// Generics
// Is used when we dont know what type of arguments we are gonna receive when a function is called
const isObj = <T>(arg: T): boolean =>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

const isTrue = <T>(arg: T):{arg: T, is:boolean} =>{
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is:false}
    }
    if (isObj(arg) && Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

//Another way with interfaces
interface BoolCheck<T> {
    arg : T,
    is: boolean
}

const boolCheck = <T>(arg: T):BoolCheck<T> =>{
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is:false}
    }
    if (isObj(arg) && Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}


interface HasID{
    id: number
}

const processUser = <T extends HasID> (user : T):T=>{
    // Logic to process
    return user
}
// Here we dont have problems because there is a property id
console.log(processUser ({user: 'Santi', id:123}))

//Now we have problems because id property is missing
//console.log(processUser({user:'Daniel'}))

const getUsersProperties= <T extends HasID, K extends keyof T> (users:T[], key:K):T[K][]=>{
    return users.map(user => user[key])
}

//Example with class

class StateObject<T>{
    private data:T
    constructor(value:T){
        this.data = value
    }
    
    public get value() : T {
        return this.data
    }
    
    public set value(v : T) {
        this.data = v;
    }
}

const store = new StateObject("Santi")
console.log(store.value)
store.value = "Samu"
// We can specify the type that are we going to pass to the object
const myState = new StateObject<(string|number|boolean)>("")