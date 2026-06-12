import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prev=> prev + 1)
    }
    
    return (
        <div>
            <Child count={count} handleClick={handleClick}/>
        </div>
    )
}

export default Parent;