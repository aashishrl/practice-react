import useFetch from './useFetch'

const User = ()=>{

    const {data} = useFetch();
    
    useFetch("https://dummyjson.com/users/1")
    return (
        // <h1>Hello world {data.id}</h1>
        <h1>Hello world</h1>

    )
}

export default User;