import React, { useState } from 'react'
import ScreenComponent from './ScreenComponent';
import UseCounter from './UseCounter'

const CustomHook = () => {


    const [counter , increment, decrement, reset] = UseCounter(0);

    // const [counter, setCounter] = useState(0);
    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    // const decrement = () => {
    //     setCounter(counter - 1);
    // }
    // const reset = () => {
    //     setCounter(counter);
    // }

  return (
    <div>
      <h2>Custom Hooks example</h2>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
        <ScreenComponent/>
    </div>
  )
}

export default CustomHook
