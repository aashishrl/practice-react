import { useRef } from "react";

// const UseRef = () => {
//     const inputRef = useRef();

//     console.log(inputRef);
    
//     const handleClick = () => {        
//         console.log(inputRef.current.value);

//     }
    
//     return (
//         <section className="flex gap-2 p-20">
//             <input type="text" ref={inputRef}/>
//             <button onClick={handleClick}>Click Me to focus on input</button>
//         </section>
        
//     )
// }

const UseRef = () => {
    const countRef = useRef(0);

    let a = 2;
    a++;
    console.log(a);

    const handleClick = () => {
        countRef.current += 1;
        console.log(countRef.current);
    }
    
    return (
        <section className="flex gap-2 p-20">
            <button onClick={handleClick}>Click Me</button>
            
        </section>
        
    )
}

export default UseRef;