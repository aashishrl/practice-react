import { useMemo } from "react";

const UseMemo = () => {

    const test = useMemo();
    console.log(test);
    
    return (
        <section className="flex gap-2 p-20">
            <button>Click Me</button>
            
        </section>
        
    )
}

export default UseMemo;