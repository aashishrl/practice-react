import { useState, useEffect } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    // setCount(2);
    
    const handleClick = () =>{
        setCount(count + 1);
        setCount(count + 10);
        console.log(count);
    }

    return(
        <div>            
            hello {count}
            <button onClick = {handleClick}>Click Me</button>
        </div>
    )
}

export default UseState;