import {useState,useEffect} from 'react';

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
        })
        .then((data)=>{
            console.log("data fetch success ful", data)
        })
        .catch((err)=>{
            console.log("fetch failed error:", err)
        })

        
    },[])

    return data, loading;
}

export default useFetch;