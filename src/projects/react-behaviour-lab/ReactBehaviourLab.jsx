import { useState, useEffect } from "react";

const ReactBehaviourLab = () =>{
    const [count, setCount] = useState(0);    

    const increaseTwice = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    const  [countNo, setCountNo] = useState(0);

    useEffect(()=>{
        setCountNo(prev => prev + 1)
        console.log(`Rendered ${countNo}`)
    },[count])
    
    return (
        <section className="p-20">
            <p>Count: {count}</p>
            <div className="flex gap-2 mt-2">
                <button onClick={()=>setCount(count+1)} className="px-4 py-1 text-sm text-white bg-green-700 rounded-sm border-none!">Add</button>
                <button onClick={increaseTwice} className="px-4 py-1 text-sm text-white bg-yellow-700 rounded-sm border-none!">Twice</button>
                <button onClick={()=>setCount(0)} className="px-4 py-1 text-sm text-white bg-red-700 rounded-sm border-none!">Reset</button>
            </div>
        </section>
    )
}

export default ReactBehaviourLab;