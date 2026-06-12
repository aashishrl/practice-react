// Working with Text & Inputs
// Create an input field that updates the state with the value the user types.
// Display a live preview of the text as the user types in the input.
// Make a form with two input fields: first name and last name. Display the full name below.
// Create a password input with a toggle to show/hide the password.
// Create an input that counts and displays the number of characters typed.

import React, { useState, useEffect } from 'react';


// const Task1 = () =>{

//     const [value, setValue] = useState("")

//     const inputValue = (e) =>{
//         setValue(e.target.value)
//     }

//     return (
//         <section className='p-32'>
//             <p>{value}</p>
//             <input type='text' onChange={inputValue} placeholder='Hello world' className='border'/>    
//         </section>
//     )
// }
// export default Task1;


// const Task2 = () => {
//     const [firstName, setFirstName]= useState("")
//     const [lastName, setLastName]= useState("")


//     return (
//         <section className='p-32'>
//             <input type='text' onChange={(e) => setFirstName(e.target.value)} placeholder='Enter First Name' className='border mr-4'/>
//             <input type='text' onChange={(e) => setLastName(e.target.value)} placeholder='Enter Last Name' className='border'/>
//             <p>FullName: {firstName} {lastName}</p>
//         </section>
//     )
// }
// export default Task2;


// const Task3 = () =>{
//     const [password, setPassword] = useState (true)

//     const toggleBtn = () =>{
//         setPassword(!password)
//     }

//     return(
//         <section className='p-32'>
//             <input type={password? "password" : "text"} className='border' />
//             <button onClick={toggleBtn} className='ml-2'>{password? "Show" : "Hide"}</button>
//         </section>
//     )
// }

// export default Task3;


// const Task4 = () => {
//     const [character, setCharacter] = useState('')

//     return (
//         <section className='p-32'>
//             <textarea className='border text-[#838383]' maxLength={50} type="text" value={character} onChange={(e) => setCharacter(`${e.target.value}`)} />
//             <button onClick={() => { setCharacter("") }}>Clear Input</button>
//             <p>{character}</p>
//             <p>Character Count: {character.length === 0 ? "" : character.length}</p>
//             <p>Characters Left: {character.length === 0 ? '' : 50 - character.length}</p>
//             <p className='text-sm text-[#23b423]'>{character.length > 40 ? "the limit is 50 you have reached above 40 characters" : ""}</p>
//         </section>
//     )
// }

// export default Task4;


// Checkboxes, Radio Buttons, and Toggles
// Create a checkbox that toggles a "Subscribed" message.
// Build a group of radio buttons and display the selected option below.
// Make a list of skills with checkboxes and display the selected skills.
// Create a dark mode toggle using a checkbox or switch.
// Show or hide a block of text with a "Show more / Show less" toggle.


// const Task5 = () => {
//     const [subscribe, setSubscribe] = useState(false)

//     const clickBtn = (e) =>{
//         setSubscribe(e.target.checked)
//     }

//     return (
//         <section className='p-32'>
//             <input type='checkbox' onChange={clickBtn}/>
//             <p>{subscribe?"subscribed":""}</p>
//         </section>
//     )
// }

// export default Task5;

// function Task6() {
//     const [gender, setGender] = useState("");

//     const chooseGender = (e) => {
//         setGender(e.target.value);
//     };

//     return (
//         <section className='p-32'>
//             <div>
//                 <input onChange={chooseGender} name='Gender' type="radio" value="Male" /> <span>Male</span>
//             </div>
//             <div>
//                 <input onChange={chooseGender} name='Gender' type="radio" value="Female" /> <span>Female</span>
//             </div>
//             <div>
//                 <input onChange={chooseGender} name='Gender' type="radio" value="Rather not say" /> <span>Rather not say</span>
//             </div>
//             <p>{gender}</p>
//         </section>
//     );
// }

// export default Task6;



// Make a list of skills with checkboxes and display the selected skills.

// const Task7 = () => {
//     const [selected, setSelected] = useState([])

//     const selectCheckbox = (e) =>{
//         setSelected()
//     }

//     const skills = ["frontend", "backend", "debugging", "qa"];

//     return (
//         <section className='p-32'>
//             {skills.map((skill) =>(
//                 <div key={skill}>
//                     <input id={skill} type="checkbox" value={skill} onChange={selectCheckbox}/>
//                     <label htmlFor={skill}>{skill}</label>
//                 </div>
//             ))}
//             <p>what is up what is up</p>
//             <p>{selected}</p>
//         </section>
//     );
// }

// export default Task7;



// const Task8 = () => {
//   const hobbies = ['coding', 'trekking', 'camping', 'hiking', 'reading']

//   const [selectedHobbies, setSelectedHobbies] = useState([])

//   const selecthobby = (hobby) => {
//     if (selectedHobbies.includes(hobby)) {
//       setSelectedHobbies(selectedHobbies.filter(h => h !== hobby))
//     }
//     else {
//       setSelectedHobbies([...selectedHobbies, hobby])
//     }
//   }

//   return (
//     <section className='p-32'>
//       {hobbies.map((hobby) => (
//         <p key={hobby} className='mb-2'>
//           <input
//             type='checkbox'
//             value={hobby}
//             checked={selectedHobbies.includes(hobby)}
//             onChange={() => selecthobby(hobby)}
//           /> {hobby}
//         </p>
//       ))}

//       <div className='mt-8'>
//         {selectedHobbies.length > 0 ? (
//           <ul>
//             {selectedHobbies.map((hobby) => (
//               <li key={hobby}>{hobby}</li>
//             ))}
//           </ul>
//         ) : (<p className='text-sm text-[#c5c5c5]'>hobbies not selected</p>)}


//       </div>

//     </section>
//   )
// }

// export default Task8;



// Create an input that counts and displays the number of characters typed.

const PracticeTask = () => {
    const [inputValue, setInputValue] = useState("Hello")
    return (
        <section className='p-32'>
            <input type="text" maxLength={50} className='border' value={inputValue} onChange={e=> setInputValue(e.target.value)}/>
            <p>Input Word Count: {inputValue.length == 0 ? "" : inputValue.length}</p>

        </section>
    )
}

export default PracticeTask;

