import { useState } from 'react';


// Button Event Click
// const EventHandling = () => {
//     const [count, setCount] = useState(0)
//     const handleClick = () => {
//         const newValue = count + 1;
//         setCount(newValue);
//         alert(`I am Clicked ${newValue} times`);
//     }

//     return(
//         <section className="p-32">
//             <button onClick={handleClick}>Click Me</button>
//         </section>
//     )
// }
// export default EventHandling;

// Passing data to the event
// const EventHandling = () => {
//     const handleClick = (name) =>{
//         alert(`Hello ${name}`);
//     }

//     return(
//         <section className="p-32">
//             <button onClick={() => handleClick("John")}>Greet</button>
//         </section>
//     )
// }
// export default EventHandling;

// Handling Inputs event
// const EventHandling = () => {
//     const [inputValue, setInputValue] = useState("")
//     const handleChange = (e) => {
//         setInputValue(e.target.value)
//     }
//     return (
//         <section className='p-32'>
//             <p className='text-5xl text-center'>Hello World</p>
//             <div className='flex flex-col items-center justify-center mt-5'>
//                 <input type="text" onChange={handleChange} />
//                 <p>You just typed these: {inputValue}</p>
//             </div>
//         </section>
//     )
// }
// export default EventHandling;

// Form Submit Event

const EventHandling = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUserName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName === "" || password === "") {
            alert("Please fill all the fields");
            return;
        }
        console.log(`username:${userName} || password:${password}`)
        alert("form submit successful");
        setUserName("");
        setPassword("");
    }
    return (
        <section className='p-32'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col items-center justify-center h-screen mt-5 bg-amber-200'>
                    <input type="text" placeholder='Username' value={userName} onChange={handleUsername} className='mb-3' />
                    <input type="password" placeholder='Password' value={password} onChange={handlePassword} className='mb-3' />
                    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
                </div>
            </form>
        </section>
    )
}
export default EventHandling;