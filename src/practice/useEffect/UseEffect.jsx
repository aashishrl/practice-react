// 🧩 Beginner Level
// Create a component that logs "Component mounted!" to the console only once when it first loads.
// Display the current time on the screen and update it every second.
// Change the background color of the page every 3 seconds using setInterval.
// Show a message "Component unmounted!" in the console when the component is removed from the page.
// Update the document title to show how many times a button has been clicked.

// ⚙️ Intermediate Level
// Fetch and display a list of users from an API when the component loads.
// Create an input box that updates a piece of state. Use useEffect to log the current input value every time it changes.
// Build a small “Online/Offline” indicator that listens to the browser’s online/offline events using useEffect.
// Use useEffect to start a timer when the page loads and stop it when the component unmounts.
// Create a counter that saves its value to localStorage whenever it changes.

// 🚀 Advanced Level
// Fetch data from an API every 10 seconds (like auto-refresh) and stop fetching when the component unmounts.
// Implement a search bar that waits 1 second after typing before making an API call (debouncing).
// Build a component that listens for window resize and displays the screen width in real time.
// Use useEffect to subscribe to a WebSocket or mock a live data feed (e.g., stock prices).
// Create a custom hook called useDocumentTitle(title) that updates the document title whenever the title changes.


import { p, section } from 'framer-motion/client';
import { useState, useEffect, useRef } from 'react';

// Create a component that logs "Component mounted!" to the console only once when it first loads.
// const Practice1 = () =>{

//     useEffect(()=>{
//         console.log('component mounted!')
//     },[]);

//     return (
//         <section className='p-32'>
//         <h1>Hello World</h1>
//         </section>
//     )
// }
// export default Practice1;

// Display the current time on the screen and update it every second.
// const Practice2 = () => {
//     const [time, setTime] = useState(new Date())

//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             setTime(new Date())
//         }, 1000);

//         return () => {clearInterval(timer)};
//     },[]);
//     return (
//         <section className='p-32'>
//             <h1>Hello World</h1>
//             <p>Current Time: {time.toLocaleTimeString()}</p>
//         </section>
//     )
// }
// export default Practice2;

// Change the background color of the page every 3 seconds using setInterval.

// const Practice3 = () =>{
//     // const colors = ['#7C0000', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];

//     const [title, setTitle] = useState(document.title);

//     useEffect(()=>{
//         setTitle("check check");
//         console.log(title);
//     },[title])

//     const onClick = () => {
//         setTitle(prevTitle => prevTitle + "!");
//     }

//     return (
//         <section className={`p-32`}>
//             <h1>Hello World</h1>
//             <button onClick={onClick}>Change Title</button>
//         </section>
//     );
// }
// export default Practice3;

// Fetch and display a list of users from an API when the component loads.

// const Practice4 = () =>{

//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         fetch('https://dummyjson.com/users/1')
//         .then(res => res.json())
//         .then(data => setUser(data))
//     }, [])

//     return (
//         <section className={`p-32`}>
//             <h1>Hello World</h1>

//             <p>{user.id}</p>
//         </section>
//     )
// }
// export default Practice4;


// Create an input box that updates a piece of state. Use useEffect to log the current input value every time it changes.

// const Practice4 = () => {
//     const [value, setValue] = useState("");

//     const onChange = (e) => {
//         setValue(e.target.value);
//     }

//     useEffect(() => { 
//         console.log(`input value updates ${value}`) 

//         return () => {value}
//     }, [value])

//     return (
//         <section className={`p-32`}>
//             <h1>Hello World New Task</h1>
//             <input className='border' placeholder='what up' type="text" value={value} onChange={onChange} />
//             <p>Input Value: {value}</p>
//         </section>
//     )
// }
// export default Practice4;

// Use useEffect to start a timer when the page loads and stop it when the component unmounts.
// const Practice4 = () => {
//     const [time, setTime] = useState(0);
    
//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             setTime(prev => prev + 1)
//         },1000)

//         return () => clearInterval(timer)
//     },[])

//     return (
//         <section className={`p-32`}>
//             <h1>Timer: {time}</h1>
//         </section>
//     );
// };
// export default Practice4;


// Build a small “Online/Offline” indicator that listens to the browser’s online/offline events using useEffect.

// import { useState, useEffect } from "react";

// const Practice4 = () => {
//   const [isOnline, setIsOnline] = useState(navigator.onLine); // initial status

//   useEffect(() => {
//     // Handler functions
//     const goOnline = () => setIsOnline(true);
//     const goOffline = () => setIsOnline(false);

//     // Subscribe to browser events
//     window.addEventListener("online", () => {
//         goOnline();
//         console.log("Back online");
//     });
//     window.addEventListener("offline", () => {
//         goOffline();
//         console.log("Went offline");
//     });

//     // Cleanup function to unsubscribe
//     return () => {
//       window.removeEventListener("online", goOnline);
//       window.removeEventListener("offline", goOffline);
//     };
//   }, []);

// // console.log(navigator.onLine);

// return (
//     <div
//       style={{
//         padding: "20px",
//         color: "white",
//         backgroundColor: isOnline ? "green" : "red",
//         width: "fit-content",
//         borderRadius: "5px",
//       }}
//     >
//       {isOnline ? "Online" : "Offline"}
//       <h1>Check Check</h1>
      
//     </div>
//   );
// };

// export default Practice4;


// const IPractice1 = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   // https://jsonplaceholder.typicode.com/posts
//   // Fetch data from an API every 10 seconds (like auto-refresh) and stop fetching when the component unmounts.

//   useEffect(()=>{
//     const fetch = async() =>{
//       setLoading(true)
//       try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")

//         if(!response.ok){
//           throw new Error(response.status)
//         }
        
//         const data = await response.json();
        

//         return setData(data);
        
//       }
//       catch(error){
//         setError(error.message)
//         console.log(error)
//       }
//       finally{setLoading(false)}
//     }

//     fetch();
//     const interval = setInterval(fetch, 10000)

//     return () => clearInterval(interval);
    
//   },[])
  
//   if(loading) {return <p>Loading...</p>}
//   if(error) {return <p>Error: {error}</p>}

//   // fetchData();

//   return (
//     <>
//         <h1>Hello World</h1>
//         {data?(data.map(item => (
//           <p key={item.id}>{item.id}</p>
//         ))):"Data not found"}
//     </>
//   )
// }

// export default IPractice1;


// Implement a search bar that waits 1 second after typing before making an API call (debouncing).

const IPractice2 = () => {

  const refCheck = useRef(0);

  const socket = new WebSocket("wss://echo.websocket.events");

  console.log(socket);

  const handleAdd = () =>{
    refCheck.current += 1
    console.log(refCheck.current)
  }
  return (
    <section className='p-10'>
      <p>Value</p>
      <button onClick = {handleAdd}>Add Number</button>
      
    </section>
  )
}

export default IPractice2;



// Mock function to simulate a WebSocket feed (e.g., stock prices)
// function mockStockPriceFeed(onData) {
//   let price = 100;
//   const interval = setInterval(() => {
//     // simulate price change
//     price += (Math.random() - 0.5) * 2;
//     onData(price.toFixed(2));
//   }, 1000);

//   // Return cleanup function
//   return () => clearInterval(interval);
// }

// export default function LiveStockTicker() {
//   const [price, setPrice] = useState(null);

//   useEffect(() => {
//     // Subscribe to "WebSocket" (or mock feed)
//     const unsubscribe = mockStockPriceFeed((newPrice) => {
//       setPrice(newPrice);
//     });

//     // Cleanup on unmount
//     return () => {
//       unsubscribe();
//     };
//   }, []); // empty dependency array → subscribe once on mount

//   return (
//     <div>
//       <h2>Live Stock Price</h2>
//       <p>{price ? `$${price}` : "Loading..."}</p>
//     </div>
//   );
// }





// import React, { useState, useEffect, useRef } from "react";

// export default function LiveWebSocketFeed() {
//   const [feed, setFeed] = useState([]); // Store the incoming messages
//   const wsRef = useRef(null); // Keep a reference to the WebSocket
//   const reconnectTimeout = useRef(null); // Reference to reconnect timer

//   const connect = () => {
//     // 1️⃣ Create a new WebSocket connection
//     wsRef.current = new WebSocket("wss://example.com/live"); // Replace with your WS URL

//     // 2️⃣ Handle incoming messages
//     wsRef.current.onmessage = (event) => {
//       try {
//         const data = JSON.parse(event.data); // Parse JSON payload
//         setFeed((prev) => [data, ...prev].slice(0, 10)); // Keep last 10 items
//       } catch (err) {
//         console.error("Invalid JSON:", event.data);
//       }
//     };

//     // 3️⃣ Handle errors
//     wsRef.current.onerror = (err) => {
//       console.error("WebSocket error:", err);
//       wsRef.current.close(); // Close connection to trigger reconnect
//     };

//     // 4️⃣ Handle connection close (attempt reconnect)
//     wsRef.current.onclose = () => {
//       console.log("WebSocket closed, reconnecting in 3s...");
//       reconnectTimeout.current = setTimeout(connect, 3000); // retry after 3s
//     };
//   };

//   useEffect(() => {
//     connect(); // Start connection on mount

//     // 5️⃣ Cleanup on unmount
//     return () => {
//       if (wsRef.current) wsRef.current.close(); // Close WS
//       if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current); // Clear pending reconnect
//     };
//   }, []); // Empty array → run only once

//   return (
//     <div>
//       <h2>Live WebSocket Feed</h2>
//       <ul>
//         {feed.map((item, index) => (
//           <li key={index}>{JSON.stringify(item)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
