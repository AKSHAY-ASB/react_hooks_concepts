import React, { useContext } from 'react'
import { CounterContext } from './CounterContext';



const Fcomp = () => {

    const { count, setCount } = useContext(CounterContext);

    return (
        <div>
            <h1>Functional Component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <ChildComp />
        </div>
    )
}

const ChildComp = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div className='border'>
            <h1>Child of Functional Component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>decrement</button>

        </div>
    )
}

export default Fcomp
