import React from 'react'
import { useState } from 'react'

const Counter = () => {

    let [counter,setCounter] = useState(0)

    const incrementCounter=()=>{
        setCounter(counter + 1)
    }

    const decrementCounter = ()=>{
        setCounter(counter - 1)
    }
  
    return (
    
        <div>
            <h1>Counter</h1>
            <button  className='btn btn-success' onClick={incrementCounter}>+</button>
            <span> {counter} </span>
            <button className='btn btn-success' onClick={decrementCounter}> - </button>
        </div>
  )
}

export default Counter