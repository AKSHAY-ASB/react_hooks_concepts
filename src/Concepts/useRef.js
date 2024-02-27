import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const UseRef = () => {

    const [name, setName] = useState("");
    const [counter,setCounter] = useState(0);

    // const diaplayName = () => {
    //     return name
    // }

    const diaplayName = useCallback((greeting)=>{
        return greeting + " " + name
    },[name])

    // console.log("useCallback---->", diaplayName);

    const result = useMemo(() => {
       return factorial(counter);
    },[counter]);


    // console.log("useMemo----->", result);

    const currentVal = useRef("");
    const previousVal = useRef("");
    
    // console.log(currentVal);

    const reset = () => {
        setName("");
        currentVal.current.focus();
        console.log(currentVal.current.value)
    }

    useEffect(()=>{
        previousVal.current = counter;
    },[counter]);


    const increment = () => {
        // setCounter(Math.ceil(Math.random() * 100));
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1);
    }



  return (
    <div>
      <input 
        ref={currentVal}
        type="text" 
        placeholder='enter name'
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={reset}>Reset</button>
      <div>My Name is {name}</div>

      <button onClick={increment}>Increment</button>
      <div>Counter {counter}</div>
      {typeof previousVal.current !== "undefined" && (
          <h3>Previous counter : {previousVal.current}</h3>
      )}
      <button onClick={decrement}>Decrement</button>
      <h1>Factorial of {counter}: <span>{result}</span> </h1>

    <hr></hr>
      <DisplayName diaplayName={diaplayName}></DisplayName>
    </div>
  )
}

const DisplayName = (({diaplayName})=> {
        const [value,setValue] = useState("");
        useEffect(()=>{
            setValue(diaplayName("Hello"));
            console.log("Component rendered........s");
        },[diaplayName])
        return  <div>My Name is {value}</div>
});


function factorial(n){

        let i = 0;
        while(i < 200000000) i++;

    if(n < 0){
        return -1;
    }
    if(n === 0 ){
        return 1;
    }
    return n * factorial(n-1);
}

export default UseRef
