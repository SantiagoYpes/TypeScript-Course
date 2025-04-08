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

myImg.src

