// Checkboxes, Radio Buttons, and Toggles
// Create a checkbox that toggles a "Subscribed" message.
// Build a group of radio buttons and display the selected option below.
// Make a list of skills with checkboxes and display the selected skills.
// Create a dark mode toggle using a checkbox or switch.
// Show or hide a block of text with a "Show more / Show less" toggle.

import React from 'react';

const Task1 = () => {
    const [character, setCharacter] = useState('')

    return (
        <section className='p-32'>
            <textarea className='border text-[#838383]' maxLength={50} type="text" value={character} onChange={(e) => setCharacter(`${e.target.value}`)} />
            <button onClick={() => { setCharacter("") }}>Clear Input</button>
            <p>{character}</p>
            <p>Character Count: {character.length === 0 ? "" : character.length}</p>
            <p>Characters Left: {character.length === 0 ? '' : 50 - character.length}</p>
            <p className='text-sm text-[#23b423]'>{character.length > 40 ? "the limit is 50 you have reached above 40 characters" : ""}</p>
        </section>
    )
}

export default Task1;