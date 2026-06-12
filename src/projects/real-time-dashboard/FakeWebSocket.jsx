import {useEffect, useState} from 'react';

const FakeWebSocket = () => {
  const [message, setMessage] = useState([])  
  const [status, setStatus] = useState("Connected")
  const [connection, setConnection] = useState(false);

  useEffect(()=>{
    let connectTimer;
    
    if(connection){
      setStatus("Connecting...")
      
      connectTimer = setTimeout(()=>{
        setStatus("Connected")
      },1000)      
    }else{
      setStatus("Disconnected")
      setMessage([])
    }

    return () => clearTimeout(connectTimer);
    
  },[connection])

  useEffect(()=>{
    if(!connection) return;
    
    const interval = setInterval(()=>{
      let newMessage = {
        id: Date.now(),
        text: "Message " + Math.floor(Math.random() * 100) 
      }

      setMessage(prev=> [...prev, newMessage])
    },1000)

    // console.log(newMessage)
    
    return () => clearInterval(interval);

  },[connection])
  
  return (
    <section>
      <p>Status: {status}</p>
      <button onClick={()=> setConnection(prev=> (
        !prev
        // console.log(status)
      ))}>
        {/* {status} */}
        {connection ? "Disconnect" : "Connect"}
      </button>
      <div className='mt-4'>
        {message.length===0?
        (<p className="text-sm text-gray-400">Message Not Found</p>):
        <ul>
          {message.map(i=>(
            <li key={i.id}>{i.text}</li>
          ))}
        </ul>
        }
      </div>
    </section>
  )
}

export default FakeWebSocket;