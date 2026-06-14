import {useState, useEffect} from 'react';

const Dashboard = () => {

    const [userData, setUserData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        const fetchUser = async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok) {
                    throw new Error("Fetch Failed")
                }
                const data = await response.json()
                setUserData(data);
            }catch(error){
                alert(error.message)
            }
        }
        fetchUser();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(search.trim()==="") return;
        setUserData(prev=>
            prev.filter(user=> user.name.toLowerCase().includes(search.toLowerCase()))
        )
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='search user' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            
            Hello World
            {userData.map(i=>(
                <p>{i.name}</p>
            ))}
        </div>
    )
}

export default Dashboard;