import {useState, useEffect} from 'react';

const Fetching = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchUser = async () =>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                    throw new Error ("Server Error")
                }
                const userData = await response.json();
                userData.length = 0;
                setData(userData);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchUser();
    },[])

    const FetchingGroup = () =>{
        if(loading){
            return <p>Loading...</p>
        }
        if(error){
            return <p>{error}</p>
        }
        if(data.length===0){
            return <p>No user Data</p>
        }

        return(
            <>
                {data.map((i)=>(
                    <p key={i.id}>{i.name}</p>
                ))}
            </>
        )
    }
    
    
    return (
        <>
            <div>
                <p>Search User by name, username, email, city</p>
                <input type="text" placeholder='search user' />
            </div>
            <FetchingGroup/>
            
        </>
    )
}

export default Fetching;