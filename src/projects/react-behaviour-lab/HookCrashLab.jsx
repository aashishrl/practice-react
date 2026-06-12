import {useState, useEffect} from 'react';

const HookCrashLab = () => {
    const [count, setCount] = useState(0)

    if(count===0){
        const [name, setName] = useState("Hook Crash Check")
    }
    const [counts, setCounts] = useState(0)

    // const [do , setDo] = useState("")
    
    return (
        <section className="p-20">
            <h1 className='text-2xl font-semibold text-green-400'>Hook Crash Lab</h1>
            
            <button onClick={()=> setCount(prev=> prev+1)}>Click Me</button>
        </section>
    )
}

export default HookCrashLab;