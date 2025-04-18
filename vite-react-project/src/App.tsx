//import Heading from "./components/Heading";
//import Section from "./components/Section";
import Counter from "./components/Counter";
//import List from "./components/List";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { CounterProvider, initState } from "./context/CounterContext";

interface User{
  id: number,
  username : string
}

type fibFunc = (n:number) =>number

const fib:fibFunc = (n) =>{
  if(n<=2){
    return n
  }
  return fib (n-1) + fib(n-2)
}

const myNum: number = 37


function App() {
  const [count, setCount] = useState<number>(1)
  const [users, setUsers] = useState<User[] | null >(null)

  const inputRefer = useRef<HTMLInputElement>(null)
  

  useEffect(() => {
    console.log('mounting')
    console.log('Users:',users)
    return () => {
      console.log('unmounting')
    }
  }, [users])


  const addTwo = useCallback(
    () => {
      console.log(inputRefer?.current?.value)
      setCount(prev =>prev+2)
    },
    [],
  )
  
  const result = useMemo(()=> fib(myNum),[myNum])

  return (
    <>
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>{(num:number) => <>Current Cunter is: {num}</>}</Counter>
    </CounterProvider>
    </>
  )
}

export default App
