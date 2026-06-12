import { useState, useEffect } from "react";

const UseEffectBehaviourLab = () => {
    const [counter, setCounter] = useState(0)

    const [count, setCount] = useState(0)
    
    // useEffect(()=>{
    //     // const interval = setInterval(()=>{
    //     //     setCounter(prev=> prev + 1)
    //     // },1000)

    //     const interval = setInterval(setCounter(counter+1), 1000)

    //     return () => clearInterval(interval);
    // },[])

    // const checking = setCount(count + 1)
    // console.log(checking);
    
//in this case checking returns undefined because setCount doesnt return a value it say take this execute later.

    return (
        <section className="p-20">
            <h1 className="text-3xl font-semibold text-green-400">UseEffect Behaviour Lab</h1>
            <p>Counter: <span className="text-sm font-bold">{counter}</span></p>

            <p>Count: {count}</p>

            <button onClick={()=> setCount(count+1)} className="">Change Count</button>
        </section>

    )
}

export default UseEffectBehaviourLab;