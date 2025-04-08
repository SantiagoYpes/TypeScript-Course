// Define a variable
let username = 'Santi'
console.log(username)

// Variable basic types
let myName: string
let maningOfLife: number
let isLoading: boolean
let album: any
myName='Santi'
maningOfLife = 42
isLoading = true



let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g


//Arrays and objects

let stringArray: string[] = ['one', 'hey', 'dave']
let pianos: (number|string)[] = ['Yamaha', 'Casio', 3000]
let mixedData = ['EVH', 1984,true]

stringArray.push(myName)
pianos.unshift('Hello')
// Tuples are mor extrict than arrays
let myTuple: [string, number, boolean] = ['David', 42, true]

//Objects
 
let myObj:object
myObj=[]
console.log(typeof myObj)

myObj = pianos
myObj={}

const examObj ={
    prop1:'Dave',
    prop2:true
}

examObj.prop1 ='Santi'

type Pianist ={
    name: string,
    age?: number,
    competitions: (string|number)[]
}

//Interface

interface PianistInterface{
    name: string,
    age?: number,
    competitions: (string|number)[]
}

let santi: Pianist ={
    name: 'Santi',
    age: 21,
    competitions: ['Guitar', 'Ukelele',3000]
}

let samu: Pianist ={
    name: 'Sami',
    competitions: ['Guitar', 'Ukelele',3000]
}

const greetPianist = (pianist:Pianist)=>{
    return `Hello ${pianist.name}!`
}

const agePianist = (pianist:Pianist)=>{
    if (pianist.age) {
        return `Pianist age ${pianist.age/2}!`    
    }
    return 'Pianist dont have age'
    
}

console.log(greetPianist(santi))
console.log(agePianist(samu))

enum Grade {
    U=1,
    B,
    C,
    D,
    G
}



//Functions

//Types Aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type Guitarist ={
    name: string,
    id: stringOrNumber,
    albums : stringOrNumberArray
}

//Literal types
let name1 : 'Dave'
let user : 'Mariana' | 'Santi' | 'Samu'
user = 'Mariana'


const sum = (a:number, b:number) : string => {
    return `Result: ${a+b}`
}

const logMsg = (message: any):void =>{
    console.log(message)
}

logMsg('Hello!!')
logMsg(sum(1,2))

type mathOperation = (a:number, b:number ) => number

const add: mathOperation = (a,b)=>{
    return a+b
}

const subtract: mathOperation =function(a,b){
    return a-b
}

let multiply :mathOperation = function(a,b){
    return a*b
}

let divide:mathOperation = (a,b)=>{
    return a/b
}

console.log(add(21,2))

//optional parameters
const addAll = (a:number, b: number, c?: number):number=>{
    if (typeof c != 'undefined') {
        return a+b+c    
    }
    return a+b
}

const sumAll = (a:number=10, b: number, c: number =2):number=>{
    return a+c+b
}

console.log(addAll(1,2,3))
console.log(addAll(1,2))
console.log(sumAll(1,2,3))
console.log(sumAll(1,2))
console.log(sumAll(undefined,2))

// Rest Parameters

const total = (...nums: number[])=>{
    return nums.reduce((prev, curr)=> prev+curr)
}

const total2 = (a: number,...nums: number[])=>{
    return nums.reduce((prev, curr)=> prev+curr)
}
console.log(total(1,2,3,4,5))
console.log(total2(1,2,3,4,5))

const createError = (errMsg: string): never=>{
    throw new Error(errMsg)
}

const infinite =()=>{
    let i: number = 1
    while (true){
        i++
        if(i >100) break
    }
}
// custom type guard
const isNumber = (value:any) =>{
    return typeof value === 'number' ? true : false
}

// Use of never type
const stringOrNumber = (value : number | string):string =>{
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}