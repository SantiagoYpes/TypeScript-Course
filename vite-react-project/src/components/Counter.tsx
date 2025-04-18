import {  ReactElement, ReactNode } from "react";
import { UseCounter, UseCounterText } from "../context/CounterContext";
type ChildrenType ={
    children: (num: number) =>ReactNode
}

const Counter = ({children}: ChildrenType) => {
  const {count, increment, decrement} = UseCounter()
  const {text, handleTextInput} = UseCounterText()
  return (
    <>
        <h1>Counter</h1>
        <h2>{children(count)}</h2>
        <button onClick={increment}> Increment </button> 
        <button onClick={decrement}> Decrement </button>
        <input type="text" onChange={handleTextInput} />
        <h2>{text}</h2>
    </>
  )
}

export default Counter
