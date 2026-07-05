import {useEffect, useState} from 'react';

const MiniDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        const fetchPost = async () =>{
            setLoading(true)
            setError(null)
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!response.ok) {
                    throw new Error("Check network or try again later")
                }
                const result = response.json();
                console.log(response.json())
                console.log(result)

            }catch(error){
                console.log(error.message)
            }
        }
        fetchPost()
    },[])

    return (
        <>
        <div className="bg-amber-400">
            Hello World
        </div>
        </>
    )
}

export default MiniDashboard;