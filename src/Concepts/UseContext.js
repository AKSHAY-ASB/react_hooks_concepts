import React, { useState } from 'react'
import Ccomp from './Ccomp'
import { CounterContext } from './CounterContext'
import Fcomp from './Fcomp'

const UseContext = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className='app header'>
            <button onClick={increment}>increment</button>
            <h3>Counter : {count}</h3>
            <button onClick={decrement}>decrement</button>
            <hr></hr>

            <CounterContext.Provider value={{ count, setCount }}>

                <Fcomp />
                <hr></hr>
                {/* <Ccomp /> */}

            </CounterContext.Provider>
        </div>
    )
}

export default UseContext
