import React,{useState, useEffect} from 'react';
import Avatar from './Avatar';
const Revise = () => {    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("Fetch Failed"); 
                }
                const data = await response.json();
                console.log(data);
                setData(data)
                setLoading(false)
            }catch(error){
                setError(error.message)
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        fetchData();
    },[])
    
    return (
        <section className={`min-h-screen h-fit w-full bg-amber-300 p-10`}>
            <div className="w-full p-4 mb-4 bg-white">
                <Avatar img="https://images.pexels.com/photos/16450745/pexels-photo-16450745.jpeg" userName="Ram Saran"/>
            </div>            
            <div className='flex flex-col gap-4'>
                {loading?(
                    <p>Loading...</p>
                ):(
                    data.length===0?(<p>No User Data</p>):(
                        data.map((i)=>(
                            <div key={i.id}>
                                <p>{i.name}</p>
                                <p>{i.email}</p>
                            </div>
                        ))
                    )
                )}
            </div>
            
        </section>
    )
}
export default Revise;

