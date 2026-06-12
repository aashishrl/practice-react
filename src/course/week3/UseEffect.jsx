// task 4

import {useState, useEffect} from 'react';

const UseEffect = () =>{

    const [search, setSearch] = useState("");

    useEffect(()=>{
        if(search===""){
            return
        }
        console.log(`Searched for: ${search}`)
    },[search])

    return (
        <div>
            <p>Hello You Searched for: {search}</p>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search someting' />

        </div>
    )
}

export default UseEffect;